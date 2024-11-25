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

export declare namespace ISupraSValueFeed {
  export type DerivedDataStruct = {
    roundDifference: BigNumberish;
    derivedPrice: BigNumberish;
    decimals: BigNumberish;
  };

  export type DerivedDataStructOutput = [
    roundDifference: bigint,
    derivedPrice: bigint,
    decimals: bigint
  ] & { roundDifference: bigint; derivedPrice: bigint; decimals: bigint };

  export type PriceFeedStruct = {
    round: BigNumberish;
    decimals: BigNumberish;
    time: BigNumberish;
    price: BigNumberish;
  };

  export type PriceFeedStructOutput = [
    round: bigint,
    decimals: bigint,
    time: bigint,
    price: bigint
  ] & { round: bigint; decimals: bigint; time: bigint; price: bigint };
}

export interface ISupraSValueFeedInterface extends Interface {
  getFunction(
    nameOrSignature: "getDerivedSvalue" | "getSvalue"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDerivedSvalue",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSvalue",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDerivedSvalue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSvalue", data: BytesLike): Result;
}

export interface ISupraSValueFeed extends BaseContract {
  connect(runner?: ContractRunner | null): ISupraSValueFeed;
  waitForDeployment(): Promise<this>;

  interface: ISupraSValueFeedInterface;

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

  getDerivedSvalue: TypedContractMethod<
    [pair_id_1: BigNumberish, pair_id_2: BigNumberish, operation: BigNumberish],
    [ISupraSValueFeed.DerivedDataStructOutput],
    "view"
  >;

  getSvalue: TypedContractMethod<
    [_pairIndex: BigNumberish],
    [ISupraSValueFeed.PriceFeedStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getDerivedSvalue"
  ): TypedContractMethod<
    [pair_id_1: BigNumberish, pair_id_2: BigNumberish, operation: BigNumberish],
    [ISupraSValueFeed.DerivedDataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSvalue"
  ): TypedContractMethod<
    [_pairIndex: BigNumberish],
    [ISupraSValueFeed.PriceFeedStructOutput],
    "view"
  >;

  filters: {};
}
