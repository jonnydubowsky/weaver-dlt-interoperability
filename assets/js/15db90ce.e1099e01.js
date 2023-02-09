"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[8039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=i,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"corda-besu",title:"Asset Exchange: Corda with Besu",sidebar_label:"Corda with Besu",pagination_label:"Corda with Besu",pagination_prev:"external/getting-started/interop/asset-exchange/overview"},o=void 0,l={unversionedId:"external/getting-started/interop/asset-exchange/corda-besu",id:"external/getting-started/interop/asset-exchange/corda-besu",title:"Asset Exchange: Corda with Besu",description:"We will demonstrate asset exchange of an AliceERC721 NFT in Besu network1 with 10 tokens on Corda_Network.",source:"@site/docs/external/getting-started/interop/asset-exchange/corda-besu.md",sourceDirName:"external/getting-started/interop/asset-exchange",slug:"/external/getting-started/interop/asset-exchange/corda-besu",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/corda-besu",draft:!1,editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/main/docs/external/getting-started/interop/asset-exchange/corda-besu.md",tags:[],version:"current",frontMatter:{id:"corda-besu",title:"Asset Exchange: Corda with Besu",sidebar_label:"Corda with Besu",pagination_label:"Corda with Besu",pagination_prev:"external/getting-started/interop/asset-exchange/overview"},sidebar:"Documentation",previous:{title:"Asset Exchange",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/overview"},next:{title:"Besu with Besu",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/besu-besu"}},s={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will demonstrate asset exchange of an ",(0,i.kt)("inlineCode",{parentName:"p"},"AliceERC721")," NFT in Besu ",(0,i.kt)("inlineCode",{parentName:"p"},"network1")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," tokens on ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network"),".\nFor Besu commands, run from ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/besu/besu-cli")," folder, and for Corda commands, run from ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/corda/corda-simple-application")," folder. Here ",(0,i.kt)("inlineCode",{parentName:"p"},"Alice")," with account ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Bob")," with account ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," in Besu ",(0,i.kt)("inlineCode",{parentName:"p"},"network1")," correspond to ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyA")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10006"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyB")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10009"),") in ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network")," respectively. Following are the step-by-step asset exchange process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From corda client, generate secret-hash pair using following command (prints hash in base64):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./clients/build/install/clients/bin/clients utils hash --hash-fn=SHA256 -s secrettext\n"))),(0,i.kt)("li",{parentName:"ol"},"Run the following to verify the status of the tokens owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n"))),(0,i.kt)("li",{parentName:"ol"},"Run the following in ",(0,i.kt)("inlineCode",{parentName:"li"},"besu-cli"),", to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"Alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Bob")," in the Besu networks:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset get-balance --network=network1 --account=1\n./bin/besu-cli asset get-balance --network=network1 --account=2\n"))),(0,i.kt)("li",{parentName:"ol"},"Complete the asset exchange using following steps:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"AliceERC721")," token with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," for 1 hour",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset lock --network=network1 --sender_account=1 --recipient_account=2 --token_id=0 --asset_type=ERC721 --timeout=3600 --hash_base64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs=\n")),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," printed as output in above command. The output line containing ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," (text in base64 after ",(0,i.kt)("inlineCode",{parentName:"li"},"Lock contract ID:"),") would like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Lock contract ID: 48f59da2ac632117bf79b4aa986f5ece8a2439dc143d576965c17bc8275b0925\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s lock, replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id>")," with actual ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset is-locked --network=network1 --lock_contract_id=<contract-id>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t1")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," for 30 mins:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CORDA_PORT=10009 ./clients/build/install/clients/bin/clients lock-asset --fungible --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --timeout=1800 --recipient="O=PartyA,L=London,C=GB" --param=t1:50\n')),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," displayed after successful execution of the command, will be used in next steps. The output containing ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," would like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"HTLC Lock State created with contract ID Right(b=10448674_80d2bee7-5a5d-45df-b14e-60bac4ba1bf3).\n")),(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," is the alphanumeric text (with underscore and hyphens) after ",(0,i.kt)("inlineCode",{parentName:"li"},"b=")," within parenthesis. Let's refer it ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id-2>")," for this demonstration."),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s lock (can be verified by both parties):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10006 ./clients/build/install/clients/bin/clients is-asset-locked --contract-id=<contract-id-2>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t1")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10006 ./clients/build/install/clients/bin/clients claim-asset --secret=secrettext --contract-id=<contract-id-2>\n")),(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," can see its node's logs to get the revealed hash preimage, and use it to claim in the Besu network."),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"AliceERC721")," NFT with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset claim --network=network1 --recipient_account=2 --preimage=secrettext --token_id=0 --lock_contract_id=<contract-id>\n")),"The above steps complete a successful asset exchange between two Besu networks.\nIn addition to the above commands, following commands can be run if specified timeout has expired and the locked asset remains unclaimed."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," wants to unlock the asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"AliceERC721")," NFT with id ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset unlock --network=network1 --lock_contract_id=<contract-id> --sender_account=1 --token_id=0\n"))),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," wants to unlock the token asset, run the following to trigger unlock for ",(0,i.kt)("inlineCode",{parentName:"li"},"t1:50")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10009 ./clients/build/install/clients/bin/clients unlock-asset --contract-id=<contract-id>\n")))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Run the following to verify the status of the tokens owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n"))),(0,i.kt)("li",{parentName:"ol"},"Run the following in ",(0,i.kt)("inlineCode",{parentName:"li"},"besu-cli"),", to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"Alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Bob")," in the Besu networks:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/besu-cli asset get-balance --network=network1 --account=1\n./bin/besu-cli asset get-balance --network=network1 --account=2\n")))))}m.isMDXComponent=!0}}]);