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

interface ICurveRegistryInterface extends ethers.utils.Interface {
  functions: {
    "get_coin_indices(address,address,address)": FunctionFragment;
    "get_n_coins(address)": FunctionFragment;
    "get_rates(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "get_coin_indices",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "get_n_coins", values: [string]): string;
  encodeFunctionData(functionFragment: "get_rates", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "get_coin_indices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_n_coins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get_rates", data: BytesLike): Result;

  events: {};
}

export class ICurveRegistry extends BaseContract {
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

  interface: ICurveRegistryInterface;

  functions: {
    get_coin_indices(
      _pool: string,
      _from: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, boolean]>;

    get_n_coins(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber]]>;

    get_rates(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ]
      ]
    >;
  };

  get_coin_indices(
    _pool: string,
    _from: string,
    _to: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, boolean]>;

  get_n_coins(
    _pool: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  get_rates(
    _pool: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  callStatic: {
    get_coin_indices(
      _pool: string,
      _from: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, boolean]>;

    get_n_coins(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    get_rates(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;
  };

  filters: {};

  estimateGas: {
    get_coin_indices(
      _pool: string,
      _from: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_n_coins(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    get_rates(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    get_coin_indices(
      _pool: string,
      _from: string,
      _to: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_n_coins(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_rates(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
