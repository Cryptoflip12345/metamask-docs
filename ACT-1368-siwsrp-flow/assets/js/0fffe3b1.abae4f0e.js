"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7170],{96789:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var t=n(74848),o=n(28453);const i={description:"Access the internet using the fetch function.",sidebar_position:8},c="Network access",r={id:"features/network-access",title:"Network access",description:"Access the internet using the fetch function.",source:"@site/snaps/features/network-access.md",sourceDirName:"features",slug:"/features/network-access",permalink:"/ACT-1368-siwsrp-flow/snaps/features/network-access",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/network-access.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Access the internet using the fetch function.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Localization",permalink:"/ACT-1368-siwsrp-flow/snaps/features/localization"},next:{title:"Non-EVM networks",permalink:"/ACT-1368-siwsrp-flow/snaps/features/non-evm-networks"}},a={},h=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to access the internet",id:"1-request-permission-to-access-the-internet",level:3},{value:"2. Use the <code>fetch</code> function",id:"2-use-the-fetch-function",level:3},{value:"Example",id:"example",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"network-access",children:"Network access"}),"\n",(0,t.jsxs)(s.p,{children:["You can access the internet from a Snap using the global ",(0,t.jsx)(s.code,{children:"fetch"})," API."]}),"\n",(0,t.jsx)(s.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(s.h3,{id:"1-request-permission-to-access-the-internet",children:"1. Request permission to access the internet"}),"\n",(0,t.jsxs)(s.p,{children:["Request the ",(0,t.jsx)(s.a,{href:"/ACT-1368-siwsrp-flow/snaps/reference/permissions#endowmentnetwork-access",children:(0,t.jsx)(s.code,{children:"endowment:network-access"})})," permission,\nwhich exposes the global ",(0,t.jsx)(s.code,{children:"fetch"})," API to the Snaps execution environment.\nAdd the following to your Snap's manifest file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:network-access": {}\n}\n'})}),"\n",(0,t.jsxs)(s.h3,{id:"2-use-the-fetch-function",children:["2. Use the ",(0,t.jsx)(s.code,{children:"fetch"})," function"]}),"\n",(0,t.jsxs)(s.p,{children:["You can now use the ",(0,t.jsx)(s.code,{children:"fetch"})," function to access the internet.\nThe following example fetches a JSON file from the provided URL."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="index.ts"',children:"async function getJson(url: string) {\n  const response = await fetch(url);\n  return await response.json();\n}\n"})}),"\n",(0,t.jsx)(s.admonition,{title:"Same-origin policy and CORS",type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"fetch"})," requests in a Snap are bound by the browser's\n",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access",children:"same-origin policy"}),".\nSince Snap code is executed in an iframe with the ",(0,t.jsx)(s.code,{children:"sandbox"})," property, the browser sends an ",(0,t.jsx)(s.code,{children:"Origin"}),"\nheader with the value ",(0,t.jsx)(s.code,{children:"null"})," with outgoing requests.\nFor the Snap to be able to read the response, the server must send an\n",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:(0,t.jsx)(s.code,{children:"Access-Control-Allow-Origin"})})," CORS header\nwith the value ",(0,t.jsx)(s.code,{children:"*"})," or ",(0,t.jsx)(s.code,{children:"null"})," in the response.\nOtherwise, you might need to\n",(0,t.jsx)(s.a,{href:"https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141",children:"set up a proxy"}),"."]})}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"XMLHttpRequest"})," isn't available in Snaps, and you should replace it with ",(0,t.jsx)(s.code,{children:"fetch"}),".\nIf your dependencies use ",(0,t.jsx)(s.code,{children:"XMLHttpRequest"}),", you can\n",(0,t.jsx)(s.a,{href:"/ACT-1368-siwsrp-flow/snaps/how-to/debug-a-snap/common-issues#patch-the-use-of-xmlhttprequest",children:"patch it away"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["See the ",(0,t.jsx)(s.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/network-access",children:(0,t.jsx)(s.code,{children:"@metamask/network-access-example-snap"})}),"\npackage for a full example of accessing the internet from a Snap.\nThis example exposes a ",(0,t.jsx)(s.a,{href:"/ACT-1368-siwsrp-flow/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC API"})," for\ndapps to call the ",(0,t.jsx)(s.code,{children:"fetch"})," function from a Snap."]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var t=n(96540);const o={},i=t.createContext(o);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);