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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IPrimexLens {
  export type TokenMetadataStruct = {
    tokenAddress: AddressLike;
    symbol: string;
    name: string;
    decimals: BigNumberish;
    balance: BigNumberish;
  };

  export type TokenMetadataStructOutput = [
    tokenAddress: string,
    symbol: string,
    name: string,
    decimals: bigint,
    balance: bigint
  ] & {
    tokenAddress: string;
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
  };

  export type BucketTokenMetadataStruct = {
    id: BigNumberish;
    isSupported: boolean;
    pairPriceDrop: BigNumberish;
    maxLeverage: BigNumberish;
  };

  export type BucketTokenMetadataStructOutput = [
    id: bigint,
    isSupported: boolean,
    pairPriceDrop: bigint,
    maxLeverage: bigint
  ] & {
    id: bigint;
    isSupported: boolean;
    pairPriceDrop: bigint;
    maxLeverage: bigint;
  };

  export type SupportedAssetStruct = {
    asset: IPrimexLens.TokenMetadataStruct;
    properties: IPrimexLens.BucketTokenMetadataStruct;
  };

  export type SupportedAssetStructOutput = [
    asset: IPrimexLens.TokenMetadataStructOutput,
    properties: IPrimexLens.BucketTokenMetadataStructOutput
  ] & {
    asset: IPrimexLens.TokenMetadataStructOutput;
    properties: IPrimexLens.BucketTokenMetadataStructOutput;
  };

  export type LenderInfoStruct = {
    amountInMining: BigNumberish;
    currentPercent: BigNumberish;
    rewardsInPMX: ILiquidityMiningRewardDistributor.RewardsInPMXStruct;
  };

  export type LenderInfoStructOutput = [
    amountInMining: bigint,
    currentPercent: bigint,
    rewardsInPMX: ILiquidityMiningRewardDistributor.RewardsInPMXStructOutput
  ] & {
    amountInMining: bigint;
    currentPercent: bigint;
    rewardsInPMX: ILiquidityMiningRewardDistributor.RewardsInPMXStructOutput;
  };

  export type LiquidityMiningBucketInfoStruct = {
    pmxAmount: BigNumberish;
    withdrawnRewards: BigNumberish;
    totalPoints: BigNumberish;
  };

  export type LiquidityMiningBucketInfoStructOutput = [
    pmxAmount: bigint,
    withdrawnRewards: bigint,
    totalPoints: bigint
  ] & { pmxAmount: bigint; withdrawnRewards: bigint; totalPoints: bigint };

  export type BucketMetaDataStruct = {
    bucketAddress: AddressLike;
    name: string;
    asset: IPrimexLens.TokenMetadataStruct;
    bar: BigNumberish;
    lar: BigNumberish;
    supply: BigNumberish;
    demand: BigNumberish;
    availableLiquidity: BigNumberish;
    utilizationRatio: BigNumberish;
    supportedAssets: IPrimexLens.SupportedAssetStruct[];
    pToken: IPrimexLens.TokenMetadataStruct;
    debtToken: IPrimexLens.TokenMetadataStruct;
    feeBuffer: BigNumberish;
    withdrawalFeeRate: BigNumberish;
    miningParams: IBucketStorage.LiquidityMiningParamsStruct;
    lenderInfo: IPrimexLens.LenderInfoStruct;
    lmBucketInfo: IPrimexLens.LiquidityMiningBucketInfoStruct;
    estimatedBar: BigNumberish;
    estimatedLar: BigNumberish;
    isDeprecated: boolean;
    isDelisted: boolean;
    barCalcParams: IInterestRateStrategy.BarCalculationParamsStruct;
    maxTotalDeposit: BigNumberish;
  };

  export type BucketMetaDataStructOutput = [
    bucketAddress: string,
    name: string,
    asset: IPrimexLens.TokenMetadataStructOutput,
    bar: bigint,
    lar: bigint,
    supply: bigint,
    demand: bigint,
    availableLiquidity: bigint,
    utilizationRatio: bigint,
    supportedAssets: IPrimexLens.SupportedAssetStructOutput[],
    pToken: IPrimexLens.TokenMetadataStructOutput,
    debtToken: IPrimexLens.TokenMetadataStructOutput,
    feeBuffer: bigint,
    withdrawalFeeRate: bigint,
    miningParams: IBucketStorage.LiquidityMiningParamsStructOutput,
    lenderInfo: IPrimexLens.LenderInfoStructOutput,
    lmBucketInfo: IPrimexLens.LiquidityMiningBucketInfoStructOutput,
    estimatedBar: bigint,
    estimatedLar: bigint,
    isDeprecated: boolean,
    isDelisted: boolean,
    barCalcParams: IInterestRateStrategy.BarCalculationParamsStructOutput,
    maxTotalDeposit: bigint
  ] & {
    bucketAddress: string;
    name: string;
    asset: IPrimexLens.TokenMetadataStructOutput;
    bar: bigint;
    lar: bigint;
    supply: bigint;
    demand: bigint;
    availableLiquidity: bigint;
    utilizationRatio: bigint;
    supportedAssets: IPrimexLens.SupportedAssetStructOutput[];
    pToken: IPrimexLens.TokenMetadataStructOutput;
    debtToken: IPrimexLens.TokenMetadataStructOutput;
    feeBuffer: bigint;
    withdrawalFeeRate: bigint;
    miningParams: IBucketStorage.LiquidityMiningParamsStructOutput;
    lenderInfo: IPrimexLens.LenderInfoStructOutput;
    lmBucketInfo: IPrimexLens.LiquidityMiningBucketInfoStructOutput;
    estimatedBar: bigint;
    estimatedLar: bigint;
    isDeprecated: boolean;
    isDelisted: boolean;
    barCalcParams: IInterestRateStrategy.BarCalculationParamsStructOutput;
    maxTotalDeposit: bigint;
  };

  export type OpenPositionDataStruct = {
    id: BigNumberish;
    bucket: IPrimexLens.BucketMetaDataStruct;
    pair: [IPrimexLens.TokenMetadataStruct, IPrimexLens.TokenMetadataStruct];
    positionSize: BigNumberish;
    liquidationPrice: BigNumberish;
    stopLossPrice: BigNumberish;
    takeProfitPrice: BigNumberish;
    debt: BigNumberish;
    depositAmount: BigNumberish;
    createdAt: BigNumberish;
    extraParams: BytesLike;
  };

  export type OpenPositionDataStructOutput = [
    id: bigint,
    bucket: IPrimexLens.BucketMetaDataStructOutput,
    pair: [
      IPrimexLens.TokenMetadataStructOutput,
      IPrimexLens.TokenMetadataStructOutput
    ],
    positionSize: bigint,
    liquidationPrice: bigint,
    stopLossPrice: bigint,
    takeProfitPrice: bigint,
    debt: bigint,
    depositAmount: bigint,
    createdAt: bigint,
    extraParams: string
  ] & {
    id: bigint;
    bucket: IPrimexLens.BucketMetaDataStructOutput;
    pair: [
      IPrimexLens.TokenMetadataStructOutput,
      IPrimexLens.TokenMetadataStructOutput
    ];
    positionSize: bigint;
    liquidationPrice: bigint;
    stopLossPrice: bigint;
    takeProfitPrice: bigint;
    debt: bigint;
    depositAmount: bigint;
    createdAt: bigint;
    extraParams: string;
  };

  export type RoundDataStruct = {
    roundId: BigNumberish;
    answer: BigNumberish;
    startedAt: BigNumberish;
    updatedAt: BigNumberish;
    answeredInRound: BigNumberish;
  };

  export type RoundDataStructOutput = [
    roundId: bigint,
    answer: bigint,
    startedAt: bigint,
    updatedAt: bigint,
    answeredInRound: bigint
  ] & {
    roundId: bigint;
    answer: bigint;
    startedAt: bigint;
    updatedAt: bigint;
    answeredInRound: bigint;
  };

  export type LimitOrderWithConditionsStruct = {
    limitOrderData: LimitOrderLibrary.LimitOrderStruct;
    openConditionsData: LimitOrderLibrary.ConditionStruct[];
  };

  export type LimitOrderWithConditionsStructOutput = [
    limitOrderData: LimitOrderLibrary.LimitOrderStructOutput,
    openConditionsData: LimitOrderLibrary.ConditionStructOutput[]
  ] & {
    limitOrderData: LimitOrderLibrary.LimitOrderStructOutput;
    openConditionsData: LimitOrderLibrary.ConditionStructOutput[];
  };

  export type OpenPositionWithConditionsStruct = {
    positionData: PositionLibrary.PositionStruct;
    conditionsData: LimitOrderLibrary.ConditionStruct[];
  };

  export type OpenPositionWithConditionsStructOutput = [
    positionData: PositionLibrary.PositionStructOutput,
    conditionsData: LimitOrderLibrary.ConditionStructOutput[]
  ] & {
    positionData: PositionLibrary.PositionStructOutput;
    conditionsData: LimitOrderLibrary.ConditionStructOutput[];
  };
}

