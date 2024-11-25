/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICurveBotLens,
  ICurveBotLensInterface,
} from "../../../../contracts/TestnetServices/interfaces/ICurveBotLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurvePool",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256[3]",
        name: "_amounts",
        type: "uint256[3]",
      },
    ],
    name: "removeAndSetLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICurveBotLens__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveBotLensInterface {
    return new Interface(_abi) as ICurveBotLensInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICurveBotLens {
    return new Contract(address, _abi, runner) as unknown as ICurveBotLens;
  }
}