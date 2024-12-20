/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TokenTransfersLibraryMock,
  TokenTransfersLibraryMockInterface,
} from "../../../contracts/mocks/TokenTransfersLibraryMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
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
    name: "doTransferFromTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    name: "doTransferIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    name: "doTransferOut",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001a5761010f9081610020823930815050f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c9081636d69093e14606057508063c37f7f7f14604b5763c66c253614603e57600080fd5b60453660a2565b50505080f35b60208260553660a2565b505050604051908152f35b90506080366003190112609a576001600160a01b0360043581811603609e5760243581811603609e5760443590811603609a576020918152f35b5080fd5b8280fd5b606090600319011260d4576001600160a01b0390600435828116810360d45791602435908116810360d4579060443590565b600080fdfea264697066735822122024a581df83e41fcb583eb53fc948302ff6061491459908fdc3b6090fa1bc569d64736f6c63430008120033";

type TokenTransfersLibraryMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenTransfersLibraryMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenTransfersLibraryMock__factory extends ContractFactory {
  constructor(...args: TokenTransfersLibraryMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TokenTransfersLibraryMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TokenTransfersLibraryMock__factory {
    return super.connect(runner) as TokenTransfersLibraryMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenTransfersLibraryMockInterface {
    return new Interface(_abi) as TokenTransfersLibraryMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenTransfersLibraryMock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TokenTransfersLibraryMock;
  }
}
