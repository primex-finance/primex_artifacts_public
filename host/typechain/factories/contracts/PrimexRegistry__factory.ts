/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  PrimexRegistry,
  PrimexRegistryInterface,
} from "../../contracts/PrimexRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "isRoleForContractsOnly",
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
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
    ],
    name: "removeRolesForContractsOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "adminRole",
        type: "bytes32",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
    ],
    name: "setRolesForContractsOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
  "0x6080604052346101a257336000908152600080516020610b3b833981519152602052604090205460ff1615610150575b600080516020610b1b833981519152600081815260208190527fa5d5f486d4a8f263d69b5f6ac9c04129e5eb70e4cf808e9f46d26b2ca957e98980547fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b6391829055909290917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9080a47f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb600081815260208190527fac55d60145c2b1e72232130507b090ddd2cd26daa31eeab1e3e64b89140e668e8054600080516020610b1b83398151915291829055909290917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9080a460405161097390816101a88239f35b336000818152600080516020610b3b83398151915260205260408120805460ff1916600117905581907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a461002f565b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a714610403575080631e4e0091146103915780632052db5614610360578063248a9ca31461032b5780632f2ff15d1461024e57806336568abe146101ca57806391d148541461018a578063a217fddf1461016e578063a28f5a5614610123578063d547741f146100ea5763e2c69f381461009857600080fd5b346100e5576100a63661047c565b6100ae6104f6565b60005b8181106100ba57005b806100c860019284866104d0565b356000528160205260406000208260ff19825416179055016100b1565b600080fd5b346100e5576101216100fb36610456565b9061011c61011782600052600060205260016040600020015490565b610605565b610647565b005b346100e5576101313661047c565b6101396104f6565b60005b81811061014557005b8061015360019284866104d0565b3560005281602052604060002060ff1981541690550161013c565b346100e55760003660031901126100e557602060405160008152f35b346100e55761019836610456565b90600052600060205260406000209060018060a01b0316600052602052602060ff604060002054166040519015158152f35b346100e5576101d836610456565b336001600160a01b038216036101f15761012191610647565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b346100e55761025c36610456565b9080600052600160205260ff60406000205416610313575b61028f61011782600052600060205260016040600020015490565b6000818152602081815260408083206001600160a01b038616845290915290205460ff16156102ba57005b6000818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4005b813b610274576040516339cd1d6f60e11b8152600490fd5b346100e55760203660031901126100e5576020610358600435600052600060205260016040600020015490565b604051908152f35b346100e55760203660031901126100e5576004356000526001602052602060ff604060002054166040519015158152f35b346100e55760403660031901126100e5576024356004356103b06104f6565b6103c881600052600060205260016040600020015490565b90806000526000602052826001604060002001557fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff600080a4005b346100e55760203660031901126100e5576004359063ffffffff60e01b82168092036100e557602091637965db0b60e01b8114908115610445575b5015158152f35b6301ffc9a760e01b1490508361043e565b60409060031901126100e557600435906024356001600160a01b03811681036100e55790565b9060206003198301126100e55760043567ffffffffffffffff81116100e557826023820112156100e55780600401359267ffffffffffffffff84116100e55760248460051b830101116100e5576024019190565b91908110156104e05760051b0190565b634e487b7160e01b600052603260045260246000fd5b3360009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561052f57565b6105f76044603761053f33610751565b6105cf601161054e6000610891565b60405194859160208301957f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000875261058f81518092602086880191016106c9565b83017001034b99036b4b9b9b4b733903937b6329607d1b838201526105be8251809360206048850191016106c9565b01010301601f1981018452836106ec565b60405193849262461bcd60e51b845260206004850152518092816024860152858501906106c9565b601f01601f19168101030190fd5b60008181526020818152604080832033845290915290205460ff16156106285750565b604460376105f7926105cf601161054e61064133610751565b93610891565b6000818152602081815260408083206001600160a01b038616845290915290205460ff16610673575050565b6000818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4565b60005b8381106106dc5750506000910152565b81810151838201526020016106cc565b90601f8019910116810190811067ffffffffffffffff82111761070e57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161070e57601f01601f191660200190565b9081518110156104e0570160200190565b60009061075e602a610724565b9161076c60405193846106ec565b602a835261077a602a610724565b6020840190601f190136823783511561087d5760309053825160011015610869576078602184015350602960005b600182116107fd5750506107b95790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015610855576f181899199a1a9b1b9c1cb0b131b232b360811b901a61082c8486610740565b5360041c9180156108415760001901906107a8565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b82526032600452602482fd5b60009061089e6042610724565b916108ac60405193846106ec565b604283526108ba6042610724565b6020840190601f190136823783511561087d5760309053825160011015610869576078602184015350604160005b600182116108f95750506107b95790565b9091600f81166010811015610855576f181899199a1a9b1b9c1cb0b131b232b360811b901a6109288486610740565b5360041c9180156108415760001901906108e856fea26469706673582212201939c61dee9ebfd268efcb3a1439faea39bf7cadf1a529ed90f25abd786b960464736f6c634300081a00335a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5";

type PrimexRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrimexRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrimexRegistry__factory extends ContractFactory {
  constructor(...args: PrimexRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PrimexRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PrimexRegistry__factory {
    return super.connect(runner) as PrimexRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrimexRegistryInterface {
    return new Interface(_abi) as PrimexRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PrimexRegistry {
    return new Contract(address, _abi, runner) as unknown as PrimexRegistry;
  }
}
