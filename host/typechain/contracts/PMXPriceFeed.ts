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
  AddressLike,
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
} from "../common";

export interface PMXPriceFeedInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "decimals"
      | "description"
      | "getAnswer"
      | "getRoundData"
      | "getTimestamp"
      | "latestAnswer"
      | "latestRound"
      | "latestRoundData"
      | "latestTimestamp"
      | "registry"
      | "setAnswer"
      | "version"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "AnswerUpdated" | "NewRound"): EventFragment;

  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAnswer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAnswer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAnswer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export namespace AnswerUpdatedEvent {
  export type InputTuple = [
    current: BigNumberish,
    roundId: BigNumberish,
    updatedAt: BigNumberish
  ];
  export type OutputTuple = [
    current: bigint,
    roundId: bigint,
    updatedAt: bigint
  ];
  export interface OutputObject {
    current: bigint;
    roundId: bigint;
    updatedAt: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewRoundEvent {
  export type InputTuple = [
    roundId: BigNumberish,
    startedBy: AddressLike,
    startedAt: BigNumberish
  ];
  export type OutputTuple = [
    roundId: bigint,
    startedBy: string,
    startedAt: bigint
  ];
  export interface OutputObject {
    roundId: bigint;
    startedBy: string;
    startedAt: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PMXPriceFeed extends BaseContract {
  connect(runner?: ContractRunner | null): PMXPriceFeed;
  waitForDeployment(): Promise<this>;

  interface: PMXPriceFeedInterface;

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

  decimals: TypedContractMethod<[], [bigint], "view">;

  description: TypedContractMethod<[], [string], "view">;

  getAnswer: TypedContractMethod<[roundId: BigNumberish], [bigint], "view">;

  getRoundData: TypedContractMethod<
    [_roundId: BigNumberish],
    [[bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;

  getTimestamp: TypedContractMethod<[roundId: BigNumberish], [bigint], "view">;

  latestAnswer: TypedContractMethod<[], [bigint], "view">;

  latestRound: TypedContractMethod<[], [bigint], "view">;

  latestRoundData: TypedContractMethod<
    [],
    [[bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;

  latestTimestamp: TypedContractMethod<[], [bigint], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  setAnswer: TypedContractMethod<[answer: BigNumberish], [void], "nonpayable">;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAnswer"
  ): TypedContractMethod<[roundId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoundData"
  ): TypedContractMethod<
    [_roundId: BigNumberish],
    [[bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTimestamp"
  ): TypedContractMethod<[roundId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestAnswer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestRound"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestRoundData"
  ): TypedContractMethod<
    [],
    [[bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "latestTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAnswer"
  ): TypedContractMethod<[answer: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "AnswerUpdated"
  ): TypedContractEvent<
    AnswerUpdatedEvent.InputTuple,
    AnswerUpdatedEvent.OutputTuple,
    AnswerUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "NewRound"
  ): TypedContractEvent<
    NewRoundEvent.InputTuple,
    NewRoundEvent.OutputTuple,
    NewRoundEvent.OutputObject
  >;

  filters: {
    "AnswerUpdated(int256,uint256,uint256)": TypedContractEvent<
      AnswerUpdatedEvent.InputTuple,
      AnswerUpdatedEvent.OutputTuple,
      AnswerUpdatedEvent.OutputObject
    >;
    AnswerUpdated: TypedContractEvent<
      AnswerUpdatedEvent.InputTuple,
      AnswerUpdatedEvent.OutputTuple,
      AnswerUpdatedEvent.OutputObject
    >;

    "NewRound(uint256,address,uint256)": TypedContractEvent<
      NewRoundEvent.InputTuple,
      NewRoundEvent.OutputTuple,
      NewRoundEvent.OutputObject
    >;
    NewRound: TypedContractEvent<
      NewRoundEvent.InputTuple,
      NewRoundEvent.OutputTuple,
      NewRoundEvent.OutputObject
    >;
  };
}
