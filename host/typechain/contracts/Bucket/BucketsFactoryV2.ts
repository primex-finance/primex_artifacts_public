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

export declare namespace IBucketsFactory {
  export type CreateBucketParamsStruct = {
    nameBucket: string;
    positionManager: AddressLike;
    priceOracle: AddressLike;
    dns: AddressLike;
    reserve: AddressLike;
    whiteBlackList: AddressLike;
    assets: AddressLike[];
    underlyingAsset: AddressLike;
    feeBuffer: BigNumberish;
    withdrawalFeeRate: BigNumberish;
    reserveRate: BigNumberish;
    liquidityMiningRewardDistributor: AddressLike;
    liquidityMiningAmount: BigNumberish;
    liquidityMiningDeadline: BigNumberish;
    stabilizationDuration: BigNumberish;
    interestRateStrategy: AddressLike;
    maxAmountPerUser: BigNumberish;
    isReinvestToAaveEnabled: boolean;
    estimatedBar: BigNumberish;
    estimatedLar: BigNumberish;
    barCalcParams: BytesLike;
    maxTotalDeposit: BigNumberish;
  };

  export type CreateBucketParamsStructOutput = [
    nameBucket: string,
    positionManager: string,
    priceOracle: string,
    dns: string,
    reserve: string,
    whiteBlackList: string,
    assets: string[],
    underlyingAsset: string,
    feeBuffer: bigint,
    withdrawalFeeRate: bigint,
    reserveRate: bigint,
    liquidityMiningRewardDistributor: string,
    liquidityMiningAmount: bigint,
    liquidityMiningDeadline: bigint,
    stabilizationDuration: bigint,
    interestRateStrategy: string,
    maxAmountPerUser: bigint,
    isReinvestToAaveEnabled: boolean,
    estimatedBar: bigint,
    estimatedLar: bigint,
    barCalcParams: string,
    maxTotalDeposit: bigint
  ] & {
    nameBucket: string;
    positionManager: string;
    priceOracle: string;
    dns: string;
    reserve: string;
    whiteBlackList: string;
    assets: string[];
    underlyingAsset: string;
    feeBuffer: bigint;
    withdrawalFeeRate: bigint;
    reserveRate: bigint;
    liquidityMiningRewardDistributor: string;
    liquidityMiningAmount: bigint;
    liquidityMiningDeadline: bigint;
    stabilizationDuration: bigint;
    interestRateStrategy: string;
    maxAmountPerUser: bigint;
    isReinvestToAaveEnabled: boolean;
    estimatedBar: bigint;
    estimatedLar: bigint;
    barCalcParams: string;
    maxTotalDeposit: bigint;
  };
}

export interface BucketsFactoryV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "allBuckets"
      | "buckets"
      | "createBucket"
      | "debtTokensFactory"
      | "implementation"
      | "owner"
      | "pTokensFactory"
      | "registry"
      | "renounceOwnership"
      | "setDebtTokensFactory"
      | "setPTokensFactory"
      | "supportsInterface"
      | "transferOwnership"
      | "upgradeTo"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BucketCreated"
      | "DebtTokensFactoryChanged"
      | "OwnershipTransferred"
      | "PTokensFactoryChanged"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "allBuckets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buckets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createBucket",
    values: [IBucketsFactory.CreateBucketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "debtTokensFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pTokensFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDebtTokensFactory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPTokensFactory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "allBuckets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buckets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debtTokensFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pTokensFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDebtTokensFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPTokensFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
}

export namespace BucketCreatedEvent {
  export type InputTuple = [bucketAddress: AddressLike];
  export type OutputTuple = [bucketAddress: string];
  export interface OutputObject {
    bucketAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DebtTokensFactoryChangedEvent {
  export type InputTuple = [debtTokensFactory: AddressLike];
  export type OutputTuple = [debtTokensFactory: string];
  export interface OutputObject {
    debtTokensFactory: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PTokensFactoryChangedEvent {
  export type InputTuple = [pTokensFactory: AddressLike];
  export type OutputTuple = [pTokensFactory: string];
  export interface OutputObject {
    pTokensFactory: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BucketsFactoryV2 extends BaseContract {
  connect(runner?: ContractRunner | null): BucketsFactoryV2;
  waitForDeployment(): Promise<this>;

  interface: BucketsFactoryV2Interface;

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

  allBuckets: TypedContractMethod<[], [string[]], "view">;

  buckets: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  createBucket: TypedContractMethod<
    [_params: IBucketsFactory.CreateBucketParamsStruct],
    [void],
    "nonpayable"
  >;

  debtTokensFactory: TypedContractMethod<[], [string], "view">;

  implementation: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pTokensFactory: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setDebtTokensFactory: TypedContractMethod<
    [_debtTokensFactory: AddressLike],
    [void],
    "nonpayable"
  >;

  setPTokensFactory: TypedContractMethod<
    [_pTokensFactory: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [_bucketImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "allBuckets"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "buckets"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createBucket"
  ): TypedContractMethod<
    [_params: IBucketsFactory.CreateBucketParamsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "debtTokensFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "implementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pTokensFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDebtTokensFactory"
  ): TypedContractMethod<
    [_debtTokensFactory: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPTokensFactory"
  ): TypedContractMethod<[_pTokensFactory: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [_bucketImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "BucketCreated"
  ): TypedContractEvent<
    BucketCreatedEvent.InputTuple,
    BucketCreatedEvent.OutputTuple,
    BucketCreatedEvent.OutputObject
  >;
  getEvent(
    key: "DebtTokensFactoryChanged"
  ): TypedContractEvent<
    DebtTokensFactoryChangedEvent.InputTuple,
    DebtTokensFactoryChangedEvent.OutputTuple,
    DebtTokensFactoryChangedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PTokensFactoryChanged"
  ): TypedContractEvent<
    PTokensFactoryChangedEvent.InputTuple,
    PTokensFactoryChangedEvent.OutputTuple,
    PTokensFactoryChangedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "BucketCreated(address)": TypedContractEvent<
      BucketCreatedEvent.InputTuple,
      BucketCreatedEvent.OutputTuple,
      BucketCreatedEvent.OutputObject
    >;
    BucketCreated: TypedContractEvent<
      BucketCreatedEvent.InputTuple,
      BucketCreatedEvent.OutputTuple,
      BucketCreatedEvent.OutputObject
    >;

    "DebtTokensFactoryChanged(address)": TypedContractEvent<
      DebtTokensFactoryChangedEvent.InputTuple,
      DebtTokensFactoryChangedEvent.OutputTuple,
      DebtTokensFactoryChangedEvent.OutputObject
    >;
    DebtTokensFactoryChanged: TypedContractEvent<
      DebtTokensFactoryChangedEvent.InputTuple,
      DebtTokensFactoryChangedEvent.OutputTuple,
      DebtTokensFactoryChangedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "PTokensFactoryChanged(address)": TypedContractEvent<
      PTokensFactoryChangedEvent.InputTuple,
      PTokensFactoryChangedEvent.OutputTuple,
      PTokensFactoryChangedEvent.OutputObject
    >;
    PTokensFactoryChanged: TypedContractEvent<
      PTokensFactoryChangedEvent.InputTuple,
      PTokensFactoryChangedEvent.OutputTuple,
      PTokensFactoryChangedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
