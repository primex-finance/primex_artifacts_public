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

export interface IDebtTokensFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bucketsFactory"
      | "createDebtToken"
      | "registry"
      | "setBucketsFactory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bucketsFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createDebtToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBucketsFactory",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "bucketsFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDebtToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBucketsFactory",
    data: BytesLike
  ): Result;
}

export interface IDebtTokensFactory extends BaseContract {
  connect(runner?: ContractRunner | null): IDebtTokensFactory;
  waitForDeployment(): Promise<this>;

  interface: IDebtTokensFactoryInterface;

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

  bucketsFactory: TypedContractMethod<[], [string], "view">;

  createDebtToken: TypedContractMethod<
    [_name: string, _symbol: string, _decimals: BigNumberish],
    [string],
    "nonpayable"
  >;

  registry: TypedContractMethod<[], [string], "view">;

  setBucketsFactory: TypedContractMethod<
    [bucketsFactory: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bucketsFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "createDebtToken"
  ): TypedContractMethod<
    [_name: string, _symbol: string, _decimals: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setBucketsFactory"
  ): TypedContractMethod<[bucketsFactory: AddressLike], [void], "nonpayable">;

  filters: {};
}
