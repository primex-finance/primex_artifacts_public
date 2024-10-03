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

interface IWhitelistInterface extends ethers.utils.Interface {
  functions: {
    "addAddressToWhitelist(address)": FunctionFragment;
    "addAddressesToWhitelist(address[])": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "registry()": FunctionFragment;
    "removeAddressFromWhitelist(address)": FunctionFragment;
    "removeAddressesFromWhitelist(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAddressToWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addAddressesToWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAddressFromWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAddressesFromWhitelist",
    values: [string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAddressToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAddressesToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAddressFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAddressesFromWhitelist",
    data: BytesLike
  ): Result;

  events: {
    "WhitelistedAddressAdded(address)": EventFragment;
    "WhitelistedAddressRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WhitelistedAddressAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistedAddressRemoved"): EventFragment;
}

export type WhitelistedAddressAddedEvent = TypedEvent<
  [string] & { addr: string }
>;

export type WhitelistedAddressRemovedEvent = TypedEvent<
  [string] & { addr: string }
>;

export class IWhitelist extends BaseContract {
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

  interface: IWhitelistInterface;

  functions: {
    addAddressToWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addAddressesToWhitelist(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    removeAddressFromWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAddressesFromWhitelist(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAddressToWhitelist(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addAddressesToWhitelist(
    _addresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWhitelisted(_address: string, overrides?: CallOverrides): Promise<boolean>;

  registry(overrides?: CallOverrides): Promise<string>;

  removeAddressFromWhitelist(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAddressesFromWhitelist(
    _addresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAddressToWhitelist(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addAddressesToWhitelist(
      _addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(_registry: string, overrides?: CallOverrides): Promise<void>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registry(overrides?: CallOverrides): Promise<string>;

    removeAddressFromWhitelist(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAddressesFromWhitelist(
      _addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "WhitelistedAddressAdded(address)"(
      addr?: string | null
    ): TypedEventFilter<[string], { addr: string }>;

    WhitelistedAddressAdded(
      addr?: string | null
    ): TypedEventFilter<[string], { addr: string }>;

    "WhitelistedAddressRemoved(address)"(
      addr?: string | null
    ): TypedEventFilter<[string], { addr: string }>;

    WhitelistedAddressRemoved(
      addr?: string | null
    ): TypedEventFilter<[string], { addr: string }>;
  };

  estimateGas: {
    addAddressToWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addAddressesToWhitelist(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    removeAddressFromWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAddressesFromWhitelist(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddressToWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addAddressesToWhitelist(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAddressFromWhitelist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAddressesFromWhitelist(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}