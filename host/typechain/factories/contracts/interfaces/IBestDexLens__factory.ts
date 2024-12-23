/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBestDexLens,
  IBestDexLensInterface,
} from "../../../contracts/interfaces/IBestDexLens";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IPositionManagerV2",
            name: "positionManager",
            type: "address",
          },
          {
            internalType: "contract ILimitOrderManager",
            name: "limitOrderManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "firstAssetShares",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "depositInThirdAssetShares",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "depositToBorrowedShares",
                type: "uint256",
              },
            ],
            internalType: "struct IBestDexLens.Shares",
            name: "shares",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "string",
                name: "dex",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "ancillaryData",
                type: "bytes32",
              },
            ],
            internalType: "struct IBestDexLens.DexWithAncillaryData[]",
            name: "dexes",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "depositBorrowedAssetOracleData",
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
        internalType: "struct IBestDexLens.BestDexByOrderParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "getBestDexByOrder",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "returnAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "estimateGasAmount",
                type: "uint256",
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
                name: "megaRoutes",
                type: "tuple[]",
              },
            ],
            internalType:
              "struct IBestDexLens.GetBestMultipleDexesReturnParams",
            name: "firstAssetReturnParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "returnAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "estimateGasAmount",
                type: "uint256",
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
                name: "megaRoutes",
                type: "tuple[]",
              },
            ],
            internalType:
              "struct IBestDexLens.GetBestMultipleDexesReturnParams",
            name: "depositInThirdAssetReturnParams",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "returnAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "estimateGasAmount",
                type: "uint256",
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
                name: "megaRoutes",
                type: "tuple[]",
              },
            ],
            internalType:
              "struct IBestDexLens.GetBestMultipleDexesReturnParams",
            name: "depositToBorrowedReturnParams",
            type: "tuple",
          },
        ],
        internalType: "struct IBestDexLens.GetBestDexByOrderReturnParams",
        name: "_returnParams",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPositionManagerV2",
        name: "_positionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_positionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "dex",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "ancillaryData",
            type: "bytes32",
          },
        ],
        internalType: "struct IBestDexLens.DexWithAncillaryData[]",
        name: "_dexesWithAncillaryData",
        type: "tuple[]",
      },
    ],
    name: "getBestDexByPosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "returnAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "estimateGasAmount",
            type: "uint256",
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
            name: "megaRoutes",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBestDexLens.GetBestMultipleDexesReturnParams",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IPositionManagerV2",
            name: "positionManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrowedAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowedAmount",
            type: "uint256",
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
            name: "positionAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "firstAssetShares",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "depositInThirdAssetShares",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "depositToBorrowedShares",
                type: "uint256",
              },
            ],
            internalType: "struct IBestDexLens.Shares",
            name: "shares",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "string",
                name: "dex",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "ancillaryData",
                type: "bytes32",
              },
            ],
            internalType: "struct IBestDexLens.DexWithAncillaryData[]",
            name: "dexes",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBestDexLens.BestDexForOpenablePositionParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "getBestDexForOpenablePosition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "returnAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "estimateGasAmount",
            type: "uint256",
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
            name: "megaRoutes",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBestDexLens.GetBestMultipleDexesReturnParams",
        name: "_firstAssetReturnParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "returnAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "estimateGasAmount",
            type: "uint256",
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
            name: "megaRoutes",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBestDexLens.GetBestMultipleDexesReturnParams",
        name: "_depositInThirdAssetReturnParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "returnAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "estimateGasAmount",
            type: "uint256",
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
            name: "megaRoutes",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBestDexLens.GetBestMultipleDexesReturnParams",
        name: "_depositToBorrowedReturnParams",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IPositionManagerV2",
            name: "positionManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetToBuy",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetToSell",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isAmountToBuy",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "shares",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasPriceInCheckedAsset",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "dex",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "ancillaryData",
                type: "bytes32",
              },
            ],
            internalType: "struct IBestDexLens.DexWithAncillaryData[]",
            name: "dexes",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBestDexLens.GetBestMultipleDexesParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "getBestMultipleDexes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "returnAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "estimateGasAmount",
            type: "uint256",
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
            name: "megaRoutes",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBestDexLens.GetBestMultipleDexesReturnParams",
        name: "_returnParams",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBestDexLens__factory {
  static readonly abi = _abi;
  static createInterface(): IBestDexLensInterface {
    return new Interface(_abi) as IBestDexLensInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBestDexLens {
    return new Contract(address, _abi, runner) as unknown as IBestDexLens;
  }
}
