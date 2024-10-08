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

interface IPriceOracleStorageV3Interface extends ethers.utils.Interface {
  functions: {
    "chainlinkPriceFeedsUsd(address)": FunctionFragment;
    "eth()": FunctionFragment;
    "gasPriceFeed()": FunctionFragment;
    "pairPriceDrops(address,address)": FunctionFragment;
    "pyth()": FunctionFragment;
    "pythPairIds(address)": FunctionFragment;
    "registry()": FunctionFragment;
    "supraDataFeedID(address,address)": FunctionFragment;
    "supraPullOracle()": FunctionFragment;
    "supraStorageOracle()": FunctionFragment;
    "timeTolerance()": FunctionFragment;
    "treasury()": FunctionFragment;
    "univ3TrustedPairs(uint256,address,address)": FunctionFragment;
    "univ3TypeOracles(uint256)": FunctionFragment;
    "usdt()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "chainlinkPriceFeedsUsd",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "eth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gasPriceFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pairPriceDrops",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "pyth", values?: undefined): string;
  encodeFunctionData(functionFragment: "pythPairIds", values: [string]): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supraDataFeedID",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supraPullOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supraStorageOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeTolerance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "univ3TrustedPairs",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "univ3TypeOracles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "usdt", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "chainlinkPriceFeedsUsd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "eth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gasPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairPriceDrops",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pyth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pythPairIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supraDataFeedID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supraPullOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supraStorageOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeTolerance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "univ3TrustedPairs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "univ3TypeOracles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdt", data: BytesLike): Result;

  events: {};
}

export class IPriceOracleStorageV3 extends BaseContract {
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

  interface: IPriceOracleStorageV3Interface;

  functions: {
    chainlinkPriceFeedsUsd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    eth(overrides?: CallOverrides): Promise<[string]>;

    gasPriceFeed(overrides?: CallOverrides): Promise<[string]>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pyth(overrides?: CallOverrides): Promise<[string]>;

    pythPairIds(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    supraDataFeedID(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    supraPullOracle(overrides?: CallOverrides): Promise<[string]>;

    supraStorageOracle(overrides?: CallOverrides): Promise<[string]>;

    timeTolerance(overrides?: CallOverrides): Promise<[BigNumber]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    univ3TrustedPairs(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    univ3TypeOracles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    usdt(overrides?: CallOverrides): Promise<[string]>;
  };

  chainlinkPriceFeedsUsd(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  eth(overrides?: CallOverrides): Promise<string>;

  gasPriceFeed(overrides?: CallOverrides): Promise<string>;

  pairPriceDrops(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pyth(overrides?: CallOverrides): Promise<string>;

  pythPairIds(arg0: string, overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  supraDataFeedID(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean]>;

  supraPullOracle(overrides?: CallOverrides): Promise<string>;

  supraStorageOracle(overrides?: CallOverrides): Promise<string>;

  timeTolerance(overrides?: CallOverrides): Promise<BigNumber>;

  treasury(overrides?: CallOverrides): Promise<string>;

  univ3TrustedPairs(
    arg0: BigNumberish,
    arg1: string,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  univ3TypeOracles(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  usdt(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    chainlinkPriceFeedsUsd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    eth(overrides?: CallOverrides): Promise<string>;

    gasPriceFeed(overrides?: CallOverrides): Promise<string>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pyth(overrides?: CallOverrides): Promise<string>;

    pythPairIds(arg0: string, overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    supraDataFeedID(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    supraPullOracle(overrides?: CallOverrides): Promise<string>;

    supraStorageOracle(overrides?: CallOverrides): Promise<string>;

    timeTolerance(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<string>;

    univ3TrustedPairs(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    univ3TypeOracles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    usdt(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    chainlinkPriceFeedsUsd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eth(overrides?: CallOverrides): Promise<BigNumber>;

    gasPriceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pyth(overrides?: CallOverrides): Promise<BigNumber>;

    pythPairIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    supraDataFeedID(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supraPullOracle(overrides?: CallOverrides): Promise<BigNumber>;

    supraStorageOracle(overrides?: CallOverrides): Promise<BigNumber>;

    timeTolerance(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    univ3TrustedPairs(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    univ3TypeOracles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdt(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    chainlinkPriceFeedsUsd(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasPriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pyth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pythPairIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supraDataFeedID(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supraPullOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supraStorageOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timeTolerance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    univ3TrustedPairs(
      arg0: BigNumberish,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    univ3TypeOracles(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usdt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
