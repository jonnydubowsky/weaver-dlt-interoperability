"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[3807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,b=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"integration-patterns",title:"Integration Patterns"},o=void 0,s={unversionedId:"external/what-is-interoperability/integration-patterns",id:"external/what-is-interoperability/integration-patterns",title:"Integration Patterns",description:"\x3c!--",source:"@site/docs/external/what-is-interoperability/integration-patterns.md",sourceDirName:"external/what-is-interoperability",slug:"/external/what-is-interoperability/integration-patterns",permalink:"/weaver-dlt-interoperability/docs/external/what-is-interoperability/integration-patterns",draft:!1,editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/main/docs/external/what-is-interoperability/integration-patterns.md",tags:[],version:"current",frontMatter:{id:"integration-patterns",title:"Integration Patterns"},sidebar:"Documentation",previous:{title:"Levels of Interoperability",permalink:"/weaver-dlt-interoperability/docs/external/what-is-interoperability/levels-of-interoperability"},next:{title:"Interoperability Modes",permalink:"/weaver-dlt-interoperability/docs/external/interoperability-modes"}},l={},p=[{value:"Distributed Ledger Integration Patterns",id:"distributed-ledger-integration-patterns",level:2},{value:"Consensus-based integration between ledgers",id:"consensus-based-integration-between-ledgers",level:3},{value:"Standard API integration between applications",id:"standard-api-integration-between-applications",level:3},{value:"Single enterprise participating in multiple neworks",id:"single-enterprise-participating-in-multiple-neworks",level:3},{value:"Single network deployed on multiple heterogenous infrastructure",id:"single-network-deployed-on-multiple-heterogenous-infrastructure",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Integration patterns are well-known reusable solutions for integrating systems together. A number of patterns exist for addressing various types integration problems. The specific pattern applied in practice depends on the nature of the integration problem, the overall objective of the integration task, trade-offs in alternate approaches, and potential risks."),(0,i.kt)("h2",{id:"distributed-ledger-integration-patterns"},"Distributed Ledger Integration Patterns"),(0,i.kt)("p",null,"Here we present common patterns for integrating distributed ledgers. Not all problems are equal, some approaches to itegrating ledgers are preferred over others depending on the use case, the purpose of the itegration and the risks involved."),(0,i.kt)("h3",{id:"consensus-based-integration-between-ledgers"},"Consensus-based integration between ledgers"),(0,i.kt)("p",null,"Consensus-based integration aims to communicate the consensus view of one network to another. The consensus view is a representation of state on the ledger that is collectively agreed by the members of the network. This form of integration provides the highest assurance on the validity of state. The Weaver framework is designed to address consensus-based integration between ledgers built on different distributed ledger protocols."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1034).Z,width:"1138",height:"517"})),(0,i.kt)("h3",{id:"standard-api-integration-between-applications"},"Standard API integration between applications"),(0,i.kt)("p",null,"A standard API integration relies on a single party exposing an endpoint for state exchange. The validity of state relies entirely on the trust placed on the party exposing the endpoint."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4333).Z,width:"1138",height:"514"})),(0,i.kt)("h3",{id:"single-enterprise-participating-in-multiple-neworks"},"Single enterprise participating in multiple neworks"),(0,i.kt)("p",null,"A single enterprise participating in multiple networks can integrate state and contract logic across these networks using off-chain workflows. Unlike the previous pattern, this pattern relies on the enterprise having valid membership credentials on multiple networks. Significant trust must be placed on the organization coordianting the exchange of state across these networks."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(346).Z,width:"1138",height:"517"})),(0,i.kt)("h3",{id:"single-network-deployed-on-multiple-heterogenous-infrastructure"},"Single network deployed on multiple heterogenous infrastructure"),(0,i.kt)("p",null,"Although not an integration pattern, this pattern demonstrates interoperability at the infrastructure layer. The ability to run nodes on multiple cloud providers, as well as on-prem infrastructure, ensures networks are resilient to failures or censorship by infrastructure providers."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4975).Z,width:"1137",height:"516"})))}u.isMDXComponent=!0},1034:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/integration-pattern-consensus-driven-63ad28eb160267a0584ba64abbc6fa0e.jpg"},346:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/integration-pattern-single-enterprise-multiple-networks-527009d72634b73ebda371b465340455.jpg"},4975:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/integration-pattern-single-network-multiple-cloud-cf5c86bedcefc81c781aa02bb89b2128.jpg"},4333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/integration-pattern-single-party-api-828f5c42b687e693cc9b5cf4e914e85a.jpg"}}]);