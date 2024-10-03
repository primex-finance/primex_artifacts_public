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

interface IBucketsFactoryInterface extends ethers.utils.Interface {
  functions: {
    "allBuckets()": FunctionFragment;
    "buckets(uint256)": FunctionFragment;
    "createBucket((string,address,address,address,address,address,address[],address,uint256,uint256,uint256,address,uint256,uint256,uint256,address,uint256,bool,uint128,uint128,bytes,uint256))": FunctionFragment;
    "registry()": FunctionFragment;
    "setDebtTokensFactory(address)": FunctionFragment;
    "setPTokensFactory(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allBuckets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buckets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createBucket",
    values: [
      {
        nameBucket: string;
        positionManager: string;
        priceOracle: string;
        dns: string;
        reserve: string;
        whiteBlackList: string;
        assets: string[];
        underlyingAsset: string;
        feeBuffer: BigNumberish;
        withdrawalFeeRate: BigNumberish;
        reserveRate: BigNumberish;
        liquidityMiningRewardDistributor: string;
        liquidityMiningAmount: BigNumberish;
        liquidityMiningDeadline: BigNumberish;
        stabilizationDuration: BigNumberish;
        interestRateStrategy: string;
        maxAmountPerUser: BigNumberish;
        isReinvestToAaveEnabled: boolean;
        estimatedBar: BigNumberish;
        estimatedLar: BigNumberish;
        barCalcParams: BytesLike;
        maxTotalDeposit: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDebtTokensFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPTokensFactory",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "allBuckets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buckets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDebtTokensFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPTokensFactory",
    data: BytesLike
  ): Result;

  events: {
    "BucketCreated(address)": EventFragment;
    "DebtTokensFactoryChanged(address)": EventFragment;
    "PTokensFactoryChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BucketCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DebtTokensFactoryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PTokensFactoryChanged"): EventFragment;
}

export type BucketCreatedEvent = TypedEvent<
  [string] & { bucketAddress: string }
>;

export type DebtTokensFactoryChangedEvent = TypedEvent<
  [string] & { debtTokensFactory: string }
>;

export type PTokensFactoryChangedEvent = TypedEvent<
  [string] & { pTokensFactory: string }
>;

export class IBucketsFactory extends BaseContract {
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

  interface: IBucketsFactoryInterface;

  functions: {
    allBuckets(overrides?: CallOverrides): Promise<[string[]]>;

    buckets(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    createBucket(
      _params: {
        nameBucket: string;
        positionManager: string;
        priceOracle: string;
        dns: string;
        reserve: string;
        whiteBlackList: string;
        assets: string[];
        underlyingAsset: string;
        feeBuffer: BigNumberish;
        withdrawalFeeRate: BigNumberish;
        reserveRate: BigNumberish;
        liquidityMiningRewardDistributor: string;
        liquidityMiningAmount: BigNumberish;
        liquidityMiningDeadline: BigNumberish;
        stabilizationDuration: BigNumberish;
        interestRateStrategy: string;
        maxAmountPerUser: BigNumberish;
        isReinvestToAaveEnabled: boolean;
        estimatedBar: BigNumberish;
        estimatedLar: BigNumberish;
        barCalcParams: BytesLike;
        maxTotalDeposit: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDebtTokensFactory(
      _debtTokensFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPTokensFactory(
      _pTokensFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allBuckets(overrides?: CallOverrides): Promise<string[]>;

  buckets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  createBucket(
    _params: {
      nameBucket: string;
      positionManager: string;
      priceOracle: string;
      dns: string;
      reserve: string;
      whiteBlackList: string;
      assets: string[];
      underlyingAsset: string;
      feeBuffer: BigNumberish;
      withdrawalFeeRate: BigNumberish;
      reserveRate: BigNumberish;
      liquidityMiningRewardDistributor: string;
      liquidityMiningAmount: BigNumberish;
      liquidityMiningDeadline: BigNumberish;
      stabilizationDuration: BigNumberish;
      interestRateStrategy: string;
      maxAmountPerUser: BigNumberish;
      isReinvestToAaveEnabled: boolean;
      estimatedBar: BigNumberish;
      estimatedLar: BigNumberish;
      barCalcParams: BytesLike;
      maxTotalDeposit: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registry(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDebtTokensFactory(
    _debtTokensFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPTokensFactory(
    _pTokensFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allBuckets(overrides?: CallOverrides): Promise<string[]>;

    buckets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    createBucket(
      _params: {
        nameBucket: string;
        positionManager: string;
        priceOracle: string;
        dns: string;
        reserve: string;
        whiteBlackList: string;
        assets: string[];
        underlyingAsset: string;
        feeBuffer: BigNumberish;
        withdrawalFeeRate: BigNumberish;
        reserveRate: BigNumberish;
        liquidityMiningRewardDistributor: string;
        liquidityMiningAmount: BigNumberish;
        liquidityMiningDeadline: BigNumberish;
        stabilizationDuration: BigNumberish;
        interestRateStrategy: string;
        maxAmountPerUser: BigNumberish;
        isReinvestToAaveEnabled: boolean;
        estimatedBar: BigNumberish;
        estimatedLar: BigNumberish;
        barCalcParams: BytesLike;
        maxTotalDeposit: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    registry(overrides?: CallOverrides): Promise<string>;

    setDebtTokensFactory(
      _debtTokensFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPTokensFactory(
      _pTokensFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BucketCreated(address)"(
      bucketAddress?: null
    ): TypedEventFilter<[string], { bucketAddress: string }>;

    BucketCreated(
      bucketAddress?: null
    ): TypedEventFilter<[string], { bucketAddress: string }>;

    "DebtTokensFactoryChanged(address)"(
      debtTokensFactory?: null
    ): TypedEventFilter<[string], { debtTokensFactory: string }>;

    DebtTokensFactoryChanged(
      debtTokensFactory?: null
    ): TypedEventFilter<[string], { debtTokensFactory: string }>;

    "PTokensFactoryChanged(address)"(
      pTokensFactory?: null
    ): TypedEventFilter<[string], { pTokensFactory: string }>;

    PTokensFactoryChanged(
      pTokensFactory?: null
    ): TypedEventFilter<[string], { pTokensFactory: string }>;
  };

  estimateGas: {
    allBuckets(overrides?: CallOverrides): Promise<BigNumber>;

    buckets(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    createBucket(
      _params: {
        nameBucket: string;
        positionManager: string;
        priceOracle: string;
        dns: string;
        reserve: string;
        whiteBlackList: string;
        assets: string[];
        underlyingAsset: string;
        feeBuffer: BigNumberish;
        withdrawalFeeRate: BigNumberish;
        reserveRate: BigNumberish;
        liquidityMiningRewardDistributor: string;
        liquidityMiningAmount: BigNumberish;
        liquidityMiningDeadline: BigNumberish;
        stabilizationDuration: BigNumberish;
        interestRateStrategy: string;
        maxAmountPerUser: BigNumberish;
        isReinvestToAaveEnabled: boolean;
        estimatedBar: BigNumberish;
        estimatedLar: BigNumberish;
        barCalcParams: BytesLike;
        maxTotalDeposit: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDebtTokensFactory(
      _debtTokensFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPTokensFactory(
      _pTokensFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allBuckets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buckets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createBucket(
      _params: {
        nameBucket: string;
        positionManager: string;
        priceOracle: string;
        dns: string;
        reserve: string;
        whiteBlackList: string;
        assets: string[];
        underlyingAsset: string;
        feeBuffer: BigNumberish;
        withdrawalFeeRate: BigNumberish;
        reserveRate: BigNumberish;
        liquidityMiningRewardDistributor: string;
        liquidityMiningAmount: BigNumberish;
        liquidityMiningDeadline: BigNumberish;
        stabilizationDuration: BigNumberish;
        interestRateStrategy: string;
        maxAmountPerUser: BigNumberish;
        isReinvestToAaveEnabled: boolean;
        estimatedBar: BigNumberish;
        estimatedLar: BigNumberish;
        barCalcParams: BytesLike;
        maxTotalDeposit: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDebtTokensFactory(
      _debtTokensFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPTokensFactory(
      _pTokensFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
