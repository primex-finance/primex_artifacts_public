/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IPrimexRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "grantRole"
      | "isRoleForContractsOnly"
      | "removeRolesForContractsOnly"
      | "setRoleAdmin"
      | "setRolesForContractsOnly"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isRoleForContractsOnly",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRolesForContractsOnly",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleAdmin",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRolesForContractsOnly",
    values: [BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRoleForContractsOnly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRolesForContractsOnly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRolesForContractsOnly",
    data: BytesLike
  ): Result;
}

export interface IPrimexRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimexRegistry;
  waitForDeployment(): Promise<this>;

  interface: IPrimexRegistryInterface;

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

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  isRoleForContractsOnly: TypedContractMethod<
    [role: BytesLike],
    [boolean],
    "view"
  >;

  removeRolesForContractsOnly: TypedContractMethod<
    [roles: BytesLike[]],
    [void],
    "nonpayable"
  >;

  setRoleAdmin: TypedContractMethod<
    [role: BytesLike, adminRole: BytesLike],
    [void],
    "nonpayable"
  >;

  setRolesForContractsOnly: TypedContractMethod<
    [roles: BytesLike[]],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isRoleForContractsOnly"
  ): TypedContractMethod<[role: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeRolesForContractsOnly"
  ): TypedContractMethod<[roles: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRoleAdmin"
  ): TypedContractMethod<
    [role: BytesLike, adminRole: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRolesForContractsOnly"
  ): TypedContractMethod<[roles: BytesLike[]], [void], "nonpayable">;

  filters: {};
}
