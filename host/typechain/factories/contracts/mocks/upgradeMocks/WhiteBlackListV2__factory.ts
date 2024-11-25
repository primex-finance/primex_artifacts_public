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
  WhiteBlackListV2,
  WhiteBlackListV2Interface,
} from "../../../../contracts/mocks/upgradeMocks/WhiteBlackListV2";

const _abi = [
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
    name: "BlacklistedAddressAdded",
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
    name: "BlacklistedAddressRemoved",
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
    name: "addAddressToBlacklist",
    outputs: [],
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
    name: "addAddressesToBlacklist",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "getAccessType",
    outputs: [
      {
        internalType: "enum IWhiteBlackList.AccessType",
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
        name: "_registry",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "isBlackListed",
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
    name: "removeAddressFromBlacklist",
    outputs: [],
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
    name: "removeAddressesFromBlacklist",
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
  "0x608080604052346100c1576000549060ff8260081c1661006f575060ff80821603610034575b6040516110d090816100c78239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610025565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe608060408181526004908136101561001657600080fd5b600092833560e01c90816301ffc9a714610ec557508063086dfcc414610e6857806324953eaa14610d62578063286dd3f514610c7e5780633225879414610aa757806335e82f3a146109b55780633fa4f24514610996578063552410771461097c5780637b103999146109535780637b9417c8146108425780639d6aed0b1461079b578063c4d66de8146105d0578063ca73419e14610424578063e2ec6ec3146102dc578063e47d6060146102765763f2c816ae146100d457600080fd5b346102725760208060031936011261026e576001600160a01b038335818116949185820361026a578360449160345416865192838092632474521560e21b82527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb888301523360248301525afa908115610260578791610233575b5015610224578486526033835260ff8487205416600381101561021157600114610202573b156101f4578385526033825260ff838620541660038110156101e1576002146101d35750828452603390528220805460ff191660021790557fee71faa2d1e96ac74ee4023d6ffa8abfa43b7648f51e3dbd8ec561823e9df1328280a280f35b8251630c71548760e41b8152fd5b634e487b7160e01b865260218252602486fd5b82516339cd1d6f60e11b8152fd5b50825163b5ddcc3760e01b8152fd5b634e487b7160e01b875260218352602487fd5b50825163036be76f60e61b8152fd5b6102539150843d8611610259575b61024b8183610f6b565b810190610fa3565b3861014f565b503d610241565b85513d89823e3d90fd5b8680fd5b8380fd5b8280fd5b5091346102d95760203660031901126102d95781356001600160a01b038116908190036102d5578152603360205260ff83822054169160038310156102c2576020836002865191148152f35b634e487b7160e01b825260219052602490fd5b5080fd5b80fd5b5034610272576102eb36610f19565b9290845b8481106102fa578580f35b61030d610308828785610fe0565b611006565b60018060a01b03806034541690865192632474521560e21b845260008051602061107b8339815191528785015283602493338583015281604460209788935afa90811561041a578b916103fd575b50156103ed57169182895260339081815260ff888b2054169260038410156103dc575060018093146103cc57838a5252858820805460ff191690911790556103c791907fd1bba68c128cc3f427e5831b3c6f99f480b6efa6b9e80c757768f6124158cc3f8880a2610fbb565b6102ef565b875163503d101f60e11b81528790fd5b634e487b7160e01b8b52602188528afd5b875163036be76f60e61b81528790fd5b6104149150853d87116102595761024b8183610f6b565b3861035b565b89513d8d823e3d90fd5b5090346102725761043436610f19565b9290845b848110610443578580f35b610451610308828785610fe0565b60018060a01b03908160345416855192632474521560e21b84527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb8885015283602492338483015281604460209788935afa9081156105c6578b916105a9575b501561059957821692838a5260339182825260ff80898d205416946003958681101561058757600114610577573b1561056757858c52838352888c205416938410156105565750600280931461054657838a5252848820805460ff1916909117905561054191907fee71faa2d1e96ac74ee4023d6ffa8abfa43b7648f51e3dbd8ec561823e9df1328880a2610fbb565b610438565b8651630c71548760e41b81528890fd5b634e487b7160e01b8b52602189528afd5b88516339cd1d6f60e11b81528a90fd5b895163b5ddcc3760e01b81528b90fd5b634e487b7160e01b8e5260218c52838efd5b865163036be76f60e61b81528890fd5b6105c09150853d87116102595761024b8183610f6b565b386104b1565b88513d8d823e3d90fd5b5034610272576020908160031936011261026e5782356001600160a01b03811693908490036107975784549060ff8260081c16159182809361078a575b8015610773575b156107195760ff198116600117875582610708575b5085549460ff8660081c169161063e8361101a565b84516301ffc9a760e01b8152637965db0b60e01b828201528681602481865afa9081156106fe5789916106e1575b50156106d3575090610695916bffffffffffffffffffffffff60a01b603454161760345561101a565b61069d578380f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989261ff00191684555160018152a13880808380f35b845163044aa57560e41b8152fd5b6106f89150873d89116102595761024b8183610f6b565b3861066c565b86513d8b823e3d90fd5b61ffff191661010117865538610629565b835162461bcd60e51b8152808301869052602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156106145750600160ff821614610614565b50600160ff82161061060d565b8480fd5b5090346102725782600319360112610272578151908282019082821067ffffffffffffffff83111761082f57508252601081526020906f2bb434ba32a13630b1b5a634b9ba2b1960811b8282015282519382859384528251928382860152825b84811061081957505050828201840152601f01601f19168101030190f35b81810183015188820188015287955082016107fb565b634e487b7160e01b855260419052602484fd5b50346102725760208060031936011261026e5782356001600160a01b03818116949185900361094f578260449160345416855192838092632474521560e21b825260008051602061107b833981519152878301523360248301525afa908115610945578691610928575b501561091a578385526033825260ff838620541660038110156101e15760011461090c5750828452603390528220805460ff191660011790557fd1bba68c128cc3f427e5831b3c6f99f480b6efa6b9e80c757768f6124158cc3f8280a280f35b825163503d101f60e11b8152fd5b825163036be76f60e61b8152fd5b61093f9150833d85116102595761024b8183610f6b565b386108ac565b84513d88823e3d90fd5b8580fd5b8382346102d557816003193601126102d55760345490516001600160a01b039091168152602090f35b5050346102d55760203660031901126102d5573560675580f35b8382346102d557816003193601126102d5576020906067549051908152f35b50346102725760208060031936011261026e5782356001600160a01b03818116949185900361094f578260449160345416855192838092632474521560e21b825260008051602061107b833981519152878301523360248301525afa908115610945578691610a8a575b501561091a578385526033825260ff838620541660038110156101e157600203610a7c5750828452603390528220805460ff191690557fb9b02d6ef3069c468ac99865bad0d84ec0cf34671cb26053e5e47d415ae175648280a280f35b825163a8e583af60e01b8152fd5b610aa19150833d85116102595761024b8183610f6b565b38610a1f565b50903461027257610ab736610f19565b603480548551632474521560e21b8082527fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b6387830152336024808401919091529497956020946001600160a01b039490936044939187908290869082908a165afa908115610c74578c91610c57575b5015610c47578a5b8b8b8210610b395780f35b8990898960008051602061107b8339815191528f8f610b5d610308898d948d610fe0565b968d8d5416905195869485938c855284015233908301525afa918215610c3c5791610c1f575b5015610c0f578616808d5260338089528a8e205460ff166003811015610bfd57600203610bed57818e528852898d20805460ff19169055610be891907fb9b02d6ef3069c468ac99865bad0d84ec0cf34671cb26053e5e47d415ae175648e80a2610fbb565b610b2e565b8a5163a8e583af60e01b81528c90fd5b634e487b7160e01b8f5260218d528a8ffd5b895163036be76f60e61b81528b90fd5b610c369150893d8b116102595761024b8183610f6b565b38610b83565b8c51903d90823e3d90fd5b875163036be76f60e61b81528990fd5b610c6e9150873d89116102595761024b8183610f6b565b38610b26565b89513d8e823e3d90fd5b50346102725760208060031936011261026e5782356001600160a01b03818116949185900361094f578260449160345416855192838092632474521560e21b82528a878301523360248301525afa908115610945578691610d45575b501561091a578385526033825260ff838620541660038110156101e157600103610d375750828452603390528220805460ff191690557ff1abf01a1043b7c244d128e8595cf0c1d10743b022b03a02dffd8ca3bf729f5a8280a280f35b82516335876baf60e01b8152fd5b610d5c9150833d85116102595761024b8183610f6b565b38610cda565b50903461027257610d7236610f19565b9290845b848110610d81578580f35b610d8f610308828785610fe0565b60018060a01b03806034541690855192632474521560e21b8452898885015283602493338583015281604460209788935afa9081156105c6578b91610e4b575b501561059957169182895260339182825260ff878b2054169060038210156105565750600103610e3b5782895252838720805460ff19169055610e3691907ff1abf01a1043b7c244d128e8595cf0c1d10743b022b03a02dffd8ca3bf729f5a8880a2610fbb565b610d76565b85516335876baf60e01b81528790fd5b610e629150853d87116102595761024b8183610f6b565b38610dcf565b508290346102d55760203660031901126102d55782356001600160a01b03811690819003610272578252603360205260ff81832054169051916003821015610eb257602083838152f35b634e487b7160e01b815260218452602490fd5b84908434610272576020366003190112610272573563ffffffff60e01b81168091036102725760209250633df6cef760e01b8114908115610f08575b5015158152f35b6301ffc9a760e01b14905083610f01565b906020600319830112610f665760043567ffffffffffffffff92838211610f665780602383011215610f66578160040135938411610f665760248460051b83010111610f66576024019190565b600080fd5b90601f8019910116810190811067ffffffffffffffff821117610f8d57604052565b634e487b7160e01b600052604160045260246000fd5b90816020910312610f6657518015158103610f665790565b6000198114610fca5760010190565b634e487b7160e01b600052601160045260246000fd5b9190811015610ff05760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b0381168103610f665790565b1561102157565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fdfe5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8a2646970667358221220b583bdaf265bd53f4c7e2da7a4ad6656eca4c4f0339e26b4536e0bafc200d7c364736f6c63430008120033";

type WhiteBlackListV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhiteBlackListV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WhiteBlackListV2__factory extends ContractFactory {
  constructor(...args: WhiteBlackListV2ConstructorParams) {
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
      WhiteBlackListV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WhiteBlackListV2__factory {
    return super.connect(runner) as WhiteBlackListV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhiteBlackListV2Interface {
    return new Interface(_abi) as WhiteBlackListV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WhiteBlackListV2 {
    return new Contract(address, _abi, runner) as unknown as WhiteBlackListV2;
  }
}
