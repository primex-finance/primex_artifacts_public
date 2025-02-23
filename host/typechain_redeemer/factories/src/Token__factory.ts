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
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Token, TokenInterface } from "../../src/Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
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
        name: "value",
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
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
        name: "value",
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
        name: "value",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c6c380380610c6c83398101604081905261002f91610287565b8282600361003d8382610382565b50600461004a8282610382565b50505061005d338261006560201b60201c565b505050610467565b6001600160a01b0382166100945760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b6100a0600083836100a4565b5050565b6001600160a01b0383166100cf5780600260008282546100c49190610440565b909155506101419050565b6001600160a01b038316600090815260208190526040902054818110156101225760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161008b565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661015d5760028054829003905561017c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516101c191815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126101f557600080fd5b81516001600160401b0381111561020e5761020e6101ce565b604051601f8201601f19908116603f011681016001600160401b038111828210171561023c5761023c6101ce565b60405281815283820160200185101561025457600080fd5b60005b8281101561027357602081860181015183830182015201610257565b506000918101602001919091529392505050565b60008060006060848603121561029c57600080fd5b83516001600160401b038111156102b257600080fd5b6102be868287016101e4565b602086015190945090506001600160401b038111156102dc57600080fd5b6102e8868287016101e4565b925050604084015190509250925092565b600181811c9082168061030d57607f821691505b60208210810361032d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561037d57806000526020600020601f840160051c8101602085101561035a5750805b601f840160051c820191505b8181101561037a5760008155600101610366565b50505b505050565b81516001600160401b0381111561039b5761039b6101ce565b6103af816103a984546102f9565b84610333565b6020601f8211600181146103e357600083156103cb5750848201515b600019600385901b1c1916600184901b17845561037a565b600084815260208120601f198516915b8281101561041357878501518255602094850194600190920191016103f3565b50848210156104315786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b8082018082111561046157634e487b7160e01b600052601160045260246000fd5b92915050565b6107f6806104766000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063313ce56711610071578063313ce5671461013457806342966c681461014357806370a082311461015857806395d89b4114610181578063a9059cbb14610189578063dd62ed3e1461019c57600080fd5b806301ffc9a7146100ae57806306fdde03146100e7578063095ea7b3146100fc57806318160ddd1461010f57806323b872dd14610121575b600080fd5b6100d26100bc3660046105fc565b6001600160e01b0319166336372b0760e01b1490565b60405190151581526020015b60405180910390f35b6100ef6101d5565b6040516100de919061062d565b6100d261010a366004610697565b610267565b6002545b6040519081526020016100de565b6100d261012f3660046106c1565b610281565b604051601281526020016100de565b6101566101513660046106fe565b6102a5565b005b610113610166366004610717565b6001600160a01b031660009081526020819052604090205490565b6100ef6102b2565b6100d2610197366004610697565b6102c1565b6101136101aa366004610732565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101e490610765565b80601f016020809104026020016040519081016040528092919081815260200182805461021090610765565b801561025d5780601f106102325761010080835404028352916020019161025d565b820191906000526020600020905b81548152906001019060200180831161024057829003601f168201915b5050505050905090565b6000336102758185856102cf565b60019150505b92915050565b60003361028f8582856102e1565b61029a858585610364565b506001949350505050565b6102af33826103c3565b50565b6060600480546101e490610765565b600033610275818585610364565b6102dc83838360016103fd565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461035e578181101561034f57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61035e848484840360006103fd565b50505050565b6001600160a01b03831661038e57604051634b637e8f60e11b815260006004820152602401610346565b6001600160a01b0382166103b85760405163ec442f0560e01b815260006004820152602401610346565b6102dc8383836104d2565b6001600160a01b0382166103ed57604051634b637e8f60e11b815260006004820152602401610346565b6103f9826000836104d2565b5050565b6001600160a01b0384166104275760405163e602df0560e01b815260006004820152602401610346565b6001600160a01b03831661045157604051634a1406b160e11b815260006004820152602401610346565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561035e57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104c491815260200190565b60405180910390a350505050565b6001600160a01b0383166104fd5780600260008282546104f2919061079f565b9091555061056f9050565b6001600160a01b038316600090815260208190526040902054818110156105505760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610346565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661058b576002805482900390556105aa565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105ef91815260200190565b60405180910390a3505050565b60006020828403121561060e57600080fd5b81356001600160e01b03198116811461062657600080fd5b9392505050565b602081526000825180602084015260005b8181101561065b576020818601810151604086840101520161063e565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b038116811461069257600080fd5b919050565b600080604083850312156106aa57600080fd5b6106b38361067b565b946020939093013593505050565b6000806000606084860312156106d657600080fd5b6106df8461067b565b92506106ed6020850161067b565b929592945050506040919091013590565b60006020828403121561071057600080fd5b5035919050565b60006020828403121561072957600080fd5b6106268261067b565b6000806040838503121561074557600080fd5b61074e8361067b565b915061075c6020840161067b565b90509250929050565b600181811c9082168061077957607f821691505b60208210810361079957634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561027b57634e487b7160e01b600052601160045260246000fdfea2646970667358221220e9e23ab9b5ce4e075d1e9dc66607995deda87a47f9d4727b6159e80b163f5dbf64736f6c634300081a0033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  override deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<
      Token & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Token__factory {
    return super.connect(runner) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new Interface(_abi) as TokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Token {
    return new Contract(address, _abi, runner) as unknown as Token;
  }
}
