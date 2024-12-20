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
import type { NonPayableOverrides } from "../../common";
import type {
  PrimexProxyAdmin,
  PrimexProxyAdminInterface,
} from "../../contracts/PrimexProxyAdmin";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract UpgradeableBeacon",
        name: "beacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeBeaconProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyAdmin",
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
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyImplementation",
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
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract UpgradeableBeacon",
        name: "beacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgradeBeacon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0806040523461011e57602081610b1a803803809161001f8285610123565b83398101031261011e57516001600160a01b03811680820361011e5760206024916100493361015c565b6100523061015c565b6040516301ffc9a760e01b8152637965db0b60e01b600482015292839182905afa908115610112576000916100d1575b50156100bf5760805260405161097690816101a482396080518181816102110152818161032e01528181610458015281816105cc01526106970152f35b60405163044aa57560e41b8152600490fd5b6020813d821161010a575b816100e960209383610123565b810103126101065751908115158203610103575038610082565b80fd5b5080fd5b3d91506100dc565b6040513d6000823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b0382119082101761014657604052565b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604081815260048036101561001557600080fd5b600092833560e01c90848263204e1c7a146107205750508063715018a6146106c65780637b103999146106825780637eff275e14610580578063848bf9181461056f5780638da5cb5b146105475780639623609d146103b157806399a88ec4146102e8578063edf57887146101d4578063f2fde38b146101085763f3b7dead1461009e57600080fd5b34610104576020366003190112610104576001600160a01b039083908190836100c561075f565b86516303e1469160e61b815291165afa926100de610881565b931561010157506100f98360208080965183010191016108b1565b169051908152f35b80fd5b8280fd5b50346101045760203660031901126101045761012261075f565b9061012b610829565b6001600160a01b03918216928315610182575050600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b508290346102e4576101e536610790565b8451632474521560e21b81528381018590523360248201529194916001600160a01b03906020816044817f000000000000000000000000000000000000000000000000000000000000000086165afa9081156102da5786916102ac575b501561029d5780859616803b15610299578592836024928651978895869463f2fde38b60e01b865216908401525af190811561029057506102805750f35b610289906107c1565b6101015780f35b513d84823e3d90fd5b8580fd5b50505163036be76f60e61b8152fd5b6102cd915060203d81116102d3575b6102c581836107eb565b8101906108d0565b87610242565b503d6102bb565b84513d88823e3d90fd5b5080fd5b509190346102e457806003193601126102e45761030361075f565b61030b61077a565b8251632474521560e21b81528581018590523360248201529092906020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156103a7578591610389575b501561037a575090610377916108e8565b80f35b5163036be76f60e61b81528490fd5b6103a1915060203d81116102d3576102c581836107eb565b38610366565b82513d87823e3d90fd5b50829060603660031901126102e4576103c861075f565b926103d161077a565b916044359067ffffffffffffffff821161054357366023830112156105435781810135916103fe8361080d565b9261040b855194856107eb565b8084523660248284010111610509576024929181889260209586930183880137850101528351632474521560e21b81528181018790523360248201526001600160a01b03979083816044817f00000000000000000000000000000000000000000000000000000000000000008d165afa90811561053957889161051c575b501561050d57871696873b156105095784519563278f794360e11b87521690850152826024850152815191826044860152855b8381106104f55750505082849581606481858983819884010152601f8019910116810103019134905af190811561029057506102805750f35b8181018301518682016064015282016104bc565b8680fd5b50835163036be76f60e61b8152fd5b6105339150843d86116102d3576102c581836107eb565b89610489565b86513d8a823e3d90fd5b8480fd5b5050346102e457816003193601126102e457905490516001600160a01b039091168152602090f35b509190346102e45761030b36610790565b50903461010457806003193601126101045761059a61075f565b6105a261077a565b8251632474521560e21b81528481018690523360248201526001600160a01b0392906020816044817f000000000000000000000000000000000000000000000000000000000000000088165afa90811561067857879161065a575b501561064a5790828693921690813b156106465783602492865197889586946308f2839760e41b865216908401525af1908115610290575061063d575080f35b610377906107c1565b8380fd5b5050505163036be76f60e61b8152fd5b610672915060203d81116102d3576102c581836107eb565b386105fd565b85513d89823e3d90fd5b5050346102e457816003193601126102e457517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b83346101015780600319360112610101576106df610829565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b915091346102e45760203660031901126102e4576001600160a01b03928291908461074961075f565b635c60da1b60e01b8352165afa926100de610881565b600435906001600160a01b038216820361077557565b600080fd5b602435906001600160a01b038216820361077557565b6040906003190112610775576001600160a01b03906004358281168103610775579160243590811681036107755790565b67ffffffffffffffff81116107d557604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176107d557604052565b67ffffffffffffffff81116107d557601f01601f191660200190565b6000546001600160a01b0316330361083d57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b3d156108ac573d906108928261080d565b916108a060405193846107eb565b82523d6000602084013e565b606090565b9081602091031261077557516001600160a01b03811681036107755790565b90816020910312610775575180151581036107755790565b6001600160a01b039081169190823b15610775576024600092836040519586948593631b2ce7f360e11b85521660048401525af18015610934576109295750565b610932906107c1565b565b6040513d6000823e3d90fdfea26469706673582212202a20f6c8ea42734fec8bc1babf595218c1b0ff1134d47093de780eb01c22f54364736f6c63430008120033";

type PrimexProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrimexProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrimexProxyAdmin__factory extends ContractFactory {
  constructor(...args: PrimexProxyAdminConstructorParams) {
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
      PrimexProxyAdmin & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PrimexProxyAdmin__factory {
    return super.connect(runner) as PrimexProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrimexProxyAdminInterface {
    return new Interface(_abi) as PrimexProxyAdminInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PrimexProxyAdmin {
    return new Contract(address, _abi, runner) as unknown as PrimexProxyAdmin;
  }
}
