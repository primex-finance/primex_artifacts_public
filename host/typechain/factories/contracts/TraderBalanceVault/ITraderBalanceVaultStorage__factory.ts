/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITraderBalanceVaultStorage,
  ITraderBalanceVaultStorageInterface,
} from "../../../contracts/TraderBalanceVault/ITraderBalanceVaultStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "availableBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockedBalance",
        type: "uint256",
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
] as const;

export class ITraderBalanceVaultStorage__factory {
  static readonly abi = _abi;
  static createInterface(): ITraderBalanceVaultStorageInterface {
    return new Interface(_abi) as ITraderBalanceVaultStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITraderBalanceVaultStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ITraderBalanceVaultStorage;
  }
}