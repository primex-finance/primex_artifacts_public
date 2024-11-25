/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
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
} from "../../common";

export declare namespace PositionLibrary {
  export type PositionStruct = {
    id: BigNumberish;
    scaledDebtAmount: BigNumberish;
    bucket: AddressLike;
    soldAsset: AddressLike;
    depositAmountInSoldAsset: BigNumberish;
    positionAsset: AddressLike;
    positionAmount: BigNumberish;
    trader: AddressLike;
    openBorrowIndex: BigNumberish;
    createdAt: BigNumberish;
    updatedConditionsAt: BigNumberish;
    extraParams: BytesLike;
  };

  export type PositionStructOutput = [
    id: bigint,
    scaledDebtAmount: bigint,
    bucket: string,
    soldAsset: string,
    depositAmountInSoldAsset: bigint,
    positionAsset: string,
    positionAmount: bigint,
    trader: string,
    openBorrowIndex: bigint,
    createdAt: bigint,
    updatedConditionsAt: bigint,
    extraParams: string
  ] & {
    id: bigint;
    scaledDebtAmount: bigint;
    bucket: string;
    soldAsset: string;
    depositAmountInSoldAsset: bigint;
    positionAsset: string;
    positionAmount: bigint;
    trader: string;
    openBorrowIndex: bigint;
    createdAt: bigint;
    updatedConditionsAt: bigint;
    extraParams: string;
  };
}

export declare namespace LimitOrderLibrary {
  export type ConditionStruct = {
    managerType: BigNumberish;
    params: BytesLike;
  };

  export type ConditionStructOutput = [managerType: bigint, params: string] & {
    managerType: bigint;
    params: string;
  };
}

export interface IPositionManagerEventsInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "DecreaseDeposit"
      | "KeeperRewardDistributorChanged"
      | "MaintenanceBufferChanged"
      | "OpenPosition"
      | "OracleTolerableLimitMultiplierChanged"
      | "PartialClosePosition"
      | "SecurityBufferChanged"
      | "SetDefaultOracleTolerableLimit"
      | "SetMaxPositionSize"
      | "SetOracleTolerableLimit"
      | "UpdatePositionConditions"
  ): EventFragment;
}

