/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAlgebraPoolPermissionedActions,
  IAlgebraPoolPermissionedActionsInterface,
} from "../IAlgebraPoolPermissionedActions";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "communityFee0",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "communityFee1",
        type: "uint8",
      },
    ],
    name: "setCommunityFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "virtualPoolAddress",
        type: "address",
      },
    ],
    name: "setIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newLiquidityCooldown",
        type: "uint32",
      },
    ],
    name: "setLiquidityCooldown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAlgebraPoolPermissionedActions__factory {
  static readonly abi = _abi;
  static createInterface(): IAlgebraPoolPermissionedActionsInterface {
    return new utils.Interface(
      _abi
    ) as IAlgebraPoolPermissionedActionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAlgebraPoolPermissionedActions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAlgebraPoolPermissionedActions;
  }
}