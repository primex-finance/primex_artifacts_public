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

export declare namespace PrimexPricingLibrary {
  export type PathStruct = {
    dexName: string;
    shares: BigNumberish;
    payload: BytesLike;
  };

  export type PathStructOutput = [
    dexName: string,
    shares: bigint,
    payload: string
  ] & { dexName: string; shares: bigint; payload: string };

  export type RouteStruct = {
    to: AddressLike;
    paths: PrimexPricingLibrary.PathStruct[];
  };

  export type RouteStructOutput = [
    to: string,
    paths: PrimexPricingLibrary.PathStructOutput[]
  ] & { to: string; paths: PrimexPricingLibrary.PathStructOutput[] };

  export type MegaRouteStruct = {
    shares: BigNumberish;
    routes: PrimexPricingLibrary.RouteStruct[];
  };

  export type MegaRouteStructOutput = [
    shares: bigint,
    routes: PrimexPricingLibrary.RouteStructOutput[]
  ] & { shares: bigint; routes: PrimexPricingLibrary.RouteStructOutput[] };
}

export interface BatchManagerV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "closeBatchPositions"
      | "gasPerBatch"
      | "gasPerPosition"
      | "initialize"
      | "initializeAfterUpgrade"
      | "pause"
      | "paused"
      | "positionManager"
      | "priceOracle"
      | "registry"
      | "setGasPerBatch"
      | "setGasPerPosition"
      | "setValue"
      | "supportsInterface"
      | "testUpgrade"
      | "unpause"
      | "value"
      | "whiteBlackList"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangeGasPerBatch"
      | "ChangeGasPerPosition"
      | "Initialized"
      | "Paused"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "closeBatchPositions",
    values: [
      BigNumberish[],
      PrimexPricingLibrary.MegaRouteStruct[],
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike[][],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "gasPerBatch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gasPerPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeAfterUpgrade",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setGasPerBatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGasPerPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "closeBatchPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasPerBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasPerPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeAfterUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGasPerBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGasPerPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;
}

export namespace ChangeGasPerBatchEvent {
  export type InputTuple = [gasPerBatch: BigNumberish];
  export type OutputTuple = [gasPerBatch: bigint];
  export interface OutputObject {
    gasPerBatch: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeGasPerPositionEvent {
  export type InputTuple = [gasPerPosition: BigNumberish];
  export type OutputTuple = [gasPerPosition: bigint];
  export interface OutputObject {
    gasPerPosition: bigint;
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

export interface BatchManagerV2 extends BaseContract {
  connect(runner?: ContractRunner | null): BatchManagerV2;
  waitForDeployment(): Promise<this>;

  interface: BatchManagerV2Interface;

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

  closeBatchPositions: TypedContractMethod<
    [
      _ids: BigNumberish[],
      _megaRoutes: PrimexPricingLibrary.MegaRouteStruct[],
      _positionAsset: AddressLike,
      _soldAsset: AddressLike,
      _bucket: AddressLike,
      _conditionIndexes: BigNumberish[],
      _closeReason: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _nativePmxOracleData: BytesLike,
      _nativeSoldAssetOracleData: BytesLike,
      _positionNativeAssetOracleData: BytesLike,
      _pmxSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[]
    ],
    [void],
    "payable"
  >;

  gasPerBatch: TypedContractMethod<[], [bigint], "view">;

  gasPerPosition: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [_registry: AddressLike],
    [void],
    "nonpayable"
  >;

  initializeAfterUpgrade: TypedContractMethod<
    [
      _positionManager: AddressLike,
      _priceOracle: AddressLike,
      _whiteBlackList: AddressLike,
      _gasPerPosition: BigNumberish,
      _gasPerBatch: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  positionManager: TypedContractMethod<[], [string], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setGasPerBatch: TypedContractMethod<
    [_newGasPerBatch: BigNumberish],
    [void],
    "nonpayable"
  >;

  setGasPerPosition: TypedContractMethod<
    [_newGasPerPosition: BigNumberish],
    [void],
    "nonpayable"
  >;

  setValue: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  testUpgrade: TypedContractMethod<[], [string], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  value: TypedContractMethod<[], [bigint], "view">;

  whiteBlackList: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "closeBatchPositions"
  ): TypedContractMethod<
    [
      _ids: BigNumberish[],
      _megaRoutes: PrimexPricingLibrary.MegaRouteStruct[],
      _positionAsset: AddressLike,
      _soldAsset: AddressLike,
      _bucket: AddressLike,
      _conditionIndexes: BigNumberish[],
      _closeReason: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _nativePmxOracleData: BytesLike,
      _nativeSoldAssetOracleData: BytesLike,
      _positionNativeAssetOracleData: BytesLike,
      _pmxSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "gasPerBatch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "gasPerPosition"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_registry: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initializeAfterUpgrade"
  ): TypedContractMethod<
    [
      _positionManager: AddressLike,
      _priceOracle: AddressLike,
      _whiteBlackList: AddressLike,
      _gasPerPosition: BigNumberish,
      _gasPerBatch: BigNumberish
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
    nameOrSignature: "positionManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setGasPerBatch"
  ): TypedContractMethod<[_newGasPerBatch: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGasPerPosition"
  ): TypedContractMethod<
    [_newGasPerPosition: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setValue"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "testUpgrade"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "whiteBlackList"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ChangeGasPerBatch"
  ): TypedContractEvent<
    ChangeGasPerBatchEvent.InputTuple,
    ChangeGasPerBatchEvent.OutputTuple,
    ChangeGasPerBatchEvent.OutputObject
  >;
  getEvent(
    key: "ChangeGasPerPosition"
  ): TypedContractEvent<
    ChangeGasPerPositionEvent.InputTuple,
    ChangeGasPerPositionEvent.OutputTuple,
    ChangeGasPerPositionEvent.OutputObject
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
    "ChangeGasPerBatch(uint256)": TypedContractEvent<
      ChangeGasPerBatchEvent.InputTuple,
      ChangeGasPerBatchEvent.OutputTuple,
      ChangeGasPerBatchEvent.OutputObject
    >;
    ChangeGasPerBatch: TypedContractEvent<
      ChangeGasPerBatchEvent.InputTuple,
      ChangeGasPerBatchEvent.OutputTuple,
      ChangeGasPerBatchEvent.OutputObject
    >;

    "ChangeGasPerPosition(uint256)": TypedContractEvent<
      ChangeGasPerPositionEvent.InputTuple,
      ChangeGasPerPositionEvent.OutputTuple,
      ChangeGasPerPositionEvent.OutputObject
    >;
    ChangeGasPerPosition: TypedContractEvent<
      ChangeGasPerPositionEvent.InputTuple,
      ChangeGasPerPositionEvent.OutputTuple,
      ChangeGasPerPositionEvent.OutputObject
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
