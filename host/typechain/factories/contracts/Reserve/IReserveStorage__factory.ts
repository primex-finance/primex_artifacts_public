/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IReserveStorage,
  IReserveStorageInterface,
} from "../../../contracts/Reserve/IReserveStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferFromReserve",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pToken",
        type: "address",
      },
    ],
    name: "transferRestrictions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
] as const;

export class IReserveStorage__factory {
  static readonly abi = _abi;
  static createInterface(): IReserveStorageInterface {
    return new Interface(_abi) as IReserveStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IReserveStorage {
    return new Contract(address, _abi, runner) as unknown as IReserveStorage;
  }
}
