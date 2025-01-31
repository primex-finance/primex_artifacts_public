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
import type { NonPayableOverrides } from "../../../common";
import type {
  BucketExtension,
  BucketExtensionInterface,
} from "../../../contracts/Bucket/BucketExtension";

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
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TopUpTreasury",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrowAssetReceiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawFromAave",
    type: "event",
  },
  {
    inputs: [],
    name: "aaveDeposit",
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
        name: "",
        type: "address",
      },
    ],
    name: "allowedAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isSupported",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bar",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "borrowedAsset",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bucketExtension",
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
    name: "debtToken",
    outputs: [
      {
        internalType: "contract IDebtToken",
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
        internalType: "string",
        name: "_bucketTo",
        type: "string",
      },
      {
        internalType: "contract ISwapManager",
        name: "_swapManager",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "shares",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "dexName",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes",
                    name: "payload",
                    type: "bytes",
                  },
                ],
                internalType: "struct PrimexPricingLibrary.Path[]",
                name: "paths",
                type: "tuple[]",
              },
            ],
            internalType: "struct PrimexPricingLibrary.Route[]",
            name: "routes",
            type: "tuple[]",
          },
        ],
        internalType: "struct PrimexPricingLibrary.MegaRoute[]",
        name: "_megaRoutes",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_amountOutMin",
        type: "uint256",
      },
    ],
    name: "depositFromBucket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "estimatedBar",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "estimatedLar",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBuffer",
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
    name: "interestRateStrategy",
    outputs: [
      {
        internalType: "contract IInterestRateStrategy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isReinvestToAaveEnabled",
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
    name: "lar",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdatedBlockTimestamp",
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
    name: "liquidityIndex",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTotalDeposit",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pToken",
    outputs: [
      {
        internalType: "contract IPToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "permanentLossScaled",
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
    name: "positionManager",
    outputs: [
      {
        internalType: "contract IPositionManagerV2",
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
    name: "reserve",
    outputs: [
      {
        internalType: "contract IReserve",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveRate",
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
    name: "variableBorrowIndex",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whiteBlackList",
    outputs: [
      {
        internalType: "contract IWhiteBlackList",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawBucketLiquidityFromAave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalFeeRate",
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
  "0x608080604052346015576120d2908161001b8239f35b600080fdfe61030080604052600436101561001457600080fd5b600061028052610280513560e01c90816301ffc9a71461190f5750806306fdde0314611821578063165e7805146117fe57806327c37b25146117db57806330db5856146117b65780633e0746081461178b578063478827851461176b57806358a06f071461174057806358d7bf801461172057806371a6cab714611700578063791b98bc146116d55780637a7ddbca146116aa5780637b1039991461167f5780638eed778014611654578063905e38371461163157806391a9027b1461160f5780639e9786d01461032f578063a00622dc1461030f578063a223f821146102ef578063a4c1cccb1461029f578063b28f7a1d1461027f578063bbf44f3314610256578063bd449dde1461022d578063cd3293de14610202578063ef379d17146101d7578063f5bfeb44146101b7578063f8d898981461018c5763febb0f7e1461015c57600080fd5b3461018557610280513660031901126101855760206001600160801b03606d5416604051908152f35b6102805180fd5b34610185576102805136600319011261018557606a546040516001600160a01b039091168152602090f35b346101855761028051366003190112610185576020607754604051908152f35b346101855761028051366003190112610185576074546040516001600160a01b039091168152602090f35b346101855761028051366003190112610185576068546040516001600160a01b039091168152602090f35b3461018557610280513660031901126101855760206001600160801b03606e5416604051908152f35b3461018557610280513660031901126101855760206001600160801b03606f5416604051908152f35b346101855761028051366003190112610185576020607154604051908152f35b34610185576020366003190112610185576004356001600160a01b038116908190036101855761028051526075602052604080610280512060ff6001825492015416825191825215156020820152f35b346101855761028051366003190112610185576020607354604051908152f35b346101855761028051366003190112610185576020606c54604051908152f35b34610185576080366003190112610185576004356001600160401b03811161018557366023820112156101855780600401356001600160401b0381116101855760248201916024823692010111610185576024356101808190526001600160a01b0381169003610185576001600160401b036044351161018557366023604435011215610185576044356004013560a0526001600160401b0360a051116101855736602460a05160051b604435010111610185576002600154146115ca576002600155607454604051630723eb0360e51b815233600482015290602090829060249082906001600160a01b03165afa908115610bf5576102805191611590575b5061157e5760ff607b5460a01c161580611573575b156115615760ff6078541680611556575b611549575b60835460405163af9a2aa760e01b8152602060048201819052909182906001600160a01b0316818061049060248201888a611f70565b03915afa8015610bf557610280516102605261150d575b50607b54604051634c66358f60e11b8152610260516001600160a01b0392831693926101209183916004918391165afa8015610bf5576102805190611452575b602091500151151591607d54813b1561018557610532604051958694638f8ebe1560e01b865260a0600487015261052060a48701611f9e565b86810360031901602488015291611f70565b933360448501526064840152608483015281806102805194039161028051905af18015610bf55761143f575b50606954606f54604051637a94c56560e11b815233600482015260001960248201526001600160801b039091166044820152610280519091602091839160649183916001600160a01b03165af1908115610bf557610280519161140d575b508060405182815260018060a01b036102605116907f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb60203392a36040519063011ddaef60e71b825260208260048160018060a01b0361026051165afa918215610bf55761028051926113c9575b50606b546001600160a01b03928316921682811461133d575050606654604051632474521560e21b81527fe965846df3dd5b1dfa65f58e31477079e90140e0908b6dd31b5aead5a57cf3656004820152610180516001600160a01b039081166024830152909160209183916044918391165afa908115610bf5576102805191611303575b50156112f157606b54604051636fe2528b60e11b8152610180516001600160a01b0392831660048301529190911660248201526044810183905260208160648173__$d13cb5064fc43aa5afb84d8e93c86c1222$__5af48015610bf5576112c2575b50606b54602061020081905260405160e08190526001600160a01b039092169161073a91906119e9565b6102805160e05152601f19610200510180366102005160e05101376040516101005261076c61020051610100516119e9565b6102805161010051528036610200516101005101376040516101205261079861020051610120516119e9565b6102805161012051523661020051610120510137610200516040516101408190526107c391906119e9565b610280516101405152610200516040516101608190526107e391906119e9565b61028051610160515260003681376040516102c0526108046102c05161199c565b6102c05152610200516102c051015260406102c051015260643560606102c051015261084261083460a05161203f565b60405160c05260c0516119e9565b60c0805160a0519052610200519051604435602401608052015b602460a05160051b604435010160805110610e85575060c05160806102c051015260018060a01b03610260511660a06102c05101524260c06102c0510152600160e06102c051015260016101006102c0510152610280516101206102c051015260e0516101406102c0510152610100516101606102c0510152610120516101806102c0510152610140516101a06102c0510152610160516101c06102c05101526040516101a0526356b3ae0360e01b6101a05152606060046101a05101526102446101a0510160018060a01b036102c051511660646101a051015260018060a01b03610200516102c05101511660846101a051015260406102c051015160a46101a051015260606102c051015160c46101a051015260806102c0510151906101e060e46101a051015281518091526102646101a05101906102648160051b6101a05101019261020051019161028051905b828210610ce75750505050610a69610a48610a8a9260018060a01b0360a06102c0510151166101046101a051015260c06102c05101516101246101a051015260e06102c051015115156101446101a05101526101006102c051015115156101646101a05101526101206102c051015115156101846101a05101526101406102c05101516063196101a0518303016101a46101a0510152611a0a565b6101606102c05101516063196101a0518303016101c46101a0510152611a0a565b6101806102c05101516063196101a0518303016101e46101a0510152611a0a565b6101a06102c0510151906063196101a0518203016102046101a0510152815180825261020051820191610200518260051b8201019361020051019261028051915b838310610c605750505050506101c06102c0510151906063196101a0518203016102246101a0510152815190818152610200510191610200510190610280515b818110610c48575050506102805160246101a05101526102805160446101a051015261020051906101a051906101a05190036101a0516102805160018060a01b0361018051165af18015610bf5576102805190610c03575b607e54610260516001600160a01b03163b156101855760405191631003d99d60e01b83523360048401526024830152604482015260806064820152610280518180610bb060848201611f9e565b03816102805160018060a01b0361026051165af18015610bf557610bda575b600180556102805180f35b61028051610be7916119e9565b610280516101855780610bcf565b6040513d61028051823e3d90fd5b50610200513d8111610c41575b610c1d816101a0516119e9565b61020051906101a051906101a051010312610c3c576101a05151610b63565b600080fd5b503d610c10565b82518452610200519384019390920191600101610b0b565b9091929394601f198282030183528551805180835261020051830190610200518160051b85010192610200510193610280515b828110610cb9575050505060019150956102005101926102005101930191939290610acb565b90919293610cd3600191601f198582030187528751611a0a565b610200519687019690950193929101610c93565b90919293610263196101a0518203018252845190604081019180518252610200510151906040610200518201528151809352606081019160608460051b8301016102e05261020051019061028051915b848310610d5f57505050505060016102e05194610200510191610200510192019092916109ad565b605f19826102e0510301845280516102a05260406102e051016102405260018060a01b036102a05151166102e05152610200516102a0510151610220526040610200516102e05101526102405150610220515180610240515260606102e0510160608260051b6102e05101016101e0526102005161022051016101c05261028051905b828210610e0b575050506001906101e0516102e052610200510193610200510192019192610d37565b600190605f196102e0516101e05103018152610e676101c051516040610e40825160606101e0515260606101e0510190611a0a565b9161020051810151610200516101e051015201516101e051820360406101e0510152611a0a565b6101e052610200516101c051016101c0526102005101910190610de2565b608051356001600160401b0381116101855760443501604060231982360301126101855760405190610eb6826119ce565b602481013582526044810135906001600160401b03821161018557366043828401011215610185576024828201013590610eef8261203f565b92610efd60405194856119e9565b8284526102005184019136610200518560051b602485850101010111610185576102005160248383010101925b610200518560051b60248585010101018410610f635750505050506102005182015281526102005101610200516080510160805261085c565b83356001600160401b0381116101855760406043198486018301360301126101855760405190610f92826119ce565b61020051848601820101602401356001600160a01b03811681036101855782526001600160401b036064858701830101351161018557610200513686860183016064810135019091016043011215610185576102005160648587018301908101350101602401356110028161203f565b9161101060405193846119e9565b818352610200518084019190366064898b01840190810135018201600586901b019091016024011161018557610200516064888a0183019081013501810101602401915b610200516064898b01840190810135018101600586901b010160240183106110945750505050610200518201528152610200510192610200510192610f2a565b82356001600160401b038111610185576102005160608b8b01850160648101350190910182013603604319011261018557604051908160608101106001600160401b036060840111176112a85760608201604052610200516001600160401b0360648c8e018701908101350182018301909101602401351161018557610200513660248d8d018701606481013501830184018084019190910135019091016043011215610185576102005161116b90369060248e8e0188016064810135018201850180830182013501820180820135920101612056565b8252610200805160648c8e01870181810135018083018501909101359185019190915290516001600160401b0360849190920183010135116101855736601f8c8c8461020051926060826102005160408d6024868901010101358d602486890101010101010135928a602461020051936040838383870101010135930101010101010101011215610185576112939036908c8c8261020051926060826102005160408d6024868901010101358d602486890101010101010135928a60246102005193604083838387010101013593010101010101010135908d8d61020051926102005192606082610200518d6040816024878a010101013590602486890101010101010135928b60246102005193604083838387010101013593010101010101010101612056565b60408201528152610200519283019201611054565b634e487b7160e01b61028051526041600452602461028051fd5b6020813d6020116112e9575b816112db602093836119e9565b81010312610c3c5751610710565b3d91506112ce565b60405163036be76f60e61b8152600490fd5b90506020813d602011611335575b8161131e602093836119e9565b810103126101855761132f90611f91565b836106ae565b3d9150611311565b909273__$183737d697d7aa9b5df9988cbe11bc4947$__9250823b1561018557604051636336129b60e11b815261028051610260516001600160a01b039485166004840152939093166024820152604481019190915291829060649082905af48015610bf5576113ae575b50610b63565b610280516113bb916119e9565b6102805161018557816113a8565b9091506020813d602011611405575b816113e5602093836119e9565b8101031261018557516001600160a01b038116810361018557908361062a565b3d91506113d8565b90506020813d602011611437575b81611428602093836119e9565b81010312610c3c5751816105bc565b3d915061141b565b6102805161144c916119e9565b8061055e565b50610120813d8211611505575b8161146d61012093836119e9565b810103126101855760405161012081016001600160401b038111828210176112a85760405281516001600160a01b0381168103610185576020926101009183526114b8848201611f91565b8484015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015201516101008201526104e7565b3d915061145f565b6020813d602011611541575b81611526602093836119e9565b810103126101855761153790611a4b565b61026052826104a7565b3d9150611519565b611551611a73565b61045a565b506077541515610455565b604051634288230360e01b8152600490fd5b50607d544211610444565b6040516333df015b60e01b8152600490fd5b90506020813d6020116115c2575b816115ab602093836119e9565b81010312610185576115bc90611f91565b8361042f565b3d915061159e565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b3461018557610280513660031901126101855761162a611a73565b6102805180f35b346101855761028051366003190112610185576020606d5460801c604051908152f35b34610185576102805136600319011261018557606b546040516001600160a01b039091168152602090f35b346101855761028051366003190112610185576066546040516001600160a01b039091168152602090f35b346101855761028051366003190112610185576085546040516001600160a01b039091168152602090f35b346101855761028051366003190112610185576067546040516001600160a01b039091168152602090f35b346101855761028051366003190112610185576020607954604051908152f35b346101855761028051366003190112610185576020607254604051908152f35b346101855761028051366003190112610185576069546040516001600160a01b039091168152602090f35b346101855761028051366003190112610185576020607054604051908152f35b346101855761028051366003190112610185576076546040516001600160a01b039091168152602090f35b34610185576102805136600319011261018557602060ff607854166040519015158152f35b346101855761028051366003190112610185576020606e5460801c604051908152f35b346101855761028051366003190112610185576020606f5460801c604051908152f35b346101855761028051366003190112610185576040516102805160655461184781611962565b80845290600181169081156118eb5750600114611887575b6118838361186f818503826119e9565b604051918291602083526020830190611a0a565b0390f35b919050606561028051527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c79161028051905b8082106118d15750909150810160200161186f61185f565b9192600181602092548385880101520191019092916118b9565b60ff191660208086019190915291151560051b8401909101915061186f905061185f565b34610185576020366003190112610185576004359063ffffffff60e01b821680920361018557602091630f3e84ab60e01b8114908115611951575b5015158152f35b6301ffc9a760e01b1490508361194a565b90600182811c92168015611992575b602083101461197c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611971565b6101e081019081106001600160401b038211176119b857604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176119b857604052565b90601f801991011681019081106001600160401b038211176119b857604052565b919082519283825260005b848110611a36575050826000602080949584010152601f8019910116010190565b80602080928401015182828601015201611a15565b51906001600160a01b0382168203610c3c57565b51906001600160801b0382168203610c3c57565b60835460405163a03e4bc360e01b8152600091602090829060049082906001600160a01b03165afa908115611f65578291611f27575b50606b546040516335ea6a7560e01b81526001600160a01b03918216600482018190529290911691906101e081602481865afa908115611cc0578491611d97575b5061010001516040516370a0823160e01b81523060048201529190602090839060249082906001600160a01b03165afa918215611cc0578492611d63575b5060ff19607854166078558115611d5d57604051631a4ca37b60e21b81526004810191909152600019602482015230604482015260208160648187875af18015611cc057611d2a575b50817f6407790cdabc5d219eaf901091d6beccc475533065c2fbd374c8a32b1c6679586020604051848152a2607754808211611bb0575b505050607755565b8103908111611d1657606b546083546040516361d027b360e01b815273__$183737d697d7aa9b5df9988cbe11bc4947$__9290916001600160a01b039182169160209184916004918391165afa918215611d0b578692611ccf575b50823b15611ccb57604051636336129b60e11b81526001600160a01b0391821660048201529116602482015260448101839052908490829060649082905af48015611cc057611c89575b5060207f590e5a1563e349794fdcc066c4d5047f5e478f9e41707fc1bbad830146b7a17791604051908152a2388080611ba8565b83611cb87f590e5a1563e349794fdcc066c4d5047f5e478f9e41707fc1bbad830146b7a17793956020936119e9565b939150611c55565b6040513d86823e3d90fd5b8580fd5b9091506020813d602011611d03575b81611ceb602093836119e9565b81010312611ccb57611cfc90611a4b565b9038611c0b565b3d9150611cde565b6040513d88823e3d90fd5b634e487b7160e01b83526011600452602483fd5b6020813d602011611d55575b81611d43602093836119e9565b81010312611d515751611b71565b8380fd5b3d9150611d36565b50505050565b9091506020813d602011611d8f575b81611d7f602093836119e9565b81010312611d5157519038611b28565b3d9150611d72565b8091506101e03d8111611f20575b611daf81836119e9565b810103906101e08212611f1c57602060405192611dcb8461199c565b12611f1c57604051602081018181106001600160401b03821117611f0857604052815181528252611dfe60208201611a5f565b6020830152611e0f60408201611a5f565b6040830152611e2060608201611a5f565b6060830152611e3160808201611a5f565b6080830152611e4260a08201611a5f565b60a083015260c081015164ffffffffff81168103611ccb5760c083015260e081015161ffff81168103611ccb5791611efa6101c06020936024969560e0850152611e8f6101008201611a4b565b610100850152611ea26101208201611a4b565b610120850152611eb56101408201611a4b565b610140850152611ec86101608201611a4b565b610160850152611edb6101808201611a5f565b610180850152611eee6101a08201611a5f565b6101a085015201611a5f565b6101c0820152919250611aea565b634e487b7160e01b87526041600452602487fd5b8480fd5b503d611da5565b90506020813d602011611f5d575b81611f42602093836119e9565b81010312611f5957611f5390611a4b565b38611aa9565b5080fd5b3d9150611f35565b6040513d84823e3d90fd5b908060209392818452848401376000828201840152601f01601f1916010190565b51908115158203610c3c57565b60655460009291611fae82611962565b80825291600181169081156120235750600114611fc9575050565b606560009081529293509091907f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c75b838310612009575060209250010190565b600181602092949394548385870101520191019190611ff8565b9050602093945060ff929192191683830152151560051b010190565b6001600160401b0381116119b85760051b60200190565b9291926001600160401b0382116119b8576040519161207f601f8201601f1916602001846119e9565b829481845281830111610c3c57828160209384600096013701015256fea26469706673582212209aa6b61bc061c4bfc95575bd2ad61acbe8b0d4302bc71b5ef55203729a291f0064736f6c634300081a0033";

type BucketExtensionConstructorParams =
  | [linkLibraryAddresses: BucketExtensionLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BucketExtensionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class BucketExtension__factory extends ContractFactory {
  constructor(...args: BucketExtensionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        BucketExtension__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: BucketExtensionLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$d13cb5064fc43aa5afb84d8e93c86c1222\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/TokenApproveLibrary.sol:TokenApproveLibrary"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

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
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BucketExtension & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BucketExtension__factory {
    return super.connect(runner) as BucketExtension__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BucketExtensionInterface {
    return new Interface(_abi) as BucketExtensionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BucketExtension {
    return new Contract(address, _abi, runner) as unknown as BucketExtension;
  }
}

export interface BucketExtensionLibraryAddresses {
  ["contracts/libraries/TokenApproveLibrary.sol:TokenApproveLibrary"]: string;
  ["contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"]: string;
}
