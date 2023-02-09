"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[54],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"relay",title:"Relay"},o=void 0,l={unversionedId:"external/architecture-and-design/relay",id:"external/architecture-and-design/relay",title:"Relay",description:"\x3c!--",source:"@site/docs/external/architecture-and-design/relay.md",sourceDirName:"external/architecture-and-design",slug:"/external/architecture-and-design/relay",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay",draft:!1,editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/main/docs/external/architecture-and-design/relay.md",tags:[],version:"current",frontMatter:{id:"relay",title:"Relay"},sidebar:"Documentation",previous:{title:"Overview",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/overview"},next:{title:"Drivers",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(125).Z,width:"1418",height:"510"})),(0,a.kt)("p",null,"As mentioned in the overview, relays facilitate communication of protocols between networks. To do this, they are composed of three main pieces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Relay service")," - A gRPC server that listens for and handles incoming requests from other relays. For example, a remote network requesting state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"App service")," - A gRPC server that listens for and handles requests from applications that are requesting an asset from a remote network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Driver")," - The driver is responsible for all communication between the relay and its network. The driver is described in more detail in ",(0,a.kt)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers"},"drivers"),".")),(0,a.kt)("p",null,"The diagram below shows an example communication between two networks, A and B, where network A is requesting state from network B."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(161).Z,width:"1643",height:"487"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An application sends a request to their networks relay over gRPC"),(0,a.kt)("li",{parentName:"ol"},"The local relay inspects the query within the request and uses the relevant information to forward the request to the correct remote relay"),(0,a.kt)("li",{parentName:"ol"},"The remote relay's driver interprets the query and invokes the smart contract for the query"),(0,a.kt)("li",{parentName:"ol"},"Once network B has returned a response to its relay, the relay forwards the response back to relay A"),(0,a.kt)("li",{parentName:"ol"},"The application gets the response from the relay, this can either be via a push or pull mechanism"),(0,a.kt)("li",{parentName:"ol"},"The application invokes a domain specific smart contract to process the response from network B")))}u.isMDXComponent=!0},125:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/relay_architecture-26238a46409ead54fb26da49e2df22c7.png"},161:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/relay_flow-a6320d0cf553ee5b95a94cab63f44883.png"}}]);