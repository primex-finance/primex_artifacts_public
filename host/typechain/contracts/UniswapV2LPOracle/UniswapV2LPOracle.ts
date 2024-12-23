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

export interface UniswapV2LPOracleInterface extends Interface {
  getFunction(
    nameOrSignature: "getLPExchangeRate" | "getQuoteInUsd" | "priceOracle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getLPExchangeRate",
    values: [AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuoteInUsd",
    values: [AddressLike, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getLPExchangeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuoteInUsd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
}

export interface UniswapV2LPOracle extends BaseContract {
  connect(runner?: ContractRunner | null): UniswapV2LPOracle;
  waitForDeployment(): Promise<this>;

  interface: UniswapV2LPOracleInterface;

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

  getLPExchangeRate: TypedContractMethod<
    [
      pair: AddressLike,
      token0UsdOracleData: BytesLike,
      token1UsdOracleData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  getQuoteInUsd: TypedContractMethod<
    [
      lpToken: AddressLike,
      amount: BigNumberish,
      token0UsdOracleData: BytesLike,
      token1UsdOracleData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  priceOracle: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getLPExchangeRate"
  ): TypedContractMethod<
    [
      pair: AddressLike,
      token0UsdOracleData: BytesLike,
      token1UsdOracleData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getQuoteInUsd"
  ): TypedContractMethod<
    [
      lpToken: AddressLike,
      amount: BigNumberish,
      token0UsdOracleData: BytesLike,
      token1UsdOracleData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
