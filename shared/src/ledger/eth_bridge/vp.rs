//! Validity predicate for the Ethereum bridge

use std::collections::BTreeSet;

use anoma_proof_of_stake::PosBase;
use borsh::BorshDeserialize;

use super::storage;
use crate::ledger::native_vp::{Ctx, NativeVp};
use crate::ledger::storage as ledger_storage;
use crate::ledger::storage::StorageHasher;
use crate::proto::Signed;
use crate::types::address::{Address, InternalAddress};
use crate::types::key::{common, protocol_pk_key, SigScheme};
use crate::types::storage::Key;
use crate::vm::WasmCacheAccess;

/// Internal address for the Ethereum bridge VP
pub const ADDRESS: Address = Address::Internal(InternalAddress::EthBridge);

/// Validity predicate for the Ethereum bridge
pub struct EthBridge<'ctx, DB, H, CA>
where
    DB: ledger_storage::DB + for<'iter> ledger_storage::DBIter<'iter>,
    H: StorageHasher,
    CA: 'static + WasmCacheAccess,
{
    /// Context to interact with the host structures.
    pub ctx: Ctx<'ctx, DB, H, CA>,
}

/// Errors that may be returned by this module
#[derive(thiserror::Error, Debug)]
pub enum Error {
    /// Opaque error that we return to any callers
    /// We should log details of any errors we encounter in this module
    #[error("Internal error")]
    Internal,
}

impl<'a, DB, H, CA> NativeVp for EthBridge<'a, DB, H, CA>
where
    DB: 'static + ledger_storage::DB + for<'iter> ledger_storage::DBIter<'iter>,
    H: 'static + StorageHasher,
    CA: 'static + WasmCacheAccess,
{
    type Error = Error;

    const ADDR: InternalAddress = InternalAddress::EthBridge;

    fn validate_tx(
        &self,
        tx_data: &[u8],
        keys_changed: &BTreeSet<Key>,
        verifiers: &BTreeSet<Address>,
    ) -> Result<bool, Self::Error> {
        tracing::info!(
            tx_data_len = tx_data.len(),
            keys_changed_len = keys_changed.len(),
            verifiers_len = verifiers.len(),
            "Validity predicate triggered",
        );
        if !validate_keys_changed(keys_changed) {
            return Ok(false);
        }
        let signed: Signed<Vec<u8>> =
            match Signed::<Vec<u8>>::try_from_slice(tx_data) {
                Ok(signed) => {
                    tracing::debug!(
                        len = signed.data.len(),
                        "deserialized signed data"
                    );
                    signed
                }
                Err(error) => {
                    tracing::warn!(?error, "couldn't deserialize signed data");
                    return Ok(false);
                }
            };
        if signed.data.is_empty() {
            tracing::warn!("data is empty");
            return Ok(false);
        }

        let epoch = match self.ctx.get_block_epoch() {
            Ok(epoch) => epoch,
            Err(error) => {
                tracing::error!(?error, "couldn't get block epoch");
                return Err(Error::Internal);
            }
        };
        let validator_set = self.ctx.storage.read_validator_set();
        let epoch_validators = match validator_set.get(epoch) {
            None => {
                tracing::error!(%epoch, "got no validators for epoch");
                return Err(Error::Internal);
            }
            Some(validators) => validators,
        };
        let active_protocol_keys: Vec<_> = epoch_validators.active
            .iter()
            .map(|validator| {
                let storage_key = protocol_pk_key(&validator.address);
                let value = match self.ctx.storage.read(&storage_key) {
                    Ok((maybe_bytes, _)) => match maybe_bytes {
                        Some(bytes) => bytes,
                        None => {
                            tracing::error!(?validator.address, "read storage for validator's public key but it was empty");
                            return None
                        }
                    },
                    Err(error) => {
                        tracing::error!(?error, ?validator.address, "couldn't read storage to get validator's public key");
                        return None
                    }
                };
                let public_key = match common::PublicKey::try_from_slice(&value) {
                    Ok(pub_key) => pub_key,
                    Err(error) => {
                        tracing::error!(?error, ?validator.address, "couldn't deserialize public key for validator");
                        return None
                    }
                };
                tracing::debug!(?validator.address, ?public_key, "got public key for validator");
                Some((&validator.address, public_key))
            })
            .collect();

        for apk in active_protocol_keys {
            if apk.is_none() {
                // ? should we terminate early here instead if any active
                // validator keys weren't able to be gotten from storage?
                continue;
            }
            let (validator_addr, public_key) = apk.unwrap();

            match common::SigScheme::verify_signature(
                &public_key,
                &signed.data,
                &signed.sig,
            ) {
                Ok(()) => {
                    tracing::info!(validator.address = ?validator_addr, "signature matches active validator");
                    return Ok(true);
                }
                Err(error) => {
                    tracing::debug!(related_error = ?error, validator.address = ?validator_addr, "signature did not verify for this specific active validator");
                    continue;
                }
            }
        }
        tracing::warn!(
            "attempt was made to modify EthBridge VP storage that was not \
             signed by any active validator"
        );
        Ok(false)
    }
}

fn validate_keys_changed(keys_changed: &BTreeSet<Key>) -> bool {
    // TODO: have a const set of `keys_changed` which is just
    // {"#EthBridge/queue"} and compare against that instead of this procedural
    // way
    for key in keys_changed {
        if !storage::queue_key().eq(key) {
            tracing::info!(
                key = key.to_string().as_str(),
                "Rejecting change to key",
            );
            return false;
        }
    }
    if keys_changed.len() != 1 {
        // i.e. only /queue key present
        return false;
    }
    true
}

#[cfg(test)]
mod test {
    use std::collections::BTreeSet;

    use super::storage;
    use crate::ledger::eth_bridge::vp::validate_keys_changed;
    use crate::types::storage::Key;

    #[test]
    fn test_validate_keys_changed() {
        let queue_only = {
            let mut set = BTreeSet::<Key>::default();
            set.insert(storage::queue_key());
            set
        };
        assert!(validate_keys_changed(&queue_only));

        let empty = BTreeSet::<Key>::default();
        assert!(!validate_keys_changed(&empty));
    }
}
