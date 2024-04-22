"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9400],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={sidebar_label:"Electron",sidebar_position:6,description:"Set up the SDK in your Electron dapp.",tags:["JavaScript SDK"]},s="Use MetaMask SDK with Electron",i={unversionedId:"how-to/use-sdk/javascript/electron",id:"how-to/use-sdk/javascript/electron",title:"Use MetaMask SDK with Electron",description:"Set up the SDK in your Electron dapp.",source:"@site/wallet/how-to/use-sdk/javascript/electron.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/electron",permalink:"/1202-tutorial/wallet/how-to/use-sdk/javascript/electron",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/electron.md",tags:[{label:"JavaScript SDK",permalink:"/1202-tutorial/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Electron",sidebar_position:6,description:"Set up the SDK in your Electron dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Node.js",permalink:"/1202-tutorial/wallet/how-to/use-sdk/javascript/nodejs"},next:{title:"Connect and sign",permalink:"/1202-tutorial/wallet/how-to/use-sdk/javascript/connect-and-sign"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"use-metamask-sdk-with-electron"},"Use MetaMask SDK with Electron"),(0,n.yg)("p",null,"Import ",(0,n.yg)("a",{parentName:"p",href:"/1202-tutorial/wallet/concepts/sdk/"},"MetaMask SDK")," into your Electron dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile."),(0,n.yg)("p",null,"On the frontend, see the instructions to ",(0,n.yg)("a",{parentName:"p",href:"/1202-tutorial/wallet/how-to/use-sdk/javascript/react/"},"use the SDK with React"),".\nOn the backend, see the instructions to ",(0,n.yg)("a",{parentName:"p",href:"/1202-tutorial/wallet/how-to/use-sdk/javascript/nodejs"},"use the SDK with Node.js"),"."),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)("p",null,"See the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/electronjs"},"example Electron dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}d.isMDXComponent=!0}}]);