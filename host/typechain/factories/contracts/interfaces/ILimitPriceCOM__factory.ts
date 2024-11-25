/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILimitPriceCOM,
  ILimitPriceCOMInterface,
} from "../../../contracts/interfaces/ILimitPriceCOM";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_params",
        type: "bytes",
      },
    ],
    name: "getLimitPrice",
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
        name: "_primexDNS",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pm",
        type: "address",
      },
      {
        internalType: "address",
        name: "_keeperRewardDistributor",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILimitPriceCOM__factory {
  static readonly abi = _abi;
  static createInterface(): ILimitPriceCOMInterface {
    return new Interface(_abi) as ILimitPriceCOMInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILimitPriceCOM {
    return new Contract(address, _abi, runner) as unknown as ILimitPriceCOM;
  }
}
