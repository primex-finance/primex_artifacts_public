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

interface LiquidityMiningRewardDistributorV2Interface
  extends ethers.utils.Interface {
  functions: {
    "addPoints(string,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "claimReward(string)": FunctionFragment;
    "extraRewards(address,string)": FunctionFragment;
    "getBucketInfo(string)": FunctionFragment;
    "getLenderAmountInMining(string,address)": FunctionFragment;
    "getLenderInfo(string,address,uint256)": FunctionFragment;
    "initialize(address,address,address,address,address,uint256,uint256,address)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pmx()": FunctionFragment;
    "primexDNS()": FunctionFragment;
    "registry()": FunctionFragment;
    "reinvest(string,string,address,bool,uint256)": FunctionFragment;
    "reinvestmentDuration()": FunctionFragment;
    "reinvestmentRate()": FunctionFragment;
    "removePoints(string,address,uint256)": FunctionFragment;
    "setValue(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "testUpgrade()": FunctionFragment;
    "traderBalanceVault()": FunctionFragment;
    "treasury()": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateBucketReward(string,uint256)": FunctionFragment;
    "value()": FunctionFragment;
    "withdrawPmxByAdmin(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPoints",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "claimReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "extraRewards",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBucketInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLenderAmountInMining",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLenderInfo",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reinvest",
    values: [string, string, string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reinvestmentDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reinvestmentRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removePoints",
    values: [string, string, BigNumberish]
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
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBucketReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawPmxByAdmin",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addPoints", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBucketInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLenderAmountInMining",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLenderInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reinvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reinvestmentDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reinvestmentRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePoints",
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
    functionFragment: "traderBalanceVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBucketReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPmxByAdmin",
    data: BytesLike
  ): Result;

  events: {
    "ClaimedReward(address,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WithdrawPmxByAdmin(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimedReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawPmxByAdmin"): EventFragment;
}

export type ClaimedRewardEvent = TypedEvent<
  [string, string, BigNumber] & {
    receiver: string;
    bucket: string;
    amount: BigNumber;
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type WithdrawPmxByAdminEvent = TypedEvent<
  [BigNumber] & { amount: BigNumber }
>;

export class LiquidityMiningRewardDistributorV2 extends BaseContract {
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

  interface: LiquidityMiningRewardDistributorV2Interface;

  functions: {
    addPoints(
      _bucketName: string,
      _user: string,
      _miningAmount: BigNumberish,
      _maxStabilizationPeriodEnd: BigNumberish,
      _maxPeriodTime: BigNumberish,
      _currentTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimReward(
      _bucketName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    extraRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBucketInfo(
      _bucketName: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalPmxReward: BigNumber;
        withdrawnRewards: BigNumber;
        totalPoints: BigNumber;
      }
    >;

    getLenderAmountInMining(
      _bucketName: string,
      _lender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLenderInfo(
      _bucketName: string,
      _lender: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        [BigNumber, BigNumber, BigNumber] & {
          minReward: BigNumber;
          maxReward: BigNumber;
          extraReward: BigNumber;
        }
      ] & {
        amountInMining: BigNumber;
        currentPercent: BigNumber;
        rewardsInPMX: [BigNumber, BigNumber, BigNumber] & {
          minReward: BigNumber;
          maxReward: BigNumber;
          extraReward: BigNumber;
        };
      }
    >;

    initialize(
      _primexDNS: string,
      _pmx: string,
      _traderBalanceVault: string,
      _registry: string,
      _treasury: string,
      _reinvestmentRate: BigNumberish,
      _reinvestmentDuration: BigNumberish,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pmx(overrides?: CallOverrides): Promise<[string]>;

    primexDNS(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    reinvest(
      _bucketFrom: string,
      _bucketTo: string,
      _user: string,
      _isBucketToLaunched: boolean,
      _bucketFromLiquidityMiningDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reinvestmentDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    reinvestmentRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    removePoints(
      _bucketName: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    testUpgrade(overrides?: CallOverrides): Promise<[string]>;

    traderBalanceVault(overrides?: CallOverrides): Promise<[string]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateBucketReward(
      _bucketName: string,
      _pmxRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawPmxByAdmin(
      _bucketFrom: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addPoints(
    _bucketName: string,
    _user: string,
    _miningAmount: BigNumberish,
    _maxStabilizationPeriodEnd: BigNumberish,
    _maxPeriodTime: BigNumberish,
    _currentTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimReward(
    _bucketName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  extraRewards(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBucketInfo(
    _bucketName: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalPmxReward: BigNumber;
      withdrawnRewards: BigNumber;
      totalPoints: BigNumber;
    }
  >;

  getLenderAmountInMining(
    _bucketName: string,
    _lender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLenderInfo(
    _bucketName: string,
    _lender: string,
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      [BigNumber, BigNumber, BigNumber] & {
        minReward: BigNumber;
        maxReward: BigNumber;
        extraReward: BigNumber;
      }
    ] & {
      amountInMining: BigNumber;
      currentPercent: BigNumber;
      rewardsInPMX: [BigNumber, BigNumber, BigNumber] & {
        minReward: BigNumber;
        maxReward: BigNumber;
        extraReward: BigNumber;
      };
    }
  >;

  initialize(
    _primexDNS: string,
    _pmx: string,
    _traderBalanceVault: string,
    _registry: string,
    _treasury: string,
    _reinvestmentRate: BigNumberish,
    _reinvestmentDuration: BigNumberish,
    _whiteBlackList: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pmx(overrides?: CallOverrides): Promise<string>;

  primexDNS(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  reinvest(
    _bucketFrom: string,
    _bucketTo: string,
    _user: string,
    _isBucketToLaunched: boolean,
    _bucketFromLiquidityMiningDeadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reinvestmentDuration(overrides?: CallOverrides): Promise<BigNumber>;

  reinvestmentRate(overrides?: CallOverrides): Promise<BigNumber>;

  removePoints(
    _bucketName: string,
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValue(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  testUpgrade(overrides?: CallOverrides): Promise<string>;

  traderBalanceVault(overrides?: CallOverrides): Promise<string>;

  treasury(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateBucketReward(
    _bucketName: string,
    _pmxRewardAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawPmxByAdmin(
    _bucketFrom: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPoints(
      _bucketName: string,
      _user: string,
      _miningAmount: BigNumberish,
      _maxStabilizationPeriodEnd: BigNumberish,
      _maxPeriodTime: BigNumberish,
      _currentTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimReward(_bucketName: string, overrides?: CallOverrides): Promise<void>;

    extraRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBucketInfo(
      _bucketName: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalPmxReward: BigNumber;
        withdrawnRewards: BigNumber;
        totalPoints: BigNumber;
      }
    >;

    getLenderAmountInMining(
      _bucketName: string,
      _lender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLenderInfo(
      _bucketName: string,
      _lender: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        [BigNumber, BigNumber, BigNumber] & {
          minReward: BigNumber;
          maxReward: BigNumber;
          extraReward: BigNumber;
        }
      ] & {
        amountInMining: BigNumber;
        currentPercent: BigNumber;
        rewardsInPMX: [BigNumber, BigNumber, BigNumber] & {
          minReward: BigNumber;
          maxReward: BigNumber;
          extraReward: BigNumber;
        };
      }
    >;

    initialize(
      _primexDNS: string,
      _pmx: string,
      _traderBalanceVault: string,
      _registry: string,
      _treasury: string,
      _reinvestmentRate: BigNumberish,
      _reinvestmentDuration: BigNumberish,
      _whiteBlackList: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pmx(overrides?: CallOverrides): Promise<string>;

    primexDNS(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    reinvest(
      _bucketFrom: string,
      _bucketTo: string,
      _user: string,
      _isBucketToLaunched: boolean,
      _bucketFromLiquidityMiningDeadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    reinvestmentDuration(overrides?: CallOverrides): Promise<BigNumber>;

    reinvestmentRate(overrides?: CallOverrides): Promise<BigNumber>;

    removePoints(
      _bucketName: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setValue(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testUpgrade(overrides?: CallOverrides): Promise<string>;

    traderBalanceVault(overrides?: CallOverrides): Promise<string>;

    treasury(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateBucketReward(
      _bucketName: string,
      _pmxRewardAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawPmxByAdmin(
      _bucketFrom: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClaimedReward(address,address,uint256)"(
      receiver?: string | null,
      bucket?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { receiver: string; bucket: string; amount: BigNumber }
    >;

    ClaimedReward(
      receiver?: string | null,
      bucket?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { receiver: string; bucket: string; amount: BigNumber }
    >;

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

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "WithdrawPmxByAdmin(uint256)"(
      amount?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    WithdrawPmxByAdmin(
      amount?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;
  };

  estimateGas: {
    addPoints(
      _bucketName: string,
      _user: string,
      _miningAmount: BigNumberish,
      _maxStabilizationPeriodEnd: BigNumberish,
      _maxPeriodTime: BigNumberish,
      _currentTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimReward(
      _bucketName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    extraRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBucketInfo(
      _bucketName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLenderAmountInMining(
      _bucketName: string,
      _lender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLenderInfo(
      _bucketName: string,
      _lender: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _primexDNS: string,
      _pmx: string,
      _traderBalanceVault: string,
      _registry: string,
      _treasury: string,
      _reinvestmentRate: BigNumberish,
      _reinvestmentDuration: BigNumberish,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pmx(overrides?: CallOverrides): Promise<BigNumber>;

    primexDNS(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    reinvest(
      _bucketFrom: string,
      _bucketTo: string,
      _user: string,
      _isBucketToLaunched: boolean,
      _bucketFromLiquidityMiningDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reinvestmentDuration(overrides?: CallOverrides): Promise<BigNumber>;

    reinvestmentRate(overrides?: CallOverrides): Promise<BigNumber>;

    removePoints(
      _bucketName: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testUpgrade(overrides?: CallOverrides): Promise<BigNumber>;

    traderBalanceVault(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateBucketReward(
      _bucketName: string,
      _pmxRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawPmxByAdmin(
      _bucketFrom: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPoints(
      _bucketName: string,
      _user: string,
      _miningAmount: BigNumberish,
      _maxStabilizationPeriodEnd: BigNumberish,
      _maxPeriodTime: BigNumberish,
      _currentTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimReward(
      _bucketName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    extraRewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBucketInfo(
      _bucketName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLenderAmountInMining(
      _bucketName: string,
      _lender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLenderInfo(
      _bucketName: string,
      _lender: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _primexDNS: string,
      _pmx: string,
      _traderBalanceVault: string,
      _registry: string,
      _treasury: string,
      _reinvestmentRate: BigNumberish,
      _reinvestmentDuration: BigNumberish,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pmx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    primexDNS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reinvest(
      _bucketFrom: string,
      _bucketTo: string,
      _user: string,
      _isBucketToLaunched: boolean,
      _bucketFromLiquidityMiningDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reinvestmentDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reinvestmentRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removePoints(
      _bucketName: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testUpgrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    traderBalanceVault(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateBucketReward(
      _bucketName: string,
      _pmxRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawPmxByAdmin(
      _bucketFrom: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
