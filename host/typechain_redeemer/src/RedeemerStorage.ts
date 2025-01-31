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

export interface RedeemerStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "epmx"
      | "isBlackListed"
      | "isWhiteListed"
      | "pmx"
      | "registry"
      | "treasury"
      | "vestingParams"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;

  encodeFunctionData(functionFragment: "epmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isBlackListed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhiteListed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestingParams",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "epmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isBlackListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhiteListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vestingParams",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RedeemerStorage extends BaseContract {
  connect(runner?: ContractRunner | null): RedeemerStorage;
  waitForDeployment(): Promise<this>;

  interface: RedeemerStorageInterface;

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

  epmx: TypedContractMethod<[], [string], "view">;

  isBlackListed: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isWhiteListed: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  pmx: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  treasury: TypedContractMethod<[], [string], "view">;

  vestingParams: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        cliff: bigint;
        duration: bigint;
        slicePeriodSeconds: bigint;
        initialUnlockPercentage: bigint;
        redeemDeadline: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "epmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isBlackListed"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isWhiteListed"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "pmx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vestingParams"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        cliff: bigint;
        duration: bigint;
        slicePeriodSeconds: bigint;
        initialUnlockPercentage: bigint;
        redeemDeadline: bigint;
      }
    ],
    "view"
  >;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;

  filters: {
    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
  };
}
