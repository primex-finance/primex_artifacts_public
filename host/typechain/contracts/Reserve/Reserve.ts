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

export declare namespace IReserveStorage {
  export type TransferRestrictionsStruct = {
    minAmountToBeLeft: BigNumberish;
    minPercentOfTotalSupplyToBeLeft: BigNumberish;
  };

  export type TransferRestrictionsStructOutput = [
    minAmountToBeLeft: bigint,
    minPercentOfTotalSupplyToBeLeft: bigint
  ] & { minAmountToBeLeft: bigint; minPercentOfTotalSupplyToBeLeft: bigint };
}

export interface ReserveInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "initialize"
      | "pause"
      | "paused"
      | "payBonus"
      | "paybackPermanentLoss"
      | "setTransferRestrictions"
      | "supportsInterface"
      | "transferRestrictions"
      | "transferToTreasury"
      | "unpause"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BurnAmountCalculated"
      | "Initialized"
      | "Paused"
      | "TransferFromReserve"
      | "TransferRestrictionsChanged"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payBonus",
    values: [string, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "paybackPermanentLoss",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTransferRestrictions",
    values: [AddressLike, IReserveStorage.TransferRestrictionsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferRestrictions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToTreasury",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payBonus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paybackPermanentLoss",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTransferRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferToTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
}

export namespace BurnAmountCalculatedEvent {
  export type InputTuple = [burnAmount: BigNumberish];
  export type OutputTuple = [burnAmount: bigint];
  export interface OutputObject {
    burnAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferFromReserveEvent {
  export type InputTuple = [
    pToken: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [pToken: string, to: string, amount: bigint];
  export interface OutputObject {
    pToken: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferRestrictionsChangedEvent {
  export type InputTuple = [
    pToken: AddressLike,
    newTransferRestrictions: IReserveStorage.TransferRestrictionsStruct
  ];
  export type OutputTuple = [
    pToken: string,
    newTransferRestrictions: IReserveStorage.TransferRestrictionsStructOutput
  ];
  export interface OutputObject {
    pToken: string;
    newTransferRestrictions: IReserveStorage.TransferRestrictionsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Reserve extends BaseContract {
  connect(runner?: ContractRunner | null): Reserve;
  waitForDeployment(): Promise<this>;

  interface: ReserveInterface;

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

  initialize: TypedContractMethod<
    [_dns: AddressLike, _registry: AddressLike],
    [void],
    "nonpayable"
  >;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  payBonus: TypedContractMethod<
    [_bucketName: string, _to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  paybackPermanentLoss: TypedContractMethod<
    [_bucket: AddressLike],
    [void],
    "nonpayable"
  >;

  setTransferRestrictions: TypedContractMethod<
    [
      pToken: AddressLike,
      newTransferRestrictions: IReserveStorage.TransferRestrictionsStruct
    ],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [_interfaceID: BytesLike],
    [boolean],
    "view"
  >;

  transferRestrictions: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint] & {
        minAmountToBeLeft: bigint;
        minPercentOfTotalSupplyToBeLeft: bigint;
      }
    ],
    "view"
  >;

  transferToTreasury: TypedContractMethod<
    [bucket: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_dns: AddressLike, _registry: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "payBonus"
  ): TypedContractMethod<
    [_bucketName: string, _to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "paybackPermanentLoss"
  ): TypedContractMethod<[_bucket: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTransferRestrictions"
  ): TypedContractMethod<
    [
      pToken: AddressLike,
      newTransferRestrictions: IReserveStorage.TransferRestrictionsStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceID: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferRestrictions"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint] & {
        minAmountToBeLeft: bigint;
        minPercentOfTotalSupplyToBeLeft: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferToTreasury"
  ): TypedContractMethod<
    [bucket: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "BurnAmountCalculated"
  ): TypedContractEvent<
    BurnAmountCalculatedEvent.InputTuple,
    BurnAmountCalculatedEvent.OutputTuple,
    BurnAmountCalculatedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "TransferFromReserve"
  ): TypedContractEvent<
    TransferFromReserveEvent.InputTuple,
    TransferFromReserveEvent.OutputTuple,
    TransferFromReserveEvent.OutputObject
  >;
  getEvent(
    key: "TransferRestrictionsChanged"
  ): TypedContractEvent<
    TransferRestrictionsChangedEvent.InputTuple,
    TransferRestrictionsChangedEvent.OutputTuple,
    TransferRestrictionsChangedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "BurnAmountCalculated(uint256)": TypedContractEvent<
      BurnAmountCalculatedEvent.InputTuple,
      BurnAmountCalculatedEvent.OutputTuple,
      BurnAmountCalculatedEvent.OutputObject
    >;
    BurnAmountCalculated: TypedContractEvent<
      BurnAmountCalculatedEvent.InputTuple,
      BurnAmountCalculatedEvent.OutputTuple,
      BurnAmountCalculatedEvent.OutputObject
    >;

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

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "TransferFromReserve(address,address,uint256)": TypedContractEvent<
      TransferFromReserveEvent.InputTuple,
      TransferFromReserveEvent.OutputTuple,
      TransferFromReserveEvent.OutputObject
    >;
    TransferFromReserve: TypedContractEvent<
      TransferFromReserveEvent.InputTuple,
      TransferFromReserveEvent.OutputTuple,
      TransferFromReserveEvent.OutputObject
    >;

    "TransferRestrictionsChanged(address,tuple)": TypedContractEvent<
      TransferRestrictionsChangedEvent.InputTuple,
      TransferRestrictionsChangedEvent.OutputTuple,
      TransferRestrictionsChangedEvent.OutputObject
    >;
    TransferRestrictionsChanged: TypedContractEvent<
      TransferRestrictionsChangedEvent.InputTuple,
      TransferRestrictionsChangedEvent.OutputTuple,
      TransferRestrictionsChangedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
