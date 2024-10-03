/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GasPriceOracleArbitrumOne,
  GasPriceOracleArbitrumOneInterface,
} from "../GasPriceOracleArbitrumOne";

const _abi = [
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
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
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
];

const _bytecode =
  "0x60808060405234610016576102a8908161001c8239f35b600080fdfe608060408181526004908136101561001657600080fd5b600092833560e01c908163313ce567146102575750806354fd4d50146102375780637284e416146101835780639a6fc8f5146101245763feaf968c1461005b57600080fd5b346100fb57826003193601126100fb57805163083648f560e31b815260c0818481606c5afa92831561011a5784936100b0575b60a0848685805192828452602084015242908301524260608301526080820152f35b9091925060c0903d8211610112575b601f8201601f191683019067ffffffffffffffff8211848310176100ff575060c09183918552810103126100fb5760a09081015191903861008e565b8280fd5b634e487b7160e01b865260419052602485fd5b3d91506100bf565b82513d86823e3d90fd5b50913461018057602036600319011261018057813569ffffffffffffffffffff81160361018057506020606492519162461bcd60e51b8352820152600f60248201526e139bdd081a5b5c1b195b595b9d1959608a1b6044820152fd5b80fd5b5090346100fb57826003193601126100fb578151908282019082821067ffffffffffffffff83111761022457508252601c81526020907f417262697472756d4f6e6520476173205072696365204f7261636c65000000008282015282519382859384528251928382860152825b84811061020e57505050828201840152601f01601f19168101030190f35b81810183015188820188015287955082016101f0565b634e487b7160e01b855260419052602484fd5b8382346102535781600319360112610253576020905160018152f35b5080fd5b84903461025357816003193601126102535780601260209252f3fea26469706673582212209cc4d68802236a6078cbcc7aff7f1836d841d4db3bd9d9cd7825c866ebfdf58764736f6c63430008120033";

export class GasPriceOracleArbitrumOne__factory extends ContractFactory {
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
  ): Promise<GasPriceOracleArbitrumOne> {
    return super.deploy(overrides || {}) as Promise<GasPriceOracleArbitrumOne>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GasPriceOracleArbitrumOne {
    return super.attach(address) as GasPriceOracleArbitrumOne;
  }
  connect(signer: Signer): GasPriceOracleArbitrumOne__factory {
    return super.connect(signer) as GasPriceOracleArbitrumOne__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasPriceOracleArbitrumOneInterface {
    return new utils.Interface(_abi) as GasPriceOracleArbitrumOneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasPriceOracleArbitrumOne {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GasPriceOracleArbitrumOne;
  }
}