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
  FeeDecreaserV2,
  FeeDecreaserV2Interface,
} from "../../../../contracts/mocks/upgradeMocks/FeeDecreaserV2";

const _abi = [
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
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "activateBonus",
    outputs: [],
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
    name: "bucketBonusCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCount",
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
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "claim",
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
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
    ],
    name: "deactivateBonus",
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
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getAccumulatedAmount",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getAvailableAmount",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "getBonus",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nftId",
            type: "uint256",
          },
          {
            internalType: "contract IBucketV3",
            name: "bucket",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accumulatedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimedAmount",
            type: "uint256",
          },
        ],
        internalType: "struct IFeeExecutorStorage.ActivatedBonus",
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
    name: "indexes",
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
        internalType: "contract IPMXBonusNFT",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_primexDNS",
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
    name: "nft",
    outputs: [
      {
        internalType: "contract IPMXBonusNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "primexDNS",
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
    inputs: [
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxCount",
        type: "uint256",
      },
    ],
    name: "setMaxBonusCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tiers",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
        ],
        internalType: "struct IFeeExecutorStorage.NFTBonusParams[]",
        name: "_bonuses",
        type: "tuple[]",
      },
    ],
    name: "setTierBonus",
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
    name: "tierBonus",
    outputs: [
      {
        internalType: "uint256",
        name: "percent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
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
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
    ],
    name: "updateBonus",
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
        name: "_oldScaledBalance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currentIndex",
        type: "uint256",
      },
    ],
    name: "updateBonus",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_oldBalances",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_bucket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currentIndex",
        type: "uint256",
      },
    ],
    name: "updateBonuses",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "updatedTimestamps",
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
  "0x608060405234602357600e6028565b60146028565b604051612a6090816100ce8239f35b600080fd5b60005460ff8160081c1660785760ff8082160360415750565b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a1565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fdfe608080604052600436101561001357600080fd5b600090813560e01c90816301ffc9a714611bd857508063171a896414611a87578063227a87dd14611a4357806332353ae8146119845780633ce917ab146117495780633f4a2d27146117205780633f4ba83a1461160e5780633fa4f245146115ef578063442b4a261461153b5780634485b5011461149957806347ccca021461147057806355241077146114545780635c975abb146114315780636f7ee4da146113ee5780637b103999146113c55780638004298e146113955780638456cb59146112bd5780639d6aed0b146112675780639f8dbb7b14610fb2578063a13a944b14610f5a578063bd6846aa14610d92578063c3490263146106ca578063c4ee936614610695578063ced3f02914610638578063ec1dfe71146104905763f8c8765e1461013f57600080fd5b3461048d57608036600319011261048d576004356001600160a01b038116908190036104895761016d611ce0565b610175611caf565b6064356001600160a01b0381169291908390036104855784549260ff8460081c161593848095610478575b8015610461575b156104055760ff1981166001178755846103f4575b5085549460ff8660081c16926101d1846128a3565b60018060a01b03166001600160601b0360a01b60ff54161760ff556101f5836128a3565b6040516301ffc9a760e01b8152633694124d60e21b6004820152602081602481855afa90811561036a5788916103d5575b5080610375575b80610303575b156102f1576102b49360018060a01b03166001600160601b0360a01b60ca54161760ca556001600160601b0360a01b60c954161760c9556001600160601b0360a01b60cc54161760cc55610286816128a3565b61028f816128a3565b6001805561029c816128a3565b6102a5816128a3565b60ff19606554166065556128a3565b6102bc575080f35b61ff00191681557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160018152a180f35b60405163044aa57560e41b8152600490fd5b506040516301ffc9a760e01b8152633df6cef760e01b6004820152602081602481865afa90811561036a57889161033b575b50610233565b61035d915060203d602011610363575b6103558183611c77565b810190611d80565b38610335565b503d61034b565b6040513d8a823e3d90fd5b506040516301ffc9a760e01b8152637965db0b60e01b60048201526020816024816001600160a01b0389165afa90811561036a5788916103b6575b5061022d565b6103cf915060203d602011610363576103558183611c77565b386103b0565b6103ee915060203d602011610363576103558183611c77565b38610226565b61ffff1916610101178655386101bc565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b50303b1580156101a75750600160ff8216146101a7565b50600160ff8216106101a0565b8480fd5b5080fd5b80fd5b503461048d57604036600319011261048d576104aa611cca565b602435908260e06040516104bd81611c45565b8281528260208201528260408201528260608201528260808201528260a08201528260c0820152015260018060a01b03811683526101036020526040832060248460018060a01b0360c95416604051928380926341f63bfd60e01b82528860048301525afa90811561062d57906040929186610100979261060a575b5050516001600160a01b03166000908152602091909152206040519261055e84611c45565b8154845260018060a01b036001830154166020850190815260028301546040860190815260038401549060608701918252600485015492608088019384526105ca60058701549560a08a01968752600760068901549860c08c01998a5201549860e08b01998a52611eda565b8452604080519851895290516001600160a01b031660208901529051908701525160608601525160808501525160a08401525160c08301525160e0820152f35b61062692503d8091833e61061e8183611c77565b810190611e00565b3880610539565b6040513d87823e3d90fd5b503461048d57604036600319011261048d576060906040906001600160a01b03610660611cca565b168152610100602052818120602435825260205220805490600260018201549101549060405192835260208301526040820152f35b503461048d57608036600319011261048d576106c76106b2611cca565b6106ba611caf565b6064359160243590612142565b80f35b503461048d57604036600319011261048d57600435602435600260015414610d4d5760026001556106f96123c9565b60cc54604051630723eb0360e51b815233600482015290602090829060249082906001600160a01b03165afa908115610d42578491610d23575b50610d11578115610cff573383526101036020526040832060248460018060a01b0360c95416604051928380926341f63bfd60e01b82528760048301525afa90811561062d578591610ce5575b50516001600160a01b031684526020526040808420905191906107a283611c45565b80549182845260018060a01b03600183015416926020850195848752600284015460408701908152600385015491606088019283526004860154936080890194855260058701549560a08a01968752600760068901549860c08c01998a5201549860e08b01998a5215159182610cdb575b505015610cc95788516040516368d0612f60e01b815290602090829060049082906001600160a01b03165afa908115610cbe578b91610c88575b5089518190610865906001600160a01b03168261241a565b61086e8a6125f7565b610b4c575b5050835187518091116109ba575b505061088c876125f7565b15806109af575b1561093957505033875250506101036020908152604080872086516001600160a01b031660009081529252812081815560018101829055600281018290556003810182905560048101829055600581018290556006810182905560070155506108fa915050565b516001600160a01b0316815260cb6020526040812080548015610925576000190190555b6001805580f35b634e487b7160e01b83526011600452602483fd5b33895261010360209081526040808b208a516001600160a01b03908116600090815291909352209751885597516001880180546001600160a01b0319169190991617909755955160028601559451600385015593516004840155925160058301559151600682015590516007919091015561091e565b508551835114610893565b816109c49161240d565b8451809111600014610b46576109dd9150875190611e98565b6109e881885161240d565b8752885160405163669949ef60e11b81528b91602090829060049082906001600160a01b03165afa8015610b3b578290610af8575b8b516040516306fdde0360e01b815292506001600160a01b0391821691849184916004918391165afa918215610aed578392610ac9575b50803b15610ac557610a859183604051809681958294632581e14f60e21b8452606060048501526064840190611d19565b90336024840152604483015203925af18015610aba57610aa6575b80610881565b89610ab3919a929a611c77565b9738610aa0565b6040513d8c823e3d90fd5b8280fd5b610ae69192503d8085833e610ade8183611c77565b81019061211d565b9038610a54565b6040513d85823e3d90fd5b506020813d602011610b33575b81610b1260209383611c77565b8101031261048957516001600160a01b038116810361048957600490610a1d565b3d9150610b05565b6040513d84823e3d90fd5b506109dd565b875190428210610c66575b505085518111610b68575b80610873565b8951604051631f1b131360e31b8152908c90602090839060049082906001600160a01b03165afa8015610c595760249260209291610c2c575b50604051630ed1279f60e11b815233600482015292839182906001600160a01b03165afa8015610c21578c90610be8575b610bde9150828b612809565b8552855238610b62565b508b8160203d602011610c1a575b602092610c038284611c77565b5081010312610c1657610bde9051610bd2565b8b80fd5b503d610bf6565b6040513d8e823e3d90fd5b610c4c9150823d8411610c52575b610c448183611c77565b810190611ebb565b38610ba1565b503d610c3a565b50604051903d90823e3d90fd5b8b51610c7c93506001600160a01b03169161265d565b60001987523880610b57565b90506020813d602011610cb6575b81610ca360209383611c77565b81010312610cb257513861084d565b8a80fd5b3d9150610c96565b6040513d8d823e3d90fd5b604051633d77b3cb60e01b8152600490fd5b1490503880610813565b610cf991503d8087833e61061e8183611c77565b38610780565b604051633abe877f60e11b8152600490fd5b6040516333df015b60e01b8152600490fd5b610d3c915060203d602011610363576103558183611c77565b38610733565b6040513d86823e3d90fd5b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b503461048d57606036600319011261048d57610dac611cca565b6024356001600160401b038111610ac55736602382011215610ac5578060040135906001600160401b038211610f56573660248360051b83010111610f56576044356001600160401b0381116104855736602382011215610485578060040135906001600160401b038211610f525760248101906024369160608502010111610f525760ca54604051632474521560e21b81526004810188905233602482015290602090829060449082906001600160a01b03165afa908115610f47578791610f28575b5015610f1657818403610f045792936001600160a01b031692855b85811015610f0057610e9e81848461210d565b3515610eee5780610eb2600192858561210d565b8689526101006020526040892060248360051b880101358a5260205260026040808b209280358455602081013586850155013591015501610e8b565b604051637000f68560e11b8152600490fd5b8680f35b604051632aa3c3bf60e11b8152600490fd5b60405163036be76f60e61b8152600490fd5b610f41915060203d602011610363576103558183611c77565b38610e70565b6040513d89823e3d90fd5b8580fd5b8380fd5b503461048d57604036600319011261048d57610f74611cca565b6001600160a01b03168152610102602052604081208054602435929083101561048d576020610fa38484611d3e565b90549060031b1c604051908152f35b503461048d57602036600319011261048d57600435610fcf6123c9565b60cc54604051630723eb0360e51b815233600482015290602090829060249082906001600160a01b03165afa908115610aed578391611248575b50610d11573382526101036020526040822060248360018060a01b0360c95416604051928380926341f63bfd60e01b82528760048301525afa908115610d4257849161122e575b50516001600160a01b0316835260205260408083209051909161107282611c45565b825480835260018401546001600160a01b031660208401818152600286015460408601526003860154606086015260048601546080860152600586015460a0860152600686015460c086015260079095015460e08501521515919082611224575b505015610cc95781516040516368d0612f60e01b81529190602090839060049082906001600160a01b03165afa918215610d425784926111ed575b50825160049360209161112a906001600160a01b03168561241a565b51604051631f1b131360e31b815294859182906001600160a01b03165afa928315610d425760249360209186916111d0575b50604051630ed1279f60e11b815233600482015294859182906001600160a01b03165afa908115610d4257849161119a575b6106c793503390612551565b90506020833d6020116111c8575b816111b560209383611c77565b81010312610f56576106c792519061118e565b3d91506111a8565b6111e79150823d8411610c5257610c448183611c77565b3861115c565b9291506020833d60201161121c575b8161120960209383611c77565b81010312610f565791519091602061110e565b3d91506111fc565b14905038806110d3565b61124291503d8086833e61061e8183611c77565b38611050565b611261915060203d602011610363576103558183611c77565b38611009565b503461048d578060031936011261048d57506112b960405161128a604082611c77565b600e81526d2332b2a232b1b932b0b9b2b92b1960911b6020820152604051918291602083526020830190611d19565b0390f35b503461048d578060031936011261048d5760ca54604051632474521560e21b81527f5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb600482015233602482015290602090829060449082906001600160a01b03165afa908115610b3b578291611376575b5015610f165761133c6123c9565b600160ff1960655416176065557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b61138f915060203d602011610363576103558183611c77565b3861132e565b503461048d57604036600319011261048d5760206113bd6113b4611cca565b60243590611eda565b604051908152f35b503461048d578060031936011261048d5760ca546040516001600160a01b039091168152602090f35b503461048d57602036600319011261048d5760409081906001600160a01b03611415611cca565b16815260cb602052206001815491015482519182526020820152f35b503461048d578060031936011261048d57602060ff606554166040519015158152f35b503461048d57602036600319011261048d576004356101365580f35b503461048d578060031936011261048d5760c9546040516001600160a01b039091168152602090f35b503461048d57604036600319011261048d576114b3611cca565b6114bb611ce0565b60c9549091906001600160a01b031633036115295760018060a01b03168252610103602052604082209060018060a01b031682526020526106c76040822060076000918281558260018201558260028201558260038201558260048201558260058201558260068201550155565b604051632a4b45b760e11b8152600490fd5b503461048d57604036600319011261048d57611555611cca565b6001600160a01b038181168352610103602052604080842060c95491516341f63bfd60e01b81526024803560048301819052949293919287928492918391165afa90811561062d57926040866007946115cc946113bd989760209a916115d5575b50516001600160a01b0316825288522093611eda565b91015490611e98565b6115e991503d8085833e61061e8183611c77565b386115b6565b503461048d578060031936011261048d57602061013654604051908152f35b503461048d578060031936011261048d5760ca54604051632474521560e21b81527f5a7d4408f4759dddd7fdfd0d21abd99341dc2f52cda14804988a9b2df20766d8600482015233602482015290602090829060449082906001600160a01b03165afa908115610b3b578291611701575b5015610f165760655460ff8116156116c55760ff19166065557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b61171a915060203d602011610363576103558183611c77565b3861167f565b503461048d578060031936011261048d5760ff546040516001600160a01b039091168152602090f35b503461048d57608036600319011261048d57611763611caf565b6064356001600160a01b0381169190829003610ac55760c9546001600160a01b03163303611529576117936123c9565b818352610103602090815260408085206001600160a01b038481168752925284206001015416611972576040516368d0612f60e01b8152906001600160a01b03811690602083600481855afa92831561062d57859361193c575b506117f8908361241a565b80845260cb602052604084209283546001850154111561192a57818552610100602052604085206024358652602052604085208054938415611918576007936002600184015493015480151560001461191057611855904261240d565b925b6040519661186488611c45565b6004803589526020808a018581526040808c0194855260608c0195865260808c018e815260a08d0198895260c08d01998a5260e08d018f81529a8f526101038452818f20978f5296909252908c2099518a555160018a0180546001600160a01b0319166001600160a01b03929092169190911790559051600289015590516003880155905190860155516005850155516006840155519101558054600019811461092557600101905580f35b508792611857565b604051630efac93f60e31b8152600490fd5b604051632c539eb360e21b8152600490fd5b9092506020813d60201161196a575b8161195860209383611c77565b810103126104855751916117f86117ed565b3d915061194b565b60405163c1ccec5d60e01b8152600490fd5b503461048d57604036600319011261048d5761199e611cca565b60ca54604051632474521560e21b81527fc0fc8e4dc5cff6febdf550b80d566f654e2baf1a02ea1060208c2f8ab2dd1b63600482015233602482015290602090829060449082906001600160a01b03165afa908115610aed578391611a24575b5015610f16576001600160a01b0316815260cb6020526040812060243560019091015580f35b611a3d915060203d602011610363576103558183611c77565b386119fe565b503461048d57604036600319011261048d576020906040906001600160a01b03611a6b611cca565b1681526101018352818120602435825283522054604051908152f35b503461048d57608036600319011261048d57600435906001600160401b03821161048d573660238301121561048d578160040135611ac481611c98565b92611ad26040519485611c77565b8184526024602085019260051b82010190368211610f5657602401915b818310611bb8575050506024356001600160401b038111610489573660238201121561048957806004013590611b2482611c98565b91611b326040519384611c77565b8083526024602084019160051b8301019136831161048557602401905b828210611ba857505050611b61611caf565b9060643593835b8151811015611ba457600190611b9e87866001600160a01b03611b8b8588611d6c565b5116611b978589611d6c565b5190612142565b01611b68565b8480f35b8135815260209182019101611b4f565b82356001600160a01b038116810361048557815260209283019201611aef565b9050346104895760203660031901126104895760043563ffffffff60e01b8116809103610ac557602092506301ffc9a760e01b8114908115611c34575b8115611c23575b5015158152f35b636c91bd0560e11b14905038611c1c565b63cedc502360e01b81149150611c15565b61010081019081106001600160401b03821117611c6157604052565b634e487b7160e01b600052604160045260246000fd5b90601f801991011681019081106001600160401b03821117611c6157604052565b6001600160401b038111611c615760051b60200190565b604435906001600160a01b0382168203611cc557565b600080fd5b600435906001600160a01b0382168203611cc557565b602435906001600160a01b0382168203611cc557565b60005b838110611d095750506000910152565b8181015183820152602001611cf9565b90602091611d3281518092818552858086019101611cf6565b601f01601f1916010190565b8054821015611d565760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b8051821015611d565760209160051b010190565b90816020910312611cc557518015158103611cc55790565b51906001600160a01b0382168203611cc557565b81601f82011215611cc55780516001600160401b038111611c615760405192611ddf601f8301601f191660200185611c77565b81845260208284010111611cc557611dfd9160208085019101611cf6565b90565b602081830312611cc5578051906001600160401b038211611cc5570160a081830312611cc5576040519160a083018381106001600160401b03821117611c6157604052611e4c82611d98565b83526020820151602084015260408201516040840152611e6e60608301611d98565b606084015260808201516001600160401b038111611cc557611e909201611dac565b608082015290565b91908203918211611ea557565b634e487b7160e01b600052601160045260246000fd5b90816020910312611cc557516001600160a01b0381168103611cc55790565b6001600160a01b039081166000818152610103602052604080822060c95491516341f63bfd60e01b8152600481019690965292949384916024918391165afa8015612084576040926000916120f2575b50516001600160a01b03166000908152602091909152206040519091611f4f82611c45565b8254825260018301546001600160a01b031660208301818152600285015460408501526003850154606085015260048501546080850152600585015460a0850152600685015460c085015260079094015460e08401529081156120e9576020600492604051938480926368d0612f60e01b82525afa918215612084576000926120b2575b509251604051631f1b131360e31b81529390602090859060049082906001600160a01b03165afa93841561208457600094612090575b50604051630ed1279f60e11b8152600481019190915292602090849060249082906001600160a01b03165afa9182156120845760009261204e575b611dfd93506124ea565b91506020833d60201161207c575b8161206960209383611c77565b81010312611cc557611dfd925191612044565b3d915061205c565b6040513d6000823e3d90fd5b60209194506120ab90823d8411610c5257610c448183611c77565b9390612009565b9391506020843d6020116120e1575b816120ce60209383611c77565b81010312611cc557925190926020611fd3565b3d91506120c1565b50505050600090565b61210791503d806000833e61061e8183611c77565b38611f2a565b9190811015611d56576060020190565b90602082820312611cc55781516001600160401b038111611cc557611dfd9201611dac565b92919260ff606554166123c3576001600160a01b0381811660008181526101036020908152604080832089861684529091529020600101549091161561227e5760005261010360205260408060002060009060018060a01b03871682526020522060046020604051926121b484611c45565b80548452600760018060a01b036001830154169182848701526002810154604087015260038101546060870152848101546080870152600581015460a0870152600681015460c0870152015460e085015260405192838092631f1b131360e31b82525afa9081156120845760009161225f575b50336001600160a01b039091160361224d5761224661224b958561241a565b612551565b565b6040516325a2afeb60e01b8152600490fd5b612278915060203d602011610c5257610c448183611c77565b38612227565b505060ff546040516306fdde0360e01b81529293926001600160a01b039182169250906000908290600490829087165afa8015612084576122e7926020926000926123a6575b50604051808095819463af9a2aa760e01b83528660048401526024830190611d19565b03915afa90811561208457600091612367575b50604051631f1b131360e31b815290602090829060049082906001600160a01b03165afa90811561208457600091612348575b50336001600160a01b039091160361224d5761224b9161241a565b612361915060203d602011610c5257610c448183611c77565b3861232d565b90506020813d60201161239e575b8161238260209383611c77565b81010312611cc5576020612397600492611d98565b91506122fa565b3d9150612375565b6123bc9192503d806000833e610ade8183611c77565b90386122c4565b50505050565b60ff606554166123d557565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b91908201809211611ea557565b6001600160a01b03909116600081815261010260205260409020541580156124a8575b612445575050565b806000526101026020526040600020805468010000000000000000811015611c615761247691600182018155611d3e565b81549060031b9042821b91600019901b1916179055600052610101602052604060002042600052602052604060002055565b5060008181526101026020526040902080546000198101908111611ea5576124cf91611d3e565b90549060031b1c610e108101809111611ea55742101561243d565b919060c083015180612501575b50611dfd92612809565b600019811461254757428110156124f757602084015161252c926001600160a01b039091169161265d565b60a083015181111561253e57386124f7565b50506080015190565b5050506080015190565b92919061255d846125f7565b6125675750505050565b6001600160a01b0390811660009081526101036020908152604080832087830180519095168452909152902060c08501519092914282106125c3575b50506125b3908360059495612809565b60048201550155388080806123c3565b5191936125d9926001600160a01b03169161265d565b92600019600683015560a08101518411156123c357929138806125a3565b606081015180612626575b5060c0015180612613575b50600190565b60001914612621573861260d565b600090565b608082015110156126375738612602565b50600090565b8115612647570490565b634e487b7160e01b600052601260045260246000fd5b6001600160a01b0390921660008181526101026020526040812054919493926000198301928311611ea55782866000526101026020526126a1816040600020611d3e565b90549060031b1c90818611908115612800575b506127d45750505b818110612747575b906127016126e58693611dfd96976000526101026020526040600020611d3e565b90549060031b1c91836000526101026020526040600020611d3e565b90549060031b1c91806000526101016020526040600020826000526020526040600020549060005261010160205260406000208360005260205260406000205490612903565b906000198101818111611ea55782146127ce57612764818361240d565b60011c9085600052610102602052612780826040600020611d3e565b90549060031b1c808510600014612799575050906126bc565b909250808411156127aa57506126bc565b93949250505060005261010160205260406000209060005260205260406000205490565b906126c4565b91509150611dfd9394600052610101602052604060002081600052602052604060002054914292612903565b905015386126b4565b916128189060408401516129ed565b6706f05b59d3b20000810190818111611ea557811061289257670de0b6b3a764000061284c6128539360a086015190611e98565b91046129b4565b60608201805161286b57506080611dfd92015161240d565b9160800161287a82825161240d565b8351116128875750505190565b611dfd92505161240d565b630a77254f60e01b60005260046000fd5b156128aa57565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b929391612917816129178661291d95611e98565b94611e98565b906000936b033b2e3c9fd0803ce80000008102948186046b033b2e3c9fd0803ce800000014821517156129a057506b033b2e3c9fd0803ce800000085040361298f5761296c8260011c8561240d565b9384106128925761298361298992611dfd9561263d565b906129b4565b9061240d565b631550e8b760e01b60005260046000fd5b634e487b7160e01b81526011600452602490fd5b906129be916129ed565b6b019d971e4fe8401e74000000810190818111611ea5578110612892576b033b2e3c9fd0803ce8000000900490565b600092918015918215612a04575b50501561298f57565b80820294509150811582850482141715611ea557612a22908461263d565b1438806129fb56fea264697066735822122078c1406d0609ce97ff7d3d1a1679f219765f5acd9176195010e094062bdeb01464736f6c634300081a0033";

type FeeDecreaserV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeDecreaserV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeDecreaserV2__factory extends ContractFactory {
  constructor(...args: FeeDecreaserV2ConstructorParams) {
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
      FeeDecreaserV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FeeDecreaserV2__factory {
    return super.connect(runner) as FeeDecreaserV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeDecreaserV2Interface {
    return new Interface(_abi) as FeeDecreaserV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FeeDecreaserV2 {
    return new Contract(address, _abi, runner) as unknown as FeeDecreaserV2;
  }
}
