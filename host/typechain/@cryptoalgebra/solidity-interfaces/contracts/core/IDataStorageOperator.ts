/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace IDataStorageOperator {
  export type FeeConfigStruct = {
    alpha1: BigNumberish;
    alpha2: BigNumberish;
    beta1: BigNumberish;
    beta2: BigNumberish;
    gamma1: BigNumberish;
    gamma2: BigNumberish;
    volumeBeta: BigNumberish;
    volumeGamma: BigNumberish;
    baseFee: BigNumberish;
  };

  export type FeeConfigStructOutput = [
    alpha1: bigint,
    alpha2: bigint,
    beta1: bigint,
    beta2: bigint,
    gamma1: bigint,
    gamma2: bigint,
    volumeBeta: bigint,
    volumeGamma: bigint,
    baseFee: bigint
  ] & {
    alpha1: bigint;
    alpha2: bigint;
    beta1: bigint;
    beta2: bigint;
    gamma1: bigint;
    gamma2: bigint;
    volumeBeta: bigint;
    volumeGamma: bigint;
    baseFee: bigint;
  };
}

export interface IDataStorageOperatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateVolumePerLiquidity"
      | "changeFeeConfiguration"
      | "getAverages"
      | "getFee"
      | "getSingleTimepoint"
      | "getTimepoints"
      | "initialize"
      | "timepoints"
      | "window"
      | "write"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "FeeConfiguration"): EventFragment;

  encodeFunctionData(
    functionFragment: "calculateVolumePerLiquidity",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFeeConfiguration",
    values: [IDataStorageOperator.FeeConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getAverages",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSingleTimepoint",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimepoints",
    values: [
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timepoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "window", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "write",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateVolumePerLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeFeeConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAverages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSingleTimepoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimepoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timepoints", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "window", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "write", data: BytesLike): Result;
}

export namespace FeeConfigurationEvent {
  export type InputTuple = [feeConfig: IDataStorageOperator.FeeConfigStruct];
  export type OutputTuple = [
    feeConfig: IDataStorageOperator.FeeConfigStructOutput
  ];
  export interface OutputObject {
    feeConfig: IDataStorageOperator.FeeConfigStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IDataStorageOperator extends BaseContract {
  connect(runner?: ContractRunner | null): IDataStorageOperator;
  waitForDeployment(): Promise<this>;

  interface: IDataStorageOperatorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  calculateVolumePerLiquidity: TypedContractMethod<
    [liquidity: BigNumberish, amount0: BigNumberish, amount1: BigNumberish],
    [bigint],
    "view"
  >;

  changeFeeConfiguration: TypedContractMethod<
    [feeConfig: IDataStorageOperator.FeeConfigStruct],
    [void],
    "nonpayable"
  >;

  getAverages: TypedContractMethod<
    [
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [
      [bigint, bigint] & {
        TWVolatilityAverage: bigint;
        TWVolumePerLiqAverage: bigint;
      }
    ],
    "view"
  >;

  getFee: TypedContractMethod<
    [
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getSingleTimepoint: TypedContractMethod<
    [
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [
      [bigint, bigint, bigint, bigint] & {
        tickCumulative: bigint;
        secondsPerLiquidityCumulative: bigint;
        volatilityCumulative: bigint;
        volumePerAvgLiquidity: bigint;
      }
    ],
    "view"
  >;

  getTimepoints: TypedContractMethod<
    [
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [
      [bigint[], bigint[], bigint[], bigint[]] & {
        tickCumulatives: bigint[];
        secondsPerLiquidityCumulatives: bigint[];
        volatilityCumulatives: bigint[];
        volumePerAvgLiquiditys: bigint[];
      }
    ],
    "view"
  >;

  initialize: TypedContractMethod<
    [time: BigNumberish, tick: BigNumberish],
    [void],
    "nonpayable"
  >;

  timepoints: TypedContractMethod<
    [index: BigNumberish],
    [
      [boolean, bigint, bigint, bigint, bigint, bigint, bigint] & {
        initialized: boolean;
        blockTimestamp: bigint;
        tickCumulative: bigint;
        secondsPerLiquidityCumulative: bigint;
        volatilityCumulative: bigint;
        averageTick: bigint;
        volumePerLiquidityCumulative: bigint;
      }
    ],
    "view"
  >;

  window: TypedContractMethod<[], [bigint], "view">;

  write: TypedContractMethod<
    [
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateVolumePerLiquidity"
  ): TypedContractMethod<
    [liquidity: BigNumberish, amount0: BigNumberish, amount1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "changeFeeConfiguration"
  ): TypedContractMethod<
    [feeConfig: IDataStorageOperator.FeeConfigStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAverages"
  ): TypedContractMethod<
    [
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [
      [bigint, bigint] & {
        TWVolatilityAverage: bigint;
        TWVolumePerLiqAverage: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getFee"
  ): TypedContractMethod<
    [
      time: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSingleTimepoint"
  ): TypedContractMethod<
    [
      time: BigNumberish,
      secondsAgo: BigNumberish,
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [
      [bigint, bigint, bigint, bigint] & {
        tickCumulative: bigint;
        secondsPerLiquidityCumulative: bigint;
        volatilityCumulative: bigint;
        volumePerAvgLiquidity: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTimepoints"
  ): TypedContractMethod<
    [
      time: BigNumberish,
      secondsAgos: BigNumberish[],
      tick: BigNumberish,
      index: BigNumberish,
      liquidity: BigNumberish
    ],
    [
      [bigint[], bigint[], bigint[], bigint[]] & {
        tickCumulatives: bigint[];
        secondsPerLiquidityCumulatives: bigint[];
        volatilityCumulatives: bigint[];
        volumePerAvgLiquiditys: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [time: BigNumberish, tick: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "timepoints"
  ): TypedContractMethod<
    [index: BigNumberish],
    [
      [boolean, bigint, bigint, bigint, bigint, bigint, bigint] & {
        initialized: boolean;
        blockTimestamp: bigint;
        tickCumulative: bigint;
        secondsPerLiquidityCumulative: bigint;
        volatilityCumulative: bigint;
        averageTick: bigint;
        volumePerLiquidityCumulative: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "window"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "write"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      blockTimestamp: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      volumePerLiquidity: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "FeeConfiguration"
  ): TypedContractEvent<
    FeeConfigurationEvent.InputTuple,
    FeeConfigurationEvent.OutputTuple,
    FeeConfigurationEvent.OutputObject
  >;

  filters: {
    "FeeConfiguration(tuple)": TypedContractEvent<
      FeeConfigurationEvent.InputTuple,
      FeeConfigurationEvent.OutputTuple,
      FeeConfigurationEvent.OutputObject
    >;
    FeeConfiguration: TypedContractEvent<
      FeeConfigurationEvent.InputTuple,
      FeeConfigurationEvent.OutputTuple,
      FeeConfigurationEvent.OutputObject
    >;
  };
}
