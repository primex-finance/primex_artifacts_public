/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICurveCryptoSwapRegistry,
  ICurveCryptoSwapRegistryInterface,
} from "../../../../../contracts/interfaces/curve/ICurveCryptoSwapRegistry.sol/ICurveCryptoSwapRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "get_coins",
    outputs: [
      {
        internalType: "address[8]",
        name: "",
        type: "address[8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "get_gauges",
    outputs: [
      {
        internalType: "address[10]",
        name: "",
        type: "address[10]",
      },
      {
        internalType: "uint128[10]",
        name: "",
        type: "uint128[10]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lp",
        type: "address",
      },
    ],
    name: "get_n_coins",
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
        name: "lp",
        type: "address",
      },
    ],
    name: "get_pool_from_lp_token",
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
        internalType: "address",
        name: "lp",
        type: "address",
      },
    ],
    name: "get_virtual_price_from_lp_token",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "pool_list",
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
] as const;

export class ICurveCryptoSwapRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveCryptoSwapRegistryInterface {
    return new Interface(_abi) as ICurveCryptoSwapRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICurveCryptoSwapRegistry {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ICurveCryptoSwapRegistry;
  }
}