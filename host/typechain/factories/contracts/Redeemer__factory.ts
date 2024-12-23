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
import type { Redeemer, RedeemerInterface } from "../../contracts/Redeemer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_earlyPmx",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pmx",
        type: "address",
      },
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
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AdminClaimedEarlyTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AdminClaimedRegularTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "RateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "changeRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "earlyPmx",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
  {
    inputs: [],
    name: "pmx",
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
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0806040523461021557606081610a9f803803809161001f828561021a565b8339810103126102155761003281610253565b61004a604061004360208501610253565b9301610253565b6000805460ff1916905560018055670de0b6b3a76400006002556040516301ffc9a760e01b815263ede5d28360e01b60048201526020816024816001600160a01b0387165afa908115610189576000916101f6575b5080610195575b80610118575b156101065760805260a05260c05260405161081f9081610280823960805181818161038001528181610455015281816104bb0152610614015260a05181818160c00152610593015260c051818181610183015261071d0152f35b60405163044aa57560e41b8152600490fd5b506040516301ffc9a760e01b8152637965db0b60e01b60048201526020816024816001600160a01b0386165afa9081156101895760009161015a575b506100ac565b61017c915060203d602011610182575b610174818361021a565b810190610267565b38610154565b503d61016a565b6040513d6000823e3d90fd5b506040516301ffc9a760e01b81526336372b0760e01b60048201526020816024816001600160a01b0388165afa908115610189576000916101d7575b506100a6565b6101f0915060203d60201161018257610174818361021a565b386101d1565b61020f915060203d60201161018257610174818361021a565b3861009f565b600080fd5b601f909101601f19168101906001600160401b0382119082101761023d57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361021557565b9081602091031261021557518015158103610215579056fe608080604052600436101561001357600080fd5b600090813560e01c9081630460f0f314610709575080632c4e722e146106eb5780633f4ba83a146105c257806350a5cdeb1461057d5780635c975abb1461055b57806374e7493b146104845780637b1039991461043f5780638456cb591461032e5763be040fb01461008457600080fd5b3461022f578060031936011261022f576002600154146102e95760026001556100ab6107a5565b6040516370a0823160e01b81523360048201527f000000000000000000000000000000000000000000000000000000000000000091906001600160a01b03831690602081602481855afa9081156102565783916102b3575b5060405163c37f7f7f60e01b81526001600160a01b039490941660048501523360248501526044840181905273__$183737d697d7aa9b5df9988cbe11bc4947$__93602081606481885af480156102a857610279575b5060025480820290828204148215171561026557843b1561026157604051636336129b60e11b81527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166004820152336024820152670de0b6b3a76400009091046044820152938390859060649082905af4801561025657610241575b829350813b1561023d578291602483926040519485938492630852cd8d60e31b845260048401525af180156102325761021a575b506001805580f35b8161022491610750565b61022f578038610212565b80fd5b6040513d84823e3d90fd5b5050fd5b9190928161024e91610750565b9082906101de565b6040513d85823e3d90fd5b8380fd5b634e487b7160e01b84526011600452602484fd5b6020813d6020116102a0575b8161029260209383610750565b810103126102615751610159565b3d9150610285565b6040513d86823e3d90fd5b90506020813d6020116102e1575b816102ce60209383610750565b810103126102dd575138610103565b8280fd5b3d91506102c1565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b503461022f578060031936011261022f57604051632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb60048201523360248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610232578291610410575b50156103fe576103c66107a5565b600160ff198254161781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b60405163036be76f60e61b8152600490fd5b610432915060203d602011610438575b61042a8183610750565b810190610788565b386103b8565b503d610420565b503461022f578060031936011261022f576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461022f57602036600319011261022f57604051632474521560e21b8152600481810183905233602483015235906020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561025657839161053c575b50156103fe57801561052a57806002557f595a30f13a69b616c4d568e2a2b7875fdfe86e4300a049953c76ee278f8f3f108280a280f35b6040516302eb41cf60e51b8152600490fd5b610555915060203d6020116104385761042a8183610750565b386104f3565b503461022f578060031936011261022f5760ff60209154166040519015158152f35b503461022f578060031936011261022f576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461022f578060031936011261022f57604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d860048201523360248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156102325782916106cc575b50156103fe57805460ff8116156106905760ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b6106e5915060203d6020116104385761042a8183610750565b3861064c565b503461022f578060031936011261022f576020600254604051908152f35b90503461074c578160031936011261074c577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b90601f8019910116810190811067ffffffffffffffff82111761077257604052565b634e487b7160e01b600052604160045260246000fd5b908160209103126107a0575180151581036107a05790565b600080fd5b60ff600054166107b157565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fdfea264697066735822122032fb4f862debb95a645bf685772b885265c06e58c8563964a842283b22b4968d64736f6c634300081a0033";

type RedeemerConstructorParams =
  | [linkLibraryAddresses: RedeemerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedeemerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Redeemer__factory extends ContractFactory {
  constructor(...args: RedeemerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Redeemer__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: RedeemerLibraryAddresses): string {
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

  override getDeployTransaction(
    _earlyPmx: AddressLike,
    _pmx: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _earlyPmx,
      _pmx,
      _registry,
      overrides || {}
    );
  }
  override deploy(
    _earlyPmx: AddressLike,
    _pmx: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_earlyPmx, _pmx, _registry, overrides || {}) as Promise<
      Redeemer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Redeemer__factory {
    return super.connect(runner) as Redeemer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemerInterface {
    return new Interface(_abi) as RedeemerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Redeemer {
    return new Contract(address, _abi, runner) as unknown as Redeemer;
  }
}

export interface RedeemerLibraryAddresses {
  ["contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"]: string;
}
