/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUniLikeOracle,
  IUniLikeOracleInterface,
} from "../../../contracts/interfaces/IUniLikeOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
    ],
    name: "getExchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUniLikeOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IUniLikeOracleInterface {
    return new Interface(_abi) as IUniLikeOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUniLikeOracle {
    return new Contract(address, _abi, runner) as unknown as IUniLikeOracle;
  }
}