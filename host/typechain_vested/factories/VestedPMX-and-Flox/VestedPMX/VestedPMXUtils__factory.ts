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
import type { NonPayableOverrides } from "../../../common";
import type {
  VestedPMXUtils,
  VestedPMXUtilsInterface,
} from "../../../VestedPMX-and-Flox/VestedPMX/VestedPMXUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vestedPMX",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "int128[]",
        name: "_pmxAmounts",
        type: "int128[]",
      },
      {
        internalType: "uint128[]",
        name: "_lockSecsU128",
        type: "uint128[]",
      },
    ],
    name: "getCrudeExpectedVePMXMultiLock",
    outputs: [
      {
        internalType: "uint256",
        name: "_expectedVePMX",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "_pmxAmount",
        type: "int128",
      },
      {
        internalType: "uint128",
        name: "_lockSecsU128",
        type: "uint128",
      },
    ],
    name: "getCrudeExpectedVePMXOneLock",
    outputs: [
      {
        internalType: "uint256",
        name: "_expectedVePMX",
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
    ],
    name: "getCrudeExpectedVePMXUser",
    outputs: [
      {
        internalType: "uint256",
        name: "_expectedVePMX",
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
    ],
    name: "getDetailedUserLockInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "numberOfLocks",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint128",
                name: "index",
                type: "uint128",
              },
              {
                internalType: "int128",
                name: "amount",
                type: "int128",
              },
              {
                internalType: "uint128",
                name: "end",
                type: "uint128",
              },
            ],
            internalType: "struct IvePMXStructs.LockedBalanceExtended[]",
            name: "allLocks",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint128",
                name: "index",
                type: "uint128",
              },
              {
                internalType: "int128",
                name: "amount",
                type: "int128",
              },
              {
                internalType: "uint128",
                name: "end",
                type: "uint128",
              },
            ],
            internalType: "struct IvePMXStructs.LockedBalanceExtended[]",
            name: "activeLocks",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint128",
                name: "index",
                type: "uint128",
              },
              {
                internalType: "int128",
                name: "amount",
                type: "int128",
              },
              {
                internalType: "uint128",
                name: "end",
                type: "uint128",
              },
            ],
            internalType: "struct IvePMXStructs.LockedBalanceExtended[]",
            name: "expiredLocks",
            type: "tuple[]",
          },
          {
            internalType: "int128[3]",
            name: "totalPmx",
            type: "int128[3]",
          },
        ],
        internalType: "struct IvePMXStructs.DetailedUserLockInfo",
        name: "_userLockInfo",
        type: "tuple",
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
    ],
    name: "getDetailedUserLockInfoBulk",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "numberOfLocks",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint128",
                name: "index",
                type: "uint128",
              },
              {
                internalType: "int128",
                name: "amount",
                type: "int128",
              },
              {
                internalType: "uint128",
                name: "end",
                type: "uint128",
              },
            ],
            internalType: "struct IvePMXStructs.LockedBalanceExtended[]",
            name: "allLocks",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint128",
                name: "index",
                type: "uint128",
              },
              {
                internalType: "int128",
                name: "amount",
                type: "int128",
              },
              {
                internalType: "uint128",
                name: "end",
                type: "uint128",
              },
            ],
            internalType: "struct IvePMXStructs.LockedBalanceExtended[]",
            name: "activeLocks",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "uint128",
                name: "index",
                type: "uint128",
              },
              {
                internalType: "int128",
                name: "amount",
                type: "int128",
              },
              {
                internalType: "uint128",
                name: "end",
                type: "uint128",
              },
            ],
            internalType: "struct IvePMXStructs.LockedBalanceExtended[]",
            name: "expiredLocks",
            type: "tuple[]",
          },
          {
            internalType: "int128[3]",
            name: "totalPmx",
            type: "int128[3]",
          },
        ],
        internalType: "struct IvePMXStructs.DetailedUserLockInfo[]",
        name: "_userLockInfos",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getLongestLock",
    outputs: [
      {
        components: [
          {
            internalType: "int128",
            name: "amount",
            type: "int128",
          },
          {
            internalType: "uint128",
            name: "end",
            type: "uint128",
          },
        ],
        internalType: "struct IvePMXStructs.LockedBalance",
        name: "",
        type: "tuple",
      },
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
    inputs: [
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
    ],
    name: "getLongestLockBulk",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "int128",
                name: "amount",
                type: "int128",
              },
              {
                internalType: "uint128",
                name: "end",
                type: "uint128",
              },
            ],
            internalType: "struct IvePMXStructs.LockedBalance",
            name: "lock",
            type: "tuple",
          },
          {
            internalType: "uint128",
            name: "lockIndex",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        internalType: "struct IvePMXStructs.LongestLock[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    name: "vePMX",
    outputs: [
      {
        internalType: "contract IVestedPMX",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051612ae8380380612ae883398181016040528101906100329190610173565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d79190610173565b73ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050506101a0565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061014082610115565b9050919050565b61015081610135565b811461015b57600080fd5b50565b60008151905061016d81610147565b92915050565b60006020828403121561018957610188610110565b5b60006101978482850161015e565b91505092915050565b60805160a0516128ba61022e60003960006116770152600081816102e8015281816104720152818161061f015281816106bc01528181610b3a01528181610bdb01528181610c6a01528181610d1001528181610df801528181610f89015281816110a5015281816111a60152818161127701528181611312015281816113e101526114fc01526128ba6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063d8e6971611610066578063d8e6971614610158578063f37461ab14610188578063f4ebfcae146101b9578063fb908ddd146101d7578063fc0c546a1461020757610093565b806329d71cb6146100985780632d3c1721146100c85780633c593312146100f8578063ba12f87814610128575b600080fd5b6100b260048036038101906100ad91906119a5565b610225565b6040516100bf9190611d57565b60405180910390f35b6100e260048036038101906100dd9190611f57565b6102e3565b6040516100ef9190611fde565b60405180910390f35b610112600480360381019061010d9190611ff9565b610466565b60405161011f91906120be565b60405180910390f35b610142600480360381019061013d91906120e0565b610b36565b60405161014f9190611fde565b60405180910390f35b610172600480360381019061016d9190611ff9565b610de6565b60405161017f9190611fde565b60405180910390f35b6101a2600480360381019061019d9190611ff9565b610f7c565b6040516101b092919061215e565b60405180910390f35b6101c1611275565b6040516101ce91906121e6565b60405180910390f35b6101f160048036038101906101ec91906119a5565b611299565b6040516101fe9190612321565b60405180910390f35b61020f611675565b60405161021c9190612364565b60405180910390f35b60606000825190508067ffffffffffffffff81111561024757610246611804565b5b60405190808252806020026020018201604052801561028057816020015b61026d611699565b8152602001906001900390816102655790505b50915060005b818110156102dc576102b18482815181106102a4576102a361237f565b5b6020026020010151610466565b8382815181106102c4576102c361237f565b5b60200260200101819052508080600101915050610286565b5050919050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f89464856040518163ffffffff1660e01b8152600401602060405180830381865afa158015610351573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037591906123e6565b905060005b8451816fffffffffffffffffffffffffffffffff16101561045e5781156103dd5784816fffffffffffffffffffffffffffffffff16815181106103c0576103bf61237f565b5b6020026020010151600f0b836103d69190612442565b925061044d565b61043f85826fffffffffffffffffffffffffffffffff16815181106104055761040461237f565b5b602002602001015185836fffffffffffffffffffffffffffffffff16815181106104325761043161237f565b5b6020026020010151610b36565b8361044a9190612442565b92505b8061045790612476565b905061037a565b505092915050565b61046e611699565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b9ef0830846040518263ffffffff1660e01b81526004016104c991906124bd565b602060405180830381865afa1580156104e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050a91906124ed565b6fffffffffffffffffffffffffffffffff16905060008183602001818152505083836000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508167ffffffffffffffff81111561057c5761057b611804565b5b6040519080825280602002602001820160405280156105b557816020015b6105a26116eb565b81526020019060019003908161059a5790505b50836040018190525060008267ffffffffffffffff8111156105da576105d9611804565b5b6040519080825280602002602001820160405280156106085781602001602082028036833780820191505090505b50905060005b8460400151518110156109655760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c984e988846040518363ffffffff1660e01b815260040161067892919061251a565b6040805180830381865afa158015610694573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b891906125ad565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635f96d4e788846040518363ffffffff1660e01b815260040161071592919061251a565b602060405180830381865afa158015610732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107569190612606565b8660400151838151811061076d5761076c61237f565b5b6020026020010151600001818152505081866040015183815181106107955761079461237f565b5b6020026020010151602001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff16815250508060000151866040015183815181106107e7576107e661237f565b5b602002602001015160400190600f0b9081600f0b8152505080602001518660400151838151811061081b5761081a61237f565b5b6020026020010151606001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff168152505080600001518660a0015160006003811061086e5761086d61237f565b5b6020020181815161087f9190612633565b915090600f0b9081600f0b815250504281602001516fffffffffffffffffffffffffffffffff16111561091b5760018383815181106108c1576108c061237f565b5b60200260200101901515908115158152505080600001518660a001516001600381106108f0576108ef61237f565b5b602002018181516109019190612633565b915090600f0b9081600f0b81525050836001019350610959565b80600001518660a001516002600381106109385761093761237f565b5b602002018181516109499190612633565b915090600f0b9081600f0b815250505b8160010191505061060e565b50816fffffffffffffffffffffffffffffffff1667ffffffffffffffff81111561099257610991611804565b5b6040519080825280602002602001820160405280156109cb57816020015b6109b86116eb565b8152602001906001900390816109b05790505b508460600181905250816fffffffffffffffffffffffffffffffff16836109f2919061269b565b67ffffffffffffffff811115610a0b57610a0a611804565b5b604051908082528060200260200182016040528015610a4457816020015b610a316116eb565b815260200190600190039081610a295790505b50846080018190525060008060005b866040015151811015610b2b57600087604001518281518110610a7957610a7861237f565b5b60200260200101519050848281518110610a9657610a9561237f565b5b602002602001015115610ae357808860600151856fffffffffffffffffffffffffffffffff1681518110610acd57610acc61237f565b5b6020026020010181905250836001019350610b1f565b808860800151846fffffffffffffffffffffffffffffffff1681518110610b0d57610b0c61237f565b5b60200260200101819052508260010192505b81600101915050610a53565b505050505050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f89464856040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ba3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc791906123e6565b15610bd75782600f0b9050610de0565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637c10d93a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6891906124ed565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637c10d93a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf791906124ed565b84610d0291906126fe565b610d0c919061272f565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637aa9b5566040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9d919061276c565b81856003610dab9190612799565b610db59190612799565b610dbf91906127d6565b84610dca9190612633565b6fffffffffffffffffffffffffffffffff169150505b92915050565b600080610df283610466565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f89464856040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8591906123e6565b905060005b8260200151816fffffffffffffffffffffffffffffffff161015610f745760008360400151826fffffffffffffffffffffffffffffffff1681518110610ed357610ed261237f565b5b602002602001015190508215610efd578060400151600f0b85610ef69190612442565b9450610f68565b6000426fffffffffffffffffffffffffffffffff1682606001516fffffffffffffffffffffffffffffffff161015610f385760009050610f4b565b428260600151610f489190612840565b90505b610f59826040015182610b36565b86610f649190612442565b9550505b81600101915050610e8a565b505050919050565b610f8461173a565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b9ef0830856040518263ffffffff1660e01b8152600401610fe091906124bd565b602060405180830381865afa158015610ffd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102191906124ed565b6fffffffffffffffffffffffffffffffff1667ffffffffffffffff81111561104c5761104b611804565b5b60405190808252806020026020018201604052801561108557816020015b61107261173a565b81526020019060019003908161106a5790505b50905061109061173a565b600080600090505b83518110156112665760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c984e989846040518363ffffffff1660e01b81526004016110fe92919061251a565b6040805180830381865afa15801561111a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113e91906125ad565b60200151905083602001516fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff161115611258578084602001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c984e989846040518363ffffffff1660e01b81526004016111ff92919061251a565b6040805180830381865afa15801561121b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123f91906125ad565b600001518460000190600f0b9081600f0b815250508192505b818060010192505050611098565b50818194509450505050915091565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606000825167ffffffffffffffff8111156112b8576112b7611804565b5b6040519080825280602002602001820160405280156112f157816020015b6112de611769565b8152602001906001900390816112d65790505b5090506112fc61173a565b600080600090505b85518110156116695760005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b9ef083088848151811061135f5761135e61237f565b5b60200260200101516040518263ffffffff1660e01b815260040161138391906124bd565b602060405180830381865afa1580156113a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c491906124ed565b6fffffffffffffffffffffffffffffffff168110156115d45760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c984e989858151811061142e5761142d61237f565b5b6020026020010151846040518363ffffffff1660e01b815260040161145492919061251a565b6040805180830381865afa158015611470573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149491906125ad565b60200151905084602001516fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff1611156115c8578085602001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c984e98985815181106115495761154861237f565b5b6020026020010151846040518363ffffffff1660e01b815260040161156f92919061251a565b6040805180830381865afa15801561158b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115af91906125ad565b600001518560000190600f0b9081600f0b815250508193505b81600101915050611310565b506040518060600160405280848152602001836fffffffffffffffffffffffffffffffff1681526020018783815181106116115761161061237f565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168152508482815181106116455761164461237f565b5b602002602001018190525061165861173a565b925060009150806001019050611304565b50829350505050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160608152602001606081526020016116e56117b8565b81525090565b60405180608001604052806000815260200160006fffffffffffffffffffffffffffffffff1681526020016000600f0b815260200160006fffffffffffffffffffffffffffffffff1681525090565b60405180604001604052806000600f0b815260200160006fffffffffffffffffffffffffffffffff1681525090565b604051806060016040528061177c61173a565b815260200160006fffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6040518060600160405280600390602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61183c826117f3565b810181811067ffffffffffffffff8211171561185b5761185a611804565b5b80604052505050565b600061186e6117da565b905061187a8282611833565b919050565b600067ffffffffffffffff82111561189a57611899611804565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118db826118b0565b9050919050565b6118eb816118d0565b81146118f657600080fd5b50565b600081359050611908816118e2565b92915050565b600061192161191c8461187f565b611864565b90508083825260208201905060208402830185811115611944576119436118ab565b5b835b8181101561196d578061195988826118f9565b845260208401935050602081019050611946565b5050509392505050565b600082601f83011261198c5761198b6117ee565b5b813561199c84826020860161190e565b91505092915050565b6000602082840312156119bb576119ba6117e4565b5b600082013567ffffffffffffffff8111156119d9576119d86117e9565b5b6119e584828501611977565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611a23816118d0565b82525050565b6000819050919050565b611a3c81611a29565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b611a9381611a6e565b82525050565b600081600f0b9050919050565b611aaf81611a99565b82525050565b608082016000820151611acb6000850182611a33565b506020820151611ade6020850182611a8a565b506040820151611af16040850182611aa6565b506060820151611b046060850182611a8a565b50505050565b6000611b168383611ab5565b60808301905092915050565b6000602082019050919050565b6000611b3a82611a42565b611b448185611a4d565b9350611b4f83611a5e565b8060005b83811015611b80578151611b678882611b0a565b9750611b7283611b22565b925050600181019050611b53565b5085935050505092915050565b600060039050919050565b600081905092915050565b6000819050919050565b6000611bb98383611aa6565b60208301905092915050565b6000602082019050919050565b611bdb81611b8d565b611be58184611b98565b9250611bf082611ba3565b8060005b83811015611c21578151611c088782611bad565b9650611c1383611bc5565b925050600181019050611bf4565b505050505050565b600061010083016000830151611c426000860182611a1a565b506020830151611c556020860182611a33565b5060408301518482036040860152611c6d8282611b2f565b91505060608301518482036060860152611c878282611b2f565b91505060808301518482036080860152611ca18282611b2f565b91505060a0830151611cb660a0860182611bd2565b508091505092915050565b6000611ccd8383611c29565b905092915050565b6000602082019050919050565b6000611ced826119ee565b611cf781856119f9565b935083602082028501611d0985611a0a565b8060005b85811015611d455784840389528151611d268582611cc1565b9450611d3183611cd5565b925060208a01995050600181019050611d0d565b50829750879550505050505092915050565b60006020820190508181036000830152611d718184611ce2565b905092915050565b600067ffffffffffffffff821115611d9457611d93611804565b5b602082029050602081019050919050565b611dae81611a99565b8114611db957600080fd5b50565b600081359050611dcb81611da5565b92915050565b6000611de4611ddf84611d79565b611864565b90508083825260208201905060208402830185811115611e0757611e066118ab565b5b835b81811015611e305780611e1c8882611dbc565b845260208401935050602081019050611e09565b5050509392505050565b600082601f830112611e4f57611e4e6117ee565b5b8135611e5f848260208601611dd1565b91505092915050565b600067ffffffffffffffff821115611e8357611e82611804565b5b602082029050602081019050919050565b611e9d81611a6e565b8114611ea857600080fd5b50565b600081359050611eba81611e94565b92915050565b6000611ed3611ece84611e68565b611864565b90508083825260208201905060208402830185811115611ef657611ef56118ab565b5b835b81811015611f1f5780611f0b8882611eab565b845260208401935050602081019050611ef8565b5050509392505050565b600082601f830112611f3e57611f3d6117ee565b5b8135611f4e848260208601611ec0565b91505092915050565b60008060408385031215611f6e57611f6d6117e4565b5b600083013567ffffffffffffffff811115611f8c57611f8b6117e9565b5b611f9885828601611e3a565b925050602083013567ffffffffffffffff811115611fb957611fb86117e9565b5b611fc585828601611f29565b9150509250929050565b611fd881611a29565b82525050565b6000602082019050611ff36000830184611fcf565b92915050565b60006020828403121561200f5761200e6117e4565b5b600061201d848285016118f9565b91505092915050565b60006101008301600083015161203f6000860182611a1a565b5060208301516120526020860182611a33565b506040830151848203604086015261206a8282611b2f565b915050606083015184820360608601526120848282611b2f565b9150506080830151848203608086015261209e8282611b2f565b91505060a08301516120b360a0860182611bd2565b508091505092915050565b600060208201905081810360008301526120d88184612026565b905092915050565b600080604083850312156120f7576120f66117e4565b5b600061210585828601611dbc565b925050602061211685828601611eab565b9150509250929050565b6040820160008201516121366000850182611aa6565b5060208201516121496020850182611a8a565b50505050565b61215881611a6e565b82525050565b60006060820190506121736000830185612120565b612180604083018461214f565b9392505050565b6000819050919050565b60006121ac6121a76121a2846118b0565b612187565b6118b0565b9050919050565b60006121be82612191565b9050919050565b60006121d0826121b3565b9050919050565b6121e0816121c5565b82525050565b60006020820190506121fb60008301846121d7565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6040820160008201516122436000850182611aa6565b5060208201516122566020850182611a8a565b50505050565b608082016000820151612272600085018261222d565b5060208201516122856040850182611a8a565b5060408201516122986060850182611a1a565b50505050565b60006122aa838361225c565b60808301905092915050565b6000602082019050919050565b60006122ce82612201565b6122d8818561220c565b93506122e38361221d565b8060005b838110156123145781516122fb888261229e565b9750612306836122b6565b9250506001810190506122e7565b5085935050505092915050565b6000602082019050818103600083015261233b81846122c3565b905092915050565b600061234e826121b3565b9050919050565b61235e81612343565b82525050565b60006020820190506123796000830184612355565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008115159050919050565b6123c3816123ae565b81146123ce57600080fd5b50565b6000815190506123e0816123ba565b92915050565b6000602082840312156123fc576123fb6117e4565b5b600061240a848285016123d1565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061244d82611a29565b915061245883611a29565b92508282019050808211156124705761246f612413565b5b92915050565b600061248182611a6e565b91506fffffffffffffffffffffffffffffffff82036124a3576124a2612413565b5b600182019050919050565b6124b7816118d0565b82525050565b60006020820190506124d260008301846124ae565b92915050565b6000815190506124e781611e94565b92915050565b600060208284031215612503576125026117e4565b5b6000612511848285016124d8565b91505092915050565b600060408201905061252f60008301856124ae565b61253c602083018461214f565b9392505050565b600080fd5b60008151905061255781611da5565b92915050565b60006040828403121561257357612572612543565b5b61257d6040611864565b9050600061258d84828501612548565b60008301525060206125a1848285016124d8565b60208301525092915050565b6000604082840312156125c3576125c26117e4565b5b60006125d18482850161255d565b91505092915050565b6125e381611a29565b81146125ee57600080fd5b50565b600081519050612600816125da565b92915050565b60006020828403121561261c5761261b6117e4565b5b600061262a848285016125f1565b91505092915050565b600061263e82611a99565b915061264983611a99565b925082820190507fffffffffffffffffffffffffffffffff8000000000000000000000000000000081126f7fffffffffffffffffffffffffffffff8213171561269557612694612413565b5b92915050565b60006126a682611a29565b91506126b183611a29565b92508282039050818111156126c9576126c8612413565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061270982611a6e565b915061271483611a6e565b925082612724576127236126cf565b5b828204905092915050565b600061273a82611a6e565b915061274583611a6e565b925082820261275381611a6e565b915080821461276557612764612413565b5b5092915050565b600060208284031215612782576127816117e4565b5b600061279084828501612548565b91505092915050565b60006127a482611a99565b91506127af83611a99565b92508282026127bd81611a99565b91508082146127cf576127ce612413565b5b5092915050565b60006127e182611a99565b91506127ec83611a99565b9250826127fc576127fb6126cf565b5b600160000383147fffffffffffffffffffffffffffffffff800000000000000000000000000000008314161561283557612834612413565b5b828205905092915050565b600061284b82611a6e565b915061285683611a6e565b925082820390506fffffffffffffffffffffffffffffffff81111561287e5761287d612413565b5b9291505056fea2646970667358221220f61d3b6a96f09d9cd8ae47dc99a882d6eed45f4c937a74a26a5bf1adfb96a76564736f6c634300081a0033";

type VestedPMXUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestedPMXUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VestedPMXUtils__factory extends ContractFactory {
  constructor(...args: VestedPMXUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _vestedPMX: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_vestedPMX, overrides || {});
  }
  override deploy(
    _vestedPMX: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_vestedPMX, overrides || {}) as Promise<
      VestedPMXUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): VestedPMXUtils__factory {
    return super.connect(runner) as VestedPMXUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestedPMXUtilsInterface {
    return new Interface(_abi) as VestedPMXUtilsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): VestedPMXUtils {
    return new Contract(address, _abi, runner) as unknown as VestedPMXUtils;
  }
}
