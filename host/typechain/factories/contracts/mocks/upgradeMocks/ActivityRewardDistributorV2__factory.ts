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
  ActivityRewardDistributorV2,
  ActivityRewardDistributorV2Interface,
} from "../../../../contracts/mocks/upgradeMocks/ActivityRewardDistributorV2";

const _abi = [
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
        name: "bucket",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimReward",
    type: "event",
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
    name: "buckets",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdatedTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scaledTotalSupply",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "fixedReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdatedRewardTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerDay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
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
            name: "bucketAddress",
            type: "address",
          },
          {
            internalType: "enum IActivityRewardDistributor.Role",
            name: "role",
            type: "uint8",
          },
        ],
        internalType: "struct IActivityRewardDistributor.BucketWithRole[]",
        name: "bucketsArray",
        type: "tuple[]",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bucket",
        type: "address",
      },
      {
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "rewardPerDay",
        type: "uint256",
      },
    ],
    name: "decreaseRewardPerDay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dns",
    outputs: [
      {
        internalType: "contract IPrimexDNSV3",
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
        name: "bucket",
        type: "address",
      },
      {
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
    ],
    name: "getBucketAccumulatedReward",
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
        components: [
          {
            internalType: "address",
            name: "bucketAddress",
            type: "address",
          },
          {
            internalType: "enum IActivityRewardDistributor.Role",
            name: "role",
            type: "uint8",
          },
        ],
        internalType: "struct IActivityRewardDistributor.BucketWithRole[]",
        name: "bucketsArray",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getClaimableReward",
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
        name: "bucket",
        type: "address",
      },
      {
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserInfoFromBucket",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fixedReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedRewardIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldBalance",
            type: "uint256",
          },
        ],
        internalType: "struct IActivityRewardDistributorStorage.UserInfo",
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
        internalType: "contract IERC20",
        name: "_pmx",
        type: "address",
      },
      {
        internalType: "contract IPrimexDNSV3",
        name: "_dns",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "contract ITraderBalanceVault",
        name: "_traderBalanceVault",
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
        internalType: "contract IERC20",
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
        internalType: "address",
        name: "bucket",
        type: "address",
      },
      {
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "increaseAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerDay",
        type: "uint256",
      },
    ],
    name: "setupBucket",
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
    name: "traderBalanceVault",
    outputs: [
      {
        internalType: "contract ITraderBalanceVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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
  {
    inputs: [
      {
        internalType: "contract IBucketV3",
        name: "bucket",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
      {
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
    ],
    name: "updateUserActivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBucketV3",
        name: "bucket",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "newBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
      {
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
    ],
    name: "updateUsersActivities",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "bucket",
        type: "address",
      },
      {
        internalType: "enum IActivityRewardDistributor.Role",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawPmx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523460bd576000549060ff8260081c16606b575060ff808216036031575b6040516123b590816100c38239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a1386022565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c90816301ffc9a7146116fa575080630460f0f3146116d15780630b49839d146116a857806310982b3c146114ec5780631ad4c4b314611137578063266aa8a5146110f65780633f4ba83a14610fe45780633fa4f24514610fc65780635524107714610fab5780635c975abb14610f8857806361d027b314610f5f5780636706cb6b14610cfb578063785ad74614610c3e5780637b10399914610c155780638036032d14610a985780638456cb59146109b55780639968861e1461098c5780639d6aed0b1461092f578063c88157e3146108b5578063cc2a9a5b14610417578063e1a91ba614610219578063e313b2491461015b5763fdfd56c91461011e57600080fd5b346101585760403660031901126101585761013761176a565b60243591600283101561015857602061015084846120cb565b604051908152f35b80fd5b50346101585760603660031901126101585761017561176a565b602435600281101561021557906101c5604092606094610193611780565b93818680516101a1816118a4565b828152826020820152015260018060a01b0316815260ce60205284812090506117fa565b5060009160018060a01b03168252602052206040516101e3816118a4565b815491828252604060026001830154926020850193845201549201918252604051928352516020830152516040820152f35b8280fd5b50346101585761022836611796565b60cb54604051632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb600482015233602482015291929190602090829060449082906001600160a01b03165afa90811561040c5785916103dd575b50156103cb576001600160a01b038316845260ce6020526040842060028210156103b757816102b9916117fa565b5092600884019182548410156103a5576102d2916120cb565b806006850155600984015491818311600014610399578342915b600387019261030c845461030660028b0193845490611910565b90611933565b61031b60018a01918254611966565b90554290555561032f60048601548561228d565b90554260078501558261034a57505050600a60001991015580f35b61035391611910565b6201518081029080820462015180149015171561038557610379600a9261037f92611946565b42611966565b91015580f35b634e487b7160e01b84526011600452602484fd5b83600a860154916102ec565b6040516302f8fa5360e41b8152600490fd5b634e487b7160e01b85526021600452602485fd5b60405163036be76f60e61b8152600490fd5b6103ff915060203d602011610405575b6103f781836118d6565b8101906118f8565b3861028b565b503d6103ed565b6040513d87823e3d90fd5b50346101585760c0366003190112610158576004356001600160a01b038116908190036108b1576024356001600160a01b03811691908290036102155761045c611780565b916064356001600160a01b03811692908390036108ad576084356001600160a01b03811692908390036108a95760a4356001600160a01b038116908190036108a55786549560ff8760081c161596878098610898575b8015610881575b156108255760ff198116600117895587610814575b506040516301ffc9a760e01b8152637965db0b60e01b60048201526001600160a01b03919091169190602081602481865afa90811561068e5789916107f5575b508061079e575b80610747575b806106f0575b80610699575b80610637575b15610625576001600160601b0360a01b60cf54161760cf556001600160601b0360a01b60cb54161760cb556001600160601b0360a01b60ca54161760ca556001600160601b0360a01b60c954161760c9556001600160601b0360a01b60cd54161760cd556001600160601b0360a01b60cc54161760cc558154906105e860ff8360081c166105ba816122ca565b6105c3816122ca565b600180556105d0816122ca565b6105d9816122ca565b60ff19606554166065556122ca565b6105f0575080f35b61ff00191681557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160018152a180f35b60405163044aa57560e41b8152600490fd5b506040516301ffc9a760e01b81526329abf30760e11b60048201526020816024818a5afa90811561068e57899161066f575b5061052d565b610688915060203d602011610405576103f781836118d6565b38610669565b6040513d8b823e3d90fd5b506040516301ffc9a760e01b8152633df6cef760e01b6004820152602081602481855afa90811561068e5789916106d1575b50610527565b6106ea915060203d602011610405576103f781836118d6565b386106cb565b506040516301ffc9a760e01b81526336372b0760e01b6004820152602081602481885afa90811561068e578991610728575b50610521565b610741915060203d602011610405576103f781836118d6565b38610722565b506040516301ffc9a760e01b81526312b3ed2b60e01b6004820152602081602481895afa90811561068e57899161077f575b5061051b565b610798915060203d602011610405576103f781836118d6565b38610779565b506040516301ffc9a760e01b8152633f9940a760e11b6004820152602081602481875afa90811561068e5789916107d6575b50610515565b6107ef915060203d602011610405576103f781836118d6565b386107d0565b61080e915060203d602011610405576103f781836118d6565b3861050e565b61ffff1916610101178855386104ce565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156104b95750600160ff8216146104b9565b50600160ff8216106104b2565b8680fd5b8580fd5b8480fd5b5080fd5b50346101585760a0366003190112610158576108cf61176a565b60243567ffffffffffffffff8111610215576108ef903690600401611873565b909160443567ffffffffffffffff81116108ad57610911903690600401611873565b906084359360028510156108a55761092c9560643594611d98565b80f35b5034610158578060031936011261015857506109886040516109526040826118d6565b601b81527f41637469766974795265776172644469737472696275746f7256320000000000602082015260405191829182611847565b0390f35b503461015857806003193601126101585760cd546040516001600160a01b039091168152602090f35b503461015857806003193601126101585760cb54604051632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb600482015233602482015290602090829060449082906001600160a01b03165afa908115610a8d578291610a6e575b50156103cb57610a34612182565b600160ff1960655416176065557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b610a87915060203d602011610405576103f781836118d6565b38610a26565b6040513d84823e3d90fd5b50346101585760403660031901126101585760043567ffffffffffffffff81116108b157610aca9036906004016117c9565b610ad592919261174f565b82919082906001600160a01b03165b828410610af657602085604051908152f35b9293919290916001600160a01b03610b17610b1287878a611973565b611983565b16835260ce602052604083206020610b3087878a611973565b01359060028210156108ad5790610b46916117fa565b5090600982015415610c0b5790600191604060008581528360205220916002830154908115610bf85792670de0b6b3a7640000610ba7610bae936103068789610bb49901549060ff60058201541615610bbf575b5089865496015490611910565b0490611966565b90611966565b945b01929190610ae4565b90610bae610bea9261030642600a83015480421015610bf0575b506002600384015493015490611910565b38610b9a565b905038610bd9565b5050610c05915490611966565b94610bb6565b9460019150610bb6565b503461015857806003193601126101585760cb546040516001600160a01b039091168152602090f35b503461015857604036600319011261015857610c5861176a565b6001600160a01b0316815260ce6020526040812060243591600283101561015857610140610c8684846117fa565b506001810154906002810154906003810154600482015460ff600584015416600684015490600785015492600886015494600a600988015497015497604051998a5260208a0152604089015260608801521515608087015260a086015260c085015260e0840152610100830152610120820152f35b503461015857608036600319011261015857610d1561176a565b60243560028110156102155760cb54604051632474521560e21b81527fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b6360048201523360248201526064359291604480359291602091839182906001600160a01b03165afa908115610f54578691610f35575b50156103cb576001600160a01b038416855260ce602052604085208592610dbb91610db49082906117fa565b50956120cb565b600885019380855403610ec3575b5081610dfc575b505050548015600014610de95750600a60001991015580f35b6103536009830154600684015490611910565b81610e5f91610e1d6020946009890192835490808214610ea0575b50611966565b905560c9546040516323b872dd60e01b81523360048201523060248201526044810192909252909384926001600160a01b039092169183919082906064820190565b03925af18015610e9557610e76575b808491610dd0565b610e8e9060203d602011610405576103f781836118d6565b5038610e6e565b6040513d86823e3d90fd5b4260028c015560068b01554260078b015560058a0160ff19815416905538610e17565b81600687015581600987015411600014610f2757610f1942915b6003880192610ef7845461030660028c0193845490611910565b610f0660018b01918254611966565b905542905580875560048801549061228d565b905542600786015538610dc9565b610f19600a87015491610edd565b610f4e915060203d602011610405576103f781836118d6565b38610d88565b6040513d88823e3d90fd5b503461015857806003193601126101585760cc546040516001600160a01b039091168152602090f35b5034610158578060031936011261015857602060ff606554166040519015158152f35b50346101585760203660031901126101585760043560d05580f35b5034610158578060031936011261015857602060d054604051908152f35b503461015857806003193601126101585760cb54604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8600482015233602482015290602090829060449082906001600160a01b03165afa908115610a8d5782916110d7575b50156103cb5760655460ff81161561109b5760ff19166065557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b6110f0915060203d602011610405576103f781836118d6565b38611055565b50346101585760803660031901126101585761111061176a565b61111861174f565b906064359060028210156111335761092c9260443591611a7d565b8380fd5b50346101585760203660031901126101585760043567ffffffffffffffff81116108b1576111699036906004016117c9565b6002600154146114a7576002600155611180612182565b60cf54604051630723eb0360e51b815233600482015290602090829060249082906001600160a01b03165afa908115610e95578491611488575b5061147657829133835b8381106112c15760c95460cd5460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810188905288928892602091839160449183918891165af180156112b657611299575b5060cd5460c9546001600160a01b0391821692849290911690833b156102155760405163220eb46560e11b81523360048201526001600160a01b0392909216602483015260448201529181908390606490829084905af1801561128c5761127c575b6001805580f35b611285916118d6565b8181611275565b50604051903d90823e3d90fd5b6112b19060203d602011610405576103f781836118d6565b611213565b6040513d85823e3d90fd5b6001600160a01b036112d7610b12838787611973565b16865260ce6020526040862060206112f0838787611973565b0135600281101561147257611304916117fa565b50906009820154156114605782875281602052604087209587878054946002820180546113c2575b5050505082156113b057611341838992611966565b9655611351610b12828787611973565b91602061135f838888611973565b01359060028210156113ac576040519081526001936001600160a01b03169033907fb163b3b4233df3f97edbed53bf70628a14bbc4d7d9a2d8dc5349cd466383653a90602090a4016111c4565b8880fd5b60405163093c58cd60e21b8152600490fd5b610ba782610306600180670de0b6b3a76400009560056113ff999a9d9801805460ff81161561140a575b5050549301549701998a54905087611910565b93558787388061132c565b4291600a880154918242101561144e575b50505060038601546114366002880191610306835485611910565b611444858901918254611966565b90555538806113ec565b60ff191685179055905038808061141b565b60405163aedbcd8360e01b8152600490fd5b8780fd5b6040516333df015b60e01b8152600490fd5b6114a1915060203d602011610405576103f781836118d6565b386111ba565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b5034610158576114fb36611796565b91906044602060018060a01b0360cb541660405192838092632474521560e21b82528960048301523360248301525afa90811561040c578591611689575b50156103cb576001600160a01b038216845260ce6020526040842060028210156103b7579061156b81611572936117fa565b50926120cb565b60098201908154846115848383611910565b10611677578461159391611910565b8092556008830154918215600014611626575050506115f891602091600a600019915b015560c95460cc5460405163a9059cbb60e01b81526001600160a01b039182166004820152602481019390935291938492909116908290869082906044820190565b03925af18015610a8d5761160a575080f35b6116229060203d602011610405576103f781836118d6565b5080f35b9061163091611910565b620151808102908082046201518014901517156116635791600a61165d6103796115f89694602096611946565b916115b6565b634e487b7160e01b85526011600452602485fd5b60405163547dc75760e11b8152600490fd5b6116a2915060203d602011610405576103f781836118d6565b38611539565b503461015857806003193601126101585760ca546040516001600160a01b039091168152602090f35b503461015857806003193601126101585760c9546040516001600160a01b039091168152602090f35b9050346108b15760203660031901126108b15760043563ffffffff60e01b8116809103610215576020925063187d5ef960e11b811490811561173e575b5015158152f35b6301ffc9a760e01b14905038611737565b602435906001600160a01b038216820361176557565b600080fd5b600435906001600160a01b038216820361176557565b604435906001600160a01b038216820361176557565b6060906003190112611765576004356001600160a01b038116810361176557906024356002811015611765579060443590565b9181601f840112156117655782359167ffffffffffffffff8311611765576020808501948460061b01011161176557565b90600281101561180e57600b020190600090565b634e487b7160e01b600052603260045260246000fd5b60005b8381106118375750506000910152565b8181015183820152602001611827565b604091602082526118678151809281602086015260208686019101611824565b601f01601f1916010190565b9181601f840112156117655782359167ffffffffffffffff8311611765576020808501948460051b01011161176557565b6060810190811067ffffffffffffffff8211176118c057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176118c057604052565b90816020910312611765575180151581036117655790565b9190820391821161191d57565b634e487b7160e01b600052601160045260246000fd5b8181029291811591840414171561191d57565b8115611950570490565b634e487b7160e01b600052601260045260246000fd5b9190820180921161191d57565b919081101561180e5760061b0190565b356001600160a01b03811681036117655790565b6020818303126117655780519067ffffffffffffffff8211611765570181601f8201121561176557805167ffffffffffffffff81116118c057604051926119e8601f8301601f1916602001856118d6565b8184526020828401011161176557611a069160208085019101611824565b90565b91908260809103126117655781516001600160a01b038116810361176557916020810151600381101561176557916060604083015192015190565b67ffffffffffffffff81116118c05760051b60200190565b80511561180e5760200190565b805182101561180e5760209160051b010190565b60ca546040516306fdde0360e01b81529294926001600160a01b0391821692909160009183916004918391165afa8015611d6757611adc92608092600092611d73575b50604051808095819463481d98fb60e11b835260048301611847565b03915afa908115611d6757600091611d35575b506001600160a01b038116908115611d23576001600160a01b0390611b159084906121c6565b1633036103cb5760005260ce6020526040600020906002811015611d0d57611b3c916117fa565b506009810154158015611cff575b8015611cf3575b611cee57604091825190611b6584836118d6565b60018252601f1984019485366020850137611b7f83611a5c565b6001600160a01b039091169052835194611b9985876118d6565b60018652366020870137611bac85611a5c565b524293600383019485548015600014611c9b5750611bce600285015482611910565b600a8501611bdd828254611966565b9055611bee60078601918254611966565b90559391935b6002840155600483019360005b60018110611c225750505050906008611c1e92015490549061228d565b9055565b600190611c6c611c3e8854611c378488611a69565b5190611966565b600287858060a01b03611c518689611a69565b5116600090878060a01b031681528a60205220015490611910565b8755611c95828060a01b03611c818386611a69565b5116611c8d8387611a69565b51908861232a565b01611c01565b600a85015480421015611cd5575b50611cbc90610306600287015484611910565b611ccb60018601918254611966565b9055939193611bf4565b60058601805460ff191660011790559150611cbc611ca9565b505050565b50600881015415611b51565b5060ff600582015416611b4a565b634e487b7160e01b600052602160045260246000fd5b604051630983ac6960e11b8152600490fd5b611d57915060803d608011611d60575b611d4f81836118d6565b810190611a09565b50505038611aef565b503d611d45565b6040513d6000823e3d90fd5b611d919192503d806000833e611d8981836118d6565b810190611997565b9038611ac0565b60ca546040516306fdde0360e01b8152949593946001600160a01b0391821692909160009183916004918391165afa8015611d6757611df792608092600092611d735750604051808095819463481d98fb60e11b835260048301611847565b03915afa908115611d67576000916120a9575b506001600160a01b03611e1d88836121c6565b1633036103cb576001600160a01b0316600090815260ce602052604090206002871015611d0d5786611e4e916117fa565b5093600985015415801561209b575b801561208f575b61208657600093611e7481611a44565b92611e8260405194856118d6565b818452602084019160051b8101903682116108a557915b81831061206657505050611eac83611a44565b92611eba60405194856118d6565b808452602084019060051b8201913683116108a957905b82821061205657505050600142966003860197885480156000146120085750611efe600288015482611910565b600a8801611f0d828254611966565b9055611f1e60078901918254611966565b90555b600287015503611fc157600484019492805b848110611f50575050505050906008611c1e92015490549061228d565b600190611f92611f658954611c378489611a69565b838060a01b03611f758488611a69565b5116848060a01b0316855288602052600260408620015490611910565b8855611fbb828060a01b03611fa78387611a69565b5116611fb38388611a69565b51908961232a565b01611f33565b9394509192905b848110611fd6575050505050565b6001906120026001600160a01b03611fee8386611a69565b5116611ffa8387611a69565b51908761232a565b01611fc8565b600a8801548042101561203e575b506120299061030660028a015484611910565b612037848901918254611966565b9055611f21565b60058901805460ff1916861790559150612029612016565b8135815260209182019101611ed1565b82356001600160a01b038116810361147257815260209283019201611e99565b50505050505050565b50600885015415611e64565b5060ff600586015416611e5d565b6120c2915060803d608011611d6057611d4f81836118d6565b50505038611e0a565b6001600160a01b0316600090815260ce60205260409020906002811015611d0d576120f5916117fa565b506007810154801561217b5780600a83015490600384015415612148575b504210156121405762015180610ba78360086121376006611a069701549542611910565b91015490611933565b506009015490565b915061216261215b600285015442611910565b8093611966565b9160018201156121135761217591611966565b38612113565b5050600090565b60ff6065541661218e57565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b906002811015611d0d57600491602091612255576040516358a06f0760e01b815292839182906001600160a01b03165afa908115611d6757600091612213575b506001600160a01b031690565b6020813d60201161224d575b8161222c602093836118d6565b810103126108b15751906001600160a01b0382168203610158575038612206565b3d915061221f565b604051631f1b131360e31b815292839182906001600160a01b03165afa908115611d675760009161221357506001600160a01b031690565b81612299575050600090565b62015180900490670de0b6b3a7640000820291808304670de0b6b3a7640000149015171561191d57611a0691611946565b156122d157565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b9060409060009060018060a01b03168152826020522090600282019160018354920190612377670de0b6b3a764000061236f8454956103066001860197885490611910565b048254611966565b90555490555556fea2646970667358221220e594a59b691fb0538682290eaeb88c11543e8a8984631816f89523f06697f38e64736f6c634300081a0033";

type ActivityRewardDistributorV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActivityRewardDistributorV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ActivityRewardDistributorV2__factory extends ContractFactory {
  constructor(...args: ActivityRewardDistributorV2ConstructorParams) {
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
      ActivityRewardDistributorV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ActivityRewardDistributorV2__factory {
    return super.connect(runner) as ActivityRewardDistributorV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActivityRewardDistributorV2Interface {
    return new Interface(_abi) as ActivityRewardDistributorV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ActivityRewardDistributorV2 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ActivityRewardDistributorV2;
  }
}
