/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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
    nameOrSignature: "get_coin_indices" | "get_n_coins" | "get_rates"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "get_coin_indices",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_n_coins",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_rates",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "get_coin_indices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_n_coins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get_rates", data: BytesLike): Result;
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

  get_coin_indices: TypedContractMethod<
    [_pool: AddressLike, _from: AddressLike, _to: AddressLike],
    [[bigint, bigint, boolean]],
    "view"
  >;

  get_n_coins: TypedContractMethod<
    [_pool: AddressLike],
    [[bigint, bigint]],
    "view"
  >;

  get_rates: TypedContractMethod<[_pool: AddressLike], [bigint[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "get_coin_indices"
  ): TypedContractMethod<
    [_pool: AddressLike, _from: AddressLike, _to: AddressLike],
    [[bigint, bigint, boolean]],
    "view"
  >;
  getFunction(
    nameOrSignature: "get_n_coins"
  ): TypedContractMethod<[_pool: AddressLike], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "get_rates"
  ): TypedContractMethod<[_pool: AddressLike], [bigint[]], "view">;

  filters: {};
}
