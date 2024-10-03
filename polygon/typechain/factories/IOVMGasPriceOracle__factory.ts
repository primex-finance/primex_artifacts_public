/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IOVMGasPriceOracle,
  IOVMGasPriceOracleInterface,
} from "../IOVMGasPriceOracle";

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
];

export class IOVMGasPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOVMGasPriceOracleInterface {
    return new utils.Interface(_abi) as IOVMGasPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOVMGasPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IOVMGasPriceOracle;
  }
}
