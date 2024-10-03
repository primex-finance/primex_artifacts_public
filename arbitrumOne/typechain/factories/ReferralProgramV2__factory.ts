/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReferralProgramV2,
  ReferralProgramV2Interface,
} from "../ReferralProgramV2";

const _abi = [
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "parent",
        type: "address",
      },
    ],
    name: "RegisteredUser",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referral",
        type: "address",
      },
    ],
    name: "SetReferralByAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "SetReferrerByAdmin",
    type: "event",
  },
  {
    inputs: [],
    name: "MAGIC_MESSAGE",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "getReferralsOf",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    name: "getReferralsOfLength",
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
    name: "getReferrers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "referralsOf",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "referrerOf",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "referrers",
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
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "register",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "referrals",
            type: "address[]",
          },
        ],
        internalType: "struct IReferralProgramStorage.ReferralProgramUnit[]",
        name: "referralProgramUnits",
        type: "tuple[]",
      },
    ],
    name: "setReferrals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "testUpgrade",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
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
];

const _bytecode =
  "0x608080604052346100c1576000549060ff8260081c1661006f575060ff80821603610034575b6040516111de90816100c78239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610025565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301c7224f14610ca95750816301ffc9a714610c535781632f0ae3be14610c1b5781633fa4f24514610bfc5781634b02c01714610895578163552410771461087b578163552f79251461084a5781635fb4f8b4146107f15781637b103999146107c857816382fbdc9c1461048a5781638f6a98e5146104045781639d6aed0b146103b3578163c4d66de81461019157508063d21cacdf146101575763f743d89c146100ca57600080fd5b34610153576020908160031936011261014f576001600160a01b0392836100ef610d2f565b16815260358352818120938251908194808754938481520196845280842093915b838310610136576101328787610128828c0383610d7c565b5191829182610e2b565b0390f35b8454811688529681019660019485019490920191610110565b8280fd5b5080fd5b5034610153576020366003190112610153576020916001600160a01b0390829082610180610d2f565b168152603485522054169051908152f35b9190503461014f57602090816003193601126103af576101af610d2f565b84549060ff8260081c1615918280936103a2575b801561038b575b156103315760ff198116600117875582610320575b5082516301ffc9a760e01b8152637965db0b60e01b868201526001600160a01b0391909116908481602481855afa9081156103165787916102e9575b50156102d9576001600160601b0360a01b603354161760335584549360ff8560081c1615610282575061024c578380f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989261ff00191684555160018152a13880808380f35b825162461bcd60e51b8152908101849052602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b825163044aa57560e41b81528590fd5b6103099150853d871161030f575b6103018183610d7c565b810190610e6f565b3861021b565b503d6102f7565b84513d89823e3d90fd5b61ffff1916610101178655386101df565b835162461bcd60e51b8152808701869052602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156101ca5750600160ff8216146101ca565b50600160ff8216106101c3565b8380fd5b5050346101535781600319360112610153578051610132916103d482610d4a565b60118252702932b332b93930b6283937b3b930b6ab1960791b602083015251918291602083526020830190610e06565b8284346104875780600319360112610487578151918291603654808552602080950194603683527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b892905b828210610467576101328686610128828b0383610d7c565b83546001600160a01b03168752958601956001938401939091019061044f565b80fd5b9190503461014f576020806003193601126103af57823567ffffffffffffffff8082116107c457366023830112156107c457818501359081116107c45736602482840101116107c45733865260348352838620546001600160a01b0390811615806107b2575b156107a257846104fe610dba565b9388868651958697837a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000808a1015610795575b506d04ee2d6d415b85acef8100000000808b1015610789575b50662386f26fc10000808b101561077c575b506305f5e100808b101561076f575b508c612710808c1015610763575b505060648a1015610755575b600a809a101561074d575b6001998a8201998b61059c8c610d9e565b9b8a519c6105aa908e610d7c565b808d526105b690610d9e565b8c88019490601f19013686378c01602101905b61071e575b505050916024610677998293610645603a8b9a99989761066f9c519384916106228b8401977f19457468657265756d205369676e6564204d6573736167653a0a000000000000895251809286860190610de3565b8201610636825180938d8785019101610de3565b0103601a810184520182610d7c565b5190209561065e61065584610d9e565b98519889610d7c565b828852018387013784010152611040565b929092610f26565b8116948533146107105750916035916106cf94938688526037835284882080549260ff8416156106f7575b5050505033865260348152828620856001600160601b0360a01b8254161790558486525233908420610eeb565b337fefca3fdd715e739f1e080ddc77892fc7ccce29dc771f8b664f46554d69efda4c8380a380f35b6107079360ff1916179055610e87565b388080806106a2565b845163636e39bb60e01b8152fd5b600019019082906f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304908c826105c957506105ce565b60010161058b565b986064600291049901610580565b909a0499018c38610574565b6008919a04990138610566565b6010919a04990138610557565b84919a04990138610545565b890499508690503861052c565b84516357799e4160e11b81528690fd5b506037845260ff8588205416156104f0565b8580fd5b50503461015357816003193601126101535760335490516001600160a01b039091168152602090f35b50503461015357806003193601126101535761080b610d2f565b6001600160a01b039081168352603560205281832080546024359490851015610487575060209361083b91610d01565b92905490519260031b1c168152f35b50503461015357816003193601126101535761013290610868610dba565b9051918291602083526020830190610e06565b839034610153576020366003190112610153573560385580f35b9190503461014f57602090816003193601126103af5767ffffffffffffffff9280358481116107c457366023820112156107c457808201359485116107c4576024810190602436918760051b0101116107c4576033548351632474521560e21b81527fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b63818501523360248201526001600160a01b03939186908290604490829088165afa908115610bf2578891610bd5575b5015610bc75750855b85811061095b578680f35b61097261096982888561112c565b8681019061114e565b9050610a4b575b808361099161098c6109b2948a8761112c565b611194565b168852603780875260ff868a2054161580610a29575b6109b7575b50611107565b610950565b846109c661098c848b8861112c565b1689528652848820805460ff191660011790556109ef6109ea61098c838a8761112c565b610e87565b836109fe61098c838a8761112c565b167fbfb9522d943541239ac4c4e0128e95a98f1fd3682b2a597ee1da3a62f0ea94d38980a2386109ac565b5084610a3961098c848b8861112c565b168952603587528589205415156109a7565b94959283949291945b610a6b610a62888a8961112c565b8581019061114e565b9050811015610bba578083610a9d61098c610ac894610a97610a8e8d8f8e61112c565b8a81019061114e565b90611184565b16865286848a8a8885888c60349485855287838320541615610acd575b505050505050505050611107565b610a54565b8689898585610b859a8a84610b50819f8d61098c9f610969610a979f610b7c9f948f9161098c8f8381610b45610a9799610b3f8f8d61098c9f610b4a9a610a979161098c948f9b61098c8d8d610b229361112c565b168152603587522094610b368a8a8a61112c565b9081019061114e565b90610eeb565b61112c565b9d61112c565b168352522091166001600160601b0360a01b825416179055610b7661098c83838d61112c565b9961112c565b8c81019061114e565b1691167f9b2b789e1f5ce0bc7ab2b2d2d787af0f1638d8bd218759d6abdb1f5ef10f932d8880a386848a388885888c8f610aba565b5092959491939091610979565b835163036be76f60e61b8152fd5b610bec9150863d881161030f576103018183610d7c565b38610947565b85513d8a823e3d90fd5b5050346101535781600319360112610153576020906038549051908152f35b5050346101535760203660031901126101535760209181906001600160a01b03610c43610d2f565b1681526035845220549051908152f35b90503461014f57602036600319011261014f57359063ffffffff60e01b821680920361014f57602092506301ffc9a760e01b8214918215610c98575b50519015158152f35b63168334a960e21b14915038610c8f565b84913461014f57602036600319011261014f573560365481101561014f5760369092527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b8909101546001600160a01b03168152602090f35b8054821015610d195760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b600435906001600160a01b0382168203610d4557565b600080fd5b6040810190811067ffffffffffffffff821117610d6657604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610d6657604052565b67ffffffffffffffff8111610d6657601f01601f191660200190565b60405190610dc782610d4a565b600d82526c526566657272616c206c696e6b60981b6020830152565b60005b838110610df65750506000910152565b8181015183820152602001610de6565b90602091610e1f81518092818552858086019101610de3565b601f01601f1916010190565b6020908160408183019282815285518094520193019160005b828110610e52575050505090565b83516001600160a01b031685529381019392810192600101610e44565b90816020910312610d4557518015158103610d455790565b603654600160401b811015610d66576001810180603655811015610d195760366000527f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b80180546001600160a01b0319166001600160a01b03909216919091179055565b8054600160401b811015610d6657610f0891600182018155610d01565b819291549060031b9160018060a01b03809116831b921b1916179055565b600581101561102a5780610f375750565b60018103610f845760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b60028103610fd15760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b600314610fda57565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b90604181511460001461106e5761106a916020820151906060604084015193015160001a90611078565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116110fb5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156110ee5781516001600160a01b038116156110e8579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b60001981146111165760010190565b634e487b7160e01b600052601160045260246000fd5b9190811015610d195760051b81013590603e1981360301821215610d45570190565b903590601e1981360301821215610d45570180359067ffffffffffffffff8211610d4557602001918160051b36038313610d4557565b9190811015610d195760051b0190565b356001600160a01b0381168103610d45579056fea26469706673582212206d028d5e2a64b996943df06db9c9d1ae40ca4040cbbb1a3991fd964bcbc1b23964736f6c63430008120033";

export class ReferralProgramV2__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReferralProgramV2> {
    return super.deploy(overrides || {}) as Promise<ReferralProgramV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReferralProgramV2 {
    return super.attach(address) as ReferralProgramV2;
  }
  connect(signer: Signer): ReferralProgramV2__factory {
    return super.connect(signer) as ReferralProgramV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReferralProgramV2Interface {
    return new utils.Interface(_abi) as ReferralProgramV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReferralProgramV2 {
    return new Contract(address, _abi, signerOrProvider) as ReferralProgramV2;
  }
}