export namespace DecreaseDepositEvent {
  export type InputTuple = [
    positionId: BigNumberish,
    trader: AddressLike,
    depositDelta: BigNumberish,
    scaledDebtAmount: BigNumberish
  ];
  export type OutputTuple = [
    positionId: bigint,
    trader: string,
    depositDelta: bigint,
    scaledDebtAmount: bigint
  ];
  export interface OutputObject {
    positionId: bigint;
    trader: string;
    depositDelta: bigint;
    scaledDebtAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace KeeperRewardDistributorChangedEvent {
  export type InputTuple = [_keeperRewardDistributor: AddressLike];
  export type OutputTuple = [_keeperRewardDistributor: string];
  export interface OutputObject {
    _keeperRewardDistributor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MaintenanceBufferChangedEvent {
  export type InputTuple = [maintenanceBuffer: BigNumberish];
  export type OutputTuple = [maintenanceBuffer: bigint];
  export interface OutputObject {
    maintenanceBuffer: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OpenPositionEvent {
  export type InputTuple = [
    positionId: BigNumberish,
    trader: AddressLike,
    openedBy: AddressLike,
    position: PositionLibrary.PositionStruct,
    entryPrice: BigNumberish,
    leverage: BigNumberish,
    closeConditions: LimitOrderLibrary.ConditionStruct[]
  ];
  export type OutputTuple = [
    positionId: bigint,
    trader: string,
    openedBy: string,
    position: PositionLibrary.PositionStructOutput,
    entryPrice: bigint,
    leverage: bigint,
    closeConditions: LimitOrderLibrary.ConditionStructOutput[]
  ];
  export interface OutputObject {
    positionId: bigint;
    trader: string;
    openedBy: string;
    position: PositionLibrary.PositionStructOutput;
    entryPrice: bigint;
    leverage: bigint;
    closeConditions: LimitOrderLibrary.ConditionStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OracleTolerableLimitMultiplierChangedEvent {
  export type InputTuple = [newMultiplier: BigNumberish];
  export type OutputTuple = [newMultiplier: bigint];
  export interface OutputObject {
    newMultiplier: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PartialClosePositionEvent {
  export type InputTuple = [
    positionId: BigNumberish,
    trader: AddressLike,
    bucketAddress: AddressLike,
    soldAsset: AddressLike,
    positionAsset: AddressLike,
    decreasePositionAmount: BigNumberish,
    depositedAmount: BigNumberish,
    scaledDebtAmount: BigNumberish,
    profit: BigNumberish,
    positionDebt: BigNumberish,
    amountOut: BigNumberish
  ];
  export type OutputTuple = [
    positionId: bigint,
    trader: string,
    bucketAddress: string,
    soldAsset: string,
    positionAsset: string,
    decreasePositionAmount: bigint,
    depositedAmount: bigint,
    scaledDebtAmount: bigint,
    profit: bigint,
    positionDebt: bigint,
    amountOut: bigint
  ];
  export interface OutputObject {
    positionId: bigint;
    trader: string;
    bucketAddress: string;
    soldAsset: string;
    positionAsset: string;
    decreasePositionAmount: bigint;
    depositedAmount: bigint;
    scaledDebtAmount: bigint;
    profit: bigint;
    positionDebt: bigint;
    amountOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SecurityBufferChangedEvent {
  export type InputTuple = [securityBuffer: BigNumberish];
  export type OutputTuple = [securityBuffer: bigint];
  export interface OutputObject {
    securityBuffer: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetDefaultOracleTolerableLimitEvent {
  export type InputTuple = [oracleTolerableLimit: BigNumberish];
  export type OutputTuple = [oracleTolerableLimit: bigint];
  export interface OutputObject {
    oracleTolerableLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetMaxPositionSizeEvent {
  export type InputTuple = [
    token0: AddressLike,
    token1: AddressLike,
    amountInToken0: BigNumberish,
    amountInToken1: BigNumberish
  ];
  export type OutputTuple = [
    token0: string,
    token1: string,
    amountInToken0: bigint,
    amountInToken1: bigint
  ];
  export interface OutputObject {
    token0: string;
    token1: string;
    amountInToken0: bigint;
    amountInToken1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetOracleTolerableLimitEvent {
  export type InputTuple = [
    assetA: AddressLike,
    assetB: AddressLike,
    oracleTolerableLimit: BigNumberish
  ];
  export type OutputTuple = [
    assetA: string,
    assetB: string,
    oracleTolerableLimit: bigint
  ];
  export interface OutputObject {
    assetA: string;
    assetB: string;
    oracleTolerableLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatePositionConditionsEvent {
  export type InputTuple = [
    positionId: BigNumberish,
    trader: AddressLike,
    closeConditions: LimitOrderLibrary.ConditionStruct[]
  ];
  export type OutputTuple = [
    positionId: bigint,
    trader: string,
    closeConditions: LimitOrderLibrary.ConditionStructOutput[]
  ];
  export interface OutputObject {
    positionId: bigint;
    trader: string;
    closeConditions: LimitOrderLibrary.ConditionStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPositionManagerEvents extends BaseContract {
  connect(runner?: ContractRunner | null): IPositionManagerEvents;
  waitForDeployment(): Promise<this>;

  interface: IPositionManagerEventsInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "DecreaseDeposit"
  ): TypedContractEvent<
    DecreaseDepositEvent.InputTuple,
    DecreaseDepositEvent.OutputTuple,
    DecreaseDepositEvent.OutputObject
  >;
  getEvent(
    key: "KeeperRewardDistributorChanged"
  ): TypedContractEvent<
    KeeperRewardDistributorChangedEvent.InputTuple,
    KeeperRewardDistributorChangedEvent.OutputTuple,
    KeeperRewardDistributorChangedEvent.OutputObject
  >;
  getEvent(
    key: "MaintenanceBufferChanged"
  ): TypedContractEvent<
    MaintenanceBufferChangedEvent.InputTuple,
    MaintenanceBufferChangedEvent.OutputTuple,
    MaintenanceBufferChangedEvent.OutputObject
  >;
  getEvent(
    key: "OpenPosition"
  ): TypedContractEvent<
    OpenPositionEvent.InputTuple,
    OpenPositionEvent.OutputTuple,
    OpenPositionEvent.OutputObject
  >;
  getEvent(
    key: "OracleTolerableLimitMultiplierChanged"
  ): TypedContractEvent<
    OracleTolerableLimitMultiplierChangedEvent.InputTuple,
    OracleTolerableLimitMultiplierChangedEvent.OutputTuple,
    OracleTolerableLimitMultiplierChangedEvent.OutputObject
  >;
  getEvent(
    key: "PartialClosePosition"
  ): TypedContractEvent<
    PartialClosePositionEvent.InputTuple,
    PartialClosePositionEvent.OutputTuple,
    PartialClosePositionEvent.OutputObject
  >;
  getEvent(
    key: "SecurityBufferChanged"
  ): TypedContractEvent<
    SecurityBufferChangedEvent.InputTuple,
    SecurityBufferChangedEvent.OutputTuple,
    SecurityBufferChangedEvent.OutputObject
  >;
  getEvent(
    key: "SetDefaultOracleTolerableLimit"
  ): TypedContractEvent<
    SetDefaultOracleTolerableLimitEvent.InputTuple,
    SetDefaultOracleTolerableLimitEvent.OutputTuple,
    SetDefaultOracleTolerableLimitEvent.OutputObject
  >;
  getEvent(
    key: "SetMaxPositionSize"
  ): TypedContractEvent<
    SetMaxPositionSizeEvent.InputTuple,
    SetMaxPositionSizeEvent.OutputTuple,
    SetMaxPositionSizeEvent.OutputObject
  >;
  getEvent(
    key: "SetOracleTolerableLimit"
  ): TypedContractEvent<
    SetOracleTolerableLimitEvent.InputTuple,
    SetOracleTolerableLimitEvent.OutputTuple,
    SetOracleTolerableLimitEvent.OutputObject
  >;
  getEvent(
    key: "UpdatePositionConditions"
  ): TypedContractEvent<
    UpdatePositionConditionsEvent.InputTuple,
    UpdatePositionConditionsEvent.OutputTuple,
    UpdatePositionConditionsEvent.OutputObject
  >;

  filters: {
    "DecreaseDeposit(uint256,address,uint256,uint256)": TypedContractEvent<
      DecreaseDepositEvent.InputTuple,
      DecreaseDepositEvent.OutputTuple,
      DecreaseDepositEvent.OutputObject
    >;
    DecreaseDeposit: TypedContractEvent<
      DecreaseDepositEvent.InputTuple,
      DecreaseDepositEvent.OutputTuple,
      DecreaseDepositEvent.OutputObject
    >;

    "KeeperRewardDistributorChanged(address)": TypedContractEvent<
      KeeperRewardDistributorChangedEvent.InputTuple,
      KeeperRewardDistributorChangedEvent.OutputTuple,
      KeeperRewardDistributorChangedEvent.OutputObject
    >;
    KeeperRewardDistributorChanged: TypedContractEvent<
      KeeperRewardDistributorChangedEvent.InputTuple,
      KeeperRewardDistributorChangedEvent.OutputTuple,
      KeeperRewardDistributorChangedEvent.OutputObject
    >;

    "MaintenanceBufferChanged(uint256)": TypedContractEvent<
      MaintenanceBufferChangedEvent.InputTuple,
      MaintenanceBufferChangedEvent.OutputTuple,
      MaintenanceBufferChangedEvent.OutputObject
    >;
    MaintenanceBufferChanged: TypedContractEvent<
      MaintenanceBufferChangedEvent.InputTuple,
      MaintenanceBufferChangedEvent.OutputTuple,
      MaintenanceBufferChangedEvent.OutputObject
    >;

    "OpenPosition(uint256,address,address,tuple,uint256,uint256,tuple[])": TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;
    OpenPosition: TypedContractEvent<
      OpenPositionEvent.InputTuple,
      OpenPositionEvent.OutputTuple,
      OpenPositionEvent.OutputObject
    >;

    "OracleTolerableLimitMultiplierChanged(uint256)": TypedContractEvent<
      OracleTolerableLimitMultiplierChangedEvent.InputTuple,
      OracleTolerableLimitMultiplierChangedEvent.OutputTuple,
      OracleTolerableLimitMultiplierChangedEvent.OutputObject
    >;
    OracleTolerableLimitMultiplierChanged: TypedContractEvent<
      OracleTolerableLimitMultiplierChangedEvent.InputTuple,
      OracleTolerableLimitMultiplierChangedEvent.OutputTuple,
      OracleTolerableLimitMultiplierChangedEvent.OutputObject
    >;

    "PartialClosePosition(uint256,address,address,address,address,uint256,uint256,uint256,int256,uint256,uint256)": TypedContractEvent<
      PartialClosePositionEvent.InputTuple,
      PartialClosePositionEvent.OutputTuple,
      PartialClosePositionEvent.OutputObject
    >;
    PartialClosePosition: TypedContractEvent<
      PartialClosePositionEvent.InputTuple,
      PartialClosePositionEvent.OutputTuple,
      PartialClosePositionEvent.OutputObject
    >;

    "SecurityBufferChanged(uint256)": TypedContractEvent<
      SecurityBufferChangedEvent.InputTuple,
      SecurityBufferChangedEvent.OutputTuple,
      SecurityBufferChangedEvent.OutputObject
    >;
    SecurityBufferChanged: TypedContractEvent<
      SecurityBufferChangedEvent.InputTuple,
      SecurityBufferChangedEvent.OutputTuple,
      SecurityBufferChangedEvent.OutputObject
    >;

    "SetDefaultOracleTolerableLimit(uint256)": TypedContractEvent<
      SetDefaultOracleTolerableLimitEvent.InputTuple,
      SetDefaultOracleTolerableLimitEvent.OutputTuple,
      SetDefaultOracleTolerableLimitEvent.OutputObject
    >;
    SetDefaultOracleTolerableLimit: TypedContractEvent<
      SetDefaultOracleTolerableLimitEvent.InputTuple,
      SetDefaultOracleTolerableLimitEvent.OutputTuple,
      SetDefaultOracleTolerableLimitEvent.OutputObject
    >;

    "SetMaxPositionSize(address,address,uint256,uint256)": TypedContractEvent<
      SetMaxPositionSizeEvent.InputTuple,
      SetMaxPositionSizeEvent.OutputTuple,
      SetMaxPositionSizeEvent.OutputObject
    >;
    SetMaxPositionSize: TypedContractEvent<
      SetMaxPositionSizeEvent.InputTuple,
      SetMaxPositionSizeEvent.OutputTuple,
      SetMaxPositionSizeEvent.OutputObject
    >;

    "SetOracleTolerableLimit(address,address,uint256)": TypedContractEvent<
      SetOracleTolerableLimitEvent.InputTuple,
      SetOracleTolerableLimitEvent.OutputTuple,
      SetOracleTolerableLimitEvent.OutputObject
    >;
    SetOracleTolerableLimit: TypedContractEvent<
      SetOracleTolerableLimitEvent.InputTuple,
      SetOracleTolerableLimitEvent.OutputTuple,
      SetOracleTolerableLimitEvent.OutputObject
    >;

    "UpdatePositionConditions(uint256,address,tuple[])": TypedContractEvent<
      UpdatePositionConditionsEvent.InputTuple,
      UpdatePositionConditionsEvent.OutputTuple,
      UpdatePositionConditionsEvent.OutputObject
    >;
    UpdatePositionConditions: TypedContractEvent<
      UpdatePositionConditionsEvent.InputTuple,
      UpdatePositionConditionsEvent.OutputTuple,
      UpdatePositionConditionsEvent.OutputObject
    >;
  };
}
