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

export interface TetherTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "name"
      | "deprecate"
      | "approve"
      | "deprecated"
      | "addBlackList"
      | "totalSupply"
      | "transferFrom"
      | "upgradedAddress"
      | "balances"
      | "decimals"
      | "maximumFee"
      | "_totalSupply"
      | "unpause"
      | "getBlackListStatus"
      | "allowed"
      | "paused"
      | "balanceOf"
      | "pause"
      | "getOwner"
      | "owner"
      | "symbol"
      | "transfer"
      | "setParams"
      | "issue"
      | "redeem"
      | "allowance"
      | "basisPointsRate"
      | "isBlackListed"
      | "removeBlackList"
      | "MAX_UINT"
      | "transferOwnership"
      | "destroyBlackFunds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Issue"
      | "Redeem"
      | "Deprecate"
      | "Params"
      | "DestroyedBlackFunds"
      | "AddedBlackList"
      | "RemovedBlackList"
      | "Approval"
      | "Transfer"
      | "Pause"
      | "Unpause"
  ): EventFragment;

  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deprecate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deprecated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addBlackList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradedAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maximumFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBlackListStatus",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowed",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setParams",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "issue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
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
  encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyBlackFunds",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deprecate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deprecated", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maximumFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBlackListStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setParams", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyBlackFunds",
    data: BytesLike
  ): Result;
}

export namespace IssueEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RedeemEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DeprecateEvent {
  export type InputTuple = [newAddress: AddressLike];
  export type OutputTuple = [newAddress: string];
  export interface OutputObject {
    newAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ParamsEvent {
  export type InputTuple = [feeBasisPoints: BigNumberish, maxFee: BigNumberish];
  export type OutputTuple = [feeBasisPoints: bigint, maxFee: bigint];
  export interface OutputObject {
    feeBasisPoints: bigint;
    maxFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
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

export namespace PauseEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpauseEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TetherToken extends BaseContract {
  connect(runner?: ContractRunner | null): TetherToken;
  waitForDeployment(): Promise<this>;

  interface: TetherTokenInterface;

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

  name: TypedContractMethod<[], [string], "view">;

  deprecate: TypedContractMethod<
    [_upgradedAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  approve: TypedContractMethod<
    [_spender: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;

  deprecated: TypedContractMethod<[], [boolean], "view">;

  addBlackList: TypedContractMethod<
    [_evilUser: AddressLike],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferFrom: TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;

  upgradedAddress: TypedContractMethod<[], [string], "view">;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  maximumFee: TypedContractMethod<[], [bigint], "view">;

  _totalSupply: TypedContractMethod<[], [bigint], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  getBlackListStatus: TypedContractMethod<
    [_maker: AddressLike],
    [boolean],
    "view"
  >;

  allowed: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  paused: TypedContractMethod<[], [boolean], "view">;

  balanceOf: TypedContractMethod<[who: AddressLike], [bigint], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  getOwner: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  transfer: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;

  setParams: TypedContractMethod<
    [newBasisPoints: BigNumberish, newMaxFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  issue: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  redeem: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  allowance: TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
  >;

  basisPointsRate: TypedContractMethod<[], [bigint], "view">;

  isBlackListed: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  removeBlackList: TypedContractMethod<
    [_clearedUser: AddressLike],
    [void],
    "nonpayable"
  >;

  MAX_UINT: TypedContractMethod<[], [bigint], "view">;

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
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deprecate"
  ): TypedContractMethod<[_upgradedAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [_spender: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deprecated"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "addBlackList"
  ): TypedContractMethod<[_evilUser: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradedAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maximumFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getBlackListStatus"
  ): TypedContractMethod<[_maker: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "allowed"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[who: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setParams"
  ): TypedContractMethod<
    [newBasisPoints: BigNumberish, newMaxFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "issue"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "redeem"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
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
    nameOrSignature: "MAX_UINT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "destroyBlackFunds"
  ): TypedContractMethod<[_blackListedUser: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "Issue"
  ): TypedContractEvent<
    IssueEvent.InputTuple,
    IssueEvent.OutputTuple,
    IssueEvent.OutputObject
  >;
  getEvent(
    key: "Redeem"
  ): TypedContractEvent<
    RedeemEvent.InputTuple,
    RedeemEvent.OutputTuple,
    RedeemEvent.OutputObject
  >;
  getEvent(
    key: "Deprecate"
  ): TypedContractEvent<
    DeprecateEvent.InputTuple,
    DeprecateEvent.OutputTuple,
    DeprecateEvent.OutputObject
  >;
  getEvent(
    key: "Params"
  ): TypedContractEvent<
    ParamsEvent.InputTuple,
    ParamsEvent.OutputTuple,
    ParamsEvent.OutputObject
  >;
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
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: "Pause"
  ): TypedContractEvent<
    PauseEvent.InputTuple,
    PauseEvent.OutputTuple,
    PauseEvent.OutputObject
  >;
  getEvent(
    key: "Unpause"
  ): TypedContractEvent<
    UnpauseEvent.InputTuple,
    UnpauseEvent.OutputTuple,
    UnpauseEvent.OutputObject
  >;

  filters: {
    "Issue(uint256)": TypedContractEvent<
      IssueEvent.InputTuple,
      IssueEvent.OutputTuple,
      IssueEvent.OutputObject
    >;
    Issue: TypedContractEvent<
      IssueEvent.InputTuple,
      IssueEvent.OutputTuple,
      IssueEvent.OutputObject
    >;

    "Redeem(uint256)": TypedContractEvent<
      RedeemEvent.InputTuple,
      RedeemEvent.OutputTuple,
      RedeemEvent.OutputObject
    >;
    Redeem: TypedContractEvent<
      RedeemEvent.InputTuple,
      RedeemEvent.OutputTuple,
      RedeemEvent.OutputObject
    >;

    "Deprecate(address)": TypedContractEvent<
      DeprecateEvent.InputTuple,
      DeprecateEvent.OutputTuple,
      DeprecateEvent.OutputObject
    >;
    Deprecate: TypedContractEvent<
      DeprecateEvent.InputTuple,
      DeprecateEvent.OutputTuple,
      DeprecateEvent.OutputObject
    >;

    "Params(uint256,uint256)": TypedContractEvent<
      ParamsEvent.InputTuple,
      ParamsEvent.OutputTuple,
      ParamsEvent.OutputObject
    >;
    Params: TypedContractEvent<
      ParamsEvent.InputTuple,
      ParamsEvent.OutputTuple,
      ParamsEvent.OutputObject
    >;

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

    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
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

    "Pause()": TypedContractEvent<
      PauseEvent.InputTuple,
      PauseEvent.OutputTuple,
      PauseEvent.OutputObject
    >;
    Pause: TypedContractEvent<
      PauseEvent.InputTuple,
      PauseEvent.OutputTuple,
      PauseEvent.OutputObject
    >;

    "Unpause()": TypedContractEvent<
      UnpauseEvent.InputTuple,
      UnpauseEvent.OutputTuple,
      UnpauseEvent.OutputObject
    >;
    Unpause: TypedContractEvent<
      UnpauseEvent.InputTuple,
      UnpauseEvent.OutputTuple,
      UnpauseEvent.OutputObject
    >;
  };
}
