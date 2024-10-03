/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBalancerBotLens,
  IBalancerBotLensInterface,
} from "../IBalancerBotLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBalancer",
        name: "_vault",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct IBalancerBotLens.PoolUpdateData[]",
        name: "_pools",
        type: "tuple[]",
      },
      {
        internalType: "contract IERC20[]",
        name: "_tokensToReturn",
        type: "address[]",
      },
    ],
    name: "removeAndSetLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBalancerBotLens__factory {
  static readonly abi = _abi;
  static createInterface(): IBalancerBotLensInterface {
    return new utils.Interface(_abi) as IBalancerBotLensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBalancerBotLens {
    return new Contract(address, _abi, signerOrProvider) as IBalancerBotLens;
  }
}
