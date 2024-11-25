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

export declare namespace ISwapRouter {
  export type ExactInputSingleParamsStruct = {
    tokenIn: AddressLike;
    tokenOut: AddressLike;
    fee: BigNumberish;
    recipient: AddressLike;
    deadline: BigNumberish;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactInputSingleParamsStructOutput = [
    tokenIn: string,
    tokenOut: string,
    fee: bigint,
    recipient: string,
    deadline: bigint,
    amountIn: bigint,
    amountOutMinimum: bigint,
    sqrtPriceLimitX96: bigint
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: bigint;
    recipient: string;
    deadline: bigint;
    amountIn: bigint;
    amountOutMinimum: bigint;
    sqrtPriceLimitX96: bigint;
  };
}

export interface ISynchronizationBotLensUniV3TestServiceInterface
  extends Interface {
  getFunction(
    nameOrSignature:
      | "getArraySqrtPriceX96"
      | "getUserBalances"
      | "swapUniswapV3"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getArraySqrtPriceX96",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBalances",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "swapUniswapV3",
    values: [AddressLike, ISwapRouter.ExactInputSingleParamsStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getArraySqrtPriceX96",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapUniswapV3",
    data: BytesLike
  ): Result;
}

export interface ISynchronizationBotLensUniV3TestService extends BaseContract {
  connect(
    runner?: ContractRunner | null
  ): ISynchronizationBotLensUniV3TestService;
  waitForDeployment(): Promise<this>;

  interface: ISynchronizationBotLensUniV3TestServiceInterface;

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

  getArraySqrtPriceX96: TypedContractMethod<
    [pools: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getUserBalances: TypedContractMethod<
    [sender: AddressLike, assets: AddressLike[]],
    [
      [bigint, bigint[], bigint] & {
        nativeBalance: bigint;
        assetsBalances: bigint[];
        blockNumber: bigint;
      }
    ],
    "view"
  >;

  swapUniswapV3: TypedContractMethod<
    [
      _swapRouterUniV3: AddressLike,
      params: ISwapRouter.ExactInputSingleParamsStruct[]
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getArraySqrtPriceX96"
  ): TypedContractMethod<[pools: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getUserBalances"
  ): TypedContractMethod<
    [sender: AddressLike, assets: AddressLike[]],
    [
      [bigint, bigint[], bigint] & {
        nativeBalance: bigint;
        assetsBalances: bigint[];
        blockNumber: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "swapUniswapV3"
  ): TypedContractMethod<
    [
      _swapRouterUniV3: AddressLike,
      params: ISwapRouter.ExactInputSingleParamsStruct[]
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
