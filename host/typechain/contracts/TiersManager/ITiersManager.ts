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

export interface ITiersManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addTiers"
      | "changeThresholdForTier"
      | "getLenderTierForAddress"
      | "getTiers"
      | "getTraderTierForAddress"
      | "getTraderTiersForAddresses"
      | "initialize"
      | "initializeAfterUpgrade"
      | "setPMX"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addTiers",
    values: [BigNumberish[], BigNumberish[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "changeThresholdForTier",
    values: [BigNumberish[], BigNumberish[]]
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
  encodeFunctionData(functionFragment: "setPMX", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "addTiers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeThresholdForTier",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: "setPMX", data: BytesLike): Result;
}

export interface ITiersManager extends BaseContract {
  connect(runner?: ContractRunner | null): ITiersManager;
  waitForDeployment(): Promise<this>;

  interface: ITiersManagerInterface;

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

  setPMX: TypedContractMethod<[_pmx: AddressLike], [void], "nonpayable">;

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
    nameOrSignature: "setPMX"
  ): TypedContractMethod<[_pmx: AddressLike], [void], "nonpayable">;

  filters: {};
}
