"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9477],{86474:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(74848),n=s(28453);const r={sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},d="Use MetaMask SDK with Node.js",l={id:"how-to/use-sdk/javascript/nodejs",title:"Use MetaMask SDK with Node.js",description:"Set up the SDK in your Node.js dapp.",source:"@site/wallet/how-to/use-sdk/javascript/nodejs.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/nodejs",permalink:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/nodejs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/nodejs.md",tags:[{inline:!0,label:"JavaScript SDK",permalink:"/ACT-1379-add-launchdarkly/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React Native and Expo",permalink:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/react-native"},next:{title:"Electron",permalink:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/electron"}},i={},o=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"use-metamask-sdk-with-nodejs",children:"Use MetaMask SDK with Node.js"}),"\n",(0,t.jsxs)(a.p,{children:["Import ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your Node.js dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for Node.js has the ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/#prerequisites",children:"same prerequisites"})," as for standard JavaScript."]}),"\n",(0,t.jsx)(a.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(a.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,t.jsx)(a.p,{children:"In your project directory, install the SDK using Yarn or npm:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"yarn add @metamask/sdk\n"})}),"\n",(0,t.jsx)(a.p,{children:"or"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npm i @metamask/sdk\n"})}),"\n",(0,t.jsx)(a.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,t.jsx)(a.p,{children:"In your project script, add the following to import the SDK:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskSDK } from "@metamask/sdk";\n'})}),"\n",(0,t.jsx)(a.h3,{id:"3-instantiate-the-sdk",children:"3. Instantiate the SDK"}),"\n",(0,t.jsxs)(a.p,{children:["Instantiate the SDK using any ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/reference/sdk-js-options",children:"options"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",metastring:'title="index.js"',children:'const MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: "Example Node.js Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options.\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n'})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Use ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/reference/sdk-js-options#dappmetadata",children:(0,t.jsx)(a.code,{children:"dappMetadata"})})," to display information\nabout your dapp in the MetaMask connection modal."]}),"\n",(0,t.jsxs)(a.li,{children:["Use ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/reference/sdk-js-options#infuraapikey",children:(0,t.jsx)(a.code,{children:"infuraAPIKey"})})," to\n",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests"})," from your dapp."]}),"\n",(0,t.jsxs)(a.li,{children:["Use ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/reference/sdk-js-options#modals",children:(0,t.jsx)(a.code,{children:"modals"})})," to ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/display-custom-modals",children:"customize the logic and UI of\nthe displayed modals"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"4-use-the-sdk",children:"4. Use the SDK"}),"\n",(0,t.jsxs)(a.p,{children:["Use the SDK by calling any ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/reference/provider-api",children:"provider API methods"}),".\nAlways call ",(0,t.jsx)(a.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,t.jsx)(a.code,{children:"eth_requestAccounts"})})," using\n",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/reference/provider-api#request",children:(0,t.jsx)(a.code,{children:"request()"})})," first, since it\nprompts the installation or connection popup to appear."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'ethereum.request({ method: "eth_requestAccounts", params: [] });\n'})}),"\n",(0,t.jsxs)(a.p,{children:["You can also call the SDK's ",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/connect-and-sign",children:(0,t.jsx)(a.code,{children:"connectAndSign"})})," method, and\n",(0,t.jsx)(a.a,{href:"/ACT-1379-add-launchdarkly/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",children:"batch multiple JSON-RPC requests"})," using the ",(0,t.jsx)(a.code,{children:"metamask_batch"})," method."]}),"\n",(0,t.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.p,{children:"You can copy the full Node.js example to get started:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskSDK } from "@metamask/sdk";\n\nconst MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: "Example Node.js Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options.\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n\nethereum.request({ method: "eth_requestAccounts", params: [] });\n'})}),"\n",(0,t.jsxs)(a.p,{children:["See the ",(0,t.jsx)(a.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs",children:"example Node.js dapp"}),"\nin the JavaScript SDK GitHub repository for advanced use cases."]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>l});var t=s(96540);const n={},r=t.createContext(n);function d(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);