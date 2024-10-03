/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BucketStorageV2Interface extends ethers.utils.Interface {
  functions: {
    "aaveDeposit()": FunctionFragment;
    "allowedAssets(address)": FunctionFragment;
    "bar()": FunctionFragment;
    "borrowedAsset()": FunctionFragment;
    "bucketExtension()": FunctionFragment;
    "debtToken()": FunctionFragment;
    "estimatedBar()": FunctionFragment;
    "estimatedLar()": FunctionFragment;
    "feeBuffer()": FunctionFragment;
    "interestRateStrategy()": FunctionFragment;
    "isReinvestToAaveEnabled()": FunctionFragment;
    "lar()": FunctionFragment;
    "lastUpdatedBlockTimestamp()": FunctionFragment;
    "liquidityIndex()": FunctionFragment;
    "maxTotalDeposit()": FunctionFragment;
    "name()": FunctionFragment;
    "pToken()": FunctionFragment;
    "permanentLossScaled()": FunctionFragment;
    "positionManager()": FunctionFragment;
    "registry()": FunctionFragment;
    "reserve()": FunctionFragment;
    "reserveRate()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "variableBorrowIndex()": FunctionFragment;
    "whiteBlackList()": FunctionFragment;
    "withdrawalFeeRate()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "aaveDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedAssets",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "bar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowedAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bucketExtension",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "estimatedBar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimatedLar",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeBuffer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "interestRateStrategy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isReinvestToAaveEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedBlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTotalDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "pToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permanentLossScaled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "reserve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reserveRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "variableBorrowIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalFeeRate",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "aaveDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketExtension",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimatedBar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimatedLar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeBuffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "interestRateStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReinvestToAaveEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTotalDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permanentLossScaled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserveRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variableBorrowIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalFeeRate",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export class BucketStorageV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BucketStorageV2Interface;

  functions: {
    aaveDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowedAssets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { index: BigNumber; isSupported: boolean }
    >;

    bar(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowedAsset(overrides?: CallOverrides): Promise<[string]>;

    bucketExtension(overrides?: CallOverrides): Promise<[string]>;

    debtToken(overrides?: CallOverrides): Promise<[string]>;

    estimatedBar(overrides?: CallOverrides): Promise<[BigNumber]>;

    estimatedLar(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeBuffer(overrides?: CallOverrides): Promise<[BigNumber]>;

    interestRateStrategy(overrides?: CallOverrides): Promise<[string]>;

    isReinvestToAaveEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    lar(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdatedBlockTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidityIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxTotalDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    pToken(overrides?: CallOverrides): Promise<[string]>;

    permanentLossScaled(overrides?: CallOverrides): Promise<[BigNumber]>;

    positionManager(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    reserve(overrides?: CallOverrides): Promise<[string]>;

    reserveRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    variableBorrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    whiteBlackList(overrides?: CallOverrides): Promise<[string]>;

    withdrawalFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  aaveDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  allowedAssets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { index: BigNumber; isSupported: boolean }>;

  bar(overrides?: CallOverrides): Promise<BigNumber>;

  borrowedAsset(overrides?: CallOverrides): Promise<string>;

  bucketExtension(overrides?: CallOverrides): Promise<string>;

  debtToken(overrides?: CallOverrides): Promise<string>;

  estimatedBar(overrides?: CallOverrides): Promise<BigNumber>;

  estimatedLar(overrides?: CallOverrides): Promise<BigNumber>;

  feeBuffer(overrides?: CallOverrides): Promise<BigNumber>;

  interestRateStrategy(overrides?: CallOverrides): Promise<string>;

  isReinvestToAaveEnabled(overrides?: CallOverrides): Promise<boolean>;

  lar(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdatedBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  liquidityIndex(overrides?: CallOverrides): Promise<BigNumber>;

  maxTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  pToken(overrides?: CallOverrides): Promise<string>;

  permanentLossScaled(overrides?: CallOverrides): Promise<BigNumber>;

  positionManager(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  reserve(overrides?: CallOverrides): Promise<string>;

  reserveRate(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  variableBorrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

  whiteBlackList(overrides?: CallOverrides): Promise<string>;

  withdrawalFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    aaveDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    allowedAssets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { index: BigNumber; isSupported: boolean }
    >;

    bar(overrides?: CallOverrides): Promise<BigNumber>;

    borrowedAsset(overrides?: CallOverrides): Promise<string>;

    bucketExtension(overrides?: CallOverrides): Promise<string>;

    debtToken(overrides?: CallOverrides): Promise<string>;

    estimatedBar(overrides?: CallOverrides): Promise<BigNumber>;

    estimatedLar(overrides?: CallOverrides): Promise<BigNumber>;

    feeBuffer(overrides?: CallOverrides): Promise<BigNumber>;

    interestRateStrategy(overrides?: CallOverrides): Promise<string>;

    isReinvestToAaveEnabled(overrides?: CallOverrides): Promise<boolean>;

    lar(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdatedBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityIndex(overrides?: CallOverrides): Promise<BigNumber>;

    maxTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    pToken(overrides?: CallOverrides): Promise<string>;

    permanentLossScaled(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    reserve(overrides?: CallOverrides): Promise<string>;

    reserveRate(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    variableBorrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    whiteBlackList(overrides?: CallOverrides): Promise<string>;

    withdrawalFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;
  };

  estimateGas: {
    aaveDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    allowedAssets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    bar(overrides?: CallOverrides): Promise<BigNumber>;

    borrowedAsset(overrides?: CallOverrides): Promise<BigNumber>;

    bucketExtension(overrides?: CallOverrides): Promise<BigNumber>;

    debtToken(overrides?: CallOverrides): Promise<BigNumber>;

    estimatedBar(overrides?: CallOverrides): Promise<BigNumber>;

    estimatedLar(overrides?: CallOverrides): Promise<BigNumber>;

    feeBuffer(overrides?: CallOverrides): Promise<BigNumber>;

    interestRateStrategy(overrides?: CallOverrides): Promise<BigNumber>;

    isReinvestToAaveEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    lar(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdatedBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityIndex(overrides?: CallOverrides): Promise<BigNumber>;

    maxTotalDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    pToken(overrides?: CallOverrides): Promise<BigNumber>;

    permanentLossScaled(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    reserve(overrides?: CallOverrides): Promise<BigNumber>;

    reserveRate(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    variableBorrowIndex(overrides?: CallOverrides): Promise<BigNumber>;

    whiteBlackList(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawalFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    aaveDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowedAssets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowedAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bucketExtension(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    estimatedBar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    estimatedLar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interestRateStrategy(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isReinvestToAaveEnabled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdatedBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxTotalDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permanentLossScaled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    variableBorrowIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whiteBlackList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawalFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
