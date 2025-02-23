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
  LiquidityMiningRewardDistributorStorage,
  LiquidityMiningRewardDistributorStorageInterface,
} from "../../../contracts/LiquidityMiningRewardDistributor/LiquidityMiningRewardDistributorStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "extraRewards",
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
  {
    inputs: [],
    name: "paused",
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
  {
    inputs: [],
    name: "pmx",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primexDNS",
    outputs: [
      {
        internalType: "contract IPrimexDNSV3",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
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
  {
    inputs: [],
    name: "reinvestmentDuration",
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
  {
    inputs: [],
    name: "reinvestmentRate",
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
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
  {
    inputs: [],
    name: "traderBalanceVault",
    outputs: [
      {
        internalType: "contract ITraderBalanceVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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

const _bytecode =
  "0x6080806040523460155761032d908161001b8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a7146102c1575080630460f0f3146102985780633f4a2d271461026f5780635c975abb1461024c57806361d027b3146102235780637b103999146101fa57806394a3e69e146101dc5780639968861e146101b3578063acfee9cb146101955763c15a63371461008d57600080fd5b3461017a57604036600319011261017a576004356001600160a01b0381169081900361017a576024359067ffffffffffffffff821161017a573660238301121561017a5781600401359067ffffffffffffffff821161017f5760405191601f8101601f19908116603f0116830167ffffffffffffffff81118482101761017f57604052808352366024828601011161017a576020816000926024839701838701378401015260005260d082526040600020604051828193519060005b828110610166575050810191825290038201902054604051908152f35b808201870151868201528593508601610149565b600080fd5b634e487b7160e01b600052604160045260246000fd5b3461017a57600036600319011261017a57602060ce54604051908152f35b3461017a57600036600319011261017a5760cb546040516001600160a01b039091168152602090f35b3461017a57600036600319011261017a57602060cf54604051908152f35b3461017a57600036600319011261017a5760cc546040516001600160a01b039091168152602090f35b3461017a57600036600319011261017a5760cd546040516001600160a01b039091168152602090f35b3461017a57600036600319011261017a57602060ff603354166040519015158152f35b3461017a57600036600319011261017a5760c9546040516001600160a01b039091168152602090f35b3461017a57600036600319011261017a5760ca546040516001600160a01b039091168152602090f35b3461017a57602036600319011261017a576004359063ffffffff60e01b821680920361017a576020916301ffc9a760e01b148152f3fea26469706673582212206af7718179a4fd6ef837ce0a1e386217d67dbca26dc8c4c32f1b493ab0326f0f64736f6c634300081a0033";

type LiquidityMiningRewardDistributorStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityMiningRewardDistributorStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityMiningRewardDistributorStorage__factory extends ContractFactory {
  constructor(
    ...args: LiquidityMiningRewardDistributorStorageConstructorParams
  ) {
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
      LiquidityMiningRewardDistributorStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): LiquidityMiningRewardDistributorStorage__factory {
    return super.connect(
      runner
    ) as LiquidityMiningRewardDistributorStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityMiningRewardDistributorStorageInterface {
    return new Interface(
      _abi
    ) as LiquidityMiningRewardDistributorStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LiquidityMiningRewardDistributorStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as LiquidityMiningRewardDistributorStorage;
  }
}
