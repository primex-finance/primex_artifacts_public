/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISwapManagerStorage,
  ISwapManagerStorageInterface,
} from "../../../contracts/SwapManager/ISwapManagerStorage";

const _abi = [
  {
    inputs: [],
    name: "priceOracle",
    outputs: [
      {
        internalType: "contract IPriceOracleV2",
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
    inputs: [],
    name: "whiteBlackList",
    outputs: [
      {
        internalType: "contract IWhiteBlackList",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ISwapManagerStorage__factory {
  static readonly abi = _abi;
  static createInterface(): ISwapManagerStorageInterface {
    return new Interface(_abi) as ISwapManagerStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ISwapManagerStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ISwapManagerStorage;
  }
}