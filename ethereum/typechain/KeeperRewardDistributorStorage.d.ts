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

interface KeeperRewardDistributorStorageInterface
  extends ethers.utils.Interface {
  functions: {
    "additionalGas()": FunctionFragment;
    "dataLengthRestrictions(uint8)": FunctionFragment;
    "decreasingGasByReason(uint8)": FunctionFragment;
    "defaultMaxGasPrice()": FunctionFragment;
    "keeperBalance(address)": FunctionFragment;
    "maxGasPerPosition(uint8)": FunctionFragment;
    "nativePartInReward()": FunctionFragment;
    "oracleGasPriceTolerance()": FunctionFragment;
    "paused()": FunctionFragment;
    "paymentModel()": FunctionFragment;
    "pmx()": FunctionFragment;
    "pmxPartInReward()": FunctionFragment;
    "positionSizeCoefficient()": FunctionFragment;
    "positionSizeCoefficientB()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "registry()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "totalBalance()": FunctionFragment;
    "treasury()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "additionalGas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dataLengthRestrictions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasingGasByReason",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultMaxGasPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "keeperBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxGasPerPosition",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nativePartInReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oracleGasPriceTolerance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paymentModel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pmxPartInReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionSizeCoefficient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionSizeCoefficientB",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "additionalGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dataLengthRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasingGasByReason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultMaxGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "keeperBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxGasPerPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativePartInReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleGasPriceTolerance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pmxPartInReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionSizeCoefficient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionSizeCoefficientB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class KeeperRewardDistributorStorage extends BaseContract {
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

  interface: KeeperRewardDistributorStorageInterface;

  functions: {
    additionalGas(overrides?: CallOverrides): Promise<[BigNumber]>;

    dataLengthRestrictions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        maxRoutesLength: BigNumber;
        baseLength: BigNumber;
      }
    >;

    decreasingGasByReason(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    defaultMaxGasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    keeperBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pmxBalance: BigNumber;
        nativeBalance: BigNumber;
      }
    >;

    maxGasPerPosition(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        baseMaxGas1: BigNumber;
        baseMaxGas2: BigNumber;
        multiplier1: BigNumber;
        multiplier2: BigNumber;
        inflectionPoint: BigNumber;
      }
    >;

    nativePartInReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracleGasPriceTolerance(overrides?: CallOverrides): Promise<[BigNumber]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    paymentModel(overrides?: CallOverrides): Promise<[number]>;

    pmx(overrides?: CallOverrides): Promise<[string]>;

    pmxPartInReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    positionSizeCoefficient(overrides?: CallOverrides): Promise<[BigNumber]>;

    positionSizeCoefficientB(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalBalance(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pmxBalance: BigNumber;
        nativeBalance: BigNumber;
      }
    >;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  additionalGas(overrides?: CallOverrides): Promise<BigNumber>;

  dataLengthRestrictions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      maxRoutesLength: BigNumber;
      baseLength: BigNumber;
    }
  >;

  decreasingGasByReason(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  defaultMaxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

  keeperBalance(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { pmxBalance: BigNumber; nativeBalance: BigNumber }
  >;

  maxGasPerPosition(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      baseMaxGas1: BigNumber;
      baseMaxGas2: BigNumber;
      multiplier1: BigNumber;
      multiplier2: BigNumber;
      inflectionPoint: BigNumber;
    }
  >;

  nativePartInReward(overrides?: CallOverrides): Promise<BigNumber>;

  oracleGasPriceTolerance(overrides?: CallOverrides): Promise<BigNumber>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  paymentModel(overrides?: CallOverrides): Promise<number>;

  pmx(overrides?: CallOverrides): Promise<string>;

  pmxPartInReward(overrides?: CallOverrides): Promise<BigNumber>;

  positionSizeCoefficient(overrides?: CallOverrides): Promise<BigNumber>;

  positionSizeCoefficientB(overrides?: CallOverrides): Promise<BigNumber>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  totalBalance(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { pmxBalance: BigNumber; nativeBalance: BigNumber }
  >;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    additionalGas(overrides?: CallOverrides): Promise<BigNumber>;

    dataLengthRestrictions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        maxRoutesLength: BigNumber;
        baseLength: BigNumber;
      }
    >;

    decreasingGasByReason(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    defaultMaxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    keeperBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pmxBalance: BigNumber;
        nativeBalance: BigNumber;
      }
    >;

    maxGasPerPosition(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        baseMaxGas1: BigNumber;
        baseMaxGas2: BigNumber;
        multiplier1: BigNumber;
        multiplier2: BigNumber;
        inflectionPoint: BigNumber;
      }
    >;

    nativePartInReward(overrides?: CallOverrides): Promise<BigNumber>;

    oracleGasPriceTolerance(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    paymentModel(overrides?: CallOverrides): Promise<number>;

    pmx(overrides?: CallOverrides): Promise<string>;

    pmxPartInReward(overrides?: CallOverrides): Promise<BigNumber>;

    positionSizeCoefficient(overrides?: CallOverrides): Promise<BigNumber>;

    positionSizeCoefficientB(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalBalance(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pmxBalance: BigNumber;
        nativeBalance: BigNumber;
      }
    >;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    additionalGas(overrides?: CallOverrides): Promise<BigNumber>;

    dataLengthRestrictions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreasingGasByReason(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    defaultMaxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    keeperBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxGasPerPosition(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nativePartInReward(overrides?: CallOverrides): Promise<BigNumber>;

    oracleGasPriceTolerance(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    paymentModel(overrides?: CallOverrides): Promise<BigNumber>;

    pmx(overrides?: CallOverrides): Promise<BigNumber>;

    pmxPartInReward(overrides?: CallOverrides): Promise<BigNumber>;

    positionSizeCoefficient(overrides?: CallOverrides): Promise<BigNumber>;

    positionSizeCoefficientB(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBalance(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    additionalGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dataLengthRestrictions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreasingGasByReason(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    defaultMaxGasPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keeperBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxGasPerPosition(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nativePartInReward(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracleGasPriceTolerance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paymentModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pmx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pmxPartInReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionSizeCoefficient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positionSizeCoefficientB(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
