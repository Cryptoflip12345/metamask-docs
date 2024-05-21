"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9545],{42604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),a=t(28453),r=t(47174);const i={description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},o="Snaps quickstart",c={id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the create-snap starter kit.",source:"@site/snaps/get-started/quickstart.md",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/feat/up-docus-v/snaps/get-started/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/feat/up-docus-v/snaps/get-started/install-flask"},next:{title:"Learn",permalink:"/feat/up-docus-v/snaps/learn"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the Snap",id:"start-the-snap",level:2},{value:"Connect to the Snap",id:"connect-to-the-snap",level:2},{value:"Customize the Snap",id:"customize-the-snap",level:2},{value:"Next steps",id:"next-steps",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snaps-quickstart",children:"Snaps quickstart"}),"\n",(0,s.jsxs)(n.p,{children:["Get started creating your own Snap.\nUse the ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap",children:(0,s.jsx)(n.code,{children:"@metamask/create-snap"})}),"\nstarter kit to initialize a Snap monorepo project built with TypeScript and React.\nSee the following video demo:"]}),"\n",(0,s.jsx)(r.A,{url:"https://www.youtube.com/embed/qZRAryYwgdg?si=CeImIULgH3iD-FF0"}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/get-started/install-flask",children:"MetaMask Flask installed"})}),"\n",(0,s.jsxs)(n.li,{children:["A text editor (for example, ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"Node"})," version 20.11 or later"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://yarnpkg.com/",children:"Yarn"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-the-project",children:"Create the project"}),"\n",(0,s.jsxs)(n.p,{children:["Create a new Snap project using the ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap",children:(0,s.jsx)(n.code,{children:"@metamask/create-snap"})}),"\nstarter kit by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn create @metamask/snap your-snap-name\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @metamask/create-snap your-snap-name\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm create @metamask/snap your-snap-name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/learn/about-snaps/files",children:"Snaps files"})," to learn about your Snap project files."]}),"\n",(0,s.jsx)(n.h2,{id:"start-the-snap",children:"Start the Snap"}),"\n",(0,s.jsx)(n.p,{children:"From the root of the newly created project, install the project dependencies using Yarn:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn install\n"})}),"\n",(0,s.jsx)(n.p,{children:"You may get a warning like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can fix this by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn run allow-scripts auto\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start the development server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You are now serving the Snap at ",(0,s.jsx)(n.a,{href:"http://localhost:8080/",children:(0,s.jsx)(n.code,{children:"http://localhost:8080"})})," and its front-end dapp at ",(0,s.jsx)(n.a,{href:"http://localhost:8000/",children:(0,s.jsx)(n.code,{children:"http://localhost:8000"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-the-snap",children:"Connect to the Snap"}),"\n",(0,s.jsxs)(n.p,{children:["On the front-end dapp, select the ",(0,s.jsx)(n.strong,{children:"Connect"})," button and the MetaMask Flask extension pops up and\nrequires you to approve the Snap's permissions."]}),"\n",(0,s.jsxs)(n.p,{children:["Once connected, select the ",(0,s.jsx)(n.strong,{children:"Send message"})," button to display a custom message within a confirmation\ndialog in MetaMask Flask."]}),"\n",(0,s.jsx)(n.h2,{id:"customize-the-snap",children:"Customize the Snap"}),"\n",(0,s.jsxs)(n.p,{children:["Open the project in a text editor.\nYou can customize your Snap by editing ",(0,s.jsx)(n.code,{children:"index.ts"})," in the ",(0,s.jsx)(n.code,{children:"packages/snap/src"})," folder."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"index.ts"})," contains an example request that uses the\n",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/snaps-api#snapdialog",children:(0,s.jsx)(n.code,{children:"snap_dialog"})})," method to display a custom confirmation screen:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts"',children:'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\n/**\n * Handle incoming JSON-RPC requests, sent through wallet_invokeSnap.\n *\n * @param args - The request handler arguments as an object.\n * @param args.origin - The origin of the request, e.g., the website that invoked the Snap.\n * @param args.request - A validated JSON-RPC request object.\n * @returns The result of snap_dialog.\n * @throws If the request method is not valid for this Snap.\n */\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  switch (request.method) {\n    case "hello":\n      return snap.request({\n        method: "snap_dialog",\n        params: {\n          type: "confirmation",\n          content: panel([\n            text(`Hello, **${origin}**!`),\n            text("This custom confirmation is just for display purposes."),\n            text(\n              "But you can edit the Snap source code to make it do something, if you want to!",\n            ),\n          ]),\n        },\n      });\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Edit the text in any ",(0,s.jsx)(n.code,{children:"text()"})," component and select the ",(0,s.jsx)(n.strong,{children:"Reconnect"})," button\non the front-end to re-install the Snap."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"MetaMask Flask automatically re-installs locally hosted Snaps whenever it receives a connection request for them."})}),"\n",(0,s.jsxs)(n.p,{children:["The next time you select the ",(0,s.jsx)(n.strong,{children:"Send message"})," button, you see the updated text in the confirmation dialog."]}),"\n",(0,s.jsx)(n.p,{children:"You've now successfully connected, installed, interacted with, and customized your Snap!"}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To learn more about the Snaps system, review ",(0,s.jsx)(n.a,{href:"/snaps/learn/about-snaps",children:"fundamental Snaps concepts"}),"\nand try the ",(0,s.jsx)(n.a,{href:"/snaps/learn/tutorials",children:"Snaps tutorials"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["To implement specific features and use cases, see the ",(0,s.jsx)(n.a,{href:"/snaps/features",children:"Snaps feature guides"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["To follow best practices for developing a Snap, see the ",(0,s.jsx)(n.a,{href:"/snaps/how-to",children:"Snaps how-to guides"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},47174:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);const s="wrapper_iojS";var a=t(74848);const r=e=>{let{url:n}=e;return(0,a.jsxs)("div",{className:s,children:[" ",(0,a.jsx)("iframe",{src:n,allowFullScreen:!0})]})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);