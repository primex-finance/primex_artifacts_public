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

export interface SpotTradingRewardDistributorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateReward"
      | "claimReward"
      | "decreaseRewardPerPeriod"
      | "dns"
      | "getPeriodInfo"
      | "getPeriodsWithTraderActivity"
      | "getSpotTraderActivity"
      | "initialPeriodTimestamp"
      | "initialize"
      | "pause"
      | "paused"
      | "periodDuration"
      | "periods"
      | "pmx"
      | "priceOracle"
      | "registry"
      | "rewardPerPeriod"
      | "setRewardPerPeriod"
      | "supportsInterface"
      | "topUpUndistributedPmxBalance"
      | "traderBalanceVault"
      | "treasury"
      | "undistributedPMX"
      | "unpause"
      | "updateTraderActivity"
      | "withdrawPmx"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "Paused"
      | "PmxWithdrawn"
      | "RewardPerPeriodChanged"
      | "RewardPerPeriodDecreased"
      | "SpotTradingClaimReward"
      | "TopUpUndistributedPmxBalance"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "calculateReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseRewardPerPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "dns", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPeriodInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPeriodsWithTraderActivity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSpotTraderActivity",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialPeriodTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "periods",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardPerPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardPerPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "topUpUndistributedPmxBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "undistributedPMX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateTraderActivity",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawPmx",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseRewardPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dns", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPeriodInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPeriodsWithTraderActivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSpotTraderActivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialPeriodTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "periods", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardPerPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "topUpUndistributedPmxBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "traderBalanceVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "undistributedPMX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTraderActivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPmx",
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

