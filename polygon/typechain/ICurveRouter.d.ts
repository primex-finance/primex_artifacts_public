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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ICurveRouterInterface extends ethers.utils.Interface {
  functions: {
    "exchange(address,address,address,uint256,uint256,address)": FunctionFragment;
    "exchange_with_best_rate(address,address,uint256,uint256,address)": FunctionFragment;
    "get_best_rate(address,address,uint256)": FunctionFragment;
    "get_exchange_amount(address,address,address,uint256)": FunctionFragment;
    "get_input_amount(address,address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exchange",
    values: [string, string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange_with_best_rate",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "get_best_rate",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_exchange_amount",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_input_amount",
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchange_with_best_rate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_best_rate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_exchange_amount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_input_amount",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICurveRouter extends BaseContract {
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

  interface: ICurveRouterInterface;

  functions: {
    exchange(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    get_exchange_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    get_input_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  exchange(
    _pool: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _expected: BigNumberish,
    _receiver: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchange_with_best_rate(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _expected: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get_best_rate(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  get_exchange_amount(
    _pool: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  get_input_amount(
    _pool: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    exchange(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    get_exchange_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_input_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    exchange(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_exchange_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_input_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exchange(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_exchange_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_input_amount(
      _pool: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
