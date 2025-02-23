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

export interface YieldDistributorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "bulkCheckpointOtherUsers"
      | "checkpoint"
      | "checkpointOtherUser"
      | "earned"
      | "eligibleCurrentVePMX"
      | "emittedToken"
      | "emittedTokenAddress"
      | "fractionParticipating"
      | "getYield"
      | "getYieldForDuration"
      | "getYieldThirdParty"
      | "greylist"
      | "greylistAddress"
      | "initialize"
      | "lastTimeYieldApplicable"
      | "lastUpdateTime"
      | "nominateNewOwner"
      | "nominatedOwner"
      | "notifyRewardAmount"
      | "owner"
      | "periodFinish"
      | "recoverERC20"
      | "rewardNotifiers"
      | "setPauses"
      | "setThirdPartyClaimer"
      | "setTimelock"
      | "setVePMXAggregator"
      | "setYieldDuration"
      | "setYieldRate"
      | "sync"
      | "thirdPartyClaimers"
      | "timelockAddress"
      | "toggleRewardNotifier"
      | "totalComboVePMXSupplyStored"
      | "totalVePMXParticipating"
      | "userIsInitialized"
      | "userVePMXCheckpointed"
      | "userVePMXEndpointCheckpointed"
      | "userYieldPerTokenPaid"
      | "vePMXAggregator"
      | "yieldCollectionPaused"
      | "yieldDuration"
      | "yieldPerVePMX"
      | "yieldPerVePMXStored"
      | "yieldRate"
      | "yields"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DefaultInitialization"
      | "OwnerChanged"
      | "OwnerNominated"
      | "RecoveredERC20"
      | "RewardAdded"
      | "TimelockChanged"
      | "YieldCollected"
      | "YieldDurationUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bulkCheckpointOtherUsers",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkpointOtherUser",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "earned", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "eligibleCurrentVePMX",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "emittedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emittedTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fractionParticipating",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getYield", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getYieldForDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getYieldThirdParty",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "greylist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "greylistAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeYieldApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nominateNewOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nominatedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardNotifiers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "setPauses", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setThirdPartyClaimer",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTimelock",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVePMXAggregator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setYieldDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setYieldRate",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "thirdPartyClaimers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "timelockAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleRewardNotifier",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalComboVePMXSupplyStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalVePMXParticipating",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userIsInitialized",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userVePMXCheckpointed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userVePMXEndpointCheckpointed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userYieldPerTokenPaid",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vePMXAggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "yieldCollectionPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "yieldDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "yieldPerVePMX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "yieldPerVePMXStored",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "yieldRate", values?: undefined): string;
  encodeFunctionData(functionFragment: "yields", values: [AddressLike]): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bulkCheckpointOtherUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkpointOtherUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eligibleCurrentVePMX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emittedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emittedTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fractionParticipating",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getYield", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getYieldForDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYieldThirdParty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "greylist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "greylistAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeYieldApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominateNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominatedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardNotifiers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPauses", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setThirdPartyClaimer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVePMXAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setYieldDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setYieldRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "thirdPartyClaimers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timelockAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleRewardNotifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalComboVePMXSupplyStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalVePMXParticipating",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userIsInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userVePMXCheckpointed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userVePMXEndpointCheckpointed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userYieldPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vePMXAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yieldCollectionPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yieldDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yieldPerVePMX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yieldPerVePMXStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "yields", data: BytesLike): Result;
}

