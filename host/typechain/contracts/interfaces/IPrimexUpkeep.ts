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

export declare namespace IPrimexUpkeep {
  export type OpenByOrderInfoStruct = {
    id: BigNumberish;
    conditionIndex: BigNumberish;
    comAdditionalParams: BytesLike;
    firstAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStruct[];
    depositInThirdAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStruct[];
    firstAssetOracleData: BytesLike;
    thirdAssetOracleData: BytesLike;
    depositSoldAssetOracleData: BytesLike;
    nativePmxOracleData: BytesLike;
    positionNativeAssetOracleData: BytesLike;
    nativePositionAssetOracleData: BytesLike;
    pmxPositionAssetOracleData: BytesLike;
    positionUsdOracleData: BytesLike;
    nativeSoldAssetOracleData: BytesLike;
    pullOracleData: BytesLike[][];
    pullOracleTypes: BigNumberish[];
    value: BigNumberish;
    borrowedAmount: BigNumberish;
  };

  export type OpenByOrderInfoStructOutput = [
    id: bigint,
    conditionIndex: bigint,
    comAdditionalParams: string,
    firstAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[],
    depositInThirdAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[],
    firstAssetOracleData: string,
    thirdAssetOracleData: string,
    depositSoldAssetOracleData: string,
    nativePmxOracleData: string,
    positionNativeAssetOracleData: string,
    nativePositionAssetOracleData: string,
    pmxPositionAssetOracleData: string,
    positionUsdOracleData: string,
    nativeSoldAssetOracleData: string,
    pullOracleData: string[][],
    pullOracleTypes: bigint[],
    value: bigint,
    borrowedAmount: bigint
  ] & {
    id: bigint;
    conditionIndex: bigint;
    comAdditionalParams: string;
    firstAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[];
    depositInThirdAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[];
    firstAssetOracleData: string;
    thirdAssetOracleData: string;
    depositSoldAssetOracleData: string;
    nativePmxOracleData: string;
    positionNativeAssetOracleData: string;
    nativePositionAssetOracleData: string;
    pmxPositionAssetOracleData: string;
    positionUsdOracleData: string;
    nativeSoldAssetOracleData: string;
    pullOracleData: string[][];
    pullOracleTypes: bigint[];
    value: bigint;
    borrowedAmount: bigint;
  };

  export type ClosePositionInfoStruct = {
    id: BigNumberish;
    conditionIndex: BigNumberish;
    ccmAdditionalParams: BytesLike;
    positionAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStruct[];
    closeReason: BigNumberish;
    positionSoldAssetOracleData: BytesLike;
    nativePmxOracleData: BytesLike;
    positionNativeAssetOracleData: BytesLike;
    pmxSoldAssetOracleData: BytesLike;
    nativeSoldAssetOracleData: BytesLike;
    pullOracleData: BytesLike[][];
    pullOracleTypes: BigNumberish[];
    value: BigNumberish;
  };

  export type ClosePositionInfoStructOutput = [
    id: bigint,
    conditionIndex: bigint,
    ccmAdditionalParams: string,
    positionAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[],
    closeReason: bigint,
    positionSoldAssetOracleData: string,
    nativePmxOracleData: string,
    positionNativeAssetOracleData: string,
    pmxSoldAssetOracleData: string,
    nativeSoldAssetOracleData: string,
    pullOracleData: string[][],
    pullOracleTypes: bigint[],
    value: bigint
  ] & {
    id: bigint;
    conditionIndex: bigint;
    ccmAdditionalParams: string;
    positionAssetMegaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[];
    closeReason: bigint;
    positionSoldAssetOracleData: string;
    nativePmxOracleData: string;
    positionNativeAssetOracleData: string;
    pmxSoldAssetOracleData: string;
    nativeSoldAssetOracleData: string;
    pullOracleData: string[][];
    pullOracleTypes: bigint[];
    value: bigint;
  };
}

