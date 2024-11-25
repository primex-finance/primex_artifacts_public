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

export declare namespace IDepositManager {
  export type DepositParamsStruct = {
    bucket: AddressLike;
    amount: BigNumberish;
    duration: BigNumberish;
    isPToken: boolean;
    depositReceiver: AddressLike;
    rewardReceiver: AddressLike;
    rewardToken: AddressLike;
    pullOracleData: BytesLike[][];
    pullOracleTypes: BigNumberish[];
    borrowedRewardAssetOracleData: BytesLike;
  };

  export type DepositParamsStructOutput = [
    bucket: string,
    amount: bigint,
    duration: bigint,
    isPToken: boolean,
    depositReceiver: string,
    rewardReceiver: string,
    rewardToken: string,
    pullOracleData: string[][],
    pullOracleTypes: bigint[],
    borrowedRewardAssetOracleData: string
  ] & {
    bucket: string;
    amount: bigint;
    duration: bigint;
    isPToken: boolean;
    depositReceiver: string;
    rewardReceiver: string;
    rewardToken: string;
    pullOracleData: string[][];
    pullOracleTypes: bigint[];
    borrowedRewardAssetOracleData: string;
  };

  export type RewardParametersStruct = {
    bucket: AddressLike;
    rewardTokens: AddressLike[];
    durations: BigNumberish[][];
    newInterestRates: BigNumberish[][];
    maxTotalDeposit: BigNumberish;
  };

  export type RewardParametersStructOutput = [
    bucket: string,
    rewardTokens: string[],
    durations: bigint[][],
    newInterestRates: bigint[][],
    maxTotalDeposit: bigint
  ] & {
    bucket: string;
    rewardTokens: string[];
    durations: bigint[][];
    newInterestRates: bigint[][];
    maxTotalDeposit: bigint;
  };
}

export declare namespace IDepositManagerStorage {
  export type DepositStruct = {
    depositId: BigNumberish;
    owner: AddressLike;
    bucket: AddressLike;
    scaledAmount: BigNumberish;
    entryLiquidityIndex: BigNumberish;
    deadline: BigNumberish;
  };

  export type DepositStructOutput = [
    depositId: bigint,
    owner: string,
    bucket: string,
    scaledAmount: bigint,
    entryLiquidityIndex: bigint,
    deadline: bigint
  ] & {
    depositId: bigint;
    owner: string;
    bucket: string;
    scaledAmount: bigint;
    entryLiquidityIndex: bigint;
    deadline: bigint;
  };
}

