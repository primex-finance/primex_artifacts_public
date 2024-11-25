/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPositionManagerStorageV2,
  IPositionManagerStorageV2Interface,
} from "../../../../contracts/PositionManager/IPositionManagerStorage.sol/IPositionManagerStorageV2";

const _abi = [
  {
    inputs: [],
    name: "positionManagerExtension",
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

export class IPositionManagerStorageV2__factory {
  static readonly abi = _abi;
  static createInterface(): IPositionManagerStorageV2Interface {
    return new Interface(_abi) as IPositionManagerStorageV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPositionManagerStorageV2 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPositionManagerStorageV2;
  }
}
