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
} from "../../../../common";

export interface IAlgebraFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createPool"
      | "farmingAddress"
      | "owner"
      | "poolByPair"
      | "poolDeployer"
      | "setBaseFeeConfiguration"
      | "setFarmingAddress"
      | "setOwner"
      | "setVaultAddress"
      | "vaultAddress"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FarmingAddress"
      | "FeeConfiguration"
      | "Owner"
      | "Pool"
      | "VaultAddress"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createPool",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "farmingAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolByPair",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "poolDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseFeeConfiguration",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFarmingAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVaultAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "farmingAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolByPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseFeeConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFarmingAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultAddress",
    data: BytesLike
  ): Result;
}

export namespace FarmingAddressEvent {
  export type InputTuple = [newFarmingAddress: AddressLike];
  export type OutputTuple = [newFarmingAddress: string];
  export interface OutputObject {
    newFarmingAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeConfigurationEvent {
  export type InputTuple = [
    alpha1: BigNumberish,
    alpha2: BigNumberish,
    beta1: BigNumberish,
    beta2: BigNumberish,
    gamma1: BigNumberish,
    gamma2: BigNumberish,
    volumeBeta: BigNumberish,
    volumeGamma: BigNumberish,
    baseFee: BigNumberish
  ];
  export type OutputTuple = [
    alpha1: bigint,
    alpha2: bigint,
    beta1: bigint,
    beta2: bigint,
    gamma1: bigint,
    gamma2: bigint,
    volumeBeta: bigint,
    volumeGamma: bigint,
    baseFee: bigint
  ];
  export interface OutputObject {
    alpha1: bigint;
    alpha2: bigint;
    beta1: bigint;
    beta2: bigint;
    gamma1: bigint;
    gamma2: bigint;
    volumeBeta: bigint;
    volumeGamma: bigint;
    baseFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerEvent {
  export type InputTuple = [newOwner: AddressLike];
  export type OutputTuple = [newOwner: string];
  export interface OutputObject {
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolEvent {
  export type InputTuple = [
    token0: AddressLike,
    token1: AddressLike,
    pool: AddressLike
  ];
  export type OutputTuple = [token0: string, token1: string, pool: string];
  export interface OutputObject {
    token0: string;
    token1: string;
    pool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultAddressEvent {
  export type InputTuple = [newVaultAddress: AddressLike];
  export type OutputTuple = [newVaultAddress: string];
  export interface OutputObject {
    newVaultAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IAlgebraFactory extends BaseContract {
  connect(runner?: ContractRunner | null): IAlgebraFactory;
  waitForDeployment(): Promise<this>;

  interface: IAlgebraFactoryInterface;

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

  createPool: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [string],
    "nonpayable"
  >;

  farmingAddress: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  poolByPair: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [string],
    "view"
  >;

  poolDeployer: TypedContractMethod<[], [string], "view">;

  setBaseFeeConfiguration: TypedContractMethod<
    [
      alpha1: BigNumberish,
      alpha2: BigNumberish,
      beta1: BigNumberish,
      beta2: BigNumberish,
      gamma1: BigNumberish,
      gamma2: BigNumberish,
      volumeBeta: BigNumberish,
      volumeGamma: BigNumberish,
      baseFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setFarmingAddress: TypedContractMethod<
    [_farmingAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  setVaultAddress: TypedContractMethod<
    [_vaultAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  vaultAddress: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createPool"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "farmingAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poolByPair"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolDeployer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setBaseFeeConfiguration"
  ): TypedContractMethod<
    [
      alpha1: BigNumberish,
      alpha2: BigNumberish,
      beta1: BigNumberish,
      beta2: BigNumberish,
      gamma1: BigNumberish,
      gamma2: BigNumberish,
      volumeBeta: BigNumberish,
      volumeGamma: BigNumberish,
      baseFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFarmingAddress"
  ): TypedContractMethod<[_farmingAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setVaultAddress"
  ): TypedContractMethod<[_vaultAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vaultAddress"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "FarmingAddress"
  ): TypedContractEvent<
    FarmingAddressEvent.InputTuple,
    FarmingAddressEvent.OutputTuple,
    FarmingAddressEvent.OutputObject
  >;
  getEvent(
    key: "FeeConfiguration"
  ): TypedContractEvent<
    FeeConfigurationEvent.InputTuple,
    FeeConfigurationEvent.OutputTuple,
    FeeConfigurationEvent.OutputObject
  >;
  getEvent(
    key: "Owner"
  ): TypedContractEvent<
    OwnerEvent.InputTuple,
    OwnerEvent.OutputTuple,
    OwnerEvent.OutputObject
  >;
  getEvent(
    key: "Pool"
  ): TypedContractEvent<
    PoolEvent.InputTuple,
    PoolEvent.OutputTuple,
    PoolEvent.OutputObject
  >;
  getEvent(
    key: "VaultAddress"
  ): TypedContractEvent<
    VaultAddressEvent.InputTuple,
    VaultAddressEvent.OutputTuple,
    VaultAddressEvent.OutputObject
  >;

  filters: {
    "FarmingAddress(address)": TypedContractEvent<
      FarmingAddressEvent.InputTuple,
      FarmingAddressEvent.OutputTuple,
      FarmingAddressEvent.OutputObject
    >;
    FarmingAddress: TypedContractEvent<
      FarmingAddressEvent.InputTuple,
      FarmingAddressEvent.OutputTuple,
      FarmingAddressEvent.OutputObject
    >;

    "FeeConfiguration(uint16,uint16,uint32,uint32,uint16,uint16,uint32,uint16,uint16)": TypedContractEvent<
      FeeConfigurationEvent.InputTuple,
      FeeConfigurationEvent.OutputTuple,
      FeeConfigurationEvent.OutputObject
    >;
    FeeConfiguration: TypedContractEvent<
      FeeConfigurationEvent.InputTuple,
      FeeConfigurationEvent.OutputTuple,
      FeeConfigurationEvent.OutputObject
    >;

    "Owner(address)": TypedContractEvent<
      OwnerEvent.InputTuple,
      OwnerEvent.OutputTuple,
      OwnerEvent.OutputObject
    >;
    Owner: TypedContractEvent<
      OwnerEvent.InputTuple,
      OwnerEvent.OutputTuple,
      OwnerEvent.OutputObject
    >;

    "Pool(address,address,address)": TypedContractEvent<
      PoolEvent.InputTuple,
      PoolEvent.OutputTuple,
      PoolEvent.OutputObject
    >;
    Pool: TypedContractEvent<
      PoolEvent.InputTuple,
      PoolEvent.OutputTuple,
      PoolEvent.OutputObject
    >;

    "VaultAddress(address)": TypedContractEvent<
      VaultAddressEvent.InputTuple,
      VaultAddressEvent.OutputTuple,
      VaultAddressEvent.OutputObject
    >;
    VaultAddress: TypedContractEvent<
      VaultAddressEvent.InputTuple,
      VaultAddressEvent.OutputTuple,
      VaultAddressEvent.OutputObject
    >;
  };
}
