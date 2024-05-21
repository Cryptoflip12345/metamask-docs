"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2971],{91899:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(74848),a=n(28453);const c={description:"Learn about interacting with smart contracts.",sidebar_position:7},o="Smart contracts",s={id:"concepts/smart-contracts",title:"Smart contracts",description:"Learn about interacting with smart contracts.",source:"@site/wallet/concepts/smart-contracts.md",sourceDirName:"concepts",slug:"/concepts/smart-contracts",permalink:"/feat/up-docus-v/wallet/concepts/smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/smart-contracts.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Learn about interacting with smart contracts.",sidebar_position:7},sidebar:"walletSidebar",previous:{title:"Wallet interoperability",permalink:"/feat/up-docus-v/wallet/concepts/wallet-interoperability"},next:{title:"Tutorials",permalink:"/feat/up-docus-v/wallet/tutorials"}},i={},d=[{value:"Contract network",id:"contract-network",level:2},{value:"Contract address",id:"contract-address",level:2},{value:"Contract ABI",id:"contract-abi",level:2},{value:"Contract bytecode",id:"contract-bytecode",level:2},{value:"Contract source code",id:"contract-source-code",level:2}];function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"smart-contracts",children:"Smart contracts"}),"\n",(0,r.jsxs)(e.p,{children:["This is a high-level overview of interacting with smart contracts.\nYou can also see how to\n",(0,r.jsx)(e.a,{href:"/feat/up-docus-v/wallet/how-to/use-sdk/gaming/unity/smart-contracts/",children:"interact with smart contracts from your Unity game"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"To interact with a smart contract, your dapp needs the following information:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#contract-network",children:"Contract network"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#contract-address",children:"Contract address"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#contract-abi",children:"Contract ABI"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#contract-bytecode",children:"Contract bytecode"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#contract-source-code",children:"Contract source code"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"contract-network",children:"Contract network"}),"\n",(0,r.jsx)(e.p,{children:"If you're not connected to the right network, you can't send transactions to your contract.\nMany dapp developers deploy their contract to a testnet first, in order to avoid potentially\ndisastrous fees if something goes wrong during development and testing on Mainnet."}),"\n",(0,r.jsxs)(e.p,{children:["Regardless of which network you deploy your final dapp on, your users must be able to access it.\nUse the ",(0,r.jsx)(e.a,{href:"/wallet/reference/wallet_switchethereumchain",children:(0,r.jsx)(e.code,{children:"wallet_switchEthereumChain"})})," and\n",(0,r.jsx)(e.a,{href:"/wallet/reference/wallet_addethereumchain",children:(0,r.jsx)(e.code,{children:"wallet_addEthereumChain"})})," RPC methods to prompt\nthe user to add a chain that you suggest, and switch to it using a confirmation dialogue."]}),"\n",(0,r.jsx)(e.h2,{id:"contract-address",children:"Contract address"}),"\n",(0,r.jsx)(e.p,{children:"Every account in Ethereum has an address, whether it's an external key-pair account or a smart contract.\nFor any smart contract library to communicate with your contracts, a smart contract  must know the exact address."}),"\n",(0,r.jsxs)(e.p,{children:["Read about\n",(0,r.jsx)(e.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360059683451-How-to-view-or-add-custom-token-contract-address",children:"how to find a token contact address"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"contract-abi",children:"Contract ABI"}),"\n",(0,r.jsxs)(e.p,{children:["In Ethereum, the ",(0,r.jsx)(e.a,{href:"https://solidity.readthedocs.io/en/develop/abi-spec.html",children:"ABI specification"})," is a\nway to encode the interface of a smart contract that's comprehensible to your user interface.\nThe ABI is an array of method-describing objects, and when you feed this and the address into a\ncontract-abstraction library, the ABI tells those libraries about what methods to provide, and\nhow to compose transactions to call those methods."]}),"\n",(0,r.jsx)(e.p,{children:"Example libraries include the following:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/ethers",children:"Ethers"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/web3",children:"web3.js"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://framework.embarklabs.io/",children:"Embark"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/ethjs",children:"ethjs"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://hardhat.org/",children:"Hardhat"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"contract-bytecode",children:"Contract bytecode"}),"\n",(0,r.jsx)(e.p,{children:"If your dapp publishes a new pre-compiled smart contract, it might need to include some bytecode.\nYou don't know the contract address in advance; you must publish the contract, watch for the\ntransaction to be processed, and then extract the final contract's address from the completed transaction."}),"\n",(0,r.jsxs)(e.p,{children:["If you publish a contract from bytecode, you still need an ",(0,r.jsx)(e.a,{href:"#contract-abi",children:"ABI"})," to interact with it.\nThe bytecode doesn't describe how to interact with the final contract."]}),"\n",(0,r.jsx)(e.h2,{id:"contract-source-code",children:"Contract source code"}),"\n",(0,r.jsxs)(e.p,{children:["If your dapp allows users to edit smart contract source code and compile it, similar to\n",(0,r.jsx)(e.a,{href:"https://remix.ethereum.org/",children:"Remix"}),", you can import a whole compiler.\nYou derive your bytecode and ABI from that source code, and eventually derive the contract's address\nfrom the completed transaction, where that bytecode is published."]})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>s});var r=n(96540);const a={},c=r.createContext(a);function o(t){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),r.createElement(c.Provider,{value:e},t.children)}}}]);