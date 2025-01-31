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
import type { EPMXToken, EPMXTokenInterface } from "../../contracts/EPMXToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "WhitelistedAddressAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "WhitelistedAddressRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "addAddressToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "addAddressesToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isWhitelisted",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "removeAddressFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "removeAddressesFromWhitelist",
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
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "whitelist",
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
  "0x60a08060405234610591576040816117cd803803809161001f8285610596565b8339810103126105915761003e6020610037836105b9565b92016105b9565b90806040519261004f604085610596565b601284527122b0b9363c90283934b6b2bc102a37b5b2b760711b60208501526040519361007d604086610596565b60048552630caa09ab60e31b60208601528051906001600160401b03821161048e5760035490600182811c92168015610587575b602083101461046e5781601f849311610517575b50602090601f83116001146104af576000926104a4575b50508160011b916000199060031b1c1916176003555b83516001600160401b03811161048e57600454600181811c91168015610484575b602082101461046e57601f8111610409575b50602094601f82116001146103a257948192939495600092610397575b50508160011b916000199060031b1c1916176004555b6040516301ffc9a760e01b8152637965db0b60e01b60048201526020816024816001600160a01b0386165afa90811561038b57600091610349575b5015610337576080526001600160a01b031615610330575b6001600160a01b031680156102eb576000805260056020527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc5460ff1680156102d3575b80156102cb575b156102b9576002546b033b2e3c9fd0803ce800000081018091116102a35760025580600052600060205260406000206b033b2e3c9fd0803ce8000000815401905560007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60206040516b033b2e3c9fd0803ce80000008152a36040516111ff90816105ce8239608051818181610192015281816105f6015281816106c9015281816109a90152610ae30152f35b634e487b7160e01b600052601160045260246000fd5b604051636a556bdb60e01b8152600490fd5b5060016101f6565b5080600052600560205260ff604060002054166101ef565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b50336101ab565b60405163044aa57560e41b8152600490fd5b6020813d602011610383575b8161036260209383610596565b8101031261037f575190811515820361037c575038610193565b80fd5b5080fd5b3d9150610355565b6040513d6000823e3d90fd5b015190503880610142565b601f198216956004600052806000209160005b8881106103f1575083600195969798106103d8575b505050811b01600455610158565b015160001960f88460031b161c191690553880806103ca565b919260206001819286850151815501940192016103b5565b60046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c81019160208410610464575b601f0160051c01905b8181106104585750610125565b6000815560010161044b565b9091508190610442565b634e487b7160e01b600052602260045260246000fd5b90607f1690610113565b634e487b7160e01b600052604160045260246000fd5b0151905038806100dc565b600360009081528281209350601f198516905b8181106104ff57509084600195949392106104e6575b505050811b016003556100f2565b015160001960f88460031b161c191690553880806104d8565b929360206001819287860151815501950193016104c2565b60036000529091507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f840160051c8101916020851061057d575b90601f859493920160051c01905b81811061056e57506100c5565b60008155849350600101610561565b9091508190610553565b91607f16916100b1565b600080fd5b601f909101601f19168101906001600160401b0382119082101761048e57604052565b51906001600160a01b03821682036105915756fe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a714610de35750806306fdde0314610d24578063095ea7b314610cfe57806318160ddd14610ce057806323b872dd14610c2257806324953eaa14610a76578063286dd3f51461096e578063313ce5671461095257806339509351146108ea5780633af32abf1461047457806342966c681461073257806370a08231146106f85780637b103999146106b35780637b9417c8146105bb57806395d89b41146104b35780639b19251a14610474578063a457c2d7146103cd578063a9059cbb1461039c578063dd62ed3e1461034b5763e2ec6ec3146100fb57600080fd5b346103305760203660031901126103305760043567ffffffffffffffff811161033057366023820112156103305780600401359067ffffffffffffffff8211610335578160051b90604051926101546020840185610ec3565b8352602460208401928201019036821161033057602401915b81831061031057604051632474521560e21b81526000600482015233602482015284907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690602081604481855afa908115610304576000916102e5575b50156102985760005b82518110156102e35760009060018060a01b0360208260051b8601015116604051632474521560e21b8152836004820152336024820152602081604481885afa9081156102d85784916102aa575b501561029857808352600560205260ff604084205416610286577fd1bba68c128cc3f427e5831b3c6f99f480b6efa6b9e80c757768f6124158cc3f8382600195526005602052604081208560ff1982541617905580a2016101dc565b60405163503d101f60e11b8152600490fd5b60405163036be76f60e61b8152600490fd5b6102cb915060203d81116102d1575b6102c38183610ec3565b810190610ee5565b8661022a565b503d6102b9565b6040513d86823e3d90fd5b005b6102fe915060203d6020116102d1576102c38183610ec3565b836101d3565b6040513d6000823e3d90fd5b82356001600160a01b03811681036103305781526020928301920161016d565b600080fd5b634e487b7160e01b600052604160045260246000fd5b3461033057604036600319011261033057610364610e97565b61036c610ead565b6001600160a01b039182166000908152600160209081526040808320949093168252928352819020549051908152f35b34610330576040366003190112610330576103c26103b8610e97565b6024359033611005565b602060405160018152f35b34610330576040366003190112610330576103e6610e97565b60243590336000526001602052604060002060018060a01b03821660005260205260406000205491808310610421576103c292039033610efd565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608490fd5b34610330576020366003190112610330576001600160a01b03610495610e97565b166000526005602052602060ff604060002054166040519015158152f35b346103305760003660031901126103305760405160006004548060011c906001811680156105b1575b60208310811461059d578285529081156105795750600114610519575b6105158361050981850382610ec3565b60405191829182610e4e565b0390f35b91905060046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b916000905b80821061055f575090915081016020016105096104f9565b919260018160209254838588010152019101909291610547565b60ff191660208086019190915291151560051b8401909101915061050990506104f9565b634e487b7160e01b84526022600452602484fd5b91607f16916104dc565b34610330576020366003190112610330576105d4610e97565b604051632474521560e21b8152600060048201523360248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561030457600091610694575b5015610298576001600160a01b031660008181526005602052604090205460ff16610286578060005260056020526040600020600160ff198254161790557fd1bba68c128cc3f427e5831b3c6f99f480b6efa6b9e80c757768f6124158cc3f600080a2005b6106ad915060203d6020116102d1576102c38183610ec3565b8261062f565b34610330576000366003190112610330576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610330576020366003190112610330576001600160a01b03610719610e97565b1660005260006020526020604060002054604051908152f35b3461033057602036600319011261033057600435331561089b5733600052600560205260ff604060002054168015610867575b801561085f575b1561084d573360005260006020526040600020548181106107fd57819033600052600060205203604060002055806002540360025560006040518281527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203392a36040519081527fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca560203392a2005b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b604051636a556bdb60e01b8152600490fd5b50600061076c565b506000805260056020527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc5460ff16610765565b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b3461033057604036600319011261033057610903610e97565b336000526001602052604060002060018060a01b038216600052602052604060002054602435810180911161093c576103c29133610efd565b634e487b7160e01b600052601160045260246000fd5b3461033057600036600319011261033057602060405160128152f35b3461033057602036600319011261033057610987610e97565b604051632474521560e21b8152600060048201523360248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561030457600091610a57575b5015610298576001600160a01b031660008181526005602052604090205460ff1615610a4557806000526005602052604060002060ff1981541690557ff1abf01a1043b7c244d128e8595cf0c1d10743b022b03a02dffd8ca3bf729f5a600080a2005b6040516335876baf60e01b8152600490fd5b610a70915060203d6020116102d1576102c38183610ec3565b826109e2565b346103305760203660031901126103305760043567ffffffffffffffff8111610330573660238201121561033057806004013567ffffffffffffffff8111610330573660248260051b8401011161033057604051632474521560e21b8152600060048201523360248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690602081604481855afa90811561030457600091610c03575b50156102985760005b828110156102e3576000906024600582901b860101356001600160a01b03811690819003610bff57604051632474521560e21b815260048101849052336024820152602081604481885afa9081156102d8578491610be1575b501561029857808352600560205260ff60408420541615610a45577ff1abf01a1043b7c244d128e8595cf0c1d10743b022b03a02dffd8ca3bf729f5a83826001955260056020526040812060ff19815416905580a201610b2d565b610bf9915060203d81116102d1576102c38183610ec3565b87610b86565b8280fd5b610c1c915060203d6020116102d1576102c38183610ec3565b84610b24565b3461033057606036600319011261033057610c3b610e97565b610c43610ead565b6001600160a01b0382166000908152600160208181526040808420338552909152909120549260443592918401610c7f575b6103c29350611005565b828410610c9b57610c96836103c295033383610efd565b610c75565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b34610330576000366003190112610330576020600254604051908152f35b34610330576040366003190112610330576103c2610d1a610e97565b6024359033610efd565b346103305760003660031901126103305760405160006003548060011c90600181168015610dd9575b60208310811461059d578285529081156105795750600114610d79576105158361050981850382610ec3565b91905060036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b916000905b808210610dbf575090915081016020016105096104f9565b919260018160209254838588010152019101909291610da7565b91607f1691610d4d565b34610330576020366003190112610330576004359063ffffffff60e01b82168092036103305760209163ede5d28360e01b8114908115610e3d575b8115610e2c575b5015158152f35b6301ffc9a760e01b14905083610e25565b6336372b0760e01b81149150610e1e565b91909160208152825180602083015260005b818110610e81575060409293506000838284010152601f8019910116010190565b8060208092870101516040828601015201610e60565b600435906001600160a01b038216820361033057565b602435906001600160a01b038216820361033057565b90601f8019910116810190811067ffffffffffffffff82111761033557604052565b90816020910312610330575180151581036103305790565b6001600160a01b0316908115610fb4576001600160a01b0316918215610f645760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b6001600160a01b0316908115611176576001600160a01b03169182156111255781600052600560205260ff60406000205416801561110d575b8015611105575b1561084d578160005260006020526040600020548181106110b157817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9260209285600052600084520360406000205584600052600082526040600020818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b506000611045565b5082600052600560205260ff6040600020541661103e565b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fdfea2646970667358221220c302008c6485c3875f415939615255f89fa549e5b9bc543e890496bb579dcc7164736f6c634300081a0033";

type EPMXTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EPMXTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EPMXToken__factory extends ContractFactory {
  constructor(...args: EPMXTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _recipient: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_recipient, _registry, overrides || {});
  }
  override deploy(
    _recipient: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_recipient, _registry, overrides || {}) as Promise<
      EPMXToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EPMXToken__factory {
    return super.connect(runner) as EPMXToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EPMXTokenInterface {
    return new Interface(_abi) as EPMXTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EPMXToken {
    return new Contract(address, _abi, runner) as unknown as EPMXToken;
  }
}
