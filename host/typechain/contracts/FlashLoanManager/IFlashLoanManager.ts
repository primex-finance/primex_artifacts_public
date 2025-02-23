/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IFlashLoanManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "flashLoan"
      | "initialize"
      | "pause"
      | "setFlashLoanRates"
      | "unpause"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ChangedFlashLoanRates" | "FlashLoan"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [AddressLike, AddressLike[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFlashLoanRates",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFlashLoanRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
}

export namespace ChangedFlashLoanRatesEvent {
  export type InputTuple = [
    flashLoanFeeRate: BigNumberish,
    flashLoanProtocolRate: BigNumberish
  ];
  export type OutputTuple = [
    flashLoanFeeRate: bigint,
    flashLoanProtocolRate: bigint
  ];
  export interface OutputObject {
    flashLoanFeeRate: bigint;
    flashLoanProtocolRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FlashLoanEvent {
  export type InputTuple = [
    target: AddressLike,
    initiator: AddressLike,
    asset: AddressLike,
    amount: BigNumberish,
    flashLoanFee: BigNumberish,
    flashLoanProtocolFee: BigNumberish
  ];
  export type OutputTuple = [
    target: string,
    initiator: string,
    asset: string,
    amount: bigint,
    flashLoanFee: bigint,
    flashLoanProtocolFee: bigint
  ];
  export interface OutputObject {
    target: string;
    initiator: string;
    asset: string;
    amount: bigint;
    flashLoanFee: bigint;
    flashLoanProtocolFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IFlashLoanManager extends BaseContract {
  connect(runner?: ContractRunner | null): IFlashLoanManager;
  waitForDeployment(): Promise<this>;

  interface: IFlashLoanManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  flashLoan: TypedContractMethod<
    [
      _receiver: AddressLike,
      _buckets: AddressLike[],
      _amounts: BigNumberish[],
      _params: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      _registry: AddressLike,
      _primexDNS: AddressLike,
      _whiteBlackList: AddressLike,
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  setFlashLoanRates: TypedContractMethod<
    [_flashLoanFeeRate: BigNumberish, _flashLoanProtocolRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "flashLoan"
  ): TypedContractMethod<
    [
      _receiver: AddressLike,
      _buckets: AddressLike[],
      _amounts: BigNumberish[],
      _params: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _registry: AddressLike,
      _primexDNS: AddressLike,
      _whiteBlackList: AddressLike,
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFlashLoanRates"
  ): TypedContractMethod<
    [_flashLoanFeeRate: BigNumberish, _flashLoanProtocolRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ChangedFlashLoanRates"
  ): TypedContractEvent<
    ChangedFlashLoanRatesEvent.InputTuple,
    ChangedFlashLoanRatesEvent.OutputTuple,
    ChangedFlashLoanRatesEvent.OutputObject
  >;
  getEvent(
    key: "FlashLoan"
  ): TypedContractEvent<
    FlashLoanEvent.InputTuple,
    FlashLoanEvent.OutputTuple,
    FlashLoanEvent.OutputObject
  >;

  filters: {
    "ChangedFlashLoanRates(uint256,uint256)": TypedContractEvent<
      ChangedFlashLoanRatesEvent.InputTuple,
      ChangedFlashLoanRatesEvent.OutputTuple,
      ChangedFlashLoanRatesEvent.OutputObject
    >;
    ChangedFlashLoanRates: TypedContractEvent<
      ChangedFlashLoanRatesEvent.InputTuple,
      ChangedFlashLoanRatesEvent.OutputTuple,
      ChangedFlashLoanRatesEvent.OutputObject
    >;

    "FlashLoan(address,address,address,uint256,uint256,uint256)": TypedContractEvent<
      FlashLoanEvent.InputTuple,
      FlashLoanEvent.OutputTuple,
      FlashLoanEvent.OutputObject
    >;
    FlashLoan: TypedContractEvent<
      FlashLoanEvent.InputTuple,
      FlashLoanEvent.OutputTuple,
      FlashLoanEvent.OutputObject
    >;
  };
}
