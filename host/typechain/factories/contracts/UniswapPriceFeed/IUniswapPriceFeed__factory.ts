/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUniswapPriceFeed,
  IUniswapPriceFeedInterface,
} from "../../../contracts/UniswapPriceFeed/IUniswapPriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint24",
        name: "index",
        type: "uint24",
      },
    ],
    name: "activeFees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "addFee",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "fees",
    outputs: [
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
    ],
    name: "getExchangeRate",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "getPool",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint48",
            name: "lastUpdatedTimestamp",
            type: "uint48",
          },
          {
            internalType: "uint16",
            name: "lastUpdatedCardinalityNext",
            type: "uint16",
          },
        ],
        internalType: "struct IUniswapPriceFeed.PoolData",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "baseAmount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "secondsTwapInterval",
        type: "uint32",
      },
    ],
    name: "getQuote",
    outputs: [
      {
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "baseAmount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "secondsTwapInterval",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "secondsUpdateInterval",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "cardinalityNextIncrease",
        type: "uint8",
      },
    ],
    name: "getQuoteAndUpdatePool",
    outputs: [
      {
        internalType: "uint256",
        name: "quoteAmount",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "secondsUpdateInterval",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "cardinalityNextIncrease",
        type: "uint8",
      },
    ],
    name: "getUpdatedPool",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint48",
            name: "lastUpdatedTimestamp",
            type: "uint48",
          },
          {
            internalType: "uint16",
            name: "lastUpdatedCardinalityNext",
            type: "uint16",
          },
        ],
        internalType: "struct IUniswapPriceFeed.PoolData",
        name: "pool",
        type: "tuple",
      },
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolUpdateInterval",
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
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint48",
        name: "lastUpdatedTimestamp",
        type: "uint48",
      },
      {
        internalType: "uint16",
        name: "lastUpdatedCardinality",
        type: "uint16",
      },
    ],
    stateMutability: "view",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "twapInterval",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV3Factory",
    outputs: [
      {
        internalType: "address",
        name: "uniswapV3Factory",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "cardinalityNextIncrease",
        type: "uint8",
      },
    ],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poolAddress",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint48",
            name: "lastUpdatedTimestamp",
            type: "uint48",
          },
          {
            internalType: "uint16",
            name: "lastUpdatedCardinalityNext",
            type: "uint16",
          },
        ],
        internalType: "struct IUniswapPriceFeed.PoolData",
        name: "highestLiquidityPool",
        type: "tuple",
      },
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUniswapPriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapPriceFeedInterface {
    return new Interface(_abi) as IUniswapPriceFeedInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUniswapPriceFeed {
    return new Contract(address, _abi, runner) as unknown as IUniswapPriceFeed;
  }
}