export declare namespace IBucketStorage {
  export type LiquidityMiningParamsStruct = {
    liquidityMiningRewardDistributor: AddressLike;
    isBucketLaunched: boolean;
    accumulatingAmount: BigNumberish;
    deadlineTimestamp: BigNumberish;
    stabilizationDuration: BigNumberish;
    stabilizationEndTimestamp: BigNumberish;
    maxAmountPerUser: BigNumberish;
    maxDuration: BigNumberish;
    maxStabilizationEndTimestamp: BigNumberish;
  };

  export type LiquidityMiningParamsStructOutput = [
    liquidityMiningRewardDistributor: string,
    isBucketLaunched: boolean,
    accumulatingAmount: bigint,
    deadlineTimestamp: bigint,
    stabilizationDuration: bigint,
    stabilizationEndTimestamp: bigint,
    maxAmountPerUser: bigint,
    maxDuration: bigint,
    maxStabilizationEndTimestamp: bigint
  ] & {
    liquidityMiningRewardDistributor: string;
    isBucketLaunched: boolean;
    accumulatingAmount: bigint;
    deadlineTimestamp: bigint;
    stabilizationDuration: bigint;
    stabilizationEndTimestamp: bigint;
    maxAmountPerUser: bigint;
    maxDuration: bigint;
    maxStabilizationEndTimestamp: bigint;
  };
}

