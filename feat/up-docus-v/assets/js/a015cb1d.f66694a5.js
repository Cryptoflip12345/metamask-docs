"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[910],{31393:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(74848),a=s(28453);const r={sidebar_position:8,description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",tags:["JavaScript SDK"]},o="Make read-only requests",i={id:"how-to/use-sdk/javascript/make-read-only-requests",title:"Make read-only requests",description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/make-read-only-requests.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/make-read-only-requests",permalink:"/feat/up-docus-v/wallet/how-to/use-sdk/javascript/make-read-only-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/make-read-only-requests.md",tags:[{label:"JavaScript SDK",permalink:"/feat/up-docus-v/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Use Infura and custom nodes to make direct, read-only requests in your JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Connect and sign",permalink:"/feat/up-docus-v/wallet/how-to/use-sdk/javascript/connect-and-sign"},next:{title:"Batch JSON-RPC requests",permalink:"/feat/up-docus-v/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the Infura API",id:"use-the-infura-api",level:2},{value:"Use custom nodes",id:"use-custom-nodes",level:2},{value:"Use the Infura API and custom nodes",id:"use-the-infura-api-and-custom-nodes",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"make-read-only-requests",children:"Make read-only requests"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"https://docs.infura.io/",children:"Infura API"})," from your dapp with\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/wallet/concepts/sdk/",children:"MetaMask SDK"})," installed to make direct, read-only JSON-RPC requests."]}),"\n",(0,t.jsxs)(n.p,{children:["Direct, read-only JSON-RPC requests are blockchain requests that do not require user wallet interaction.\nYour dapp can directly call most ",(0,t.jsx)(n.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API methods"}),", bypassing\nuser wallet authentication for read-only operations."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Your dapp cannot directly call the following RPC methods, which require user wallet interaction:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"eth_requestAccounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"eth_sendTransaction"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"eth_signTransaction"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"eth_sign"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"eth_accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"personal_sign"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"eth_signTypedData_v4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"wallet_watchAsset"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"wallet_addEthereumChain"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"wallet_switchEthereumChain"})}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["Configure your dapp to make read-only requests using the ",(0,t.jsx)(n.a,{href:"#use-the-infura-api",children:"Infura API"}),",\n",(0,t.jsx)(n.a,{href:"#use-custom-nodes",children:"custom nodes"}),", or ",(0,t.jsx)(n.a,{href:"#use-the-infura-api-and-custom-nodes",children:"both"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An Infura API key.\nCreate one by following the first two steps in the\n",(0,t.jsx)(n.a,{href:"https://docs.infura.io/getting-started",children:"Infura getting started guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist",children:"An allowlist configured for your API key."})}),"\n",(0,t.jsxs)(n.admonition,{title:"important",type:"caution",children:[(0,t.jsx)(n.p,{children:"Your API key, when used with the SDK, is vulnerable to exposure.\nIf someone inspects your dapp's code, they can potentially retrieve your API key and submit\nrequests to Infura, impersonating your account."}),(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist",children:"allowlists"}),"\nto protect against this vulnerability.\nYou can restrict interactions with your API key to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/feat/up-docus-v/wallet/how-to/use-sdk/javascript/",children:"MetaMask SDK set up"})," in your JavaScript dapp."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"use-the-infura-api",children:"Use the Infura API"}),"\n",(0,t.jsxs)(n.p,{children:["To use the Infura API to make read-only requests, specify your Infura API key using the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/wallet/reference/sdk-js-options#infuraapikey",children:(0,t.jsx)(n.code,{children:"infuraAPIKey"})})," option when instantiating the SDK\nin your dapp."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'infuraAPIKey: "YOUR-API-KEY"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"use-custom-nodes",children:"Use custom nodes"}),"\n",(0,t.jsxs)(n.p,{children:["To use your own node (for example, with ",(0,t.jsx)(n.a,{href:"https://hardhat.org/",children:"Hardhat"}),") to make read-only requests,\nspecify your node's chain ID and RPC URL using the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/wallet/reference/sdk-js-options#readonlyrpcmap",children:(0,t.jsx)(n.code,{children:"readonlyRPCMap"})})," option when instantiating the\nSDK in your dapp."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'readonlyRPCMap: {\n  "0x539": "http://localhost:8545",\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, chain ID ",(0,t.jsx)(n.code,{children:"0x539"})," maps to the custom node's RPC URL."]}),"\n",(0,t.jsx)(n.h2,{id:"use-the-infura-api-and-custom-nodes",children:"Use the Infura API and custom nodes"}),"\n",(0,t.jsxs)(n.p,{children:["You can use both the Infura API and custom nodes to make read-only requests by specifying both the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/wallet/reference/sdk-js-options#infuraapikey",children:(0,t.jsx)(n.code,{children:"infuraAPIKey"})})," and\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/wallet/reference/sdk-js-options#readonlyrpcmap",children:(0,t.jsx)(n.code,{children:"readonlyRPCMap"})})," options when instantiating the\nSDK in your dapp."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'sdkOptions={{\n  infuraAPIKey: "YOUR-API-KEY",\n  readonlyRPCMap: {\n    "0x539": "http://localhost:8545",\n  },\n  // Other options.\n}}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"infuraAPIKey"})," provides access to various networks supported by Infura, and ",(0,t.jsx)(n.code,{children:"readonlyRPCMap"}),"\nprovides access to custom nodes.\nThe ",(0,t.jsx)(n.code,{children:"readonlyRPCMap"})," values override Infura networks in case of a conflict."]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the SDK's\n",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-sdk/blob/dd9a3aaa1b5afa208cdb0d0768916d15b8638b25/packages/sdk/src/services/MetaMaskSDK/InitializerManager/setupInfuraProvider.ts#L12",children:"default RPC URLs map"}),"\nto see how Infura networks are configured by default.\nBy defining your own ",(0,t.jsx)(n.code,{children:"readonlyRPCMap"}),", you can override these defaults or add support for other networks."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following is an example of using both the Infura API and custom nodes with the SDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'sdkOptions={{\n  infuraAPIKey: "YOUR-API-KEY",\n  readonlyRPCMap: {\n    // Custom node.\n    "0x539": "http://localhost:8545",\n    // Override Infura Mainnet.\n    "0x1": "https://mainnet.infura.io/v3/YOUR-API-KEY",\n  },\n  defaultReadOnlyChainId: "0x1",\n  // Other options.\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, read-only requests to Mainnet (chain ID ",(0,t.jsx)(n.code,{children:"0x1"}),") use the Infura API, while read-only\nrequests to the local testnet (chain ID ",(0,t.jsx)(n.code,{children:"0x539"}),") use the custom node.\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/wallet/reference/sdk-js-options#defaultreadonlychainid",children:(0,t.jsx)(n.code,{children:"defaultReadOnlyChainId"})})," enables making\nread-only requests before the user connects to MetaMask, and specifies to make those requests to Mainnet."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(96540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);