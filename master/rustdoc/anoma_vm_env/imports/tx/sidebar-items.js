initSidebarItems({"derive":[["BorshDeserialize",""],["BorshSerialize",""]],"fn":[["delete","Delete a value at the given key from storage."],["emit_ibc_event","Emit an IBC event. There can be only one event per transaction. On multiple calls, only the last emitted event will be used."],["get_block_epoch","Get epoch of the current block"],["get_block_hash","Get hash of the current block"],["get_block_height","Get height of the current block"],["get_block_time","Get time of the current block header as rfc 3339 string"],["get_chain_id","Get the chain ID"],["has_key","Check if the given key is present in storage."],["init_account",""],["insert_verifier","Insert a verifier address. This address must exist on chain, otherwise the transaction will be rejected."],["iter_prefix","Get an iterator with the given prefix."],["log_string","Log a string. The message will be printed at the `tracing::Level::Info`."],["read","Try to read a Borsh encoded variable-length value at the given key from storage."],["read_bytes","Try to read a variable-length value as bytes at the given key from storage."],["update_validity_predicate","Update a validity predicate"],["write","Write a value to be encoded with Borsh at the given key to storage."],["write_bytes","Write a value as bytes at the given key to storage."]],"struct":[["KeyValIterator",""]],"trait":[["BorshDeserialize","A data-structure that can be de-serialized from binary format by NBOR."],["BorshSerialize","A data-structure that can be serialized into binary format by NBOR."]]});