/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SpotTradingRewardDistributorV2,
  SpotTradingRewardDistributorV2Interface,
} from "../SpotTradingRewardDistributorV2";

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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PmxWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "rewardPerPeriod",
        type: "uint256",
      },
    ],
    name: "RewardPerPeriodChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "rewardPerPeriod",
        type: "uint256",
      },
    ],
    name: "RewardPerPeriodDecreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SpotTradingClaimReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TopUpUndistributedPmxBalance",
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
        name: "trader",
        type: "address",
      },
    ],
    name: "calculateReward",
    outputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentPeriod",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerPeriod",
        type: "uint256",
      },
    ],
    name: "decreaseRewardPerPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dns",
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
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "getPeriodInfo",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getPeriodsWithTraderActivity",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "periodNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getSpotTraderActivity",
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
    name: "initialPeriodTimestamp",
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
        name: "_registry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_periodDuration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pmx",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_traderBalanceVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
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
    name: "periodDuration",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "periods",
    outputs: [
      {
        internalType: "uint256",
        name: "totalReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalActivity",
        type: "uint256",
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
    name: "rewardPerPeriod",
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
        internalType: "uint256",
        name: "_rewardPerPeriod",
        type: "uint256",
      },
    ],
    name: "setRewardPerPeriod",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "topUpUndistributedPmxBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "traderBalanceVault",
    outputs: [
      {
        internalType: "address payable",
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
    name: "undistributedPMX",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
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
        internalType: "bytes",
        name: "positionUsdOracleData",
        type: "bytes",
      },
    ],
    name: "updateTraderActivity",
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
];

