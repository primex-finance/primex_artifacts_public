/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFlashLoanManager,
  IFlashLoanManagerInterface,
} from "../../../contracts/FlashLoanManager/IFlashLoanManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "flashLoanFeeRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flashLoanProtocolRate",
        type: "uint256",
      },
    ],
    name: "ChangedFlashLoanRates",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flashLoanFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flashLoanProtocolFee",
        type: "uint256",
      },
    ],
    name: "FlashLoan",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_buckets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_params",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_primexDNS",
        type: "address",
      },
      {
        internalType: "address",
        name: "_whiteBlackList",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_flashLoanFeeRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_flashLoanProtocolRate",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flashLoanFeeRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_flashLoanProtocolRate",
        type: "uint256",
      },
    ],
    name: "setFlashLoanRates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFlashLoanManager__factory {
  static readonly abi = _abi;
  static createInterface(): IFlashLoanManagerInterface {
    return new Interface(_abi) as IFlashLoanManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IFlashLoanManager {
    return new Contract(address, _abi, runner) as unknown as IFlashLoanManager;
  }
}
