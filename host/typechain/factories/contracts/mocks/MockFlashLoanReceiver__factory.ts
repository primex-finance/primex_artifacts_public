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
  "0x6080806040523461001657610631908161001c8239f35b600080fdfe60808060405260048036101561001457600080fd5b600091823560e01c908163388f70f1146101e45781635e76bba3146101c857508063920f5c841461006a5763bf443f851461004e57600080fd5b34610066576020366003190112610066573560015580f35b5080fd5b50346100665760a03660031901126100665780359067ffffffffffffffff8083116101c457366023840112156101c45782820135936100a885610249565b6100b56040519182610211565b8581526020948582016024809860051b830101913683116101c0578801905b82821061019d575050508535838111610187576100f49036908601610261565b916044358481116100665761010c9036908701610261565b936064356001600160a01b0381160361006657608435958187116101875736602388011215610187578681013591821161018b575060405195610158601f8301601f1916890188610211565b81875236898383010111610187579080889961017d9993018389013786010152610391565b6040519015158152f35b8280fd5b634e487b7160e01b8352604190528782fd5b81356001600160a01b03811681036101bc5781529087019087016100d4565b8580fd5b8480fd5b8380fd5b8390346100665781600319360112610066576020906001548152f35b50503461006657602036600319011261006657358015158091036100665760ff8019835416911617815580f35b90601f8019910116810190811067ffffffffffffffff82111761023357604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116102335760051b60200190565b81601f820112156102bf5780359161027883610249565b926102866040519485610211565b808452602092838086019260051b8201019283116102bf578301905b8282106102b0575050505090565b813581529083019083016102a2565b600080fd5b90815180825260208080930193019160005b8281106102e4575050505090565b8351855293810193928101926001016102d6565b91939290936060830194606084528051809652608084019560208092019060005b81811061034a5750505094610339916103479596858303908601526102c4565b9160408184039101526102c4565b90565b82516001600160a01b031689529783019791830191600101610319565b805182101561037b5760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b929060009360ff8554166105c157845b8151811015610582576103b48184610367565b516001600160a01b0390816103c98486610367565b5116916040908151938480946370a0823160e01b8252600492308484015260209687916024998a915afa918215610578578d92610549575b50116105095760015480156104d6575b848a8051810103126104d257848a0151928084168094036104ce57918c60449287959461043e8b8d610367565b5116908751998a96879563095ea7b360e01b87528601528401525af19081156104c5575061048e575b5050600019811461047a576001016103a1565b634e487b7160e01b86526011600452602486fd5b81813d83116104be575b6104a28183610211565b810103126104ba5751801515036101bc573880610467565b8680fd5b503d610498565b513d8a823e3d90fd5b8c80fd5b8b80fd5b506104e18689610367565b516104ec878c610367565b5181018091111561041157634e487b7160e01b8c5260118252858cfd5b60649084868186519362461bcd60e51b85528401528201527f496e76616c69642062616c616e636520666f722074686520636f6e74726163746044820152fd5b9091508581813d8311610571575b6105618183610211565b810103126104ce57519038610401565b503d610557565b85513d8f823e3d90fd5b509150917fbd6b6bfac59612765a81cc4fdee74ab4859671fa14a562056f9eea438735a78a93506105b990604051938493846102f8565b0390a1600190565b9091506105f57f9972b212e52913783072b960dd41527ae8b6e609d017b64039758dda0ce4127893604051938493846102f8565b0390a19056fea26469706673582212206c68c9851d6f363468cf24442eecdf442fb1c2632c625f2c81ad1119695c876764736f6c63430008120033";

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
