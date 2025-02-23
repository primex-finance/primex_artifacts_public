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
  MockFlashLoanReceiver,
  MockFlashLoanReceiverInterface,
} from "../../../contracts/mocks/MockFlashLoanReceiver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_flashLoanFees",
        type: "uint256[]",
      },
    ],
    name: "ExecutedWithFail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_flashLoanFees",
        type: "uint256[]",
      },
    ],
    name: "ExecutedWithSuccess",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "flashLoanFees",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAmountToApprove",
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
        internalType: "uint256",
        name: "amountToApprove",
        type: "uint256",
      },
    ],
    name: "setAmountToApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "fail",
        type: "bool",
      },
    ],
    name: "setFailExecutionTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523460155761062d908161001b8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c908163388f70f1146101f35781635e76bba3146101d857508063920f5c84146100695763bf443f851461004b57600080fd5b3461006457602036600319011261006457600435600155005b600080fd5b346100645760a03660031901126100645760043567ffffffffffffffff811161006457366023820112156100645780600401356100a581610246565b916100b36040519384610224565b8183526024602084019260051b8201019036821161006457602401915b8183106101b8578360243567ffffffffffffffff8111610064576100f8903690600401610274565b9060443567ffffffffffffffff811161006457610119903690600401610274565b9061012261025e565b506084359167ffffffffffffffff831161006457366023840112156100645782600401359367ffffffffffffffff85116101a2576040519261016e601f8701601f191660200185610224565b8584523660248787010111610064576000602087819860246101989901838901378601015261039d565b6040519015158152f35b634e487b7160e01b600052604160045260246000fd5b82356001600160a01b0381168103610064578152602092830192016100d0565b34610064576000366003190112610064576020906001548152f35b34610064576020366003190112610064576004358015158091036100645760ff801960005416911617600055600080f35b90601f8019910116810190811067ffffffffffffffff8211176101a257604052565b67ffffffffffffffff81116101a25760051b60200190565b606435906001600160a01b038216820361006457565b9080601f8301121561006457813561028b81610246565b926102996040519485610224565b81845260208085019260051b82010192831161006457602001905b8282106102c15750505090565b81358152602091820191016102b4565b906020808351928381520192019060005b8181106102ef5750505090565b82518452602093840193909201916001016102e2565b91939290936060830160608452855180915260206080850196019060005b8181106103545750505084610343918461035196970360208601526102d1565b9160408184039101526102d1565b90565b82516001600160a01b0316885260209788019790920191600101610323565b80518210156103875760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b9160ff600054166105bb5760005b835181101561057e5760246103c08285610373565b5160206001600160a01b036103d58589610373565b5116604051938480926370a0823160e01b82523060048301525afa9182156104bc57600092610548575b501161050457600154600081156104c857505b6020868051810103126100645760208601516001600160a01b03811691908290036100645760209060446001600160a01b0361044e868a610373565b5116936000604051958694859363095ea7b360e01b8552600485015260248401525af180156104bc57610485575b506001016103ab565b6020813d82116104b4575b8161049d60209383610224565b81010312610064575180151503610064573861047c565b3d9150610490565b6040513d6000823e3d90fd5b90506104d48285610373565b51906104e08385610373565b5182018092116104f05750610412565b634e487b7160e01b81526011600452602490fd5b606460405162461bcd60e51b815260206004820152602060248201527f496e76616c69642062616c616e636520666f722074686520636f6e74726163746044820152fd5b90916020823d8211610576575b8161056260209383610224565b8101031261057357505190386103ff565b80fd5b3d9150610555565b506040517fbd6b6bfac59612765a81cc4fdee74ab4859671fa14a562056f9eea438735a78a94509283926105b3929184610305565b0390a1600190565b6040517f9972b212e52913783072b960dd41527ae8b6e609d017b64039758dda0ce4127894509283926105ef929184610305565b0390a160009056fea26469706673582212204d6222925c06c6c4604b52d6c05a9c6f2966dc504e88ec421fd3d0786d53b1fe64736f6c634300081a0033";

type MockFlashLoanReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFlashLoanReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFlashLoanReceiver__factory extends ContractFactory {
  constructor(...args: MockFlashLoanReceiverConstructorParams) {
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
      MockFlashLoanReceiver & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockFlashLoanReceiver__factory {
    return super.connect(runner) as MockFlashLoanReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFlashLoanReceiverInterface {
    return new Interface(_abi) as MockFlashLoanReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockFlashLoanReceiver {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockFlashLoanReceiver;
  }
}
