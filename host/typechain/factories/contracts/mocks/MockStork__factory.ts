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
  MockStork,
  MockStorkInterface,
} from "../../../contracts/mocks/MockStork";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle_pubkey",
        type: "address",
      },
      {
        internalType: "string",
        name: "asset_pair_id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "verifySignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523460155761024b908161001b8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c639c8817151461002857600080fd5b346101d85760e03660031901126101d8576004356001600160a01b03811691908281036101d85760243567ffffffffffffffff81116101d857366023820112156101d85780600401359067ffffffffffffffff82116101dd57610095601f8301601f1916602001856101f3565b81845236602483830101116101d85781600092602460209301838701378401015260c4359160ff83168093036101d8576040519060208201926bffffffffffffffffffffffff199060601b16835280519060005b8281106101c2578660206000608089898961012260406034838d81016044358382015260643560548201520301888101845201826101f3565b519020604051858101917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008352603c820152603c8152610163605c826101f3565b5190209060405191825284820152608435604082015260a435606082015282805260015afa156101b6576000516001600160a01b0316036101ad57602060015b6040519015158152f35b602060006101a3565b6040513d6000823e3d90fd5b80602080928401015160348287010152016100e9565b600080fd5b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176101dd5760405256fea26469706673582212201d6991a4d7ff7ec03baddb9780bc7c75ed640c9438971950251ff0b51041297064736f6c634300081a0033";

type MockStorkConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockStorkConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockStork__factory extends ContractFactory {
  constructor(...args: MockStorkConstructorParams) {
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
      MockStork & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockStork__factory {
    return super.connect(runner) as MockStork__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockStorkInterface {
    return new Interface(_abi) as MockStorkInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockStork {
    return new Contract(address, _abi, runner) as unknown as MockStork;
  }
}
