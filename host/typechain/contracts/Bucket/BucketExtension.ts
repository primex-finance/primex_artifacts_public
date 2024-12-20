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

export interface BucketExtensionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "aaveDeposit"
      | "allowedAssets"
      | "bar"
      | "borrowedAsset"
      | "bucketExtension"
      | "debtToken"
      | "depositFromBucket"
      | "estimatedBar"
      | "estimatedLar"
      | "feeBuffer"
      | "interestRateStrategy"
      | "isReinvestToAaveEnabled"
      | "lar"
      | "lastUpdatedBlockTimestamp"
      | "liquidityIndex"
      | "maxTotalDeposit"
      | "name"
      | "pToken"
      | "permanentLossScaled"
      | "positionManager"
      | "registry"
      | "reserve"
      | "reserveRate"
      | "supportsInterface"
      | "variableBorrowIndex"
      | "whiteBlackList"
      | "withdrawBucketLiquidityFromAave"
      | "withdrawalFeeRate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "TopUpTreasury"
      | "Withdraw"
      | "WithdrawFromAave"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "aaveDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedAssets",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "bar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowedAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bucketExtension",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositFromBucket",
    values: [
      string,
      AddressLike,
      PrimexPricingLibrary.MegaRouteStruct[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "estimatedBar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimatedLar",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeBuffer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "interestRateStrategy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isReinvestToAaveEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedBlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTotalDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "pToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permanentLossScaled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "reserve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reserveRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "variableBorrowIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBucketLiquidityFromAave",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalFeeRate",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "aaveDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketExtension",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositFromBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimatedBar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimatedLar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeBuffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "interestRateStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReinvestToAaveEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTotalDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permanentLossScaled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserveRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variableBorrowIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBucketLiquidityFromAave",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalFeeRate",
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

export namespace TopUpTreasuryEvent {
  export type InputTuple = [sender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [sender: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    withdrawer: AddressLike,
    borrowAssetReceiver: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    withdrawer: string,
    borrowAssetReceiver: string,
    amount: bigint
  ];
  export interface OutputObject {
    withdrawer: string;
    borrowAssetReceiver: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawFromAaveEvent {
  export type InputTuple = [pool: AddressLike, amount: BigNumberish];
  export type OutputTuple = [pool: string, amount: bigint];
  export interface OutputObject {
    pool: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BucketExtension extends BaseContract {
  connect(runner?: ContractRunner | null): BucketExtension;
  waitForDeployment(): Promise<this>;

  interface: BucketExtensionInterface;

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

  aaveDeposit: TypedContractMethod<[], [bigint], "view">;

  allowedAssets: TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, boolean] & { index: bigint; isSupported: boolean }],
    "view"
  >;

  bar: TypedContractMethod<[], [bigint], "view">;

  borrowedAsset: TypedContractMethod<[], [string], "view">;

  bucketExtension: TypedContractMethod<[], [string], "view">;

  debtToken: TypedContractMethod<[], [string], "view">;

  depositFromBucket: TypedContractMethod<
    [
      _bucketTo: string,
      _swapManager: AddressLike,
      _megaRoutes: PrimexPricingLibrary.MegaRouteStruct[],
      _amountOutMin: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  estimatedBar: TypedContractMethod<[], [bigint], "view">;

  estimatedLar: TypedContractMethod<[], [bigint], "view">;

  feeBuffer: TypedContractMethod<[], [bigint], "view">;

  interestRateStrategy: TypedContractMethod<[], [string], "view">;

  isReinvestToAaveEnabled: TypedContractMethod<[], [boolean], "view">;

  lar: TypedContractMethod<[], [bigint], "view">;

  lastUpdatedBlockTimestamp: TypedContractMethod<[], [bigint], "view">;

  liquidityIndex: TypedContractMethod<[], [bigint], "view">;

  maxTotalDeposit: TypedContractMethod<[], [bigint], "view">;

  name: TypedContractMethod<[], [string], "view">;

  pToken: TypedContractMethod<[], [string], "view">;

  permanentLossScaled: TypedContractMethod<[], [bigint], "view">;

  positionManager: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  reserve: TypedContractMethod<[], [string], "view">;

  reserveRate: TypedContractMethod<[], [bigint], "view">;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  variableBorrowIndex: TypedContractMethod<[], [bigint], "view">;

  whiteBlackList: TypedContractMethod<[], [string], "view">;

  withdrawBucketLiquidityFromAave: TypedContractMethod<
    [],
    [void],
    "nonpayable"
  >;

  withdrawalFeeRate: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "aaveDeposit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "allowedAssets"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, boolean] & { index: bigint; isSupported: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "bar"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "borrowedAsset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bucketExtension"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "debtToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "depositFromBucket"
  ): TypedContractMethod<
    [
      _bucketTo: string,
      _swapManager: AddressLike,
      _megaRoutes: PrimexPricingLibrary.MegaRouteStruct[],
      _amountOutMin: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "estimatedBar"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimatedLar"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeBuffer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "interestRateStrategy"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isReinvestToAaveEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "lar"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdatedBlockTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "liquidityIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxTotalDeposit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "permanentLossScaled"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "positionManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "reserve"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "reserveRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "variableBorrowIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "whiteBlackList"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawBucketLiquidityFromAave"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawalFeeRate"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "TopUpTreasury"
  ): TypedContractEvent<
    TopUpTreasuryEvent.InputTuple,
    TopUpTreasuryEvent.OutputTuple,
    TopUpTreasuryEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawFromAave"
  ): TypedContractEvent<
    WithdrawFromAaveEvent.InputTuple,
    WithdrawFromAaveEvent.OutputTuple,
    WithdrawFromAaveEvent.OutputObject
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

    "TopUpTreasury(address,uint256)": TypedContractEvent<
      TopUpTreasuryEvent.InputTuple,
      TopUpTreasuryEvent.OutputTuple,
      TopUpTreasuryEvent.OutputObject
    >;
    TopUpTreasury: TypedContractEvent<
      TopUpTreasuryEvent.InputTuple,
      TopUpTreasuryEvent.OutputTuple,
      TopUpTreasuryEvent.OutputObject
    >;

    "Withdraw(address,address,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;

    "WithdrawFromAave(address,uint256)": TypedContractEvent<
      WithdrawFromAaveEvent.InputTuple,
      WithdrawFromAaveEvent.OutputTuple,
      WithdrawFromAaveEvent.OutputObject
    >;
    WithdrawFromAave: TypedContractEvent<
      WithdrawFromAaveEvent.InputTuple,
      WithdrawFromAaveEvent.OutputTuple,
      WithdrawFromAaveEvent.OutputObject
    >;
  };
}
