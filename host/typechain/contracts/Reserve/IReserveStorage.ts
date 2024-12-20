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

export interface IReserveStorageInterface extends Interface {
  getFunction(nameOrSignature: "transferRestrictions"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "TransferFromReserve"): EventFragment;

  encodeFunctionData(
    functionFragment: "transferRestrictions",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "transferRestrictions",
    data: BytesLike
  ): Result;
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

export interface IReserveStorage extends BaseContract {
  connect(runner?: ContractRunner | null): IReserveStorage;
  waitForDeployment(): Promise<this>;

  interface: IReserveStorageInterface;

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

  transferRestrictions: TypedContractMethod<
    [pToken: AddressLike],
    [[bigint, bigint]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "transferRestrictions"
  ): TypedContractMethod<[pToken: AddressLike], [[bigint, bigint]], "view">;

  getEvent(
    key: "TransferFromReserve"
  ): TypedContractEvent<
    TransferFromReserveEvent.InputTuple,
    TransferFromReserveEvent.OutputTuple,
    TransferFromReserveEvent.OutputObject
  >;

  filters: {
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
  };
}
