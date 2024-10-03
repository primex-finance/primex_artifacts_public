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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BatchManagerV2Interface extends ethers.utils.Interface {
  functions: {
    "closeBatchPositions(uint256[],tuple[],address,address,address,uint256[],uint8,bytes,bytes,bytes,bytes,bytes,bytes[][],uint256[])": FunctionFragment;
    "gasPerBatch()": FunctionFragment;
    "gasPerPosition()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initializeAfterUpgrade(address,address,address,uint256,uint256)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "positionManager()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "registry()": FunctionFragment;
    "setGasPerBatch(uint256)": FunctionFragment;
    "setGasPerPosition(uint256)": FunctionFragment;
    "setValue(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "testUpgrade()": FunctionFragment;
    "unpause()": FunctionFragment;
    "value()": FunctionFragment;
    "whiteBlackList()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "closeBatchPositions",
    values: [
      BigNumberish[],
      {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[],
      string,
      string,
      string,
      BigNumberish[],
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike[][],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "gasPerBatch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gasPerPosition",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initializeAfterUpgrade",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setGasPerBatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGasPerPosition",
    values: [BigNumberish]
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
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "closeBatchPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasPerBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasPerPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeAfterUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGasPerBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGasPerPosition",
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
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;

  events: {
    "ChangeGasPerBatch(uint256)": EventFragment;
    "ChangeGasPerPosition(uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangeGasPerBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeGasPerPosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type ChangeGasPerBatchEvent = TypedEvent<
  [BigNumber] & { gasPerBatch: BigNumber }
>;

export type ChangeGasPerPositionEvent = TypedEvent<
  [BigNumber] & { gasPerPosition: BigNumber }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class BatchManagerV2 extends BaseContract {
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

  interface: BatchManagerV2Interface;

  functions: {
    closeBatchPositions(
      _ids: BigNumberish[],
      _megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[],
      _positionAsset: string,
      _soldAsset: string,
      _bucket: string,
      _conditionIndexes: BigNumberish[],
      _closeReason: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _nativePmxOracleData: BytesLike,
      _nativeSoldAssetOracleData: BytesLike,
      _positionNativeAssetOracleData: BytesLike,
      _pmxSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gasPerBatch(overrides?: CallOverrides): Promise<[BigNumber]>;

    gasPerPosition(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeAfterUpgrade(
      _positionManager: string,
      _priceOracle: string,
      _whiteBlackList: string,
      _gasPerPosition: BigNumberish,
      _gasPerBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    positionManager(overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    setGasPerBatch(
      _newGasPerBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGasPerPosition(
      _newGasPerPosition: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    testUpgrade(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;

    whiteBlackList(overrides?: CallOverrides): Promise<[string]>;
  };

  closeBatchPositions(
    _ids: BigNumberish[],
    _megaRoutes: {
      shares: BigNumberish;
      routes: {
        to: string;
        paths: { dexName: string; shares: BigNumberish; payload: BytesLike }[];
      }[];
    }[],
    _positionAsset: string,
    _soldAsset: string,
    _bucket: string,
    _conditionIndexes: BigNumberish[],
    _closeReason: BigNumberish,
    _positionSoldAssetOracleData: BytesLike,
    _nativePmxOracleData: BytesLike,
    _nativeSoldAssetOracleData: BytesLike,
    _positionNativeAssetOracleData: BytesLike,
    _pmxSoldAssetOracleData: BytesLike,
    _pullOracleData: BytesLike[][],
    _pullOracleTypes: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gasPerBatch(overrides?: CallOverrides): Promise<BigNumber>;

  gasPerPosition(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeAfterUpgrade(
    _positionManager: string,
    _priceOracle: string,
    _whiteBlackList: string,
    _gasPerPosition: BigNumberish,
    _gasPerBatch: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  positionManager(overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  setGasPerBatch(
    _newGasPerBatch: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGasPerPosition(
    _newGasPerPosition: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValue(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  testUpgrade(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  whiteBlackList(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    closeBatchPositions(
      _ids: BigNumberish[],
      _megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[],
      _positionAsset: string,
      _soldAsset: string,
      _bucket: string,
      _conditionIndexes: BigNumberish[],
      _closeReason: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _nativePmxOracleData: BytesLike,
      _nativeSoldAssetOracleData: BytesLike,
      _positionNativeAssetOracleData: BytesLike,
      _pmxSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    gasPerBatch(overrides?: CallOverrides): Promise<BigNumber>;

    gasPerPosition(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_registry: string, overrides?: CallOverrides): Promise<void>;

    initializeAfterUpgrade(
      _positionManager: string,
      _priceOracle: string,
      _whiteBlackList: string,
      _gasPerPosition: BigNumberish,
      _gasPerBatch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    positionManager(overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    setGasPerBatch(
      _newGasPerBatch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGasPerPosition(
      _newGasPerPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setValue(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testUpgrade(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    whiteBlackList(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ChangeGasPerBatch(uint256)"(
      gasPerBatch?: null
    ): TypedEventFilter<[BigNumber], { gasPerBatch: BigNumber }>;

    ChangeGasPerBatch(
      gasPerBatch?: null
    ): TypedEventFilter<[BigNumber], { gasPerBatch: BigNumber }>;

    "ChangeGasPerPosition(uint256)"(
      gasPerPosition?: null
    ): TypedEventFilter<[BigNumber], { gasPerPosition: BigNumber }>;

    ChangeGasPerPosition(
      gasPerPosition?: null
    ): TypedEventFilter<[BigNumber], { gasPerPosition: BigNumber }>;

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
    closeBatchPositions(
      _ids: BigNumberish[],
      _megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[],
      _positionAsset: string,
      _soldAsset: string,
      _bucket: string,
      _conditionIndexes: BigNumberish[],
      _closeReason: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _nativePmxOracleData: BytesLike,
      _nativeSoldAssetOracleData: BytesLike,
      _positionNativeAssetOracleData: BytesLike,
      _pmxSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gasPerBatch(overrides?: CallOverrides): Promise<BigNumber>;

    gasPerPosition(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeAfterUpgrade(
      _positionManager: string,
      _priceOracle: string,
      _whiteBlackList: string,
      _gasPerPosition: BigNumberish,
      _gasPerBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    setGasPerBatch(
      _newGasPerBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGasPerPosition(
      _newGasPerPosition: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testUpgrade(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    whiteBlackList(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    closeBatchPositions(
      _ids: BigNumberish[],
      _megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[],
      _positionAsset: string,
      _soldAsset: string,
      _bucket: string,
      _conditionIndexes: BigNumberish[],
      _closeReason: BigNumberish,
      _positionSoldAssetOracleData: BytesLike,
      _nativePmxOracleData: BytesLike,
      _nativeSoldAssetOracleData: BytesLike,
      _positionNativeAssetOracleData: BytesLike,
      _pmxSoldAssetOracleData: BytesLike,
      _pullOracleData: BytesLike[][],
      _pullOracleTypes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gasPerBatch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasPerPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeAfterUpgrade(
      _positionManager: string,
      _priceOracle: string,
      _whiteBlackList: string,
      _gasPerPosition: BigNumberish,
      _gasPerBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGasPerBatch(
      _newGasPerBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGasPerPosition(
      _newGasPerPosition: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testUpgrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whiteBlackList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