const _bytecode =
  "0x608080604052346100c1576000549060ff8260081c1661006f575060ff80821603610034575b60405161194790816100c78239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610025565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a7146112fc575080630460f0f3146112d35780630b49839d146112aa5780631602b801146111cf5780632630c12f146111a65780632af2311d1461111c5780632bc5f560146110d857806338b41a31146110b95780633f4ba83a14610faa5780633fa4f24514610f8b57806351a8312114610ede5780635524107714610ec45780635c975abb14610ea05780635d3705d814610da157806361d027b314610d785780637615060814610d595780637b10399914610d305780638456cb5914610c405780638534ef4a14610c215780639968861e14610bf85780639d6aed0b14610b45578063a2dc2ab714610755578063a6bd678814610684578063b0c3bdb3146105ac578063b470aade1461058d578063b88a802f14610335578063c6855977146101c9578063d82e3962146101965763ea4a11041461016257600080fd5b346101925760203660031901126101925791819235815260d3602052206002815491015482519182526020820152f35b8280fd5b8284346101c65760203660031901126101c657506101ba6101b561136b565b61178c565b82519182526020820152f35b80fd5b50903461019257602090816003193601126103315782359260018060a01b03906044848360c95416855192838092632474521560e21b82528b878301523360248301525afa90811561032757879161030a575b50156102fc5760d2548581106102ed5761027c9392859261023e888094611431565b60d255888260ce54169260d054169186519788958694859363a9059cbb60e01b8552840160209093929193604081019460018060a01b031681520152565b03925af19081156102e457506102b6575b50507f1403e9f80c7b87509c72e49d77cb3dd67786b930c61dd070ee896300af8883508280a280f35b816102d592903d106102dd575b6102cd8183611381565b8101906113b9565b50388061028d565b503d6102c3565b513d86823e3d90fd5b50825163547dc75760e11b8152fd5b825163036be76f60e61b8152fd5b6103219150853d87116102dd576102cd8183611381565b3861021c565b84513d89823e3d90fd5b8380fd5b50919034610589578160031936011261058957610350611716565b6103586116be565b6103613361178c565b9091821561057a5733845260209160d483528185208251808286829454938481520190895286892092895b88828210610564575050506103a392500382611381565b33865260d4845282862080549087815581610547575b505080516000198101919082116105345782916103d591611702565b511461051b575b5060ce5460d154825163a9059cbb60e01b81526001600160a01b039182168882019081526020810187905291929091859183918290036040019082908a9087165af18015610511576104f4575b508060d154169060ce5416813b156104f057825163220eb46560e11b8152338189019081526001600160a01b0390921660208301526040820186905291869183919082908490829060600103925af180156104e6576104b5575b50907f05b00a60b39bf9abaaf1e5712428e02df01e84cb1edf188da81d20d3f6d0057391519283523392a26001805580f35b67ffffffffffffffff81959295116104d35784529293508338610483565b634e487b7160e01b825260418652602482fd5b82513d87823e3d90fd5b8580fd5b61050a90843d86116102dd576102cd8183611381565b5038610429565b83513d88823e3d90fd5b61052e9033865260d4845282862061148f565b386103dc565b634e487b7160e01b875260118852602487fd5b8752848720908101905b818110156103b957878155600101610551565b855484526001958601958795509301920161038c565b5163093c58cd60e21b81528490fd5b5080fd5b50503461058957816003193601126105895760209060cb549051908152f35b50903461019257602036600319011261019257610620906020833580946105d1611716565b6105dd8260d254611454565b60d25560ce5484516323b872dd60e01b8152339281019283523060208401526040830193909352919485926001600160a01b031691839189918391606090910190565b03925af190811561067b575061065d575b507fc34f0d9ce24669fd9852834519a3c9687ba0bf81d3a77e64589981ec16e7680b8280a26001805580f35b6106749060203d81116102dd576102cd8183611381565b5038610631565b513d85823e3d90fd5b50346101925760203660031901126101925760c9548251632474521560e21b81527fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b638184015233602482015282359391602090829060449082906001600160a01b03165afa9081156104e6578591610737575b501561072a5750508060cd557fedd7736b6c998295516e7e77bd10f032589e2d45ca106a0e883e3559a99b3eab8280a280f35b5163036be76f60e61b8152fd5b61074f915060203d81116102dd576102cd8183611381565b386106f7565b509190346105895760c03660031901126105895761077161136b565b6001600160a01b0393602492919083359060443587811690819003610b4157606435888116809103610b3d5760843591898316809303610b395760a435948a8616809603610b355789549a60ff8c60081c161597888d819a610b27575b508015610b08575b15610aaf5760ff19808e166001178d559b9c89610a9e575b5016948b89519a6301ffc9a760e01b808d528c84637965db0b60e01b91015260209c8d8184818d5afa9384156109d657908e929194610a7f575b5083610a30575b836109e1575b83610987575b8361092f575b5050501561092157811561091357506bffffffffffffffffffffffff60a01b948560c954161760c9554260cc5560cb558360cf54161760cf558260ce54161760ce558160d154161760d15560d054161760d0558454936108ce60ff8660081c166108aa816113d1565b6108b3816113d1565b6108bc816113d1565b600180556108c9816113d1565b6113d1565b606554166065556108dd578380f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989261ff00191684555160018152a13880808380f35b8851636f599d9d60e01b8152fd5b885163044aa57560e41b8152fd5b8c519081526329abf30760e11b858201529250908290818b5afa90811561097d578d91610960575b50388b81610841565b61097791508b3d8d116102dd576102cd8183611381565b38610957565b8a513d8f823e3d90fd5b9250508d8b518381526336372b0760e01b858201528d8184818b5afa9182156109d657908e926109b9575b509261083b565b6109d09150823d84116102dd576102cd8183611381565b386109b2565b8d51903d90823e3d90fd5b9250508d8b518381526312b3ed2b60e01b858201528d8184818c5afa9182156109d657908e92610a13575b5092610835565b610a2a9150823d84116102dd576102cd8183611381565b38610a0c565b9250508d8b518381526333ca6d2360e21b858201528d8184818a5afa9182156109d657908e92610a62575b509261082f565b610a799150823d84116102dd576102cd8183611381565b38610a5b565b610a97919450823d84116102dd576102cd8183611381565b9238610828565b61ffff1916610101178d55386107ee565b895162461bcd60e51b8152602081890152602e818d01527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b158d81610b19575b506107d6565b6001915060ff16148d610b13565b6001915060ff16108d6107ce565b8980fd5b8880fd5b8780fd5b8680fd5b50346101925782600319360112610192578151908282019082821067ffffffffffffffff831117610be557508252601e81526020907f53706f7454726164696e675265776172644469737472696275746f72563200008282015282519382859384528251928382860152825b848110610bcf57505050828201840152601f01601f19168101030190f35b8181018301518882018801528795508201610bb1565b634e487b7160e01b855260419052602484fd5b50503461058957816003193601126105895760d15490516001600160a01b039091168152602090f35b50503461058957816003193601126105895760209060cc549051908152f35b503461019257826003193601126101925760c9548251632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb8382015233602482015290602090829060449082906001600160a01b03165afa908115610d23578491610d05575b5015610cf7575060207f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25891610ce26116be565b600160ff19606554161760655551338152a180f35b905163036be76f60e61b8152fd5b610d1d915060203d81116102dd576102cd8183611381565b38610caf565b50505051903d90823e3d90fd5b50503461058957816003193601126105895760c95490516001600160a01b039091168152602090f35b50503461058957816003193601126105895760209060d2549051908152f35b50503461058957816003193601126105895760d05490516001600160a01b039091168152602090f35b5091903461058957608036600319011261058957610dbd61136b565b610dc5611350565b906064359467ffffffffffffffff938487116104f057366023880112156104f057868201359485116104f05736602486890101116104f05760c9548151632474521560e21b81527f5580ea9b7f9becaa48a78f506a2019ea24794b7a717ee6a4b9f62e36b94c25a68482015233602482015290602090829060449082906001600160a01b03165afa908115610e96578791610e78575b501561072a5750506024610e7594950191604435916114c9565b80f35b610e90915060203d81116102dd576102cd8183611381565b38610e5b565b82513d89823e3d90fd5b50503461058957816003193601126105895760209060ff6065541690519015158152f35b838234610589576020366003190112610589573560d55580f35b8284346101c657602090816003193601126101c65782906001600160a01b03610f0561136b565b16815260d48352818120908251808584549182815201908194845286842090845b818110610f775750505081610f3c910382611381565b83519485948186019282875251809352850193925b828110610f6057505050500390f35b835185528695509381019392810192600101610f51565b825484529288019260019283019201610f26565b50503461058957816003193601126105895760209060d5549051908152f35b503461019257826003193601126101925760c9548251632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d88382015233602482015290602090829060449082906001600160a01b03165afa908115610d2357849161109b575b5015610cf7576065549060ff821615611061575060ff1916606555513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602090a180f35b606490602084519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b6110b3915060203d81116102dd576102cd8183611381565b38611019565b50503461058957816003193601126105895760209060cd549051908152f35b503461019257816003193601126101925760209282916110f6611350565b9035825260d385528282206001600160a01b039091168252600101845220549051908152f35b508290346105895760203660031901126105895761115d61114160cc54809335611431565b61115861115160cb54809361176c565b9342611431565b61176c565b81835260d360205283832092508254918215918261119c575b5050156111935750600260cd54915b015482519182526020820152f35b60029091611185565b1490508480611176565b50503461058957816003193601126105895760cf5490516001600160a01b039091168152602090f35b50346101925760203660031901126101925760c9548251632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb8184015233602482015282359391602090829060449082906001600160a01b03165afa9081156104e657859161128c575b501561072a5760cd5483101561127f5750508060cd557fd83327ce87c5c4834b9d54a548e5b7db615bac1859c4687ecb6c50abff6531608280a280f35b5163bccabe7160e01b8152fd5b6112a4915060203d81116102dd576102cd8183611381565b38611242565b50503461058957816003193601126105895760ca5490516001600160a01b039091168152602090f35b50503461058957816003193601126105895760ce5490516001600160a01b039091168152602090f35b92505034610192576020366003190112610192573563ffffffff60e01b81168091036101925760209250630929583360e01b811490811561133f575b5015158152f35b6301ffc9a760e01b14905038611338565b602435906001600160a01b038216820361136657565b600080fd5b600435906001600160a01b038216820361136657565b90601f8019910116810190811067ffffffffffffffff8211176113a357604052565b634e487b7160e01b600052604160045260246000fd5b90816020910312611366575180151581036113665790565b156113d857565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b9190820391821161143e57565b634e487b7160e01b600052601160045260246000fd5b9190820180921161143e57565b80548210156114795760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b8054680100000000000000008110156113a3576114b191600182018155611461565b819291549060031b91821b91600019901b1916179055565b93909291926114e66114dd60cc5442611431565b60cb549061176c565b9360009285845260209660d388528760409687872095865415611677575b60cf54895163735aad2560e01b81526001600160a01b039283166004820152610348602482015260448101979097528116606487015260a0608487015260a4860185905293859160c491839181908385013781810183018a9052601f01601f1916810103018173__$75df3f6366b0557754cd3ba14359105414$__5af492831561166d578593611638575b506115bb9160029116938486526001810189528686206115b0858254611454565b905501918254611454565b905580825260d48552828220805480159182156115fb575b50506115e1575b5050505050565b6115f19460d4918352522061148f565b38808080806115da565b6000198201925090821161162457859161161491611461565b90549060031b1c141538806115d3565b634e487b7160e01b84526011600452602484fd5b9092508781813d8311611666575b6116508183611381565b810103126116625751916115bb61158f565b8480fd5b503d611646565b86513d87823e3d90fd5b915060cd54801580156116b3575b6116a6578a928161169a60c49360d254611431565b60d25588559050611504565b5050505050505050505050565b5060d2548111611685565b60ff606554166116ca57565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b80518210156114795760209160051b010190565b600260015414611727576002600155565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b8115611776570490565b634e487b7160e01b600052601260045260246000fd5b9060008061179f6114dd60cc5442611431565b6001600160a01b0390941680825260d46020908152604080842081518154808252918652838620909594929391869081840190875b858282106118fb575050506117eb92500386611381565b84519283156118f057600019938085019081116118d05761180d8a9188611702565b51036118e45785518481019081116118d05794939291905b84965b86881061183b5750505050505050509190565b909192939495969761184d8983611702565b51875260d3845282872080549086895260018101865284892054918281029281840414901517156118bc576118919291600261188b9201549061176c565b90611454565b978581146118a85760010196959493929190611828565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b89526011600452602489fd5b634e487b7160e01b86526011600452602486fd5b85519493929190611825565b505050509150509190565b855484526001958601958b9550930192016117d456fea2646970667358221220d3276d1ff2ed2c86319972a9779f68f6a8f2645e43f7ab03b8a4e7b1a67a73cb64736f6c63430008120033";

