/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBucketMock, IBucketMockInterface } from "../IBucketMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "burnDebtToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "burnPToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "mintDebtToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "mintPToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_active",
        type: "bool",
      },
    ],
    name: "setActive",
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
        internalType: "bool",
        name: "_isClaimable",
        type: "bool",
      },
    ],
    name: "setCanClaimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_debtToken",
        type: "address",
      },
    ],
    name: "setDebtToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_delisted",
        type: "bool",
      },
    ],
    name: "setDelisted",
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
        internalType: "uint128",
        name: "_liquidityIndex",
        type: "uint128",
      },
    ],
    name: "setLiquidityIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract ILiquidityMiningRewardDistributor",
            name: "liquidityMiningRewardDistributor",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isBucketLaunched",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "accumulatingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadlineTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stabilizationDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stabilizationEndTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerUser",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxStabilizationEndTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct IBucketStorage.LiquidityMiningParams",
        name: "_newLMparams",
        type: "tuple",
      },
    ],
    name: "setLiquidityMiningParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_normalizedIncome",
        type: "uint256",
      },
    ],
    name: "setNormalizedIncome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pToken",
        type: "address",
      },
    ],
    name: "setPToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_variableBorrowIndex",
        type: "uint128",
      },
    ],
    name: "setVariableBorrowIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whiteBlackList",
        type: "address",
      },
    ],
    name: "setWhiteBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBucketMock__factory {
  static readonly abi = _abi;
  static createInterface(): IBucketMockInterface {
    return new utils.Interface(_abi) as IBucketMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBucketMock {
    return new Contract(address, _abi, signerOrProvider) as IBucketMock;
  }
}