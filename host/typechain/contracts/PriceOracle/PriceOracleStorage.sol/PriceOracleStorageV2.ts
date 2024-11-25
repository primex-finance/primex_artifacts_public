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
} from "../../../common";

export interface PriceOracleStorageV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "chainlinkPriceFeedsUsd"
      | "eth"
      | "gasPriceFeed"
      | "pairPriceDrops"
      | "pyth"
      | "pythPairIds"
      | "registry"
      | "supportsInterface"
      | "timeTolerance"
      | "univ3TrustedPairs"
      | "univ3TypeOracles"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;

  encodeFunctionData(
    functionFragment: "chainlinkPriceFeedsUsd",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "eth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gasPriceFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pairPriceDrops",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pyth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pythPairIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "timeTolerance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "univ3TrustedPairs",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "univ3TypeOracles",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "chainlinkPriceFeedsUsd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "eth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gasPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairPriceDrops",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pyth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pythPairIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeTolerance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "univ3TrustedPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "univ3TypeOracles",
    data: BytesLike
  ): Result;
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

export interface PriceOracleStorageV2 extends BaseContract {
  connect(runner?: ContractRunner | null): PriceOracleStorageV2;
  waitForDeployment(): Promise<this>;

  interface: PriceOracleStorageV2Interface;

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

  chainlinkPriceFeedsUsd: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  eth: TypedContractMethod<[], [string], "view">;

  gasPriceFeed: TypedContractMethod<[], [string], "view">;

  pairPriceDrops: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  pyth: TypedContractMethod<[], [string], "view">;

  pythPairIds: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  timeTolerance: TypedContractMethod<[], [bigint], "view">;

  univ3TrustedPairs: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike, arg2: AddressLike],
    [boolean],
    "view"
  >;

  univ3TypeOracles: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "chainlinkPriceFeedsUsd"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "eth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gasPriceFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pairPriceDrops"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "pyth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pythPairIds"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "timeTolerance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "univ3TrustedPairs"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike, arg2: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "univ3TypeOracles"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;

  filters: {
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
  };
}