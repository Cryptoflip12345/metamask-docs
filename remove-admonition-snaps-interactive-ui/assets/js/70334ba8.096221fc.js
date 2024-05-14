"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4209],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const i={description:"Send transactions using eth_sendTransaction.",sidebar_position:3},o="Send transactions",s={unversionedId:"how-to/send-transactions",id:"how-to/send-transactions",title:"Send transactions",description:"Send transactions using eth_sendTransaction.",source:"@site/wallet/how-to/send-transactions.md",sourceDirName:"how-to",slug:"/how-to/send-transactions",permalink:"/remove-admonition-snaps-interactive-ui/wallet/how-to/send-transactions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/send-transactions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Send transactions using eth_sendTransaction.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Add a network",permalink:"/remove-admonition-snaps-interactive-ui/wallet/how-to/manage-networks/add-network"},next:{title:"Sign data",permalink:"/remove-admonition-snaps-interactive-ui/wallet/how-to/sign-data/"}},c={},l=[{value:"Transaction parameters",id:"transaction-parameters",level:2},{value:"Nonce",id:"nonce",level:3},{value:"Gas price",id:"gas-price",level:3},{value:"Gas limit",id:"gas-limit",level:3},{value:"To",id:"to",level:3},{value:"Value",id:"value",level:3},{value:"Data",id:"data",level:3},{value:"Chain ID",id:"chain-id",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"send-transactions"},"Send transactions"),(0,r.yg)("p",null,"You can send a transaction in MetaMask using the\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"\nRPC method."),(0,r.yg)("p",null,"For example, the following JavaScript gets the user's accounts and sends a transaction when they\nselect each button:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const ethereumButton = document.querySelector(".enableEthereumButton");\nconst sendEthButton = document.querySelector(".sendEthButton");\n\nlet accounts = [];\n\n// Send Ethereum to an address.\nsendEthButton.addEventListener("click", () => {\n  provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n      method: "eth_sendTransaction",\n      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.\n      params: [\n        {\n          // The user\'s active address.\n          from: accounts[0],\n          // Required except during contract publications.\n          to: <recipient address>,\n          // Only required to send ether to the recipient from the initiating external account.\n          value: <value in wei to send>,\n          // Customizable by the user during MetaMask confirmation.\n          gasLimit: \'0x5028\',\n          // Customizable by the user during MetaMask confirmation.\n          maxPriorityFeePerGas: \'0x3b9aca00\',\n          // Customizable by the user during MetaMask confirmation.\n          maxFeePerGas: \'0x2540be400\',\n        },\n      ],\n    })\n    .then((txHash) => console.log(txHash))\n    .catch((error) => console.error(error));\n});\n\nethereumButton.addEventListener("click", () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  accounts = await provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({ method: "eth_requestAccounts" });\n}\n')),(0,r.yg)("p",null,"The following HTML displays the buttons:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="enableEthereumButton btn">Enable Ethereum</button>\n<button class="sendEthButton btn">Send ETH</button>\n')),(0,r.yg)("h2",{id:"transaction-parameters"},"Transaction parameters"),(0,r.yg)("h3",{id:"nonce"},"Nonce"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"MetaMask ignores this field.")),(0,r.yg)("p",null,"In Ethereum, every transaction has a nonce, so each transaction can only be processed by the\nblockchain once.\nTo be a valid transaction, either:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The nonce must be ",(0,r.yg)("inlineCode",{parentName:"li"},"0"),"."),(0,r.yg)("li",{parentName:"ul"},"A transaction with a nonce of the previous number, from the same account, must have been processed.")),(0,r.yg)("p",null,"This means that transactions are always processed in order for a given account."),(0,r.yg)("p",null,"Nonces are easy to mess up, especially when a user is interacting with multiple applications with\npending transactions using the same account, potentially across multiple devices.\nBecause of this, MetaMask doesn't allow dapp developers to customize nonces.\nInstead, MetaMask\n",(0,r.yg)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489251"},"assists the user in managing their transaction queue themselves"),"."),(0,r.yg)("h3",{id:"gas-price"},"Gas price"),(0,r.yg)("p",null,"Gas price is an optional parameter, and best used on private blockchains."),(0,r.yg)("p",null,"In Ethereum, every transaction specifies a price for the gas it consumes.\nTo maximize their profit, block producers pick pending transactions with higher gas prices first\nwhen creating the next block.\nThis means that a high gas price usually causes your transaction to be processed faster, at the cost\nof greater transaction fees."),(0,r.yg)("p",null,"Some networks, such as Layer 2 networks, might have a constant gas price or no gas price.\nSo while you can ignore this parameter on MetaMask's default networks, you might include it when\nyour dapp knows more about the target network than MetaMask does.\nOn the default networks, MetaMask allows users to choose between slow, medium, and fast options for\ntheir gas price."),(0,r.yg)("p",null,"Read about ",(0,r.yg)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360022895972"},"how to use advanced gas controls"),"."),(0,r.yg)("h3",{id:"gas-limit"},"Gas limit"),(0,r.yg)("p",null,"Gas limit is an optional parameter, since MetaMask automatically calculates a reasonable gas price."),(0,r.yg)("h3",{id:"to"},"To"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"to")," parameter is a hex-encoded Ethereum address.\nIt's required for transactions with a recipient (all transactions except for contract creation)."),(0,r.yg)("p",null,"Contract creation occurs when there is no ",(0,r.yg)("inlineCode",{parentName:"p"},"to")," value but there is a ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," value."),(0,r.yg)("h3",{id:"value"},"Value"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," parameter is a hex-encoded value of the network's native currency to send.\nOn Mainnet, this is ",(0,r.yg)("a",{parentName:"p",href:"https://www.ethereum.org/eth"},"ether"),", which is denominated in wei."),(0,r.yg)("p",null,"These numbers are often far higher precision than native JavaScript numbers, and can cause\nunpredictable behavior if not anticipated.\nWe recommend using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/indutny/bn.js/"},"BN.js")," when manipulating\nvalues intended for Ethereum."),(0,r.yg)("h3",{id:"data"},"Data"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," parameter is required for smart contract creation."),(0,r.yg)("p",null,"This field is also used for specifying contract methods and their parameters.\nSee the ",(0,r.yg)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"Solidity ABI spec")," for more\ninformation on how the data is encoded."),(0,r.yg)("h3",{id:"chain-id"},"Chain ID"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"MetaMask ignores this field.")),(0,r.yg)("p",null,"The chain ID is derived from the user's current selected network.\nUse ",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_chainid"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_chainId"))," to get the user's chain ID.\nIf you need the network version, use ",(0,r.yg)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#net_version"},(0,r.yg)("inlineCode",{parentName:"a"},"net_version")),"."),(0,r.yg)("p",null,"In the future, MetaMask might allow connecting to multiple networks at the same time, at which point\nthis parameter will become important, so it might be useful to be in the habit of including it now."))}d.isMDXComponent=!0}}]);