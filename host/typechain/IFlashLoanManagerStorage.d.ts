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

interface IFlashLoanManagerStorageInterface extends ethers.utils.Interface {
  functions: {
    "flashLoanFeeRate()": FunctionFragment;
    "flashLoanProtocolRate()": FunctionFragment;
    "primexDNS()": FunctionFragment;
    "registry()": FunctionFragment;
    "whiteBlackList()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "flashLoanFeeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoanProtocolRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "flashLoanFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flashLoanProtocolRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;

  events: {};
}

export class IFlashLoanManagerStorage extends BaseContract {
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

  interface: IFlashLoanManagerStorageInterface;

  functions: {
    flashLoanFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    flashLoanProtocolRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    primexDNS(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    whiteBlackList(overrides?: CallOverrides): Promise<[string]>;
  };

  flashLoanFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  flashLoanProtocolRate(overrides?: CallOverrides): Promise<BigNumber>;

  primexDNS(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  whiteBlackList(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    flashLoanFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    flashLoanProtocolRate(overrides?: CallOverrides): Promise<BigNumber>;

    primexDNS(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    whiteBlackList(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    flashLoanFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    flashLoanProtocolRate(overrides?: CallOverrides): Promise<BigNumber>;

    primexDNS(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    whiteBlackList(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    flashLoanFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    flashLoanProtocolRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    primexDNS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whiteBlackList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
