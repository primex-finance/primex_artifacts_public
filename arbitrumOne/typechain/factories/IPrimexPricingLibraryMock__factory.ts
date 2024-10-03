/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPrimexPricingLibraryMock,
  IPrimexPricingLibraryMockInterface,
} from "../IPrimexPricingLibraryMock";

const _abi = [
  {
    inputs: [
      {
        components: [
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
            name: "amount",
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
        internalType: "struct IDexAdapter.AmountParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "_isThirdAsset",
        type: "bool",
      },
      {
        internalType: "address payable",
        name: "_dexAdapter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_oracleData",
        type: "bytes",
      },
    ],
    name: "getDepositAmountInBorrowed",
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
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_positionAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_positionDebt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_primexDNS",
        type: "address",
      },
    ],
    name: "getLiquidationPrice",
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
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_limitPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_leverage",
        type: "uint256",
      },
    ],
    name: "getLiquidationPriceByOrder",
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
        name: "_tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountAssetA",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_oracleData",
        type: "bytes",
      },
    ],
    name: "getOracleAmountsOut",
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
        components: [
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
            name: "amountTokenA",
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
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct PrimexPricingLibrary.MegaSwapParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_maximumOracleTolerableLimit",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_dexAdapter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_needOracleTolerableLimitCheck",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_oracleData",
        type: "bytes",
      },
    ],
    name: "megaSwap",
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
];

export class IPrimexPricingLibraryMock__factory {
  static readonly abi = _abi;
  static createInterface(): IPrimexPricingLibraryMockInterface {
    return new utils.Interface(_abi) as IPrimexPricingLibraryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPrimexPricingLibraryMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPrimexPricingLibraryMock;
  }
}