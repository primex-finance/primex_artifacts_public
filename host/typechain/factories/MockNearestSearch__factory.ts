/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockNearestSearch,
  MockNearestSearchInterface,
} from "../MockNearestSearch";

const _abi = [
  {
    inputs: [],
    name: "DS_MATH_ADD_OVERFLOW",
    type: "error",
  },
  {
    inputs: [],
    name: "DS_MATH_MUL_OVERFLOW",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "activateBonus",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bucketBonusCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "deactivateBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getAccumulatedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getAvailableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getBonus",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nftId",
            type: "uint256",
          },
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accumulatedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimedAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IFeeExecutorStorage.ActivatedBonus",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "indexes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPMXBonusNFT",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_primexDNS",
        type: "address",
      },
      {
        internalType: "contract IWhiteBlackList",
        name: "_whiteBlackList",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract IPMXBonusNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primexDNS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bonusDeadline",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_timetamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_currentIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "searchNearestIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_timestamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_indexes",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "setIndexes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxCount",
        type: "uint256",
      },
    ],
    name: "setMaxBonusCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tiers",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
        ],
        internalType: "struct IFeeExecutorStorage.NFTBonusParams[]",
        name: "_bonuses",
        type: "tuple[]",
      },
    ],
    name: "setTierBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tierBonus",
    outputs: [
      {
        internalType: "uint256",
        name: "percent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "updateBonus",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "updateBonus",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_oldBalances",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currentIndex",
        type: "uint256",
      },
    ],
    name: "updateBonuses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "updatedTimestamps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608080604052346100c1576000549060ff8260081c1661006f575060ff80821603610034575b60405161172890816100c78239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610025565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe60806040908082526004918236101561001757600080fd5b600091823560e01c90816301ffc9a71461109757508063171a896414610fb157806319f6c21f14610ebb578063227a87dd14610e7a5780632911438d14610dd657806332353ae814610d0a5780633ce917ab14610ce75780633f4a2d2714610cbf5780633f4ba83a14610baf578063442b4a2614610afb5780634485b50114610a6b57806347ccca0214610a435780635c975abb14610a205780636f7ee4da146109df5780637b103999146109b75780638004298e146109935780638456cb591461086a5780639f8dbb7b14610855578063a13a944b146107ff578063bd6846aa14610650578063c34902631461063d578063c4ee936614610613578063ced3f029146105bb578063ec1dfe71146104535763f8c8765e1461013857600080fd5b3461044f57608036600319011261044f576001600160a01b03908335828116919082900361044b576101686111b7565b91610171611170565b6064358581168091036104475786549060ff92838360081c16159485809661043b575b8015610425575b156103cb5760ff198481166001178b5593866103ba575b50895498858a60081c16956101c6876113bf565b816bffffffffffffffffffffffff60a01b9416848254161790556101e9866113bf565b87516301ffc9a760e01b808252633694124d60e21b8e83015260209a91908b82602481885afa91821561038f578e9261039b575b508161033e575b816102d7575b50156102c7576102899798999a9b9c50168260ca54161760ca558160c954161760c95560cc54161760cc5561025e826113bf565b610267826113bf565b60018055610274826113bf565b61027d826113bf565b606554166065556113bf565b610291578380f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989261ff00191684555160018152a13880808380f35b885163044aa57560e41b81528d90fd5b8a51908152633df6cef760e01b8f82015290508a81602481895afa908115610334578d91610307575b503861022a565b61032791508b3d8d1161032d575b61031f8183611136565b810190611259565b38610300565b503d610315565b8a513d8f823e3d90fd5b90508d8a5190828252637965db0b60e01b908201528b816024818787165afa90811561038f578e91610372575b5090610224565b61038991508c8d3d1061032d5761031f8183611136565b3861036b565b8e8c51903d90823e3d90fd5b6103b39192508c8d3d1061032d5761031f8183611136565b903861021d565b61ffff1916610101178a55386101b2565b865162461bcd60e51b81526020818d0152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b15801561019b575060018585161461019b565b50600185851610610194565b8680fd5b8380fd5b5080fd5b503461044f578060031936011261044f5761046c6111a1565b918060e0835161047b81611103565b82815282602082015282858201528260608201528260808201528260a08201528260c0820152015260018060a01b038093168152610103602052818120818460c954169560248551809881936341f63bfd60e01b83528335908301525afa9485156105b157610100958591849161058f575b50511682526020528181209082519261050584611103565b825494858552806001850154169160208601928352600285015481870190815260038601549260608801938452608088019460058801549660a08a0197885260e0600760068b01549a60c08d019b8c5201549a01998a5286528351998a525116602089015251908701525160608601525160808501525160a08401525160c08301525160e0820152f35b6105ab91503d8086833e6105a38183611136565b8101906112ce565b386104ed565b83513d84823e3d90fd5b503461044f578060031936011261044f5760609181906001600160a01b036105e16111a1565b168152610100602052818120602435825260205220805491600260018301549201549181519384526020840152820152f35b823461063a57608036600319011261063a5761062d6111a1565b50610636611170565b5080f35b80fd5b503461044f5736600319011261063a5780f35b5082346107fb5760603660031901126107fb5761066b6111a1565b90602480359067ffffffffffffffff9081831161044757366023840112156104475782840135928284116107f757600592368386861b840101116107f3576044358181116107ef57366023820112156107ef57808701359182116107ef5783810190843691606085020101116107ef5760ca548951632474521560e21b81528089018c90523386820152602098916001600160a01b0391908a908290604490829086165afa9081156107e5578d916107c8575b50156107b9578388036107aa578b9997999716965b89811061073e578b80f35b610749818585611296565b351561079b57808860028d8f81908c8f610767610796998d8d611296565b96835261010081528d8d89868620941b0101358352522092803584558d81013560018501550135910155611271565b610733565b508951637000f68560e11b8152fd5b508951632aa3c3bf60e11b8152fd5b50895163036be76f60e61b8152fd5b6107df91508a3d8c1161032d5761031f8183611136565b8d61071e565b8c513d8f823e3d90fd5b8980fd5b8880fd5b8780fd5b8280fd5b503461044f578060031936011261044f576108186111a1565b6001600160a01b031682526101026020528082208054602435939084101561063a57506020926108479161122b565b91905490519160031b1c8152f35b823461063a57602036600319011261063a5780f35b5082346107fb57826003193601126107fb5760ca548251632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb8382015233602482015290602090829060449082906001600160a01b03165afa908115610986578491610968575b501561095a576065549060ff8216610924575060ff1916600117606555513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602090a180f35b606490602084519162461bcd60e51b8352820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152fd5b905163036be76f60e61b8152fd5b610980915060203d811161032d5761031f8183611136565b846108da565b50505051903d90823e3d90fd5b503461044f578060031936011261044f57906020916109b06111a1565b5051908152f35b503461044f578160031936011261044f5760ca5490516001600160a01b039091168152602090f35b503461044f57602036600319011261044f579081906001600160a01b03610a046111a1565b16815260cb602052206001815491015482519182526020820152f35b503461044f578160031936011261044f5760209060ff6065541690519015158152f35b503461044f578160031936011261044f5760c95490516001600160a01b039091168152602090f35b503461044f578060031936011261044f57610a846111a1565b610a8c6111b7565b60c95490916001600160a01b039182163303610aeb579284959282869360079616845261010360205282842091168352602052812091818355816001840155816002840155816003840155820155826005820155826006820155015580f35b8351632a4b45b760e11b81528690fd5b503461044f578060031936011261044f576001600160a01b0380610b1d6111a1565b168352610103602052818320906024848260c954168551928380926341f63bfd60e01b825282358b8301525afa908115610ba5578591610b8b575b5051168352602052600781832001549081610b7857602093505191038152f35b634e487b7160e01b835260118452602483fd5b610b9f91503d8087833e6105a38183611136565b38610b58565b84513d87823e3d90fd5b5082346107fb57826003193601126107fb5760ca548251632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d88382015233602482015290602090829060449082906001600160a01b03165afa908115610986578491610ca1575b501561095a576065549060ff821615610c67575060ff1916606555513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602090a180f35b606490602084519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b610cb9915060203d811161032d5761031f8183611136565b84610c1f565b503461044f578160031936011261044f5760ff5490516001600160a01b039091168152602090f35b823461063a57608036600319011261063a57610d01611170565b5061063661118b565b5082346107fb57816003193601126107fb57610d246111a1565b60ca548351632474521560e21b81527fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b63818501523360248201526001600160a01b0393916020908290604490829088165afa908115610dcc578691610dae575b5015610da0575016825260cb6020526001602435918320015580f35b835163036be76f60e61b8152fd5b610dc6915060203d811161032d5761031f8183611136565b86610d84565b85513d88823e3d90fd5b50913461044f57606036600319011261044f5767ffffffffffffffff90803582811161044b57610e0990369083016111cd565b9160243590811161044b57849391610e23913691016111cd565b92610e2c611170565b6001600160a01b031691805b84518110156106365780610e4f610e7592886112a6565b518584526020610101815285852090610e68848a6112a6565b5186525284842055611271565b610e38565b503461044f578060031936011261044f5760209181906001600160a01b03610ea06111a1565b16815261010184528181206024358252845220549051908152f35b5082346107fb5760803660031901126107fb5767ffffffffffffffff90602435828111610fad57610eef90369083016111cd565b91610ef861118b565b9260018060a01b03841686526020956101028752858120918051938411610f9a57680100000000000000008411610f9a5787908354858555808610610f72575b5001918152868120905b838110610f60578787610f5988604435893561144c565b9051908152f35b82518282015591870191600101610f42565b8484528583852091820191015b818110610f8c5750610f38565b8481558a9350600101610f7f565b634e487b7160e01b825260418552602482fd5b8480fd5b50913461044f57608036600319011261044f5767ffffffffffffffff813581811161044b573660238201121561044b578083013590610ffb610ff283611158565b96519687611136565b81865260209160248388019160051b8301019136831161044757602401905b82821061107857505050506024359081116107fb5761103b913691016111cd565b91611044611170565b50815b8151811015611074578061105e61106f92846112a6565b5061106981866112a6565b50611271565b611047565b8280f35b81356001600160a01b03811681036107f757815290830190830161101a565b839085346107fb5760203660031901126107fb573563ffffffff60e01b81168091036107fb57602092506301ffc9a760e01b81149081156110f2575b81156110e1575b5015158152f35b636c91bd0560e11b149050836110da565b63cedc502360e01b811491506110d3565b610100810190811067ffffffffffffffff82111761112057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761112057604052565b67ffffffffffffffff81116111205760051b60200190565b604435906001600160a01b038216820361118657565b600080fd5b606435906001600160a01b038216820361118657565b600435906001600160a01b038216820361118657565b602435906001600160a01b038216820361118657565b81601f82011215611186578035916111e483611158565b926111f26040519485611136565b808452602092838086019260051b820101928311611186578301905b82821061121c575050505090565b8135815290830190830161120e565b80548210156112435760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b90816020910312611186575180151581036111865790565b60001981146112805760010190565b634e487b7160e01b600052601160045260246000fd5b9190811015611243576060020190565b80518210156112435760209160051b010190565b51906001600160a01b038216820361118657565b906020808383031261118657825167ffffffffffffffff9384821161118657019260a084840312611186576040519360a085018581108382111761112057604052611318816112ba565b8552828101518386015260408101516040860152611338606082016112ba565b6060860152608081015190828211611186570183601f820112156111865780519182116111205760405193611376601f8401601f1916850186611136565b8285528383830101116111865760005b82811061139f5750509060009183010152608082015290565b8181018401518582018501528301611386565b9190820391821161128057565b156113c657565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b9190820180921161128057565b8115611436570490565b634e487b7160e01b600052601260045260246000fd5b6001600160a01b03909216600081815261010260208181526040808420549097969591949293600019808301939284116115df578392858352868852611494858c852061122b565b959054600396871b1c90818b119081156115d6575b506115af5750505b82821061152a575b50611527979892916114d86114ee92866000528789528560002061122b565b905490841b1c958560005287528360002061122b565b9054911b1c93826000526101018082528260002085600052825282600020549360005281528160002090856000525260002054906115f3565b90565b918281018181116112805782146115a957611545818361141f565b60011c908560005286885261155d828c60002061122b565b905490861b1c808a1015611573575050916114b1565b90939250808911156115865750906114b1565b975050505050905060009493945261010181528260002091600052526000205490565b916114b9565b965096925050915061152796979282526101018152828220908483525220549142926115f3565b905015386114a9565b634e487b7160e01b82526011600452602482fd5b929161160c8161160686611612956113b2565b966113b2565b926113b2565b906b033b2e3c9fd0803ce8000000918282029180830484148115171561128057838304036116a5576116478160011c8361141f565b918210611693576116579161142c565b60009381159182156116b7575b5050156116a5576b019d971e4fe8401e740000008301928381116112805783106116935761152792049061141f565b604051630a77254f60e01b8152600490fd5b604051631550e8b760e01b8152600490fd5b818192935002948286048214831517156116de57506116d6908561142c565b143880611664565b634e487b7160e01b81526011600452602490fdfea26469706673582212201b8afb70e4babe8a94e73521b5b0b20f278539fac90fe9e9070ea23b60a567a364736f6c63430008120033";

export class MockNearestSearch__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockNearestSearch> {
    return super.deploy(overrides || {}) as Promise<MockNearestSearch>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockNearestSearch {
    return super.attach(address) as MockNearestSearch;
  }
  connect(signer: Signer): MockNearestSearch__factory {
    return super.connect(signer) as MockNearestSearch__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockNearestSearchInterface {
    return new utils.Interface(_abi) as MockNearestSearchInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockNearestSearch {
    return new Contract(address, _abi, signerOrProvider) as MockNearestSearch;
  }
}