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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ICurvePoolInterface extends ethers.utils.Interface {
  functions: {
    "A()": FunctionFragment;
    "add_liquidity(uint256[3],uint256)": FunctionFragment;
    "balances(uint256)": FunctionFragment;
    "coins(uint256)": FunctionFragment;
    "fee()": FunctionFragment;
    "get_dy(int128,int128,uint256)": FunctionFragment;
    "remove_liquidity(uint256,uint256[3])": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "A", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [[BigNumberish, BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "coins", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "get_dy",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity",
    values: [BigNumberish, [BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class ICurvePool extends BaseContract {
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

  interface: ICurvePoolInterface;

  functions: {
    A(overrides?: CallOverrides): Promise<[BigNumber]>;

    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balances(_i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    coins(_i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  A(overrides?: CallOverrides): Promise<BigNumber>;

  add_liquidity(
    amounts: [BigNumberish, BigNumberish, BigNumberish],
    min_mint_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balances(_i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  coins(_i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  get_dy(
    i: BigNumberish,
    j: BigNumberish,
    dx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  remove_liquidity(
    _amount: BigNumberish,
    min_amounts: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    A(overrides?: CallOverrides): Promise<BigNumber>;

    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balances(_i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    coins(_i: BigNumberish, overrides?: CallOverrides): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    A(overrides?: CallOverrides): Promise<BigNumber>;

    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balances(_i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    coins(_i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    A(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add_liquidity(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balances(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    coins(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_dy(
      i: BigNumberish,
      j: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove_liquidity(
      _amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}