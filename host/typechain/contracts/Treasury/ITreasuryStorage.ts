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

export declare namespace ITreasuryStorage {
  export type SpendingLimitsStruct = {
    maxTotalAmount: BigNumberish;
    maxAmountPerTransfer: BigNumberish;
    maxPercentPerTransfer: BigNumberish;
    minTimeBetweenTransfers: BigNumberish;
    timeframeDuration: BigNumberish;
    maxAmountDuringTimeframe: BigNumberish;
  };

  export type SpendingLimitsStructOutput = [
    maxTotalAmount: bigint,
    maxAmountPerTransfer: bigint,
    maxPercentPerTransfer: bigint,
    minTimeBetweenTransfers: bigint,
    timeframeDuration: bigint,
    maxAmountDuringTimeframe: bigint
  ] & {
    maxTotalAmount: bigint;
    maxAmountPerTransfer: bigint;
    maxPercentPerTransfer: bigint;
    minTimeBetweenTransfers: bigint;
    timeframeDuration: bigint;
    maxAmountDuringTimeframe: bigint;
  };
}

export interface ITreasuryStorageInterface extends Interface {
  getFunction(
    nameOrSignature: "initialTimestamp" | "registry" | "spenders"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "TransferFromTreasury"): EventFragment;

  encodeFunctionData(
    functionFragment: "initialTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "spenders",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "initialTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spenders", data: BytesLike): Result;
}

export namespace TransferFromTreasuryEvent {
  export type InputTuple = [
    spender: AddressLike,
    receiver: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    spender: string,
    receiver: string,
    token: string,
    amount: bigint
  ];
  export interface OutputObject {
    spender: string;
    receiver: string;
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ITreasuryStorage extends BaseContract {
  connect(runner?: ContractRunner | null): ITreasuryStorage;
  waitForDeployment(): Promise<this>;

  interface: ITreasuryStorageInterface;

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

  initialTimestamp: TypedContractMethod<[], [bigint], "nonpayable">;

  registry: TypedContractMethod<[], [string], "nonpayable">;

  spenders: TypedContractMethod<
    [spender: AddressLike, token: AddressLike],
    [[boolean, ITreasuryStorage.SpendingLimitsStructOutput, bigint, bigint]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "initialTimestamp"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "spenders"
  ): TypedContractMethod<
    [spender: AddressLike, token: AddressLike],
    [[boolean, ITreasuryStorage.SpendingLimitsStructOutput, bigint, bigint]],
    "nonpayable"
  >;

  getEvent(
    key: "TransferFromTreasury"
  ): TypedContractEvent<
    TransferFromTreasuryEvent.InputTuple,
    TransferFromTreasuryEvent.OutputTuple,
    TransferFromTreasuryEvent.OutputObject
  >;

  filters: {
    "TransferFromTreasury(address,address,address,uint256)": TypedContractEvent<
      TransferFromTreasuryEvent.InputTuple,
      TransferFromTreasuryEvent.OutputTuple,
      TransferFromTreasuryEvent.OutputObject
    >;
    TransferFromTreasury: TypedContractEvent<
      TransferFromTreasuryEvent.InputTuple,
      TransferFromTreasuryEvent.OutputTuple,
      TransferFromTreasuryEvent.OutputObject
    >;
  };
}