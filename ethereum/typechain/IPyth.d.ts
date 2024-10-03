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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPythInterface extends ethers.utils.Interface {
  functions: {
    "getEmaPrice(bytes32)": FunctionFragment;
    "getEmaPriceNoOlderThan(bytes32,uint256)": FunctionFragment;
    "getEmaPriceUnsafe(bytes32)": FunctionFragment;
    "getPrice(bytes32)": FunctionFragment;
    "getPriceNoOlderThan(bytes32,uint256)": FunctionFragment;
    "getPriceUnsafe(bytes32)": FunctionFragment;
    "getUpdateFee(bytes[])": FunctionFragment;
    "getValidTimePeriod()": FunctionFragment;
    "parsePriceFeedUpdates(bytes[],bytes32[],uint64,uint64)": FunctionFragment;
    "parsePriceFeedUpdatesUnique(bytes[],bytes32[],uint64,uint64)": FunctionFragment;
    "updatePriceFeeds(bytes[])": FunctionFragment;
    "updatePriceFeedsIfNecessary(bytes[],bytes32[],uint64[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getEmaPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmaPriceNoOlderThan",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmaPriceUnsafe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getPriceNoOlderThan",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceUnsafe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpdateFee",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getValidTimePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "parsePriceFeedUpdates",
    values: [BytesLike[], BytesLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "parsePriceFeedUpdatesUnique",
    values: [BytesLike[], BytesLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeeds",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeedsIfNecessary",
    values: [BytesLike[], BytesLike[], BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEmaPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmaPriceNoOlderThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmaPriceUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceNoOlderThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpdateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getValidTimePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parsePriceFeedUpdates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parsePriceFeedUpdatesUnique",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeedsIfNecessary",
    data: BytesLike
  ): Result;

  events: {
    "BatchPriceFeedUpdate(uint16,uint64)": EventFragment;
    "PriceFeedUpdate(bytes32,uint64,int64,uint64)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BatchPriceFeedUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceFeedUpdate"): EventFragment;
}

export type BatchPriceFeedUpdateEvent = TypedEvent<
  [number, BigNumber] & { chainId: number; sequenceNumber: BigNumber }
>;

export type PriceFeedUpdateEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    id: string;
    publishTime: BigNumber;
    price: BigNumber;
    conf: BigNumber;
  }
>;

export class IPyth extends BaseContract {
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

  interface: IPythInterface;

  functions: {
    getEmaPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      }
    >;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      }
    >;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      }
    >;

    getPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      }
    >;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      }
    >;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      }
    >;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { feeAmount: BigNumber }>;

    getValidTimePeriod(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { validTimePeriod: BigNumber }>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    parsePriceFeedUpdatesUnique(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getEmaPrice(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      price: BigNumber;
      conf: BigNumber;
      expo: number;
      publishTime: BigNumber;
    }
  >;

  getEmaPriceNoOlderThan(
    id: BytesLike,
    age: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      price: BigNumber;
      conf: BigNumber;
      expo: number;
      publishTime: BigNumber;
    }
  >;

  getEmaPriceUnsafe(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      price: BigNumber;
      conf: BigNumber;
      expo: number;
      publishTime: BigNumber;
    }
  >;

  getPrice(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      price: BigNumber;
      conf: BigNumber;
      expo: number;
      publishTime: BigNumber;
    }
  >;

  getPriceNoOlderThan(
    id: BytesLike,
    age: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      price: BigNumber;
      conf: BigNumber;
      expo: number;
      publishTime: BigNumber;
    }
  >;

  getPriceUnsafe(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number, BigNumber] & {
      price: BigNumber;
      conf: BigNumber;
      expo: number;
      publishTime: BigNumber;
    }
  >;

  getUpdateFee(
    updateData: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  parsePriceFeedUpdates(
    updateData: BytesLike[],
    priceIds: BytesLike[],
    minPublishTime: BigNumberish,
    maxPublishTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  parsePriceFeedUpdatesUnique(
    updateData: BytesLike[],
    priceIds: BytesLike[],
    minPublishTime: BigNumberish,
    maxPublishTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePriceFeeds(
    updateData: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePriceFeedsIfNecessary(
    updateData: BytesLike[],
    priceIds: BytesLike[],
    publishTimes: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEmaPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        price: BigNumber;
        conf: BigNumber;
        expo: number;
        publishTime: BigNumber;
      }
    >;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        price: BigNumber;
        conf: BigNumber;
        expo: number;
        publishTime: BigNumber;
      }
    >;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        price: BigNumber;
        conf: BigNumber;
        expo: number;
        publishTime: BigNumber;
      }
    >;

    getPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        price: BigNumber;
        conf: BigNumber;
        expo: number;
        publishTime: BigNumber;
      }
    >;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        price: BigNumber;
        conf: BigNumber;
        expo: number;
        publishTime: BigNumber;
      }
    >;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        price: BigNumber;
        conf: BigNumber;
        expo: number;
        publishTime: BigNumber;
      }
    >;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        },
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        id: string;
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
        emaPrice: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      })[]
    >;

    parsePriceFeedUpdatesUnique(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        },
        [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        }
      ] & {
        id: string;
        price: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
        emaPrice: [BigNumber, BigNumber, number, BigNumber] & {
          price: BigNumber;
          conf: BigNumber;
          expo: number;
          publishTime: BigNumber;
        };
      })[]
    >;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BatchPriceFeedUpdate(uint16,uint64)"(
      chainId?: null,
      sequenceNumber?: null
    ): TypedEventFilter<
      [number, BigNumber],
      { chainId: number; sequenceNumber: BigNumber }
    >;

    BatchPriceFeedUpdate(
      chainId?: null,
      sequenceNumber?: null
    ): TypedEventFilter<
      [number, BigNumber],
      { chainId: number; sequenceNumber: BigNumber }
    >;

    "PriceFeedUpdate(bytes32,uint64,int64,uint64)"(
      id?: BytesLike | null,
      publishTime?: null,
      price?: null,
      conf?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      { id: string; publishTime: BigNumber; price: BigNumber; conf: BigNumber }
    >;

    PriceFeedUpdate(
      id?: BytesLike | null,
      publishTime?: null,
      price?: null,
      conf?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      { id: string; publishTime: BigNumber; price: BigNumber; conf: BigNumber }
    >;
  };

  estimateGas: {
    getEmaPrice(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    parsePriceFeedUpdatesUnique(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEmaPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValidTimePeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    parsePriceFeedUpdatesUnique(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}