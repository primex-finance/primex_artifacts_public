/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SwapManagerInterface extends ethers.utils.Interface {
  functions: {
    "initialize(address)": FunctionFragment;
    "initializeAfterUpgrade(address,address,address,address)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "primexDNS()": FunctionFragment;
    "registry()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "swap((address,address,uint256,uint256,tuple[],address,uint256,bool,bool,bool,bytes,bytes,bytes,bytes[][],uint256[]),uint256,bool)": FunctionFragment;
    "swapInLimitOrder((address,address,uint256,tuple[],address,uint256,address,address,uint256,bytes,bytes,bytes),uint256)": FunctionFragment;
    "traderBalanceVault()": FunctionFragment;
    "unpause()": FunctionFragment;
    "whiteBlackList()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initializeAfterUpgrade",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "primexDNS", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        amountOutMin: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
        isSwapFromWallet: boolean;
        isSwapToWallet: boolean;
        isSwapFeeInPmx: boolean;
        tokenAtokenBOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
        pullOracleData: BytesLike[][];
        pullOracleTypes: BigNumberish[];
      },
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapInLimitOrder",
    values: [
      {
        depositAsset: string;
        positionAsset: string;
        depositAmount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        trader: string;
        deadline: BigNumberish;
        feeToken: string;
        keeperRewardDistributor: string;
        gasSpent: BigNumberish;
        depositPositionAssetOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
      },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "traderBalanceVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whiteBlackList",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeAfterUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "primexDNS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapInLimitOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "traderBalanceVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whiteBlackList",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "PaidProtocolFee(address,address,uint8,uint256,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "SpotSwap(address,address,address,address,uint256,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaidProtocolFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SpotSwap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type PaidProtocolFeeEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber] & {
    trader: string;
    boughtAsset: string;
    feeRateType: number;
    feeInPositionAsset: BigNumber;
    feeInPmx: BigNumber;
  }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type SpotSwapEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber] & {
    trader: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    amountSold: BigNumber;
    amountBought: BigNumber;
  }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class SwapManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SwapManagerInterface;

  functions: {
    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeAfterUpgrade(
      _primexDNS: string,
      _traderBalanceVault: string,
      _priceOracle: string,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    primexDNS(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    swap(
      params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        amountOutMin: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
        isSwapFromWallet: boolean;
        isSwapToWallet: boolean;
        isSwapFeeInPmx: boolean;
        tokenAtokenBOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
        pullOracleData: BytesLike[][];
        pullOracleTypes: BigNumberish[];
      },
      maximumOracleTolerableLimit: BigNumberish,
      needOracleTolerableLimitCheck: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapInLimitOrder(
      params: {
        depositAsset: string;
        positionAsset: string;
        depositAmount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        trader: string;
        deadline: BigNumberish;
        feeToken: string;
        keeperRewardDistributor: string;
        gasSpent: BigNumberish;
        depositPositionAssetOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
      },
      maximumOracleTolerableLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    traderBalanceVault(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whiteBlackList(overrides?: CallOverrides): Promise<[string]>;
  };

  initialize(
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeAfterUpgrade(
    _primexDNS: string,
    _traderBalanceVault: string,
    _priceOracle: string,
    _whiteBlackList: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  primexDNS(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  swap(
    params: {
      tokenA: string;
      tokenB: string;
      amountTokenA: BigNumberish;
      amountOutMin: BigNumberish;
      megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[];
      receiver: string;
      deadline: BigNumberish;
      isSwapFromWallet: boolean;
      isSwapToWallet: boolean;
      isSwapFeeInPmx: boolean;
      tokenAtokenBOracleData: BytesLike;
      pmxPositionAssetOracleData: BytesLike;
      nativePositionAssetOracleData: BytesLike;
      pullOracleData: BytesLike[][];
      pullOracleTypes: BigNumberish[];
    },
    maximumOracleTolerableLimit: BigNumberish,
    needOracleTolerableLimitCheck: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapInLimitOrder(
    params: {
      depositAsset: string;
      positionAsset: string;
      depositAmount: BigNumberish;
      megaRoutes: {
        shares: BigNumberish;
        routes: {
          to: string;
          paths: {
            dexName: string;
            shares: BigNumberish;
            payload: BytesLike;
          }[];
        }[];
      }[];
      trader: string;
      deadline: BigNumberish;
      feeToken: string;
      keeperRewardDistributor: string;
      gasSpent: BigNumberish;
      depositPositionAssetOracleData: BytesLike;
      pmxPositionAssetOracleData: BytesLike;
      nativePositionAssetOracleData: BytesLike;
    },
    maximumOracleTolerableLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  traderBalanceVault(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whiteBlackList(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    initialize(_registry: string, overrides?: CallOverrides): Promise<void>;

    initializeAfterUpgrade(
      _primexDNS: string,
      _traderBalanceVault: string,
      _priceOracle: string,
      _whiteBlackList: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    primexDNS(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swap(
      params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        amountOutMin: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
        isSwapFromWallet: boolean;
        isSwapToWallet: boolean;
        isSwapFeeInPmx: boolean;
        tokenAtokenBOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
        pullOracleData: BytesLike[][];
        pullOracleTypes: BigNumberish[];
      },
      maximumOracleTolerableLimit: BigNumberish,
      needOracleTolerableLimitCheck: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapInLimitOrder(
      params: {
        depositAsset: string;
        positionAsset: string;
        depositAmount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        trader: string;
        deadline: BigNumberish;
        feeToken: string;
        keeperRewardDistributor: string;
        gasSpent: BigNumberish;
        depositPositionAssetOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
      },
      maximumOracleTolerableLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    traderBalanceVault(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    whiteBlackList(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "PaidProtocolFee(address,address,uint8,uint256,uint256)"(
      trader?: string | null,
      boughtAsset?: string | null,
      feeRateType?: BigNumberish | null,
      feeInPositionAsset?: null,
      feeInPmx?: null
    ): TypedEventFilter<
      [string, string, number, BigNumber, BigNumber],
      {
        trader: string;
        boughtAsset: string;
        feeRateType: number;
        feeInPositionAsset: BigNumber;
        feeInPmx: BigNumber;
      }
    >;

    PaidProtocolFee(
      trader?: string | null,
      boughtAsset?: string | null,
      feeRateType?: BigNumberish | null,
      feeInPositionAsset?: null,
      feeInPmx?: null
    ): TypedEventFilter<
      [string, string, number, BigNumber, BigNumber],
      {
        trader: string;
        boughtAsset: string;
        feeRateType: number;
        feeInPositionAsset: BigNumber;
        feeInPmx: BigNumber;
      }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "SpotSwap(address,address,address,address,uint256,uint256)"(
      trader?: string | null,
      receiver?: string | null,
      tokenA?: null,
      tokenB?: null,
      amountSold?: null,
      amountBought?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, BigNumber],
      {
        trader: string;
        receiver: string;
        tokenA: string;
        tokenB: string;
        amountSold: BigNumber;
        amountBought: BigNumber;
      }
    >;

    SpotSwap(
      trader?: string | null,
      receiver?: string | null,
      tokenA?: null,
      tokenB?: null,
      amountSold?: null,
      amountBought?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, BigNumber],
      {
        trader: string;
        receiver: string;
        tokenA: string;
        tokenB: string;
        amountSold: BigNumber;
        amountBought: BigNumber;
      }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeAfterUpgrade(
      _primexDNS: string,
      _traderBalanceVault: string,
      _priceOracle: string,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    primexDNS(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        amountOutMin: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
        isSwapFromWallet: boolean;
        isSwapToWallet: boolean;
        isSwapFeeInPmx: boolean;
        tokenAtokenBOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
        pullOracleData: BytesLike[][];
        pullOracleTypes: BigNumberish[];
      },
      maximumOracleTolerableLimit: BigNumberish,
      needOracleTolerableLimitCheck: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapInLimitOrder(
      params: {
        depositAsset: string;
        positionAsset: string;
        depositAmount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        trader: string;
        deadline: BigNumberish;
        feeToken: string;
        keeperRewardDistributor: string;
        gasSpent: BigNumberish;
        depositPositionAssetOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
      },
      maximumOracleTolerableLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    traderBalanceVault(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whiteBlackList(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeAfterUpgrade(
      _primexDNS: string,
      _traderBalanceVault: string,
      _priceOracle: string,
      _whiteBlackList: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    primexDNS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      params: {
        tokenA: string;
        tokenB: string;
        amountTokenA: BigNumberish;
        amountOutMin: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        receiver: string;
        deadline: BigNumberish;
        isSwapFromWallet: boolean;
        isSwapToWallet: boolean;
        isSwapFeeInPmx: boolean;
        tokenAtokenBOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
        pullOracleData: BytesLike[][];
        pullOracleTypes: BigNumberish[];
      },
      maximumOracleTolerableLimit: BigNumberish,
      needOracleTolerableLimitCheck: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapInLimitOrder(
      params: {
        depositAsset: string;
        positionAsset: string;
        depositAmount: BigNumberish;
        megaRoutes: {
          shares: BigNumberish;
          routes: {
            to: string;
            paths: {
              dexName: string;
              shares: BigNumberish;
              payload: BytesLike;
            }[];
          }[];
        }[];
        trader: string;
        deadline: BigNumberish;
        feeToken: string;
        keeperRewardDistributor: string;
        gasSpent: BigNumberish;
        depositPositionAssetOracleData: BytesLike;
        pmxPositionAssetOracleData: BytesLike;
        nativePositionAssetOracleData: BytesLike;
      },
      maximumOracleTolerableLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    traderBalanceVault(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whiteBlackList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}