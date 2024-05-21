"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9987],{78320:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453);const a={sidebar_position:1,sidebar_label:"Connect and sign",tags:["Unity SDK"]},o="Connect and sign in Unity",c={id:"how-to/use-sdk/gaming/unity/connect-and-sign",title:"Connect and sign in Unity",description:"You can connect and sign in a single interaction from your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/connect-and-sign.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/connect-and-sign",permalink:"/feat/up-docus-v/wallet/how-to/use-sdk/gaming/unity/connect-and-sign",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/connect-and-sign.md",tags:[{label:"Unity SDK",permalink:"/feat/up-docus-v/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Connect and sign",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Unity",permalink:"/feat/up-docus-v/wallet/how-to/use-sdk/gaming/unity/"},next:{title:"Set up Infura",permalink:"/feat/up-docus-v/wallet/how-to/use-sdk/gaming/unity/infura"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"connect-and-sign-in-unity",children:"Connect and sign in Unity"}),"\n",(0,i.jsxs)(e.p,{children:["You can ",(0,i.jsx)(e.a,{href:"/feat/up-docus-v/wallet/how-to/use-sdk/javascript/connect-and-sign",children:"connect and sign"})," in a single interaction from your Unity game."]}),"\n",(0,i.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/feat/up-docus-v/wallet/how-to/use-sdk/gaming/unity/",children:"MetaMask SDK set up"})," in your Unity game."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"MetaMask Mobile version 7.10 or later.\nYour users must have an updated version of MetaMask Mobile for this feature to work correctly.\nFor older versions of MetaMask, this function may not work as expected."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Open your Unity project with the SDK installed."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["In your script, create a new function named ",(0,i.jsx)(e.code,{children:"ConnectAndSign"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-csharp",children:'public void ConnectAndSign()\n{\n  MetaMaskUnity.Instance.ConnectAndSign("This is a test message");\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"Replace the test message with any string message you want to sign."}),"\n",(0,i.jsx)(e.admonition,{title:"important",type:"caution",children:(0,i.jsxs)(e.p,{children:["Make sure you initialize ",(0,i.jsx)(e.a,{href:"/feat/up-docus-v/wallet/reference/sdk-unity-api#instance",children:(0,i.jsx)(e.code,{children:"MetaMaskUnity.Instance"})}),"\nbefore using this function.\nTo do so, enable ",(0,i.jsx)(e.strong,{children:"Initialize On Awake"})," in the ",(0,i.jsx)(e.strong,{children:"MetaMask Unity"})," script inspector, or run\n",(0,i.jsx)(e.a,{href:"/feat/up-docus-v/wallet/reference/sdk-unity-api#initialize",children:(0,i.jsx)(e.code,{children:"MetaMask.Instance.Initialize()"})}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Call the ",(0,i.jsx)(e.code,{children:"ConnectAndSign"})," function whenever you want to establish a connection and sign a message.\nFor example, you can call this function when a button is clicked:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-csharp",children:"public void OnButtonClick()\n{\n  ConnectAndSign();\n}\n"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(96540);const s={},a=i.createContext(s);function o(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);