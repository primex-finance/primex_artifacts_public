/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPrimexLensPart2,
  IPrimexLensPart2Interface,
} from "../../../contracts/interfaces/IPrimexLensPart2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_bucketFactories",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionManager",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_showDeprecated",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "getAllBucketsFactory",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "bucketAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.TokenMetadata",
            name: "asset",
            type: "tuple",
          },
          {
            internalType: "uint128",
            name: "bar",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "lar",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "demand",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "utilizationRatio",
            type: "uint256",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "decimals",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "balance",
                    type: "uint256",
                  },
                ],
                internalType: "struct IPrimexLens.TokenMetadata",
                name: "asset",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "isSupported",
                    type: "bool",
                  },
                  {
                    internalType: "uint256",
                    name: "pairPriceDrop",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxLeverage",
                    type: "uint256",
                  },
                ],
                internalType: "struct IPrimexLens.BucketTokenMetadata",
                name: "properties",
                type: "tuple",
              },
            ],
            internalType: "struct IPrimexLens.SupportedAsset[]",
            name: "supportedAssets",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.TokenMetadata",
            name: "pToken",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.TokenMetadata",
            name: "debtToken",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "feeBuffer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawalFeeRate",
            type: "uint256",
          },
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
            name: "miningParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountInMining",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currentPercent",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "minReward",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxReward",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "extraReward",
                    type: "uint256",
                  },
                ],
                internalType:
                  "struct ILiquidityMiningRewardDistributor.RewardsInPMX",
                name: "rewardsInPMX",
                type: "tuple",
              },
            ],
            internalType: "struct IPrimexLens.LenderInfo",
            name: "lenderInfo",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "pmxAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "withdrawnRewards",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalPoints",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.LiquidityMiningBucketInfo",
            name: "lmBucketInfo",
            type: "tuple",
          },
          {
            internalType: "uint128",
            name: "estimatedBar",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "estimatedLar",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "isDeprecated",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isDelisted",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "urOptimal",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "k0",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "k1",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "b0",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "b1",
                type: "int256",
              },
            ],
            internalType: "struct IInterestRateStrategy.BarCalculationParams",
            name: "barCalcParams",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "maxTotalDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityIndex",
            type: "uint256",
          },
          {
            internalType: "enum IPrimexDNSStorage.Status",
            name: "currentStatus",
            type: "uint8",
          },
        ],
        internalType: "struct IPrimexLensPart2.BucketMetaDataPart2[]",
        name: "",
        type: "tuple[]",
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
        internalType: "address[]",
        name: "_buckets",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionManager",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_showDeprecated",
        type: "bool",
      },
    ],
    name: "getBucketsArray",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "bucketAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.TokenMetadata",
            name: "asset",
            type: "tuple",
          },
          {
            internalType: "uint128",
            name: "bar",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "lar",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "demand",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "utilizationRatio",
            type: "uint256",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "decimals",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "balance",
                    type: "uint256",
                  },
                ],
                internalType: "struct IPrimexLens.TokenMetadata",
                name: "asset",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "isSupported",
                    type: "bool",
                  },
                  {
                    internalType: "uint256",
                    name: "pairPriceDrop",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxLeverage",
                    type: "uint256",
                  },
                ],
                internalType: "struct IPrimexLens.BucketTokenMetadata",
                name: "properties",
                type: "tuple",
              },
            ],
            internalType: "struct IPrimexLens.SupportedAsset[]",
            name: "supportedAssets",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.TokenMetadata",
            name: "pToken",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.TokenMetadata",
            name: "debtToken",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "feeBuffer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawalFeeRate",
            type: "uint256",
          },
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
            name: "miningParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountInMining",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currentPercent",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "minReward",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxReward",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "extraReward",
                    type: "uint256",
                  },
                ],
                internalType:
                  "struct ILiquidityMiningRewardDistributor.RewardsInPMX",
                name: "rewardsInPMX",
                type: "tuple",
              },
            ],
            internalType: "struct IPrimexLens.LenderInfo",
            name: "lenderInfo",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "pmxAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "withdrawnRewards",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalPoints",
                type: "uint256",
              },
            ],
            internalType: "struct IPrimexLens.LiquidityMiningBucketInfo",
            name: "lmBucketInfo",
            type: "tuple",
          },
          {
            internalType: "uint128",
            name: "estimatedBar",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "estimatedLar",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "isDeprecated",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isDelisted",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "urOptimal",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "k0",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "k1",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "b0",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "b1",
                type: "int256",
              },
            ],
            internalType: "struct IInterestRateStrategy.BarCalculationParams",
            name: "barCalcParams",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "maxTotalDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityIndex",
            type: "uint256",
          },
          {
            internalType: "enum IPrimexDNSStorage.Status",
            name: "currentStatus",
            type: "uint8",
          },
        ],
        internalType: "struct IPrimexLensPart2.BucketMetaDataPart2[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPositionManagerV2",
        name: "_pm",
        type: "address",
      },
    ],
    name: "getEstimatedMinProtocolFeeLiquidation",
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
        components: [
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
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
          {
            internalType: "bytes[][]",
            name: "pullOracleData",
            type: "bytes[][]",
          },
          {
            internalType: "uint256[]",
            name: "pullOracleTypes",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "borrowedRewardAssetOracleData",
            type: "bytes",
          },
        ],
        internalType: "struct IPrimexLensPart2.CheckRewardParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "contract IDepositManager",
        name: "_depositManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "priceOracle",
        type: "address",
      },
    ],
    name: "hasEnoughRewardsInDepositManager",
    outputs: [
      {
        internalType: "bool",
        name: "isEnough",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "remainingReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxDepositAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IPrimexLensPart2__factory {
  static readonly abi = _abi;
  static createInterface(): IPrimexLensPart2Interface {
    return new Interface(_abi) as IPrimexLensPart2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPrimexLensPart2 {
    return new Contract(address, _abi, runner) as unknown as IPrimexLensPart2;
  }
}
