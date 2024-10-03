/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OVMGasPriceOracleMock,
  OVMGasPriceOracleMockInterface,
} from "../OVMGasPriceOracleMock";

const _abi = [
  {
    inputs: [],
    name: "l1BaseFee",
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
    inputs: [],
    name: "overhead",
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
    inputs: [],
    name: "scalar",
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
];

const _bytecode =
  "0x608080604052346100155760cc908161001b8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c9081630c18c16214607957508063519b4bd314605c5763f45e65d814603e57600080fd5b34605957806003193601126059576020604051620a6fe08152f35b80fd5b503460595780600319360112605957602060405163b2d05e008152f35b905034609257816003193601126092578060bc60209252f35b5080fdfea2646970667358221220a57f230a86fd16c744400f725cfeceb0fed4c25584d019a290801fa9bc2bb15e64736f6c63430008120033";

export class OVMGasPriceOracleMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OVMGasPriceOracleMock> {
    return super.deploy(overrides || {}) as Promise<OVMGasPriceOracleMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OVMGasPriceOracleMock {
    return super.attach(address) as OVMGasPriceOracleMock;
  }
  connect(signer: Signer): OVMGasPriceOracleMock__factory {
    return super.connect(signer) as OVMGasPriceOracleMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OVMGasPriceOracleMockInterface {
    return new utils.Interface(_abi) as OVMGasPriceOracleMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OVMGasPriceOracleMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OVMGasPriceOracleMock;
  }
}
