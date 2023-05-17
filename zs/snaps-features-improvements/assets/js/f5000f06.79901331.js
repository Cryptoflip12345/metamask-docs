"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var a=n(7462),r=n(7294),s=n(3905),i=n(6010),o=n(9960);const c="cardContainer__ccT",p="cardTitle_Vgx8",l="cardDescription_N3HQ";function u(e){let{item:t}=e;const n=r.createElement(r.Fragment,null,t.title&&r.createElement("h2",{className:(0,i.Z)("text--truncate",p),title:t.title},t.title),t.description&&r.createElement("p",{className:l},t.description)),a=(0,i.Z)("card padding--lg",c);return t.href?r.createElement(o.Z,{className:a,href:t.href},n):r.createElement("div",{className:a},n)}function d(e){const{items:t}=e;return r.createElement("section",{className:"row"},t.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(u,{item:e})))))}const m={title:"Introduction"},f="Extend the functionality of MetaMask using Snaps",h={unversionedId:"index",id:"index",title:"Introduction",description:"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,",source:"@site/snaps/index.mdx",sourceDirName:".",slug:"/",permalink:"/zs/snaps-features-improvements/snaps/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"snapsSidebar",next:{title:"Get started",permalink:"/zs/snaps-features-improvements/snaps/category/get-started"}},y={},g=[{value:"What is a snap?",id:"what-is-a-snap",level:2},{value:"What can you do with a snap?",id:"what-can-you-do-with-a-snap",level:2},{value:"Questions?",id:"questions",level:2}],k={toc:g};function w(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"extend-the-functionality-of-metamask-using-snaps"},"Extend the functionality of MetaMask using Snaps"),(0,s.kt)("p",null,"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,\ncreating new web3 end user experiences."),(0,s.kt)("p",null,"Get started by ",(0,s.kt)("a",{parentName:"p",href:"/zs/snaps-features-improvements/snaps/get-started/install-snaps"},"installing Snaps"),"."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Snaps is pre-release software."),(0,s.kt)("li",{parentName:"ul"},"To learn how to integrate your dapp with MetaMask, visit the\n",(0,s.kt)("a",{parentName:"li",href:"../wallet"},"MetaMask wallet developer documentation"),"."))),(0,s.kt)("h2",{id:"what-is-a-snap"},"What is a snap?"),(0,s.kt)("p",null,"A snap is a JavaScript program run in an isolated environment that customizes the wallet experience.\nSnaps have access to a limited set of capabilities, determined by the\n",(0,s.kt)("a",{parentName:"p",href:"/zs/snaps-features-improvements/snaps/how-to/request-permissions"},"permissions")," the user granted them during installation."),(0,s.kt)("h2",{id:"what-can-you-do-with-a-snap"},"What can you do with a snap?"),(0,s.kt)("p",null,"A snap can add new API methods to MetaMask, add support for different blockchain protocols, or\nmodify existing functionalities using the ",(0,s.kt)("a",{parentName:"p",href:"/zs/snaps-features-improvements/snaps/reference/rpc-api"},"Snaps JSON-RPC API"),"."),(0,s.kt)("p",null,"Features include:"),(0,s.kt)(d,{items:[{href:"reference/rpc-api#snap_dialog",title:"Dialogs",description:"Display custom alert, confirmation, or prompt screens in MetaMask."},{href:"reference/rpc-api#snap_notify",title:"Notifications",description:"Notify users directly in MetaMask, or in their OS."},{href:"reference/rpc-api#snap_managestate",title:"Encrypted storage",description:"Securely store and manage data on the user's device."},{href:"how-to/manage-keys",title:"Non-EVM chain support",description:"Control non-EVM accounts and assets in MetaMask."},{href:"reference/exports#ontransaction",title:"Transaction insights",description:"Provide transaction insights in MetaMask's pre-transaction window."},{href:"reference/exports#oncronjob",title:"Cron jobs",description:"Schedule periodic actions for your users."},{href:"how-to/use-custom-ui",title:"Custom UI",description:"Display custom UI in MetaMask using a set of pre-defined components, including inline Markdown."},{href:"reference/permissions#endowmentnetwork-access",title:"Network access",description:"With your user's permission, make API calls using `fetch` from your snap."}],mdxType:"CardList"}),(0,s.kt)("h2",{id:"questions"},"Questions?"),(0,s.kt)("p",null,"If you have questions about using Snaps or want to propose a new feature, you can interact with the\nSnaps team and community on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/discussions"},"GitHub discussions"),"\nand the Snaps channel on ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"ConsenSys Discord"),"."))}w.isMDXComponent=!0}}]);