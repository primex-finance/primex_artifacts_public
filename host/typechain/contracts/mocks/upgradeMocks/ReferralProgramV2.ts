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

export declare namespace IReferralProgramStorage {
  export type ReferralProgramUnitStruct = {
    referrer: AddressLike;
    referrals: AddressLike[];
  };

  export type ReferralProgramUnitStructOutput = [
    referrer: string,
    referrals: string[]
  ] & { referrer: string; referrals: string[] };
}

export interface ReferralProgramV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAGIC_MESSAGE"
      | "getReferralsOf"
      | "getReferralsOfLength"
      | "getReferrers"
      | "initialize"
      | "referralsOf"
      | "referrerOf"
      | "referrers"
      | "register"
      | "registry"
      | "setReferrals"
      | "setValue"
      | "supportsInterface"
      | "testUpgrade"
      | "value"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "RegisteredUser"
      | "SetReferralByAdmin"
      | "SetReferrerByAdmin"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "MAGIC_MESSAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReferralsOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferralsOfLength",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferrers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "referralsOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "referrerOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "referrers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "register", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setReferrals",
    values: [IReferralProgramStorage.ReferralProgramUnitStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MAGIC_MESSAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferralsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferralsOfLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferrers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referralsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "referrerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "referrers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReferrals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
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

export namespace RegisteredUserEvent {
  export type InputTuple = [user: AddressLike, parent: AddressLike];
  export type OutputTuple = [user: string, parent: string];
  export interface OutputObject {
    user: string;
    parent: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetReferralByAdminEvent {
  export type InputTuple = [referrer: AddressLike, referral: AddressLike];
  export type OutputTuple = [referrer: string, referral: string];
  export interface OutputObject {
    referrer: string;
    referral: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetReferrerByAdminEvent {
  export type InputTuple = [referrer: AddressLike];
  export type OutputTuple = [referrer: string];
  export interface OutputObject {
    referrer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ReferralProgramV2 extends BaseContract {
  connect(runner?: ContractRunner | null): ReferralProgramV2;
  waitForDeployment(): Promise<this>;

  interface: ReferralProgramV2Interface;

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

  MAGIC_MESSAGE: TypedContractMethod<[], [string], "view">;

  getReferralsOf: TypedContractMethod<
    [_referrer: AddressLike],
    [string[]],
    "view"
  >;

  getReferralsOfLength: TypedContractMethod<
    [_referrer: AddressLike],
    [bigint],
    "view"
  >;

  getReferrers: TypedContractMethod<[], [string[]], "view">;

  initialize: TypedContractMethod<
    [_registry: AddressLike],
    [void],
    "nonpayable"
  >;

  referralsOf: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  referrerOf: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  referrers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  register: TypedContractMethod<[_sig: BytesLike], [void], "nonpayable">;

  registry: TypedContractMethod<[], [string], "view">;

  setReferrals: TypedContractMethod<
    [referralProgramUnits: IReferralProgramStorage.ReferralProgramUnitStruct[]],
    [void],
    "nonpayable"
  >;

  setValue: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [_interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  testUpgrade: TypedContractMethod<[], [string], "view">;

  value: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAGIC_MESSAGE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getReferralsOf"
  ): TypedContractMethod<[_referrer: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "getReferralsOfLength"
  ): TypedContractMethod<[_referrer: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getReferrers"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_registry: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "referralsOf"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "referrerOf"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "referrers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<[_sig: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "registry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setReferrals"
  ): TypedContractMethod<
    [referralProgramUnits: IReferralProgramStorage.ReferralProgramUnitStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setValue"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[_interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "testUpgrade"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "RegisteredUser"
  ): TypedContractEvent<
    RegisteredUserEvent.InputTuple,
    RegisteredUserEvent.OutputTuple,
    RegisteredUserEvent.OutputObject
  >;
  getEvent(
    key: "SetReferralByAdmin"
  ): TypedContractEvent<
    SetReferralByAdminEvent.InputTuple,
    SetReferralByAdminEvent.OutputTuple,
    SetReferralByAdminEvent.OutputObject
  >;
  getEvent(
    key: "SetReferrerByAdmin"
  ): TypedContractEvent<
    SetReferrerByAdminEvent.InputTuple,
    SetReferrerByAdminEvent.OutputTuple,
    SetReferrerByAdminEvent.OutputObject
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

    "RegisteredUser(address,address)": TypedContractEvent<
      RegisteredUserEvent.InputTuple,
      RegisteredUserEvent.OutputTuple,
      RegisteredUserEvent.OutputObject
    >;
    RegisteredUser: TypedContractEvent<
      RegisteredUserEvent.InputTuple,
      RegisteredUserEvent.OutputTuple,
      RegisteredUserEvent.OutputObject
    >;

    "SetReferralByAdmin(address,address)": TypedContractEvent<
      SetReferralByAdminEvent.InputTuple,
      SetReferralByAdminEvent.OutputTuple,
      SetReferralByAdminEvent.OutputObject
    >;
    SetReferralByAdmin: TypedContractEvent<
      SetReferralByAdminEvent.InputTuple,
      SetReferralByAdminEvent.OutputTuple,
      SetReferralByAdminEvent.OutputObject
    >;

    "SetReferrerByAdmin(address)": TypedContractEvent<
      SetReferrerByAdminEvent.InputTuple,
      SetReferrerByAdminEvent.OutputTuple,
      SetReferrerByAdminEvent.OutputObject
    >;
    SetReferrerByAdmin: TypedContractEvent<
      SetReferrerByAdminEvent.InputTuple,
      SetReferrerByAdminEvent.OutputTuple,
      SetReferrerByAdminEvent.OutputObject
    >;
  };
}
