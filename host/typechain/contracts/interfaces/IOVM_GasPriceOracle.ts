/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface IOVM_GasPriceOracleInterface extends Interface {
  getFunction(
    nameOrSignature: "l1BaseFee" | "overhead" | "scalar"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "l1BaseFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "overhead", values?: undefined): string;
  encodeFunctionData(functionFragment: "scalar", values?: undefined): string;

  decodeFunctionResult(functionFragment: "l1BaseFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "overhead", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "scalar", data: BytesLike): Result;
}

export interface IOVM_GasPriceOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IOVM_GasPriceOracle;
  waitForDeployment(): Promise<this>;

  interface: IOVM_GasPriceOracleInterface;

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

  l1BaseFee: TypedContractMethod<[], [bigint], "view">;

  overhead: TypedContractMethod<[], [bigint], "view">;

  scalar: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "l1BaseFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "overhead"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "scalar"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
