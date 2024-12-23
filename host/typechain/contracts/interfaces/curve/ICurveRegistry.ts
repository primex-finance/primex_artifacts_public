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
} from "../../../common";

export interface ICurveRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "exchange"
      | "get_coins"
      | "get_gauges"
      | "get_lp_token"
      | "get_n_coins"
      | "get_pool_from_lp_token"
      | "get_virtual_price_from_lp_token"
      | "pool_list"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exchange",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_coins",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_gauges",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_lp_token",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_n_coins",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_pool_from_lp_token",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_virtual_price_from_lp_token",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pool_list",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get_coins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get_gauges", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "get_lp_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_n_coins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_pool_from_lp_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_virtual_price_from_lp_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool_list", data: BytesLike): Result;
}

export interface ICurveRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): ICurveRegistry;
  waitForDeployment(): Promise<this>;

  interface: ICurveRegistryInterface;

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

  exchange: TypedContractMethod<
    [
      _pool: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _expected: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  get_coins: TypedContractMethod<[pool: AddressLike], [string[]], "view">;

  get_gauges: TypedContractMethod<
    [pool: AddressLike],
    [[string[], bigint[]]],
    "view"
  >;

  get_lp_token: TypedContractMethod<[pool: AddressLike], [string], "view">;

  get_n_coins: TypedContractMethod<
    [lp: AddressLike],
    [[bigint, bigint]],
    "view"
  >;

  get_pool_from_lp_token: TypedContractMethod<
    [lp: AddressLike],
    [string],
    "view"
  >;

  get_virtual_price_from_lp_token: TypedContractMethod<
    [lp: AddressLike],
    [bigint],
    "view"
  >;

  pool_list: TypedContractMethod<[id: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "exchange"
  ): TypedContractMethod<
    [
      _pool: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _amount: BigNumberish,
      _expected: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "get_coins"
  ): TypedContractMethod<[pool: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "get_gauges"
  ): TypedContractMethod<[pool: AddressLike], [[string[], bigint[]]], "view">;
  getFunction(
    nameOrSignature: "get_lp_token"
  ): TypedContractMethod<[pool: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "get_n_coins"
  ): TypedContractMethod<[lp: AddressLike], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "get_pool_from_lp_token"
  ): TypedContractMethod<[lp: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "get_virtual_price_from_lp_token"
  ): TypedContractMethod<[lp: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pool_list"
  ): TypedContractMethod<[id: BigNumberish], [string], "view">;

  filters: {};
}
