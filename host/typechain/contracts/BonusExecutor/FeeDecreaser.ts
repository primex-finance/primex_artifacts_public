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

export declare namespace IFeeExecutorStorage {
  export type ActivatedBonusStruct = {
    nftId: BigNumberish;
    bucket: AddressLike;
    percent: BigNumberish;
    maxAmount: BigNumberish;
    accumulatedAmount: BigNumberish;
    lastUpdatedIndex: BigNumberish;
    deadline: BigNumberish;
    claimedAmount: BigNumberish;
  };

  export type ActivatedBonusStructOutput = [
    nftId: bigint,
    bucket: string,
    percent: bigint,
    maxAmount: bigint,
    accumulatedAmount: bigint,
    lastUpdatedIndex: bigint,
    deadline: bigint,
    claimedAmount: bigint
  ] & {
    nftId: bigint;
    bucket: string;
    percent: bigint;
    maxAmount: bigint;
    accumulatedAmount: bigint;
    lastUpdatedIndex: bigint;
    deadline: bigint;
    claimedAmount: bigint;
  };

  export type NFTBonusParamsStruct = {
    percent: BigNumberish;
    maxAmount: BigNumberish;
    duration: BigNumberish;
  };

  export type NFTBonusParamsStructOutput = [
    percent: bigint,
    maxAmount: bigint,
    duration: bigint
  ] & { percent: bigint; maxAmount: bigint; duration: bigint };
}

export interface FeeDecreaserInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activateBonus"
      | "bucketBonusCount"
      | "claim"
      | "deactivateBonus"
      | "getAccumulatedAmount"
      | "getAvailableAmount"
      | "getBonus"
      | "indexes"
      | "initialize"
      | "nft"
      | "pause"
      | "paused"
      | "primexDNS"
      | "registry"
      | "setMaxBonusCount"
      | "setTierBonus"
      | "supportsInterface"
      | "tierBonus"
      | "unpause"
      | "updateBonus(uint256)"
      | "updateBonus(address,uint256,address,uint256)"
      | "updateBonuses"
      | "updatedTimestamps"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "Paused" | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "activateBonus",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketBonusCount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateBonus",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccumulatedAmount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAvailableAmount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBonus",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "indexes",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMaxBonusCount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTierBonus",
    values: [
      AddressLike,
      BigNumberish[],
      IFeeExecutorStorage.NFTBonusParamsStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tierBonus",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBonus(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBonus(address,uint256,address,uint256)",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBonuses",
    values: [AddressLike[], BigNumberish[], AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatedTimestamps",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketBonusCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deactivateBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccumulatedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBonus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "indexes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxBonusCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTierBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tierBonus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBonus(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBonus(address,uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBonuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatedTimestamps",
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

export interface FeeDecreaser extends BaseContract {
  connect(runner?: ContractRunner | null): FeeDecreaser;
  waitForDeployment(): Promise<this>;

  interface: FeeDecreaserInterface;

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

  activateBonus: TypedContractMethod<
    [
      _nftId: BigNumberish,
      _tier: BigNumberish,
      _bucket: AddressLike,
      _owner: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  bucketBonusCount: TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { count: bigint; maxCount: bigint }],
    "view"
  >;

  claim: TypedContractMethod<
    [_amount: BigNumberish, _nftId: BigNumberish],
    [void],
    "nonpayable"
  >;

  deactivateBonus: TypedContractMethod<
    [_user: AddressLike, _bucket: AddressLike],
    [void],
    "nonpayable"
  >;

  getAccumulatedAmount: TypedContractMethod<
    [_user: AddressLike, _nftId: BigNumberish],
    [bigint],
    "view"
  >;

  getAvailableAmount: TypedContractMethod<
    [_user: AddressLike, _nftId: BigNumberish],
    [bigint],
    "view"
  >;

  getBonus: TypedContractMethod<
    [_user: AddressLike, _nftId: BigNumberish],
    [IFeeExecutorStorage.ActivatedBonusStructOutput],
    "view"
  >;

  indexes: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _nft: AddressLike,
      _registry: AddressLike,
      _primexDNS: AddressLike,
      _whiteBlackList: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  nft: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setMaxBonusCount: TypedContractMethod<
    [_bucket: AddressLike, _maxCount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTierBonus: TypedContractMethod<
    [
      _bucket: AddressLike,
      _tiers: BigNumberish[],
      _bonuses: IFeeExecutorStorage.NFTBonusParamsStruct[]
    ],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  tierBonus: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        percent: bigint;
        maxAmount: bigint;
        duration: bigint;
      }
    ],
    "view"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  "updateBonus(uint256)": TypedContractMethod<
    [_nftId: BigNumberish],
    [void],
    "nonpayable"
  >;

  "updateBonus(address,uint256,address,uint256)": TypedContractMethod<
    [
      _user: AddressLike,
      _oldScaledBalance: BigNumberish,
      _bucket: AddressLike,
      _currentIndex: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateBonuses: TypedContractMethod<
    [
      _users: AddressLike[],
      _oldBalances: BigNumberish[],
      _bucket: AddressLike,
      _currentIndex: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updatedTimestamps: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activateBonus"
  ): TypedContractMethod<
    [
      _nftId: BigNumberish,
      _tier: BigNumberish,
      _bucket: AddressLike,
      _owner: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bucketBonusCount"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[bigint, bigint] & { count: bigint; maxCount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<
    [_amount: BigNumberish, _nftId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deactivateBonus"
  ): TypedContractMethod<
    [_user: AddressLike, _bucket: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAccumulatedAmount"
  ): TypedContractMethod<
    [_user: AddressLike, _nftId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAvailableAmount"
  ): TypedContractMethod<
    [_user: AddressLike, _nftId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBonus"
  ): TypedContractMethod<
    [_user: AddressLike, _nftId: BigNumberish],
    [IFeeExecutorStorage.ActivatedBonusStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "indexes"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _nft: AddressLike,
      _registry: AddressLike,
      _primexDNS: AddressLike,
      _whiteBlackList: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "nft"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "primexDNS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setMaxBonusCount"
  ): TypedContractMethod<
    [_bucket: AddressLike, _maxCount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTierBonus"
  ): TypedContractMethod<
    [
      _bucket: AddressLike,
      _tiers: BigNumberish[],
      _bonuses: IFeeExecutorStorage.NFTBonusParamsStruct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "tierBonus"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        percent: bigint;
        maxAmount: bigint;
        duration: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateBonus(uint256)"
  ): TypedContractMethod<[_nftId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateBonus(address,uint256,address,uint256)"
  ): TypedContractMethod<
    [
      _user: AddressLike,
      _oldScaledBalance: BigNumberish,
      _bucket: AddressLike,
      _currentIndex: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateBonuses"
  ): TypedContractMethod<
    [
      _users: AddressLike[],
      _oldBalances: BigNumberish[],
      _bucket: AddressLike,
      _currentIndex: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatedTimestamps"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [bigint],
    "view"
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
