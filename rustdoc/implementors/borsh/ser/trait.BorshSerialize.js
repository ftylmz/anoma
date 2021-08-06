(function() {var implementors = {};
implementors["anoma"] = [{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/ledger/parameters/struct.Parameters.html\" title=\"struct anoma::ledger::parameters::Parameters\">Parameters</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/ledger/parameters/struct.EpochDuration.html\" title=\"struct anoma::ledger::parameters::EpochDuration\">EpochDuration</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::ledger::parameters::Parameters"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/ledger/parameters/struct.EpochDuration.html\" title=\"struct anoma::ledger::parameters::EpochDuration\">EpochDuration</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/time/struct.DurationSecs.html\" title=\"struct anoma::types::time::DurationSecs\">DurationSecs</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::ledger::parameters::EpochDuration"]},{"text":"impl BorshSerialize for <a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/address/struct.EstablishedAddress.html\" title=\"struct anoma::types::address::EstablishedAddress\">EstablishedAddress</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.ImplicitAddress.html\" title=\"enum anoma::types::address::ImplicitAddress\">ImplicitAddress</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.InternalAddress.html\" title=\"enum anoma::types::address::InternalAddress\">InternalAddress</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::address::Address"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/address/struct.EstablishedAddress.html\" title=\"struct anoma::types::address::EstablishedAddress\">EstablishedAddress</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::address::EstablishedAddress"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/address/struct.EstablishedAddressGen.html\" title=\"struct anoma::types::address::EstablishedAddressGen\">EstablishedAddressGen</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::address::EstablishedAddressGen"]},{"text":"impl BorshSerialize for <a class=\"enum\" href=\"anoma/types/address/enum.ImplicitAddress.html\" title=\"enum anoma::types::address::ImplicitAddress\">ImplicitAddress</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/key/ed25519/struct.PublicKeyHash.html\" title=\"struct anoma::types::key::ed25519::PublicKeyHash\">PublicKeyHash</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::address::ImplicitAddress"]},{"text":"impl BorshSerialize for <a class=\"enum\" href=\"anoma/types/address/enum.InternalAddress.html\" title=\"enum anoma::types::address::InternalAddress\">InternalAddress</a>","synthetic":false,"types":["anoma::types::address::InternalAddress"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/ibc/struct.ClientCreationData.html\" title=\"struct anoma::types::ibc::ClientCreationData\">ClientCreationData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::ibc::ClientCreationData"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/ibc/struct.ClientUpdateData.html\" title=\"struct anoma::types::ibc::ClientUpdateData\">ClientUpdateData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::ibc::ClientUpdateData"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/ibc/struct.ClientUpgradeData.html\" title=\"struct anoma::types::ibc::ClientUpgradeData\">ClientUpgradeData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::ibc::ClientUpgradeData"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/ibc/struct.ConnectionOpenInitData.html\" title=\"struct anoma::types::ibc::ConnectionOpenInitData\">ConnectionOpenInitData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/time/struct.DurationNanos.html\" title=\"struct anoma::types::time::DurationNanos\">DurationNanos</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::ibc::ConnectionOpenInitData"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/ibc/struct.ConnectionOpenTryData.html\" title=\"struct anoma::types::ibc::ConnectionOpenTryData\">ConnectionOpenTryData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/time/struct.DurationNanos.html\" title=\"struct anoma::types::time::DurationNanos\">DurationNanos</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::ibc::ConnectionOpenTryData"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/ibc/struct.ConnectionOpenAckData.html\" title=\"struct anoma::types::ibc::ConnectionOpenAckData\">ConnectionOpenAckData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::ibc::ConnectionOpenAckData"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/ibc/struct.ConnectionOpenConfirmData.html\" title=\"struct anoma::types::ibc::ConnectionOpenConfirmData\">ConnectionOpenConfirmData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::ibc::ConnectionOpenConfirmData"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/intent/struct.Intent.html\" title=\"struct anoma::types::intent::Intent\">Intent</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/token/struct.Amount.html\" title=\"struct anoma::types::token::Amount\">Amount</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/token/struct.Amount.html\" title=\"struct anoma::types::token::Amount\">Amount</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::intent::Intent"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/intent/struct.IntentTransfers.html\" title=\"struct anoma::types::intent::IntentTransfers\">IntentTransfers</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;<a class=\"struct\" href=\"anoma/types/token/struct.Transfer.html\" title=\"struct anoma::types::token::Transfer\">Transfer</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>, <a class=\"struct\" href=\"anoma/types/key/ed25519/struct.Signed.html\" title=\"struct anoma::types::key::ed25519::Signed\">Signed</a>&lt;<a class=\"struct\" href=\"anoma/types/intent/struct.Intent.html\" title=\"struct anoma::types::intent::Intent\">Intent</a>&gt;&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::intent::IntentTransfers"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/key/ed25519/struct.PublicKeyHash.html\" title=\"struct anoma::types::key::ed25519::PublicKeyHash\">PublicKeyHash</a>","synthetic":false,"types":["anoma::types::key::ed25519::PublicKeyHash"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/key/ed25519/struct.SignedTxData.html\" title=\"struct anoma::types::key::ed25519::SignedTxData\">SignedTxData</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/key/ed25519/struct.Signature.html\" title=\"struct anoma::types::key::ed25519::Signature\">Signature</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::key::ed25519::SignedTxData"]},{"text":"impl&lt;T:&nbsp;BorshSerialize + BorshDeserialize&gt; BorshSerialize for <a class=\"struct\" href=\"anoma/types/key/ed25519/struct.Signed.html\" title=\"struct anoma::types::key::ed25519::Signed\">Signed</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/key/ed25519/struct.Signature.html\" title=\"struct anoma::types::key::ed25519::Signature\">Signature</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::key::ed25519::Signed"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/key/ed25519/struct.PublicKey.html\" title=\"struct anoma::types::key::ed25519::PublicKey\">PublicKey</a>","synthetic":false,"types":["anoma::types::key::ed25519::PublicKey"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/key/ed25519/struct.Signature.html\" title=\"struct anoma::types::key::ed25519::Signature\">Signature</a>","synthetic":false,"types":["anoma::types::key::ed25519::Signature"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/storage/struct.BlockHeight.html\" title=\"struct anoma::types::storage::BlockHeight\">BlockHeight</a>","synthetic":false,"types":["anoma::types::storage::BlockHeight"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/storage/struct.BlockHash.html\" title=\"struct anoma::types::storage::BlockHash\">BlockHash</a>","synthetic":false,"types":["anoma::types::storage::BlockHash"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/storage/struct.Key.html\" title=\"struct anoma::types::storage::Key\">Key</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"anoma/types/storage/enum.DbKeySeg.html\" title=\"enum anoma::types::storage::DbKeySeg\">DbKeySeg</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::storage::Key"]},{"text":"impl BorshSerialize for <a class=\"enum\" href=\"anoma/types/storage/enum.DbKeySeg.html\" title=\"enum anoma::types::storage::DbKeySeg\">DbKeySeg</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::storage::DbKeySeg"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/storage/struct.Epoch.html\" title=\"struct anoma::types::storage::Epoch\">Epoch</a>","synthetic":false,"types":["anoma::types::storage::Epoch"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/time/struct.DurationSecs.html\" title=\"struct anoma::types::time::DurationSecs\">DurationSecs</a>","synthetic":false,"types":["anoma::types::time::DurationSecs"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/time/struct.DurationNanos.html\" title=\"struct anoma::types::time::DurationNanos\">DurationNanos</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::time::DurationNanos"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/time/struct.DateTimeUtc.html\" title=\"struct anoma::types::time::DateTimeUtc\">DateTimeUtc</a>","synthetic":false,"types":["anoma::types::time::DateTimeUtc"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/token/struct.Amount.html\" title=\"struct anoma::types::token::Amount\">Amount</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::token::Amount"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/token/struct.Transfer.html\" title=\"struct anoma::types::token::Transfer\">Transfer</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/token/struct.Amount.html\" title=\"struct anoma::types::token::Amount\">Amount</a>: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::token::Transfer"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/transaction/struct.UpdateVp.html\" title=\"struct anoma::types::transaction::UpdateVp\">UpdateVp</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"anoma/types/address/enum.Address.html\" title=\"enum anoma::types::address::Address\">Address</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::transaction::UpdateVp"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/types/validity_predicate/struct.EvalVp.html\" title=\"struct anoma::types::validity_predicate::EvalVp\">EvalVp</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::types::validity_predicate::EvalVp"]},{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma/vm/types/struct.KeyVal.html\" title=\"struct anoma::vm::types::KeyVal\">KeyVal</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma::vm::types::KeyVal"]}];
implementors["anoma_apps"] = [{"text":"impl BorshSerialize for <a class=\"struct\" href=\"anoma_apps/node/ledger/rpc/struct.PrefixValue.html\" title=\"struct anoma_apps::node::ledger::rpc::PrefixValue\">PrefixValue</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma/types/storage/struct.Key.html\" title=\"struct anoma::types::storage::Key\">Key</a>: BorshSerialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"anoma_apps/std/vec/struct.Vec.html\" title=\"struct anoma_apps::std::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;: BorshSerialize,&nbsp;</span>","synthetic":false,"types":["anoma_apps::node::ledger::rpc::PrefixValue"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()