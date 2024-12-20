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

export interface FlashLoanManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "flashLoan"
      | "flashLoanFeeRate"
      | "flashLoanProtocolRate"
      | "initialize"
      | "pause"
      | "paused"
      | "primexDNS"
      | "registry"
      | "setFlashLoanRates"
      | "supportsInterface"
      | "unpause"
      | "whiteBlackList"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangedFlashLoanRates"
      | "FlashLoan"
      | "Initialized"
      | "Paused"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [AddressLike, AddressLike[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoanFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoanProtocolRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFlashLoanRates",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "flashLoanFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flashLoanProtocolRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFlashLoanRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;
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

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FlashLoanManager extends BaseContract {
  connect(runner?: ContractRunner | null): FlashLoanManager;
  waitForDeployment(): Promise<this>;

  interface: FlashLoanManagerInterface;

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
      receiver: AddressLike,
      buckets: AddressLike[],
      amounts: BigNumberish[],
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  flashLoanFeeRate: TypedContractMethod<[], [bigint], "view">;

  flashLoanProtocolRate: TypedContractMethod<[], [bigint], "view">;

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

  paused: TypedContractMethod<[], [boolean], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setFlashLoanRates: TypedContractMethod<
    [
      _newFlashLoanFeeRate: BigNumberish,
      _newFlashLoanProtocolRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  whiteBlackList: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "flashLoan"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      buckets: AddressLike[],
      amounts: BigNumberish[],
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "flashLoanFeeRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "flashLoanProtocolRate"
  ): TypedContractMethod<[], [bigint], "view">;
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
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "primexDNS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFlashLoanRates"
  ): TypedContractMethod<
    [
      _newFlashLoanFeeRate: BigNumberish,
      _newFlashLoanProtocolRate: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whiteBlackList"
  ): TypedContractMethod<[], [string], "view">;

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
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
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

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
