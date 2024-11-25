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

export declare namespace IBalancerBotLens {
  export type PoolUpdateDataStruct = {
    poolId: BytesLike;
    amounts: BigNumberish[];
  };

  export type PoolUpdateDataStructOutput = [
    poolId: string,
    amounts: bigint[]
  ] & { poolId: string; amounts: bigint[] };
}

export interface BalancerBotLensInterface extends Interface {
  getFunction(nameOrSignature: "removeAndSetLiquidity"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "removeAndSetLiquidity",
    values: [
      AddressLike,
      IBalancerBotLens.PoolUpdateDataStruct[],
      AddressLike[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "removeAndSetLiquidity",
    data: BytesLike
  ): Result;
}

export interface BalancerBotLens extends BaseContract {
  connect(runner?: ContractRunner | null): BalancerBotLens;
  waitForDeployment(): Promise<this>;

  interface: BalancerBotLensInterface;

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

  removeAndSetLiquidity: TypedContractMethod<
    [
      _vault: AddressLike,
      _pools: IBalancerBotLens.PoolUpdateDataStruct[],
      _tokensToReturn: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "removeAndSetLiquidity"
  ): TypedContractMethod<
    [
      _vault: AddressLike,
      _pools: IBalancerBotLens.PoolUpdateDataStruct[],
      _tokensToReturn: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
