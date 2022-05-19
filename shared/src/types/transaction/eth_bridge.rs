use borsh::{BorshDeserialize, BorshSerialize};
use serde::{Deserialize, Serialize};

use crate::types::address::Address;
use crate::types::token::Amount;

/// Useful ethereum types
pub mod ethereum {
    use borsh::{BorshDeserialize, BorshSerialize};
    use serde::{Deserialize, Serialize};

    use crate::types::hash::Hash;

    /// The height of a block
    pub type BlockHeight = u64;
    /// The hash of a block
    pub type BlockHash = Hash;

    // TODO: use a better type for Ethereum address than String
    /// Represents an address on an Ethereum blockchain
    #[derive(
        Debug,
        Clone,
        PartialEq,
        Serialize,
        Deserialize,
        BorshSerialize,
        BorshDeserialize,
    )]
    pub struct Address(String);

    /// Any Ethereum fungible asset
    #[derive(
        Debug,
        Clone,
        PartialEq,
        Serialize,
        Deserialize,
        BorshSerialize,
        BorshDeserialize,
    )]
    pub enum FungibleAsset {
        /// Native ETH
        Eth,
        /// ERC20 tokens
        Erc20(Address),
    }

    /// Represents a block
    #[derive(
        Debug,
        Clone,
        PartialEq,
        Serialize,
        Deserialize,
        BorshSerialize,
        BorshDeserialize,
    )]
    pub struct Block {
        /// Height of the block
        pub height: BlockHeight,
        /// Hash of the block
        pub hash: BlockHash,
    }
}

/// Represents a transfer from Ethereum
#[derive(
    Debug,
    Clone,
    PartialEq,
    Serialize,
    Deserialize,
    BorshSerialize,
    BorshDeserialize,
)]
pub struct TransferFromEthereum {
    /// The specific asset being transferred
    pub asset: ethereum::FungibleAsset,
    /// the address on Namada receiving the tokens
    pub receiver: Address,
    /// the amount of the asset to mint
    pub amount: Amount,
    /// minimum number of confirmations needed for mints
    pub min_confirmations: u8,
    /// height of the block at which the message appeared
    pub seen: ethereum::BlockHeight,
    /// the hash & height of the last descendant block marked as `seen`
    pub latest_descendant: ethereum::Block,
}

/// Contains information to update the queue
#[derive(
    Debug,
    Clone,
    PartialEq,
    Serialize,
    Deserialize,
    BorshSerialize,
    BorshDeserialize,
)]
pub struct UpdateQueue {
    /// New transfers to add to the queue
    pub enqueue: Vec<TransferFromEthereum>,
}

impl UpdateQueue {
    /// Creates a new queue containing the passed transfers
    pub fn new(transfers: impl Into<Vec<TransferFromEthereum>>) -> Self {
        UpdateQueue {
            enqueue: transfers.into(),
        }
    }
}