export declare namespace ILiquidityMiningRewardDistributor {
  export type RewardsInPMXStruct = {
    minReward: BigNumberish;
    maxReward: BigNumberish;
    extraReward: BigNumberish;
  };

  export type RewardsInPMXStructOutput = [
    minReward: bigint,
    maxReward: bigint,
    extraReward: bigint
  ] & { minReward: bigint; maxReward: bigint; extraReward: bigint };
}

export declare namespace IInterestRateStrategy {
  export type BarCalculationParamsStruct = {
    urOptimal: BigNumberish;
    k0: BigNumberish;
    k1: BigNumberish;
    b0: BigNumberish;
    b1: BigNumberish;
  };

  export type BarCalculationParamsStructOutput = [
    urOptimal: bigint,
    k0: bigint,
    k1: bigint,
    b0: bigint,
    b1: bigint
  ] & { urOptimal: bigint; k0: bigint; k1: bigint; b0: bigint; b1: bigint };
}

export declare namespace LimitOrderLibrary {
  export type LimitOrderStruct = {
    bucket: AddressLike;
    positionAsset: AddressLike;
    depositAsset: AddressLike;
    depositAmount: BigNumberish;
    feeToken: AddressLike;
    protocolFee: BigNumberish;
    trader: AddressLike;
    deadline: BigNumberish;
    id: BigNumberish;
    leverage: BigNumberish;
    shouldOpenPosition: boolean;
    createdAt: BigNumberish;
    updatedConditionsAt: BigNumberish;
    extraParams: BytesLike;
  };

  export type LimitOrderStructOutput = [
    bucket: string,
    positionAsset: string,
    depositAsset: string,
    depositAmount: bigint,
    feeToken: string,
    protocolFee: bigint,
    trader: string,
    deadline: bigint,
    id: bigint,
    leverage: bigint,
    shouldOpenPosition: boolean,
    createdAt: bigint,
    updatedConditionsAt: bigint,
    extraParams: string
  ] & {
    bucket: string;
    positionAsset: string;
    depositAsset: string;
    depositAmount: bigint;
    feeToken: string;
    protocolFee: bigint;
    trader: string;
    deadline: bigint;
    id: bigint;
    leverage: bigint;
    shouldOpenPosition: boolean;
    createdAt: bigint;
    updatedConditionsAt: bigint;
    extraParams: string;
  };

