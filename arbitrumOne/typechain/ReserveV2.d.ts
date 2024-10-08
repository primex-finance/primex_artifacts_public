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

interface ReserveV2Interface extends ethers.utils.Interface {
  functions: {
    "initialize(address,address)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "payBonus(string,address,uint256)": FunctionFragment;
    "paybackPermanentLoss(address)": FunctionFragment;
    "setTransferRestrictions(address,(uint256,uint256))": FunctionFragment;
    "setValue(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "testUpgrade()": FunctionFragment;
    "transferRestrictions(address)": FunctionFragment;
    "transferToTreasury(address,uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
    "value()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payBonus",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "paybackPermanentLoss",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferRestrictions",
    values: [
      string,
      {
        minAmountToBeLeft: BigNumberish;
        minPercentOfTotalSupplyToBeLeft: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferRestrictions",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToTreasury",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payBonus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paybackPermanentLoss",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferToTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;

  events: {
    "BurnAmountCalculated(uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "TransferFromReserve(address,address,uint256)": EventFragment;
    "TransferRestrictionsChanged(address,tuple)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BurnAmountCalculated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferFromReserve"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferRestrictionsChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type BurnAmountCalculatedEvent = TypedEvent<
  [BigNumber] & { burnAmount: BigNumber }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type TransferFromReserveEvent = TypedEvent<
  [string, string, BigNumber] & {
    pToken: string;
    to: string;
    amount: BigNumber;
  }
>;

export type TransferRestrictionsChangedEvent = TypedEvent<
  [
    string,
    [BigNumber, BigNumber] & {
      minAmountToBeLeft: BigNumber;
      minPercentOfTotalSupplyToBeLeft: BigNumber;
    }
  ] & {
    pToken: string;
    newTransferRestrictions: [BigNumber, BigNumber] & {
      minAmountToBeLeft: BigNumber;
      minPercentOfTotalSupplyToBeLeft: BigNumber;
    };
  }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class ReserveV2 extends BaseContract {
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

  interface: ReserveV2Interface;

  functions: {
    initialize(
      _dns: string,
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    payBonus(
      _bucketName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paybackPermanentLoss(
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTransferRestrictions(
      pToken: string,
      newTransferRestrictions: {
        minAmountToBeLeft: BigNumberish;
        minPercentOfTotalSupplyToBeLeft: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    testUpgrade(overrides?: CallOverrides): Promise<[string]>;

    transferRestrictions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        minAmountToBeLeft: BigNumber;
        minPercentOfTotalSupplyToBeLeft: BigNumber;
      }
    >;

    transferToTreasury(
      bucket: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  initialize(
    _dns: string,
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  payBonus(
    _bucketName: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paybackPermanentLoss(
    _bucket: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTransferRestrictions(
    pToken: string,
    newTransferRestrictions: {
      minAmountToBeLeft: BigNumberish;
      minPercentOfTotalSupplyToBeLeft: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValue(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  testUpgrade(overrides?: CallOverrides): Promise<string>;

  transferRestrictions(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      minAmountToBeLeft: BigNumber;
      minPercentOfTotalSupplyToBeLeft: BigNumber;
    }
  >;

  transferToTreasury(
    bucket: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    initialize(
      _dns: string,
      _registry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    payBonus(
      _bucketName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    paybackPermanentLoss(
      _bucket: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransferRestrictions(
      pToken: string,
      newTransferRestrictions: {
        minAmountToBeLeft: BigNumberish;
        minPercentOfTotalSupplyToBeLeft: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    setValue(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testUpgrade(overrides?: CallOverrides): Promise<string>;

    transferRestrictions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        minAmountToBeLeft: BigNumber;
        minPercentOfTotalSupplyToBeLeft: BigNumber;
      }
    >;

    transferToTreasury(
      bucket: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    value(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "BurnAmountCalculated(uint256)"(
      burnAmount?: null
    ): TypedEventFilter<[BigNumber], { burnAmount: BigNumber }>;

    BurnAmountCalculated(
      burnAmount?: null
    ): TypedEventFilter<[BigNumber], { burnAmount: BigNumber }>;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

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

    "TransferRestrictionsChanged(address,tuple)"(
      pToken?: string | null,
      newTransferRestrictions?: null
    ): TypedEventFilter<
      [
        string,
        [BigNumber, BigNumber] & {
          minAmountToBeLeft: BigNumber;
          minPercentOfTotalSupplyToBeLeft: BigNumber;
        }
      ],
      {
        pToken: string;
        newTransferRestrictions: [BigNumber, BigNumber] & {
          minAmountToBeLeft: BigNumber;
          minPercentOfTotalSupplyToBeLeft: BigNumber;
        };
      }
    >;

    TransferRestrictionsChanged(
      pToken?: string | null,
      newTransferRestrictions?: null
    ): TypedEventFilter<
      [
        string,
        [BigNumber, BigNumber] & {
          minAmountToBeLeft: BigNumber;
          minPercentOfTotalSupplyToBeLeft: BigNumber;
        }
      ],
      {
        pToken: string;
        newTransferRestrictions: [BigNumber, BigNumber] & {
          minAmountToBeLeft: BigNumber;
          minPercentOfTotalSupplyToBeLeft: BigNumber;
        };
      }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    initialize(
      _dns: string,
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    payBonus(
      _bucketName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paybackPermanentLoss(
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTransferRestrictions(
      pToken: string,
      newTransferRestrictions: {
        minAmountToBeLeft: BigNumberish;
        minPercentOfTotalSupplyToBeLeft: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testUpgrade(overrides?: CallOverrides): Promise<BigNumber>;

    transferRestrictions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferToTreasury(
      bucket: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _dns: string,
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payBonus(
      _bucketName: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paybackPermanentLoss(
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTransferRestrictions(
      pToken: string,
      newTransferRestrictions: {
        minAmountToBeLeft: BigNumberish;
        minPercentOfTotalSupplyToBeLeft: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testUpgrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferRestrictions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferToTreasury(
      bucket: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
