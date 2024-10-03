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

interface IArbGasInfoInterface extends ethers.utils.Interface {
  functions: {
    "getL1BaseFeeEstimate()": FunctionFragment;
    "getPricesInWei()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getL1BaseFeeEstimate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPricesInWei",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getL1BaseFeeEstimate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPricesInWei",
    data: BytesLike
  ): Result;

  events: {};
}

export class IArbGasInfo extends BaseContract {
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

  interface: IArbGasInfoInterface;

  functions: {
    getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPricesInWei(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;
  };

  getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<BigNumber>;

  getPricesInWei(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
  >;

  callStatic: {
    getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<BigNumber>;

    getPricesInWei(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;
  };

  filters: {};

  estimateGas: {
    getL1BaseFeeEstimate(overrides?: CallOverrides): Promise<BigNumber>;

    getPricesInWei(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getL1BaseFeeEstimate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPricesInWei(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}