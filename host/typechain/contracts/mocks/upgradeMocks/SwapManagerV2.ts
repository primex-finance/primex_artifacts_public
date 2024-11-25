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

export declare namespace ISwapManager {
  export type SwapParamsStruct = {
    tokenA: AddressLike;
    tokenB: AddressLike;
    amountTokenA: BigNumberish;
    amountOutMin: BigNumberish;
    megaRoutes: PrimexPricingLibrary.MegaRouteStruct[];
    receiver: AddressLike;
    deadline: BigNumberish;
    isSwapFromWallet: boolean;
    isSwapToWallet: boolean;
    isSwapFeeInPmx: boolean;
    tokenAtokenBOracleData: BytesLike;
    pmxPositionAssetOracleData: BytesLike;
    nativePositionAssetOracleData: BytesLike;
    pullOracleData: BytesLike[][];
    pullOracleTypes: BigNumberish[];
  };

  export type SwapParamsStructOutput = [
    tokenA: string,
    tokenB: string,
    amountTokenA: bigint,
    amountOutMin: bigint,
    megaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[],
    receiver: string,
    deadline: bigint,
    isSwapFromWallet: boolean,
    isSwapToWallet: boolean,
    isSwapFeeInPmx: boolean,
    tokenAtokenBOracleData: string,
    pmxPositionAssetOracleData: string,
    nativePositionAssetOracleData: string,
    pullOracleData: string[][],
    pullOracleTypes: bigint[]
  ] & {
    tokenA: string;
    tokenB: string;
    amountTokenA: bigint;
    amountOutMin: bigint;
    megaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[];
    receiver: string;
    deadline: bigint;
    isSwapFromWallet: boolean;
    isSwapToWallet: boolean;
    isSwapFeeInPmx: boolean;
    tokenAtokenBOracleData: string;
    pmxPositionAssetOracleData: string;
    nativePositionAssetOracleData: string;
    pullOracleData: string[][];
    pullOracleTypes: bigint[];
  };

  export type SwapInLimitOrderParamsStruct = {
    depositAsset: AddressLike;
    positionAsset: AddressLike;
    depositAmount: BigNumberish;
    megaRoutes: PrimexPricingLibrary.MegaRouteStruct[];
    trader: AddressLike;
    deadline: BigNumberish;
    feeToken: AddressLike;
    keeperRewardDistributor: AddressLike;
    gasSpent: BigNumberish;
    depositPositionAssetOracleData: BytesLike;
    pmxPositionAssetOracleData: BytesLike;
    nativePositionAssetOracleData: BytesLike;
  };

  export type SwapInLimitOrderParamsStructOutput = [
    depositAsset: string,
    positionAsset: string,
    depositAmount: bigint,
    megaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[],
    trader: string,
    deadline: bigint,
    feeToken: string,
    keeperRewardDistributor: string,
    gasSpent: bigint,
    depositPositionAssetOracleData: string,
    pmxPositionAssetOracleData: string,
    nativePositionAssetOracleData: string
  ] & {
    depositAsset: string;
    positionAsset: string;
    depositAmount: bigint;
    megaRoutes: PrimexPricingLibrary.MegaRouteStructOutput[];
    trader: string;
    deadline: bigint;
    feeToken: string;
    keeperRewardDistributor: string;
    gasSpent: bigint;
    depositPositionAssetOracleData: string;
    pmxPositionAssetOracleData: string;
    nativePositionAssetOracleData: string;
  };
}