export namespace DefaultInitializationEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerChangedEvent {
  export type InputTuple = [oldOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [oldOwner: string, newOwner: string];
  export interface OutputObject {
    oldOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerNominatedEvent {
  export type InputTuple = [newOwner: AddressLike];
  export type OutputTuple = [newOwner: string];
  export interface OutputObject {
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RecoveredERC20Event {
  export type InputTuple = [token: AddressLike, amount: BigNumberish];
  export type OutputTuple = [token: string, amount: bigint];
  export interface OutputObject {
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardAddedEvent {
  export type InputTuple = [reward: BigNumberish, yieldRate: BigNumberish];
  export type OutputTuple = [reward: bigint, yieldRate: bigint];
  export interface OutputObject {
    reward: bigint;
    yieldRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TimelockChangedEvent {
  export type InputTuple = [timelock_address: AddressLike];
  export type OutputTuple = [timelock_address: string];
  export interface OutputObject {
    timelock_address: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace YieldCollectedEvent {
  export type InputTuple = [
    staker: AddressLike,
    recipient: AddressLike,
    yield_: BigNumberish,
    tokenAddress: AddressLike
  ];
  export type OutputTuple = [
    staker: string,
    recipient: string,
    yield_: bigint,
    tokenAddress: string
  ];
  export interface OutputObject {
    staker: string;
    recipient: string;
    yield: bigint;
    tokenAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace YieldDurationUpdatedEvent {
  export type InputTuple = [newDuration: BigNumberish];
  export type OutputTuple = [newDuration: bigint];
  export interface OutputObject {
    newDuration: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface YieldDistributor extends BaseContract {
  connect(runner?: ContractRunner | null): YieldDistributor;
  waitForDeployment(): Promise<this>;

  interface: YieldDistributorInterface;

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

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  bulkCheckpointOtherUsers: TypedContractMethod<
    [_accounts: AddressLike[]],
    [void],
    "nonpayable"
  >;

  checkpoint: TypedContractMethod<[], [void], "nonpayable">;

  checkpointOtherUser: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  earned: TypedContractMethod<[_account: AddressLike], [bigint], "view">;

  eligibleCurrentVePMX: TypedContractMethod<
    [_user: AddressLike],
    [
      [bigint, bigint] & {
        _eligibleVepmxBal: bigint;
        _storedEndingTimestamp: bigint;
      }
    ],
    "view"
  >;

  emittedToken: TypedContractMethod<[], [string], "view">;

  emittedTokenAddress: TypedContractMethod<[], [string], "view">;

  fractionParticipating: TypedContractMethod<[], [bigint], "view">;

  getYield: TypedContractMethod<[], [bigint], "nonpayable">;

  getYieldForDuration: TypedContractMethod<[], [bigint], "view">;

  getYieldThirdParty: TypedContractMethod<
    [_staker: AddressLike],
    [bigint],
    "nonpayable"
  >;

  greylist: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  greylistAddress: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      _owner: AddressLike,
      _timelockAddress: AddressLike,
      _emittedToken: AddressLike,
      _vePMXAggregator: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  lastTimeYieldApplicable: TypedContractMethod<[], [bigint], "view">;

  lastUpdateTime: TypedContractMethod<[], [bigint], "view">;

  nominateNewOwner: TypedContractMethod<
    [_owner: AddressLike],
    [void],
    "nonpayable"
  >;

  nominatedOwner: TypedContractMethod<[], [string], "view">;

  notifyRewardAmount: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  periodFinish: TypedContractMethod<[], [bigint], "view">;

  recoverERC20: TypedContractMethod<
    [_tokenAddress: AddressLike, _tokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  rewardNotifiers: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  setPauses: TypedContractMethod<
    [_yieldCollectionPaused: boolean],
    [void],
    "nonpayable"
  >;

  setThirdPartyClaimer: TypedContractMethod<
    [_staker: AddressLike, _claimer: AddressLike],
    [void],
    "nonpayable"
  >;

  setTimelock: TypedContractMethod<
    [_newTimelock: AddressLike],
    [void],
    "nonpayable"
  >;

  setVePMXAggregator: TypedContractMethod<
    [_vePMXAggregator: AddressLike],
    [void],
    "nonpayable"
  >;

  setYieldDuration: TypedContractMethod<
    [_yieldDuration: BigNumberish],
    [void],
    "nonpayable"
  >;

  setYieldRate: TypedContractMethod<
    [_newRate: BigNumberish, _syncToo: boolean],
    [void],
    "nonpayable"
  >;

  sync: TypedContractMethod<[], [void], "nonpayable">;

  thirdPartyClaimers: TypedContractMethod<
    [staker: AddressLike],
    [string],
    "view"
  >;

  timelockAddress: TypedContractMethod<[], [string], "view">;

  toggleRewardNotifier: TypedContractMethod<
    [_notifierAddr: AddressLike],
    [void],
    "nonpayable"
  >;

  totalComboVePMXSupplyStored: TypedContractMethod<[], [bigint], "view">;

  totalVePMXParticipating: TypedContractMethod<[], [bigint], "view">;

  userIsInitialized: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  userVePMXCheckpointed: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  userVePMXEndpointCheckpointed: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  userYieldPerTokenPaid: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  vePMXAggregator: TypedContractMethod<[], [string], "view">;

  yieldCollectionPaused: TypedContractMethod<[], [boolean], "view">;

  yieldDuration: TypedContractMethod<[], [bigint], "view">;

  yieldPerVePMX: TypedContractMethod<[], [bigint], "view">;

  yieldPerVePMXStored: TypedContractMethod<[], [bigint], "view">;

  yieldRate: TypedContractMethod<[], [bigint], "view">;

  yields: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "bulkCheckpointOtherUsers"
  ): TypedContractMethod<[_accounts: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkpoint"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkpointOtherUser"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "eligibleCurrentVePMX"
  ): TypedContractMethod<
    [_user: AddressLike],
    [
      [bigint, bigint] & {
        _eligibleVepmxBal: bigint;
        _storedEndingTimestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "emittedToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "emittedTokenAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fractionParticipating"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getYield"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "getYieldForDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getYieldThirdParty"
  ): TypedContractMethod<[_staker: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "greylist"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "greylistAddress"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _owner: AddressLike,
      _timelockAddress: AddressLike,
      _emittedToken: AddressLike,
      _vePMXAggregator: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lastTimeYieldApplicable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nominateNewOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "nominatedOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "notifyRewardAmount"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "periodFinish"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "recoverERC20"
  ): TypedContractMethod<
    [_tokenAddress: AddressLike, _tokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardNotifiers"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "setPauses"
  ): TypedContractMethod<
    [_yieldCollectionPaused: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setThirdPartyClaimer"
  ): TypedContractMethod<
    [_staker: AddressLike, _claimer: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTimelock"
  ): TypedContractMethod<[_newTimelock: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVePMXAggregator"
  ): TypedContractMethod<[_vePMXAggregator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setYieldDuration"
  ): TypedContractMethod<[_yieldDuration: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setYieldRate"
  ): TypedContractMethod<
    [_newRate: BigNumberish, _syncToo: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sync"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "thirdPartyClaimers"
  ): TypedContractMethod<[staker: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "timelockAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "toggleRewardNotifier"
  ): TypedContractMethod<[_notifierAddr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalComboVePMXSupplyStored"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalVePMXParticipating"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userIsInitialized"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "userVePMXCheckpointed"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "userVePMXEndpointCheckpointed"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "userYieldPerTokenPaid"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "vePMXAggregator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "yieldCollectionPaused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "yieldDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "yieldPerVePMX"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "yieldPerVePMXStored"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "yieldRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "yields"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "DefaultInitialization"
  ): TypedContractEvent<
    DefaultInitializationEvent.InputTuple,
    DefaultInitializationEvent.OutputTuple,
    DefaultInitializationEvent.OutputObject
  >;
  getEvent(
    key: "OwnerChanged"
  ): TypedContractEvent<
    OwnerChangedEvent.InputTuple,
    OwnerChangedEvent.OutputTuple,
    OwnerChangedEvent.OutputObject
  >;
  getEvent(
    key: "OwnerNominated"
  ): TypedContractEvent<
    OwnerNominatedEvent.InputTuple,
    OwnerNominatedEvent.OutputTuple,
    OwnerNominatedEvent.OutputObject
  >;
  getEvent(
    key: "RecoveredERC20"
  ): TypedContractEvent<
    RecoveredERC20Event.InputTuple,
    RecoveredERC20Event.OutputTuple,
    RecoveredERC20Event.OutputObject
  >;
  getEvent(
    key: "RewardAdded"
  ): TypedContractEvent<
    RewardAddedEvent.InputTuple,
    RewardAddedEvent.OutputTuple,
    RewardAddedEvent.OutputObject
  >;
  getEvent(
    key: "TimelockChanged"
  ): TypedContractEvent<
    TimelockChangedEvent.InputTuple,
    TimelockChangedEvent.OutputTuple,
    TimelockChangedEvent.OutputObject
  >;
  getEvent(
    key: "YieldCollected"
  ): TypedContractEvent<
    YieldCollectedEvent.InputTuple,
    YieldCollectedEvent.OutputTuple,
    YieldCollectedEvent.OutputObject
  >;
  getEvent(
    key: "YieldDurationUpdated"
  ): TypedContractEvent<
    YieldDurationUpdatedEvent.InputTuple,
    YieldDurationUpdatedEvent.OutputTuple,
    YieldDurationUpdatedEvent.OutputObject
  >;

  filters: {
    "DefaultInitialization()": TypedContractEvent<
      DefaultInitializationEvent.InputTuple,
      DefaultInitializationEvent.OutputTuple,
      DefaultInitializationEvent.OutputObject
    >;
    DefaultInitialization: TypedContractEvent<
      DefaultInitializationEvent.InputTuple,
      DefaultInitializationEvent.OutputTuple,
      DefaultInitializationEvent.OutputObject
    >;

    "OwnerChanged(address,address)": TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;
    OwnerChanged: TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;

    "OwnerNominated(address)": TypedContractEvent<
      OwnerNominatedEvent.InputTuple,
      OwnerNominatedEvent.OutputTuple,
      OwnerNominatedEvent.OutputObject
    >;
    OwnerNominated: TypedContractEvent<
      OwnerNominatedEvent.InputTuple,
      OwnerNominatedEvent.OutputTuple,
      OwnerNominatedEvent.OutputObject
    >;

    "RecoveredERC20(address,uint256)": TypedContractEvent<
      RecoveredERC20Event.InputTuple,
      RecoveredERC20Event.OutputTuple,
      RecoveredERC20Event.OutputObject
    >;
    RecoveredERC20: TypedContractEvent<
      RecoveredERC20Event.InputTuple,
      RecoveredERC20Event.OutputTuple,
      RecoveredERC20Event.OutputObject
    >;

    "RewardAdded(uint256,uint256)": TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;
    RewardAdded: TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;

    "TimelockChanged(address)": TypedContractEvent<
      TimelockChangedEvent.InputTuple,
      TimelockChangedEvent.OutputTuple,
      TimelockChangedEvent.OutputObject
    >;
    TimelockChanged: TypedContractEvent<
      TimelockChangedEvent.InputTuple,
      TimelockChangedEvent.OutputTuple,
      TimelockChangedEvent.OutputObject
    >;

    "YieldCollected(address,address,uint256,address)": TypedContractEvent<
      YieldCollectedEvent.InputTuple,
      YieldCollectedEvent.OutputTuple,
      YieldCollectedEvent.OutputObject
    >;
    YieldCollected: TypedContractEvent<
      YieldCollectedEvent.InputTuple,
      YieldCollectedEvent.OutputTuple,
      YieldCollectedEvent.OutputObject
    >;

    "YieldDurationUpdated(uint256)": TypedContractEvent<
      YieldDurationUpdatedEvent.InputTuple,
      YieldDurationUpdatedEvent.OutputTuple,
      YieldDurationUpdatedEvent.OutputObject
    >;
    YieldDurationUpdated: TypedContractEvent<
      YieldDurationUpdatedEvent.InputTuple,
      YieldDurationUpdatedEvent.OutputTuple,
      YieldDurationUpdatedEvent.OutputObject
    >;
  };
}
