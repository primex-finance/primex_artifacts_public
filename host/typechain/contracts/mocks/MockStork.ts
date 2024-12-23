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

export interface MockStorkInterface extends Interface {
  getFunction(nameOrSignature: "verifySignature"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifySignature",
    values: [
      AddressLike,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifySignature",
    data: BytesLike
  ): Result;
}

export interface MockStork extends BaseContract {
  connect(runner?: ContractRunner | null): MockStork;
  waitForDeployment(): Promise<this>;

  interface: MockStorkInterface;

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

  verifySignature: TypedContractMethod<
    [
      oracle_pubkey: AddressLike,
      asset_pair_id: string,
      timestamp: BigNumberish,
      price: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "verifySignature"
  ): TypedContractMethod<
    [
      oracle_pubkey: AddressLike,
      asset_pair_id: string,
      timestamp: BigNumberish,
      price: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish
    ],
    [boolean],
    "view"
  >;

  filters: {};
}