export namespace PmxWithdrawnEvent {
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

export namespace RewardPerPeriodChangedEvent {
  export type InputTuple = [rewardPerPeriod: BigNumberish];
  export type OutputTuple = [rewardPerPeriod: bigint];
  export interface OutputObject {
    rewardPerPeriod: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPerPeriodDecreasedEvent {
  export type InputTuple = [rewardPerPeriod: BigNumberish];
  export type OutputTuple = [rewardPerPeriod: bigint];
  export interface OutputObject {
    rewardPerPeriod: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SpotTradingClaimRewardEvent {
  export type InputTuple = [trader: AddressLike, amount: BigNumberish];
  export type OutputTuple = [trader: string, amount: bigint];
  export interface OutputObject {
    trader: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TopUpUndistributedPmxBalanceEvent {
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

export interface SpotTradingRewardDistributor extends BaseContract {
  connect(runner?: ContractRunner | null): SpotTradingRewardDistributor;
  waitForDeployment(): Promise<this>;

  interface: SpotTradingRewardDistributorInterface;

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

  calculateReward: TypedContractMethod<
    [trader: AddressLike],
    [[bigint, bigint] & { reward: bigint; currentPeriod: bigint }],
    "view"
  >;

  claimReward: TypedContractMethod<[], [void], "nonpayable">;

  decreaseRewardPerPeriod: TypedContractMethod<
    [_rewardPerPeriod: BigNumberish],
    [void],
    "nonpayable"
  >;

  dns: TypedContractMethod<[], [string], "view">;

  getPeriodInfo: TypedContractMethod<
    [_timestamp: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  getPeriodsWithTraderActivity: TypedContractMethod<
    [trader: AddressLike],
    [bigint[]],
    "view"
  >;

  getSpotTraderActivity: TypedContractMethod<
    [periodNumber: BigNumberish, trader: AddressLike],
    [bigint],
    "view"
  >;

  initialPeriodTimestamp: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      _registry: AddressLike,
      _periodDuration: BigNumberish,
      _priceOracle: AddressLike,
      _pmx: AddressLike,
      _traderBalanceVault: AddressLike,
      _treasury: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  periodDuration: TypedContractMethod<[], [bigint], "view">;

  periods: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { totalReward: bigint; totalActivity: bigint }],
    "view"
  >;

  pmx: TypedContractMethod<[], [string], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  rewardPerPeriod: TypedContractMethod<[], [bigint], "view">;

  setRewardPerPeriod: TypedContractMethod<
    [_rewardPerPeriod: BigNumberish],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  topUpUndistributedPmxBalance: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  traderBalanceVault: TypedContractMethod<[], [string], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  undistributedPMX: TypedContractMethod<[], [bigint], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  updateTraderActivity: TypedContractMethod<
    [
      trader: AddressLike,
      positionAsset: AddressLike,
      positionAmount: BigNumberish,
      positionUsdOracleData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  withdrawPmx: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateReward"
  ): TypedContractMethod<
    [trader: AddressLike],
    [[bigint, bigint] & { reward: bigint; currentPeriod: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "claimReward"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "decreaseRewardPerPeriod"
  ): TypedContractMethod<
    [_rewardPerPeriod: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "dns"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getPeriodInfo"
  ): TypedContractMethod<
    [_timestamp: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPeriodsWithTraderActivity"
  ): TypedContractMethod<[trader: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getSpotTraderActivity"
  ): TypedContractMethod<
    [periodNumber: BigNumberish, trader: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialPeriodTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _registry: AddressLike,
      _periodDuration: BigNumberish,
      _priceOracle: AddressLike,
      _pmx: AddressLike,
      _traderBalanceVault: AddressLike,
      _treasury: AddressLike
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
    nameOrSignature: "periodDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "periods"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { totalReward: bigint; totalActivity: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardPerPeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setRewardPerPeriod"
  ): TypedContractMethod<
    [_rewardPerPeriod: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "topUpUndistributedPmxBalance"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "traderBalanceVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "undistributedPMX"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateTraderActivity"
  ): TypedContractMethod<
    [
      trader: AddressLike,
      positionAsset: AddressLike,
      positionAmount: BigNumberish,
      positionUsdOracleData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawPmx"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

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
    key: "PmxWithdrawn"
  ): TypedContractEvent<
    PmxWithdrawnEvent.InputTuple,
    PmxWithdrawnEvent.OutputTuple,
    PmxWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "RewardPerPeriodChanged"
  ): TypedContractEvent<
    RewardPerPeriodChangedEvent.InputTuple,
    RewardPerPeriodChangedEvent.OutputTuple,
    RewardPerPeriodChangedEvent.OutputObject
  >;
  getEvent(
    key: "RewardPerPeriodDecreased"
  ): TypedContractEvent<
    RewardPerPeriodDecreasedEvent.InputTuple,
    RewardPerPeriodDecreasedEvent.OutputTuple,
    RewardPerPeriodDecreasedEvent.OutputObject
  >;
  getEvent(
    key: "SpotTradingClaimReward"
  ): TypedContractEvent<
    SpotTradingClaimRewardEvent.InputTuple,
    SpotTradingClaimRewardEvent.OutputTuple,
    SpotTradingClaimRewardEvent.OutputObject
  >;
  getEvent(
    key: "TopUpUndistributedPmxBalance"
  ): TypedContractEvent<
    TopUpUndistributedPmxBalanceEvent.InputTuple,
    TopUpUndistributedPmxBalanceEvent.OutputTuple,
    TopUpUndistributedPmxBalanceEvent.OutputObject
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

    "PmxWithdrawn(uint256)": TypedContractEvent<
      PmxWithdrawnEvent.InputTuple,
      PmxWithdrawnEvent.OutputTuple,
      PmxWithdrawnEvent.OutputObject
    >;
    PmxWithdrawn: TypedContractEvent<
      PmxWithdrawnEvent.InputTuple,
      PmxWithdrawnEvent.OutputTuple,
      PmxWithdrawnEvent.OutputObject
    >;

    "RewardPerPeriodChanged(uint256)": TypedContractEvent<
      RewardPerPeriodChangedEvent.InputTuple,
      RewardPerPeriodChangedEvent.OutputTuple,
      RewardPerPeriodChangedEvent.OutputObject
    >;
    RewardPerPeriodChanged: TypedContractEvent<
      RewardPerPeriodChangedEvent.InputTuple,
      RewardPerPeriodChangedEvent.OutputTuple,
      RewardPerPeriodChangedEvent.OutputObject
    >;

    "RewardPerPeriodDecreased(uint256)": TypedContractEvent<
      RewardPerPeriodDecreasedEvent.InputTuple,
      RewardPerPeriodDecreasedEvent.OutputTuple,
      RewardPerPeriodDecreasedEvent.OutputObject
    >;
    RewardPerPeriodDecreased: TypedContractEvent<
      RewardPerPeriodDecreasedEvent.InputTuple,
      RewardPerPeriodDecreasedEvent.OutputTuple,
      RewardPerPeriodDecreasedEvent.OutputObject
    >;

    "SpotTradingClaimReward(address,uint256)": TypedContractEvent<
      SpotTradingClaimRewardEvent.InputTuple,
      SpotTradingClaimRewardEvent.OutputTuple,
      SpotTradingClaimRewardEvent.OutputObject
    >;
    SpotTradingClaimReward: TypedContractEvent<
      SpotTradingClaimRewardEvent.InputTuple,
      SpotTradingClaimRewardEvent.OutputTuple,
      SpotTradingClaimRewardEvent.OutputObject
    >;

    "TopUpUndistributedPmxBalance(uint256)": TypedContractEvent<
      TopUpUndistributedPmxBalanceEvent.InputTuple,
      TopUpUndistributedPmxBalanceEvent.OutputTuple,
      TopUpUndistributedPmxBalanceEvent.OutputObject
    >;
    TopUpUndistributedPmxBalance: TypedContractEvent<
      TopUpUndistributedPmxBalanceEvent.InputTuple,
      TopUpUndistributedPmxBalanceEvent.OutputTuple,
      TopUpUndistributedPmxBalanceEvent.OutputObject
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
