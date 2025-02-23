/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ImmutableState,
  ImmutableStateInterface,
} from "../../../../../@uniswap/swap-router-contracts/contracts/base/ImmutableState";

const _abi = [
  {
    inputs: [],
    name: "factoryV2",
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
    name: "positionManager",
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
] as const;

export class ImmutableState__factory {
  static readonly abi = _abi;
  static createInterface(): ImmutableStateInterface {
    return new Interface(_abi) as ImmutableStateInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ImmutableState {
    return new Contract(address, _abi, runner) as unknown as ImmutableState;
  }
}
