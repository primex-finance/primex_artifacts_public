/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMaliciousDexMock,
  IMaliciousDexMockInterface,
} from "../../../../contracts/mocks/mocksInterfaces/IMaliciousDexMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMaliciousDexMock__factory {
  static readonly abi = _abi;
  static createInterface(): IMaliciousDexMockInterface {
    return new Interface(_abi) as IMaliciousDexMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMaliciousDexMock {
    return new Contract(address, _abi, runner) as unknown as IMaliciousDexMock;
  }
}
