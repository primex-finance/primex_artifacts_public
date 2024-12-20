/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPositionManagerEvents,
  IPositionManagerEventsInterface,
} from "../../../contracts/PositionManager/IPositionManagerEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scaledDebtAmount",
        type: "uint256",
      },
    ],
    name: "DecreaseDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_keeperRewardDistributor",
        type: "address",
      },
    ],
    name: "KeeperRewardDistributorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "maintenanceBuffer",
        type: "uint256",
      },
    ],
    name: "MaintenanceBufferChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "openedBy",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "scaledDebtAmount",
            type: "uint256",
          },
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "address",
            name: "soldAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmountInSoldAsset",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "positionAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "positionAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "openBorrowIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedConditionsAt",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraParams",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct PositionLibrary.Position",
        name: "position",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entryPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leverage",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LimitOrderLibrary.Condition[]",
        name: "closeConditions",
        type: "tuple[]",
      },
    ],
    name: "OpenPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newMultiplier",
        type: "uint256",
      },
    ],
    name: "OracleTolerableLimitMultiplierChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bucketAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "soldAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "positionAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decreasePositionAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scaledDebtAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "profit",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "positionDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "PartialClosePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "securityBuffer",
        type: "uint256",
      },
    ],
    name: "SecurityBufferChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "oracleTolerableLimit",
        type: "uint256",
      },
    ],
    name: "SetDefaultOracleTolerableLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountInToken0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountInToken1",
        type: "uint256",
      },
    ],
    name: "SetMaxPositionSize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "assetA",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assetB",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oracleTolerableLimit",
        type: "uint256",
      },
    ],
    name: "SetOracleTolerableLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "positionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct LimitOrderLibrary.Condition[]",
        name: "closeConditions",
        type: "tuple[]",
      },
    ],
    name: "UpdatePositionConditions",
    type: "event",
  },
] as const;

export class IPositionManagerEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IPositionManagerEventsInterface {
    return new Interface(_abi) as IPositionManagerEventsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPositionManagerEvents {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPositionManagerEvents;
  }
}
