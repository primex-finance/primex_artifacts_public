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

export interface IDepositManagerStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "depositIdCounter"
      | "interestRates"
      | "maxTotalDeposits"
      | "priceOracle"
      | "primexDNS"
      | "registry"
      | "whiteBlackList"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositIdCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interestRates",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxTotalDeposits",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "depositIdCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTotalDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;
}

export interface IDepositManagerStorage extends BaseContract {
  connect(runner?: ContractRunner | null): IDepositManagerStorage;
  waitForDeployment(): Promise<this>;

  interface: IDepositManagerStorageInterface;

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

  depositIdCounter: TypedContractMethod<[], [bigint], "view">;

  interestRates: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [bigint],
    "view"
  >;

  maxTotalDeposits: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  whiteBlackList: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "depositIdCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "interestRates"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "maxTotalDeposits"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "primexDNS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "whiteBlackList"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
