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

export declare namespace IBucketStorage {
  export type LiquidityMiningParamsStruct = {
    liquidityMiningRewardDistributor: AddressLike;
    isBucketLaunched: boolean;
    accumulatingAmount: BigNumberish;
    deadlineTimestamp: BigNumberish;
    stabilizationDuration: BigNumberish;
    stabilizationEndTimestamp: BigNumberish;
    maxAmountPerUser: BigNumberish;
    maxDuration: BigNumberish;
    maxStabilizationEndTimestamp: BigNumberish;
  };

  export type LiquidityMiningParamsStructOutput = [
    liquidityMiningRewardDistributor: string,
    isBucketLaunched: boolean,
    accumulatingAmount: bigint,
    deadlineTimestamp: bigint,
    stabilizationDuration: bigint,
    stabilizationEndTimestamp: bigint,
    maxAmountPerUser: bigint,
    maxDuration: bigint,
    maxStabilizationEndTimestamp: bigint
  ] & {
    liquidityMiningRewardDistributor: string;
    isBucketLaunched: boolean;
    accumulatingAmount: bigint;
    deadlineTimestamp: bigint;
    stabilizationDuration: bigint;
    stabilizationEndTimestamp: bigint;
    maxAmountPerUser: bigint;
    maxDuration: bigint;
    maxStabilizationEndTimestamp: bigint;
  };
}

export interface IBucketMockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "burnDebtToken"
      | "burnPToken"
      | "mintDebtToken"
      | "mintPToken"
      | "setActive"
      | "setCanClaimReward"
      | "setDebtToken"
      | "setDelisted"
      | "setLiquidityIndex"
      | "setLiquidityMiningParams"
      | "setNormalizedIncome"
      | "setPToken"
      | "setVariableBorrowIndex"
      | "setWhiteBlackList"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnDebtToken",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnPToken",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintDebtToken",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintPToken",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setActive", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setCanClaimReward",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setDebtToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelisted",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidityIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidityMiningParams",
    values: [IBucketStorage.LiquidityMiningParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setNormalizedIncome",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVariableBorrowIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhiteBlackList",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "burnDebtToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnPToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintDebtToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintPToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setActive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCanClaimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDebtToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidityIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidityMiningParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNormalizedIncome",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVariableBorrowIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhiteBlackList",
    data: BytesLike
  ): Result;
}

export interface IBucketMock extends BaseContract {
  connect(runner?: ContractRunner | null): IBucketMock;
  waitForDeployment(): Promise<this>;

  interface: IBucketMockInterface;

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

  burnDebtToken: TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;

  burnPToken: TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;

  mintDebtToken: TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;

  mintPToken: TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;

  setActive: TypedContractMethod<[_active: boolean], [boolean], "nonpayable">;

  setCanClaimReward: TypedContractMethod<
    [_isClaimable: boolean],
    [void],
    "nonpayable"
  >;

  setDebtToken: TypedContractMethod<
    [_debtToken: AddressLike],
    [void],
    "nonpayable"
  >;

  setDelisted: TypedContractMethod<
    [_delisted: boolean],
    [boolean],
    "nonpayable"
  >;

  setLiquidityIndex: TypedContractMethod<
    [_liquidityIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  setLiquidityMiningParams: TypedContractMethod<
    [_newLMparams: IBucketStorage.LiquidityMiningParamsStruct],
    [void],
    "nonpayable"
  >;

  setNormalizedIncome: TypedContractMethod<
    [_normalizedIncome: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPToken: TypedContractMethod<[_pToken: AddressLike], [void], "nonpayable">;

  setVariableBorrowIndex: TypedContractMethod<
    [_variableBorrowIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  setWhiteBlackList: TypedContractMethod<
    [_whiteBlackList: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "burnDebtToken"
  ): TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnPToken"
  ): TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintDebtToken"
  ): TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintPToken"
  ): TypedContractMethod<
    [_trader: AddressLike, _amount: BigNumberish, _index: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setActive"
  ): TypedContractMethod<[_active: boolean], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "setCanClaimReward"
  ): TypedContractMethod<[_isClaimable: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDebtToken"
  ): TypedContractMethod<[_debtToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDelisted"
  ): TypedContractMethod<[_delisted: boolean], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "setLiquidityIndex"
  ): TypedContractMethod<[_liquidityIndex: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setLiquidityMiningParams"
  ): TypedContractMethod<
    [_newLMparams: IBucketStorage.LiquidityMiningParamsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setNormalizedIncome"
  ): TypedContractMethod<
    [_normalizedIncome: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPToken"
  ): TypedContractMethod<[_pToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVariableBorrowIndex"
  ): TypedContractMethod<
    [_variableBorrowIndex: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setWhiteBlackList"
  ): TypedContractMethod<[_whiteBlackList: AddressLike], [void], "nonpayable">;

  filters: {};
}