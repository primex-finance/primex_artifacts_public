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

export declare namespace IMixedRouteQuoterV1 {
  export type QuoteExactInputSingleV2ParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    amountIn: BigNumberish;
  };

  export type QuoteExactInputSingleV2ParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    amountIn: bigint
  ] & { tokenIn: string; tokenOut: string; amountIn: bigint };

  export type QuoteExactInputSingleV3ParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    amountIn: BigNumberish;
    fee: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type QuoteExactInputSingleV3ParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    amountIn: bigint,
    fee: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    amountIn: bigint;
    fee: bigint;
    sqrtPriceLimitX96: bigint;
  };
}

export interface MixedRouteQuoterV1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "WETH9"
      | "factory"
      | "factorySushi"
      | "factoryV2"
      | "quoteExactInput"
      | "quoteExactInputSingleSushi"
      | "quoteExactInputSingleV2"
      | "quoteExactInputSingleV3"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "factorySushi",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteExactInput",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingleSushi",
    values: [IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingleV2",
    values: [IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingleV3",
    values: [IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "factorySushi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingleSushi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingleV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingleV3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;
}

export interface MixedRouteQuoterV1 extends BaseContract {
  connect(runner?: ContractRunner | null): MixedRouteQuoterV1;
  waitForDeployment(): Promise<this>;

  interface: MixedRouteQuoterV1Interface;

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

  WETH9: TypedContractMethod<[], [string], "view">;

  factory: TypedContractMethod<[], [string], "view">;

  factorySushi: TypedContractMethod<[], [string], "view">;

  factoryV2: TypedContractMethod<[], [string], "view">;

  quoteExactInput: TypedContractMethod<
    [path: BytesLike, amountIn: BigNumberish],
    [
      [bigint, bigint[], bigint[], bigint] & {
        amountOut: bigint;
        v3SqrtPriceX96AfterList: bigint[];
        v3InitializedTicksCrossedList: bigint[];
        v3SwapGasEstimate: bigint;
      }
    ],
    "nonpayable"
  >;

  quoteExactInputSingleSushi: TypedContractMethod<
    [params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct],
    [bigint],
    "view"
  >;

  quoteExactInputSingleV2: TypedContractMethod<
    [params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct],
    [bigint],
    "view"
  >;

  quoteExactInputSingleV3: TypedContractMethod<
    [params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        amountOut: bigint;
        sqrtPriceX96After: bigint;
        initializedTicksCrossed: bigint;
        gasEstimate: bigint;
      }
    ],
    "nonpayable"
  >;

  uniswapV3SwapCallback: TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, path: BytesLike],
    [void],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WETH9"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factorySushi"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factoryV2"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "quoteExactInput"
  ): TypedContractMethod<
    [path: BytesLike, amountIn: BigNumberish],
    [
      [bigint, bigint[], bigint[], bigint] & {
        amountOut: bigint;
        v3SqrtPriceX96AfterList: bigint[];
        v3InitializedTicksCrossedList: bigint[];
        v3SwapGasEstimate: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "quoteExactInputSingleSushi"
  ): TypedContractMethod<
    [params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "quoteExactInputSingleV2"
  ): TypedContractMethod<
    [params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "quoteExactInputSingleV3"
  ): TypedContractMethod<
    [params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        amountOut: bigint;
        sqrtPriceX96After: bigint;
        initializedTicksCrossed: bigint;
        gasEstimate: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uniswapV3SwapCallback"
  ): TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, path: BytesLike],
    [void],
    "view"
  >;

  filters: {};
}
