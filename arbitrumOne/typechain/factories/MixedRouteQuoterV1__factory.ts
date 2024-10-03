/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MixedRouteQuoterV1,
  MixedRouteQuoterV1Interface,
} from "../MixedRouteQuoterV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factoryV2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factorySushi",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
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
    name: "factory",
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
    name: "factorySushi",
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
    name: "factoryV2",
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
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint160[]",
        name: "v3SqrtPriceX96AfterList",
        type: "uint160[]",
      },
      {
        internalType: "uint32[]",
        name: "v3InitializedTicksCrossedList",
        type: "uint32[]",
      },
      {
        internalType: "uint256",
        name: "v3SwapGasEstimate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
        ],
        internalType:
          "struct IMixedRouteQuoterV1.QuoteExactInputSingleV2Params",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactInputSingleSushi",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
        ],
        internalType:
          "struct IMixedRouteQuoterV1.QuoteExactInputSingleV2Params",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactInputSingleV2",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType:
          "struct IMixedRouteQuoterV1.QuoteExactInputSingleV3Params",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quoteExactInputSingleV3",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96After",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "initializedTicksCrossed",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "gasEstimate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162002df838038062002df8833981810160405281019062000038919062000139565b83818173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050505050620001f3565b6000815190506200013381620001d9565b92915050565b600080600080608085870312156200015057600080fd5b6000620001608782880162000122565b9450506020620001738782880162000122565b9350506040620001868782880162000122565b9250506060620001998782880162000122565b91505092959194509250565b6000620001b282620001b9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001e481620001a5565b8114620001f057600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c612baf620002496000398061023c528061079952508061021852806102745250806101f452508061048452806107f552806109bb5250612baf6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063b174a0a711610066578063b174a0a714610122578063c45a015514610155578063cdca175314610173578063de2ba04a146101a6578063fa461e33146101d657610093565b80634aa4a4fc1461009857806368e0d4e1146100b65780637b4370b3146100d45780638a499286146100f2575b600080fd5b6100a06101f2565b6040516100ad91906126a7565b60405180910390f35b6100be610216565b6040516100cb91906126a7565b60405180910390f35b6100dc61023a565b6040516100e991906126a7565b60405180910390f35b61010c600480360381019061010791906122a7565b61025e565b604051610119919061277e565b60405180910390f35b61013c600480360381019061013791906122d0565b61029f565b60405161014c94939291906127ec565b60405180910390f35b61015d610482565b60405161016a91906126a7565b60405180910390f35b61018d6004803603810190610188919061216f565b6104a6565b60405161019d9493929190612799565b60405180910390f35b6101c060048036038101906101bb91906122a7565b610783565b6040516101cd919061277e565b60405180910390f35b6101f060048036038101906101eb91906121ff565b6107c4565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006102988260400151836000015184602001517f0000000000000000000000000000000000000000000000000000000000000000610989565b9050919050565b6000806000806000856020015173ffffffffffffffffffffffffffffffffffffffff16866000015173ffffffffffffffffffffffffffffffffffffffff1610905060006102f98760000151886020015189606001516109b4565b905060005a90508173ffffffffffffffffffffffffffffffffffffffff1663128acb08308561032b8c604001516109f3565b60008d6080015173ffffffffffffffffffffffffffffffffffffffff1614610357578c60800151610384565b8761037957600173fffd8963efd1fc6a506488495d951d5263988d2603610383565b60016401000276a3015b5b8d600001518e606001518f602001516040516020016103a59392919061266a565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016103d49594939291906126c2565b6040805180830381600087803b1580156103ed57600080fd5b505af192505050801561041e57506040513d601f19601f8201168201806040525081019061041b91906121c3565b60015b610475573d806000811461044e576040519150601f19603f3d011682016040523d82523d6000602084013e610453565b606091505b505a82039450610464818487610a29565b97509750975097505050505061047b565b50505050505b9193509193565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060608060006104b686610b23565b67ffffffffffffffff811180156104cc57600080fd5b506040519080825280602002602001820160405280156104fb5781602001602082028036833780820191505090505b50925061050786610b23565b67ffffffffffffffff8111801561051d57600080fd5b5060405190808252806020026020018201604052801561054c5781602001602082028036833780820191505090505b50915060005b6001156107785760008060006105678a610b3e565b925092509250600062800000821662ffffff16146105d5576105ce60405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018b81525061025e565b985061073e565b600062400000821662ffffff161461063d5761063660405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018b815250610783565b985061073d565b6000806000806106ba6040518060a001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018f81526020018762ffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681525061029f565b9350935093509350828b89815181106106cf57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050818a898151811061071657fe5b602002602001019063ffffffff16908163ffffffff16815250508089019850839c50505050505b5b838060010194505061074f8a610b8f565b156107645761075d8a610baa565b9950610770565b8897505050505061077a565b505050610552565b505b92959194509250565b60006107bd8260400151836000015184602001517f0000000000000000000000000000000000000000000000000000000000000000610989565b9050919050565b60008313806107d35750600082135b6107dc57600080fd5b60008060006107ea84610b3e565b92509250925061081c7f0000000000000000000000000000000000000000000000000000000000000000848484610bd3565b5060008060008813610860578473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161088600003610894565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610876000035b9150915060006108a58686866109b4565b90506000808273ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156108f057600080fd5b505afa158015610904573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092891906122f9565b505050505091509150841561094e57604051848152826020820152816040820152606081fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109809061275e565b60405180910390fd5b6000806000610999848787610bf3565b915091506109a8878383610d1c565b92505050949350505050565b60006109ea7f00000000000000000000000000000000000000000000000000000000000000006109e5868686610e1d565b610eb9565b90509392505050565b60007f80000000000000000000000000000000000000000000000000000000000000008210610a2157600080fd5b819050919050565b6000806000806000808773ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610a7857600080fd5b505afa158015610a8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab091906122f9565b9091929394955090919293509091925090915090505080925050610ad389611014565b809350819750829850505050610b0a82828a73ffffffffffffffffffffffffffffffffffffffff166110de9092919063ffffffff16565b9350858585899550955095509550505093509350935093565b60006003601401601483510381610b3657fe5b049050919050565b6000806000610b576000856117c190919063ffffffff16565b9250610b6d6014856118da90919063ffffffff16565b9050610b866003601401856117c190919063ffffffff16565b91509193909250565b60006003601401601460036014010101825110159050919050565b6060610bcc60036014016003601401845103846119e49092919063ffffffff16565b9050919050565b6000610be985610be4868686610e1d565b611bce565b9050949350505050565b6000806000610c028585611c1a565b509050600080610c13888888611cdc565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610c5857600080fd5b505afa158015610c6c573d6000803e3d6000fd5b505050506040513d6060811015610c8257600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614610d06578082610d09565b81815b8095508196505050505050935093915050565b6000808411610d93576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f494e53554646494349454e545f494e5055545f414d4f554e540000000000000081525060200191505060405180910390fd5b600083118015610da35750600082115b610dac57600080fd5b6000610dc36103e586611df590919063ffffffff16565b90506000610dda8483611df590919063ffffffff16565b90506000610e0583610df76103e889611df590919063ffffffff16565b611e2190919063ffffffff16565b9050808281610e1057fe5b0493505050509392505050565b610e25611e69565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610e6457828480945081955050505b60405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018362ffffff1681525090509392505050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610610efb57600080fd5b82826000015183602001518460400151604051602001808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018262ffffff1681526020019350505050604051602081830303815290604052805190602001207fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460001b60405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018473ffffffffffffffffffffffffffffffffffffffff1660601b815260140183815260200182815260200193505050506040516020818303038152906040528051906020012060001c905092915050565b600080600060608451146110bd57604484511015611067576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105e9061273e565b60405180910390fd5b600484019350838060200190518101906110819190612266565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b4919061271c565b60405180910390fd5b838060200190518101906110d19190612397565b9250925092509193909250565b60008060008060008060008060088b73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561113257600080fd5b505afa158015611146573d6000803e3d6000fd5b505050506040513d602081101561115c57600080fd5b810190808051906020019092919050505060020b8b60020b8161117b57fe5b0560020b901d905060006101008c73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111ce57600080fd5b505afa1580156111e2573d6000803e3d6000fd5b505050506040513d60208110156111f857600080fd5b810190808051906020019092919050505060020b8c60020b8161121757fe5b0560020b8161122257fe5b079050600060088d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561126f57600080fd5b505afa158015611283573d6000803e3d6000fd5b505050506040513d602081101561129957600080fd5b810190808051906020019092919050505060020b8c60020b816112b857fe5b0560020b901d905060006101008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561130b57600080fd5b505afa15801561131f573d6000803e3d6000fd5b505050506040513d602081101561133557600080fd5b810190808051906020019092919050505060020b8d60020b8161135457fe5b0560020b8161135f57fe5b07905060008160ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296856040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b1580156113c057600080fd5b505afa1580156113d4573d6000803e3d6000fd5b505050506040513d60208110156113ea57600080fd5b81019080805190602001909291905050501611801561149b575060008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561144c57600080fd5b505afa158015611460573d6000803e3d6000fd5b505050506040513d602081101561147657600080fd5b810190808051906020019092919050505060020b8d60020b8161149557fe5b0760020b145b80156114ac57508b60020b8d60020b135b945060008360ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296876040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561150c57600080fd5b505afa158015611520573d6000803e3d6000fd5b505050506040513d602081101561153657600080fd5b8101908080519060200190929190505050161180156115e7575060008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561159857600080fd5b505afa1580156115ac573d6000803e3d6000fd5b505050506040513d60208110156115c257600080fd5b810190808051906020019092919050505060020b8e60020b816115e157fe5b0760020b145b80156115f857508b60020b8d60020b125b95508160010b8460010b128061162557508160010b8460010b14801561162457508060ff168360ff1611155b5b1561163b57839950829750819850809650611648565b8199508097508398508296505b5050505060008460ff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff901b90505b8560010b8760010b13611799578560010b8760010b14156116c2578360ff0360ff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff901c811690505b6000818c73ffffffffffffffffffffffffffffffffffffffff16635339c2968a6040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b15801561171957600080fd5b505afa15801561172d573d6000803e3d6000fd5b505050506040513d602081101561174357600080fd5b810190808051906020019092919050505016905061176081611e3b565b61ffff168901985087806001019850507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff915050611678565b81156117a6576001880397505b82156117b3576001880397505b505050505050509392505050565b60008160148301101561183c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f416464726573735f6f766572666c6f77000000000000000000000000000081525060200191505060405180910390fd5b60148201835110156118b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f746f416464726573735f6f75744f66426f756e6473000000000000000000000081525060200191505060405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b600081600383011015611955576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f746f55696e7432345f6f766572666c6f7700000000000000000000000000000081525060200191505060405180910390fd5b60038201835110156119cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f746f55696e7432345f6f75744f66426f756e647300000000000000000000000081525060200191505060405180910390fd5b60008260038501015190508091505092915050565b606081601f83011015611a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f736c6963655f6f766572666c6f7700000000000000000000000000000000000081525060200191505060405180910390fd5b828284011015611ad7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f736c6963655f6f766572666c6f7700000000000000000000000000000000000081525060200191505060405180910390fd5b81830184511015611b50576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f736c6963655f6f75744f66426f756e647300000000000000000000000000000081525060200191505060405180910390fd5b6060821560008114611b715760405191506000825260208201604052611bc2565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611baf5780518352602083019250602081019050611b92565b50868552601f19601f8301166040525050505b50809150509392505050565b6000611bda8383610eb9565b90508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611c1457600080fd5b92915050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611c5657600080fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610611c90578284611c93565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cd557600080fd5b9250929050565b6000806000611ceb8585611c1a565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018373ffffffffffffffffffffffffffffffffffffffff1660601b8152601401828152602001807f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f815250602001925050506040516020818303038152906040528051906020012060001c925050509392505050565b600080831480611e125750818383850292508281611e0f57fe5b04145b611e1b57600080fd5b92915050565b6000828284019150811015611e3557600080fd5b92915050565b600080600090505b60008314611e605780806001019150506001830383169250611e43565b80915050919050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600062ffffff1681525090565b6000611ece611ec984612862565b612831565b905082815260208101848484011115611ee657600080fd5b611ef1848285612a05565b509392505050565b6000611f0c611f0784612892565b612831565b905082815260208101848484011115611f2457600080fd5b611f2f848285612a14565b509392505050565b600081359050611f4681612aaa565b92915050565b600081519050611f5b81612ac1565b92915050565b600082601f830112611f7257600080fd5b8135611f82848260208601611ebb565b91505092915050565b600081519050611f9a81612ad8565b92915050565b600081359050611faf81612aef565b92915050565b600081519050611fc481612aef565b92915050565b600082601f830112611fdb57600080fd5b8151611feb848260208601611ef9565b91505092915050565b60006060828403121561200657600080fd5b6120106060612831565b9050600061202084828501611f37565b600083015250602061203484828501611f37565b602083015250604061204884828501612130565b60408301525092915050565b600060a0828403121561206657600080fd5b61207060a0612831565b9050600061208084828501611f37565b600083015250602061209484828501611f37565b60208301525060406120a884828501612130565b60408301525060606120bc8482850161211b565b60608301525060806120d0848285016120dc565b60808301525092915050565b6000813590506120eb81612b1d565b92915050565b60008151905061210081612b1d565b92915050565b60008151905061211581612b06565b92915050565b60008135905061212a81612b34565b92915050565b60008135905061213f81612b4b565b92915050565b60008151905061215481612b4b565b92915050565b60008151905061216981612b62565b92915050565b6000806040838503121561218257600080fd5b600083013567ffffffffffffffff81111561219c57600080fd5b6121a885828601611f61565b92505060206121b985828601612130565b9150509250929050565b600080604083850312156121d657600080fd5b60006121e485828601611fb5565b92505060206121f585828601611fb5565b9150509250929050565b60008060006060848603121561221457600080fd5b600061222286828701611fa0565b935050602061223386828701611fa0565b925050604084013567ffffffffffffffff81111561225057600080fd5b61225c86828701611f61565b9150509250925092565b60006020828403121561227857600080fd5b600082015167ffffffffffffffff81111561229257600080fd5b61229e84828501611fca565b91505092915050565b6000606082840312156122b957600080fd5b60006122c784828501611ff4565b91505092915050565b600060a082840312156122e257600080fd5b60006122f084828501612054565b91505092915050565b600080600080600080600060e0888a03121561231457600080fd5b60006123228a828b016120f1565b97505060206123338a828b01611f8b565b96505060406123448a828b01612106565b95505060606123558a828b01612106565b94505060806123668a828b01612106565b93505060a06123778a828b0161215a565b92505060c06123888a828b01611f4c565b91505092959891949750929550565b6000806000606084860312156123ac57600080fd5b60006123ba86828701612145565b93505060206123cb868287016120f1565b92505060406123dc86828701611f8b565b9150509250925092565b60006123f28383612608565b60208301905092915050565b600061240a838361264c565b60208301905092915050565b61241f8161296c565b82525050565b6124366124318261296c565b612a47565b82525050565b6000612447826128e2565b6124518185612928565b935061245c836128c2565b8060005b8381101561248d57815161247488826123e6565b975061247f8361290e565b925050600181019050612460565b5085935050505092915050565b60006124a5826128ed565b6124af8185612939565b93506124ba836128d2565b8060005b838110156124eb5781516124d288826123fe565b97506124dd8361291b565b9250506001810190506124be565b5085935050505092915050565b6125018161297e565b82525050565b6000612512826128f8565b61251c818561294a565b935061252c818560208601612a14565b61253581612a7f565b840191505092915050565b61254981612997565b82525050565b600061255a82612903565b612564818561295b565b9350612574818560208601612a14565b61257d81612a7f565b840191505092915050565b600061259560108361295b565b91507f556e6578706563746564206572726f72000000000000000000000000000000006000830152602082019050919050565b60006125d560208361295b565b91507f4578616374206f75747075742071756f7465206e6f7420737570706f727465646000830152602082019050919050565b612611816129af565b82525050565b612620816129af565b82525050565b612637612632826129cf565b612a6b565b82525050565b612646816129de565b82525050565b612655816129e8565b82525050565b612664816129e8565b82525050565b60006126768286612425565b6014820191506126868285612626565b6003820191506126968284612425565b601482019150819050949350505050565b60006020820190506126bc6000830184612416565b92915050565b600060a0820190506126d76000830188612416565b6126e460208301876124f8565b6126f16040830186612540565b6126fe6060830185612617565b81810360808301526127108184612507565b90509695505050505050565b60006020820190508181036000830152612736818461254f565b905092915050565b6000602082019050818103600083015261275781612588565b9050919050565b60006020820190508181036000830152612777816125c8565b9050919050565b6000602082019050612793600083018461263d565b92915050565b60006080820190506127ae600083018761263d565b81810360208301526127c0818661243c565b905081810360408301526127d4818561249a565b90506127e3606083018461263d565b95945050505050565b6000608082019050612801600083018761263d565b61280e6020830186612617565b61281b604083018561265b565b612828606083018461263d565b95945050505050565b6000604051905081810181811067ffffffffffffffff8211171561285857612857612a7d565b5b8060405250919050565b600067ffffffffffffffff82111561287d5761287c612a7d565b5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff8211156128ad576128ac612a7d565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612977826129af565b9050919050565b60008115159050919050565b60008160020b9050919050565b6000819050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062ffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015612a32578082015181840152602081019050612a17565b83811115612a41576000848401525b50505050565b6000612a5282612a59565b9050919050565b6000612a6482612a9d565b9050919050565b6000612a7682612a90565b9050919050565bfe5b6000601f19601f8301169050919050565b60008160e81b9050919050565b60008160601b9050919050565b612ab38161296c565b8114612abe57600080fd5b50565b612aca8161297e565b8114612ad557600080fd5b50565b612ae18161298a565b8114612aec57600080fd5b50565b612af881612997565b8114612b0357600080fd5b50565b612b0f816129a1565b8114612b1a57600080fd5b50565b612b26816129af565b8114612b3157600080fd5b50565b612b3d816129cf565b8114612b4857600080fd5b50565b612b54816129de565b8114612b5f57600080fd5b50565b612b6b816129f8565b8114612b7657600080fd5b5056fea264697066735822122068934bfcf63c410ef175e80955de3e1fabcb04094a40e8a6f7c2b96b0bd0482564736f6c63430007060033";

export class MixedRouteQuoterV1__factory extends ContractFactory {
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
    _factory: string,
    _factoryV2: string,
    _factorySushi: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MixedRouteQuoterV1> {
    return super.deploy(
      _factory,
      _factoryV2,
      _factorySushi,
      _WETH9,
      overrides || {}
    ) as Promise<MixedRouteQuoterV1>;
  }
  getDeployTransaction(
    _factory: string,
    _factoryV2: string,
    _factorySushi: string,
    _WETH9: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _factoryV2,
      _factorySushi,
      _WETH9,
      overrides || {}
    );
  }
  attach(address: string): MixedRouteQuoterV1 {
    return super.attach(address) as MixedRouteQuoterV1;
  }
  connect(signer: Signer): MixedRouteQuoterV1__factory {
    return super.connect(signer) as MixedRouteQuoterV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MixedRouteQuoterV1Interface {
    return new utils.Interface(_abi) as MixedRouteQuoterV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MixedRouteQuoterV1 {
    return new Contract(address, _abi, signerOrProvider) as MixedRouteQuoterV1;
  }
}
