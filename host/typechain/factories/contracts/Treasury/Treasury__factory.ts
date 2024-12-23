/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Treasury,
  TreasuryInterface,
} from "../../../contracts/Treasury/Treasury";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "newSpendingLimits",
        type: "tuple",
      },
    ],
    name: "MaxSpendingLimitChanged",
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
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferFromTreasury",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "canTransferByTime",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "_newSpendingLimits",
        type: "tuple",
      },
    ],
    name: "decreaseLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialTimestamp",
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
        name: "_registry",
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
        internalType: "contract IAccessControl",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "_newSpendingLimits",
        type: "tuple",
      },
    ],
    name: "setMaxSpendingLimit",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "spenders",
    outputs: [
      {
        internalType: "bool",
        name: "isSpenderExist",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "limits",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "lastWithdrawalTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawnDuringTimeframe",
        type: "uint256",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "transferFromTreasury",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080806040523460bd576000549060ff8260081c16606b575060ff808216036031575b6040516111da90816100c38239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a1386022565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe608080604052600436101561001d575b50361561001b57600080fd5b005b600090813560e01c90816301ffc9a714610e40575080633f4ba83a14610d2e5780635be3ca3814610b1a5780635c975abb14610af7578063697aed1a1461090657806376aaeb201461087f5780637b103999146108565780638456cb5914610761578063c4d66de814610557578063d3b247e414610181578063d6d14171146101635763dde343fd0361000f573461016057604036600319011261016057604061012091816100ca610e9d565b916100d3610eb8565b6001600160a01b03938416825260c96020908152929091209216600090815291905220805460ff169061010860018201610f4c565b9060a06008600783015492015492604051941515855280516020860152602081015160408601526040810151606086015260608101516080860152608081015182860152015160c084015260e0830152610100820152f35b80fd5b5034610160578060031936011261016057602060ca54604051908152f35b50346101605760603660031901126101605760043561019e610eb8565b906044356001600160a01b0381169190828103610553576101bd61109a565b60026065541461050e57600260655533855260c9602090815260408087206001600160a01b038716885290915285209382151580610500575b806104e4575b806104d6575b156104c4576001600160a01b0316937399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e851490811561042f5761023e476003830154906110fe565b841161041d575b61025761025182610fbb565b42611181565b906007810191610271835461026b84610fbb565b90611181565b03610404576008810191825492610288878561100a565b6006840154106103f25761029e8760019561100a565b90555b429055016102b084825461102d565b90551561037c5784806020926040516102c98582610f14565b8281528585820191601f19870136843751925af1903d15610376573d9067ffffffffffffffff8211610362576040519187919061030f601f8201601f1916830185610f14565b83523d92013e5b15610350575b6040519081527f5e24750571ba267ec3e6fdb479a8d6aaf9e2a6ed458a6d8b5efc63e7125a0f4060203392a4600160655580f35b60405163c71509d160e01b8152600490fd5b634e487b7160e01b87526041600452602487fd5b50610316565b5073__$183737d697d7aa9b5df9988cbe11bc4947$__84813b156101605760649160405192838092636336129b60e11b82528860048301528760248301528660448301525af480156103e7576103d3575b5061031c565b846103e091959295610f14565b92386103cd565b6040513d87823e3d90fd5b604051634eb8a6e160e11b8152600490fd5b600681015485116103f2576001918560088301556102a1565b604051635f8550b160e11b8152600490fd5b6040516370a0823160e01b81523060048201526020816024818a5afa80156104b9578890610481575b61046891506003830154906110fe565b84111561024557604051633c14e2ed60e11b8152600490fd5b506020813d6020116104b1575b8161049b60209383610f14565b810103126104ad576104689051610458565b8780fd5b3d915061048e565b6040513d8a823e3d90fd5b604051633fe65ba960e01b8152600490fd5b506001850154831115610202565b506104f8600786015460048701549061100a565b4210156101fc565b5060028501548311156101f6565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b8480fd5b503461016057602036600319011261016057610571610e9d565b81549060ff8260081c161591828093610754575b801561073d575b156106e15760ff1981166001178455826106d0575b506040516301ffc9a760e01b8152637965db0b60e01b60048201526001600160a01b039190911690602081602481855afa9081156106c5578491610696575b5015610684576bffffffffffffffffffffffff60a01b60cb54161760cb554260ca5581549061064760ff8360081c166106188161103a565b6106218161103a565b600160655561062f8161103a565b6106388161103a565b60ff196033541660335561103a565b61064f575080f35b61ff00191681557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160018152a180f35b60405163044aa57560e41b8152600490fd5b6106b8915060203d6020116106be575b6106b08183610f14565b810190610fa3565b386105e0565b503d6106a6565b6040513d86823e3d90fd5b61ffff1916610101178355386105a1565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b15801561058c5750600160ff82161461058c565b50600160ff821610610585565b503461016057806003193601126101605760cb54604051632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb600482015233602482015290602090829060449082906001600160a01b03165afa90811561084b57829161082c575b501561081a576107e061109a565b600160ff1960335416176033557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b60405163036be76f60e61b8152600490fd5b610845915060203d6020116106be576106b08183610f14565b386107d2565b6040513d84823e3d90fd5b503461016057806003193601126101605760cb546040516001600160a01b039091168152602090f35b50346101605760403660031901126101605760406108cb9161089f610e9d565b6108a7610eb8565b6001600160a01b03918216835260c960209081528484209290911683525220610fbb565b8051156108f4576040810151602091820151606001516108ea9161100a565b6040519042118152f35b604051631d155e5b60e11b8152600490fd5b50346101605761091536610ece565b91906044602060018060a01b0360cb541660405192838092632474521560e21b82528960048301523360248301525afa9081156103e7578591610ad8575b501561081a5782359182151580610acb575b80610abe575b80610aa9575b80610a9c575b80610a8f575b15610a7d577f1d31acb9e47221445ed64ea1c635885c920508b65e8f6d687c24d33051072ff6916007610a6c9260018060a01b03169485885260c96020526040882060018060a01b03841689526020526040882090600160ff1983541617825560018201556020870135600282015560408701356003820155606087013560048201556080870135600582015560a0870135600682015501805415610a72575b5060405191829160018060a01b0316958291909160a08060c083019480358452602081013560208501526040810135604085015260608101356060850152608081013560808501520135910152565b0390a380f35b60ca54905538610a1d565b60405163c1adf75560e01b8152600490fd5b506080840135151561097d565b5060a08401351515610977565b50670de0b6b3a7640000604085013510610971565b506040840135151561096b565b5060208401351515610965565b610af1915060203d6020116106be576106b08183610f14565b38610953565b5034610160578060031936011261016057602060ff603354166040519015158152f35b503461016057610b2936610ece565b60cb54604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8600482015233602482015291939190602090829060449082906001600160a01b03165afa9081156103e7578591610d0f575b501561081a576001600160a01b0390811680855260c960209081526040808720938516875292905290842090916001820190610bc782610f4c565b9260ff815416156108f45785359380518511159081610cfb575b81610ce7575b81610cd3575b81610cbf575b81610cac575b5015610c9b57929091556020848101356002840181905560408087013560038601819055606080890135600488018190556080808b013560058a0181905560a0808d01356006909b018b905586519c358d52978c0196909652938a01929092528801528601528401919091526001600160a01b0316917f1d31acb9e47221445ed64ea1c635885c920508b65e8f6d687c24d33051072ff6908060c08101610a6c565b60405162ef52a760e51b8152600490fd5b60a09150015160a0870135111538610bf9565b905060808101516080880135101590610bf3565b905060608101516060880135101590610bed565b905060408101516040880135111590610be7565b905060208101516020880135111590610be1565b610d28915060203d6020116106be576106b08183610f14565b38610b8c565b503461016057806003193601126101605760cb54604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8600482015233602482015290602090829060449082906001600160a01b03165afa90811561084b578291610e21575b501561081a5760335460ff811615610de55760ff19166033557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b610e3a915060203d6020116106be576106b08183610f14565b38610d9f565b905034610e99576020366003190112610e995760043563ffffffff60e01b8116809103610e9557602092506329abf30760e11b8114908115610e84575b5015158152f35b6301ffc9a760e01b14905038610e7d565b8280fd5b5080fd5b600435906001600160a01b0382168203610eb357565b600080fd5b602435906001600160a01b0382168203610eb357565b610100600319820112610eb3576004356001600160a01b0381168103610eb357916024356001600160a01b0381168103610eb35760c090926043190112610eb357604490565b90601f8019910116810190811067ffffffffffffffff821117610f3657604052565b634e487b7160e01b600052604160045260246000fd5b9060405160c0810181811067ffffffffffffffff821117610f365760405260a06005829480548452600181015460208501526002810154604085015260038101546060850152600481015460808501520154910152565b90816020910312610eb357518015158103610eb35790565b906040516080810181811067ffffffffffffffff821117610f365760405260606008829460ff81541615158452610ff460018201610f4c565b6020850152600781015460408501520154910152565b9190820180921161101757565b634e487b7160e01b600052601160045260246000fd5b9190820391821161101757565b1561104157565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b60ff603354166110a657565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b81156110e8570490565b634e487b7160e01b600052601260045260246000fd5b600091801591821561115b575b50501561114a576706f05b59d3b2000081019081811161101757811061113957670de0b6b3a7640000900490565b630a77254f60e01b60005260046000fd5b631550e8b760e01b60005260046000fd5b808202935091508115828404821417156110175761117990836110de565b14388061110b565b90608060206111966111a19460ca549061102d565b9201510151906110de565b9056fea2646970667358221220324ab98b86266b6a940700afc217f05462a60331bfbb6d0de5b2b7da6a53bfa964736f6c634300081a0033";

type TreasuryConstructorParams =
  | [linkLibraryAddresses: TreasuryLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Treasury__factory extends ContractFactory {
  constructor(...args: TreasuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Treasury__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: TreasuryLibraryAddresses): string {
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

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Treasury & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Treasury__factory {
    return super.connect(runner) as Treasury__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryInterface {
    return new Interface(_abi) as TreasuryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Treasury {
    return new Contract(address, _abi, runner) as unknown as Treasury;
  }
}

export interface TreasuryLibraryAddresses {
  ["contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"]: string;
}
