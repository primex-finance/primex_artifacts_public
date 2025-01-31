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
  CurveStableOracle,
  CurveStableOracleInterface,
} from "../../../contracts/CurvePriceFeeds/CurveStableOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "token",
        type: "address",
      },
    ],
    name: "RegisterLpToken",
    type: "event",
  },
  {
    inputs: [],
    name: "getAddressProvider",
    outputs: [
      {
        internalType: "contract ICurveAddressProvider",
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
        name: "crvLp",
        type: "address",
      },
    ],
    name: "getPoolInfo",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "coins",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "virtualPrice",
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
        name: "crvLp",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "tokensUsdOracleData",
        type: "bytes[]",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "crvLp",
        type: "address",
      },
    ],
    name: "getTokenInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pool",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "registryIndex",
            type: "uint256",
          },
        ],
        internalType: "struct CurveBaseOracle.TokenInfo",
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
        internalType: "contract ICurveAddressProvider",
        name: "_addressProvider",
        type: "address",
      },
      {
        internalType: "contract IPriceOracleV2",
        name: "_primexPriceOracle",
        type: "address",
      },
      {
        internalType: "contract IAccessControl",
        name: "_primexRegistry",
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
    name: "primexPriceOracle",
    outputs: [
      {
        internalType: "contract IPriceOracleV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "primexRegistry",
    outputs: [
      {
        internalType: "contract IAccessControl",
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
        name: "crvLp",
        type: "address",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "registryIndex",
        type: "uint256",
      },
    ],
    name: "registerCurveLp",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234602357600e6028565b60146028565b60405161143190816100ce8239f35b600080fd5b60005460ff8160081c1660785760ff8082160360415750565b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a1565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fdfe608080604052600436101561001d575b50361561001b57600080fd5b005b600090813560e01c90816301ffc9a714610a785750806306bfa938146109f457806313f839b9146105a65780631f69565f146105135780632ac5869b146104ea578063c0c53b8b146102e4578063d7984f3a146102bb578063e93bb752146100b45763f8c689340361000f57346100b157806003193601126100b1576035546040516001600160a01b039091168152602090f35b80fd5b50346100b15760603660031901126100b1576100ce610ab0565b6024356001600160a01b03811681036102b757603354604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8600482015233602482015290602090829060449082906001600160a01b03165afa9081156102ac57849161027d575b501561026b576001600160a01b038216918215610259576101659160443591610f5a565b91926040519361017485610af5565b6001600160a01b0390811685526020808601938452604080870195865292875260369052908520935184546001600160a01b031916911617835551805190600184019067ffffffffffffffff83116102455768010000000000000000831161024557815483835580841061021f575b5060200190855260208520855b83811061020257845160028701558680f35b82516001600160a01b0316818301556020909201916001016101f0565b828752836020882091820191015b81811061023a57506101e3565b87815560010161022d565b634e487b7160e01b86526041600452602486fd5b60405163538ba4f960e01b8152600490fd5b60405163036be76f60e61b8152600490fd5b61029f915060203d6020116102a5575b6102978183610b27565b810190610bf9565b38610141565b503d61028d565b6040513d86823e3d90fd5b8280fd5b50346100b157806003193601126100b1576034546040516001600160a01b039091168152602090f35b50346100b15760603660031901126100b1576004356001600160a01b038116908190036104e6576024356001600160a01b038116908190036102b7576044356001600160a01b03811691908290036104e25783549260ff8460081c1615938480956104d5575b80156104be575b156104625760ff198116600117865584610451575b506040516301ffc9a760e01b8152637965db0b60e01b6004820152602081602481875afa908115610446578691610427575b5015610415576001600160601b0360a01b60355416176035556001600160601b0360a01b60345416176034556001600160601b0360a01b60335416176033556103de5780f35b61ff001981541681557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160018152a180f35b60405163044aa57560e41b8152600490fd5b610440915060203d6020116102a5576102978183610b27565b38610398565b6040513d88823e3d90fd5b61ffff191661010117855538610366565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156103515750600160ff821614610351565b50600160ff82161061034a565b8380fd5b5080fd5b50346100b157806003193601126100b1576033546040516001600160a01b039091168152602090f35b50346100b15760203660031901126100b157610535610530610ab0565b610b49565b906040519060208252608082019060018060a01b038451166020840152602084015191606060408501528251809152602060a085019301915b8181106105875750505060408293015160608301520390f35b82516001600160a01b031684526020938401939092019160010161056e565b50346100b15760403660031901126100b1576105c0610ab0565b906024359067ffffffffffffffff82116100b157366023830112156100b15781600401359267ffffffffffffffff84116104e6573660248560051b850101116104e65761060c90610c25565b91815186036109df578151906001600160a01b03165a9160028103610878575060409081519161063c8184610b27565b80368437813b1561087457516316cd8e2760e21b815260048101879052918690839082602483015b60028210610858575050506064818394612710fa918261083f575b505090612710911560001461083a57610696610e63565b505b5a900311156108285790926000199190368190036042190190845b83518110156107eb576034546001600160a01b03908116906106d58387610acb565b511690898310156107d75760248360051b85010135858112156107d35784019160248301359267ffffffffffffffff84116107cf576044019083360382136107cf579183918a60846020956040519788968795869363416be2f360e01b85526004850152610348602485015260606044850152816064850152848401378181018301849052601f01601f191681010301925af19081156107c4578791610791575b50858110610788575b506001016106b3565b9450600161077f565b905060203d81116107bd575b6107a78183610b27565b602082600092810103126100b157505138610776565b503d61079d565b6040513d89823e3d90fd5b8980fd5b8880fd5b634e487b7160e01b88526032600452602488fd5b5050505082810292818404149015171561081457602082670de0b6b3a764000060405191048152f35b634e487b7160e01b81526011600452602490fd5b604051630f9d066b60e41b8152600490fd5b610698565b8161084991610b27565b61085457843861067f565b8480fd5b825181528a945086935060209283019260019092019101610664565b8680fd5b60038103610926575060405190610890606083610b27565b6060368337803b156109225785604051809363ecb586a560e01b82528260048301526024820183905b60038210610906575050506084818394612710fa91826108f1575b505090612710911560001461083a576108eb610e63565b50610698565b816108fb91610b27565b6108545784386108d4565b825181528a9450869350602092830192600190920191016108b9565b8580fd5b600414610938575b5061271090610698565b60405190610947608083610b27565b6080368337803b1561092257604051637d49d87560e01b815260048101879052918691839183602484015b600482106109c3575050508160a491612710fa90816109ab575b5061271091906109a65761099e610e63565b505b9061092e565b6109a0565b946109bb81612710949397610b27565b94909161098c565b825181528a955086945060209283019260019092019101610972565b604051600162e6a1e960e01b03198152600490fd5b50346100b15760203660031901126100b157610a16610a11610ab0565b610c25565b6040516001600160a01b039093168352606060208085018290528351918501829052608085019301905b808610610a5557505082935060408301520390f35b81516001600160a01b031684526001959095019460209384019390910190610a40565b9050346104e65760203660031901126104e65760043563ffffffff60e01b81168091036102b7576301ffc9a760e01b14815260209150f35b600435906001600160a01b0382168203610ac657565b600080fd5b8051821015610adf5760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6060810190811067ffffffffffffffff821117610b1157604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610b1157604052565b600060408051610b5881610af5565b82815260606020820152015260018060a01b03166000526036602052604060002060405190610b8682610af5565b80546001600160a01b0316825260405160018201805480835260009182526020808320908401929091905b818110610bda5750505090610bcb81600294930382610b27565b60208401520154604082015290565b82546001600160a01b0316845260209093019260019283019201610bb1565b90816020910312610ac657518015158103610ac65790565b51906001600160a01b0382168203610ac657565b90600091606091600091610c3881610b49565b80519091906001600160a01b031615610e51576040820190815115610dcc578151600581148015610dc2575b610cfa57505051600814610c755750565b8051602091820151604051630176f71760e71b815290965094509192506001600160a01b039091169083600481845afa928315610cee57600093610cba575b50929190565b9092506020813d602011610ce6575b81610cd660209383610b27565b81010312610ac657519138610cb4565b3d9150610cc9565b6040513d6000823e3d90fd5b9550955050909150602060018060a01b03603554169360246040518096819363124fd3dd60e21b835260048301525afa928315610cee57600093610d86575b5080516020918201516040516362db83a560e11b81526001600160a01b03968716600482015290959094918116929185916024918391165afa928315610cee57600093610cba5750929190565b9092506020813d602011610dba575b81610da260209383610b27565b81010312610ac657610db390610c11565b9138610d39565b3d9150610d95565b5060078114610c64565b95505090915060049250602060018060a01b03603554166040519485809263a262904b60e01b82525afa928315610cee57600093610d86575080516020918201516040516362db83a560e11b81526001600160a01b03968716600482015290959094918116929185916024918391165afa928315610cee57600093610cba5750929190565b604051630cc3378f60e31b8152600490fd5b3d15610e9e573d9067ffffffffffffffff8211610b115760405191610e92601f8201601f191660200184610b27565b82523d6000602084013e565b606090565b9061010082820312610ac65780601f83011215610ac65760405191610eca61010084610b27565b82906101008101928311610ac657905b828210610ee75750505090565b60208091610ef484610c11565b815201910190610eda565b67ffffffffffffffff8111610b115760051b60200190565b90610f2182610eff565b610f2e6040519182610b27565b8281528092610f3f601f1991610eff565b0190602036910137565b906008811015610adf5760051b0190565b9291801561128357600581148015611279575b6110f257600814610f8a57604051630cc3378f60e31b8152600490fd5b60405163940494f160e01b81526001600160a01b03848116600483018190529194921690602085602481855afa948515610cee576000956110bd575b50608090602460405180948193639ac90d3d60e01b835260048301525afa908115610cee57600091611041575b50610ffd84610f17565b9360005b818110611012575050509190600890565b6004811015610adf57600581901b830151600191906001600160a01b031661103a8289610acb565b5201611001565b9060803d6080116110b6575b6110578184610b27565b8201906080838303126100b15781601f840112156100b1576040519261107e608085610b27565b8391608082019384116100b15750905b82821061109e5750505038610ff3565b602080916110ab84610c11565b81520191019061108e565b503d61104d565b90946020823d6020116110ea575b816110d860209383610b27565b810103126100b1575051936080610fc6565b3d91506110cb565b60405163bdf475c360e01b81526001600160a01b03948516600482015291909316929190602081602481875afa908115610cee5760009161123f575b5060405163940494f160e01b81526001600160a01b03821660048201819052602082602481895afa918215610cee57600092611209575b5061010090602460405180988193639ac90d3d60e01b835260048301525afa948515610cee576000956111d8575b5061119d81610f17565b9460005b8281106111b057505050929190565b6001906001600160a01b036111c58285610f49565b51166111d1828a610acb565b52016111a1565b6111fb9195506101003d8111611202575b6111f38183610b27565b810190610ea3565b9338611193565b503d6111e9565b90916020823d602011611237575b8161122460209383610b27565b810103126100b157505190610100611165565b3d9150611217565b90506020813d602011611271575b8161125a60209383610b27565b81010312610ac65761126b90610c11565b3861112e565b3d915061124d565b5060078114610f6d565b60405163bdf475c360e01b81526001600160a01b03948516600482015291909316929190602081602481875afa908115610cee576000916113c1575b506040805163940494f160e01b81526001600160a01b03831660048201819052909182602481895afa918215610cee5760009261138b575b5061010090602460405180988193639ac90d3d60e01b835260048301525afa948515610cee5760009561136a575b5061132f81610f17565b9460005b82811061134257505050929190565b6001906001600160a01b036113578285610f49565b5116611363828a610acb565b5201611333565b6113849195506101003d8111611202576111f38183610b27565b9338611325565b9091506040813d6040116113b9575b816113a760409383610b27565b81010312610ac65751906101006112f7565b3d915061139a565b90506020813d6020116113f3575b816113dc60209383610b27565b81010312610ac6576113ed90610c11565b386112bf565b3d91506113cf56fea26469706673582212201a0f1a22a497ac78ec4819caf59f113674f7a9f3d0b738ffd0ee4a990d897b6664736f6c634300081a0033";

type CurveStableOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveStableOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveStableOracle__factory extends ContractFactory {
  constructor(...args: CurveStableOracleConstructorParams) {
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
      CurveStableOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CurveStableOracle__factory {
    return super.connect(runner) as CurveStableOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveStableOracleInterface {
    return new Interface(_abi) as CurveStableOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CurveStableOracle {
    return new Contract(address, _abi, runner) as unknown as CurveStableOracle;
  }
}
