"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[8922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return r?n.createElement(u,s(s({ref:t},d),{},{components:r})):n.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"financial-markets",title:"DvP in Financial Markets"},s=void 0,o={unversionedId:"external/user-stories/financial-markets",id:"external/user-stories/financial-markets",title:"DvP in Financial Markets",description:"\x3c!--",source:"@site/docs/external/user-stories/financial-markets.md",sourceDirName:"external/user-stories",slug:"/external/user-stories/financial-markets",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/financial-markets",draft:!1,editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/main/docs/external/user-stories/financial-markets.md",tags:[],version:"current",frontMatter:{id:"financial-markets",title:"DvP in Financial Markets"},sidebar:"Documentation",previous:{title:"Global Trade",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/global-trade"},next:{title:"Legacy Integration",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/legacy-integration"}},l={},c=[],d={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In traditional financial markets parties trade assets such as securities and derivatives for cash or other assets. To reduce risk, various clearing and settlement processes and intermediaries are often involved. One form of settlement is a DvP (delivery versus payment) where the transfer of securities is performed only in the event of a corresponding payment. This arrangement reduces principal risk by ensuring that both parties receive their end of the exchange. However, settlement in financial markets are slow and time consuming. It also involves counterparty risks and requires intermediaries."),(0,a.kt)("p",null,"Over the past few years, we have been seeing significant efforts in digitising and tokenising both currencies and securities on Distributed Ledger Technology (DLT) infrastructures. On the one hand we have seen concerted efforts around Central Bank Digital Currencies (CBDC) being added to the landscape of other blockchain based payment networks. On the other hand, we have also seen efforts such as that from the Australian Stock Exchange (ASX) to replace its current settlement system--Clearing House Electronic Subregister System (CHESS) with a DLT based platform by 2021."),(0,a.kt)("p",null,"Against this backdrop, a number of central banks have been exploring the potential of performing DvP settlement across a currency ledger and a securities ledger. In this use case, we use this as a motivating use-case for our discussions. The scenario involves two decentralised ledgers, namely, a currency ledger and a securities ledger, based on different DLT protocols performing a coordinated transfer of assets in their respective ledgers."),(0,a.kt)("p",null,"The figure below depicts this scenario in the context of two organisations--",(0,a.kt)("em",{parentName:"p"},"Org-A")," and ",(0,a.kt)("em",{parentName:"p"},"Org-B"),". ",(0,a.kt)("em",{parentName:"p"},"Org-B")," wants to purchase some securities owned by ",(0,a.kt)("em",{parentName:"p"},"Org-A")," and both organisations have accounts on both ledgers. This scenario is simplified and leaves out a number of additional real world processes. For instance, the buyer and seller for securities need to discover each other and agree on the price and terms of a sale. In addition, an offer to sell securities might be fulfilled by multiple buyers taking smaller portions of the amount for sale. Such capabilities are often offered by centralised exchanges that offer capabilities such as order books and matching engines to address these needs. In this scenario we instead focus on the settlement process that follows such steps, once the parties of an exchange and the price of the exchange for an asset are determined."),(0,a.kt)("p",null,"To effect the settlement of this exchange between ",(0,a.kt)("em",{parentName:"p"},"Org-A")," and ",(0,a.kt)("em",{parentName:"p"},"Org-B"),", the following two transactions will have to happen atomically across both networks: i) transfer of payment from ",(0,a.kt)("em",{parentName:"p"},"Org-B"),"'s currency account in the CBDC ledger to ",(0,a.kt)("em",{parentName:"p"},"Org-A")," while at the same time ii) the entitlements of the designated securities are transferred from ",(0,a.kt)("em",{parentName:"p"},"Org-A")," to ",(0,a.kt)("em",{parentName:"p"},"Org-B"),". The scenario would need to guarantee that after the transaction execution, either both parties have their end of the exchange or neither does and that this exchange is performed in a timely manner."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple DvP scenario in financial markets",src:r(336).Z,width:"1356",height:"554"})),(0,a.kt)("p",null,"The settlement of the exchange of securities from ",(0,a.kt)("em",{parentName:"p"},"Org-A")," to ",(0,a.kt)("em",{parentName:"p"},"Org-B")," in the Financial Securities Network for a simultaneous payment from ",(0,a.kt)("em",{parentName:"p"},"Org-B")," to ",(0,a.kt)("em",{parentName:"p"},"Org-A")," in the CBDC network is coordinated by Weaver using ",(0,a.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts"},"Hashed Time Lock Contracts"),".\nThis protocol essentially has three phases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fund locking: To initialise an asset exchange, it is common for one or both parties to first lock up funds with a fund-withholding party on his or her own blockchain. Temporary fund locking ensures the locked fund cannot be used for other purposes while the exchange is being executed. This scheme is often used with a specified timeout to provide flexibility for reclaiming locked funds if the exchange does not take place."),(0,a.kt)("li",{parentName:"ul"},"Fund redeeming: In general, the execution requires a pair of transactions to occur on both blockchains, e.g., from Org-A to Org-B on the FSN ledger and from Org-B to Org-A in CBDC ledger. When certain conditions are met, the locked funds can be redeemed by, or paid to the respective users. The execution of the exchange can be carried out by users themselves, or through other trusted third parties. These trusted third parties can be stand-alone parties that are not otherwise involved in both blockchains, or part of either blockchain.\xa0"),(0,a.kt)("li",{parentName:"ul"},"Refund: For protocols that are initialised with a temporary fund-locking, the locked funds can usually be reclaimed by the initial owner after a specified timeout, if a redemption has not occurred.\xa0")),(0,a.kt)("p",null,"The process proceeds as follows, and is further illustrated in the figure below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Org-A locks its securities in FSN ledger"),": ",(0,a.kt)("em",{parentName:"li"},"Org-A")," first creates some secret S, known only to it and locks its securities using the hash of S. The securities are configured to redeemable by ",(0,a.kt)("em",{parentName:"li"},"Org-B")," if it presents S within some specified time threshold."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Org-B locks payments tokens in CBDC ledger"),": Org-B, observes that ",(0,a.kt)("em",{parentName:"li"},"Org-A")," has locked its securities in the FSN network and does a corresponding lock of its payment tokens with the hash of S, used by ",(0,a.kt)("em",{parentName:"li"},"Org-A")," in locking its securities. The payment tokens are redeemable only by Org-A, if it submits a transaction that reveals S within a specified time."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Org-A checks Org-B's contract in CBDC ledger"),": ",(0,a.kt)("em",{parentName:"li"},"Org-A")," checks the CBDC network to ensure that the payments tokens are locked by Org-B."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Org-A claims payments in CBDC ledger"),": ",(0,a.kt)("em",{parentName:"li"},"Org-A")," submits a transaction to claim the payments tokens, by revealing the secret S."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Org-B claims securities in FSN ledger"),": ",(0,a.kt)("em",{parentName:"li"},"Org-B")," observes that the value of S has been revealed in the CBDC network by ",(0,a.kt)("em",{parentName:"li"},"Org-A")," in step 4, and submits a transaction to claim the securities in the FSN network using the revealed secret.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple DvP scenario in financial markets",src:r(8036).Z,width:"1479",height:"806"})))}h.isMDXComponent=!0},336:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/financial-markets-1-727232876fe39abb878c66140efba138.png"},8036:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/financial-markets-2-d97d5011d3bfd31f3efb142189c7902f.png"}}]);