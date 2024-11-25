/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBucketsFactory,
  IBucketsFactoryInterface,
} from "../../../contracts/Bucket/IBucketsFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bucketAddress",
        type: "address",
      },
    ],
    name: "BucketCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "debtTokensFactory",
        type: "address",
      },
    ],
    name: "DebtTokensFactoryChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pTokensFactory",
        type: "address",
      },
    ],
    name: "PTokensFactoryChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "allBuckets",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "buckets",
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
        components: [
          {
            internalType: "string",
            name: "nameBucket",
            type: "string",
          },
          {
            internalType: "address",
            name: "positionManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "priceOracle",
            type: "address",
          },
          {
            internalType: "address",
            name: "dns",
            type: "address",
          },
          {
            internalType: "address",
            name: "reserve",
            type: "address",
          },
          {
            internalType: "address",
            name: "whiteBlackList",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "assets",
            type: "address[]",
          },
          {
            internalType: "contract IERC20Metadata",
            name: "underlyingAsset",
            type: "address",
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
            internalType: "uint256",
            name: "reserveRate",
            type: "uint256",
          },
          {
            internalType: "contract ILiquidityMiningRewardDistributor",
            name: "liquidityMiningRewardDistributor",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "liquidityMiningAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidityMiningDeadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stabilizationDuration",
            type: "uint256",
          },
          {
            internalType: "contract IInterestRateStrategy",
            name: "interestRateStrategy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerUser",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isReinvestToAaveEnabled",
            type: "bool",
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
            internalType: "bytes",
            name: "barCalcParams",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "maxTotalDeposit",
            type: "uint256",
          },
        ],
        internalType: "struct IBucketsFactory.CreateBucketParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "createBucket",
    outputs: [],
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IDebtTokensFactory",
        name: "_debtTokensFactory",
        type: "address",
      },
    ],
    name: "setDebtTokensFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPTokensFactory",
        name: "_pTokensFactory",
        type: "address",
      },
    ],
    name: "setPTokensFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBucketsFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IBucketsFactoryInterface {
    return new Interface(_abi) as IBucketsFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBucketsFactory {
    return new Contract(address, _abi, runner) as unknown as IBucketsFactory;
  }
}
