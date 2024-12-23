/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PTokensFactory,
  PTokensFactoryInterface,
} from "../../../contracts/PToken/PTokensFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ptokenImplementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pTokenAddress",
        type: "address",
      },
    ],
    name: "PTokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "bucketsFactory",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "createPToken",
    outputs: [
      {
        internalType: "contract IPToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
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
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bucketsFactory",
        type: "address",
      },
    ],
    name: "setBucketsFactory",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ptokenImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461023657604081611111803803809161001f828561023b565b8339810103126102365761003e602061003783610274565b9201610274565b60008054336001600160a01b03198216811783556040519394939290916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3813b156101ce5750600180546001600160a01b0319166001600160a01b0390921691821790556040516301ffc9a760e01b81526337a557d360e01b600482015290602090829060249082905afa9081156101a3576000916101af575b5080610132575b1561012057600380546001600160a01b0319166001600160a01b0392909216919091179055604051610e7090816102a18239f35b60405163044aa57560e41b8152600490fd5b506040516301ffc9a760e01b8152637965db0b60e01b60048201526020816024816001600160a01b0386165afa9081156101a357600091610174575b506100ec565b610196915060203d60201161019c575b61018e818361023b565b810190610288565b3861016e565b503d610184565b6040513d6000823e3d90fd5b6101c8915060203d60201161019c5761018e818361023b565b386100e5565b62461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e7472616374000000000000000000000000006064820152608490fd5b600080fd5b601f909101601f19168101906001600160401b0382119082101761025e57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361023657565b9081602091031261023657518015158103610236579056fe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a714610639575080633659cfe6146105145780635c60da1b146104eb57806362e7a6e614610372578063715018a6146103195780637b103999146102f057806385ebb12b146102c75780638da5cb5b1461029e5780638fece8d01461015d5763f2fde38b1461008d57600080fd5b34610158576020366003190112610158576004356001600160a01b03811690819003610158576100bb61075e565b801561010457600080546001600160a01b03198116831782556001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b600080fd5b34610158576020366003190112610158576004356001600160a01b0381169081900361015857600354604051632474521560e21b81526000600482015233602482015290602090829060449082906001600160a01b03165afa9081156102615760009161027f575b501561026d576040516301ffc9a760e01b81526313e9760960e01b6004820152602081602481855afa90811561026157600091610232575b5015610220576bffffffffffffffffffffffff60a01b6002541617600255600080f35b60405163044aa57560e41b8152600490fd5b610254915060203d60201161025a575b61024c818361068c565b810190610705565b826101fd565b503d610242565b6040513d6000823e3d90fd5b60405163036be76f60e61b8152600490fd5b610298915060203d60201161025a5761024c818361068c565b826101c5565b34610158576000366003190112610158576000546040516001600160a01b039091168152602090f35b34610158576000366003190112610158576002546040516001600160a01b039091168152602090f35b34610158576000366003190112610158576003546040516001600160a01b039091168152602090f35b346101585760003660031901126101585761033261075e565b600080546001600160a01b0319811682556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346101585760603660031901126101585760043567ffffffffffffffff8111610158576103a39036906004016106ae565b60243567ffffffffffffffff8111610158576103c39036906004016106ae565b6044359160ff8316809303610158576002546001600160a01b0316923384036104d957610415936104276104409460405196879563de7ea79d60e01b60208801526080602488015260a487019061071d565b8581036023190160448701529061071d565b916064840152608483015203601f19810183528261068c565b60405190610684908183019083821067ffffffffffffffff8311176104c357604061047c9285946107b78639308152816020820152019061071d565b03906000f080156102615760209060018060a01b03167fe73d6985466386b96a63226d0cef48372289a6bf4b6dc700230cdd3c8b3d446e82604051838152a1604051908152f35b634e487b7160e01b600052604160045260246000fd5b604051633399906560e11b8152600490fd5b34610158576000366003190112610158576001546040516001600160a01b039091168152602090f35b34610158576020366003190112610158576004356001600160a01b03811690818103610158576040516301ffc9a760e01b81526337a557d360e01b6004820152602081602481865afa9081156102615760009161061a575b50156102205761057a61075e565b3b156105b957600180546001600160a01b031916821790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2005b60405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b6064820152608490fd5b610633915060203d60201161025a5761024c818361068c565b8361056c565b34610158576020366003190112610158576004359063ffffffff60e01b8216809203610158576020916304fc31a160e21b811490811561067b575b5015158152f35b6301ffc9a760e01b14905083610674565b90601f8019910116810190811067ffffffffffffffff8211176104c357604052565b81601f820112156101585780359067ffffffffffffffff82116104c357604051926106e3601f8401601f19166020018561068c565b8284526020838301011161015857816000926020809301838601378301015290565b90816020910312610158575180151581036101585790565b919082519283825260005b848110610749575050826000602080949584010152601f8019910116010190565b80602080928401015182828601015201610728565b6000546001600160a01b0316330361077257565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfe60808060405261068480380380916100178285610345565b83398101906040818303126102395761002f8161037e565b602082015190916001600160401b03821161023957019082601f830112156102395781519161005d83610392565b9261006b6040519485610345565b8084526020840194602082840101116102395784602061008b93016103ad565b803b156102f257604051635c60da1b60e01b81526001600160a01b03919091169290602081600481875afa908115610246576000916102b8575b503b1561025a577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319168417905560405192807f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e600080a2825115801590610252575b610146575b60405161020090816104848239f35b83600481602093635c60da1b60e01b82525afa928315610246576000936101ff575b50916000806101ed9460405194610180606087610345565b602786527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c6020870152660819985a5b195960ca1b60408701525190845af43d156101f7573d916101d083610392565b926101de6040519485610345565b83523d6000602085013e6103d0565b5038808080610137565b6060916103d0565b92506020833d60201161023e575b8161021a60209383610345565b81010312610239576000806102316101ed9561037e565b945050610168565b600080fd5b3d915061020d565b6040513d6000823e3d90fd5b506000610132565b60405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608490fd5b90506020813d6020116102ea575b816102d360209383610345565b81010312610239576102e49061037e565b386100c5565b3d91506102c6565b60405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b6064820152608490fd5b601f909101601f19168101906001600160401b0382119082101761036857604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361023957565b6001600160401b03811161036857601f01601f191660200190565b60005b8381106103c05750506000910152565b81810151838201526020016103b0565b9192901561043257508151156103e4575090565b3b156103ed5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156104455750805190602001fd5b6044604051809262461bcd60e51b82526020600483015261047581518092816024860152602086860191016103ad565b601f01601f19168101030190fdfe6080604052366100c2577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054635c60da1b60e01b608090815260209160049082906001600160a01b03165afa80156100b657600090156101a9575060203d6020116100af575b601f19601f820116608001906080821067ffffffffffffffff8311176100995761009491604052608001610163565b6101a9565b634e487b7160e01b600052604160045260246000fd5b503d610065565b6040513d6000823e3d90fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054604051635c60da1b60e01b815290602090829060049082906001600160a01b03165afa9081156100b65760009161011c575b506101a9565b602091503d821161015b575b601f8201601f191681019167ffffffffffffffff831182841017610099576101559260405281019061018a565b38610116565b3d9150610128565b602090607f190112610185576080516001600160a01b03811681036101855790565b600080fd5b9081602091031261018557516001600160a01b03811681036101855790565b60008091368280378136915af43d6000803e156101c5573d6000f35b3d6000fdfea2646970667358221220adb19cfd0eadb2999ea331a46df7b4068b401c8504814ad3f77b96c922a7d32264736f6c634300081a0033a26469706673582212205497e52d2e5956698dcc71ff889ca75f48b9f75d36681bedeebcde0f3b96bf0264736f6c634300081a0033";

type PTokensFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PTokensFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PTokensFactory__factory extends ContractFactory {
  constructor(...args: PTokensFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _ptokenImplementation: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _ptokenImplementation,
      _registry,
      overrides || {}
    );
  }
  override deploy(
    _ptokenImplementation: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _ptokenImplementation,
      _registry,
      overrides || {}
    ) as Promise<
      PTokensFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PTokensFactory__factory {
    return super.connect(runner) as PTokensFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PTokensFactoryInterface {
    return new Interface(_abi) as PTokensFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PTokensFactory {
    return new Contract(address, _abi, runner) as unknown as PTokensFactory;
  }
}
