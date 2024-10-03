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

interface IPriceOracleStorageInterface extends ethers.utils.Interface {
  functions: {
    "eth()": FunctionFragment;
    "gasPriceFeed()": FunctionFragment;
    "pairPriceDrops(address,address)": FunctionFragment;
    "registry()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "eth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gasPriceFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pairPriceDrops",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;

  decodeFunctionResult(functionFragment: "eth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gasPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairPriceDrops",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;

  events: {};
}

export class IPriceOracleStorage extends BaseContract {
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

  interface: IPriceOracleStorageInterface;

  functions: {
    eth(overrides?: CallOverrides): Promise<[string]>;

    gasPriceFeed(overrides?: CallOverrides): Promise<[string]>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    registry(overrides?: CallOverrides): Promise<[string]>;
  };

  eth(overrides?: CallOverrides): Promise<string>;

  gasPriceFeed(overrides?: CallOverrides): Promise<string>;

  pairPriceDrops(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  registry(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    eth(overrides?: CallOverrides): Promise<string>;

    gasPriceFeed(overrides?: CallOverrides): Promise<string>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    eth(overrides?: CallOverrides): Promise<BigNumber>;

    gasPriceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    eth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasPriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairPriceDrops(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}