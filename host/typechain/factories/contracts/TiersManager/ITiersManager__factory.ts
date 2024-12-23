/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITiersManager,
  ITiersManagerInterface,
} from "../../../contracts/TiersManager/ITiersManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_tiers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_thresholds",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "_clearTiers",
        type: "bool",
      },
    ],
    name: "addTiers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_indexes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_newThresholds",
        type: "uint256[]",
      },
    ],
    name: "changeThresholdForTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getLenderTierForAddress",
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
    name: "getTiers",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getTraderTierForAddress",
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
        internalType: "address[]",
        name: "_userAddresses",
        type: "address[]",
      },
    ],
    name: "getTraderTiersForAddresses",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pmx",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lendingNFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tradingNFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_farmingNFT",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tiers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_thresholds",
        type: "uint256[]",
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
        internalType: "address payable",
        name: "_traderBalanceVault",
        type: "address",
      },
    ],
    name: "initializeAfterUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pmx",
        type: "address",
      },
    ],
    name: "setPMX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITiersManager__factory {
  static readonly abi = _abi;
  static createInterface(): ITiersManagerInterface {
    return new Interface(_abi) as ITiersManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITiersManager {
    return new Contract(address, _abi, runner) as unknown as ITiersManager;
  }
}