export interface DepositManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bucketRewardTokens"
      | "deposit"
      | "depositIdCounter"
      | "getAllDepositsLength"
      | "getBucketDepositIds"
      | "getBucketPosibleDurations"
      | "getBucketRewardTokens"
      | "getDepositById"
      | "getDeposits"
      | "getDepositsByBucket"
      | "getDepositsByUser"
      | "getUserDepositIds"
      | "initialize"
      | "interestRates"
      | "isPossibleDurationInBucket"
      | "isRewardTokenInBucket"
      | "maxTotalDeposits"
      | "pause"
      | "paused"
      | "priceOracle"
      | "primexDNS"
      | "registry"
      | "setRewardParameters"
      | "supportsInterface"
      | "unlock"
      | "unpause"
      | "whiteBlackList"
      | "withdrawUnclaimedReward"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DepositUnlocked"
      | "FixedTermDepositCreated"
      | "Initialized"
      | "InterestRateSet"
      | "MaxTotalDepositSet"
      | "Paused"
      | "RewardPaid"
      | "RewardTokenAdded"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "bucketRewardTokens",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [IDepositManager.DepositParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "depositIdCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllDepositsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBucketDepositIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBucketPosibleDurations",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBucketRewardTokens",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositsByBucket",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositsByUser",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserDepositIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "interestRates",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPossibleDurationInBucket",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRewardTokenInBucket",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxTotalDeposits",
    values: [AddressLike]
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
    functionFragment: "setRewardParameters",
    values: [IDepositManager.RewardParametersStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [BigNumberish[], AddressLike[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnclaimedReward",
    values: [AddressLike[], BigNumberish[], AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "bucketRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositIdCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllDepositsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBucketDepositIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBucketPosibleDurations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBucketRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositsByBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositsByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserDepositIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "interestRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPossibleDurationInBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRewardTokenInBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTotalDeposits",
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
  decodeFunctionResult(
    functionFragment: "setRewardParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnclaimedReward",
    data: BytesLike
  ): Result;
}

export namespace DepositUnlockedEvent {
  export type InputTuple = [
    depositId: BigNumberish,
    receiver: AddressLike,
    amount: BigNumberish,
    shouldWithdraw: boolean
  ];
  export type OutputTuple = [
    depositId: bigint,
    receiver: string,
    amount: bigint,
    shouldWithdraw: boolean
  ];
  export interface OutputObject {
    depositId: bigint;
    receiver: string;
    amount: bigint;
    shouldWithdraw: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FixedTermDepositCreatedEvent {
  export type InputTuple = [
    depositReceiver: AddressLike,
    bucket: AddressLike,
    depositId: BigNumberish,
    amount: BigNumberish,
    duration: BigNumberish
  ];
  export type OutputTuple = [
    depositReceiver: string,
    bucket: string,
    depositId: bigint,
    amount: bigint,
    duration: bigint
  ];
  export interface OutputObject {
    depositReceiver: string;
    bucket: string;
    depositId: bigint;
    amount: bigint;
    duration: bigint;
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

export namespace InterestRateSetEvent {
  export type InputTuple = [
    bucket: AddressLike,
    rewardToken: AddressLike,
    duration: BigNumberish,
    interestRate: BigNumberish
  ];
  export type OutputTuple = [
    bucket: string,
    rewardToken: string,
    duration: bigint,
    interestRate: bigint
  ];
  export interface OutputObject {
    bucket: string;
    rewardToken: string;
    duration: bigint;
    interestRate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MaxTotalDepositSetEvent {
  export type InputTuple = [bucket: AddressLike, maxTotalDeposit: BigNumberish];
  export type OutputTuple = [bucket: string, maxTotalDeposit: bigint];
  export interface OutputObject {
    bucket: string;
    maxTotalDeposit: bigint;
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

export namespace RewardPaidEvent {
  export type InputTuple = [
    depositId: BigNumberish,
    rewardReceiver: AddressLike,
    rewardToken: AddressLike,
    rewardAmount: BigNumberish
  ];
  export type OutputTuple = [
    depositId: bigint,
    rewardReceiver: string,
    rewardToken: string,
    rewardAmount: bigint
  ];
  export interface OutputObject {
    depositId: bigint;
    rewardReceiver: string;
    rewardToken: string;
    rewardAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardTokenAddedEvent {
  export type InputTuple = [bucket: AddressLike, rewardToken: AddressLike];
  export type OutputTuple = [bucket: string, rewardToken: string];
  export interface OutputObject {
    bucket: string;
    rewardToken: string;
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

export interface DepositManager extends BaseContract {
  connect(runner?: ContractRunner | null): DepositManager;
  waitForDeployment(): Promise<this>;

  interface: DepositManagerInterface;

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

  bucketRewardTokens: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  deposit: TypedContractMethod<
    [_params: IDepositManager.DepositParamsStruct],
    [void],
    "payable"
  >;

  depositIdCounter: TypedContractMethod<[], [bigint], "view">;

  getAllDepositsLength: TypedContractMethod<[], [bigint], "view">;

  getBucketDepositIds: TypedContractMethod<
    [_bucket: AddressLike],
    [bigint[]],
    "view"
  >;

  getBucketPosibleDurations: TypedContractMethod<
    [_bucket: AddressLike, _rewardToken: AddressLike],
    [bigint[]],
    "view"
  >;

  getBucketRewardTokens: TypedContractMethod<
    [_bucket: AddressLike],
    [string[]],
    "view"
  >;

  getDepositById: TypedContractMethod<
    [_depositId: BigNumberish],
    [IDepositManagerStorage.DepositStructOutput],
    "view"
  >;

  getDeposits: TypedContractMethod<
    [_cursor: BigNumberish, _count: BigNumberish],
    [
      [IDepositManagerStorage.DepositStructOutput[], bigint] & {
        depositsData: IDepositManagerStorage.DepositStructOutput[];
        newCursor: bigint;
      }
    ],
    "view"
  >;

  getDepositsByBucket: TypedContractMethod<
    [_bucket: AddressLike, _cursor: BigNumberish, _count: BigNumberish],
    [
      [IDepositManagerStorage.DepositStructOutput[], bigint] & {
        bucketDepositsData: IDepositManagerStorage.DepositStructOutput[];
        newCursor: bigint;
      }
    ],
    "view"
  >;

  getDepositsByUser: TypedContractMethod<
    [_user: AddressLike, _cursor: BigNumberish, _count: BigNumberish],
    [
      [IDepositManagerStorage.DepositStructOutput[], bigint] & {
        userDepositsData: IDepositManagerStorage.DepositStructOutput[];
        newCursor: bigint;
      }
    ],
    "view"
  >;

  getUserDepositIds: TypedContractMethod<
    [_user: AddressLike],
    [bigint[]],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _registry: AddressLike,
      _primexDNS: AddressLike,
      _priceOracle: AddressLike,
      _whiteBlackList: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  interestRates: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [bigint],
    "view"
  >;

  isPossibleDurationInBucket: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [boolean],
    "view"
  >;

  isRewardTokenInBucket: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [boolean],
    "view"
  >;

  maxTotalDeposits: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setRewardParameters: TypedContractMethod<
    [params: IDepositManager.RewardParametersStruct[]],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  unlock: TypedContractMethod<
    [
      _depositIds: BigNumberish[],
      _receivers: AddressLike[],
      _shouldWithdraw: boolean[]
    ],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  whiteBlackList: TypedContractMethod<[], [string], "view">;

  withdrawUnclaimedReward: TypedContractMethod<
    [tokens: AddressLike[], amounts: BigNumberish[], recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bucketRewardTokens"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_params: IDepositManager.DepositParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositIdCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAllDepositsLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBucketDepositIds"
  ): TypedContractMethod<[_bucket: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getBucketPosibleDurations"
  ): TypedContractMethod<
    [_bucket: AddressLike, _rewardToken: AddressLike],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBucketRewardTokens"
  ): TypedContractMethod<[_bucket: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "getDepositById"
  ): TypedContractMethod<
    [_depositId: BigNumberish],
    [IDepositManagerStorage.DepositStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDeposits"
  ): TypedContractMethod<
    [_cursor: BigNumberish, _count: BigNumberish],
    [
      [IDepositManagerStorage.DepositStructOutput[], bigint] & {
        depositsData: IDepositManagerStorage.DepositStructOutput[];
        newCursor: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDepositsByBucket"
  ): TypedContractMethod<
    [_bucket: AddressLike, _cursor: BigNumberish, _count: BigNumberish],
    [
      [IDepositManagerStorage.DepositStructOutput[], bigint] & {
        bucketDepositsData: IDepositManagerStorage.DepositStructOutput[];
        newCursor: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDepositsByUser"
  ): TypedContractMethod<
    [_user: AddressLike, _cursor: BigNumberish, _count: BigNumberish],
    [
      [IDepositManagerStorage.DepositStructOutput[], bigint] & {
        userDepositsData: IDepositManagerStorage.DepositStructOutput[];
        newCursor: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserDepositIds"
  ): TypedContractMethod<[_user: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _registry: AddressLike,
      _primexDNS: AddressLike,
      _priceOracle: AddressLike,
      _whiteBlackList: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "interestRates"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "isPossibleDurationInBucket"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isRewardTokenInBucket"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "maxTotalDeposits"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
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
    nameOrSignature: "setRewardParameters"
  ): TypedContractMethod<
    [params: IDepositManager.RewardParametersStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "unlock"
  ): TypedContractMethod<
    [
      _depositIds: BigNumberish[],
      _receivers: AddressLike[],
      _shouldWithdraw: boolean[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whiteBlackList"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawUnclaimedReward"
  ): TypedContractMethod<
    [tokens: AddressLike[], amounts: BigNumberish[], recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "DepositUnlocked"
  ): TypedContractEvent<
    DepositUnlockedEvent.InputTuple,
    DepositUnlockedEvent.OutputTuple,
    DepositUnlockedEvent.OutputObject
  >;
  getEvent(
    key: "FixedTermDepositCreated"
  ): TypedContractEvent<
    FixedTermDepositCreatedEvent.InputTuple,
    FixedTermDepositCreatedEvent.OutputTuple,
    FixedTermDepositCreatedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "InterestRateSet"
  ): TypedContractEvent<
    InterestRateSetEvent.InputTuple,
    InterestRateSetEvent.OutputTuple,
    InterestRateSetEvent.OutputObject
  >;
  getEvent(
    key: "MaxTotalDepositSet"
  ): TypedContractEvent<
    MaxTotalDepositSetEvent.InputTuple,
    MaxTotalDepositSetEvent.OutputTuple,
    MaxTotalDepositSetEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "RewardPaid"
  ): TypedContractEvent<
    RewardPaidEvent.InputTuple,
    RewardPaidEvent.OutputTuple,
    RewardPaidEvent.OutputObject
  >;
  getEvent(
    key: "RewardTokenAdded"
  ): TypedContractEvent<
    RewardTokenAddedEvent.InputTuple,
    RewardTokenAddedEvent.OutputTuple,
    RewardTokenAddedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "DepositUnlocked(uint256,address,uint256,bool)": TypedContractEvent<
      DepositUnlockedEvent.InputTuple,
      DepositUnlockedEvent.OutputTuple,
      DepositUnlockedEvent.OutputObject
    >;
    DepositUnlocked: TypedContractEvent<
      DepositUnlockedEvent.InputTuple,
      DepositUnlockedEvent.OutputTuple,
      DepositUnlockedEvent.OutputObject
    >;

    "FixedTermDepositCreated(address,address,uint256,uint256,uint256)": TypedContractEvent<
      FixedTermDepositCreatedEvent.InputTuple,
      FixedTermDepositCreatedEvent.OutputTuple,
      FixedTermDepositCreatedEvent.OutputObject
    >;
    FixedTermDepositCreated: TypedContractEvent<
      FixedTermDepositCreatedEvent.InputTuple,
      FixedTermDepositCreatedEvent.OutputTuple,
      FixedTermDepositCreatedEvent.OutputObject
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

    "InterestRateSet(address,address,uint256,uint256)": TypedContractEvent<
      InterestRateSetEvent.InputTuple,
      InterestRateSetEvent.OutputTuple,
      InterestRateSetEvent.OutputObject
    >;
    InterestRateSet: TypedContractEvent<
      InterestRateSetEvent.InputTuple,
      InterestRateSetEvent.OutputTuple,
      InterestRateSetEvent.OutputObject
    >;

    "MaxTotalDepositSet(address,uint256)": TypedContractEvent<
      MaxTotalDepositSetEvent.InputTuple,
      MaxTotalDepositSetEvent.OutputTuple,
      MaxTotalDepositSetEvent.OutputObject
    >;
    MaxTotalDepositSet: TypedContractEvent<
      MaxTotalDepositSetEvent.InputTuple,
      MaxTotalDepositSetEvent.OutputTuple,
      MaxTotalDepositSetEvent.OutputObject
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

    "RewardPaid(uint256,address,address,uint256)": TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;
    RewardPaid: TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;

    "RewardTokenAdded(address,address)": TypedContractEvent<
      RewardTokenAddedEvent.InputTuple,
      RewardTokenAddedEvent.OutputTuple,
      RewardTokenAddedEvent.OutputObject
    >;
    RewardTokenAdded: TypedContractEvent<
      RewardTokenAddedEvent.InputTuple,
      RewardTokenAddedEvent.OutputTuple,
      RewardTokenAddedEvent.OutputObject
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
