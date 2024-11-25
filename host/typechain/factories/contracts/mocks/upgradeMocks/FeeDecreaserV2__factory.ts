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
import type { NonPayableOverrides } from "../../../../common";
import type {
  FeeDecreaserV2,
  FeeDecreaserV2Interface,
} from "../../../../contracts/mocks/upgradeMocks/FeeDecreaserV2";

const _abi = [
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
        name: "_nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "activateBonus",
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
    ],
    name: "bucketBonusCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "deactivateBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getAccumulatedAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getAvailableAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getBonus",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nftId",
            type: "uint256",
          },
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accumulatedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimedAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IFeeExecutorStorage.ActivatedBonus",
        name: "",
        type: "tuple",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "indexes",
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
    inputs: [
      {
        internalType: "contract IPMXBonusNFT",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_primexDNS",
        type: "address",
      },
      {
        internalType: "contract IWhiteBlackList",
        name: "_whiteBlackList",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract IPMXBonusNFT",
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
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxCount",
        type: "uint256",
      },
    ],
    name: "setMaxBonusCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tiers",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
        ],
        internalType: "struct IFeeExecutorStorage.NFTBonusParams[]",
        name: "_bonuses",
        type: "tuple[]",
      },
    ],
    name: "setTierBonus",
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
    name: "tierBonus",
    outputs: [
      {
        internalType: "uint256",
        name: "percent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "updateBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_oldScaledBalance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currentIndex",
        type: "uint256",
      },
    ],
    name: "updateBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_oldBalances",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currentIndex",
        type: "uint256",
      },
    ],
    name: "updateBonuses",
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
    name: "updatedTimestamps",
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
] as const;

