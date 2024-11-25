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

export interface IPrimexDNSStorageV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "aavePool"
      | "adminWithdrawalDelay"
      | "buckets"
      | "cmTypeToAddress"
      | "delistingDelay"
      | "dexAdapter"
      | "dexes"
      | "feeRates"
      | "feeRestrictions"
      | "pmx"
      | "registry"
      | "treasury"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "aavePool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adminWithdrawalDelay",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buckets", values: [string]): string;
  encodeFunctionData(
    functionFragment: "cmTypeToAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delistingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dexAdapter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dexes", values: [string]): string;
  encodeFunctionData(
    functionFragment: "feeRates",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "feeRestrictions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(functionFragment: "aavePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminWithdrawalDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buckets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cmTypeToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delistingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dexAdapter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dexes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeRates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
}

export interface IPrimexDNSStorageV2 extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimexDNSStorageV2;
  waitForDeployment(): Promise<this>;

  interface: IPrimexDNSStorageV2Interface;

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

  aavePool: TypedContractMethod<[], [string], "view">;

  adminWithdrawalDelay: TypedContractMethod<[], [bigint], "view">;

  buckets: TypedContractMethod<
    [arg0: string],
    [[string, bigint, bigint, bigint]],
    "view"
  >;

  cmTypeToAddress: TypedContractMethod<
    [cmType: BigNumberish],
    [string],
    "view"
  >;

  delistingDelay: TypedContractMethod<[], [bigint], "view">;

  dexAdapter: TypedContractMethod<[], [string], "view">;

  dexes: TypedContractMethod<[arg0: string], [[string, boolean]], "view">;

  feeRates: TypedContractMethod<
    [_orderType: BigNumberish, _token: AddressLike],
    [bigint],
    "view"
  >;

  feeRestrictions: TypedContractMethod<
    [_orderType: BigNumberish],
    [[bigint, bigint] & { minProtocolFee: bigint; maxProtocolFee: bigint }],
    "view"
  >;

  pmx: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "aavePool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "adminWithdrawalDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "buckets"
  ): TypedContractMethod<
    [arg0: string],
    [[string, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "cmTypeToAddress"
  ): TypedContractMethod<[cmType: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "delistingDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dexAdapter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "dexes"
  ): TypedContractMethod<[arg0: string], [[string, boolean]], "view">;
  getFunction(
    nameOrSignature: "feeRates"
  ): TypedContractMethod<
    [_orderType: BigNumberish, _token: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "feeRestrictions"
  ): TypedContractMethod<
    [_orderType: BigNumberish],
    [[bigint, bigint] & { minProtocolFee: bigint; maxProtocolFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
