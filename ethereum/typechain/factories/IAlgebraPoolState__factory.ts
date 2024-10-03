/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAlgebraPoolState,
  IAlgebraPoolStateInterface,
} from "../IAlgebraPoolState";

const _abi = [
  {
    inputs: [],
    name: "activeIncentive",
    outputs: [
      {
        internalType: "address",
        name: "virtualPool",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalState",
    outputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "uint16",
        name: "fee",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "timepointIndex",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "communityFeeToken0",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "communityFeeToken1",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "unlocked",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityCooldown",
    outputs: [
      {
        internalType: "uint32",
        name: "cooldownInSeconds",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "positions",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidityAmount",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "lastLiquidityAddTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "innerFeeGrowth0Token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "innerFeeGrowth1Token",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "fees0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fees1",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "wordPosition",
        type: "int16",
      },
    ],
    name: "tickTable",
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
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "ticks",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidityTotal",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "outerFeeGrowth0Token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outerFeeGrowth1Token",
        type: "uint256",
      },
      {
        internalType: "int56",
        name: "outerTickCumulative",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "outerSecondsPerLiquidity",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "outerSecondsSpent",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "timepoints",
    outputs: [
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "int56",
        name: "tickCumulative",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityCumulative",
        type: "uint160",
      },
      {
        internalType: "uint88",
        name: "volatilityCumulative",
        type: "uint88",
      },
      {
        internalType: "int24",
        name: "averageTick",
        type: "int24",
      },
      {
        internalType: "uint144",
        name: "volumePerLiquidityCumulative",
        type: "uint144",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalFeeGrowth0Token",
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
    name: "totalFeeGrowth1Token",
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

export class IAlgebraPoolState__factory {
  static readonly abi = _abi;
  static createInterface(): IAlgebraPoolStateInterface {
    return new utils.Interface(_abi) as IAlgebraPoolStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAlgebraPoolState {
    return new Contract(address, _abi, signerOrProvider) as IAlgebraPoolState;
  }
}
