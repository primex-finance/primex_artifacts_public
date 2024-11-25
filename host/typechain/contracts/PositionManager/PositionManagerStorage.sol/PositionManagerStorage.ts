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

export interface PositionManagerStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bucketPositionIds"
      | "defaultOracleTolerableLimit"
      | "keeperRewardDistributor"
      | "maintenanceBuffer"
      | "maxPositionSize"
      | "minPositionAsset"
      | "minPositionSize"
      | "oracleTolerableLimitMultiplier"
      | "paused"
      | "positionsId"
      | "priceOracle"
      | "primexDNS"
      | "registry"
      | "securityBuffer"
      | "spotTradingRewardDistributor"
      | "supportsInterface"
      | "traderBalanceVault"
      | "traderPositionIds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "Paused" | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "bucketPositionIds",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultOracleTolerableLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "keeperRewardDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maintenanceBuffer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxPositionSize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minPositionAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minPositionSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleTolerableLimitMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionsId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "securityBuffer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "spotTradingRewardDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "traderPositionIds",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "bucketPositionIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultOracleTolerableLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "keeperRewardDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maintenanceBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxPositionSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minPositionAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minPositionSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleTolerableLimitMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionsId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "securityBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "spotTradingRewardDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "traderBalanceVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "traderPositionIds",
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

export interface PositionManagerStorage extends BaseContract {
  connect(runner?: ContractRunner | null): PositionManagerStorage;
  waitForDeployment(): Promise<this>;

  interface: PositionManagerStorageInterface;

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

  bucketPositionIds: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  defaultOracleTolerableLimit: TypedContractMethod<[], [bigint], "view">;

  keeperRewardDistributor: TypedContractMethod<[], [string], "view">;

  maintenanceBuffer: TypedContractMethod<[], [bigint], "view">;

  maxPositionSize: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  minPositionAsset: TypedContractMethod<[], [string], "view">;

  minPositionSize: TypedContractMethod<[], [bigint], "view">;

  oracleTolerableLimitMultiplier: TypedContractMethod<[], [bigint], "view">;

  paused: TypedContractMethod<[], [boolean], "view">;

  positionsId: TypedContractMethod<[], [bigint], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  securityBuffer: TypedContractMethod<[], [bigint], "view">;

  spotTradingRewardDistributor: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  traderBalanceVault: TypedContractMethod<[], [string], "view">;

  traderPositionIds: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bucketPositionIds"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "defaultOracleTolerableLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "keeperRewardDistributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "maintenanceBuffer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxPositionSize"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "minPositionAsset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minPositionSize"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "oracleTolerableLimitMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "positionsId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "primexDNS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "securityBuffer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "spotTradingRewardDistributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "traderBalanceVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "traderPositionIds"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
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
