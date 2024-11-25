/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOVM_GasPriceOracle,
  IOVM_GasPriceOracleInterface,
} from "../../../contracts/interfaces/IOVM_GasPriceOracle";

const _abi = [
  {
    inputs: [],
    name: "l1BaseFee",
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
    name: "overhead",
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
    name: "scalar",
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

export class IOVM_GasPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOVM_GasPriceOracleInterface {
    return new Interface(_abi) as IOVM_GasPriceOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IOVM_GasPriceOracle {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IOVM_GasPriceOracle;
  }
}
