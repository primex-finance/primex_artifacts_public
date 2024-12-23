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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ERC20Mock,
  ERC20MockInterface,
} from "../../../contracts/mocks/ERC20Mock";

const _abi = [
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
      {
        internalType: "address[]",
        name: "_initialAccounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_initialBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_mintingAmount",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dec",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isTimeLimitedMinting",
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintingAmount",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isLimited",
        type: "bool",
      },
    ],
    name: "setMintTimeLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "timeToUnlockMinting",
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
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x60a0604052346105fb576115388038038061001981610620565b92833981019060c0818303126105fb5780516001600160401b0381116105fb5782610045918301610645565b60208201519091906001600160401b0381116105fb5783610067918301610645565b9160408201519260ff841684036105fb5760608301516001600160401b0381116105fb5783019285601f850112156105fb5783516100ac6100a7826106b0565b610620565b9460208087848152019260051b820101908882116105fb57602001915b8183106106005750505060808101516001600160401b0381116105fb5781019580601f880112156105fb5786516101026100a7826106b0565b976020808a848152019260051b8201019283116105fb57602001905b8282106105eb5750505060a00151825190926001600160401b0382116104e85760035490600182811c921680156105e1575b60208310146104c85781601f849311610571575b50602090601f8311600114610509576000926104fe575b50508160011b916000199060031b1c1916176003555b8051906001600160401b0382116104e85760045490600182811c921680156104de575b60208310146104c85781601f849311610458575b50602090601f83116001146103f0576000926103e5575b50508160011b916000199060031b1c1916176004555b60058054336001600160a01b03198216811790925560405191906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a38251855103610367575060005b825181101561032b576001600160a01b0361026582856106c7565b51169061027281876106c7565b519180156102e6576002548381018091116102d0577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602060019560009360025584845283825260408420818154019055604051908152a30161024a565b634e487b7160e01b600052601160045260246000fd5b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b506005805460ff60a01b191660a085901b60ff60a01b16179055608052604051610e4690816106f28239608051818181610262015261071c0152f35b62461bcd60e51b815260206004820152604d60248201527f45524332304d6f636b3a3a636f6e7374727563746f723a6e756d626572206f6660448201527f20696e697469616c206163636f756e747320616e642062616c616e636573206460648201526c0decae640dcdee840dac2e8c6d609b1b608482015260a490fd5b0151905038806101df565b600460009081528281209350601f198516905b8181106104405750908460019594939210610427575b505050811b016004556101f5565b015160001960f88460031b161c19169055388080610419565b92936020600181928786015181550195019301610403565b60046000529091507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c810191602085106104be575b90601f859493920160051c01905b8181106104af57506101c8565b600081558493506001016104a2565b9091508190610494565b634e487b7160e01b600052602260045260246000fd5b91607f16916101b4565b634e487b7160e01b600052604160045260246000fd5b01519050388061017b565b600360009081528281209350601f198516905b8181106105595750908460019594939210610540575b505050811b01600355610191565b015160001960f88460031b161c19169055388080610532565b9293602060018192878601518155019501930161051c565b60036000529091507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f840160051c810191602085106105d7575b90601f859493920160051c01905b8181106105c85750610164565b600081558493506001016105bb565b90915081906105ad565b91607f1691610150565b815181526020918201910161011e565b600080fd5b82516001600160a01b03811681036105fb578152602092830192016100c9565b6040519190601f01601f191682016001600160401b038111838210176104e857604052565b81601f820112156105fb578051906001600160401b0382116104e857610674601f8301601f1916602001610620565b92828452602083830101116105fb5760005b82811061069b57505060206000918301015290565b80602080928401015182828701015201610686565b6001600160401b0381116104e85760051b60200190565b80518210156106db5760209160051b010190565b634e487b7160e01b600052603260045260246000fdfe608080604052600436101561001357600080fd5b60003560e01c90816306fdde031461093957508063095ea7b31461091357806318160ddd146108f557806323b872dd146108375780632c50d109146107fd578063313ce5671461028557806339509351146107ab57806340c10f19146106be57806342966c68146105a75780635d6a826b1461056257806370a0823114610528578063715018a6146104cb5780638da5cb5b146104a257806395d89b4114610381578063a457c2d7146102da578063a9059cbb146102a9578063b3bcfa8214610285578063c530f6c61461024a578063dd0a33e014610224578063dd62ed3e146101d35763f2fde38b1461010657600080fd5b346101ce5760203660031901126101ce5761011f610a55565b610127610db8565b6001600160a01b0316801561017a57600580546001600160a01b0319811683179091556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b600080fd5b346101ce5760403660031901126101ce576101ec610a55565b6101f4610a6b565b6001600160a01b039182166000908152600160209081526040808320949093168252928352819020549051908152f35b346101ce5760003660031901126101ce57602060ff60055460a81c166040519015158152f35b346101ce5760003660031901126101ce5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b346101ce5760003660031901126101ce57602060ff60055460a01c16604051908152f35b346101ce5760403660031901126101ce576102cf6102c5610a55565b6024359033610b96565b602060405160018152f35b346101ce5760403660031901126101ce576102f3610a55565b60243590336000526001602052604060002060018060a01b0382166000526020526040600020549180831061032e576102cf92039033610a8e565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608490fd5b346101ce5760003660031901126101ce5760405160006004548060011c90600181168015610498575b602083108114610484578285529081156104685750600114610411575b50819003601f01601f191681019067ffffffffffffffff8211818310176103fb576103f782918260405282610a0c565b0390f35b634e487b7160e01b600052604160045260246000fd5b905060046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b6000905b828210610452575060209150820101826103c7565b600181602092548385880101520191019061043d565b90506020925060ff191682840152151560051b820101826103c7565b634e487b7160e01b84526022600452602484fd5b91607f16916103aa565b346101ce5760003660031901126101ce576005546040516001600160a01b039091168152602090f35b346101ce5760003660031901126101ce576104e4610db8565b600580546001600160a01b031981169091556000906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346101ce5760203660031901126101ce576001600160a01b03610549610a55565b1660005260006020526020604060002054604051908152f35b346101ce5760203660031901126101ce576004358015158091036101ce57610588610db8565b6005805460ff60a81b191660a89290921b60ff60a81b16919091179055005b346101ce5760203660031901126101ce57600435331561066f573360005260006020526040600020549080821061061f57806000923384528360205203604083205580600254036002556040519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203392a3005b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b346101ce5760403660031901126101ce576106d7610a55565b60055460a81c60ff161561079e5750336000526006602052604060002054421061075957620151804201804211610743573360005260066020526040600020556107417f000000000000000000000000000000000000000000000000000000000000000033610d15565b005b634e487b7160e01b600052601160045260246000fd5b60405162461bcd60e51b815260206004820152601f60248201527f6d696e7420746f6b656e7320706f737369626c65206f6e6365206120646179006044820152606490fd5b6107419060243590610d15565b346101ce5760403660031901126101ce576102cf6107c7610a55565b336000526001602052604060002060018060a01b0382166000526020526107f660406000206024359054610a81565b9033610a8e565b346101ce5760203660031901126101ce576001600160a01b0361081e610a55565b1660005260066020526020604060002054604051908152f35b346101ce5760603660031901126101ce57610850610a55565b610858610a6b565b6001600160a01b0382166000908152600160208181526040808420338552909152909120549260443592918401610894575b6102cf9350610b96565b8284106108b0576108ab836102cf95033383610a8e565b61088a565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b346101ce5760003660031901126101ce576020600254604051908152f35b346101ce5760403660031901126101ce576102cf61092f610a55565b6024359033610a8e565b346101ce5760003660031901126101ce5760006003548060011c90600181168015610a02575b6020831081146104845782855290811561046857506001146109ab5750819003601f01601f191681019067ffffffffffffffff8211818310176103fb576103f782918260405282610a0c565b905060036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6000905b8282106109ec575060209150820101826103c7565b60018160209254838588010152019101906109d7565b91607f169161095f565b91909160208152825180602083015260005b818110610a3f575060409293506000838284010152601f8019910116010190565b8060208092870101516040828601015201610a1e565b600435906001600160a01b03821682036101ce57565b602435906001600160a01b03821682036101ce57565b9190820180921161074357565b6001600160a01b0316908115610b45576001600160a01b0316918215610af55760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b6001600160a01b0316908115610cc2576001600160a01b0316918215610c7157816000526000602052604060002054818110610c1d57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9260209285600052600084520360406000205584600052600082526040600020818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0316908115610d73577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602082610d57600094600254610a81565b60025584845283825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b6005546001600160a01b03163303610dcc57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfea264697066735822122065336fb59a91b6d7831f6276afad1963a35712ec3d241b54345e5f5c5c643ca164736f6c634300081a0033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialAccounts: AddressLike[],
    _initialBalances: BigNumberish[],
    _mintingAmount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _initialAccounts,
      _initialBalances,
      _mintingAmount,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialAccounts: AddressLike[],
    _initialBalances: BigNumberish[],
    _mintingAmount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _initialAccounts,
      _initialBalances,
      _mintingAmount,
      overrides || {}
    ) as Promise<
      ERC20Mock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20Mock__factory {
    return super.connect(runner) as ERC20Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new Interface(_abi) as ERC20MockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC20Mock {
    return new Contract(address, _abi, runner) as unknown as ERC20Mock;
  }
}
