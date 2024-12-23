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

export interface IPrimexDNSStorageV4Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "aavePool"
      | "additionalGasSpent"
      | "adminWithdrawalDelay"
      | "averageGasPerAction"
      | "buckets"
      | "cmTypeToAddress"
      | "delistingDelay"
      | "dexAdapter"
      | "dexes"
      | "feeRates"
      | "feeRestrictions"
      | "gasPriceBuffer"
      | "leverageTolerance"
      | "liquidationGasAmount"
      | "maxProtocolFee"
      | "minFeeRestrictions"
      | "pmx"
      | "pmxDiscountMultiplier"
      | "protocolFeeCoefficient"
      | "protocolFeeRates"
      | "protocolFeeRatesByTier"
      | "registry"
      | "tiersManager"
      | "treasury"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "aavePool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "additionalGasSpent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adminWithdrawalDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "averageGasPerAction",
    values: [BigNumberish]
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
  encodeFunctionData(
    functionFragment: "gasPriceBuffer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "leverageTolerance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationGasAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minFeeRestrictions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pmxDiscountMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeCoefficient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeRates",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeRatesByTier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tiersManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(functionFragment: "aavePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "additionalGasSpent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminWithdrawalDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "averageGasPerAction",
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
  decodeFunctionResult(
    functionFragment: "gasPriceBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leverageTolerance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationGasAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minFeeRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pmxDiscountMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeCoefficient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeRatesByTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tiersManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
}

export interface IPrimexDNSStorageV4 extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimexDNSStorageV4;
  waitForDeployment(): Promise<this>;

  interface: IPrimexDNSStorageV4Interface;

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

  additionalGasSpent: TypedContractMethod<[], [bigint], "view">;

  adminWithdrawalDelay: TypedContractMethod<[], [bigint], "view">;

  averageGasPerAction: TypedContractMethod<
    [_tradingOrderType: BigNumberish],
    [bigint],
    "view"
  >;

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

  gasPriceBuffer: TypedContractMethod<[], [bigint], "view">;

  leverageTolerance: TypedContractMethod<[], [bigint], "view">;

  liquidationGasAmount: TypedContractMethod<[], [bigint], "view">;

  maxProtocolFee: TypedContractMethod<[], [bigint], "view">;

  minFeeRestrictions: TypedContractMethod<
    [_callingMethod: BigNumberish],
    [[bigint, bigint] & { maxGasAmount: bigint; baseLength: bigint }],
    "view"
  >;

  pmx: TypedContractMethod<[], [string], "view">;

  pmxDiscountMultiplier: TypedContractMethod<[], [bigint], "view">;

  protocolFeeCoefficient: TypedContractMethod<[], [bigint], "view">;

  protocolFeeRates: TypedContractMethod<
    [_feeRateType: BigNumberish],
    [bigint],
    "view"
  >;

  protocolFeeRatesByTier: TypedContractMethod<
    [_feeRateType: BigNumberish, _tier: BigNumberish],
    [bigint],
    "view"
  >;

  registry: TypedContractMethod<[], [string], "view">;

  tiersManager: TypedContractMethod<[], [string], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "aavePool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "additionalGasSpent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "adminWithdrawalDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "averageGasPerAction"
  ): TypedContractMethod<[_tradingOrderType: BigNumberish], [bigint], "view">;
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
    nameOrSignature: "gasPriceBuffer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "leverageTolerance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "liquidationGasAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxProtocolFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minFeeRestrictions"
  ): TypedContractMethod<
    [_callingMethod: BigNumberish],
    [[bigint, bigint] & { maxGasAmount: bigint; baseLength: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pmxDiscountMultiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "protocolFeeCoefficient"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "protocolFeeRates"
  ): TypedContractMethod<[_feeRateType: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "protocolFeeRatesByTier"
  ): TypedContractMethod<
    [_feeRateType: BigNumberish, _tier: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tiersManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
