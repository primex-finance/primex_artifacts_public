/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILiquidityMiningRewardDistributorStorage,
  ILiquidityMiningRewardDistributorStorageInterface,
} from "../ILiquidityMiningRewardDistributorStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "extraRewards",
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
    name: "pmx",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reinvestmentDuration",
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
    name: "reinvestmentRate",
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
];

export class ILiquidityMiningRewardDistributorStorage__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquidityMiningRewardDistributorStorageInterface {
    return new utils.Interface(
      _abi
    ) as ILiquidityMiningRewardDistributorStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILiquidityMiningRewardDistributorStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILiquidityMiningRewardDistributorStorage;
  }
}