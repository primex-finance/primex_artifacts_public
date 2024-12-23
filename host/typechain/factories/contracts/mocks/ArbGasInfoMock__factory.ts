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
  ArbGasInfoMock,
  ArbGasInfoMockInterface,
} from "../../../contracts/mocks/ArbGasInfoMock";

const _abi = [
  {
    inputs: [],
    name: "getL1BaseFeeEstimate",
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
    name: "getPricesInWei",
    outputs: [
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "l1GasPrice",
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
        name: "_newL1GasPrice",
        type: "uint256",
      },
    ],
    name: "setL1BaseFeeEstimate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523460145760f1908161001a8239f35b600080fdfe6080806040526004361015601257600080fd5b60003560e01c908163212209b91460a457816341b247a8146067575080638282e8171460465763f5d6ded714604657600080fd5b3460625760003660031901126062576020600054604051908152f35b600080fd5b34606257600036600319011260625780600060c09252600060208201526000604082015260006060820152600060808201526298968060a0820152f35b34606257602036600319011260625760043560005500fea26469706673582212200f2bb1eb7926d15d5633dc53ebb781f882e835f53fef1f17a8729d4b61812e8464736f6c634300081a0033";

type ArbGasInfoMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbGasInfoMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbGasInfoMock__factory extends ContractFactory {
  constructor(...args: ArbGasInfoMockConstructorParams) {
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
      ArbGasInfoMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ArbGasInfoMock__factory {
    return super.connect(runner) as ArbGasInfoMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbGasInfoMockInterface {
    return new Interface(_abi) as ArbGasInfoMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArbGasInfoMock {
    return new Contract(address, _abi, runner) as unknown as ArbGasInfoMock;
  }
}
