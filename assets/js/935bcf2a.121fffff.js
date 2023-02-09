"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[3283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,u=p["".concat(s,".").concat(k)]||p[k]||m[k]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"corda-corda",title:"Asset Exchange: Corda with Corda",sidebar_label:"Corda with Corda",pagination_label:"Corda with Corda",pagination_prev:"external/getting-started/interop/asset-exchange/overview"},o=void 0,l={unversionedId:"external/getting-started/interop/asset-exchange/corda-corda",id:"external/getting-started/interop/asset-exchange/corda-corda",title:"Asset Exchange: Corda with Corda",description:"We will demonstrate asset exchange of a tokens in CordaNetwork with tokens on CordaNetwork2. Here PartyA (CORDAPORT=10006) and PartyB (CORDAPORT=10009) in CordaNetwork correspond to PartyA (CORDAPORT=30006) and PartyB (CORDAPORT=30009) in CordaNetwork2 respectively. Following are the step-by-step asset exchange process:",source:"@site/docs/external/getting-started/interop/asset-exchange/corda-corda.md",sourceDirName:"external/getting-started/interop/asset-exchange",slug:"/external/getting-started/interop/asset-exchange/corda-corda",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/corda-corda",draft:!1,editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/main/docs/external/getting-started/interop/asset-exchange/corda-corda.md",tags:[],version:"current",frontMatter:{id:"corda-corda",title:"Asset Exchange: Corda with Corda",sidebar_label:"Corda with Corda",pagination_label:"Corda with Corda",pagination_prev:"external/getting-started/interop/asset-exchange/overview"},sidebar:"Documentation",previous:{title:"Asset Exchange",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/overview"},next:{title:"Corda with Besu",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange/corda-besu"}},s={},d=[],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will demonstrate asset exchange of a tokens in ",(0,r.kt)("inlineCode",{parentName:"p"},"Corda_Network")," with tokens on ",(0,r.kt)("inlineCode",{parentName:"p"},"Corda_Network2"),". Here ",(0,r.kt)("inlineCode",{parentName:"p"},"PartyA")," (",(0,r.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10006"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"PartyB")," (",(0,r.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10009"),") in ",(0,r.kt)("inlineCode",{parentName:"p"},"Corda_Network")," correspond to ",(0,r.kt)("inlineCode",{parentName:"p"},"PartyA")," (",(0,r.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=30006"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"PartyB")," (",(0,r.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=30009"),") in ",(0,r.kt)("inlineCode",{parentName:"p"},"Corda_Network2")," respectively. Following are the step-by-step asset exchange process:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"The hash used in following steps can be replaced by any valid ",(0,r.kt)("inlineCode",{parentName:"td"},"SHA256")," hash.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder. "),(0,r.kt)("li",{parentName:"ul"},"Run the following to verify the status of the tokens owned by ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n"))),(0,r.kt)("li",{parentName:"ul"},"Generate Secret-Hash Pair using following command (prints hash in base64):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./clients/build/install/clients/bin/clients utils hash --hash-fn=SHA256 -s secrettext\n"))),(0,r.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA")," locking ",(0,r.kt)("inlineCode",{parentName:"li"},"30")," units of token type ",(0,r.kt)("inlineCode",{parentName:"li"},"t1")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network")," for 60 mins:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CORDA_PORT=10006 ./clients/build/install/clients/bin/clients lock-asset --fungible --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --timeout=3600 --recipient="O=PartyB,L=London,C=GB" --param=t1:30\n')),"Note the ",(0,r.kt)("inlineCode",{parentName:"li"},"contract-id")," displayed after successful execution of the command, will be used in next steps. The output containing ",(0,r.kt)("inlineCode",{parentName:"li"},"contract-id")," would like this:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"HTLC Lock State created with contract ID Right(b=10448674_80d2bee7-5a5d-45df-b14e-60bac4ba1bf3).\n")),(0,r.kt)("inlineCode",{parentName:"li"},"contract-id")," is the alphanumeric text (with underscore and hyphens) after ",(0,r.kt)("inlineCode",{parentName:"li"},"b=")," within parenthesis. Let's denote it ",(0,r.kt)("inlineCode",{parentName:"li"},"<contract-id-1>"),"."),(0,r.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s lock (can be verified by both parties):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10009 ./clients/build/install/clients/bin/clients is-asset-locked --contract-id=<contract-id-1>\n"))),(0,r.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB")," locking ",(0,r.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,r.kt)("inlineCode",{parentName:"li"},"t2")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network2")," for 30 mins:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CORDA_PORT=30009 ./clients/build/install/clients/bin/clients lock-asset --fungible --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --timeout=1800 --recipient="O=PartyA,L=London,C=GB" --param=t2:50\n')),"Note the ",(0,r.kt)("inlineCode",{parentName:"li"},"contract-id")," displayed after successful execution of the command, will be used in next steps. Let's denote it ",(0,r.kt)("inlineCode",{parentName:"li"},"<contract-id-2>"),"."),(0,r.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s lock (can be verified by both parties):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=30006 ./clients/build/install/clients/bin/clients is-asset-locked --contract-id=<contract-id-2>\n"))),(0,r.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s claim for ",(0,r.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,r.kt)("inlineCode",{parentName:"li"},"t2")," locked by ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=30006 ./clients/build/install/clients/bin/clients claim-asset --secret=secrettext --contract-id=<contract-id-2>\n")),(0,r.kt)("inlineCode",{parentName:"li"},"PartyB")," can see its node's logs to get the revealed hash preimage, and use it to claim the bond in the Fabric network."),(0,r.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s claim for ",(0,r.kt)("inlineCode",{parentName:"li"},"30")," units of token type ",(0,r.kt)("inlineCode",{parentName:"li"},"t1")," locked by ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10009 ./clients/build/install/clients/bin/clients claim-asset --secret=secrettext --contract-id=<contract-id-1>\n"))),(0,r.kt)("li",{parentName:"ul"},"Run the following to verify the status of the tokens owned by ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n")))),(0,r.kt)("p",null,"The above steps complete a successful asset exchange between two Corda networks.\nIn addition to the above commands, following commands can be run if specified timeout has expired and the locked asset remains unclaimed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA")," wants to unlock the token ",(0,r.kt)("inlineCode",{parentName:"li"},"t1:30")," asset, run the following to trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s re-claim in ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10006 ./clients/build/install/clients/bin/clients unlock-asset --contract-id=<contract-id-1>\n"))),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB")," wants to unlock the token ",(0,r.kt)("inlineCode",{parentName:"li"},"t2:50")," asset, run the following to trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s re-claim in ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=30009 ./clients/build/install/clients/bin/clients unlock-asset --contract-id=<contract-id-2>\n")))))}m.isMDXComponent=!0}}]);