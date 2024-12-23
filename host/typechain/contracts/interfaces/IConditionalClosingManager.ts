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

export interface IConditionalClosingManagerInterface extends Interface {
  getFunction(nameOrSignature: "canBeClosedAfterSwap"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "canBeClosedAfterSwap",
    values: [
      PositionLibrary.PositionStruct,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "canBeClosedAfterSwap",
    data: BytesLike
  ): Result;
}

export interface IConditionalClosingManager extends BaseContract {
  connect(runner?: ContractRunner | null): IConditionalClosingManager;
  waitForDeployment(): Promise<this>;

  interface: IConditionalClosingManagerInterface;

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

  canBeClosedAfterSwap: TypedContractMethod<
    [
      _position: PositionLibrary.PositionStruct,
      _params: BytesLike,
      _additionalParams: BytesLike,
      _closeAmount: BigNumberish,
      _borowedAssetAmount: BigNumberish,
      _positionSoldAssetOracleData: BytesLike
    ],
    [boolean],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "canBeClosedAfterSwap"
  ): TypedContractMethod<
    [
      _position: PositionLibrary.PositionStruct,
      _params: BytesLike,
      _additionalParams: BytesLike,
      _closeAmount: BigNumberish,
      _borowedAssetAmount: BigNumberish,
      _positionSoldAssetOracleData: BytesLike
    ],
    [boolean],
    "payable"
  >;

  filters: {};
}
