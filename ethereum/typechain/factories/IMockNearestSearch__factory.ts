/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMockNearestSearch,
  IMockNearestSearchInterface,
} from "../IMockNearestSearch";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bonusDeadline",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_timetamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_currentIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "searchNearestIndex",
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
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_timestamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_indexes",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "setIndexes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMockNearestSearch__factory {
  static readonly abi = _abi;
  static createInterface(): IMockNearestSearchInterface {
    return new utils.Interface(_abi) as IMockNearestSearchInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMockNearestSearch {
    return new Contract(address, _abi, signerOrProvider) as IMockNearestSearch;
  }
}