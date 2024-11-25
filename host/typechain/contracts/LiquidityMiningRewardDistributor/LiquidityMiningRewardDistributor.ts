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

export interface LiquidityMiningRewardDistributorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addPoints"
      | "claimReward"
      | "extraRewards"
      | "getBucketInfo"
      | "getLenderAmountInMining"
      | "getLenderInfo"
      | "initialize"
      | "pause"
      | "paused"
      | "pmx"
      | "primexDNS"
      | "registry"
      | "reinvest"
      | "reinvestmentDuration"
      | "reinvestmentRate"
      | "removePoints"
      | "supportsInterface"
      | "traderBalanceVault"
      | "treasury"
      | "unpause"
      | "updateBucketReward"
      | "withdrawPmxByAdmin"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimedReward"
      | "Initialized"
      | "Paused"
      | "Unpaused"
      | "WithdrawPmxByAdmin"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addPoints",
    values: [
      string,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "claimReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "extraRewards",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBucketInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLenderAmountInMining",
    values: [string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLenderInfo",
    values: [string, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reinvest",
    values: [string, string, AddressLike, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reinvestmentDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reinvestmentRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removePoints",
    values: [string, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBucketReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawPmxByAdmin",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addPoints", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBucketInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLenderAmountInMining",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLenderInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reinvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reinvestmentDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reinvestmentRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePoints",
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
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBucketReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPmxByAdmin",
    data: BytesLike
  ): Result;
}

export namespace ClaimedRewardEvent {
  export type InputTuple = [
    receiver: AddressLike,
    bucket: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [receiver: string, bucket: string, amount: bigint];
  export interface OutputObject {
    receiver: string;
    bucket: string;
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

export namespace WithdrawPmxByAdminEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface LiquidityMiningRewardDistributor extends BaseContract {
  connect(runner?: ContractRunner | null): LiquidityMiningRewardDistributor;
  waitForDeployment(): Promise<this>;

  interface: LiquidityMiningRewardDistributorInterface;

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

  addPoints: TypedContractMethod<
    [
      _bucketName: string,
      _user: AddressLike,
      _miningAmount: BigNumberish,
      _maxStabilizationPeriodEnd: BigNumberish,
      _maxPeriodTime: BigNumberish,
      _currentTimestamp: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  claimReward: TypedContractMethod<[_bucketName: string], [void], "nonpayable">;

  extraRewards: TypedContractMethod<
    [arg0: AddressLike, arg1: string],
    [bigint],
    "view"
  >;

  getBucketInfo: TypedContractMethod<
    [_bucketName: string],
    [
      [bigint, bigint, bigint] & {
        totalPmxReward: bigint;
        withdrawnRewards: bigint;
        totalPoints: bigint;
      }
    ],
    "view"
  >;

  getLenderAmountInMining: TypedContractMethod<
    [_bucketName: string, _lender: AddressLike],
    [bigint],
    "view"
  >;

  getLenderInfo: TypedContractMethod<
    [_bucketName: string, _lender: AddressLike, _timestamp: BigNumberish],
    [
      [
        bigint,
        bigint,
        ILiquidityMiningRewardDistributor.RewardsInPMXStructOutput
      ] & {
        amountInMining: bigint;
        currentPercent: bigint;
        rewardsInPMX: ILiquidityMiningRewardDistributor.RewardsInPMXStructOutput;
      }
    ],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _primexDNS: AddressLike,
      _pmx: AddressLike,
      _traderBalanceVault: AddressLike,
      _registry: AddressLike,
      _treasury: AddressLike,
      _reinvestmentRate: BigNumberish,
      _reinvestmentDuration: BigNumberish,
      _whiteBlackList: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  pmx: TypedContractMethod<[], [string], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  reinvest: TypedContractMethod<
    [
      _bucketFrom: string,
      _bucketTo: string,
      _user: AddressLike,
      _isBucketToLaunched: boolean,
      _bucketFromLiquidityMiningDeadline: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  reinvestmentDuration: TypedContractMethod<[], [bigint], "view">;

  reinvestmentRate: TypedContractMethod<[], [bigint], "view">;

  removePoints: TypedContractMethod<
    [_bucketName: string, _user: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  traderBalanceVault: TypedContractMethod<[], [string], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  updateBucketReward: TypedContractMethod<
    [_bucketName: string, _pmxRewardAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawPmxByAdmin: TypedContractMethod<
    [_bucketFrom: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addPoints"
  ): TypedContractMethod<
    [
      _bucketName: string,
      _user: AddressLike,
      _miningAmount: BigNumberish,
      _maxStabilizationPeriodEnd: BigNumberish,
      _maxPeriodTime: BigNumberish,
      _currentTimestamp: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimReward"
  ): TypedContractMethod<[_bucketName: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "extraRewards"
  ): TypedContractMethod<[arg0: AddressLike, arg1: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBucketInfo"
  ): TypedContractMethod<
    [_bucketName: string],
    [
      [bigint, bigint, bigint] & {
        totalPmxReward: bigint;
        withdrawnRewards: bigint;
        totalPoints: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLenderAmountInMining"
  ): TypedContractMethod<
    [_bucketName: string, _lender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLenderInfo"
  ): TypedContractMethod<
    [_bucketName: string, _lender: AddressLike, _timestamp: BigNumberish],
    [
      [
        bigint,
        bigint,
        ILiquidityMiningRewardDistributor.RewardsInPMXStructOutput
      ] & {
        amountInMining: bigint;
        currentPercent: bigint;
        rewardsInPMX: ILiquidityMiningRewardDistributor.RewardsInPMXStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _primexDNS: AddressLike,
      _pmx: AddressLike,
      _traderBalanceVault: AddressLike,
      _registry: AddressLike,
      _treasury: AddressLike,
      _reinvestmentRate: BigNumberish,
      _reinvestmentDuration: BigNumberish,
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
    nameOrSignature: "primexDNS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "reinvest"
  ): TypedContractMethod<
    [
      _bucketFrom: string,
      _bucketTo: string,
      _user: AddressLike,
      _isBucketToLaunched: boolean,
      _bucketFromLiquidityMiningDeadline: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "reinvestmentDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reinvestmentRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "removePoints"
  ): TypedContractMethod<
    [_bucketName: string, _user: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
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
    nameOrSignature: "updateBucketReward"
  ): TypedContractMethod<
    [_bucketName: string, _pmxRewardAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawPmxByAdmin"
  ): TypedContractMethod<[_bucketFrom: string], [void], "nonpayable">;

  getEvent(
    key: "ClaimedReward"
  ): TypedContractEvent<
    ClaimedRewardEvent.InputTuple,
    ClaimedRewardEvent.OutputTuple,
    ClaimedRewardEvent.OutputObject
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
  getEvent(
    key: "WithdrawPmxByAdmin"
  ): TypedContractEvent<
    WithdrawPmxByAdminEvent.InputTuple,
    WithdrawPmxByAdminEvent.OutputTuple,
    WithdrawPmxByAdminEvent.OutputObject
  >;

  filters: {
    "ClaimedReward(address,address,uint256)": TypedContractEvent<
      ClaimedRewardEvent.InputTuple,
      ClaimedRewardEvent.OutputTuple,
      ClaimedRewardEvent.OutputObject
    >;
    ClaimedReward: TypedContractEvent<
      ClaimedRewardEvent.InputTuple,
      ClaimedRewardEvent.OutputTuple,
      ClaimedRewardEvent.OutputObject
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

    "WithdrawPmxByAdmin(uint256)": TypedContractEvent<
      WithdrawPmxByAdminEvent.InputTuple,
      WithdrawPmxByAdminEvent.OutputTuple,
      WithdrawPmxByAdminEvent.OutputObject
    >;
    WithdrawPmxByAdmin: TypedContractEvent<
      WithdrawPmxByAdminEvent.InputTuple,
      WithdrawPmxByAdminEvent.OutputTuple,
      WithdrawPmxByAdminEvent.OutputObject
    >;
  };
}
