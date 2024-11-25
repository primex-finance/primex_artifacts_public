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
} from "../../../common";

export interface BlackListInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addBlackList"
      | "totalSupply"
      | "balances"
      | "maximumFee"
      | "_totalSupply"
      | "getBlackListStatus"
      | "balanceOf"
      | "getOwner"
      | "owner"
      | "transfer"
      | "basisPointsRate"
      | "isBlackListed"
      | "removeBlackList"
      | "transferOwnership"
      | "destroyBlackFunds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DestroyedBlackFunds"
      | "AddedBlackList"
      | "RemovedBlackList"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addBlackList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maximumFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBlackListStatus",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "basisPointsRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isBlackListed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBlackList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyBlackFunds",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maximumFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlackListStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "basisPointsRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBlackListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyBlackFunds",
    data: BytesLike
  ): Result;
}

export namespace DestroyedBlackFundsEvent {
  export type InputTuple = [
    _blackListedUser: AddressLike,
    _balance: BigNumberish
  ];
  export type OutputTuple = [_blackListedUser: string, _balance: bigint];
  export interface OutputObject {
    _blackListedUser: string;
    _balance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddedBlackListEvent {
  export type InputTuple = [_user: AddressLike];
  export type OutputTuple = [_user: string];
  export interface OutputObject {
    _user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemovedBlackListEvent {
  export type InputTuple = [_user: AddressLike];
  export type OutputTuple = [_user: string];
  export interface OutputObject {
    _user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BlackList extends BaseContract {
  connect(runner?: ContractRunner | null): BlackList;
  waitForDeployment(): Promise<this>;

  interface: BlackListInterface;

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

  addBlackList: TypedContractMethod<
    [_evilUser: AddressLike],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  maximumFee: TypedContractMethod<[], [bigint], "view">;

  _totalSupply: TypedContractMethod<[], [bigint], "view">;

  getBlackListStatus: TypedContractMethod<
    [_maker: AddressLike],
    [boolean],
    "view"
  >;

  balanceOf: TypedContractMethod<[_owner: AddressLike], [bigint], "view">;

  getOwner: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  transfer: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;

  basisPointsRate: TypedContractMethod<[], [bigint], "view">;

  isBlackListed: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  removeBlackList: TypedContractMethod<
    [_clearedUser: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  destroyBlackFunds: TypedContractMethod<
    [_blackListedUser: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addBlackList"
  ): TypedContractMethod<[_evilUser: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "maximumFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBlackListStatus"
  ): TypedContractMethod<[_maker: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[_owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "basisPointsRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isBlackListed"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeBlackList"
  ): TypedContractMethod<[_clearedUser: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "destroyBlackFunds"
  ): TypedContractMethod<[_blackListedUser: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "DestroyedBlackFunds"
  ): TypedContractEvent<
    DestroyedBlackFundsEvent.InputTuple,
    DestroyedBlackFundsEvent.OutputTuple,
    DestroyedBlackFundsEvent.OutputObject
  >;
  getEvent(
    key: "AddedBlackList"
  ): TypedContractEvent<
    AddedBlackListEvent.InputTuple,
    AddedBlackListEvent.OutputTuple,
    AddedBlackListEvent.OutputObject
  >;
  getEvent(
    key: "RemovedBlackList"
  ): TypedContractEvent<
    RemovedBlackListEvent.InputTuple,
    RemovedBlackListEvent.OutputTuple,
    RemovedBlackListEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "DestroyedBlackFunds(address,uint256)": TypedContractEvent<
      DestroyedBlackFundsEvent.InputTuple,
      DestroyedBlackFundsEvent.OutputTuple,
      DestroyedBlackFundsEvent.OutputObject
    >;
    DestroyedBlackFunds: TypedContractEvent<
      DestroyedBlackFundsEvent.InputTuple,
      DestroyedBlackFundsEvent.OutputTuple,
      DestroyedBlackFundsEvent.OutputObject
    >;

    "AddedBlackList(address)": TypedContractEvent<
      AddedBlackListEvent.InputTuple,
      AddedBlackListEvent.OutputTuple,
      AddedBlackListEvent.OutputObject
    >;
    AddedBlackList: TypedContractEvent<
      AddedBlackListEvent.InputTuple,
      AddedBlackListEvent.OutputTuple,
      AddedBlackListEvent.OutputObject
    >;

    "RemovedBlackList(address)": TypedContractEvent<
      RemovedBlackListEvent.InputTuple,
      RemovedBlackListEvent.OutputTuple,
      RemovedBlackListEvent.OutputObject
    >;
    RemovedBlackList: TypedContractEvent<
      RemovedBlackListEvent.InputTuple,
      RemovedBlackListEvent.OutputTuple,
      RemovedBlackListEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
