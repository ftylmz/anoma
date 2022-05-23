//! Useful for both the transaction side and validity predicate side
use borsh::BorshDeserialize;

use crate::proto::Signed;

#[allow(missing_docs)]
#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error("Couldn't Borsh-deserialize: {source}")]
    BorshDeserialization {
        #[from]
        source: std::io::Error,
    },
    #[error("Empty data")]
    EmptyData,
}

#[allow(missing_docs)]
pub type Result<T> = std::result::Result<T, Error>;

#[allow(missing_docs)]
pub fn to_signed(data: &[u8]) -> Result<Signed<Vec<u8>>> {
    let signed: Signed<Vec<u8>> = Signed::try_from_slice(data)
        .map_err(|err| Error::BorshDeserialization { source: err })?;
    if signed.data.is_empty() {
        return Err(Error::EmptyData);
    }
    Ok(signed)
}
