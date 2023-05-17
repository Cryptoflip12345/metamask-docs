"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3805],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5294:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const s={description:"Access a user's MetaMask provider using metamask-extension-provider.",sidebar_position:8},o="Access a user's MetaMask provider",i={unversionedId:"how-to/access-provider",id:"how-to/access-provider",title:"Access a user's MetaMask provider",description:"Access a user's MetaMask provider using metamask-extension-provider.",source:"@site/wallet/how-to/access-provider.md",sourceDirName:"how-to",slug:"/how-to/access-provider",permalink:"/zs/snaps-features-improvements/wallet/how-to/access-provider",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Access a user's MetaMask provider using metamask-extension-provider.",sidebar_position:8},sidebar:"walletSidebar",previous:{title:"Register a contract's method names",permalink:"/zs/snaps-features-improvements/wallet/how-to/register-method-names"},next:{title:"Secure your dapp",permalink:"/zs/snaps-features-improvements/wallet/how-to/secure-dapp"}},p={},c=[{value:"Use @metamask/providers",id:"use-metamaskproviders",level:2}],l={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-a-users-metamask-provider"},"Access a user's MetaMask provider"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/providers"},(0,a.kt)("inlineCode",{parentName:"a"},"@metamask/providers"))," module to access a user's\nMetaMask provider from other sources, such as external extension providers and inpage providers."),(0,a.kt)("p",null,"The account provided by this provider is the user's MetaMask account.\nWhen sending signing requests to this provider, MetaMask prompts the user to sign with their accounts."),(0,a.kt)("p",null,"This module works in Chrome and Firefox."),(0,a.kt)("h2",{id:"use-metamaskproviders"},"Use @metamask/providers"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"@metamask/providers")," using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/providers\n")),(0,a.kt)("p",null,"Initialize the provider using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { initializeProvider } from '@metamask/providers';\n\n// Create a stream to a remote provider\nconst metamaskStream = new LocalMessageDuplexStream({\n  name: 'inpage',\n  target: 'contentscript',\n});\n\n// Initialize the provider and set it as window.ethereum\ninitializeProvider({\n  connectionStream: metamaskStream,\n});\n")),(0,a.kt)("p",null,"Create an external extension provider using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createExternalExtensionProvider } from '@metamask/providers';\n\nlet provider = createExternalExtensionProvider();\nconst accounts = await provider.request({ method: 'eth_requestAccounts' });\n")))}m.isMDXComponent=!0}}]);