export interface SwapManagerV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "initialize"
      | "initializeAfterUpgrade"
      | "pause"
      | "paused"
      | "priceOracle"
      | "primexDNS"
      | "registry"
      | "setValue"
      | "supportsInterface"
      | "swap"
      | "swapInLimitOrder"
      | "testUpgrade"
      | "traderBalanceVault"
      | "unpause"
      | "value"
      | "whiteBlackList"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "PaidProtocolFee"
      | "Paused"
      | "SpotSwap"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeAfterUpgrade",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [ISwapManager.SwapParamsStruct, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "swapInLimitOrder",
    values: [ISwapManager.SwapInLimitOrderParamsStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeAfterUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapInLimitOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "traderBalanceVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
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

export namespace PaidProtocolFeeEvent {
  export type InputTuple = [
    trader: AddressLike,
    boughtAsset: AddressLike,
    feeRateType: BigNumberish,
    feeInPositionAsset: BigNumberish,
    feeInPmx: BigNumberish
  ];
  export type OutputTuple = [
    trader: string,
    boughtAsset: string,
    feeRateType: bigint,
    feeInPositionAsset: bigint,
    feeInPmx: bigint
  ];
  export interface OutputObject {
    trader: string;
    boughtAsset: string;
    feeRateType: bigint;
    feeInPositionAsset: bigint;
    feeInPmx: bigint;
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

export namespace SpotSwapEvent {
  export type InputTuple = [
    trader: AddressLike,
    receiver: AddressLike,
    tokenA: AddressLike,
    tokenB: AddressLike,
    amountSold: BigNumberish,
    amountBought: BigNumberish
  ];
  export type OutputTuple = [
    trader: string,
    receiver: string,
    tokenA: string,
    tokenB: string,
    amountSold: bigint,
    amountBought: bigint
  ];
  export interface OutputObject {
    trader: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    amountSold: bigint;
    amountBought: bigint;
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

export interface SwapManagerV2 extends BaseContract {
  connect(runner?: ContractRunner | null): SwapManagerV2;
  waitForDeployment(): Promise<this>;

  interface: SwapManagerV2Interface;

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

  initialize: TypedContractMethod<
    [_registry: AddressLike],
    [void],
    "nonpayable"
  >;

  initializeAfterUpgrade: TypedContractMethod<
    [
      _primexDNS: AddressLike,
      _traderBalanceVault: AddressLike,
      _priceOracle: AddressLike,
      _whiteBlackList: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setValue: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  swap: TypedContractMethod<
    [
      params: ISwapManager.SwapParamsStruct,
      maximumOracleTolerableLimit: BigNumberish,
      needOracleTolerableLimitCheck: boolean
    ],
    [bigint],
    "payable"
  >;

  swapInLimitOrder: TypedContractMethod<
    [
      params: ISwapManager.SwapInLimitOrderParamsStruct,
      maximumOracleTolerableLimit: BigNumberish
    ],
    [[bigint, bigint]],
    "nonpayable"
  >;

  testUpgrade: TypedContractMethod<[], [string], "view">;

  traderBalanceVault: TypedContractMethod<[], [string], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  value: TypedContractMethod<[], [bigint], "view">;

  whiteBlackList: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_registry: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initializeAfterUpgrade"
  ): TypedContractMethod<
    [
      _primexDNS: AddressLike,
      _traderBalanceVault: AddressLike,
      _priceOracle: AddressLike,
      _whiteBlackList: AddressLike
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
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "primexDNS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setValue"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      params: ISwapManager.SwapParamsStruct,
      maximumOracleTolerableLimit: BigNumberish,
      needOracleTolerableLimitCheck: boolean
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapInLimitOrder"
  ): TypedContractMethod<
    [
      params: ISwapManager.SwapInLimitOrderParamsStruct,
      maximumOracleTolerableLimit: BigNumberish
    ],
    [[bigint, bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "testUpgrade"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "traderBalanceVault"
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
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "PaidProtocolFee"
  ): TypedContractEvent<
    PaidProtocolFeeEvent.InputTuple,
    PaidProtocolFeeEvent.OutputTuple,
    PaidProtocolFeeEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "SpotSwap"
  ): TypedContractEvent<
    SpotSwapEvent.InputTuple,
    SpotSwapEvent.OutputTuple,
    SpotSwapEvent.OutputObject
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

    "PaidProtocolFee(address,address,uint8,uint256,uint256)": TypedContractEvent<
      PaidProtocolFeeEvent.InputTuple,
      PaidProtocolFeeEvent.OutputTuple,
      PaidProtocolFeeEvent.OutputObject
    >;
    PaidProtocolFee: TypedContractEvent<
      PaidProtocolFeeEvent.InputTuple,
      PaidProtocolFeeEvent.OutputTuple,
      PaidProtocolFeeEvent.OutputObject
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

    "SpotSwap(address,address,address,address,uint256,uint256)": TypedContractEvent<
      SpotSwapEvent.InputTuple,
      SpotSwapEvent.OutputTuple,
      SpotSwapEvent.OutputObject
    >;
    SpotSwap: TypedContractEvent<
      SpotSwapEvent.InputTuple,
      SpotSwapEvent.OutputTuple,
      SpotSwapEvent.OutputObject
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