export interface IPrimexUpkeepInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bestDexLens"
      | "initialize"
      | "lom"
      | "performUpkeepOrders"
      | "performUpkeepOrdersUnsafe"
      | "performUpkeepPositions"
      | "performUpkeepPositionsUnsafe"
      | "pm"
      | "primexLens"
      | "registry"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ErrorHandled"
      | "LowLevelErrorHandled"
      | "PanicErrorHandled"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "bestDexLens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "lom", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performUpkeepOrders",
    values: [IPrimexUpkeep.OpenByOrderInfoStruct[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeepOrdersUnsafe",
    values: [IPrimexUpkeep.OpenByOrderInfoStruct[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeepPositions",
    values: [IPrimexUpkeep.ClosePositionInfoStruct[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeepPositionsUnsafe",
    values: [IPrimexUpkeep.ClosePositionInfoStruct[], AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "primexLens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "bestDexLens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeepOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeepOrdersUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeepPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeepPositionsUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "primexLens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
}

export namespace ErrorHandledEvent {
  export type InputTuple = [
    positionId: BigNumberish,
    keeper: AddressLike,
    reason: string
  ];
  export type OutputTuple = [
    positionId: bigint,
    keeper: string,
    reason: string
  ];
  export interface OutputObject {
    positionId: bigint;
    keeper: string;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LowLevelErrorHandledEvent {
  export type InputTuple = [revertReason: BytesLike];
  export type OutputTuple = [revertReason: string];
  export interface OutputObject {
    revertReason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PanicErrorHandledEvent {
  export type InputTuple = [panicErrorId: BigNumberish];
  export type OutputTuple = [panicErrorId: bigint];
  export interface OutputObject {
    panicErrorId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPrimexUpkeep extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimexUpkeep;
  waitForDeployment(): Promise<this>;

  interface: IPrimexUpkeepInterface;

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

  bestDexLens: TypedContractMethod<[], [string], "nonpayable">;

  initialize: TypedContractMethod<
    [
      _positionManager: AddressLike,
      _limitOrderManager: AddressLike,
      _bestDexLens: AddressLike,
      _primexLens: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  lom: TypedContractMethod<[], [string], "nonpayable">;

  performUpkeepOrders: TypedContractMethod<
    [toOpenByOrder: IPrimexUpkeep.OpenByOrderInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;

  performUpkeepOrdersUnsafe: TypedContractMethod<
    [toOpenByOrder: IPrimexUpkeep.OpenByOrderInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;

  performUpkeepPositions: TypedContractMethod<
    [toLiquidate: IPrimexUpkeep.ClosePositionInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;

  performUpkeepPositionsUnsafe: TypedContractMethod<
    [toLiquidate: IPrimexUpkeep.ClosePositionInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;

  pm: TypedContractMethod<[], [string], "nonpayable">;

  primexLens: TypedContractMethod<[], [string], "nonpayable">;

  registry: TypedContractMethod<[], [string], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bestDexLens"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _positionManager: AddressLike,
      _limitOrderManager: AddressLike,
      _bestDexLens: AddressLike,
      _primexLens: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lom"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "performUpkeepOrders"
  ): TypedContractMethod<
    [toOpenByOrder: IPrimexUpkeep.OpenByOrderInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "performUpkeepOrdersUnsafe"
  ): TypedContractMethod<
    [toOpenByOrder: IPrimexUpkeep.OpenByOrderInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "performUpkeepPositions"
  ): TypedContractMethod<
    [toLiquidate: IPrimexUpkeep.ClosePositionInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "performUpkeepPositionsUnsafe"
  ): TypedContractMethod<
    [toLiquidate: IPrimexUpkeep.ClosePositionInfoStruct[], keeper: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "pm"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "primexLens"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "nonpayable">;

  getEvent(
    key: "ErrorHandled"
  ): TypedContractEvent<
    ErrorHandledEvent.InputTuple,
    ErrorHandledEvent.OutputTuple,
    ErrorHandledEvent.OutputObject
  >;
  getEvent(
    key: "LowLevelErrorHandled"
  ): TypedContractEvent<
    LowLevelErrorHandledEvent.InputTuple,
    LowLevelErrorHandledEvent.OutputTuple,
    LowLevelErrorHandledEvent.OutputObject
  >;
  getEvent(
    key: "PanicErrorHandled"
  ): TypedContractEvent<
    PanicErrorHandledEvent.InputTuple,
    PanicErrorHandledEvent.OutputTuple,
    PanicErrorHandledEvent.OutputObject
  >;

  filters: {
    "ErrorHandled(uint256,address,string)": TypedContractEvent<
      ErrorHandledEvent.InputTuple,
      ErrorHandledEvent.OutputTuple,
      ErrorHandledEvent.OutputObject
    >;
    ErrorHandled: TypedContractEvent<
      ErrorHandledEvent.InputTuple,
      ErrorHandledEvent.OutputTuple,
      ErrorHandledEvent.OutputObject
    >;

    "LowLevelErrorHandled(bytes)": TypedContractEvent<
      LowLevelErrorHandledEvent.InputTuple,
      LowLevelErrorHandledEvent.OutputTuple,
      LowLevelErrorHandledEvent.OutputObject
    >;
    LowLevelErrorHandled: TypedContractEvent<
      LowLevelErrorHandledEvent.InputTuple,
      LowLevelErrorHandledEvent.OutputTuple,
      LowLevelErrorHandledEvent.OutputObject
    >;

    "PanicErrorHandled(uint256)": TypedContractEvent<
      PanicErrorHandledEvent.InputTuple,
      PanicErrorHandledEvent.OutputTuple,
      PanicErrorHandledEvent.OutputObject
    >;
    PanicErrorHandled: TypedContractEvent<
      PanicErrorHandledEvent.InputTuple,
      PanicErrorHandledEvent.OutputTuple,
      PanicErrorHandledEvent.OutputObject
    >;
  };
}
