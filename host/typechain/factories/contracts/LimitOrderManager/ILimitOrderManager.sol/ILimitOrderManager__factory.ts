/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILimitOrderManager,
  ILimitOrderManagerInterface,
} from "../../../../contracts/LimitOrderManager/ILimitOrderManager.sol/ILimitOrderManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "closedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum LimitOrderLibrary.CloseReason",
        name: "reason",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "bucket",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "borrowedAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "positionAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leverage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "depositAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "CloseLimitOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "address",
            name: "positionAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldOpenPosition",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedConditionsAt",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraParams",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LimitOrderLibrary.LimitOrder",
        name: "order",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LimitOrderLibrary.Condition[]",
        name: "openConditions",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LimitOrderLibrary.Condition[]",
        name: "closeConditions",
        type: "tuple[]",
      },
    ],
    name: "CreateLimitOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leverage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
    ],
    name: "UpdateOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LimitOrderLibrary.Condition[]",
        name: "openConditions",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LimitOrderLibrary.Condition[]",
        name: "closeConditions",
        type: "tuple[]",
      },
    ],
    name: "UpdateOrderConditions",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "bucketOrderIds",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bucketOrderIndexes",
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
        internalType: "uint256[]",
        name: "_orderIds",
        type: "uint256[]",
      },
    ],
    name: "cancelExpiredLimitOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "cancelLimitOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "bucket",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "depositAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "positionAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "takeDepositFromWallet",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldOpenPosition",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "managerType",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "params",
                type: "bytes",
              },
            ],
            internalType: "struct LimitOrderLibrary.Condition[]",
            name: "openConditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "managerType",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "params",
                type: "bytes",
              },
            ],
            internalType: "struct LimitOrderLibrary.Condition[]",
            name: "closeConditions",
            type: "tuple[]",
          },
          {
            internalType: "bool",
            name: "isProtocolFeeInPmx",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "nativeDepositAssetOracleData",
            type: "bytes",
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
        ],
        internalType: "struct LimitOrderLibrary.CreateLimitOrderParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "createLimitOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "getBucketOrders",
    outputs: [
      {
        components: [
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "address",
            name: "positionAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldOpenPosition",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedConditionsAt",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraParams",
            type: "bytes",
          },
        ],
        internalType: "struct LimitOrderLibrary.LimitOrder[]",
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
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "getBucketOrdersLength",
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
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "getCloseConditions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        internalType: "struct LimitOrderLibrary.Condition[]",
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
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "getOpenConditions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        internalType: "struct LimitOrderLibrary.Condition[]",
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
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getOrder",
    outputs: [
      {
        components: [
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "address",
            name: "positionAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldOpenPosition",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedConditionsAt",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraParams",
            type: "bytes",
          },
        ],
        internalType: "struct LimitOrderLibrary.LimitOrder",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getOrderByIndex",
    outputs: [
      {
        components: [
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "address",
            name: "positionAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldOpenPosition",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedConditionsAt",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraParams",
            type: "bytes",
          },
        ],
        internalType: "struct LimitOrderLibrary.LimitOrder",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrdersLength",
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
        name: "_trader",
        type: "address",
      },
    ],
    name: "getTraderOrders",
    outputs: [
      {
        components: [
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "address",
            name: "positionAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "depositAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "shouldOpenPosition",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedConditionsAt",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraParams",
            type: "bytes",
          },
        ],
        internalType: "struct LimitOrderLibrary.LimitOrder[]",
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
        internalType: "address",
        name: "_trader",
        type: "address",
      },
    ],
    name: "getTraderOrdersLength",
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
        name: "_pm",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_traderBalanceVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_whiteBlackList",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "conditionIndex",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "comAdditionalParams",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "to",
                    type: "address",
                  },
                  {
                    components: [
                      {
                        internalType: "string",
                        name: "dexName",
                        type: "string",
                      },
                      {
                        internalType: "uint256",
                        name: "shares",
                        type: "uint256",
                      },
                      {
                        internalType: "bytes",
                        name: "payload",
                        type: "bytes",
                      },
                    ],
                    internalType: "struct PrimexPricingLibrary.Path[]",
                    name: "paths",
                    type: "tuple[]",
                  },
                ],
                internalType: "struct PrimexPricingLibrary.Route[]",
                name: "routes",
                type: "tuple[]",
              },
            ],
            internalType: "struct PrimexPricingLibrary.MegaRoute[]",
            name: "firstAssetMegaRoutes",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "shares",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "to",
                    type: "address",
                  },
                  {
                    components: [
                      {
                        internalType: "string",
                        name: "dexName",
                        type: "string",
                      },
                      {
                        internalType: "uint256",
                        name: "shares",
                        type: "uint256",
                      },
                      {
                        internalType: "bytes",
                        name: "payload",
                        type: "bytes",
                      },
                    ],
                    internalType: "struct PrimexPricingLibrary.Path[]",
                    name: "paths",
                    type: "tuple[]",
                  },
                ],
                internalType: "struct PrimexPricingLibrary.Route[]",
                name: "routes",
                type: "tuple[]",
              },
            ],
            internalType: "struct PrimexPricingLibrary.MegaRoute[]",
            name: "depositInThirdAssetMegaRoutes",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "keeper",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "firstAssetOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "thirdAssetOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "depositSoldAssetOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "nativePmxOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "positionNativeAssetOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "nativePositionAssetOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "pmxPositionAssetOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "positionUsdOracleData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "nativeSoldAssetOracleData",
            type: "bytes",
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
            internalType: "uint256",
            name: "borrowedAmount",
            type: "uint256",
          },
        ],
        internalType: "struct LimitOrderLibrary.OpenPositionParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "openPositionByOrder",
    outputs: [],
    stateMutability: "payable",
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
    name: "orderIndexes",
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
    name: "ordersId",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pm",
    outputs: [
      {
        internalType: "contract IPositionManagerV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primexDNS",
    outputs: [
      {
        internalType: "contract IPrimexDNSV3",
        name: "",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "_swapManager",
        type: "address",
      },
    ],
    name: "setSwapManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapManager",
    outputs: [
      {
        internalType: "contract ISwapManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "traderBalanceVault",
    outputs: [
      {
        internalType: "contract ITraderBalanceVault",
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
        internalType: "address",
        name: "_trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "traderOrderIds",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "traderOrderIndexes",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isProtocolFeeInPmx",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "takeDepositFromWallet",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "nativeDepositOracleData",
            type: "bytes",
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
        ],
        internalType: "struct LimitOrderLibrary.UpdateLimitOrderParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "updateOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "managerType",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "params",
                type: "bytes",
              },
            ],
            internalType: "struct LimitOrderLibrary.Condition[]",
            name: "openConditions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "managerType",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "params",
                type: "bytes",
              },
            ],
            internalType: "struct LimitOrderLibrary.Condition[]",
            name: "closeConditions",
            type: "tuple[]",
          },
        ],
        internalType: "struct ILimitOrderManager.UpdateOrderConditionsParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "updateOrderConditions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILimitOrderManager__factory {
  static readonly abi = _abi;
  static createInterface(): ILimitOrderManagerInterface {
    return new Interface(_abi) as ILimitOrderManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILimitOrderManager {
    return new Contract(address, _abi, runner) as unknown as ILimitOrderManager;
  }
}
