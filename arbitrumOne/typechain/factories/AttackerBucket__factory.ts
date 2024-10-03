/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AttackerBucket,
  AttackerBucketInterface,
} from "../AttackerBucket";

const _abi = [
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pToken",
    outputs: [
      {
        internalType: "contract IPToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPToken",
        name: "_pToken",
        type: "address",
      },
    ],
    name: "setPTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461001657610426908161001c8239f35b600080fdfe608060408181526004918236101561001657600080fd5b600091823560e01c91826301ffc9a7146103885750816306fdde031461025057816358a06f071461022757508063a1806d24146101e65763c47f00271461005c57600080fd5b346101e357602091826003193601126101df57803567ffffffffffffffff918282116101d757366023830112156101d7578101359182116101db57602490368284830101116101d7576100af84546103b6565b601f8111610179575b508394601f84116001146100f757509383948394936100ea575b5050508160011b916000199060031b1c191617815580f35b01013590503880806100d2565b601f198416957f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939186905b88821061015f575050846001969710610143575b50505050811b01815580f35b60001960f88660031b161c199201013516905538808080610137565b806001849786839596890101358155019601920190610123565b7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f850160051c8101918786106101cd575b601f0160051c01905b8181106101c257506100b8565b8581556001016101b5565b90915081906101ac565b8380fd5b8280fd5b5080fd5b80fd5b5090346101df5760203660031901126101df57356001600160a01b038116908190036101df576bffffffffffffffffffffffff60a01b600154161760015580f35b9050346101df57816003193601126101df5760015490516001600160a01b039091168152602090f35b919050346101e357806003193601126101e35781518181928154610273816103b6565b8085529060019081811690811561036a5750600114610311575b5050601f801994859203011682019482861067ffffffffffffffff8711176102fe575091849192828552602090818452845191828186015281955b8387106102e65750508394508582601f949501015201168101030190f35b868101820151898801890152958101958895506102c8565b634e487b7160e01b825260419052602490fd5b8380528392507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b82841061034f575050508201602001388061028d565b80546020858901810191909152879650909301928101610339565b9150506020925060ff191682850152151560051b830101388061028d565b839085346101db5760203660031901126101db57356001600160e01b03198116036101df5780600160209252f35b90600182811c921680156103e6575b60208310146103d057565b634e487b7160e01b600052602260045260246000fd5b91607f16916103c556fea2646970667358221220242e2c75a1f31b8f2050fe938e1462f6671335a5b16273b58c4fc7480dabbd3564736f6c63430008120033";

export class AttackerBucket__factory extends ContractFactory {
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
  ): Promise<AttackerBucket> {
    return super.deploy(overrides || {}) as Promise<AttackerBucket>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AttackerBucket {
    return super.attach(address) as AttackerBucket;
  }
  connect(signer: Signer): AttackerBucket__factory {
    return super.connect(signer) as AttackerBucket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackerBucketInterface {
    return new utils.Interface(_abi) as AttackerBucketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackerBucket {
    return new Contract(address, _abi, signerOrProvider) as AttackerBucket;
  }
}
