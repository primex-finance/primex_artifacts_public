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
} from "../../common";

export declare namespace LimitOrderLibrary {
  export type LimitOrderStruct = {
    bucket: AddressLike;
    positionAsset: AddressLike;
    depositAsset: AddressLike;
    depositAmount: BigNumberish;
    feeToken: AddressLike;
    protocolFee: BigNumberish;
    trader: AddressLike;
    deadline: BigNumberish;
    id: BigNumberish;
    leverage: BigNumberish;
    shouldOpenPosition: boolean;
    createdAt: BigNumberish;
    updatedConditionsAt: BigNumberish;
    extraParams: BytesLike;
  };

  export type LimitOrderStructOutput = [
    bucket: string,
    positionAsset: string,
    depositAsset: string,
    depositAmount: bigint,
    feeToken: string,
    protocolFee: bigint,
    trader: string,
    deadline: bigint,
    id: bigint,
    leverage: bigint,
    shouldOpenPosition: boolean,
    createdAt: bigint,
    updatedConditionsAt: bigint,
    extraParams: string
  ] & {
    bucket: string;
    positionAsset: string;
    depositAsset: string;
    depositAmount: bigint;
    feeToken: string;
    protocolFee: bigint;
    trader: string;
    deadline: bigint;
    id: bigint;
    leverage: bigint;
    shouldOpenPosition: boolean;
    createdAt: bigint;
    updatedConditionsAt: bigint;
    extraParams: string;
  };
}

export interface LimitPriceCOMInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "canBeFilledAfterSwap"
      | "getLimitPrice"
      | "initialize"
      | "keeperRewardDistributor"
      | "pm"
      | "priceOracle"
      | "primexDNS"
      | "registry"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;

  encodeFunctionData(
    functionFragment: "canBeFilledAfterSwap",
    values: [
      LimitOrderLibrary.LimitOrderStruct,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLimitPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "keeperRewardDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "canBeFilledAfterSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLimitPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "keeperRewardDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pm", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
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

export interface LimitPriceCOM extends BaseContract {
  connect(runner?: ContractRunner | null): LimitPriceCOM;
  waitForDeployment(): Promise<this>;

  interface: LimitPriceCOMInterface;

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

  canBeFilledAfterSwap: TypedContractMethod<
    [
      arg0: LimitOrderLibrary.LimitOrderStruct,
      _params: BytesLike,
      arg2: BytesLike,
      _exchangeRate: BigNumberish
    ],
    [boolean],
    "view"
  >;

  getLimitPrice: TypedContractMethod<[_params: BytesLike], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      _primexDNS: AddressLike,
      _priceOracle: AddressLike,
      _pm: AddressLike,
      _keeperRewardDistributor: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  keeperRewardDistributor: TypedContractMethod<[], [string], "view">;

  pm: TypedContractMethod<[], [string], "view">;

  priceOracle: TypedContractMethod<[], [string], "view">;

  primexDNS: TypedContractMethod<[], [string], "view">;

  registry: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "canBeFilledAfterSwap"
  ): TypedContractMethod<
    [
      arg0: LimitOrderLibrary.LimitOrderStruct,
      _params: BytesLike,
      arg2: BytesLike,
      _exchangeRate: BigNumberish
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLimitPrice"
  ): TypedContractMethod<[_params: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _primexDNS: AddressLike,
      _priceOracle: AddressLike,
      _pm: AddressLike,
      _keeperRewardDistributor: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "keeperRewardDistributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "pm"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "primexDNS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;

  filters: {
    "Initialized(uint8)": TypedContractEvent<
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