type SpotTradingRewardDistributorV2ConstructorParams =
  | [
      linkLibraryAddresses: SpotTradingRewardDistributorV2LibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpotTradingRewardDistributorV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class SpotTradingRewardDistributorV2__factory extends ContractFactory {
  constructor(...args: SpotTradingRewardDistributorV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        SpotTradingRewardDistributorV2__factory.linkBytecode(
          linkLibraryAddresses
        ),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: SpotTradingRewardDistributorV2LibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$75df3f6366b0557754cd3ba14359105414\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/PrimexPricingLibrary.sol:PrimexPricingLibrary"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SpotTradingRewardDistributorV2> {
    return super.deploy(
      overrides || {}
    ) as Promise<SpotTradingRewardDistributorV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SpotTradingRewardDistributorV2 {
    return super.attach(address) as SpotTradingRewardDistributorV2;
  }
  connect(signer: Signer): SpotTradingRewardDistributorV2__factory {
    return super.connect(signer) as SpotTradingRewardDistributorV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpotTradingRewardDistributorV2Interface {
    return new utils.Interface(_abi) as SpotTradingRewardDistributorV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SpotTradingRewardDistributorV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SpotTradingRewardDistributorV2;
  }
}

export interface SpotTradingRewardDistributorV2LibraryAddresses {
  ["contracts/libraries/PrimexPricingLibrary.sol:PrimexPricingLibrary"]: string;
}