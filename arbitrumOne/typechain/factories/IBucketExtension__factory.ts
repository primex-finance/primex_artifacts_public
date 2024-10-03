/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBucketExtension,
  IBucketExtensionInterface,
} from "../IBucketExtension";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TopUpTreasury",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrowAssetReceiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawFromAave",
    type: "event",
  },
  {
    inputs: [],
    name: "bucketExtension",
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
        internalType: "string",
        name: "_bucketTo",
        type: "string",
      },
      {
        internalType: "contract ISwapManager",
        name: "_swapManager",
        type: "address",
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
        name: "_megaRoutes",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_amountOutMin",
        type: "uint256",
      },
    ],
    name: "depositFromBucket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawBucketLiquidityFromAave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBucketExtension__factory {
  static readonly abi = _abi;
  static createInterface(): IBucketExtensionInterface {
    return new utils.Interface(_abi) as IBucketExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBucketExtension {
    return new Contract(address, _abi, signerOrProvider) as IBucketExtension;
  }
}
