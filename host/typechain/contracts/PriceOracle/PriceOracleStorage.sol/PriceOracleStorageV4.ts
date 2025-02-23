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

export interface PriceOracleStorageV4Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "chainlinkPriceFeedsUsd"
      | "curveTypeOracles"
      | "eip4626TokenToUnderlyingAsset"
      | "eth"
      | "gasPriceFeed"
      | "isUniswapV2LP"
      | "orallyOracle"
      | "orallySymbol"
      | "orallyTimeTolerance"
      | "pairPriceDrops"
      | "pyth"
      | "pythPairIds"
      | "registry"
      | "storkAssetPairId"
      | "storkPublicKey"
      | "storkVerify"
      | "supportsInterface"
      | "supraDataFeedID"
      | "supraPullOracle"
      | "supraStorageOracle"
      | "timeTolerance"
      | "treasury"
      | "uniswapV2LPOracle"
      | "univ3TrustedPairs"
      | "univ3TypeOracles"
      | "usdt"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;

  encodeFunctionData(
    functionFragment: "chainlinkPriceFeedsUsd",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "curveTypeOracles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eip4626TokenToUnderlyingAsset",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "eth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gasPriceFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isUniswapV2LP",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "orallyOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orallySymbol",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "orallyTimeTolerance",
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
    functionFragment: "storkAssetPairId",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "storkPublicKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "storkVerify",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supraDataFeedID",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supraPullOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supraStorageOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeTolerance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uniswapV2LPOracle",
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
  encodeFunctionData(functionFragment: "usdt", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "chainlinkPriceFeedsUsd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "curveTypeOracles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip4626TokenToUnderlyingAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "eth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gasPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUniswapV2LP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orallyOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orallySymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orallyTimeTolerance",
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
    functionFragment: "storkAssetPairId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storkPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storkVerify",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supraDataFeedID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supraPullOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supraStorageOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeTolerance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV2LPOracle",
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
  decodeFunctionResult(functionFragment: "usdt", data: BytesLike): Result;
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

export interface PriceOracleStorageV4 extends BaseContract {
  connect(runner?: ContractRunner | null): PriceOracleStorageV4;
  waitForDeployment(): Promise<this>;

  interface: PriceOracleStorageV4Interface;

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

  curveTypeOracles: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  eip4626TokenToUnderlyingAsset: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  eth: TypedContractMethod<[], [string], "view">;

  gasPriceFeed: TypedContractMethod<[], [string], "view">;

  isUniswapV2LP: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  orallyOracle: TypedContractMethod<[], [string], "view">;

  orallySymbol: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [string],
    "view"
  >;

  orallyTimeTolerance: TypedContractMethod<[], [bigint], "view">;

  pairPriceDrops: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  pyth: TypedContractMethod<[], [string], "view">;

  pythPairIds: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  storkAssetPairId: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [string],
    "view"
  >;

  storkPublicKey: TypedContractMethod<[], [string], "view">;

  storkVerify: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  supraDataFeedID: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [[bigint, boolean] & { id: bigint; initialize: boolean }],
    "view"
  >;

  supraPullOracle: TypedContractMethod<[], [string], "view">;

  supraStorageOracle: TypedContractMethod<[], [string], "view">;

  timeTolerance: TypedContractMethod<[], [bigint], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  uniswapV2LPOracle: TypedContractMethod<[], [string], "view">;

  univ3TrustedPairs: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike, arg2: AddressLike],
    [boolean],
    "view"
  >;

  univ3TypeOracles: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  usdt: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "chainlinkPriceFeedsUsd"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "curveTypeOracles"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "eip4626TokenToUnderlyingAsset"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "eth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gasPriceFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isUniswapV2LP"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "orallyOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "orallySymbol"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "orallyTimeTolerance"
  ): TypedContractMethod<[], [bigint], "view">;
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
    nameOrSignature: "storkAssetPairId"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "storkPublicKey"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "storkVerify"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "supraDataFeedID"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [[bigint, boolean] & { id: bigint; initialize: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "supraPullOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supraStorageOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "timeTolerance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "uniswapV2LPOracle"
  ): TypedContractMethod<[], [string], "view">;
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
  getFunction(
    nameOrSignature: "usdt"
  ): TypedContractMethod<[], [string], "view">;

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
