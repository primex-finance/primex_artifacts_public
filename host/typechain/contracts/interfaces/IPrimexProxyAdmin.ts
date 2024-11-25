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

export interface IPrimexProxyAdminInterface extends Interface {
  getFunction(
    nameOrSignature: "changeBeaconProxyAdmin" | "upgradeBeacon"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeBeaconProxyAdmin",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeBeacon",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeBeaconProxyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeBeacon",
    data: BytesLike
  ): Result;
}

export interface IPrimexProxyAdmin extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimexProxyAdmin;
  waitForDeployment(): Promise<this>;

  interface: IPrimexProxyAdminInterface;

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

  changeBeaconProxyAdmin: TypedContractMethod<
    [beacon: AddressLike, newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeBeacon: TypedContractMethod<
    [beacon: AddressLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changeBeaconProxyAdmin"
  ): TypedContractMethod<
    [beacon: AddressLike, newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeBeacon"
  ): TypedContractMethod<
    [beacon: AddressLike, implementation: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
