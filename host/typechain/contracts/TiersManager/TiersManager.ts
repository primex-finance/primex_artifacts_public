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

export interface TiersManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addTiers"
      | "changeThresholdForTier"
      | "farmingNFT"
      | "getLenderTierForAddress"
      | "getTiers"
      | "getTraderTierForAddress"
      | "getTraderTiersForAddresses"
      | "initialize"
      | "initializeAfterUpgrade"
      | "lendingNFT"
      | "pmx"
      | "registry"
      | "setPMX"
      | "supportsInterface"
      | "tiersThresholds"
      | "traderBalanceVault"
      | "tradingNFT"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized" | "PMXchanged"): EventFragment;

  encodeFunctionData(
    functionFragment: "addTiers",
    values: [BigNumberish[], BigNumberish[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "changeThresholdForTier",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "farmingNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLenderTierForAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getTiers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTraderTierForAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTraderTiersForAddresses",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeAfterUpgrade",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lendingNFT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "setPMX", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tiersThresholds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tradingNFT",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addTiers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeThresholdForTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "farmingNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLenderTierForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTiers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTraderTierForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTraderTiersForAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeAfterUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lendingNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPMX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tiersThresholds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "traderBalanceVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tradingNFT", data: BytesLike): Result;
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

export namespace PMXchangedEvent {
  export type InputTuple = [pmx: AddressLike];
  export type OutputTuple = [pmx: string];
  export interface OutputObject {
    pmx: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TiersManager extends BaseContract {
  connect(runner?: ContractRunner | null): TiersManager;
  waitForDeployment(): Promise<this>;

  interface: TiersManagerInterface;

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

  addTiers: TypedContractMethod<
    [_tiers: BigNumberish[], _thresholds: BigNumberish[], _clearTiers: boolean],
    [void],
    "nonpayable"
  >;

  changeThresholdForTier: TypedContractMethod<
    [_indexes: BigNumberish[], _newThresholds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  farmingNFT: TypedContractMethod<[], [string], "view">;

  getLenderTierForAddress: TypedContractMethod<
    [_userAddress: AddressLike],
    [bigint],
    "view"
  >;

  getTiers: TypedContractMethod<[], [bigint[]], "view">;

  getTraderTierForAddress: TypedContractMethod<
    [_userAddress: AddressLike],
    [bigint],
    "view"
  >;

  getTraderTiersForAddresses: TypedContractMethod<
    [_userAddresses: AddressLike[]],
    [bigint[]],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _pmx: AddressLike,
      _registry: AddressLike,
      _lendingNFT: AddressLike,
      _tradingNFT: AddressLike,
      _farmingNFT: AddressLike,
      _tiers: BigNumberish[],
      _thresholds: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  initializeAfterUpgrade: TypedContractMethod<
    [_traderBalanceVault: AddressLike],
    [void],
    "nonpayable"
  >;

  lendingNFT: TypedContractMethod<[], [string], "view">;

  pmx: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setPMX: TypedContractMethod<[_pmx: AddressLike], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  tiersThresholds: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  traderBalanceVault: TypedContractMethod<[], [string], "view">;

  tradingNFT: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addTiers"
  ): TypedContractMethod<
    [_tiers: BigNumberish[], _thresholds: BigNumberish[], _clearTiers: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeThresholdForTier"
  ): TypedContractMethod<
    [_indexes: BigNumberish[], _newThresholds: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "farmingNFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getLenderTierForAddress"
  ): TypedContractMethod<[_userAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTiers"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getTraderTierForAddress"
  ): TypedContractMethod<[_userAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTraderTiersForAddresses"
  ): TypedContractMethod<[_userAddresses: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _pmx: AddressLike,
      _registry: AddressLike,
      _lendingNFT: AddressLike,
      _tradingNFT: AddressLike,
      _farmingNFT: AddressLike,
      _tiers: BigNumberish[],
      _thresholds: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initializeAfterUpgrade"
  ): TypedContractMethod<
    [_traderBalanceVault: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lendingNFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setPMX"
  ): TypedContractMethod<[_pmx: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "tiersThresholds"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "traderBalanceVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tradingNFT"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "PMXchanged"
  ): TypedContractEvent<
    PMXchangedEvent.InputTuple,
    PMXchangedEvent.OutputTuple,
    PMXchangedEvent.OutputObject
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

    "PMXchanged(address)": TypedContractEvent<
      PMXchangedEvent.InputTuple,
      PMXchangedEvent.OutputTuple,
      PMXchangedEvent.OutputObject
    >;
    PMXchanged: TypedContractEvent<
      PMXchangedEvent.InputTuple,
      PMXchangedEvent.OutputTuple,
      PMXchangedEvent.OutputObject
    >;
  };
}
