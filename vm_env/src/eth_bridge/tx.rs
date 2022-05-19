use anoma::ledger::eth_bridge::{data, storage};
use anoma::types::transaction::eth_bridge::{
    TransferFromEthereum, UpdateQueue,
};
use eyre::{eyre, Result};

use crate::imports::tx;
use crate::tx_prelude::log_string;

const TX_NAME: &str = "tx_update_queue";

fn log(msg: &str) {
    log_string(format!("[{}] {}", TX_NAME, msg))
}

fn fatal_msg(msg: &str) -> ! {
    log(msg);
    panic!()
}

pub fn apply_tx(tx_data: Vec<u8>) {
    ensure_queue_initialized();
    if let Err(error) = apply_tx_aux(tx_data) {
        fatal_msg(&format!("ERROR: {:?}", error));
    }
}

pub fn apply_tx_aux(tx_data: Vec<u8>) -> Result<()> {
    log(&format!("called with tx_data - {} bytes", tx_data.len()));
    let update = deserialize(&tx_data)?;
    update_queue(update)
}

pub fn deserialize(data: &[u8]) -> Result<UpdateQueue> {
    let signed = data::to_signed(data)?;
    log(&format!("got signed - {} bytes", signed.data.len()));
    // we don't verify the signature here - the VP should do that
    let strct = data::to_update_queue(&signed.data)?;
    log(&format!("deserialized data to: {:#?}", strct));
    Ok(strct)
}

/// Ensures the /queue is initialized
/// TODO: this should be it's own transaction, not in the general update_queue
/// transaction
pub fn ensure_queue_initialized() {
    let queue_key = storage::queue_key();
    if tx::has_key(queue_key.to_string()) {
        log("queue is present");
        return;
    }
    log("initializing queue for the first time");
    tx::write(queue_key.to_string(), Vec::<TransferFromEthereum>::new());
}

pub fn update_queue(update: UpdateQueue) -> Result<()> {
    log(&format!(
        "update_queue tx being executed ({} messages to enqueue)",
        update.enqueue.len()
    ));
    let queue_key = storage::queue_key();
    let queue: Vec<TransferFromEthereum> = match tx::read(queue_key.to_string())
    {
        Some(queue) => queue,
        None => return Err(eyre!("Couldn't deserialize queue!")),
    };
    log(&format!("got queue: {} element(s)", queue.len()));

    update_min_confirmations()?;
    dequeue_and_mint()?;
    enqueue_new_transfers(queue, update.enqueue)?;
    Ok(())
}

pub fn update_min_confirmations() -> Result<()> {
    // TODO: dequeue and mint wrapped Ethereum assets first before pushing
    // new transfers
    log("TODO - update minimum confirmations for existing transfers");
    Ok(())
}

pub fn dequeue_and_mint() -> Result<()> {
    // TODO: dequeue and mint wrapped Ethereum assets first before pushing
    // new transfers
    log("TODO - dequeue and mint wrapped Ethereum assets as appropriate");
    Ok(())
}

pub fn enqueue_new_transfers(
    mut queue: Vec<TransferFromEthereum>,
    enqueue: Vec<TransferFromEthereum>,
) -> Result<()> {
    let queue_key = storage::queue_key();
    for transfer in enqueue {
        queue.push(transfer);
    }
    tx::write(queue_key.to_string(), queue);
    Ok(())
}
