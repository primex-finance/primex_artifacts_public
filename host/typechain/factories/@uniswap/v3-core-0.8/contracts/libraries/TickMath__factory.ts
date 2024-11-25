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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  TickMath,
  TickMathInterface,
} from "../../../../../@uniswap/v3-core-0.8/contracts/libraries/TickMath";

const _abi = [
  {
    inputs: [],
    name: "R",
    type: "error",
  },
  {
    inputs: [],
    name: "T",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220a2e9161d5a1531fd66eeeb2418d2b487cedeff95eecf51291a362c03297c99bd64736f6c63430008120033";

type TickMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickMath__factory extends ContractFactory {
  constructor(...args: TickMathConstructorParams) {
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
      TickMath & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TickMath__factory {
    return super.connect(runner) as TickMath__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickMathInterface {
    return new Interface(_abi) as TickMathInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TickMath {
    return new Contract(address, _abi, runner) as unknown as TickMath;
  }
}