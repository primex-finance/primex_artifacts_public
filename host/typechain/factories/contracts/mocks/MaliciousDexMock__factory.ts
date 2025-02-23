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
  MaliciousDexMock,
  MaliciousDexMockInterface,
} from "../../../contracts/mocks/MaliciousDexMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234601557610185908161001b8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c6338ed17391461002757600080fd5b3461014a5760a036600319011261014a5760443567ffffffffffffffff811161014a573660238201121561014a5780600401359067ffffffffffffffff821161014a57602490369260051b01011161014a576064356001600160a01b0381160361014a576040516060810167ffffffffffffffff81118282101761013457604090815260028252602082019036823781511561011e57600435815281516001101561011e5790670de0b6b3a764000060408201526040519182916020830190602084525180915260408301919060005b818110610105575050500390f35b82518452859450602093840193909201916001016100f7565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfea26469706673582212203ec0a4a520c54c51f4397a2613d40761976cc91b2ae29a012a7ce3c1d8a9fbd164736f6c634300081a0033";

type MaliciousDexMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaliciousDexMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaliciousDexMock__factory extends ContractFactory {
  constructor(...args: MaliciousDexMockConstructorParams) {
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
      MaliciousDexMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MaliciousDexMock__factory {
    return super.connect(runner) as MaliciousDexMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaliciousDexMockInterface {
    return new Interface(_abi) as MaliciousDexMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MaliciousDexMock {
    return new Contract(address, _abi, runner) as unknown as MaliciousDexMock;
  }
}
