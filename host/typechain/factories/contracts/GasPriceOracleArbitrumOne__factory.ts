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
import type { NonPayableOverrides } from "../../common";
import type {
  GasPriceOracleArbitrumOne,
  GasPriceOracleArbitrumOneInterface,
} from "../../contracts/GasPriceOracleArbitrumOne";

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
] as const;

const _bytecode =
  "0x608080604052346015576102aa908161001b8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c908163313ce5671461025a5750806354fd4d501461023e5780637284e416146101815780639a6fc8f5146101245763feaf968c1461005657600080fd5b3461011f57600036600319011261011f5760405163083648f560e31b815260c081600481606c5afa8015610113576000906100b1575b60a0906040519060008252602082015242604082015242606082015260006080820152f35b60c03d60c01161010c575b601f8101601f1916830167ffffffffffffffff8111848210176100f85760c0918491604052810103126100f5575060a08091015161008c565b80fd5b634e487b7160e01b83526041600452602483fd5b503d6100bc565b6040513d6000823e3d90fd5b600080fd5b3461011f57602036600319011261011f5760043569ffffffffffffffffffff81160361011f5760405162461bcd60e51b815260206004820152600f60248201526e139bdd081a5b5c1b195b595b9d1959608a1b6044820152606490fd5b3461011f57600036600319011261011f576040516040810181811067ffffffffffffffff82111761022857604052601c81527f417262697472756d4f6e6520476173205072696365204f7261636c6500000000602082015260405190602082528181519182602083015260005b8381106102105750508160006040809484010152601f80199101168101030190f35b602082820181015160408784010152859350016101ee565b634e487b7160e01b600052604160045260246000fd5b3461011f57600036600319011261011f57602060405160018152f35b3461011f57600036600319011261011f5780601260209252f3fea2646970667358221220d5aa4a0795acfd95f0b87892b98a1fb312d3f49b65e938e1f6e46a64fccce12964736f6c634300081a0033";

type GasPriceOracleArbitrumOneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasPriceOracleArbitrumOneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasPriceOracleArbitrumOne__factory extends ContractFactory {
  constructor(...args: GasPriceOracleArbitrumOneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      GasPriceOracleArbitrumOne & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): GasPriceOracleArbitrumOne__factory {
    return super.connect(runner) as GasPriceOracleArbitrumOne__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasPriceOracleArbitrumOneInterface {
    return new Interface(_abi) as GasPriceOracleArbitrumOneInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GasPriceOracleArbitrumOne {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as GasPriceOracleArbitrumOne;
  }
}
