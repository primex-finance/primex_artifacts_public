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

interface IFlashLoanManagerInterface extends ethers.utils.Interface {
  functions: {
    "flashLoan(address,address[],uint256[],bytes)": FunctionFragment;
    "initialize(address,address,address,uint256,uint256)": FunctionFragment;
    "pause()": FunctionFragment;
    "setFlashLoanRates(uint256,uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [string, string[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFlashLoanRates",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFlashLoanRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "ChangedFlashLoanRates(uint256,uint256)": EventFragment;
    "FlashLoan(address,address,address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedFlashLoanRates"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
}

export type ChangedFlashLoanRatesEvent = TypedEvent<
  [BigNumber, BigNumber] & {
    flashLoanFeeRate: BigNumber;
    flashLoanProtocolRate: BigNumber;
  }
>;

export type FlashLoanEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    target: string;
    initiator: string;
    asset: string;
    amount: BigNumber;
    flashLoanFee: BigNumber;
    flashLoanProtocolFee: BigNumber;
  }
>;

export class IFlashLoanManager extends BaseContract {
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

  interface: IFlashLoanManagerInterface;

  functions: {
    flashLoan(
      _receiver: string,
      _buckets: string[],
      _amounts: BigNumberish[],
      _params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFlashLoanRates(
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  flashLoan(
    _receiver: string,
    _buckets: string[],
    _amounts: BigNumberish[],
    _params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _registry: string,
    _primexDNS: string,
    _whiteBlackList: string,
    _flashLoanFeeRate: BigNumberish,
    _flashLoanProtocolRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFlashLoanRates(
    _flashLoanFeeRate: BigNumberish,
    _flashLoanProtocolRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    flashLoan(
      _receiver: string,
      _buckets: string[],
      _amounts: BigNumberish[],
      _params: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    setFlashLoanRates(
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChangedFlashLoanRates(uint256,uint256)"(
      flashLoanFeeRate?: null,
      flashLoanProtocolRate?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { flashLoanFeeRate: BigNumber; flashLoanProtocolRate: BigNumber }
    >;

    ChangedFlashLoanRates(
      flashLoanFeeRate?: null,
      flashLoanProtocolRate?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { flashLoanFeeRate: BigNumber; flashLoanProtocolRate: BigNumber }
    >;

    "FlashLoan(address,address,address,uint256,uint256,uint256)"(
      target?: string | null,
      initiator?: string | null,
      asset?: string | null,
      amount?: null,
      flashLoanFee?: null,
      flashLoanProtocolFee?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        target: string;
        initiator: string;
        asset: string;
        amount: BigNumber;
        flashLoanFee: BigNumber;
        flashLoanProtocolFee: BigNumber;
      }
    >;

    FlashLoan(
      target?: string | null,
      initiator?: string | null,
      asset?: string | null,
      amount?: null,
      flashLoanFee?: null,
      flashLoanProtocolFee?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        target: string;
        initiator: string;
        asset: string;
        amount: BigNumber;
        flashLoanFee: BigNumber;
        flashLoanProtocolFee: BigNumber;
      }
    >;
  };

  estimateGas: {
    flashLoan(
      _receiver: string,
      _buckets: string[],
      _amounts: BigNumberish[],
      _params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFlashLoanRates(
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    flashLoan(
      _receiver: string,
      _buckets: string[],
      _amounts: BigNumberish[],
      _params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFlashLoanRates(
      _flashLoanFeeRate: BigNumberish,
      _flashLoanProtocolRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}