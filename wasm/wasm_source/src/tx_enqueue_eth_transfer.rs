use anoma_tx_prelude::{eth_bridge, transaction};

#[transaction]
fn apply_tx(tx_data: Vec<u8>) {
    eth_bridge::apply_tx(tx_data);
}
