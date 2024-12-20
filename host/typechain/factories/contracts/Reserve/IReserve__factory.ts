/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IReserve,
  IReserveInterface,
} from "../../../contracts/Reserve/IReserve";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "burnAmount",
        type: "uint256",
      },
    ],
    name: "BurnAmountCalculated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferFromReserve",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "minAmountToBeLeft",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPercentOfTotalSupplyToBeLeft",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IReserveStorage.TransferRestrictions",
        name: "newTransferRestrictions",
        type: "tuple",
      },
    ],
    name: "TransferRestrictionsChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IPrimexDNSV3",
        name: "dns",
        type: "address",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
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
        internalType: "string",
        name: "_bucketName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "payBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBucketV3",
        name: "bucket",
        type: "address",
      },
    ],
    name: "paybackPermanentLoss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "minAmountToBeLeft",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minPercentOfTotalSupplyToBeLeft",
            type: "uint256",
          },
        ],
        internalType: "struct IReserveStorage.TransferRestrictions",
        name: "transferRestrictions",
        type: "tuple",
      },
    ],
    name: "setTransferRestrictions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pToken",
        type: "address",
      },
    ],
    name: "transferRestrictions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferToTreasury",
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

export class IReserve__factory {
  static readonly abi = _abi;
  static createInterface(): IReserveInterface {
    return new Interface(_abi) as IReserveInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IReserve {
    return new Contract(address, _abi, runner) as unknown as IReserve;
  }
}
