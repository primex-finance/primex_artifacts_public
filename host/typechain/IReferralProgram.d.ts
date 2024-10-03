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

interface IReferralProgramInterface extends ethers.utils.Interface {
  functions: {
    "getReferralsOf(address)": FunctionFragment;
    "getReferralsOfLength(address)": FunctionFragment;
    "getReferrers()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "referralsOf(address,uint256)": FunctionFragment;
    "referrerOf(address)": FunctionFragment;
    "register(bytes)": FunctionFragment;
    "registry()": FunctionFragment;
    "setReferrals(tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getReferralsOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferralsOfLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferrers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "referralsOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "referrerOf", values: [string]): string;
  encodeFunctionData(functionFragment: "register", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setReferrals",
    values: [{ referrer: string; referrals: string[] }[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getReferralsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferralsOfLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferrers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referralsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "referrerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReferrals",
    data: BytesLike
  ): Result;

  events: {
    "RegisteredUser(address,address)": EventFragment;
    "SetReferralByAdmin(address,address)": EventFragment;
    "SetReferrerByAdmin(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RegisteredUser"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetReferralByAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetReferrerByAdmin"): EventFragment;
}

export type RegisteredUserEvent = TypedEvent<
  [string, string] & { user: string; parent: string }
>;

export type SetReferralByAdminEvent = TypedEvent<
  [string, string] & { referrer: string; referral: string }
>;

export type SetReferrerByAdminEvent = TypedEvent<
  [string] & { referrer: string }
>;

export class IReferralProgram extends BaseContract {
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

  interface: IReferralProgramInterface;

  functions: {
    getReferralsOf(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getReferralsOfLength(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReferrers(overrides?: CallOverrides): Promise<[string[]]>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    referralsOf(
      _referrer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { referral: string }>;

    referrerOf(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    register(
      _referrerSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    setReferrals(
      referralProgramUnits: { referrer: string; referrals: string[] }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getReferralsOf(
    _referrer: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getReferralsOfLength(
    _referrer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReferrers(overrides?: CallOverrides): Promise<string[]>;

  initialize(
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  referralsOf(
    _referrer: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  referrerOf(arg0: string, overrides?: CallOverrides): Promise<string>;

  register(
    _referrerSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registry(overrides?: CallOverrides): Promise<string>;

  setReferrals(
    referralProgramUnits: { referrer: string; referrals: string[] }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getReferralsOf(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getReferralsOfLength(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferrers(overrides?: CallOverrides): Promise<string[]>;

    initialize(_registry: string, overrides?: CallOverrides): Promise<void>;

    referralsOf(
      _referrer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    referrerOf(arg0: string, overrides?: CallOverrides): Promise<string>;

    register(
      _referrerSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registry(overrides?: CallOverrides): Promise<string>;

    setReferrals(
      referralProgramUnits: { referrer: string; referrals: string[] }[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RegisteredUser(address,address)"(
      user?: string | null,
      parent?: string | null
    ): TypedEventFilter<[string, string], { user: string; parent: string }>;

    RegisteredUser(
      user?: string | null,
      parent?: string | null
    ): TypedEventFilter<[string, string], { user: string; parent: string }>;

    "SetReferralByAdmin(address,address)"(
      referrer?: string | null,
      referral?: string | null
    ): TypedEventFilter<
      [string, string],
      { referrer: string; referral: string }
    >;

    SetReferralByAdmin(
      referrer?: string | null,
      referral?: string | null
    ): TypedEventFilter<
      [string, string],
      { referrer: string; referral: string }
    >;

    "SetReferrerByAdmin(address)"(
      referrer?: string | null
    ): TypedEventFilter<[string], { referrer: string }>;

    SetReferrerByAdmin(
      referrer?: string | null
    ): TypedEventFilter<[string], { referrer: string }>;
  };

  estimateGas: {
    getReferralsOf(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferralsOfLength(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferrers(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    referralsOf(
      _referrer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    referrerOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    register(
      _referrerSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    setReferrals(
      referralProgramUnits: { referrer: string; referrals: string[] }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getReferralsOf(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReferralsOfLength(
      _referrer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReferrers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    referralsOf(
      _referrer: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    referrerOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      _referrerSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setReferrals(
      referralProgramUnits: { referrer: string; referrals: string[] }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