  export type ConditionStruct = {
    managerType: BigNumberish;
    params: BytesLike;
  };

  export type ConditionStructOutput = [managerType: bigint, params: string] & {
    managerType: bigint;
    params: string;
  };
}

export declare namespace PositionLibrary {
  export type PositionStruct = {
    id: BigNumberish;
    scaledDebtAmount: BigNumberish;
    bucket: AddressLike;
    soldAsset: AddressLike;
    depositAmountInSoldAsset: BigNumberish;
    positionAsset: AddressLike;
    positionAmount: BigNumberish;
    trader: AddressLike;
    openBorrowIndex: BigNumberish;
    createdAt: BigNumberish;
    updatedConditionsAt: BigNumberish;
    extraParams: BytesLike;
  };

  export type PositionStructOutput = [
    id: bigint,
    scaledDebtAmount: bigint,
    bucket: string,
    soldAsset: string,
    depositAmountInSoldAsset: bigint,
    positionAsset: string,
    positionAmount: bigint,
    trader: string,
    openBorrowIndex: bigint,
    createdAt: bigint,
    updatedConditionsAt: bigint,
    extraParams: string
  ] & {
    id: bigint;
    scaledDebtAmount: bigint;
    bucket: string;
    soldAsset: string;
    depositAmountInSoldAsset: bigint;
    positionAsset: string;
    positionAmount: bigint;
    trader: string;
    openBorrowIndex: bigint;
    createdAt: bigint;
    updatedConditionsAt: bigint;
    extraParams: string;
  };
}

