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

interface IAlgebraPoolStateInterface extends ethers.utils.Interface {
  functions: {
    "activeIncentive()": FunctionFragment;
    "globalState()": FunctionFragment;
    "liquidity()": FunctionFragment;
    "liquidityCooldown()": FunctionFragment;
    "positions(bytes32)": FunctionFragment;
    "tickTable(int16)": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "timepoints(uint256)": FunctionFragment;
    "totalFeeGrowth0Token()": FunctionFragment;
    "totalFeeGrowth1Token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activeIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "globalState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidityCooldown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tickTable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "timepoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalFeeGrowth0Token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalFeeGrowth1Token",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "activeIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityCooldown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickTable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timepoints", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalFeeGrowth0Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalFeeGrowth1Token",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAlgebraPoolState extends BaseContract {
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

  interface: IAlgebraPoolStateInterface;

  functions: {
    activeIncentive(
      overrides?: CallOverrides
    ): Promise<[string] & { virtualPool: string }>;

    globalState(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number, number, boolean] & {
        price: BigNumber;
        tick: number;
        fee: number;
        timepointIndex: number;
        communityFeeToken0: number;
        communityFeeToken1: number;
        unlocked: boolean;
      }
    >;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidityCooldown(
      overrides?: CallOverrides
    ): Promise<[number] & { cooldownInSeconds: number }>;

    positions(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityAmount: BigNumber;
        lastLiquidityAddTimestamp: number;
        innerFeeGrowth0Token: BigNumber;
        innerFeeGrowth1Token: BigNumber;
        fees0: BigNumber;
        fees1: BigNumber;
      }
    >;

    tickTable(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityTotal: BigNumber;
        liquidityDelta: BigNumber;
        outerFeeGrowth0Token: BigNumber;
        outerFeeGrowth1Token: BigNumber;
        outerTickCumulative: BigNumber;
        outerSecondsPerLiquidity: BigNumber;
        outerSecondsSpent: number;
        initialized: boolean;
      }
    >;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
        initialized: boolean;
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        averageTick: number;
        volumePerLiquidityCumulative: BigNumber;
      }
    >;

    totalFeeGrowth0Token(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalFeeGrowth1Token(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  activeIncentive(overrides?: CallOverrides): Promise<string>;

  globalState(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number, number, number, boolean] & {
      price: BigNumber;
      tick: number;
      fee: number;
      timepointIndex: number;
      communityFeeToken0: number;
      communityFeeToken1: number;
      unlocked: boolean;
    }
  >;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  liquidityCooldown(overrides?: CallOverrides): Promise<number>;

  positions(
    key: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
      liquidityAmount: BigNumber;
      lastLiquidityAddTimestamp: number;
      innerFeeGrowth0Token: BigNumber;
      innerFeeGrowth1Token: BigNumber;
      fees0: BigNumber;
      fees1: BigNumber;
    }
  >;

  tickTable(
    wordPosition: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ticks(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      liquidityTotal: BigNumber;
      liquidityDelta: BigNumber;
      outerFeeGrowth0Token: BigNumber;
      outerFeeGrowth1Token: BigNumber;
      outerTickCumulative: BigNumber;
      outerSecondsPerLiquidity: BigNumber;
      outerSecondsSpent: number;
      initialized: boolean;
    }
  >;

  timepoints(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
      initialized: boolean;
      blockTimestamp: number;
      tickCumulative: BigNumber;
      secondsPerLiquidityCumulative: BigNumber;
      volatilityCumulative: BigNumber;
      averageTick: number;
      volumePerLiquidityCumulative: BigNumber;
    }
  >;

  totalFeeGrowth0Token(overrides?: CallOverrides): Promise<BigNumber>;

  totalFeeGrowth1Token(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    activeIncentive(overrides?: CallOverrides): Promise<string>;

    globalState(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number, number, boolean] & {
        price: BigNumber;
        tick: number;
        fee: number;
        timepointIndex: number;
        communityFeeToken0: number;
        communityFeeToken1: number;
        unlocked: boolean;
      }
    >;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityCooldown(overrides?: CallOverrides): Promise<number>;

    positions(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        liquidityAmount: BigNumber;
        lastLiquidityAddTimestamp: number;
        innerFeeGrowth0Token: BigNumber;
        innerFeeGrowth1Token: BigNumber;
        fees0: BigNumber;
        fees1: BigNumber;
      }
    >;

    tickTable(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityTotal: BigNumber;
        liquidityDelta: BigNumber;
        outerFeeGrowth0Token: BigNumber;
        outerFeeGrowth1Token: BigNumber;
        outerTickCumulative: BigNumber;
        outerSecondsPerLiquidity: BigNumber;
        outerSecondsSpent: number;
        initialized: boolean;
      }
    >;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, BigNumber, BigNumber, BigNumber, number, BigNumber] & {
        initialized: boolean;
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulative: BigNumber;
        volatilityCumulative: BigNumber;
        averageTick: number;
        volumePerLiquidityCumulative: BigNumber;
      }
    >;

    totalFeeGrowth0Token(overrides?: CallOverrides): Promise<BigNumber>;

    totalFeeGrowth1Token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    activeIncentive(overrides?: CallOverrides): Promise<BigNumber>;

    globalState(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityCooldown(overrides?: CallOverrides): Promise<BigNumber>;

    positions(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    tickTable(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalFeeGrowth0Token(overrides?: CallOverrides): Promise<BigNumber>;

    totalFeeGrowth1Token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    activeIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    globalState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidityCooldown(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickTable(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timepoints(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalFeeGrowth0Token(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalFeeGrowth1Token(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
