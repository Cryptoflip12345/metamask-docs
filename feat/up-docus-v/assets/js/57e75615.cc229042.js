"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3692],{93420:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(74848),t=n(28453);const o={description:"Communicate errors from your Snap without crashing it.",sidebar_position:2},a="Communicate errors",i={id:"how-to/communicate-errors",title:"Communicate errors",description:"Communicate errors from your Snap without crashing it.",source:"@site/snaps/how-to/communicate-errors.md",sourceDirName:"how-to",slug:"/how-to/communicate-errors",permalink:"/feat/up-docus-v/snaps/how-to/communicate-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/communicate-errors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Communicate errors from your Snap without crashing it.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Request permissions",permalink:"/feat/up-docus-v/snaps/how-to/request-permissions"},next:{title:"Use environment variables",permalink:"/feat/up-docus-v/snaps/how-to/use-environment-variables"}},c={},d=[{value:"Import and throw errors",id:"import-and-throw-errors",level:2},{value:"Pass data with the error",id:"pass-data-with-the-error",level:3},{value:"Detect known errors in dapps",id:"detect-known-errors-in-dapps",level:2},{value:"Example",id:"example",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"communicate-errors",children:"Communicate errors"}),"\n",(0,s.jsxs)(r.p,{children:["The Snaps SDK exposes a set of known errors that can be thrown from your Snap code without crashing\nthe Snap.\nSee the ",(0,s.jsx)(r.a,{href:"/feat/up-docus-v/snaps/reference/known-errors",children:"Snaps known errors reference"})," for the full list of errors."]}),"\n",(0,s.jsx)(r.h2,{id:"import-and-throw-errors",children:"Import and throw errors"}),"\n",(0,s.jsxs)(r.p,{children:["To throw these known errors, first import them from the\n",(0,s.jsx)(r.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk",children:(0,s.jsx)(r.code,{children:"@metamask/snaps-sdk"})})," package,\nthen throw them where needed.\nFor example:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { MethodNotFoundError } from "@metamask/snaps-sdk";\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {\n  switch (request.method) {\n    case "hello":\n      return "Hello World!";\n  default:\n    // Throw a known error to avoid crashing the Snap.\n    throw new MethodNotFoundError();\n  }\n};\n'})}),"\n",(0,s.jsx)(r.h3,{id:"pass-data-with-the-error",children:"Pass data with the error"}),"\n",(0,s.jsxs)(r.p,{children:["The error class constructors exported by ",(0,s.jsx)(r.code,{children:"@metamask/snaps-sdk"})," have the following signature:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class SnapJsonRpcError extends SnapError {\n  new (message?: string, data?: Record<string, Json>)\n}\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Both parameters are optional.\nIf you don't pass ",(0,s.jsx)(r.code,{children:"message"}),", then a pre-determined message is used.\nIf you don't pass ",(0,s.jsx)(r.code,{children:"data"}),", then an empty object is passed."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"data"})," can be any JSON-serializable object."]}),"\n",(0,s.jsx)(r.h2,{id:"detect-known-errors-in-dapps",children:"Detect known errors in dapps"}),"\n",(0,s.jsxs)(r.p,{children:["Known errors are thrown back to the caller as JSON-RPC errors.\nThey have a numeric ",(0,s.jsx)(r.code,{children:"code"}),", a ",(0,s.jsx)(r.code,{children:"message"})," string, and a ",(0,s.jsx)(r.code,{children:"data"})," object."]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/feat/up-docus-v/snaps/reference/known-errors",children:"Snaps known errors reference"})," lists all the known errors with\ntheir codes and intended usage."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["See the ",(0,s.jsx)(r.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/errors",children:(0,s.jsx)(r.code,{children:"@metamask/error-example-snap"})}),"\npackage for a full example of communicating errors."]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var s=n(96540);const t={},o=s.createContext(t);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);