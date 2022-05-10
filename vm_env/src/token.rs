use std::collections::BTreeSet;

use anoma::types::address::{Address, InternalAddress};
use anoma::types::storage::Key;
use anoma::types::token;

/// Vp imports and functions.
pub mod vp {
    pub use anoma::types::token::*;

    use super::*;
    use crate::imports::vp::*;

    /// A token validity predicate.
    pub fn vp(
        ctx: &Ctx,
        token: &Address,
        keys_changed: &BTreeSet<Key>,
        verifiers: &BTreeSet<Address>,
    ) -> VpResult {
        let mut change: Change = 0;
        for key in keys_changed.iter() {
            match token::is_balance_key(token, key) {
                None => {
                    // deny any other keys
                    return reject();
                }
                Some(owner) => {
                    // accumulate the change
                    let pre: Amount = match owner {
                        Address::Internal(InternalAddress::IbcMint) => {
                            Amount::max()
                        }
                        Address::Internal(InternalAddress::IbcBurn) => {
                            Amount::default()
                        }
                        _ => ctx.read_pre(key)?.unwrap_or_default(),
                    };
                    let post: Amount = match owner {
                        Address::Internal(
                            InternalAddress::IbcMint | InternalAddress::IbcBurn,
                        ) => ctx.read_temp(key)?.unwrap_or_default(),
                        _ => ctx.read_post(key)?.unwrap_or_default(),
                    };
                    let this_change = post.change() - pre.change();
                    change += this_change;
                    // make sure that the spender approved the transaction
                    if this_change < 0 && !verifiers.contains(owner) {
                        return reject();
                    }
                }
            }
        }
        Ok(change == 0)
    }
}

/// Tx imports and functions.
pub mod tx {
    pub use anoma::types::token::*;

    use super::*;
    use crate::imports::tx;

    /// A token transfer that can be used in a transaction.
    pub fn transfer(
        src: &Address,
        dest: &Address,
        token: &Address,
        amount: Amount,
    ) {
        let src_key = token::balance_key(token, src);
        let dest_key = token::balance_key(token, dest);
        let src_bal: Option<Amount> = tx::read(&src_key.to_string());
        let mut src_bal = src_bal.unwrap_or_else(|| match src {
            Address::Internal(InternalAddress::IbcMint) => Amount::max(),
            _ => {
                tx::log_string(format!("src {} has no balance", src));
                unreachable!()
            }
        });
        src_bal.spend(&amount);
        let mut dest_bal: Amount =
            tx::read(&dest_key.to_string()).unwrap_or_default();
        dest_bal.receive(&amount);
        match src {
            Address::Internal(InternalAddress::IbcMint) => {
                tx::write_temp(&src_key.to_string(), src_bal)
            }
            Address::Internal(InternalAddress::IbcBurn) => {
                tx::log_string("invalid transfer from the burn address");
                unreachable!()
            }
            _ => tx::write(&src_key.to_string(), src_bal),
        }
        match dest {
            Address::Internal(InternalAddress::IbcMint) => {
                tx::log_string("invalid transfer to the mint address");
                unreachable!()
            }
            Address::Internal(InternalAddress::IbcBurn) => {
                tx::write_temp(&dest_key.to_string(), dest_bal)
            }
            _ => tx::write(&dest_key.to_string(), dest_bal),
        }
    }
}
