/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BucketExtension,
  BucketExtensionInterface,
} from "../BucketExtension";

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
];

const _bytecode =
  "0x6080806040523461001657611d8c908161001c8239f35b600080fdfe61012080604052600436101561001457600080fd5b600060e05260003560e01c90816301ffc9a7146115e05750806306fdde03146114f7578063165e7805146114d457806327c37b25146114b157806330db58561461148c5780633e07460814611461578063478827851461144157806358a06f071461141657806358d7bf80146113f657806371a6cab7146113d6578063791b98bc146113ab5780637a7ddbca146113805780637b103999146113555780638eed77801461132a578063905e38371461130757806391a9027b146112e65780639e9786d014610331578063a00622dc14610311578063a223f821146102f1578063a4c1cccb1461029e578063b28f7a1d1461027e578063bbf44f3314610255578063bd449dde1461022c578063cd3293de14610201578063ef379d17146101d6578063f5bfeb44146101b6578063f8d898981461018b5763febb0f7e1461015957600080fd5b346101855760e051806003193601126101825760206001600160801b03606d5416604051908152f35b80fd5b60e05180fd5b346101855760e0518060031936011261018257606a546040516001600160a01b039091168152602090f35b346101855760e05180600319360112610182576020607754604051908152f35b346101855760e05180600319360112610182576074546040516001600160a01b039091168152602090f35b346101855760e05180600319360112610182576068546040516001600160a01b039091168152602090f35b346101855760e051806003193601126101825760206001600160801b03606e5416604051908152f35b346101855760e051806003193601126101825760206001600160801b03606f5416604051908152f35b346101855760e05180600319360112610182576020607154604051908152f35b34610185576020366003190112610185576004356001600160a01b038116908190036102ec5760e05152607560205260408060e0512060ff6001825492015416825191825215156020820152f35b600080fd5b346101855760e05180600319360112610182576020607354604051908152f35b346101855760e05180600319360112610182576020606c54604051908152f35b34610185576080366003190112610185576001600160401b036004351161018557366023600435011215610185576001600160401b0360043560040135116101855736602460043560040135600435010111610185576024356001600160a01b0381168103610185576001600160401b036044351161018557366023604435011215610185576001600160401b036044356004013511610185573660246044356004013560051b604435010111610185576002600154146112a1576002600155607454604051630723eb0360e51b815233600482015290602090829060249082906001600160a01b03165afa908115610ab45760e05191611267575b506112555760ff607b5460a01c16158061124a575b156112385760ff607854168061122d575b611220575b60018060a01b03608354166020604051809263af9a2aa760e01b825282600483015281806104956024820160043560040135602460043501611747565b03915afa8015610ab45760e05160c0526111e5575b50607b54604051634c66358f60e11b815260c0516001600160a01b03928316926101209183916004918391165afa8015610ab45760e05190611108575b6020915001511515607d54823b1561018557604051928380938193638f8ebe1560e01b835260a0600484015261054061052260a48501611775565b60031985820301602486015260043560040135602460043501611747565b913360448501526064840152608483015260e05194859103925af18015610ab4576110f9575b50606954606f54604051637a94c56560e11b815233600482015260001960248201526001600160801b03909116604482015260e0519091602091839160649183916001600160a01b03165af1908115610ab45760e051916110c7575b508060405182815260018060a01b0360c05116907f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb60203392a36040519063011ddaef60e71b825260208260048160018060a01b0360c051165afa918215610ab45760e05192611083575b50606b546001600160a01b039081169083168114610ffe575050606654604051632474521560e21b81527fe965846df3dd5b1dfa65f58e31477079e90140e0908b6dd31b5aead5a57cf36560048201526001600160a01b038581166024830152909160209183916044918391165afa908115610ab45760e05191610fc4575b5015610fb257606b54604051636fe2528b60e11b81526001600160a01b03918216600482015290841660248201526044810183905260208160648173__$d13cb5064fc43aa5afb84d8e93c86c1222$__5af48015610ab457610f87575b5060018060a01b03606b541691604051610722816116b7565b60e051815260405190610734826116b7565b60e051825260405192610746846116b7565b60e051845260405194610758866116b7565b60e05186526040519661076a886116b7565b60e051885261077e60405180608052611680565b6080515260018060a01b03166020608051015260406080510152606435606060805101526107b160443560040135611819565b6107be60405191826116d2565b60443560048101358252602401602082015b60246044356004013560051b60443501018210610cc857505060808051015260018060a01b0360c0511660a060805101524260c06080510152600160e060805101526001610100608051015260e05161012060805101526101406080510152610160608051015261018060805101526101a060805101526101c06080510152604051906356b3ae0360e01b82526060600483015260018060a01b036080515116606483015260018060a01b03602060805101511660848301526040608051015160a48301526060608051015160c4830152816080805101516101e060e483015261024482018151809152610264906020828501928260051b86010193019160e051905b828210610b885750506080805160a001516001600160a01b0316610104860152805160c00151610124860152805160e001511515610144860152805161010001511515610164860152805161012001511515610184860152516101400151848403606319016101a48601526109869361096c93506109529250906116f3565b6080516101600151848203606319016101c48601526116f3565b6080516101800151838203606319016101e48501526116f3565b6101a060805101519060631983820301610204840152815180825260208201916020808360051b83010194019260e051915b838310610b0c5750505050506101c0608051015190606319838203016102248401526020808351928381520192019060e0515b818110610af357505060e080516024850152805160448501525160209492849003928492506001600160a01b03165af1908115610ab45760e05191610ac1575b505b607e5460c0516001600160a01b03163b156101855760405191631003d99d60e01b8352336004840152602483015260448201526080606482015260e0518180610a7860848201611775565b038160e05160018060a01b0360c051165af18015610ab457610a9f575b6001805560e05180f35b610aa89061166d565b60e0518015610a955780fd5b6040513d60e051823e3d90fd5b90506020813d602011610aeb575b81610adc602093836116d2565b810103126102ec575181610a2b565b3d9150610acf565b82518452869450602093840193909201916001016109eb565b919395509193601f19828203018352855190815180825260208201906020808260051b85010194019260e0515b828110610b5d575050505050602080600192970193019301909287959492936109b8565b9091929394602080610b7b600193601f1987820301895289516116f3565b9701950193929101610b39565b9193909294506102631987820301825284519060206040820192805183520151916040602083015282518091526060820190602060608260051b85010194019260e0515b828110610bee57505050505060208060019296019201920186949391926108d3565b9091929394605f198382030185528551906020604082019260018060a01b0381511683520151906040602082015281518093526020606082019260608560051b840101610100520160a05260e051915b838310610c61575050505060016020806101005197019501910192919092610bcc565b6020600191605f19846101005103018152610cb360a051516040610c9482516060610100515260606101005101906116f3565b91858101518661010051015201516101005160408184039101526116f3565b610100528160a0510160a05201920191610c3e565b81356001600160401b0381116101855760443501604060231982360301126101855760405190610cf78261169c565b602481013582526044810135906001600160401b038211610185573660438383010112156101855760248282010135610d2f81611819565b92610d3d60405194856116d2565b81845260208401903660448460051b83870101011161018557604481850101915b60448460051b83870101018310610d89575050505050918160209384809401528152019101906107d0565b82356001600160401b0381116101855760408684018201360360431901126101855760405190610db88261169c565b8684018101604401356001600160a01b03811690036102ec57868401810160448101358352606401356001600160401b038111610185573660638284888c0101010112156101855760448183878b010101013590610e1582611819565b92610e2360405194856116d2565b82845260208401913660648c83858c8960051b9301010101011161018557606481838a8e01010101925b60648c83858c8960051b9301010101018410610e7d57505050505091816020938480940152815201920191610d5e565b8335906001600160401b0382116101855760608a8e018501840183013603606319011261018557604051918260608101106001600160401b03606085011117610f7157606083016040528a8e01850184018101606401356001600160401b038111610185578b8f01860185018201013660838201121561018557818f878e8892610f1360a4963690608460648201359101611830565b895201010101608481013560208601520135906001600160401b038211610185578b8f01860185010101903660838301121561018557602092610f6184933690608460648201359101611830565b6040820152815201930192610e4d565b634e487b7160e01b600052604160045260246000fd5b602090813d8311610fab575b610f9d81836116d2565b810103126102ec5783610709565b503d610f93565b60405163036be76f60e61b8152600490fd5b90506020813d602011610ff6575b81610fdf602093836116d2565b8101031261018557610ff090611768565b846106ac565b3d9150610fd2565b9150925073__$183737d697d7aa9b5df9988cbe11bc4947$__91823b1561018557604051636336129b60e11b815260e05160c0516001600160a01b039485166004840152939093166024820152604481019190915291829060649082905af48015610ab45761106e575b50610a2d565b6110779061166d565b60e05180156110685780fd5b9091506020813d6020116110bf575b8161109f602093836116d2565b8101031261018557516001600160a01b038116810361018557908461062d565b3d9150611092565b90506020813d6020116110f1575b816110e2602093836116d2565b810103126102ec5751826105c2565b3d91506110d5565b6111029061166d565b81610566565b50610120813d610120116111dd575b8161112561012093836116d2565b8101031261018557604051806101208101106001600160401b03610120830111176111c55761012081016040528151916001600160a01b0383168303610185576020928252611175838201611768565b8383015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080910151908201526104e7565b634e487b7160e01b60e051526041600452602460e051fd5b3d9150611117565b6020813d602011611218575b816111fe602093836116d2565b810103126101855761120f90611733565b60c052816104aa565b3d91506111f1565b61122861188a565b610458565b506077541515610453565b604051634288230360e01b8152600490fd5b50607d544211610442565b6040516333df015b60e01b8152600490fd5b90506020813d602011611299575b81611282602093836116d2565b810103126101855761129390611768565b8261042d565b3d9150611275565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b346101855760e051806003193601126101825761130161188a565b60e05180f35b346101855760e05180600319360112610182576020606d5460801c604051908152f35b346101855760e0518060031936011261018257606b546040516001600160a01b039091168152602090f35b346101855760e05180600319360112610182576066546040516001600160a01b039091168152602090f35b346101855760e05180600319360112610182576085546040516001600160a01b039091168152602090f35b346101855760e05180600319360112610182576067546040516001600160a01b039091168152602090f35b346101855760e05180600319360112610182576020607954604051908152f35b346101855760e05180600319360112610182576020607254604051908152f35b346101855760e05180600319360112610182576069546040516001600160a01b039091168152602090f35b346101855760e05180600319360112610182576020607054604051908152f35b346101855760e05180600319360112610182576076546040516001600160a01b039091168152602090f35b346101855760e0518060031936011261018257602060ff607854166040519015158152f35b346101855760e05180600319360112610182576020606e5460801c604051908152f35b346101855760e05180600319360112610182576020606f5460801c604051908152f35b346101855760e05180600319360112610182576040519060655461151a81611633565b808452906001908181169081156115b9575060011461155c575b61155884611544818603826116d2565b6040519182916020835260208301906116f3565b0390f35b60e08051606590525192507f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c75b8284106115a157505050810160200161154482611534565b80546020858701810191909152909301928101611589565b60ff191660208087019190915292151560051b850190920192506115449150839050611534565b346102ec5760203660031901126102ec576004359063ffffffff60e01b82168092036102ec57602091630f3e84ab60e01b8114908115611622575b5015158152f35b6301ffc9a760e01b1490508361161b565b90600182811c92168015611663575b602083101461164d57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611642565b6001600160401b038111610f7157604052565b6101e081019081106001600160401b03821117610f7157604052565b604081019081106001600160401b03821117610f7157604052565b602081019081106001600160401b03821117610f7157604052565b90601f801991011681019081106001600160401b03821117610f7157604052565b919082519283825260005b84811061171f575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016116fe565b51906001600160a01b03821682036102ec57565b908060209392818452848401376000828201840152601f01601f1916010190565b519081151582036102ec57565b6065546000929161178582611633565b808252916001908181169081156117fc57506001146117a357505050565b9192935060656000527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c7916000925b8484106117e457505060209250010190565b805460208585018101919091529093019281016117d2565b915050602093945060ff929192191683830152151560051b010190565b6001600160401b038111610f715760051b60200190565b9291926001600160401b038211610f715760405191611859601f8201601f1916602001846116d2565b8294818452818301116102ec578281602093846000960137010152565b51906001600160801b03821682036102ec57565b6083546040805163a03e4bc360e01b815290916000916004916020916001600160a01b0391839082908690829086165afa908115611ac2579082918691611d1a575b50169281606b5416918651926335ea6a7560e01b845280838501526101e080856024818a5afa948515611b07579086918996611b98575b5050826101006024960151168951958680926370a0823160e01b825230888301525afa938415611b51578794611b65575b5060ff19607854166078558315611b5b578751631a4ca37b60e21b815283810191909152600019602482015230604482015284816064818a8a5af18015611b5157908591611b24575b507f6407790cdabc5d219eaf901091d6beccc475533065c2fbd374c8a32b1c66795886918951868152a26077548084116119bf575b5050505050509050607755565b8303928311611b115773__$183737d697d7aa9b5df9988cbe11bc4947$__90828582606b541692608354168a51958680926361d027b360e01b82525afa938415611b07578894611ad0575b50823b15611acc578851636336129b60e11b81526001600160a01b0392831691810191825293909116602082015260408101849052869183918290819060600103915af48015611ac257611a8f575b507f590e5a1563e349794fdcc066c4d5047f5e478f9e41707fc1bbad830146b7a17792939451908152a2803880808080806119b2565b93611abb7f590e5a1563e349794fdcc066c4d5047f5e478f9e41707fc1bbad830146b7a177949561166d565b9392611a59565b86513d87823e3d90fd5b8780fd5b9093508581813d8311611b00575b611ae881836116d2565b81010312611acc57611af990611733565b9238611a0a565b503d611ade565b89513d8a823e3d90fd5b634e487b7160e01b865260118252602486fd5b813d8311611b4a575b611b3781836116d2565b81010312611b4657833861197d565b8580fd5b503d611b2d565b88513d89823e3d90fd5b5050505050505050565b9093508481813d8311611b91575b611b7d81836116d2565b81010312611b8d57519238611934565b8680fd5b503d611b73565b9150919293945080823d8411611d13575b611bb381836116d2565b810103918212611acc5785895192611bca84611680565b12611acc5788518681018181106001600160401b03821117611d00578a52815181528252611bf9868201611876565b86830152611c08898201611876565b89830152611c1860608201611876565b6060830152611c2960808201611876565b6080830152611c3a60a08201611876565b60a083015260c081015164ffffffffff81168103611cfc5760c083015260e081015161ffff81168103611cfc57936101008388936024989760e0859897015282611c85818301611733565b90830152610120611c97818301611733565b90830152610140611ca9818301611733565b90830152610160611cbb818301611733565b90830152610180611ccd818301611876565b908301526101a0611cdf818301611876565b90830152611cf16101c0809201611876565b908201529650611903565b8880fd5b634e487b7160e01b8a526041875260248afd5b503d611ba9565b809250848092503d8311611d4f575b611d3381836116d2565b81010312611d4b57611d458291611733565b386118cc565b8480fd5b503d611d2956fea26469706673582212207677660561000997fdd77ae9fa125ce79b86f7e6b14dc60612c30a801554377064736f6c63430008120033";

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

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BucketExtension> {
    return super.deploy(overrides || {}) as Promise<BucketExtension>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BucketExtension {
    return super.attach(address) as BucketExtension;
  }
  connect(signer: Signer): BucketExtension__factory {
    return super.connect(signer) as BucketExtension__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BucketExtensionInterface {
    return new utils.Interface(_abi) as BucketExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BucketExtension {
    return new Contract(address, _abi, signerOrProvider) as BucketExtension;
  }
}

export interface BucketExtensionLibraryAddresses {
  ["contracts/libraries/TokenApproveLibrary.sol:TokenApproveLibrary"]: string;
  ["contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"]: string;
}
