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

export declare namespace OrallyStructs {
  export type CustomNumberStruct = {
    feedId: string;
    value: BigNumberish;
    decimals: BigNumberish;
  };

  export type CustomNumberStructOutput = [
    feedId: string,
    value: bigint,
    decimals: bigint
  ] & { feedId: string; value: bigint; decimals: bigint };

  export type CustomStringStruct = { feedId: string; value: string };

  export type CustomStringStructOutput = [feedId: string, value: string] & {
    feedId: string;
    value: string;
  };

  export type PriceFeedStruct = {
    pairId: string;
    price: BigNumberish;
    decimals: BigNumberish;
    timestamp: BigNumberish;
  };

  export type PriceFeedStructOutput = [
    pairId: string,
    price: bigint,
    decimals: bigint,
    timestamp: bigint
  ] & { pairId: string; price: bigint; decimals: bigint; timestamp: bigint };
}

export interface IOrallyVerifierOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getCustomNumber"
      | "getCustomString"
      | "getPriceFeed"
      | "isReporter"
      | "updateCustomNumber"
      | "updateCustomString"
      | "updatePriceFeed"
      | "verifyCustomNumber"
      | "verifyCustomString"
      | "verifyPriceFeed"
      | "verifyReadContractData"
      | "verifyReadLogsData"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CustomNumberSaved"
      | "CustomStringSaved"
      | "PriceFeedSaved"
      | "ReporterAdded"
      | "ReporterRemoved"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getCustomNumber",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCustomString",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceFeed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isReporter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCustomNumber",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCustomString",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCustomNumber",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCustomString",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyPriceFeed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyReadContractData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyReadLogsData",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCustomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCustomString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isReporter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCustomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCustomString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCustomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCustomString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyReadContractData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyReadLogsData",
    data: BytesLike
  ): Result;
}

