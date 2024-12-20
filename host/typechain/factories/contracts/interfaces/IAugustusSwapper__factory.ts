/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAugustusSwapper,
  IAugustusSwapperInterface,
} from "../../../contracts/interfaces/IAugustusSwapper";

const _abi = [
  {
    inputs: [],
    name: "getTokenTransferProxy",
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

export class IAugustusSwapper__factory {
  static readonly abi = _abi;
  static createInterface(): IAugustusSwapperInterface {
    return new Interface(_abi) as IAugustusSwapperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAugustusSwapper {
    return new Contract(address, _abi, runner) as unknown as IAugustusSwapper;
  }
}
