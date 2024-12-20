/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TakeProfitStopLossCCM,
  TakeProfitStopLossCCMInterface,
} from "../../../contracts/conditionalManagers/TakeProfitStopLossCCM";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DS_MATH_ADD_OVERFLOW",
    type: "error",
  },
  {
    inputs: [],
    name: "DS_MATH_MUL_OVERFLOW",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
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
        internalType: "struct PositionLibrary.Position",
        name: "_position",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_params",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_closeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_borowedAssetAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_positionSoldAssetOracleData",
        type: "bytes",
      },
    ],
    name: "canBeClosedAfterSwap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_params",
        type: "bytes",
      },
    ],
    name: "getTakeProfitStopLossPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_primexDNS",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "struct PositionLibrary.Position",
        name: "_position",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_stopLossPrice",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_positionSoldAssetOracleData",
        type: "bytes",
      },
    ],
    name: "isStopLossReached",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_params",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "oracleExchangeRate",
        type: "uint256",
      },
    ],
    name: "isStopLossReached",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_params",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "exchangeRate",
        type: "uint256",
      },
    ],
    name: "isTakeProfitReached",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "priceOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primexDNS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a080604052346100f857602081610c37803803809161001f82856100fd565b8339810103126100f857516001600160a01b0381168082036100f8576040516301ffc9a760e01b8152637965db0b60e01b600482015290602090829060249082905afa9081156100ec576000916100ab575b501561009957608052604051610b009081610137823960805181818161014401526103110152f35b60405163044aa57560e41b8152600490fd5b6020813d82116100e4575b816100c3602093836100fd565b810103126100e057519081151582036100dd575038610071565b80fd5b5080fd5b3d91506100b6565b6040513d6000823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b0382119082101761012057604052565b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a7146105f4575081632630c12f146105cb5781633f4a2d271461059f57816347ba217414610568578163485cc955146102875781636370e1ad146101ed578163767bb906146101735781637b1039991461012f578163a4559767146100c2575063d99a55071461009357600080fd5b346100be576020906100b3826100a836610692565b9391908101906107c9565b015110159051908152f35b5080fd5b82843461012c576003196060368201126100be5783359167ffffffffffffffff918284116100be5761018090843603011261012c5760443591821161012c575092610123916101166020953690840161065f565b92909160243591016109e5565b90519015158152f35b80fd5b5050346100be57816003193601126100be57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b839150346100be5760203660031901126100be57803567ffffffffffffffff81116101e9576101a49136910161065f565b918351906101b1826106c5565b808252602082015291806101d5575b50506020815191015182519182526020820152f35b6101e292508101906107c9565b82806101c0565b8280fd5b82846003199260c0843601126100be5780359067ffffffffffffffff94858311610283576101809083360301126101e95760243585811161028357610235903690830161065f565b9590936044358281116100be5761024f903690850161065f565b505060a43591821161012c5750916101239391610272602097943690830161065f565b9490936084359360643593016107f1565b8380fd5b9050346101e957816003193601126101e9578035916001600160a01b039182841680850361056457602435918483168093036105605786549160ff8360081c161592838094610553575b801561053c575b156104e25760ff1981166001178955836104d1575b5084518096632474521560e21b825289848301523360248301528160446020998a937f0000000000000000000000000000000000000000000000000000000000000000165afa90811561049b5789916104b4575b50156104a55784519086826024816301ffc9a760e01b9485825263081e57a760e31b888301525afa91821561049b57899261047c575b5081610415575b50156104075750855462010000600160b01b0319811660109690961b62010000600160b01b03169586178755600180546001600160a01b0319169093179092559093906103c9578480f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249893610100600160b01b0319161784555160018152a1388080808480f35b835163044aa57560e41b8152fd5b85519081526333ca6d2360e21b8382015290508581602481875afa908115610472578891610445575b503861037e565b6104659150863d881161046b575b61045d81836106f7565b810190610719565b3861043e565b503d610453565b85513d8a823e3d90fd5b610494919250873d891161046b5761045d81836106f7565b9038610377565b86513d8b823e3d90fd5b50835163036be76f60e61b8152fd5b6104cb9150873d891161046b5761045d81836106f7565b38610341565b61ffff1916610101178855386102ed565b855162461bcd60e51b8152602081850152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156102d85750600160ff8216146102d8565b50600160ff8216106102d1565b8680fd5b8580fd5b82843461012c57602061057e836100a836610692565b51918215159283610594575b5050519015158152f35b11159150838061058a565b5050346100be57816003193601126100be579054905160109190911c6001600160a01b03168152602090f35b5050346100be57816003193601126100be5760015490516001600160a01b039091168152602090f35b8491346101e95760203660031901126101e9573563ffffffff60e01b81168091036101e957602092506301ffc9a760e01b811490811561064e575b811561063d575b5015158152f35b630452934760e01b14905083610636565b636370e1ad60e01b8114915061062f565b9181601f8401121561068d5782359167ffffffffffffffff831161068d576020838186019501011161068d57565b600080fd5b604060031982011261068d576004359067ffffffffffffffff821161068d576106bd9160040161065f565b909160243590565b6040810190811067ffffffffffffffff8211176106e157604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176106e157604052565b9081602091031261068d5751801515810361068d5790565b356001600160a01b038116810361068d5790565b9081602091031261068d575160ff8116810361068d5790565b60ff166012039060ff821161076f57565b634e487b7160e01b600052601160045260246000fd5b60ff16604d811161076f57600a0a90565b8181029291811591840414171561076f57565b81156107b3570490565b634e487b7160e01b600052601260045260246000fd5b9081604091031261068d576020604051916107e3836106c5565b803583520135602082015290565b92959493919586156109d9576001600160a01b03908161081360608701610731565b169060409182519586918263313ce56760e01b918282526020998a9160049687915afa9081156109ce576108548a92610859926000916109b7575b5061075e565b610785565b9661086660a08c01610731565b16918487518094819382525afa9081156109ac57866108976108546108a3959461089d9460009161097f575061075e565b92610796565b93610796565b92670de0b6b3a7640000928381029381850481148215171561096a5784040361095d578360011c83019283811161094857831061093b575050916108ee6108f3926108fc95946107a9565b6107a9565b968101906107c9565b80518015159687610930575b50508515610919575b505050505090565b61092695500151906109e5565b3880808080610911565b101595503880610908565b51630a77254f60e01b8152fd5b601183634e487b7160e01b6000525260246000fd5b51631550e8b760e01b8152fd5b601184634e487b7160e01b6000525260246000fd5b61099f91508d803d106109a5575b61099781836106f7565b810190610745565b3861084e565b503d61098d565b85513d6000823e3d90fd5b61099f9150843d86116109a55761099781836106f7565b86513d6000823e3d90fd5b50505050505050600090565b9190918215610ac1576001546001600160a01b0394602092869283169180610a1b6060610a1460a08601610731565b9401610731565b96604051998a988997889663416be2f360e01b88521660048701521660248501526060604485015281606485015260848401376084600098828a83819584010152601f801991011681010301925af1928315610ab5578093610a7f575b5050101590565b909192506020823d8211610aad575b81610a9b602093836106f7565b8101031261012c575051903880610a78565b3d9150610a8e565b604051903d90823e3d90fd5b5050505060009056fea2646970667358221220fa8186eb84d5afba6f6064b012f21bab95f640b645820d377a4479515a701d6564736f6c63430008120033";

type TakeProfitStopLossCCMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TakeProfitStopLossCCMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TakeProfitStopLossCCM__factory extends ContractFactory {
  constructor(...args: TakeProfitStopLossCCMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_registry, overrides || {});
  }
  override deploy(
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_registry, overrides || {}) as Promise<
      TakeProfitStopLossCCM & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TakeProfitStopLossCCM__factory {
    return super.connect(runner) as TakeProfitStopLossCCM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TakeProfitStopLossCCMInterface {
    return new Interface(_abi) as TakeProfitStopLossCCMInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TakeProfitStopLossCCM {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TakeProfitStopLossCCM;
  }
}
