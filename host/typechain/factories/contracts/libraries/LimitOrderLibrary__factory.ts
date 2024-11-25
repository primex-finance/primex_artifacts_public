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
  LimitOrderLibrary,
  LimitOrderLibraryInterface,
} from "../../../contracts/libraries/LimitOrderLibrary";

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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "managerType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        internalType: "struct LimitOrderLibrary.Condition[]",
        name: "conditions",
        type: "tuple[]",
      },
    ],
    name: "hasNoConditionManagerTypeDuplicates",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001c5761353a90816100228239308160080152f35b600080fdfe6104a0604052307f000000000000000000000000000000000000000000000000000000000000000014600436101561003657600080fd5b60006101805260003560e01c806304cfb72b1461166c5780633c7e51de1461064557806355a1b6d914610498578063a1cc550814610459578063c487b032146102e9578063c678c4dd146101165763cb0b31601461009357600080fd5b61010f57608036600319011261010f57602435604435600435811515820361010a576100f9906100c16121bf565b92600360018060a01b03600284015416920193845492838711936101805150878560001461010157906100f391612572565b91613287565b556101805180f35b6100f391612572565b600080fd5b6101805180fd5b5061010f576101243661242a565b90919261013083612f21565b156102d7578251156102c5576101000190815161018051526020938085526101805160408120546102ac575b50610165612698565b50610180515b84518110156102a55761017e81866126c1565b5180516040516352ff146960e11b815260048101919091529091906001600160a01b03906024898282818a87165afa908115610268578a926101805192610276575b506040516301ffc9a760e01b81526301f24f2560e11b60048201529384928391165afa908115610268576101805191610233575b50156102215761021761021c928651610180515284895260406101805120612717565b6126b2565b61016b565b60405163cd31c47f60e01b8152600490fd5b90508781813d8311610261575b61024a81836122db565b8101031261010f5761025b9061270a565b386101f4565b503d610240565b6040513d61018051823e3d90fd5b610297919250833d851161029e575b61028f81836122db565b8101906126eb565b90386101c0565b503d610285565b6101805180f35b835190526102bf604061018051206125e3565b3861015c565b60405163f0f1a5f160e01b8152600490fd5b604051634930cce560e11b8152600490fd5b5061010f57606036600319011261010f576024356004356103086121d5565b670de0b6b3a764000091828411156104475760098101928354146104355760018060a01b039182600181845416930154166040519163fa11ed3760e01b8352600480840152826024816020978894165afa9081156102685784926101805192610402575b50604051633623869b60e01b81526001600160a01b03909116600482015260248101919091529182908180604481015b03915afa9182156102685761018051926103d4575b50508210156103c257556101805180f35b60405163373af0df60e01b8152600490fd5b90809250813d83116103fb575b6103eb81836122db565b8101031261010a575138806103b1565b503d6103e1565b8381949293503d831161042e575b61041a81836122db565b8101031261010a579051839161039c61036c565b503d610410565b60405163cc30823f60e01b8152600490fd5b604051632050ee9360e11b8152600490fd5b602036600319011261010f576004356001600160401b03811161010f5761048e6104896020923690600401612377565b612f21565b6040519015158152f35b5061010f576104a63661242a565b9091926104b283612f21565b156102d7576101408101511580159061063c575b1561062a57610100019081516101805152602093808552610180516040812054610611575b506104f4612698565b50610180515b84518110156102a55761050d81866126c1565b5180516040516352ff146960e11b815260048101919091529091906001600160a01b03906024898282818a87165afa908115610268578a9261018051926105f2575b506040516301ffc9a760e01b8152636370e1ad60e01b60048201529384928391165afa9081156102685761018051916105bd575b50156105ab576102176105a6928651610180515284895260406101805120612717565b6104fa565b6040516368095ef560e01b8152600490fd5b90508781813d83116105eb575b6105d481836122db565b8101031261010f576105e59061270a565b38610583565b503d6105ca565b61060a919250833d851161029e5761028f81836122db565b903861054f565b83519052610624604061018051206125e3565b386104eb565b604051634cf5cbef60e11b8152600490fd5b508251156104c6565b5061010f5760031960e03682011261010f576001600160401b036024351161010f57610240906024353603011261010f576044356001600160401b03811161010f57610695903690600401612377565b610320526106a16121bf565b60c0526084356001600160a01b038116810361010f5760a435906001600160a01b038216820361010f576106d36128e0565b506106dc6128e0565b6101005260043580546001600160a01b031615610260526005015480611598575b50600435600a015460ff1615610f56575050610180516102605115610f51575060015b6004811015610f3b57608061010051015261074560646024350160243560040161295b565b6102c0526102205261076160846024350160243560040161295b565b61077560c460243501602435600401612860565b91906103c05261078f60e460243501602435600401612860565b61034052610380526107ac61010460243501602435600401612860565b610200526101c0526107c96101a460243501602435600401612860565b610300526103e0526107e661016460243501602435600401612860565b60a05260805261080161018460243501602435600401612860565b6101e0526101a05261081e6101c460243501602435600401612860565b60e0526103a0526040518061016052806101a08101106001600160401b036101a083011117610f25576101a0810160405233905260405161085e8161223f565b6004803580546001600160a01b03908116845260018201548116602085015260028201548116604080860191909152600383015460608601529282015481166080850152600582015460a085015260068201541660c0840152600781015460e08401526008810154610100840152600981015461012080850191909152600a82015460ff161515610140850152600b820154610160850152600c8201546101808086019190915292519251600d909201549081905261091c90612592565b8083526101205160018116908115610f035750600114610ebe575b50918161094e610988959361099b989503826122db565b6101a08201526020610160510152610320516040610160510152610979366102c05161022051612990565b60606101605101523691612990565b608061016051015236906103c051612313565b60a06101605101526109b4366103405161038051612313565b60c06101605101526109cd36610200516101c051612313565b60e06101605101526109e636610300516103e051612313565b6101006101605101526109fe3660a051608051612313565b610120610160510152610a18366101e0516101a051612313565b610140610160510152610a313660e0516103a051612313565b6101608051810191909152805160248035610224908101356101809384015260408051622b155960ea1b81526020600482018190528651516001600160a01b039081169583019590955286518101516101a060448401819052815187166101c48501529181015186166101e48401529283015185166102048301526060830151938201939093526080820151841661024482015260a082015161026482015260c082015190931661028484015260e08101516102a48401526101008101516102c48401526101208101516102e4840152610140810151151561030484015293840151610324830152918301516103448201529101516101c06103648301528190610b40906103848301906121ff565b604061016051015190602319838203016064840152815180825260208201916020808360051b83010194019261018051915b838310610e7c57505050505090610c84610c6b610c50610c35610c1a610c00610be7610bcf610bb660a09a60606101605101516023198c83030160848d0152612d6c565b61016051608001518a82036023190160a48c0152612d6c565b610160518a01518982036023190160c48b01526121ff565b6101605160c001518882036023190160e48a01526121ff565b6101605160e00151878203602319016101048901526121ff565b610160516101000151868203602319016101248801526121ff565b610160516101200151858203602319016101448701526121ff565b610160516101400151848203602319016101648601526121ff565b61016080510151838203602319016101848501526121ff565b6101806101605101516101a4830152818061018051920391600180861b0360c051165af19081156102685761018051918291839184918591610e2a575b5060e061010051015260c061010051015260a0610100510152606061010051015260406101005101525b6102605115610dc657600435600201546001600160a01b03165b60018060a01b031680610100515260018060a01b0360016004350154166020610100510190815260405191825260018060a01b03905116602082015260406101005101516040820152606061010051015160608201526080610100510151906004821015610dac5761012091608082015260a061010051015160a082015260c061010051015160c082015260e061010051015160e082015261010080510151610100820152f35b634e487b7160e01b61018051526021600452602461018051fd5b600480355460405163011ddaef60e71b81529160209183919082906001600160a01b03165afa908115610268576101805191610e0c575b506001600160a01b0316610d05565b610e24915060203d811161029e5761028f81836122db565b38610dfd565b94505050505060a0813d60a011610e74575b81610e4960a093836122db565b8101031261010f57805160208201519160408101519160806060830151920151909392919038610cc1565b3d9150610e3c565b919395509193602080610eac600193601f198682030187526040838b5180518452015191818582015201906121ff565b97019301930190928695949293610b72565b9050600d6004350161018051526101805190602082205b818310610ee9575050810160200181610937565b600181602092949394548385880101520191019190610ed5565b60ff191660208086019190915291151560051b84019091019150829050610937565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b610720565b610f6a60846024350160243560040161295b565b905061158657600260806101005101526003600435015480604061010051015260018060a01b0360066004350154169060018060a01b03600260043501541660405192610fb68461228a565b8352306020840152604083015260608201526001600160a01b0382163b1561010f57604051809263a0fd10ad60e01b82528180610ffa610180519560048301612925565b61018051919003926001600160a01b03165af180156102685761156f575b506004803560028101546001600160a01b03908116610240526001820154166102a05260030154906110529060243560648101910161295b565b610280919091526004803560068101546001600160a01b039081166101405260078201549183015481166102e052604051637496a94d60e11b815260c05192959094909390926020928692918391165afa92831561026857610180519361154e575b506110c15a60c435612572565b916110d660c460243501602435600401612860565b916110ec61018460243501602435600401612860565b92909361110461016460243501602435600401612860565b9790986040519a8b610360528b6001600160401b03610180828181011092011117610f25576111656111bd996111ad978e6111cd9f610180016040526102405190526102a05160206103605101526040610360510152369061028051612990565b606061036051015261014051608061036051015260a06103605101526102e05160c061036051015260018060a01b031660e06103605101526101006103605101523691612313565b6101206103605101523691612313565b6101406103605101523691612313565b61036051610160015260405163a8905dab60e01b81526102405160048201526102a051602482015260c051602090829060449082906001600160a01b03165afa801561026857610180519061151b575b6040805163ca4de5a560e01b8152600481018290526103608051516001600160a01b03908116604484015281516020015116606483015280518301516084830152516060015161018060a483015290949193508492839182919061132d9061128a906101c4850190612d6c565b6103608051608001516001600160a01b0390811660c4870152815160a0015160e4870152815160c001518116610104870152815160e00151166101248601528051610100015161014486015251610120015184820360431990810161016487015291611313916112fa91906121ff565b61014061036051015183878303016101848801526121ff565b9061016061036051015190858303016101a48601526121ff565b602483019190915261018051919003926001600160a01b03165af1801561026857610180519182916114e2575b506101005160e08101918252606001918252600480356002015460405163313ce56760e01b808252929091602091839182906001600160a01b03165afa908115610268576113bb916113b69161018051916114b3575b50612ed2565b612ee3565b6004803560010154604051938452919391602091849182906001600160a01b03165afa918215610268576114026113b66114239461141e9361018051916114b35750612ed2565b9161141485604061010051015161257f565b9551905190612ef4565b61257f565b91670de0b6b3a7640000908181029181830481148215171561149d5782040361148b576114538360011c82612ef4565b9081106114795761146c9261146791612f01565b612f01565b60c0610100510152610ceb565b604051630a77254f60e01b8152600490fd5b604051631550e8b760e01b8152600490fd5b634e487b7160e01b600052601160045260246000fd5b6114d5915060203d6020116114db575b6114cd81836122db565b810190612eb9565b386113b0565b503d6114c3565b9150506040813d604011611513575b816114fe604093836122db565b8101031261010f57602081519101513861135a565b3d91506114f1565b506020813d602011611546575b81611535602093836122db565b8101031261010a576040905161121d565b3d9150611528565b61156891935060203d60201161029e5761028f81836122db565b91386110b4565b61157890612277565b610180518015611018575b80fd5b60405163e87c48b160e01b8152600490fd5b60048035600681015491015460405192916001600160a01b0391821691166115bf8461228a565b8084526020840152604083015260608201526001600160a01b0382163b1561010f576040519063a0fd10ad60e01b82528180611602610180519360048301612925565b03816101805160018060a01b0387165af180156102685761165d575b50610180516005600435015560018060a01b0360016004350154166bffffffffffffffffffffffff60a01b6004803501541617600480350155386106fd565b61166690612277565b3861161e565b5061010a5760031960803682011261010a576001600160401b036004351161010a576101c0906004353603011261010a576024356001600160a01b038116810361010a576116b86121d5565b6116c06121bf565b906116cc6104a061223f565b610180516104a08190526104c08190526104e08190526105008190526105208190526105408190526105608190526105808190526105a08190526105c08190526105e081905261060081905261062052606061064052670de0b6b3a764000060043560c40135106121ad574260846004350135111561219b57604051918260e08101106001600160401b0360e085011117611c495760e083016040526101805183526101805160208401526101805160408401526101805160608401526101805160808401526101805160a08401526101805160c08401526117b8600435600401600435600401612860565b158452506101805160043560c4013515801561216b575b1561148b576706f05b59d3b200008101811161215157806706f05b59d3b2000081011061147957670de0b6b3a76400006706f05b59d3b20000919091010460408481019190915251632630c12f60e01b81526020816004816001600160a01b0389165afa90811561026857610180519161210f575b506001600160a01b03166060840152825115611cc357670de0b6b3a764000060c4600435013503611cb15761187d6044600435016128c0565b6001600160a01b036118936004356064016128c0565b6001600160a01b03909216911614611c9f576118b360e460043501612892565b15611c95576118c760045b60a085016128d4565b6118d56064600435016128c0565b926118e46044600435016128c0565b6118f361014460043501612892565b15611c8257604051630460f0f360e01b81526020816004816001600160a01b0388165afa908115610268576101805191611c63575b505b61193860e460043501612892565b91604051966119468861223f565b61018051885260018060a01b0316602088015260018060a01b0316604087015260246004350135606087015260018060a01b031660808601526101805160a08601523360c08601526084600435013560e08601526101805161010086015260c46004350135610120860152151561014085015242610160850152426101808501526040518060208101106001600160401b03602083011117611c4957602081810160409081526101805183526101a0870192909252828101516001600160a01b039081168752838301518784015160608601519451637496a94d60e11b81529483169990831695919493919284916004918391165afa918215610268576101805192611c25575b5060a00151936006851015610dac57611a7161016460043501600435600401612860565b95909173__$75df3f6366b0557754cd3ba14359105414$__3b1561010f57611ae9936040519a8b978897636727ed3d60e11b895260048901526024880152604487015260018060a01b0316606486015260018060a01b0316608485015260a484015260e060c4840152610180519460e484019161289f565b038173__$75df3f6366b0557754cd3ba14359105414$__5af4908115610268576101a093611b3f92611c16575b5060408301516060840151906001600160a01b0316611b3960043560a401612892565b92612fbd565b611c126040519283926020845260018060a01b03815116602085015260018060a01b03602082015116604085015260018060a01b0360408201511660608501526060810151608085015260018060a01b0360808201511660a085015260a081015160c085015260018060a01b0360c08201511660e085015260e081015161010085015261010081015161012085015261012081015161014085015261014081015115156101608501526101608101516101808501526101808101518285015201516101c0808401526101e08301906121ff565b0390f35b611c1f90612277565b38611b16565b60a0919250611c429060203d60201161029e5761028f81836122db565b9190611a4d565b634e487b7160e01b61018051526041600452602461018051fd5b611c7c915060203d60201161029e5761028f81836122db565b38611928565b611c906064600435016128c0565b61192a565b6118c760056118be565b604051638c7c984360e01b8152600490fd5b6040516329c5ef1160e11b8152600490fd5b611cd160e460043501612892565b156120fd57670de0b6b3a764000060c46004350135111561044757611d226020611cff600480350180612860565b60405163af9a2aa760e01b8152600481018490529384928392602484019161289f565b03816001600160a01b0386165afa908115610268576004916101209161018051916120de575b506001600160a01b031660208601819052604051634c66358f60e11b815292839182905afa8015610268576101805190612032575b602091500151156120205760208301516001600160a01b03166040611da66004356064016128c0565b815163a4c1cccb60e01b81526001600160a01b03909116600482015291829060249082905afa908115610268576101805191611fe3575b5015611fd15760208301516001600160a01b0316611dff6004356064016128c0565b60405163fa11ed3760e01b8152600480820152906020826024816001600160a01b0388165afa918215610268576101805192611f9b575b50604051633623869b60e01b81526001600160a01b03909116600482015260248101919091529060209082908180604481015b03915afa908115610268576101805191611f69575b5060c4600435013510156103c257611e9a6044600435016128c0565b60208481015160405163011ddaef60e71b81529190829060049082906001600160a01b03165afa908115610268576101805191611f4a575b506001600160a01b039182169116141580611f11575b15801560c0850152611f0757611f02600360a085016128d4565b6118c7565b611f0260026118be565b50611f206044600435016128c0565b6001600160a01b03611f366004356064016128c0565b6001600160a01b0390921691161415611ee8565b611f63915060203d60201161029e5761028f81836122db565b38611ed2565b90506020813d602011611f93575b81611f84602093836122db565b8101031261010f575138611e7e565b3d9150611f77565b91506020823d602011611fc9575b81611fb6602093836122db565b8101031261010f57905190611e69611e36565b3d9150611fa9565b604051630859dc9b60e31b8152600490fd5b90506040813d604011612018575b81611ffe604093836122db565b8101031261010f576020612012910161270a565b38611ddd565b3d9150611ff1565b6040516379bb149f60e11b8152600490fd5b50610120813d610120116120d6575b8161204f61012093836122db565b8101031261010f576040516120638161225b565b81516001600160a01b038116810361010f5760209261010091835261208984820161270a565b8484015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e08401520151610100820152611d7d565b3d9150612041565b6120f7915060203d60201161029e5761028f81836122db565b38611d48565b60405163c69b746d60e01b8152600490fd5b90506020813d602011612149575b8161212a602093836122db565b8101031261010f57516001600160a01b038116810361010f5738611844565b3d915061211d565b634e487b7160e01b61018051526011600452602461018051fd5b50506024600435013561218460c460043501358261257f565b9061219560c4600435013583612f01565b146117cf565b60405163977f680d60e01b8152600490fd5b604051634d3813b360e11b8152600490fd5b606435906001600160a01b038216820361010a57565b604435906001600160a01b038216820361010a57565b35906001600160a01b038216820361010a57565b919082519283825260005b84811061222b575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161220a565b6101c081019081106001600160401b03821117610f2557604052565b61012081019081106001600160401b03821117610f2557604052565b6001600160401b038111610f2557604052565b608081019081106001600160401b03821117610f2557604052565b604081019081106001600160401b03821117610f2557604052565b60a081019081106001600160401b03821117610f2557604052565b90601f801991011681019081106001600160401b03821117610f2557604052565b6001600160401b038111610f255760051b60200190565b9291926001600160401b038211610f25576040519161233c601f8201601f1916602001846122db565b82948184528183011161010a578281602093846000960137010152565b9080601f8301121561010a5781602061237493359101612313565b90565b81601f8201121561010a5780359061238e826122fc565b9260409261239e845195866122db565b808552602093848087019260051b8501019383851161010a57858101925b8584106123cd575050505050505090565b6001600160401b03843581811161010a5783019184601f19848903011261010a5784516123f9816122a5565b8984013581528584013592831161010a5761241b888b80969581960101612359565b838201528152019301926123bc565b6003199160808284011261010a57600435906001600160401b039384831161010a576101c090838503011261010a576040516124658161223f565b6001600160a01b03926004810135848116810361010a57825261248a602482016121eb565b602083015261249b604482016121eb565b6040830152606481013560608301526124b6608482016121eb565b608083015260a481013560a08301526124d160c482016121eb565b60c083015260e481013560e0830152610104810135610100830152610124810135610120830152610144810135801515810361010a576101408301526101648101356101608301526101848101356101808301526101a481013586811161010a5760048691612541930101612359565b6101a0820152936024359360443591821161010a5761256291600401612377565b91606435908116810361010a5790565b9190820391821161149d57565b8181029291811591840414171561149d57565b90600182811c921680156125c2575b60208310146125ac57565b634e487b7160e01b600052602260045260246000fd5b91607f16916125a1565b8181106125d7575050565b600081556001016125cc565b805490600090818155826125f657505050565b6001600160ff1b0383168303612684578152602080822092600190811b8401935b848110612625575050505050565b808460029255848382016126398154612592565b80612648575b50505001612617565b82601f80831160011461266257505050555b84388061263f565b83825288822093919261267d910160051c84018885016125cc565b555561265a565b634e487b7160e01b82526011600452602482fd5b604051906126a5826122a5565b6060602083600081520152565b600019811461149d5760010190565b80518210156126d55760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b9081602091031261010a57516001600160a01b038116810361010a5790565b5190811515820361010a57565b80549068010000000000000000821015610f25576001918281018083558110156126d55782906000928352602093849182852090821b018651815501940151918251926001600160401b03841161284c576127728654612592565b601f8111612813575b508491601f85116001146127b45793945084929190836127a9575b50501b916000199060031b1c1916179055565b015192503880612796565b86815285812093958591601f198316915b888383106127f957505050106127e0575b505050811b019055565b015160001960f88460031b161c191690553880806127d6565b8587015188559096019594850194879350908101906127c5565b61283c90878452868420601f870160051c810191888810612842575b601f0160051c01906125cc565b3861277b565b909150819061282f565b634e487b7160e01b82526041600452602482fd5b903590601e198136030182121561010a57018035906001600160401b03821161010a5760200191813603831361010a57565b35801515810361010a5790565b908060209392818452848401376000828201840152601f01601f1916010190565b356001600160a01b038116810361010a5790565b6006821015610f3b5752565b604051906128ed8261225b565b816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b919091606080608083019460018060a01b0380825116855280602083015116602086015260408201511660408501520151910152565b903590601e198136030182121561010a57018035906001600160401b03821161010a57602001918160051b3603831361010a57565b92909261046052610400918383526104405260009260206129b6610420928684526122fc565b6129c360405191826122db565b8083528451815201916104405193805194610460519560051b860111612d6857926104809485525b835160051b61046051908651908201811015612d5c5735906001600160401b038211612d585701604081610440510312612d545760405190612a2c826122a5565b803582526020810135906001600160401b038211612d505761044051601f838301011215612d505781810135612a61816122fc565b92612a6f60405194856122db565b81845260208401906104405160208460051b838701010111612d4c57602081850101915b60208460051b83870101018310612ac1575050505060208084019290925250908252855181018652016129eb565b82356001600160401b038111612d48576040601f19828589010161044051030112612d485760405190612af3826122a5565b612b03602082868a0101016121eb565b82526001600160401b03604082868a0101013511612d4457610440518785018201604081013501603f011215612d445786840181016040810135016020013590612b4c826122fc565b91612b5a60405193846122db565b808352610440516020840190878b018401604081810135909101600585901b010111612d3e576040878b018401818101350101905b878b018401604081810135909101600585901b01018210612bc3575050505091816020938480940152815201920191612a93565b81356001600160401b038111612d3657610440519160608a8e01870160408101350183018403603f190112612d2d57604051928360608101106001600160401b03606086011117612d12576060840160409081528b8f018801808201350184010135906001600160401b038211612d07578b8f01880160408101350184018201605f01811315612d07578e6060858e612c8c82958d858986604060809c828c878b8582828501010135920101010101013593604081898d0101013590888c010101010101612313565b89528b60408183870101013591850101010101356020870152888d60408282850101013592010101010135926001600160401b038411612cfd57612ced8b8f60209687966040928c6104405195858282850101013592010101010101612359565b6040820152815201910190612b8f565b5050505050508f80fd5b505050505050508f80fd5b5050505050505060248f634e487b7160e01b81526041600452fd5b50505050508f80fd5b505050508f80fd5b50508f80fd5b8e80fd5b8d80fd5b8b80fd5b8880fd5b8680fd5b8780fd5b50505093509150505190565b8580fd5b9080602083519182815201916020808360051b8301019401926000915b838310612d9857505050505090565b9091929394601f1982820301835285519060206040820192805183520151916040602083015282518091526060820190602060608260051b85010194019260005b828110612dfa57505050505060208060019297019301930191939290612d89565b9091929394605f198382030185526020865160018060a01b03815116835201519060406020820152604081019082518092526060810190602060608460051b8301019401926000915b818310612e6457505050505060208060019297019501910192919092612dd9565b9091929394602080612eac600193605f198682030189528951906040612e9383516060845260608401906121ff565b92858101518684015201519060408184039101526121ff565b9701950193019190612e43565b9081602091031261010a575160ff8116810361010a5790565b60ff166012039060ff821161149d57565b60ff16604d811161149d57600a0a90565b9190820180921161149d57565b8115612f0b570490565b634e487b7160e01b600052601260045260246000fd5b805115612fb75760005b8151600019810190811161149d57811015612fb057600180820180831161149d57815b612f63575b5050612f5e906126b2565b612f2b565b8391929351811015612fa757612f7984836126c1565b5151612f8582846126c1565b515114612f9e57612f95906126b2565b82919392612f4e565b50505050600090565b81939250612f53565b5050600190565b50600190565b919060009361308d57604051926001600160a01b039081169290612fe0856122c0565b338552602085019286845281604087019116815260608601928352608086019360028552853b15612d5857604051637da77a3360e11b81529651831660048801525182166024870152511660448501525160648401525160038110156130795760a483858094829460848401525af1801561306e5761305d575050565b6130678291612277565b6115835750565b6040513d84823e3d90fd5b634e487b7160e01b84526021600452602484fd5b90916001600160a01b0382811692917399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e841461318f571691604051906336b4849f60e11b8252600482015233602482015282604482015283606482015260208160848173__$183737d697d7aa9b5df9988cbe11bc4947$__5af4801561318457613159575b50813b15613155576040516304148b9960e51b81523360048201526001600160a01b03919091166024820152604481019290925282908290606490829084905af1801561306e5761305d575050565b8380fd5b602090813d811161317d575b61316f81836122db565b8101031261010a5738613106565b503d613165565b6040513d87823e3d90fd5b9091938093503410613275571691823b15613155576040516304148b9960e51b81523360048201526001600160a01b03909116602482015260448101829052838180606481015b038185875af1801561326a57613257575b508034116131f457505050565b6131fe9034612572565b813b156132535760405163220eb46560e11b81523360048201527399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e602482015260448101829052918391839160649183915af1801561306e5761305d575050565b8280fd5b61326390939193612277565b91386131e7565b6040513d86823e3d90fd5b604051638e8af4f960e01b8152600490fd5b9193929092156134a65761335b57604051926001600160a01b0391821691906132af856122c0565b338552602085019160009485845281604088019116815260608701928352608087019360028552853b15612d5457604051637da77a3360e11b81529751831660048901525182166024880152511660448601525160648501525160038110156133475760a484848094829460848401525af190811561333b57506133305750565b61333990612277565b565b604051903d90823e3d90fd5b634e487b7160e01b83526021600452602483fd5b6001600160a01b0382811693917399ec76235f8a5a52611b0da5f0c6b09e1dcd2c9e8514613458571692604051906336b4849f60e11b8252600482015233602482015283604482015281606482015260208160848173__$183737d697d7aa9b5df9988cbe11bc4947$__5af480156134215761342d575b50823b1561010a576040516304148b9960e51b81523360048201526001600160a01b0390921660248301526044820152906000908290818381606481015b03925af18015613421576133305750565b6040513d6000823e3d90fd5b602090813d8111613451575b61344381836122db565b8101031261010a57386133d2565b503d613439565b90918094503410613275571690813b1561010a576040516304148b9960e51b81523360048201526001600160a01b0390911660248201526044810183905260009290838180606481016131d6565b50604051926001600160a01b03918216929091906134c38561228a565b3385523360208601521660408401526060830152803b1561010a5760405163a0fd10ad60e01b8152916000918391829084908290613410906004830161292556fea26469706673582212208f77e258899d64ff7129d5712bc5ad58d9d820107ebc5ee1408e6e63e42b2d7b64736f6c63430008120033";

type LimitOrderLibraryConstructorParams =
  | [linkLibraryAddresses: LimitOrderLibraryLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LimitOrderLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class LimitOrderLibrary__factory extends ContractFactory {
  constructor(...args: LimitOrderLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        LimitOrderLibrary__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: LimitOrderLibraryLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$75df3f6366b0557754cd3ba14359105414\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/PrimexPricingLibrary.sol:PrimexPricingLibrary"
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
      LimitOrderLibrary & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LimitOrderLibrary__factory {
    return super.connect(runner) as LimitOrderLibrary__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitOrderLibraryInterface {
    return new Interface(_abi) as LimitOrderLibraryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LimitOrderLibrary {
    return new Contract(address, _abi, runner) as unknown as LimitOrderLibrary;
  }
}

export interface LimitOrderLibraryLibraryAddresses {
  ["contracts/libraries/PrimexPricingLibrary.sol:PrimexPricingLibrary"]: string;
  ["contracts/libraries/TokenTransfersLibrary.sol:TokenTransfersLibrary"]: string;
}
