/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TraderBalanceVault,
  TraderBalanceVaultInterface,
} from "../TraderBalanceVault";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
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
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "availableBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockedBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "traders",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "length",
            type: "uint256",
          },
        ],
        internalType:
          "struct ITraderBalanceVault.BatchTopUpAvailableBalanceParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "batchTopUpAvailableBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "increaseLockedBalance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "topUpAvailableBalance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ITraderBalanceVault.UnlockAssetParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "unlockAsset",
    outputs: [],
    stateMutability: "nonpayable",
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
        components: [
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "enum ITraderBalanceVault.OpenType",
            name: "openType",
            type: "uint8",
          },
        ],
        internalType: "struct ITraderBalanceVault.LockAssetParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "useTraderAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fromLocked",
        type: "bool",
      },
    ],
    name: "withdrawFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608080604052346100c1576000549060ff8260081c1661006f575060ff80821603610034575b6040516118aa90816100c78239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610025565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe608080604052600436101561013a575b50361561001b57600080fd5b610023611631565b60cb54604051630723eb0360e51b81523360048201526020918290829060249082906001600160a01b03165afa90811561012e57600091610101575b506100ef5761006c61175f565b341515806100e7575b156100d5573360005260ca81526040600020907399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e9182600052815260406000206100b43482546116a0565b9055600080516020611835833981519152604051913483523392a360018055005b604051633abe877f60e11b8152600490fd5b506001610075565b6040516333df015b60e01b8152600490fd5b6101219150823d8411610127575b6101198183611574565b810190611596565b3861005f565b503d61010f565b6040513d6000823e3d90fd5b600090813560e01c90816301ffc9a71461148f575080633f4ba83a1461137e578063441d68ca1461128957806347e7ef241461107b578063485cc95514610e1a5780635c975abb14610df75780637b10399914610dce5780638291732014610c755780638456cb5914610b9e578063a0fd10ad14610a9d578063b1a11ae91461082f578063c23f001f146107d9578063c268dd31146105d8578063f3fef3a3146104355763fb4ef4660361000f57346103615760a03660031901126103615760c954604051632474521560e21b815260008051602061185583398151915260048201523360248201526001600160a01b03916020908290604490829086165afa90811561042a57839161040c575b50156103fa57806102576116ad565b16825260ca602052604082208161026c6116c3565b16600052602052604060002060843560038110156103f657801580156103d8575b600182036103865750506102a4606435825461160e565b90555b806102b06116d9565b166102b9575080f35b7399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e906102d76116c3565b1614610374578073__$183737d697d7aa9b5df9988cbe11bc4947$__6102fb6116c3565b6103036116d9565b90823b1561036f57604051636336129b60e11b81526001600160a01b0391821660048201529116602482015260648035604483015290918391839182905af480156103645761035157505080f35b61035a9061154a565b6103615780f35b80fd5b6040513d84823e3d90fd5b505050fd5b604051637414865560e01b8152600490fd5b156103a3575060010161039c606435825461160e565b90556102a7565b6002146103b1575b506102a7565b6103d06001606435926103c584825461160e565b8155019182546116a0565b9055386103ab565b8254606435111561028d575b60405163317cf4f160e01b8152600490fd5b8380fd5b60405163036be76f60e61b8152600490fd5b610424915060203d8111610127576101198183611574565b38610248565b6040513d85823e3d90fd5b50346103615760403660031901126103615761044f6114e4565b60243561045a611631565b60cb54604051630723eb0360e51b81523360048201526001600160a01b039360209290919083908290602490829089165afa9081156105cd5786916105b0575b506100ef5782156100d55733855260ca825260408520938116938460005282526040600020908154918285116103e4576104d585889461160e565b90557399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e85036105345750506104fe82336117a3565b6040519283528201527f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb60403392a26001805580f35b73__$183737d697d7aa9b5df9988cbe11bc4947$__803b156105ac57604051636336129b60e11b81526001600160a01b03929092166004830152336024830152604482018590528290829060649082905af4801561036457610598575b50506104fe565b6105a19061154a565b6103f6578338610591565b8280fd5b6105c79150833d8511610127576101198183611574565b3861049a565b6040513d88823e3d90fd5b50346103615760a0366003190112610361576105f26114e4565b6105fa6114ff565b604435916001600160a01b0391908284168085036107d557606435936084359283151584036107d1578160c95416936040518095632474521560e21b8252600080516020611855833981519152600483015233602483015281604460209889935afa9081156107c6578a916107a9575b50156103fa571561074f57169081875260ca8352604087208188528352846001604089200154106103e45786927399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e92845260ca8152604084209082855252600160408420016106ce86825461160e565b90555b036106e457506106e192506117a3565b80f35b919073__$183737d697d7aa9b5df9988cbe11bc4947$__90813b156103f657604051636336129b60e11b81526001600160a01b039586166004820152941660248501526044840191909152829060649082905af4801561036457610746575080f35b6106e19061154a565b169081875260ca8352604087208188528352846040882054106103e45786927399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e92845260ca8152604084209082855252604083206107a286825461160e565b90556106d1565b6107c09150863d8811610127576101198183611574565b3861066a565b6040513d8c823e3d90fd5b8780fd5b8580fd5b503461036157604036600319011261036157604080916107f76114e4565b6107ff6114ff565b9060018060a01b03809116835260ca60205283832091168252602052206001815491015482519182526020820152f35b503461036157600319602036820112610a995767ffffffffffffffff60043511610a9957608090600435360301126103615760018060a01b0360c95416604051632474521560e21b8152600080516020611855833981519152600482015260208160448160249533878301525afa90811561042a578391610a7a575b50156103fa57815b6064600435013581106108c4578280f35b6108e1816108db8460043501600435600401611703565b90611739565b3561090b575b60001981146108f8576001016108b3565b50634e487b7160e01b8252601160045290fd5b610925610920826108db600480350180611703565b6116ef565b6109336044600435016116ef565b61094a836108db8660043501600435600401611703565b60c954604051632474521560e21b8152600080516020611855833981519152600482015233878201529135939190602090829060449082906001600160a01b03165afa908115610a6f578791610a50575b50156103fa576001600160a01b038216151580610a3e575b15610a2c576001600160a01b0382167399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e14610a14575b60018060a01b0316855260ca602052604085209060018060a01b03168552602052610a0d604085209182546116a0565b90556108e7565b82156109dd5760405163fae8279160e01b8152600490fd5b60405163044aa57560e41b8152600490fd5b506001600160a01b03811615156109b3565b610a69915060203d602011610127576101198183611574565b3861099b565b6040513d89823e3d90fd5b610a93915060203d602011610127576101198183611574565b386108ab565b5080fd5b50346103615760803660031901126103615760c954604051632474521560e21b815260008051602061185583398151915260048201523360248201526020916001600160a01b03919083908290604490829086165afa908115610b93578491610b76575b50156103fa576064359181610b146116ad565b16845260ca81526040842082610b286116c3565b168552815260016040852001610b3f84825461160e565b905581610b4a6116d9565b16845260ca81526040842091610b5e6116c3565b16845252610b71604083209182546116a0565b905580f35b610b8d9150833d8511610127576101198183611574565b38610b01565b6040513d86823e3d90fd5b503461036157806003193601126103615760c954604051632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb600482015233602482015290602090829060449082906001600160a01b03165afa908115610364578291610c57575b50156103fa57610c1d61175f565b600160ff1960655416176065557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b610c6f915060203d8111610127576101198183611574565b38610c0f565b50610c7f36611515565b60c954604051632474521560e21b815260008051602061185583398151915260048201523360248201526001600160a01b039492936020929091908390829060449082908a165afa908115610a6f578791610db1575b50156103fa578416937399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e8503610d40575b83156100d55760008051602061183583398151915292169283865260ca825260408620858752825260016040872001610d348282546116a0565b9055604051908152a380f35b60405163313ce56760e01b81528281600481895afa908115610a6f5760129160ff918991610d84575b50161115610cfa575b60405163b7c73c5d60e01b8152600490fd5b610da49150853d8711610daa575b610d9c8183611574565b810190611687565b38610d69565b503d610d92565b610dc89150833d8511610127576101198183611574565b38610cd5565b503461036157806003193601126103615760c9546040516001600160a01b039091168152602090f35b5034610361578060031936011261036157602060ff606554166040519015158152f35b503461036157604036600319011261036157610e346114e4565b610e3c6114ff565b82549160ff8360081c16159081809261106e575b8015611057575b15610ffb5760ff1984811660011786559382610fea575b506040516301ffc9a760e01b808252637965db0b60e01b60048301526020946001600160a01b03938416939290918682602481885afa918215610fdf578992610fc0575b5081610f64575b5015610a2c576bffffffffffffffffffffffff60a01b928360c954161760c955169060cb54161760cb55610f2584549360ff8560081c1690610efa826115ae565b610f03826115ae565b60655416606555610f13816115ae565b610f1c816115ae565b600180556115ae565b610f2d578280f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989161ff001916835560405160018152a138808280f35b604051908152633df6cef760e01b6004820152905085816024818587165afa908115610fb5578891610f98575b5038610eb9565b610faf9150863d8811610127576101198183611574565b38610f91565b6040513d8a823e3d90fd5b610fd8919250873d8911610127576101198183611574565b9038610eb2565b6040513d8b823e3d90fd5b61ffff191661010117855538610e6e565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b158015610e575750600160ff851614610e57565b50600160ff851610610e50565b506040366003190112610361576110906114e4565b60243561109b611631565b60cb54604051630723eb0360e51b81523360048201526001600160a01b039260209290919083908290602490829088165afa9081156105cd57869161126c575b506100ef576110e861175f565b80928416937399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e851460001461116b57509091503415159081611162575b50156100d55760008051602061183583398151915234915b33855260ca8152604085208486528152604085206111508482546116a0565b90556040519283523392a36001805580f35b90501538611119565b341580611263575b156100d55760405163313ce56760e01b81528381600481895afa908115610a6f5760129160ff918991611246575b501611610d725760405163c37f7f7f60e01b81526001600160a01b039190911660048201523360248201526044810191909152818160648173__$183737d697d7aa9b5df9988cbe11bc4947$__5af4801561123b57611211575b5060008051602061183583398151915290611131565b8190813d8311611234575b6112268183611574565b810103126103f657386111fb565b503d61121c565b6040513d87823e3d90fd5b61125d9150863d8811610daa57610d9c8183611574565b386111a1565b50811515611173565b6112839150833d8511610127576101198183611574565b386110db565b5061129336611515565b60c954604051632474521560e21b815260008051602061185583398151915260048201523360248201529193926001600160a01b039290916020908290604490829087165afa9081156105cd578691611360575b50156103fa5781169182151580611355575b15610a2c577399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e831461133b575b16835260ca60205260408320908352602052610b71604083209182546116a0565b8334101561131a5760405163fae8279160e01b8152600490fd5b5081811615156112f9565b611378915060203d8111610127576101198183611574565b386112e7565b503461036157806003193601126103615760c954604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8600482015233602482015290602090829060449082906001600160a01b03165afa908115610364578291611471575b50156103fa5760655460ff8116156114355760ff19166065557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b611489915060203d8111610127576101198183611574565b386113ef565b905034610a99576020366003190112610a995760043563ffffffff60e01b81168091036105ac57602092506301ffc9a760e01b81149081156114d3575b5015158152f35b6312b3ed2b60e01b149050386114cc565b600435906001600160a01b03821682036114fa57565b600080fd5b602435906001600160a01b03821682036114fa57565b60609060031901126114fa576001600160a01b039060043582811681036114fa579160243590811681036114fa579060443590565b67ffffffffffffffff811161155e57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761155e57604052565b908160209103126114fa575180151581036114fa5790565b156115b557565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b9190820391821161161b57565b634e487b7160e01b600052601160045260246000fd5b600260015414611642576002600155565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b908160209103126114fa575160ff811681036114fa5790565b9190820180921161161b57565b6004356001600160a01b03811681036114fa5790565b6044356001600160a01b03811681036114fa5790565b6024356001600160a01b03811681036114fa5790565b356001600160a01b03811681036114fa5790565b903590601e19813603018212156114fa570180359067ffffffffffffffff82116114fa57602001918160051b360383136114fa57565b91908110156117495760051b0190565b634e487b7160e01b600052603260045260246000fd5b60ff6065541661176b57565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b60405167ffffffffffffffff9190602081018381118282101761155e5760405260008080958194828095525af1913d1561182d573d91821161181957604051916117f7601f8201601f191660200184611574565b825260203d92013e5b1561180757565b60405163c71509d160e01b8152600490fd5b634e487b7160e01b81526041600452602490fd5b505061180056fe5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62e965846df3dd5b1dfa65f58e31477079e90140e0908b6dd31b5aead5a57cf365a2646970667358221220e88923b14c95f7a7de51a3d9c3d31b4fb93fb15cbacfece159ebc9968d11471764736f6c63430008120033";

type TraderBalanceVaultConstructorParams =
  | [linkLibraryAddresses: TraderBalanceVaultLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TraderBalanceVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class TraderBalanceVault__factory extends ContractFactory {
  constructor(...args: TraderBalanceVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        TraderBalanceVault__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: TraderBalanceVaultLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$183737d697d7aa9b5df9988cbe11bc4947\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TraderBalanceVault> {
    return super.deploy(overrides || {}) as Promise<TraderBalanceVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TraderBalanceVault {
    return super.attach(address) as TraderBalanceVault;
  }
  connect(signer: Signer): TraderBalanceVault__factory {
    return super.connect(signer) as TraderBalanceVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TraderBalanceVaultInterface {
    return new utils.Interface(_abi) as TraderBalanceVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TraderBalanceVault {
    return new Contract(address, _abi, signerOrProvider) as TraderBalanceVault;
  }
}

export interface TraderBalanceVaultLibraryAddresses {
  ["contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"]: string;
}