export interface IPrimexLensInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getAllBucketsFactory"
      | "getArrayOpenPositionDataByBucket"
      | "getArrayOpenPositionDataByTrader"
      | "getAssetMetadata"
      | "getBucket"
      | "getBucketsArray"
      | "getChainlinkLatestRoundData"
      | "getEstimatedMinProtocolFee"
      | "getLMBucketInfo"
      | "getLenderInfo"
      | "getLimitOrdersWithConditions"
      | "getLiquidationPrice(address,string,uint256,address,uint256)"
      | "getLiquidationPrice(address,uint256)"
      | "getOpenPositionData"
      | "getOpenPositionsWithConditions"
      | "getPositionMaxDecrease"
      | "getSupportedAsset"
      | "getSupportedAssetArray"
      | "getTokenArrayMetadata"
      | "getTokenMetadata"
      | "isStopLossReached"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllBucketsFactory",
    values: [AddressLike[], AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getArrayOpenPositionDataByBucket",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getArrayOpenPositionDataByTrader",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetMetadata",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBucket",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBucketsArray",
    values: [AddressLike[], AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainlinkLatestRoundData",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getEstimatedMinProtocolFee",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLMBucketInfo",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLenderInfo",
    values: [AddressLike, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLimitOrdersWithConditions",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidationPrice(address,string,uint256,address,uint256)",
    values: [AddressLike, string, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidationPrice(address,uint256)",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenPositionData",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenPositionsWithConditions",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionMaxDecrease",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike[][],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedAsset",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedAssetArray",
    values: [AddressLike, AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenArrayMetadata",
    values: [AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenMetadata",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isStopLossReached",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike[][],
      BigNumberish[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllBucketsFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArrayOpenPositionDataByBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getArrayOpenPositionDataByTrader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBucket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBucketsArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getChainlinkLatestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEstimatedMinProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLMBucketInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLenderInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLimitOrdersWithConditions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationPrice(address,string,uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationPrice(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenPositionData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenPositionsWithConditions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionMaxDecrease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedAssetArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenArrayMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStopLossReached",
    data: BytesLike
  ): Result;
}

export interface IPrimexLens extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimexLens;
  waitForDeployment(): Promise<this>;

  interface: IPrimexLensInterface;

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

  getAllBucketsFactory: TypedContractMethod<
    [
      _bucketFactories: AddressLike[],
      _trader: AddressLike,
      _positionManager: AddressLike,
      _showDeprecated: boolean
    ],
    [IPrimexLens.BucketMetaDataStructOutput[]],
    "view"
  >;

  getArrayOpenPositionDataByBucket: TypedContractMethod<
    [
      _positionManager: AddressLike,
      _bucket: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [[IPrimexLens.OpenPositionDataStructOutput[], bigint]],
    "nonpayable"
  >;

  getArrayOpenPositionDataByTrader: TypedContractMethod<
    [
      _positionManager: AddressLike,
      _trader: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [[IPrimexLens.OpenPositionDataStructOutput[], bigint]],
    "nonpayable"
  >;

  getAssetMetadata: TypedContractMethod<
    [_bucket: AddressLike, _asset: AddressLike],
    [IPrimexLens.BucketTokenMetadataStructOutput],
    "view"
  >;

  getBucket: TypedContractMethod<
    [_bucket: AddressLike, _trader: AddressLike],
    [IPrimexLens.BucketMetaDataStructOutput],
    "view"
  >;

  getBucketsArray: TypedContractMethod<
    [
      _buckets: AddressLike[],
      _trader: AddressLike,
      _positionManager: AddressLike,
      _showDeprecated: boolean
    ],
    [IPrimexLens.BucketMetaDataStructOutput[]],
    "view"
  >;

  getChainlinkLatestRoundData: TypedContractMethod<
    [_feeds: AddressLike[]],
    [IPrimexLens.RoundDataStructOutput[]],
    "view"
  >;

  getEstimatedMinProtocolFee: TypedContractMethod<
    [_tradingOrderType: BigNumberish, _pm: AddressLike],
    [bigint],
    "view"
  >;

  getLMBucketInfo: TypedContractMethod<
    [liquidityMiningRewardDistributor: AddressLike, _bucketName: string],
    [IPrimexLens.LiquidityMiningBucketInfoStructOutput],
    "view"
  >;

  getLenderInfo: TypedContractMethod<
    [
      liquidityMiningRewardDistributor: AddressLike,
      bucketName: string,
      user: AddressLike
    ],
    [IPrimexLens.LenderInfoStructOutput],
    "view"
  >;

  getLimitOrdersWithConditions: TypedContractMethod<
    [
      _limitOrderManager: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [
      [IPrimexLens.LimitOrderWithConditionsStructOutput[], bigint] & {
        newCursor: bigint;
      }
    ],
    "view"
  >;

  "getLiquidationPrice(address,string,uint256,address,uint256)": TypedContractMethod<
    [
      _positionManager: AddressLike,
      _bucket: string,
      _borrowedAmount: BigNumberish,
      _positionAsset: AddressLike,
      _positionAmount: BigNumberish
    ],
    [bigint],
    "view"
  >;

  "getLiquidationPrice(address,uint256)": TypedContractMethod<
    [_positionManager: AddressLike, _id: BigNumberish],
    [bigint],
    "view"
  >;

  getOpenPositionData: TypedContractMethod<
    [_positionManager: AddressLike, _id: BigNumberish],
    [IPrimexLens.OpenPositionDataStructOutput],
    "nonpayable"
  >;

  getOpenPositionsWithConditions: TypedContractMethod<
    [
      _positionManager: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [
      [IPrimexLens.OpenPositionWithConditionsStructOutput[], bigint] & {
        newCursor: bigint;
      }
    ],
    "view"
  >;

  getPositionMaxDecrease: TypedContractMethod<
    [
      _pm: AddressLike,
      _id: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[]
    ],
    [bigint],
    "payable"
  >;

  getSupportedAsset: TypedContractMethod<
    [_bucket: AddressLike, _asset: AddressLike, _trader: AddressLike],
    [IPrimexLens.SupportedAssetStructOutput],
    "view"
  >;

  getSupportedAssetArray: TypedContractMethod<
    [_bucket: AddressLike, _assets: AddressLike[], _trader: AddressLike],
    [IPrimexLens.SupportedAssetStructOutput[]],
    "view"
  >;

  getTokenArrayMetadata: TypedContractMethod<
    [_tokens: AddressLike[], _trader: AddressLike],
    [IPrimexLens.TokenMetadataStructOutput[]],
    "view"
  >;

  getTokenMetadata: TypedContractMethod<
    [_token: AddressLike, _trader: AddressLike],
    [IPrimexLens.TokenMetadataStructOutput],
    "view"
  >;

  isStopLossReached: TypedContractMethod<
    [
      _positionManager: AddressLike,
      _id: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[]
    ],
    [boolean],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getAllBucketsFactory"
  ): TypedContractMethod<
    [
      _bucketFactories: AddressLike[],
      _trader: AddressLike,
      _positionManager: AddressLike,
      _showDeprecated: boolean
    ],
    [IPrimexLens.BucketMetaDataStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getArrayOpenPositionDataByBucket"
  ): TypedContractMethod<
    [
      _positionManager: AddressLike,
      _bucket: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [[IPrimexLens.OpenPositionDataStructOutput[], bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getArrayOpenPositionDataByTrader"
  ): TypedContractMethod<
    [
      _positionManager: AddressLike,
      _trader: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [[IPrimexLens.OpenPositionDataStructOutput[], bigint]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAssetMetadata"
  ): TypedContractMethod<
    [_bucket: AddressLike, _asset: AddressLike],
    [IPrimexLens.BucketTokenMetadataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBucket"
  ): TypedContractMethod<
    [_bucket: AddressLike, _trader: AddressLike],
    [IPrimexLens.BucketMetaDataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBucketsArray"
  ): TypedContractMethod<
    [
      _buckets: AddressLike[],
      _trader: AddressLike,
      _positionManager: AddressLike,
      _showDeprecated: boolean
    ],
    [IPrimexLens.BucketMetaDataStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getChainlinkLatestRoundData"
  ): TypedContractMethod<
    [_feeds: AddressLike[]],
    [IPrimexLens.RoundDataStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getEstimatedMinProtocolFee"
  ): TypedContractMethod<
    [_tradingOrderType: BigNumberish, _pm: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLMBucketInfo"
  ): TypedContractMethod<
    [liquidityMiningRewardDistributor: AddressLike, _bucketName: string],
    [IPrimexLens.LiquidityMiningBucketInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLenderInfo"
  ): TypedContractMethod<
    [
      liquidityMiningRewardDistributor: AddressLike,
      bucketName: string,
      user: AddressLike
    ],
    [IPrimexLens.LenderInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLimitOrdersWithConditions"
  ): TypedContractMethod<
    [
      _limitOrderManager: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [
      [IPrimexLens.LimitOrderWithConditionsStructOutput[], bigint] & {
        newCursor: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLiquidationPrice(address,string,uint256,address,uint256)"
  ): TypedContractMethod<
    [
      _positionManager: AddressLike,
      _bucket: string,
      _borrowedAmount: BigNumberish,
      _positionAsset: AddressLike,
      _positionAmount: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLiquidationPrice(address,uint256)"
  ): TypedContractMethod<
    [_positionManager: AddressLike, _id: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOpenPositionData"
  ): TypedContractMethod<
    [_positionManager: AddressLike, _id: BigNumberish],
    [IPrimexLens.OpenPositionDataStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getOpenPositionsWithConditions"
  ): TypedContractMethod<
    [
      _positionManager: AddressLike,
      _cursor: BigNumberish,
      _count: BigNumberish
    ],
    [
      [IPrimexLens.OpenPositionWithConditionsStructOutput[], bigint] & {
        newCursor: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPositionMaxDecrease"
  ): TypedContractMethod<
    [
      _pm: AddressLike,
      _id: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[]
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getSupportedAsset"
  ): TypedContractMethod<
    [_bucket: AddressLike, _asset: AddressLike, _trader: AddressLike],
    [IPrimexLens.SupportedAssetStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupportedAssetArray"
  ): TypedContractMethod<
    [_bucket: AddressLike, _assets: AddressLike[], _trader: AddressLike],
    [IPrimexLens.SupportedAssetStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenArrayMetadata"
  ): TypedContractMethod<
    [_tokens: AddressLike[], _trader: AddressLike],
    [IPrimexLens.TokenMetadataStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenMetadata"
  ): TypedContractMethod<
    [_token: AddressLike, _trader: AddressLike],
    [IPrimexLens.TokenMetadataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "isStopLossReached"
  ): TypedContractMethod<
    [
      _positionManager: AddressLike,
      _id: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[]
    ],
    [boolean],
    "payable"
  >;

  filters: {};
}
