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
} from "../../../common";

export interface ICurveCalcInterface extends Interface {
  getFunction(nameOrSignature: "get_dx"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "get_dx",
    values: [
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish[],
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "get_dx", data: BytesLike): Result;
}

export interface ICurveCalc extends BaseContract {
  connect(runner?: ContractRunner | null): ICurveCalc;
  waitForDeployment(): Promise<this>;

  interface: ICurveCalcInterface;

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

  get_dx: TypedContractMethod<
    [
      n_coins: BigNumberish,
      balances: BigNumberish[],
      amp: BigNumberish,
      fee: BigNumberish,
      rates: BigNumberish[],
      precisions: BigNumberish[],
      underlying: boolean,
      i: BigNumberish,
      j: BigNumberish,
      dy: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "get_dx"
  ): TypedContractMethod<
    [
      n_coins: BigNumberish,
      balances: BigNumberish[],
      amp: BigNumberish,
      fee: BigNumberish,
      rates: BigNumberish[],
      precisions: BigNumberish[],
      underlying: boolean,
      i: BigNumberish,
      j: BigNumberish,
      dy: BigNumberish
    ],
    [bigint],
    "view"
  >;

  filters: {};
}
