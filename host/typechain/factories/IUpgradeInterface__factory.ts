/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUpgradeInterface,
  IUpgradeInterfaceInterface,
} from "../IUpgradeInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testUpgrade",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class IUpgradeInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IUpgradeInterfaceInterface {
    return new utils.Interface(_abi) as IUpgradeInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUpgradeInterface {
    return new Contract(address, _abi, signerOrProvider) as IUpgradeInterface;
  }
}