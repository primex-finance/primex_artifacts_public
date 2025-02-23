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
  OVM_GasPriceOracleMock,
  OVM_GasPriceOracleMockInterface,
} from "../../../contracts/mocks/OVM_GasPriceOracleMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unsignedTxSize",
        type: "uint256",
      },
    ],
    name: "getL1FeeUpperBound",
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
] as const;

const _bytecode =
  "0x6080806040523460135760a9908160198239f35b600080fdfe6080806040526004361015601257600080fd5b60003560e01c63f1c7a58b14602657600080fd5b34606e576020366003190112606e5760043590631dcd6500820291808304631dcd650014901517156058576020918152f35b634e487b7160e01b600052601160045260246000fd5b600080fdfea264697066735822122096218604b27520efee4d71883f6c5cf9e718f966cfea389ebf9d6708fbbac38b64736f6c634300081a0033";

type OVM_GasPriceOracleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OVM_GasPriceOracleMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OVM_GasPriceOracleMock__factory extends ContractFactory {
  constructor(...args: OVM_GasPriceOracleMockConstructorParams) {
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
      OVM_GasPriceOracleMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): OVM_GasPriceOracleMock__factory {
    return super.connect(runner) as OVM_GasPriceOracleMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OVM_GasPriceOracleMockInterface {
    return new Interface(_abi) as OVM_GasPriceOracleMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OVM_GasPriceOracleMock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as OVM_GasPriceOracleMock;
  }
}
