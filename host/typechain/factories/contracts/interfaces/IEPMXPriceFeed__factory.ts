/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IEPMXPriceFeed,
  IEPMXPriceFeedInterface,
} from "../../../contracts/interfaces/IEPMXPriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
    ],
    name: "setAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IEPMXPriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IEPMXPriceFeedInterface {
    return new Interface(_abi) as IEPMXPriceFeedInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IEPMXPriceFeed {
    return new Contract(address, _abi, runner) as unknown as IEPMXPriceFeed;
  }
}
