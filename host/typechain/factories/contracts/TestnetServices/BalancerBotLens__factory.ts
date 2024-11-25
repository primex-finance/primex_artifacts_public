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
  BalancerBotLens,
  BalancerBotLensInterface,
} from "../../../contracts/TestnetServices/BalancerBotLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBalancer",
        name: "_vault",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct IBalancerBotLens.PoolUpdateData[]",
        name: "_pools",
        type: "tuple[]",
      },
      {
        internalType: "contract IERC20[]",
        name: "_tokensToReturn",
        type: "address[]",
      },
    ],
    name: "removeAndSetLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610dd2908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c63dad110131461002757600080fd5b346101d45760603660031901126101d4576004356001600160a01b03811681036101d45760243567ffffffffffffffff81116101d45761006b903690600401610aa4565b60443567ffffffffffffffff81116101d45761008c84913690600401610aa4565b9390926000905b8082106101e057858560005b8281106100a857005b6001600160a01b036100c36100be838686610c60565b610d88565b169060405180926370a0823160e01b825230600483015281602460209384935afa9283156101a0576000936101ac575b508261010a575b506101059150610ad5565b61009f565b6000928190610158906001600160a01b036101296100be878b8b610c60565b60405163a9059cbb60e01b81523360048201526024810193909352919687939190921691839182906044820190565b03925af19283156101a05761010593610172575b506100fa565b8161019192903d10610199575b6101898183610b5c565b810190610b7e565b50848061016c565b503d61017f565b6040513d6000823e3d90fd5b9080935081813d83116101d9575b6101c48183610b5c565b810103126101d4575191856100f3565b600080fd5b503d6101ba565b6101f08282859795989698610afa565b6040805163f6c0092760e01b815291356004830152909590866024816001600160a01b038b165afa9586156101a057600096610a51575b506040516370a0823160e01b81523360048201526020816024816001600160a01b038b165afa9081156101a057600091610a1e575b506040516323b872dd60e01b8152336004820152306024820152604481019190915260208160648160006001600160a01b038c165af180156101a0576109ff575b5060405163095ea7b360e01b81526001600160a01b0388811660048301526000196024830152602090829060449082906000908c165af180156101a0576109e0575b506102eb838383610afa565b604051631f29a8cd60e31b815290356004820152966000886024816001600160a01b0385165afa9586156101a05760009860009761089b575b50865161033f610335878787610afa565b6020810190610bae565b919050036108895761034f610be4565b9589875261035d8851610c1a565b602088015261036a610be4565b998a526103778851610c1a565b60208b015260005b87518051821015610615576001600160a01b039061039e908390610c4c565b5116906040516370a0823160e01b8152336004820152602081602481865afa9081156101a0576000916105e3575b5080610588575b604051636eb1769f60e11b81523060048201526001600160a01b0387166024820152602081604481875afa9081156101a057600091610556575b50106104ed575b6104a0915089818d8b8b8b8b61043886610432610335868686610afa565b90610c60565b356104438789610c4c565b5110156104a55785602061048a6000996104838461047c8161043261047361049a9f9e9c899e9c6104929c610afa565b88810190610bae565b3592610c4c565b5190610c70565b930151610c4c565b520151610c4c565b52610ad5565b61037f565b90856104326104dd61048a956104e6946104d685809b9d60006104d061049a9f60209e8f0151610c4c565b52610c4c565b5196610afa565b86810190610bae565b3590610c70565b60405163095ea7b360e01b81526001600160a01b0386166004820152600019602482015291602090839060449082906000905af19182156101a0576104a092610537575b50610414565b61054f9060203d602011610199576101898183610b5c565b508c610531565b90506020813d602011610580575b8161057160209383610b5c565b810103126101d457518e61040d565b3d9150610564565b6040516323b872dd60e01b8152336004820152306024820152604481018290526020816064816000885af180156101a0576105c4575b506103d3565b6105dc9060203d602011610199576101898183610b5c565b508d6105be565b90506020813d60201161060d575b816105fe60209383610b5c565b810103126101d457518d6103cc565b3d91506105f1565b50509793965097909493919361064a61065f602083015160405192839160016020840152606060408401526080830190610c7d565b6000606083015203601f198101835282610b5c565b604082015261066f838887610afa565b356001600160a01b0387163b156101d4576106bb91600091604051938492839263172b958560e31b84526004840152306024840152306044840152608060648401526084830190610cb1565b0381836001600160a01b038b165af180156101a05761087a575b506106ff610715602083015160405192839160026020840152606060408401526080830190610c7d565b600019606083015203601f198101835282610b5c565b6040820152610725828786610afa565b356001600160a01b0386163b156101d457610771916000916040519384928392638bdb391360e01b84526004840152306024840152306044840152608060648401526084830190610cb1565b0381836001600160a01b038a165af180156101a05761086b575b506040516370a0823160e01b8152306004820152916020836024816001600160a01b0385165afa9283156101a057600093610835575b5060405163a9059cbb60e01b81523360048201526024810193909352602090839081600081604481015b03926001600160a01b03165af19182156101a05761080e92610816575b50610ad5565b909192610093565b61082e9060203d602011610199576101898183610b5c565b5087610808565b92506020833d602011610863575b8161085060209383610b5c565b810103126101d4579151916107eb6107c1565b3d9150610843565b61087490610b32565b8761078b565b61088390610b32565b886106d5565b604051633063a1eb60e11b8152600490fd5b985095503d97886000823e6108b08982610b5c565b6060818a810103126101d45780519067ffffffffffffffff82116101d457898101601f8383010112156101d45781810151916108eb83610b96565b926108f96040519485610b5c565b808452602084018c840160208360051b8587010101116101d457602083850101905b60208360051b858701010182106109c0575050505060208101519967ffffffffffffffff8b116101d457808201601f8c84010112156101d4578a8201519161096283610b96565b9b6109706040519d8e610b5c565b838d5260208d0192820160208560051b8385010101116101d457602081830101925b60208560051b838501010184106109b0575050505050979589610324565b8351815260209384019301610992565b81516001600160a01b03811681036101d45781526020918201910161091b565b6109f89060203d602011610199576101898183610b5c565b50876102df565b610a179060203d602011610199576101898183610b5c565b508761029d565b90506020813d602011610a49575b81610a3960209383610b5c565b810103126101d45751602061025c565b3d9150610a2c565b9095506040813d604011610a9c575b81610a6d60409383610b5c565b810103126101d4578051906001600160a01b03821682036101d4576020600391015110156101d4579487610227565b3d9150610a60565b9181601f840112156101d45782359167ffffffffffffffff83116101d4576020808501948460051b0101116101d457565b6000198114610ae45760010190565b634e487b7160e01b600052601160045260246000fd5b9190811015610b1c5760051b81013590603e19813603018212156101d4570190565b634e487b7160e01b600052603260045260246000fd5b67ffffffffffffffff8111610b4657604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610b4657604052565b908160209103126101d4575180151581036101d45790565b67ffffffffffffffff8111610b465760051b60200190565b903590601e19813603018212156101d4570180359067ffffffffffffffff82116101d457602001918160051b360383136101d457565b604051906080820182811067ffffffffffffffff821117610b465760405260006060838181528160208201528160408201520152565b90610c2482610b96565b610c316040519182610b5c565b8281528092610c42601f1991610b96565b0190602036910137565b8051821015610b1c5760209160051b010190565b9190811015610b1c5760051b0190565b91908203918211610ae457565b90815180825260208080930193019160005b828110610c9d575050505090565b835185529381019392810192600101610c8f565b608082019080519260808152835180935260a081019260208095019060005b86828210610d6b5792505050820151928181038583015284808551928381520194019060005b86828210610d57575050505060408201519181840360408301528251928385528560005b858110610d435750600086860190910152506060908101511515910152601f01601f1916010190565b818184010151828289010152018690610d1a565b835187529586019590920191600101610cf6565b83516001600160a01b031687529586019590920191600101610cd0565b356001600160a01b03811681036101d4579056fea26469706673582212200fd3292e9288164903647e3b0d7059c40894d1466d117fac5e9788e3f41cda6e64736f6c63430008120033";

type BalancerBotLensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerBotLensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerBotLens__factory extends ContractFactory {
  constructor(...args: BalancerBotLensConstructorParams) {
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
      BalancerBotLens & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BalancerBotLens__factory {
    return super.connect(runner) as BalancerBotLens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerBotLensInterface {
    return new Interface(_abi) as BalancerBotLensInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BalancerBotLens {
    return new Contract(address, _abi, runner) as unknown as BalancerBotLens;
  }
}
