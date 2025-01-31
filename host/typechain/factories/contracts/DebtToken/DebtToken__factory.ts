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
  DebtToken,
  DebtTokenInterface,
} from "../../../contracts/DebtToken/DebtToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        internalType: "bytes4",
        name: "error",
        type: "bytes4",
      },
    ],
    name: "Log",
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
    name: "Mint",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
    ],
    name: "batchBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bucket",
    outputs: [
      {
        internalType: "contract IBucketV3",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeDecreaser",
    outputs: [
      {
        internalType: "contract IFeeExecutor",
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
      {
        internalType: "uint256",
        name: "",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_bucketsFactory",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
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
    name: "scaledTotalSupply",
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
        internalType: "contract IBucket",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "setBucket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFeeExecutor",
        name: "_feeDecreaser",
        type: "address",
      },
    ],
    name: "setFeeDecreaser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IActivityRewardDistributor",
        name: "_traderRewardDistributor",
        type: "address",
      },
    ],
    name: "setTraderRewardDistributor",
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
    inputs: [],
    name: "traderRewardDistributor",
    outputs: [
      {
        internalType: "contract IActivityRewardDistributor",
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
      {
        internalType: "uint256",
        name: "",
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
    name: "transferFrom",
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
  "0x6080806040523460bd576000549060ff8260081c16606b575060ff808216036031575b604051611d3290816100c38239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a1386022565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c90816301ffc9a7146116db5750806306fdde0314611646578063095ea7b314610fb25780630a3f0f00146114ea578063156e29f61461123557806318160ddd146111e05780631da24f3e146111a657806323b872dd14611183578063313ce5671461115f5780633950935114610fb257806370a08231146110ad5780637ed095fe1461108457806395d89b4114610fb7578063a457c2d714610fb2578063a9059cbb14610f85578063b1bf962d14610f67578063c029e86814610f3e578063dd62ed3e14610ef3578063de7ea79d14610a7c578063e4a24bc0146109ae578063eb1738e51461057d578063ed18aea9146103e0578063f31157c2146103b75763f5298aca1461012957600080fd5b346103b457610137366117d0565b6097549092906001600160a01b03163381036103a2576001600160a01b03821693841561039057831561037e5761016e81856119ff565b90811561036c5760985487916001600160a01b0390911690816102bc575b50505061019a915082611b83565b60995484906001600160a01b0316806101de575b50837fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5602085604051908152a280f35b609754858352603360205260408320546001600160a01b0390911691803b156102b85760405163266aa8a560e01b81526001600160a01b03938416600482015294909216602485015260448401526001606484015281908390608490829084905af191826102a3575b50507fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5916020911560001461029e57600080516020611cdd833981519152826040516312df74af60e21b8152a15b915083386101ae565b610295565b816102ad916117fa565b6102b8578338610247565b8380fd5b8783526033602052604083205491803b156102b85760405163627749b360e11b81526001600160a01b0388811660048301526024820194909452959092166044860152606485015281908490608490829084905af19283610353575b505061019a911560001461034e57600080516020611cdd833981519152602060405163303a98e360e21b8152a15b85388061018c565b610346565b8161035d916117fa565b610368578538610318565b8580fd5b604051630512674560e41b8152600490fd5b604051633abe877f60e11b8152600490fd5b60405163044aa57560e41b8152600490fd5b60405163d291739b60e01b8152600490fd5b80fd5b50346103b457806003193601126103b4576098546040516001600160a01b039091168152602090f35b50346103b45760203660031901126103b4576004356001600160a01b0381169081900361057957609754604051637b10399960e01b815290602090829060049082906001600160a01b03165afa90811561051057604491602091859161054c575b50604051632474521560e21b81526004810186905233602482015292839182906001600160a01b03165afa90811561051057839161052d575b501561051b57801580156104a9575b15610390576bffffffffffffffffffffffff60a01b609854161760985580f35b506040516301ffc9a760e01b8152636c91bd0560e11b6004820152602081602481855afa9081156105105783916104e1575b50610489565b610503915060203d602011610509575b6104fb81836117fa565b8101906118fa565b386104db565b503d6104f1565b6040513d85823e3d90fd5b60405163036be76f60e61b8152600490fd5b610546915060203d602011610509576104fb81836117fa565b3861047a565b61056c9150823d8411610572575b61056481836117fa565b8101906118db565b38610441565b503d61055a565b5080fd5b50346103b45760803660031901126103b45760043567ffffffffffffffff811161057957366023820112156105795780600401356105ba81611889565b916105c860405193846117fa565b8183526024602084019260051b8201019036821161078e57602401915b8183106109895750505060243567ffffffffffffffff811161091957366023820112156109195780600401359061061b82611889565b9161062960405193846117fa565b8083526024602084019160051b8301019136831161036857602401905b82821061097957505050604435916064359160018060a01b0360975416903382036103a25761067484611912565b9061067e85611912565b60985460995491976001600160a01b0392831615159591909216918991831515835b8a811061091d575061086b575b5050809695949392915050855b858110610792575050506106cc578280f35b6099546097546001600160a01b0390811692911690813b1561078e578461071c93819561072e604051998a978896879563c88157e360e01b8752600487015260a0602487015260a486019061196e565b848103600319016044860152906119ab565b9060648301526001608483015203925af19182610779575b505061077457600080516020611cdd83398151915260206040516312df74af60e21b8152a15b388181808280f35b61076c565b81610783916117fa565b610579578138610746565b8480fd5b8293949596506107a58160019394611944565b516107ff575b818060a01b036107bb8288611944565b51167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca560206107ea8487611944565b51604051908152a201908795949392916106ba565b84610826838060a01b03610813848a611944565b511661081f8488611944565b5190611b83565b156107ab5761085b828060a01b0361083e8389611944565b51166001600160a01b031660009081526033602052604090205490565b610865828a611944565b526107ab565b833b15610919576108b6936108a4848a8d948296604051998a97889687956305c6a25960e21b875260806004880152608487019061196e565b858103600319016024870152906119ab565b916044840152606483015203925af19182610900575b50506108fb57600080516020611cdd833981519152602060405163303a98e360e21b8152a15b388781806106ad565b6108f2565b8161090a916117fa565b6109155787386108cc565b8780fd5b8280fd5b839450816109396001939495610933848b611944565b516119ff565b610943838b611944565b52610954575b01908b9392916106a0565b8b6109738261096d8d61083e83888060a01b0392611944565b92611944565b52610949565b8135815260209182019101610646565b82356001600160a01b03811681036109a9578152602092830192016105e5565b600080fd5b50346103b45760203660031901126103b4576004356001600160a01b0381169081900361057957609a546001600160a01b0316330361051b576097546001600160a01b038116610a6a576040516301ffc9a760e01b8152633aa17d5560e11b6004820152602081602481865afa908115610a5f578491610a40575b5015610390576001600160a01b0319161760975580f35b610a59915060203d602011610509576104fb81836117fa565b38610a29565b6040513d86823e3d90fd5b6040516307d64eb160e21b8152600490fd5b50346103b45760803660031901126103b45760043567ffffffffffffffff811161057957610aae903690600401611832565b60243567ffffffffffffffff811161091957610ace903690600401611832565b906044359160ff831683036102b8576064356001600160a01b038116919082900361078e5784549260ff8460081c161593848095610ee6575b8015610ecf575b15610e735760ff198116600117875584610e62575b50610b3d60ff875460081c16610b3881611b23565b611b23565b80519067ffffffffffffffff8211610e4e578190610b5c6036546118a1565b601f8111610dd9575b50602090601f8311600114610d68578892610d5d575b50508160011b916000199060031b1c1916176036555b80519067ffffffffffffffff8211610d49578190610bb06037546118a1565b601f8111610cd4575b50602090601f8311600114610c63578792610c58575b50508160011b916000199060031b1c1916176037555b835492610bf760ff8560081c16611b23565b609a549060ff60a01b9060a01b16906affffffffffffffffffffff60a81b161717609a55610c23575080f35b61ff00191681557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160018152a180f35b015190503880610bcf565b60378852600080516020611cbd8339815191529250601f198416885b818110610cbc5750908460019594939210610ca3575b505050811b01603755610be5565b015160001960f88460031b161c19169055388080610c95565b92936020600181928786015181550195019301610c7f565b90915060378752601f830160051c600080516020611cbd833981519152019060208410610d33575b90601f8493920160051c600080516020611cbd83398151915201905b818110610d255750610bb9565b888155849350600101610d18565b600080516020611cbd8339815191529150610cfc565b634e487b7160e01b86526041600452602486fd5b015190503880610b7b565b60368952600080516020611c7d8339815191529250601f198416895b818110610dc15750908460019594939210610da8575b505050811b01603655610b91565b015160001960f88460031b161c19169055388080610d9a565b92936020600181928786015181550195019301610d84565b90915060368852601f830160051c600080516020611c7d833981519152019060208410610e38575b90601f8493920160051c600080516020611c7d83398151915201905b818110610e2a5750610b65565b898155849350600101610e1d565b600080516020611c7d8339815191529150610e01565b634e487b7160e01b87526041600452602487fd5b61ffff191661010117865538610b23565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b158015610b0e5750600160ff821614610b0e565b50600160ff821610610b07565b50346103b45760403660031901126103b4576040602091610f12611779565b610f1a61178f565b6001600160a01b039182168352603485528383209116825283522054604051908152f35b50346103b457806003193601126103b4576097546040516001600160a01b039091168152602090f35b50346103b457806003193601126103b4576020603554604051908152f35b50346103b45760403660031901126103b457610f9f611779565b506040516365cf163b60e11b8152600490fd5b6117a5565b50346103b457806003193601126103b457604051908060375490610fda826118a1565b808552916001811690811561105d5750600114611012575b61100e84611002818603826117fa565b60405191829182611730565b0390f35b60378152600080516020611cbd833981519152939250905b8082106110435750909150810160200161100282610ff2565b91926001816020925483858801015201910190929161102a565b60ff191660208087019190915292151560051b850190920192506110029150839050610ff2565b50346103b457806003193601126103b4576099546040516001600160a01b039091168152602090f35b50346103b45760203660031901126103b4576001600160a01b036110cf611779565b16815260336020526040812054906004602060018060a01b0360975416604051928380926368d0612f60e01b82525afa9182156111535791611120575b60206111188385611aba565b604051908152f35b90506020813d60201161114b575b8161113b602093836117fa565b810103126109a95751602061110c565b3d915061112e565b604051903d90823e3d90fd5b50346103b457806003193601126103b457602060ff609a5460a01c16604051908152f35b50346103b45760603660031901126103b45761119d611779565b50610f9f61178f565b50346103b45760203660031901126103b45760206111186111c5611779565b6001600160a01b031660009081526033602052604090205490565b50346103b457806003193601126103b4576035546097546040516368d0612f60e01b815291929190602090829060049082906001600160a01b03165afa91821561115357916111205760206111188385611aba565b50346103b457611244366117d0565b6097549092906001600160a01b03163381036103a2576001600160a01b03821693841561039057831561037e5761127b81856119ff565b80156114d8576098548693889390916001600160a01b0316806113f7575b5050506020600080516020611c9d833981519152916112ba81603554611a97565b6035558484526033825260408420818154019055604051908152a360995484906001600160a01b031680611319575b50837f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885602085604051908152a280f35b6097546001600160a01b03848116600090815260336020526040902054911691803b156102b85760405163266aa8a560e01b81526001600160a01b03938416600482015294909216602485015260448401526001606484015281908390608490829084905af191826113e2575b50507f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688591602091156000146113dd57600080516020611cdd833981519152826040516312df74af60e21b8152a15b915083386112e9565b6113d4565b816113ec916117fa565b6102b8578338611386565b90919392945061141a8660018060a01b0316600052603360205260406000205490565b93813b156102b85760405163627749b360e11b81526001600160a01b03888116600483015260248201969096529416604485015260648401919091528290608490829084905af190816114b1575b50600080516020611c9d833981519152602086938893156000146114ac57600080516020611cdd8339815191528260405163303a98e360e21b8152a15b9138611299565b6114a5565b6020876114cf889599600080516020611c9d833981519152946117fa565b97935050611468565b60405163abd351b160e01b8152600490fd5b50346103b45760203660031901126103b4576004356001600160a01b0381169081900361057957609754604051637b10399960e01b815290602090829060049082906001600160a01b03165afa908115610510576044916020918591611629575b50604051632474521560e21b81526004810186905233602482015292839182906001600160a01b03165afa90811561051057839161160a575b501561051b57801580156115b3575b15610390576bffffffffffffffffffffffff60a01b609954161760995580f35b506040516301ffc9a760e01b815263187d5ef960e11b6004820152602081602481855afa9081156105105783916115eb575b50611593565b611604915060203d602011610509576104fb81836117fa565b386115e5565b611623915060203d602011610509576104fb81836117fa565b38611584565b6116409150823d84116105725761056481836117fa565b3861154b565b50346103b457806003193601126103b457604051908060365490611669826118a1565b808552916001811690811561105d57506001146116905761100e84611002818603826117fa565b60368152600080516020611c7d833981519152939250905b8082106116c15750909150810160200161100282610ff2565b9192600181602092548385880101520191019092916116a8565b9050346105795760203660031901126105795760043563ffffffff60e01b81168091036109195760209250633d5b079f60e11b811490811561171f575b5015158152f35b6301ffc9a760e01b14905038611718565b91909160208152825180602083015260005b818110611763575060409293506000838284010152601f8019910116010190565b8060208092870101516040828601015201611742565b600435906001600160a01b03821682036109a957565b602435906001600160a01b03821682036109a957565b346109a95760403660031901126109a9576117be611779565b5060405162944b8d60e21b8152600490fd5b60609060031901126109a9576004356001600160a01b03811681036109a957906024359060443590565b90601f8019910116810190811067ffffffffffffffff82111761181c57604052565b634e487b7160e01b600052604160045260246000fd5b81601f820112156109a95780359067ffffffffffffffff821161181c5760405192611867601f8401601f1916602001856117fa565b828452602083830101116109a957816000926020809301838601378301015290565b67ffffffffffffffff811161181c5760051b60200190565b90600182811c921680156118d1575b60208310146118bb57565b634e487b7160e01b600052602260045260246000fd5b91607f16916118b0565b908160209103126109a957516001600160a01b03811681036109a95790565b908160209103126109a9575180151581036109a95790565b9061191c82611889565b61192960405191826117fa565b828152809261193a601f1991611889565b0190602036910137565b80518210156119585760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b906020808351928381520192019060005b81811061198c5750505090565b82516001600160a01b031684526020938401939092019160010161197f565b906020808351928381520192019060005b8181106119c95750505090565b82518452602093840193909201916001016119bc565b81156119e9570490565b634e487b7160e01b600052601260045260246000fd5b906000916b033b2e3c9fd0803ce80000008102928184046b033b2e3c9fd0803ce80000001482151715611a8357506b033b2e3c9fd0803ce8000000830403611a7257611a4e8160011c83611a97565b918210611a6157611a5e916119df565b90565b630a77254f60e01b60005260046000fd5b631550e8b760e01b60005260046000fd5b634e487b7160e01b81526011600452602490fd5b91908201809211611aa457565b634e487b7160e01b600052601160045260246000fd5b6000918015918215611afd575b505015611a72576b019d971e4fe8401e74000000810190818111611aa4578110611a61576b033b2e3c9fd0803ce8000000900490565b80820293509150811582840482141715611aa457611b1b90836119df565b143880611ac7565b15611b2a57565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b6001600160a01b03168015611c2d5780600052603360205260406000205491808310611bdd57602081600080516020611c9d83398151915292600095858752603384520360408620558060355403603555604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fdfe4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b8ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae97e3d6f5d9606f45b75b508f1245f23d4d4e5470e8adae85f3156477ffdcdff0a264697066735822122013f6b664bb7165c6956f96d3a3c877aa23111c2b283836da5c692f78302c13aa64736f6c634300081a0033";

type DebtTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DebtTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DebtToken__factory extends ContractFactory {
  constructor(...args: DebtTokenConstructorParams) {
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
      DebtToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DebtToken__factory {
    return super.connect(runner) as DebtToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DebtTokenInterface {
    return new Interface(_abi) as DebtTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DebtToken {
    return new Contract(address, _abi, runner) as unknown as DebtToken;
  }
}