export namespace CustomNumberSavedEvent {
  export type InputTuple = [
    feedId: string,
    value: BigNumberish,
    decimals: BigNumberish
  ];
  export type OutputTuple = [feedId: string, value: bigint, decimals: bigint];
  export interface OutputObject {
    feedId: string;
    value: bigint;
    decimals: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CustomStringSavedEvent {
  export type InputTuple = [feedId: string, value: string];
  export type OutputTuple = [feedId: string, value: string];
  export interface OutputObject {
    feedId: string;
    value: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceFeedSavedEvent {
  export type InputTuple = [
    pairId: string,
    price: BigNumberish,
    decimals: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    pairId: string,
    price: bigint,
    decimals: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    pairId: string;
    price: bigint;
    decimals: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReporterAddedEvent {
  export type InputTuple = [reporter: AddressLike];
  export type OutputTuple = [reporter: string];
  export interface OutputObject {
    reporter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReporterRemovedEvent {
  export type InputTuple = [reporter: AddressLike];
  export type OutputTuple = [reporter: string];
  export interface OutputObject {
    reporter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IOrallyVerifierOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IOrallyVerifierOracle;
  waitForDeployment(): Promise<this>;

  interface: IOrallyVerifierOracleInterface;

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

  getCustomNumber: TypedContractMethod<
    [_feedId: string],
    [OrallyStructs.CustomNumberStructOutput],
    "view"
  >;

  getCustomString: TypedContractMethod<
    [_feedId: string],
    [OrallyStructs.CustomStringStructOutput],
    "view"
  >;

  getPriceFeed: TypedContractMethod<
    [pairId: string],
    [OrallyStructs.PriceFeedStructOutput],
    "view"
  >;

  isReporter: TypedContractMethod<[_reporter: AddressLike], [boolean], "view">;

  updateCustomNumber: TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.CustomNumberStructOutput],
    "nonpayable"
  >;

  updateCustomString: TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.CustomStringStructOutput],
    "nonpayable"
  >;

  updatePriceFeed: TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.PriceFeedStructOutput],
    "nonpayable"
  >;

  verifyCustomNumber: TypedContractMethod<
    [data: BytesLike],
    [OrallyStructs.CustomNumberStructOutput],
    "view"
  >;

  verifyCustomString: TypedContractMethod<
    [data: BytesLike],
    [OrallyStructs.CustomStringStructOutput],
    "view"
  >;

  verifyPriceFeed: TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.PriceFeedStructOutput],
    "view"
  >;

  verifyReadContractData: TypedContractMethod<
    [_chainData: BytesLike],
    [[string, string]],
    "view"
  >;

  verifyReadLogsData: TypedContractMethod<
    [_chainData: BytesLike],
    [[string, string]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getCustomNumber"
  ): TypedContractMethod<
    [_feedId: string],
    [OrallyStructs.CustomNumberStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCustomString"
  ): TypedContractMethod<
    [_feedId: string],
    [OrallyStructs.CustomStringStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriceFeed"
  ): TypedContractMethod<
    [pairId: string],
    [OrallyStructs.PriceFeedStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "isReporter"
  ): TypedContractMethod<[_reporter: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "updateCustomNumber"
  ): TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.CustomNumberStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateCustomString"
  ): TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.CustomStringStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatePriceFeed"
  ): TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.PriceFeedStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verifyCustomNumber"
  ): TypedContractMethod<
    [data: BytesLike],
    [OrallyStructs.CustomNumberStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyCustomString"
  ): TypedContractMethod<
    [data: BytesLike],
    [OrallyStructs.CustomStringStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyPriceFeed"
  ): TypedContractMethod<
    [_data: BytesLike],
    [OrallyStructs.PriceFeedStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyReadContractData"
  ): TypedContractMethod<[_chainData: BytesLike], [[string, string]], "view">;
  getFunction(
    nameOrSignature: "verifyReadLogsData"
  ): TypedContractMethod<[_chainData: BytesLike], [[string, string]], "view">;

  getEvent(
    key: "CustomNumberSaved"
  ): TypedContractEvent<
    CustomNumberSavedEvent.InputTuple,
    CustomNumberSavedEvent.OutputTuple,
    CustomNumberSavedEvent.OutputObject
  >;
  getEvent(
    key: "CustomStringSaved"
  ): TypedContractEvent<
    CustomStringSavedEvent.InputTuple,
    CustomStringSavedEvent.OutputTuple,
    CustomStringSavedEvent.OutputObject
  >;
  getEvent(
    key: "PriceFeedSaved"
  ): TypedContractEvent<
    PriceFeedSavedEvent.InputTuple,
    PriceFeedSavedEvent.OutputTuple,
    PriceFeedSavedEvent.OutputObject
  >;
  getEvent(
    key: "ReporterAdded"
  ): TypedContractEvent<
    ReporterAddedEvent.InputTuple,
    ReporterAddedEvent.OutputTuple,
    ReporterAddedEvent.OutputObject
  >;
  getEvent(
    key: "ReporterRemoved"
  ): TypedContractEvent<
    ReporterRemovedEvent.InputTuple,
    ReporterRemovedEvent.OutputTuple,
    ReporterRemovedEvent.OutputObject
  >;

  filters: {
    "CustomNumberSaved(string,uint256,uint256)": TypedContractEvent<
      CustomNumberSavedEvent.InputTuple,
      CustomNumberSavedEvent.OutputTuple,
      CustomNumberSavedEvent.OutputObject
    >;
    CustomNumberSaved: TypedContractEvent<
      CustomNumberSavedEvent.InputTuple,
      CustomNumberSavedEvent.OutputTuple,
      CustomNumberSavedEvent.OutputObject
    >;

    "CustomStringSaved(string,string)": TypedContractEvent<
      CustomStringSavedEvent.InputTuple,
      CustomStringSavedEvent.OutputTuple,
      CustomStringSavedEvent.OutputObject
    >;
    CustomStringSaved: TypedContractEvent<
      CustomStringSavedEvent.InputTuple,
      CustomStringSavedEvent.OutputTuple,
      CustomStringSavedEvent.OutputObject
    >;

    "PriceFeedSaved(string,uint256,uint256,uint256)": TypedContractEvent<
      PriceFeedSavedEvent.InputTuple,
      PriceFeedSavedEvent.OutputTuple,
      PriceFeedSavedEvent.OutputObject
    >;
    PriceFeedSaved: TypedContractEvent<
      PriceFeedSavedEvent.InputTuple,
      PriceFeedSavedEvent.OutputTuple,
      PriceFeedSavedEvent.OutputObject
    >;

    "ReporterAdded(address)": TypedContractEvent<
      ReporterAddedEvent.InputTuple,
      ReporterAddedEvent.OutputTuple,
      ReporterAddedEvent.OutputObject
    >;
    ReporterAdded: TypedContractEvent<
      ReporterAddedEvent.InputTuple,
      ReporterAddedEvent.OutputTuple,
      ReporterAddedEvent.OutputObject
    >;

    "ReporterRemoved(address)": TypedContractEvent<
      ReporterRemovedEvent.InputTuple,
      ReporterRemovedEvent.OutputTuple,
      ReporterRemovedEvent.OutputObject
    >;
    ReporterRemoved: TypedContractEvent<
      ReporterRemovedEvent.InputTuple,
      ReporterRemovedEvent.OutputTuple,
      ReporterRemovedEvent.OutputObject
    >;
  };
}