const _bytecode =
  "0x6080604052346200002e576200001462000033565b6200001e62000033565b6040516129b69081620000dd8239f35b600080fd5b60005460ff8160081c16620000875760ff80821603620000505750565b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a1565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fdfe608080604052600436101561001357600080fd5b60009060e08235811c91826301ffc9a714611b4757508163171a8964146119f6578163227a87dd146119b257816332353ae8146118fc5781633ce917ab146116e75781633f4a2d27146116be5781633f4ba83a146115ad5781633fa4f2451461158e578163442b4a26146114e35781634485b5011461144d57816347ccca021461142457816355241077146114085781635c975abb146113e55781636f7ee4da146113a25781637b103999146113795781638004298e146113495781638456cb59146112725781639d6aed0b146111f85781639f8dbb7b14610f7b578163a13a944b14610f24578163bd6846aa14610d72578163c349026314610678578163c4ee936614610643578163ced3f029146105e6578163ec1dfe7114610458575063f8c8765e1461014157600080fd5b34610455576080366003190112610455576004356001600160a01b038181169182900361045157610170611c52565b610178611c21565b9060643583811680910361044d57855460ff91828260081c161594858096610441575b801561042b575b156103cf5760ff198381166001178a5592866103be575b50885497848960081c16946101cd86612368565b886001600160601b0360a01b9316838254161790556101eb85612368565b6040516301ffc9a760e01b808252633694124d60e21b600483015260209991908a82602481875afa918215610394578d9261039f575b5081610342575b816102d8575b50156102c65761028796168260ca54161760ca558160c954161760c95560cc54161760cc5561025c82612368565b61026582612368565b6001805561027282612368565b61027b82612368565b60655416606555612368565b61028f578280f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989161ff001916835560405160018152a138808280f35b60405163044aa57560e41b8152600490fd5b604051908152633df6cef760e01b600482015290508981602481885afa908115610337578c9161030a575b503861022e565b61032a91508a3d8c11610330575b6103228183611be7565b810190611cde565b38610303565b503d610318565b6040513d8e823e3d90fd5b604051818152637965db0b60e01b60048201529091508a816024818c87165afa908115610394578d91610377575b5090610228565b61038e91508b3d8d11610330576103228183611be7565b38610370565b6040513d8f823e3d90fd5b6103b79192508b3d8d11610330576103228183611be7565b9038610221565b61ffff1916610101178955386101b9565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156101a257506001848416146101a2565b5060018484161061019b565b8580fd5b8280fd5b80fd5b9050346105e25760403660031901126105e257610473611c3c565b9060243591838260405161048681611bb4565b8281528260208201528260408201528260608201528260808201528260a08201528260c0820152015260018060a01b038082168552610103602052604085206024868360c95416604051928380926341f63bfd60e01b82528a60048301525afa9081156105d7579083918861010099926105b4575b50505116600052602052604060002060405194859261051984611bb4565b82548452806001840154169060208501918252600284015490604086019182526003850154926060870193845261057f60048701549560808901968752600760058901549860a08b01998a5260c060068201549b019a8b520154998b8d019a8b526120f9565b855260405199518a52511660208901525160408801525160608701525160808601525160a08501525160c08401525190820152f35b6105d092503d8091833e6105c88183611be7565b810190611da3565b38806104fb565b6040513d89823e3d90fd5b5080fd5b8234610455576040366003190112610455576060906040906001600160a01b0361060e611c3c565b168152610100602052818120602435825260205220805490600260018201549101549060405192835260208301526040820152f35b823461045557608036600319011261045557610675610660611c3c565b610668611c21565b6064359160243590611e76565b80f35b9050346105e25760403660031901126105e25760243590600260015414610d2d5760026001556106a6611cf6565b60cc54604051630723eb0360e51b815233600482015290602090829060249082906001600160a01b03165afa908115610aab578491610d0e575b50610cfc5760043515610cea573383526101036020526040832060248460018060a01b0360c95416604051928380926341f63bfd60e01b82528860048301525afa908115610c1e578591610cd0575b50516001600160a01b03168452602052604080842090519261075084611bb4565b815480855260018301546001600160a01b031660208601819052600284015460408701526003840154606087015260048401546080870152600584015460a0870152600684015460c0870152600790930154848601529115159182610cc6575b505015610cb4576020828101516040516368d0612f60e01b81529190829060049082906001600160a01b03165afa908115610aab578491610c7e575b5060208301518190610807906001600160a01b031682612475565b61081084612841565b610b3c575b5050608082015181830151809111610975575b5061083282612841565b1580610965575b156108da57503382526101036020526040822060018060a01b03602083015116600052602052610897604060002060076000918281558260018201558260028201558260038201558260048201558260058201558260068201550155565b6020908101516001600160a01b0316825260cb905260408120805480156108c6576000190190555b6001805580f35b634e487b7160e01b83526011600452602483fd5b6007903384526101036020526040842060018060a01b03602085015116600052602052604060002092805184556001840160018060a01b036020830151166001600160601b0360a01b82541617905560408101516002850155606081015160038501556080810151600485015560a0810151600585015560c0810151600685015501519101556108bf565b5080820151608083015114610839565b61098290600435906123c8565b6080830151809111600014610b33578282015161099e9161235b565b6109ab81838501516123c8565b8383015260208084015160405163669949ef60e11b815286929091829060049082906001600160a01b03165afa8015610b28578290610ae5575b60208601516040516306fdde0360e01b815292508390839060049082906001600160a01b03165afa918215610ada578392610ab6575b506001600160a01b0381163b1561045157610a559183604051809681958294632581e14f60e21b8452606060048501526064840190611c8b565b336024840152604483019190915203926001600160a01b03165af18015610aab57156108285767ffffffffffffffff8194929411610a97576040529138610828565b634e487b7160e01b82526041600452602482fd5b6040513d86823e3d90fd5b610ad39192503d8085833e610acb8183611be7565b810190611e50565b9038610a1b565b6040513d85823e3d90fd5b506020813d602011610b20575b81610aff60209383611be7565b810103126105e257516001600160a01b03811681036105e2576004906109e5565b3d9150610af2565b6040513d84823e3d90fd5b5060043561099e565b60c084015190428210610c56575b505060a08301518111610b5e575b80610815565b602083810151604051631f1b131360e31b81529190829060049082906001600160a01b03165afa908115610c1e576024916020918791610c29575b50604051630ed1279f60e11b815233600482015292839182906001600160a01b03165afa8015610c1e578590610be6575b610bd6915082856127a6565b608084015260a083015238610b58565b506020813d602011610c16575b81610c0060209383611be7565b81010312610c1257610bd69051610bca565b8480fd5b3d9150610bf3565b6040513d87823e3d90fd5b610c499150823d8411610c4f575b610c418183611be7565b810190611e31565b38610b99565b503d610c37565b6020850151610c6f93506001600160a01b031691612602565b60001960c08401523880610b4a565b90506020813d602011610cac575b81610c9960209383611be7565b81010312610ca85751386107ec565b8380fd5b3d9150610c8c565b604051633d77b3cb60e01b8152600490fd5b14905038806107b0565b610ce491503d8087833e6105c88183611be7565b3861072f565b604051633abe877f60e11b8152600490fd5b6040516333df015b60e01b8152600490fd5b610d27915060203d602011610330576103228183611be7565b386106e0565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b823461045557606036600319011261045557610d8c611c3c565b60249067ffffffffffffffff8235818111610c125736602382011215610c125780600401359180831161044d57600592368682861b85010111610f2057604435828111610f1c5736602382011215610f1c578060040135928311610f1c578681019087369160608602010111610f1c5760ca54604051632474521560e21b8152600481018a90523389820152602096916001600160a01b03919088908290604490829086165afa908115610f11578b91610ef4575b5015610ee257848403610ed057929690921691885b878110610e61578980f35b610e6c818685612337565b3515610ebe57808760026040808e8e610100610e8c610eb9998e8d612337565b968c845252828220908d888b1b01013582528d522092803584558b81013560018501550135910155612312565b610e56565b604051637000f68560e11b8152600490fd5b604051632aa3c3bf60e11b8152600490fd5b60405163036be76f60e61b8152600490fd5b610f0b9150883d8a11610330576103228183611be7565b8b610e41565b6040513d8d823e3d90fd5b8780fd5b8680fd5b823461045557604036600319011261045557610f3e611c3c565b6001600160a01b031681526101026020526040812080546024359290831015610455576020610f6d8484611cb0565b90546040519160031b1c8152f35b9050346105e257602090816003193601126104515760043591610f9c611cf6565b60cc54604051630723eb0360e51b81523360048201526001600160a01b03949183908290602490829089165afa9081156111785786916111db575b50610cfc573385526101038252604085206024868660c95416604051928380926341f63bfd60e01b82528760048301525afa80156105d757869188916111c1575b5051168652825260408520926040519161103183611bb4565b8454918284528660018701541690600786860197838952600281015460408801526003810154606088015260048101546080880152600581015460a0880152600681015460c0880152015490850152151591826111b7575b505015610cb45760048285855116604051928380926368d0612f60e01b82525afa9384156111785785918795611183575b5081816110cd6004948794511688612475565b511660405192838092631f1b131360e31b82525afa8015611178578391879161115b575b50602460405180978193630ed1279f60e11b8352336004840152165afa918215610c1e578592611129575b50610675935033906123d5565b90915083813d8311611154575b6111408183611be7565b81010312610ca8576106759251903861111c565b503d611136565b6111729150823d8411610c4f57610c418183611be7565b386110f1565b6040513d88823e3d90fd5b84809296508193503d83116111b0575b61119d8183611be7565b8101031261044d575192849060046110ba565b503d611193565b1490503880611089565b6111d591503d808a833e6105c88183611be7565b38611018565b6111f29150833d8511610330576103228183611be7565b38610fd7565b82346104555780600319360112610455576040516040810181811067ffffffffffffffff82111761125e5761125a9250604052600e81526d2332b2a232b1b932b0b9b2b92b1960911b6020820152604051918291602083526020830190611c8b565b0390f35b634e487b7160e01b83526041600452602483fd5b823461045557806003193601126104555760ca54604051632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb600482015233602482015290602090829060449082906001600160a01b03165afa908115610b2857829161132b575b5015610ee2576112f1611cf6565b600160ff1960655416176065557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b611343915060203d8111610330576103228183611be7565b826112e3565b8234610455576040366003190112610455576020611371611368611c3c565b602435906120f9565b604051908152f35b823461045557806003193601126104555760ca546040516001600160a01b039091168152602090f35b82346104555760203660031901126104555760409081906001600160a01b036113c9611c3c565b16815260cb602052206001815491015482519182526020820152f35b8234610455578060031936011261045557602060ff606554166040519015158152f35b8234610455576020366003190112610455576004356101365580f35b823461045557806003193601126104555760c9546040516001600160a01b039091168152602090f35b823461045557604036600319011261045557611467611c3c565b61146f611c52565b60c95490916001600160a01b0391821633036114d1578116835261010360205260408320911682526020526106756040822060076000918281558260018201558260028201558260038201558260048201558260058201558260068201550155565b604051632a4b45b760e11b8152600490fd5b8234610455576040366003190112610455576114fd611c3c565b6001600160a01b038181168352610103602052604080842060c95491516341f63bfd60e01b8152602480356004830181905294929387918391829086165afa908115611178578660079461156b9461137198979460409460209b91611574575b5051168252885220936120f9565b9101549061235b565b61158891503d8086833e6105c88183611be7565b8b61155d565b8234610455578060031936011261045557602061013654604051908152f35b823461045557806003193601126104555760ca54604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8600482015233602482015290602090829060449082906001600160a01b03165afa908115610b285782916116a0575b5015610ee25760655460ff8116156116645760ff19166065557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b6116b8915060203d8111610330576103228183611be7565b8261161e565b823461045557806003193601126104555760ff546040516001600160a01b039091168152602090f35b9050346105e25760803660031901126105e257611702611c21565b906001600160a01b039060643582811690819003610c12578260c9541633036114d15761172d611cf6565b80855260209261010384526040862094818116958688528552816001604089200154166118ea576040516368d0612f60e01b81529085826004818a5afa9182156118df5788926118ae575b506117839082612475565b85875260cb8552604087209586546001880154111561189c5780885261010086526040882060243589528652604088208054801561188a5760079660026001840154930154801515600014611882576117dc90426123c8565b955b8b6040519a8b966117ee88611bb4565b600435885281880194818652604089019687526060890197885260c060808a0199858b5260a081019b8c52019a8b528d019a838c52835261010382526040832092525260408c2099518a5560018a019151166001600160601b0360a01b8254161790555160028801555160038701555160048601555160058501555160068401555191015561187d8154612312565b905580f35b508a956117de565b604051630efac93f60e31b8152600490fd5b604051632c539eb360e21b8152600490fd5b9091508581813d83116118d8575b6118c68183611be7565b81010312610f1c575190611783611778565b503d6118bc565b6040513d8a823e3d90fd5b60405163c1ccec5d60e01b8152600490fd5b823461045557604036600319011261045557611916611c3c565b60ca54604051632474521560e21b81527fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b6360048201523360248201526001600160a01b0392916020908290604490829087165afa908115610aab578491611994575b5015610ee25716815260cb602052602435600160408320015580f35b6119ac915060203d8111610330576103228183611be7565b84611978565b8234610455576040366003190112610455576020906040906001600160a01b036119da611c3c565b1681526101018352818120602435825283522054604051908152f35b8234610455576080366003190112610455576004359067ffffffffffffffff8083116105e257366023840112156105e2578260040135611a3581611c09565b93611a436040519586611be7565b81855260209160248387019160051b8301019136831161044d57602401905b828210611b2857505050602435918211610451573660238301121561045157816004013591611a9083611c09565b92611a9e6040519485611be7565b80845260248385019160051b8301019136831161044d57602401905b828210611b195750505050611acd611c21565b9060643593835b8151811015611b1557611b1090611b0b87866001600160a01b03611af88588612347565b5116611b048589612347565b5190611e76565b612312565b611ad4565b8480f35b81358152908301908301611aba565b81356001600160a01b0381168103610f20578152908301908301611a62565b8390346105e25760203660031901126105e25760043563ffffffff60e01b811680910361045157602092506301ffc9a760e01b8114908115611ba3575b8115611b92575b5015158152f35b636c91bd0560e11b14905083611b8b565b63cedc502360e01b81149150611b84565b610100810190811067ffffffffffffffff821117611bd157604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117611bd157604052565b67ffffffffffffffff8111611bd15760051b60200190565b604435906001600160a01b0382168203611c3757565b600080fd5b600435906001600160a01b0382168203611c3757565b602435906001600160a01b0382168203611c3757565b60005b838110611c7b5750506000910152565b8181015183820152602001611c6b565b90602091611ca481518092818552858086019101611c68565b601f01601f1916010190565b8054821015611cc85760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b90816020910312611c3757518015158103611c375790565b60ff60655416611d0257565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b51906001600160a01b0382168203611c3757565b81601f82011215611c3757805167ffffffffffffffff8111611bd15760405192611d82601f8301601f191660200185611be7565b81845260208284010111611c3757611da09160208085019101611c68565b90565b90602082820312611c3757815167ffffffffffffffff92838211611c3757019060a082820312611c37576040519260a0840184811082821117611bd157604052611dec83611d3a565b84526020830151602085015260408301516040850152611e0e60608401611d3a565b60608501526080830151908111611c3757611e299201611d4e565b608082015290565b90816020910312611c3757516001600160a01b0381168103611c375790565b90602082820312611c3757815167ffffffffffffffff8111611c3757611da09201611d4e565b9392919360ff606554166120f25760018060a01b038082169060008281526101039160209383855260409384842091838c1692838652875283600187872001541615611f9e5784528552838320908352845260048383209480855196611edb88611bb4565b805488526007856001830154169182848b01526002810154898b0152600381015460608b01528581015460808b0152600581015460a08b0152600681015460c08b0152015460e0890152865193848092631f1b131360e31b82525afa938415611f935793611f74575b505033911603611f645750611f5d611f62959685612475565b6123d5565b565b516325a2afeb60e01b8152600490fd5b611f8b929350803d10610c4f57610c418183611be7565b903880611f44565b8551903d90823e3d90fd5b5050909392989695508160049295508460ff5416918a51938480926306fdde0360e01b82525afa9182156120e857918391611ffc9387926120cc575b508a51808095819463af9a2aa760e01b83528660048401526024830190611c8b565b03915afa9081156120c257908392918591612087575b50819060048a5180958193631f1b131360e31b8352165afa93841561207c579361205d575b50503391160361204c57611f62929350612475565b83516325a2afeb60e01b8152600490fd5b612074929350803d10610c4f57610c418183611be7565b903880612037565b8851903d90823e3d90fd5b82809450819392503d83116120bb575b6120a18183611be7565b81010312610ca85790806120b58493611d3a565b90612012565b503d612097565b88513d86823e3d90fd5b6120e19192503d8089833e610acb8183611be7565b9038611fda565b89513d87823e3d90fd5b5050509050565b9160018060a01b0380931691600092808452602094610103865260409283862090868360c954169160248751809481936341f63bfd60e01b835260048301525afa9081156123085790839188916122ee575b505116865286528285209583519261216284611bb4565b8754845282600189015416976007838601918a83526002810154888801526003810154606088015260048101546080880152600581015460a0880152600681015460c0880152015460e086015288156122e357828697989960049751978880926368d0612f60e01b82525afa9586156122a45789966122ae575b509082846004935116885193848092631f1b131360e31b82525afa9182156122a457908392918a92612282575b5060249088519586938492630ed1279f60e11b84526004840152165afa94851561227957508694612242575b5050611da093945061257b565b9080929450813d8311612272575b61225a8183611be7565b81010312610c1257611da09394505191849338612235565b503d612250565b513d88823e3d90fd5b602491925061229d90843d8611610c4f57610c418183611be7565b9190612209565b87513d8b823e3d90fd5b919095508282813d83116122dc575b6122c78183611be7565b810103126122d857905194826121dc565b8880fd5b503d6122bd565b505050505050915090565b61230291503d808a833e6105c88183611be7565b3861214b565b85513d89823e3d90fd5b60001981146123215760010190565b634e487b7160e01b600052601160045260246000fd5b9190811015611cc8576060020190565b8051821015611cc85760209160051b010190565b9190820391821161232157565b1561236f57565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b9190820180921161232157565b92916123e084612841565b6123eb575b50505050565b60018060a01b03809216600052610103602052604060002060208501908382511660005260205260406000209260c086015191428310612447575b5050506124379083600594956127a6565b60048201550155388080806123e5565b90612456939591511691612602565b9283600019600684015560a082015110156123e5579291388080612426565b9060018060a01b031660009080825261010280602052604083208054801591821561251e575b50506124a75750505050565b818352602052604082208054906801000000000000000082101561250a57816124d99160016040969594018155611cb0565b81549060031b9042821b91600019901b191617905581526101016020528181204282526020522055388080806123e5565b634e487b7160e01b84526041600452602484fd5b60001982019250908211612567579061253691611cb0565b90549060031b1c610e10810180911161255357421015388061249b565b634e487b7160e01b84526011600452602484fd5b634e487b7160e01b85526011600452602485fd5b919060c083015180612592575b50611da0926127a6565b60001981146125d857428110156125885760208401516125bd926001600160a01b0390911691612602565b8060a084015110156125cf5738612588565b50506080015190565b5050506080015190565b81156125ec570490565b634e487b7160e01b600052601260045260246000fd5b6001600160a01b039092166000818152610102602081815260408084205490979695919492936000198083019392841161279257839285835286885261264a858c8520611cb0565b959054600396871b1c90818b11908115612789575b506127625750505b8282106126dd575b50611da09798929161268e6126a4928660005287895285600020611cb0565b905490841b1c9585600052875283600020611cb0565b9054911b1c9382600052610101808252826000208560005282528260002054936000528152816000209085600052526000205490612887565b9182810181811161232157821461275c576126f881836123c8565b60011c9085600052868852612710828c600020611cb0565b905490861b1c808a101561272657505091612667565b9093925080891115612739575090612667565b975050505050905060009493945261010181528260002091600052526000205490565b9161266f565b9650969250509150611da09697928252610101815282822090848352522054914292612887565b9050153861265f565b634e487b7160e01b82526011600452602482fd5b916127b590604084015161290a565b6706f05b59d3b2000081019081811161232157811061282f57670de0b6b3a76400006127e96127f09360a08601519061235b565b9104612947565b60608201805161280857506080611da09201516123c8565b916080016128178282516123c8565b8351116128245750505190565b611da09250516123c8565b604051630a77254f60e01b8152600490fd5b606081015180612870575b5060c001518061285d575b50600190565b6000191461286b5738612857565b600090565b60808201511015612881573861284c565b50600090565b92939161289b8161289b866128a19561235b565b9461235b565b906b033b2e3c9fd0803ce80000009384810294818604811482151715612321578504036128f8576128d58260011c856123c8565b93841061282f576128ec6128f292611da0956125e2565b90612947565b906123c8565b604051631550e8b760e01b8152600490fd5b600092918015918215612921575b5050156128f857565b808202945091508115828504821417156123215761293f90846125e2565b143880612918565b906129519161290a565b6b019d971e4fe8401e7400000081019081811161232157811061282f576b033b2e3c9fd0803ce800000090049056fea2646970667358221220df38ee372514fa2454ef99991f10bd219402efa524426f90736afecf707bf6be64736f6c63430008120033";

type FeeDecreaserV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeDecreaserV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeDecreaserV2__factory extends ContractFactory {
  constructor(...args: FeeDecreaserV2ConstructorParams) {
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
      FeeDecreaserV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FeeDecreaserV2__factory {
    return super.connect(runner) as FeeDecreaserV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeDecreaserV2Interface {
    return new Interface(_abi) as FeeDecreaserV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FeeDecreaserV2 {
    return new Contract(address, _abi, runner) as unknown as FeeDecreaserV2;
  }
}