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

interface MockNearestSearchInterface extends ethers.utils.Interface {
  functions: {
    "activateBonus(uint256,uint256,address,address)": FunctionFragment;
    "bucketBonusCount(address)": FunctionFragment;
    "claim(uint256,uint256)": FunctionFragment;
    "deactivateBonus(address,address)": FunctionFragment;
    "getAccumulatedAmount(address,uint256)": FunctionFragment;
    "getAvailableAmount(address,uint256)": FunctionFragment;
    "getBonus(address,uint256)": FunctionFragment;
    "indexes(address,uint256)": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "nft()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "primexDNS()": FunctionFragment;
    "registry()": FunctionFragment;
    "searchNearestIndex(uint256,uint256[],uint256,address)": FunctionFragment;
    "setIndexes(uint256[],uint256[],address)": FunctionFragment;
    "setMaxBonusCount(address,uint256)": FunctionFragment;
    "setTierBonus(address,uint256[],tuple[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tierBonus(address,uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateBonus(uint256)": FunctionFragment;
    "updateBonuses(address[],uint256[],address,uint256)": FunctionFragment;
    "updatedTimestamps(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activateBonus",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "bucketBonusCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateBonus",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccumulatedAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAvailableAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBonus",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "indexes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "searchNearestIndex",
    values: [BigNumberish, BigNumberish[], BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIndexes",
    values: [BigNumberish[], BigNumberish[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxBonusCount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTierBonus",
    values: [
      string,
      BigNumberish[],
      {
        percent: BigNumberish;
        maxAmount: BigNumberish;
        duration: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tierBonus",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBonus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBonuses",
    values: [string[], BigNumberish[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatedTimestamps",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bucketBonusCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deactivateBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccumulatedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAvailableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBonus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "indexes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "searchNearestIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setIndexes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxBonusCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTierBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tierBonus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBonuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatedTimestamps",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class MockNearestSearch extends BaseContract {
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

  interface: MockNearestSearchInterface;

  functions: {
    activateBonus(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    bucketBonusCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { count: BigNumber; maxCount: BigNumber }
    >;

    claim(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    deactivateBonus(
      _user: string,
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccumulatedAmount(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAvailableAmount(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBonus(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          nftId: BigNumber;
          bucket: string;
          percent: BigNumber;
          maxAmount: BigNumber;
          accumulatedAmount: BigNumber;
          lastUpdatedIndex: BigNumber;
          deadline: BigNumber;
          claimedAmount: BigNumber;
        }
      ]
    >;

    indexes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _nft: string,
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    primexDNS(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    searchNearestIndex(
      _bonusDeadline: BigNumberish,
      _timetamps: BigNumberish[],
      _currentIndex: BigNumberish,
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIndexes(
      _timestamps: BigNumberish[],
      _indexes: BigNumberish[],
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxBonusCount(
      _bucket: string,
      _maxCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTierBonus(
      _bucket: string,
      _tiers: BigNumberish[],
      _bonuses: {
        percent: BigNumberish;
        maxAmount: BigNumberish;
        duration: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tierBonus(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        percent: BigNumber;
        maxAmount: BigNumber;
        duration: BigNumber;
      }
    >;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "updateBonus(address,uint256,address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    updateBonuses(
      _users: string[],
      _oldBalances: BigNumberish[],
      _bucket: string,
      _currentIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatedTimestamps(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  activateBonus(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: string,
    arg3: string,
    overrides?: CallOverrides
  ): Promise<void>;

  bucketBonusCount(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { count: BigNumber; maxCount: BigNumber }
  >;

  claim(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  deactivateBonus(
    _user: string,
    _bucket: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccumulatedAmount(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAvailableAmount(
    _user: string,
    _nftId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBonus(
    _user: string,
    _nftId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      nftId: BigNumber;
      bucket: string;
      percent: BigNumber;
      maxAmount: BigNumber;
      accumulatedAmount: BigNumber;
      lastUpdatedIndex: BigNumber;
      deadline: BigNumber;
      claimedAmount: BigNumber;
    }
  >;

  indexes(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _nft: string,
    _registry: string,
    _primexDNS: string,
    _whiteBlackList: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nft(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  primexDNS(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  searchNearestIndex(
    _bonusDeadline: BigNumberish,
    _timetamps: BigNumberish[],
    _currentIndex: BigNumberish,
    _bucket: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIndexes(
    _timestamps: BigNumberish[],
    _indexes: BigNumberish[],
    _bucket: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxBonusCount(
    _bucket: string,
    _maxCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTierBonus(
    _bucket: string,
    _tiers: BigNumberish[],
    _bonuses: {
      percent: BigNumberish;
      maxAmount: BigNumberish;
      duration: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tierBonus(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      percent: BigNumber;
      maxAmount: BigNumber;
      duration: BigNumber;
    }
  >;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateBonus(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "updateBonus(address,uint256,address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    arg2: string,
    arg3: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  updateBonuses(
    _users: string[],
    _oldBalances: BigNumberish[],
    _bucket: string,
    _currentIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatedTimestamps(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    activateBonus(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bucketBonusCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { count: BigNumber; maxCount: BigNumber }
    >;

    claim(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deactivateBonus(
      _user: string,
      _bucket: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getAccumulatedAmount(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAvailableAmount(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBonus(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        nftId: BigNumber;
        bucket: string;
        percent: BigNumber;
        maxAmount: BigNumber;
        accumulatedAmount: BigNumber;
        lastUpdatedIndex: BigNumber;
        deadline: BigNumber;
        claimedAmount: BigNumber;
      }
    >;

    indexes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _nft: string,
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nft(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    primexDNS(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    searchNearestIndex(
      _bonusDeadline: BigNumberish,
      _timetamps: BigNumberish[],
      _currentIndex: BigNumberish,
      _bucket: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setIndexes(
      _timestamps: BigNumberish[],
      _indexes: BigNumberish[],
      _bucket: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxBonusCount(
      _bucket: string,
      _maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTierBonus(
      _bucket: string,
      _tiers: BigNumberish[],
      _bonuses: {
        percent: BigNumberish;
        maxAmount: BigNumberish;
        duration: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tierBonus(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        percent: BigNumber;
        maxAmount: BigNumber;
        duration: BigNumber;
      }
    >;

    unpause(overrides?: CallOverrides): Promise<void>;

    "updateBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateBonus(address,uint256,address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBonuses(
      _users: string[],
      _oldBalances: BigNumberish[],
      _bucket: string,
      _currentIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updatedTimestamps(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
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
  };

  estimateGas: {
    activateBonus(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bucketBonusCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deactivateBonus(
      _user: string,
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccumulatedAmount(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAvailableAmount(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBonus(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    indexes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _nft: string,
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    primexDNS(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    searchNearestIndex(
      _bonusDeadline: BigNumberish,
      _timetamps: BigNumberish[],
      _currentIndex: BigNumberish,
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIndexes(
      _timestamps: BigNumberish[],
      _indexes: BigNumberish[],
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxBonusCount(
      _bucket: string,
      _maxCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTierBonus(
      _bucket: string,
      _tiers: BigNumberish[],
      _bonuses: {
        percent: BigNumberish;
        maxAmount: BigNumberish;
        duration: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tierBonus(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "updateBonus(address,uint256,address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateBonuses(
      _users: string[],
      _oldBalances: BigNumberish[],
      _bucket: string,
      _currentIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatedTimestamps(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateBonus(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bucketBonusCount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deactivateBonus(
      _user: string,
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccumulatedAmount(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAvailableAmount(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBonus(
      _user: string,
      _nftId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    indexes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _nft: string,
      _registry: string,
      _primexDNS: string,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    primexDNS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    searchNearestIndex(
      _bonusDeadline: BigNumberish,
      _timetamps: BigNumberish[],
      _currentIndex: BigNumberish,
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIndexes(
      _timestamps: BigNumberish[],
      _indexes: BigNumberish[],
      _bucket: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxBonusCount(
      _bucket: string,
      _maxCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTierBonus(
      _bucket: string,
      _tiers: BigNumberish[],
      _bonuses: {
        percent: BigNumberish;
        maxAmount: BigNumberish;
        duration: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tierBonus(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateBonus(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "updateBonus(address,uint256,address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: string,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateBonuses(
      _users: string[],
      _oldBalances: BigNumberish[],
      _bucket: string,
      _currentIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatedTimestamps(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
