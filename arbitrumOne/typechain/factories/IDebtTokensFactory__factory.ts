/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IDebtTokensFactory,
  IDebtTokensFactoryInterface,
} from "../IDebtTokensFactory";

const _abi = [
  {
    inputs: [],
    name: "bucketsFactory",
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
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "createDebtToken",
    outputs: [
      {
        internalType: "contract IDebtToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
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
    inputs: [
      {
        internalType: "address",
        name: "bucketsFactory",
        type: "address",
      },
    ],
    name: "setBucketsFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDebtTokensFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IDebtTokensFactoryInterface {
    return new utils.Interface(_abi) as IDebtTokensFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDebtTokensFactory {
    return new Contract(address, _abi, signerOrProvider) as IDebtTokensFactory;
  }
}
