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

interface IReserveStorageInterface extends ethers.utils.Interface {
  functions: {
    "transferRestrictions(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "transferRestrictions",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "transferRestrictions",
    data: BytesLike
  ): Result;

  events: {
    "TransferFromReserve(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransferFromReserve"): EventFragment;
}

export type TransferFromReserveEvent = TypedEvent<
  [string, string, BigNumber] & {
    pToken: string;
    to: string;
    amount: BigNumber;
  }
>;

export class IReserveStorage extends BaseContract {
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

  interface: IReserveStorageInterface;

  functions: {
    transferRestrictions(
      pToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  transferRestrictions(
    pToken: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    transferRestrictions(
      pToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {
    "TransferFromReserve(address,address,uint256)"(
      pToken?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { pToken: string; to: string; amount: BigNumber }
    >;

    TransferFromReserve(
      pToken?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { pToken: string; to: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    transferRestrictions(
      pToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    transferRestrictions(
      pToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}