/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICurveSwapFactory,
  ICurveSwapFactoryInterface,
} from "../../../../../contracts/interfaces/curve/ICurveCryptoSwapRegistry.sol/ICurveSwapFactory";

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
        internalType: "address[4]",
        name: "",
        type: "address[4]",
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
] as const;

export class ICurveSwapFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveSwapFactoryInterface {
    return new Interface(_abi) as ICurveSwapFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICurveSwapFactory {
    return new Contract(address, _abi, runner) as unknown as ICurveSwapFactory;
  }
}
