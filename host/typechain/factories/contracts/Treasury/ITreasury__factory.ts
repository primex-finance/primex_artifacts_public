/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITreasury,
  ITreasuryInterface,
} from "../../../contracts/Treasury/ITreasury";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "newSpendingLimits",
        type: "tuple",
      },
    ],
    name: "MaxSpendingLimitChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferFromTreasury",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "canTransferByTime",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "newSpendingLimits",
        type: "tuple",
      },
    ],
    name: "decreaseLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialTimestamp",
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
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract IAccessControl",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "newSpendingLimits",
        type: "tuple",
      },
    ],
    name: "setMaxSpendingLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "spenders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxTotalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPercentPerTransfer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minTimeBetweenTransfers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeframeDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountDuringTimeframe",
            type: "uint256",
          },
        ],
        internalType: "struct ITreasuryStorage.SpendingLimits",
        name: "",
        type: "tuple",
      },
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "transferFromTreasury",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class ITreasury__factory {
  static readonly abi = _abi;
  static createInterface(): ITreasuryInterface {
    return new Interface(_abi) as ITreasuryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ITreasury {
    return new Contract(address, _abi, runner) as unknown as ITreasury;
  }
}