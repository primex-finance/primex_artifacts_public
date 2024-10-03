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

interface IBatchManagerStorageInterface extends ethers.utils.Interface {
  functions: {
    "gasPerBatch()": FunctionFragment;
    "gasPerPosition()": FunctionFragment;
    "positionManager()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "registry()": FunctionFragment;
    "whiteBlackList()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "gasPerBatch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gasPerPosition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "gasPerBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasPerPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;

  events: {};
}

export class IBatchManagerStorage extends BaseContract {
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

  interface: IBatchManagerStorageInterface;

  functions: {
    gasPerBatch(overrides?: CallOverrides): Promise<[BigNumber]>;

    gasPerPosition(overrides?: CallOverrides): Promise<[BigNumber]>;

    positionManager(overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    whiteBlackList(overrides?: CallOverrides): Promise<[string]>;
  };

  gasPerBatch(overrides?: CallOverrides): Promise<BigNumber>;

  gasPerPosition(overrides?: CallOverrides): Promise<BigNumber>;

  positionManager(overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  whiteBlackList(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    gasPerBatch(overrides?: CallOverrides): Promise<BigNumber>;

    gasPerPosition(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    whiteBlackList(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    gasPerBatch(overrides?: CallOverrides): Promise<BigNumber>;

    gasPerPosition(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    whiteBlackList(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    gasPerBatch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasPerPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whiteBlackList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
