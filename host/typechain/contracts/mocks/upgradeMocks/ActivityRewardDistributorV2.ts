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

export declare namespace IActivityRewardDistributor {
  export type BucketWithRoleStruct = {
    bucketAddress: AddressLike;
    role: BigNumberish;
  };

  export type BucketWithRoleStructOutput = [
    bucketAddress: string,
    role: bigint
  ] & { bucketAddress: string; role: bigint };
}

export declare namespace IActivityRewardDistributorStorage {
  export type UserInfoStruct = {
    fixedReward: BigNumberish;
    lastUpdatedRewardIndex: BigNumberish;
    oldBalance: BigNumberish;
  };

  export type UserInfoStructOutput = [
    fixedReward: bigint,
    lastUpdatedRewardIndex: bigint,
    oldBalance: bigint
  ] & {
    fixedReward: bigint;
    lastUpdatedRewardIndex: bigint;
    oldBalance: bigint;
  };
}

export interface ActivityRewardDistributorV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "buckets"
      | "claimReward"
      | "decreaseRewardPerDay"
      | "dns"
      | "getBucketAccumulatedReward"
      | "getClaimableReward"
      | "getUserInfoFromBucket"
      | "initialize"
      | "pause"
      | "paused"
      | "pmx"
      | "registry"
      | "setValue"
      | "setupBucket"
      | "supportsInterface"
      | "testUpgrade"
      | "traderBalanceVault"
      | "treasury"
      | "unpause"
      | "updateUserActivity"
      | "updateUsersActivities"
      | "value"
      | "withdrawPmx"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimReward"
      | "Initialized"
      | "Paused"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "buckets",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values: [IActivityRewardDistributor.BucketWithRoleStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseRewardPerDay",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "dns", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBucketAccumulatedReward",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableReward",
    values: [IActivityRewardDistributor.BucketWithRoleStruct[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserInfoFromBucket",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setupBucket",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateUserActivity",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUsersActivities",
    values: [
      AddressLike,
      AddressLike[],
      BigNumberish[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawPmx",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "buckets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseRewardPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dns", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBucketAccumulatedReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserInfoFromBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setupBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
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
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateUserActivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUsersActivities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPmx",
    data: BytesLike
  ): Result;
}

export namespace ClaimRewardEvent {
  export type InputTuple = [
    user: AddressLike,
    bucket: AddressLike,
    role: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    bucket: string,
    role: bigint,
    amount: bigint
  ];
  export interface OutputObject {
    user: string;
    bucket: string;
    role: bigint;
    amount: bigint;
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

export interface ActivityRewardDistributorV2 extends BaseContract {
  connect(runner?: ContractRunner | null): ActivityRewardDistributorV2;
  waitForDeployment(): Promise<this>;

  interface: ActivityRewardDistributorV2Interface;

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

  buckets: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        rewardIndex: bigint;
        lastUpdatedTimestamp: bigint;
        rewardPerToken: bigint;
        scaledTotalSupply: bigint;
        isFinished: boolean;
        fixedReward: bigint;
        lastUpdatedRewardTimestamp: bigint;
        rewardPerDay: bigint;
        totalReward: bigint;
        endTimestamp: bigint;
      }
    ],
    "view"
  >;

  claimReward: TypedContractMethod<
    [bucketsArray: IActivityRewardDistributor.BucketWithRoleStruct[]],
    [void],
    "nonpayable"
  >;

  decreaseRewardPerDay: TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish, rewardPerDay: BigNumberish],
    [void],
    "nonpayable"
  >;

  dns: TypedContractMethod<[], [string], "view">;

  getBucketAccumulatedReward: TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish],
    [bigint],
    "view"
  >;

  getClaimableReward: TypedContractMethod<
    [
      bucketsArray: IActivityRewardDistributor.BucketWithRoleStruct[],
      user: AddressLike
    ],
    [bigint],
    "view"
  >;

  getUserInfoFromBucket: TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish, user: AddressLike],
    [IActivityRewardDistributorStorage.UserInfoStructOutput],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _pmx: AddressLike,
      _dns: AddressLike,
      _registry: AddressLike,
      _treasury: AddressLike,
      _traderBalanceVault: AddressLike,
      _whiteBlackList: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  pmx: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setValue: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;

  setupBucket: TypedContractMethod<
    [
      bucket: AddressLike,
      role: BigNumberish,
      increaseAmount: BigNumberish,
      rewardPerDay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  testUpgrade: TypedContractMethod<[], [string], "view">;

  traderBalanceVault: TypedContractMethod<[], [string], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  updateUserActivity: TypedContractMethod<
    [
      bucket: AddressLike,
      user: AddressLike,
      newBalance: BigNumberish,
      role: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateUsersActivities: TypedContractMethod<
    [
      bucket: AddressLike,
      users: AddressLike[],
      newBalances: BigNumberish[],
      length: BigNumberish,
      role: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  value: TypedContractMethod<[], [bigint], "view">;

  withdrawPmx: TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buckets"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        rewardIndex: bigint;
        lastUpdatedTimestamp: bigint;
        rewardPerToken: bigint;
        scaledTotalSupply: bigint;
        isFinished: boolean;
        fixedReward: bigint;
        lastUpdatedRewardTimestamp: bigint;
        rewardPerDay: bigint;
        totalReward: bigint;
        endTimestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "claimReward"
  ): TypedContractMethod<
    [bucketsArray: IActivityRewardDistributor.BucketWithRoleStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decreaseRewardPerDay"
  ): TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish, rewardPerDay: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "dns"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getBucketAccumulatedReward"
  ): TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getClaimableReward"
  ): TypedContractMethod<
    [
      bucketsArray: IActivityRewardDistributor.BucketWithRoleStruct[],
      user: AddressLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserInfoFromBucket"
  ): TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish, user: AddressLike],
    [IActivityRewardDistributorStorage.UserInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _pmx: AddressLike,
      _dns: AddressLike,
      _registry: AddressLike,
      _treasury: AddressLike,
      _traderBalanceVault: AddressLike,
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
    nameOrSignature: "pmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setValue"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setupBucket"
  ): TypedContractMethod<
    [
      bucket: AddressLike,
      role: BigNumberish,
      increaseAmount: BigNumberish,
      rewardPerDay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "testUpgrade"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "traderBalanceVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateUserActivity"
  ): TypedContractMethod<
    [
      bucket: AddressLike,
      user: AddressLike,
      newBalance: BigNumberish,
      role: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateUsersActivities"
  ): TypedContractMethod<
    [
      bucket: AddressLike,
      users: AddressLike[],
      newBalances: BigNumberish[],
      length: BigNumberish,
      role: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawPmx"
  ): TypedContractMethod<
    [bucket: AddressLike, role: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ClaimReward"
  ): TypedContractEvent<
    ClaimRewardEvent.InputTuple,
    ClaimRewardEvent.OutputTuple,
    ClaimRewardEvent.OutputObject
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
    "ClaimReward(address,address,uint8,uint256)": TypedContractEvent<
      ClaimRewardEvent.InputTuple,
      ClaimRewardEvent.OutputTuple,
      ClaimRewardEvent.OutputObject
    >;
    ClaimReward: TypedContractEvent<
      ClaimRewardEvent.InputTuple,
      ClaimRewardEvent.OutputTuple,
      ClaimRewardEvent.OutputObject
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