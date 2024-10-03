/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SynchronizationBotLensUniV3TestService,
  SynchronizationBotLensUniV3TestServiceInterface,
} from "../SynchronizationBotLensUniV3TestService";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUniswapV3Pool[]",
        name: "pools",
        type: "address[]",
      },
    ],
    name: "getArraySqrtPriceX96",
    outputs: [
      {
        internalType: "uint160[]",
        name: "arraySqrtPriceX96",
        type: "uint160[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
    ],
    name: "getUserBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeBalance",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "assetsBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouterUniV3",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputSingleParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "swapUniswapV3",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461001657610a08908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600060e0918135831c806382f8850f146106fa57806383dbfa461461057c5763f08642f81461004357600080fd5b346105785780600319360112610578576001600160a01b039380358581169391908490036105785760249467ffffffffffffffff908635828111610574573660238201121561057457808401359861009a8a61093f565b916100a788519384610907565b8a835260209a8a8c85019160081b8301019136831161039e579499948b01905b8282106104be57505050859273__$183737d697d7aa9b5df9988cbe11bc4947$__935b83518110156104ba5760a060001981610103848861097c565b5101511461043f575b898d898661011a868a61097c565b5151166101668561012b888c61097c565b510151945163c37f7f7f60e01b81526001600160a01b0390921692820192835233602084015260408301949094529283918291606090910190565b03818a5af480156103a9578e8a8f8e8a918f968a96610407575b508761019a8a8d610191828861097c565b5151169561097c565b510151915195869463095ea7b360e01b86528501528301528160449586925af1801561036a578f8f938f928f9095888f978c978e916103b3575b506101e662ffffff949392899261097c565b519583519963414bf38960e01b8b5282885116908b01528601511690880152830151169085015260609483868301511660648601526080820151608486015281015160a485015260c081015160c485015201511660e48201528d81610104818d885af180156103a9578e8e93928d92610374575b508a8780610268888c61097c565b51511694610276888c61097c565b510151169488610286888c61097c565b5151169351809481936370a0823160e01b835230908301525afa90811561036a578f8c9261033c575b5050873b15610338578b51636336129b60e11b81526001600160a01b03928316818c0190815292909316602083015260408201528990829081906060010381895af4801561032e5761030b575b5061030690610957565b6100ea565b86811161031c5789526103066102fc565b634e487b7160e01b8952604188528b89fd5b8a513d8b823e3d90fd5b8a80fd5b90809250813d8311610363575b6103538183610907565b810103126103385751388f6102af565b503d610349565b8c513d8d823e3d90fd5b9150809293503d83116103a2575b61038c8183610907565b8101031261039e578b908a8e3861025a565b8880fd5b503d610382565b8b513d8c823e3d90fd5b9750505050509350905081813d8311610400575b6103d18183610907565b81010312610338578c8f8f9362ffffff8f8e968b6101e68b8f6103f4849b6109a6565b509250929394506101d4565b503d6103c7565b9550505050508092503d8311610438575b6104228183610907565b8101031261039e5788838e8a8f8e8a9138610180565b503d610418565b8b8d8561044c858961097c565b5151168c51928380926370a0823160e01b82528d33908301525afa9081156103a9578a91610489575b5081610481848861097c565b51015261010c565b90508d81813d83116104b3575b6104a08183610907565b810103126104af575138610475565b8980fd5b503d610496565b8780f35b6101009a959a80833603126104af578a5190810181811089821117610562578b526104e8836108f3565b81528d6104f68185016108f3565b908201528a83013562ffffff81168103610338578b820152606061051b8185016108f3565b908201526080808401359082015260a0808401359082015260c080840135908201528683013585811681036103385787820152815294999461010091909101908c016100c7565b634e487b7160e01b8b5260418a528d8bfd5b8480fd5b5080fd5b509083346105785782600319360112610578578035916001600160a01b03808416918285036106f757602494853567ffffffffffffffff81116106f3576105ca9094939294369087016108bd565b92909131936105d88461093f565b976105e58a51998a610907565b8489526105f18561093f565b97602095868b0199601f1901368b37885b818110610651575050505050505085519460608601928652606082870152518092526080850193925b82811061063d57438787015285850386f35b83518552938101939281019260010161062b565b6106608183899c9a9b9c6109b3565b3586811680910361039e578985918f51928380926370a0823160e01b82528a898301525afa9081156106e957908d92918a916106b4575b506106a5826106ab9461097c565b52610957565b98979698610602565b809293508b8092503d83116106e2575b6106ce8183610907565b8101031261039e57518c91906106a5610697565b503d6106c4565b8e513d8b823e3d90fd5b8280fd5b80fd5b509290346106f757602090816003193601126106f757823567ffffffffffffffff8111610578578591846107328793369083016108bd565b9361073c8561093f565b9261074987519485610907565b8584526107558661093f565b8489019690601f1901368837855b8181106107b357505050505083519485948186019282875251809352850193925b82811061079357505050500390f35b83516001600160a01b031685528695509381019392810192600101610784565b6107c48183879c99989a9b9c6109b3565b6001600160a01b039035818116908190036108a85790858593928d5194858092633850c7bd60e01b82525afa9081156108b3578891610821575b610816935061080d838c61097c565b91169052610957565b989796949598610763565b919290508581813d83116108ac575b61083a8183610907565b810103126108a857805190828216820361039e57898101518060020b0361039e576108668d82016109c3565b50610873606082016109c3565b50610880608082016109c3565b5060a081015160ff81160361039e57906108a160c0610816959493016109a6565b50906107fe565b8780fd5b503d610830565b8c513d8a823e3d90fd5b9181601f840112156108ee5782359167ffffffffffffffff83116108ee576020808501948460051b0101116108ee57565b600080fd5b35906001600160a01b03821682036108ee57565b90601f8019910116810190811067ffffffffffffffff82111761092957604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116109295760051b60200190565b60001981146109665760010190565b634e487b7160e01b600052601160045260246000fd5b80518210156109905760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b519081151582036108ee57565b91908110156109905760051b0190565b519061ffff821682036108ee5756fea2646970667358221220258ecc6e768ea26cb316899ce0fe40a97b5dbf07bce26112eb9917ab7bab8cf264736f6c63430008120033";

type SynchronizationBotLensUniV3TestServiceConstructorParams =
  | [
      linkLibraryAddresses: SynchronizationBotLensUniV3TestServiceLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SynchronizationBotLensUniV3TestServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class SynchronizationBotLensUniV3TestService__factory extends ContractFactory {
  constructor(
    ...args: SynchronizationBotLensUniV3TestServiceConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        SynchronizationBotLensUniV3TestService__factory.linkBytecode(
          linkLibraryAddresses
        ),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: SynchronizationBotLensUniV3TestServiceLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$183737d697d7aa9b5df9988cbe11bc4947\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SynchronizationBotLensUniV3TestService> {
    return super.deploy(
      overrides || {}
    ) as Promise<SynchronizationBotLensUniV3TestService>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SynchronizationBotLensUniV3TestService {
    return super.attach(address) as SynchronizationBotLensUniV3TestService;
  }
  connect(signer: Signer): SynchronizationBotLensUniV3TestService__factory {
    return super.connect(
      signer
    ) as SynchronizationBotLensUniV3TestService__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SynchronizationBotLensUniV3TestServiceInterface {
    return new utils.Interface(
      _abi
    ) as SynchronizationBotLensUniV3TestServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SynchronizationBotLensUniV3TestService {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SynchronizationBotLensUniV3TestService;
  }
}

export interface SynchronizationBotLensUniV3TestServiceLibraryAddresses {
  ["contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"]: string;
}