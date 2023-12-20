"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={description:"Learn about the anatomy of a Snap project.",sidebar_position:1},r="Snaps anatomy",p={unversionedId:"concepts/anatomy",id:"concepts/anatomy",title:"Snaps anatomy",description:"Learn about the anatomy of a Snap project.",source:"@site/snaps/concepts/anatomy.md",sourceDirName:"concepts",slug:"/concepts/anatomy",permalink:"/1065-clarify-eip-6963/snaps/concepts/anatomy",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/anatomy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the anatomy of a Snap project.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Concepts",permalink:"/1065-clarify-eip-6963/snaps/concepts"},next:{title:"Snaps lifecycle",permalink:"/1065-clarify-eip-6963/snaps/concepts/lifecycle"}},s={},l=[{value:"Source code",id:"source-code",level:2},{value:"Manifest file",id:"manifest-file",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Bundle file",id:"bundle-file",level:2}],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snaps-anatomy"},"Snaps anatomy"),(0,o.kt)("p",null,"If you look at the directory structure of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo"},"Snaps template repository")," used in the\n",(0,o.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/snaps/get-started/quickstart"},"Snaps quickstart"),", it looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"template-snap-monorepo/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 src/\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n")),(0,o.kt)("p",null,"Source files other than ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," are located through its imports.\nThe defaults can be overwritten in the ",(0,o.kt)("a",{parentName:"p",href:"#configuration-file"},"configuration file"),"."),(0,o.kt)("admonition",{title:"Create a Snap project",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When you create a new Snap project using ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap init"),", it has all these files.\nStill, we recommend\n",(0,o.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/snaps/get-started/quickstart"},"cloning the template Snap repository to get started"),".")),(0,o.kt)("p",null,"This page examines the major components of a Snap:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#source-code"},"The source code")," contains the primary code of the Snap."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#manifest-file"},"The manifest file")," tells MetaMask important information about the Snap."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-file"},"The configuration file")," specifies configuration options for the Snap."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#bundle-file"},"The bundle file")," is the output file of the published Snap.")),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"If you're familiar with JavaScript or TypeScript development, developing a Snap might feel familiar\nto you.\nConsider this simple Snap, ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    // Expose a "hello" RPC method to dapps\n    case "hello":\n      return "world!";\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n')),(0,o.kt)("p",null,"To communicate with the outside world, the Snap must implement its own JSON-RPC API by exposing\nthe exported function ",(0,o.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/snaps/reference/exports#onrpcrequest"},(0,o.kt)("inlineCode",{parentName:"a"},"onRpcRequest")),".\nWhenever the Snap receives a JSON-RPC request from a dapp or another Snap, this handler function is\ncalled with the specified parameters."),(0,o.kt)("p",null,"In addition to being able to expose a JSON-RPC API, Snaps can access the global object ",(0,o.kt)("inlineCode",{parentName:"p"},"snap"),".\nYou can use this object to make Snaps-specific JSON-RPC requests."),(0,o.kt)("p",null,"If a dapp wants to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World"),", assuming the Snap is published to npm using the package name ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-snap"),", the dapp can implement something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Connect to the Snap, enabling its usage inside the dapp\n// If the Snap is not already installed, the MetaMask user \n// will be prompted to install it\nawait window.ethereum.request({\n  method: "wallet_requestSnaps",\n  params: {\n    "npm:hello-snap": {},\n  },\n});\n\n// Invoke the "hello" RPC method exposed by the Snap\nconst response = await window.ethereum.request({\n  method: "wallet_invokeSnap",\n  params: { snapId: "npm:hello-snap", request: { method: "hello" } },\n});\n\nconsole.log(response); // \'world!\'\n')),(0,o.kt)("p",null,"The Snap's RPC API is completely up to you, as long as it's a valid\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," API."),(0,o.kt)("admonition",{title:"Does my Snap need to have an RPC API?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"No, that's also up to you!\nIf your Snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,o.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/snaps/reference/exports#ontransaction"},"transaction insights"),", then you can skip exporting\n",(0,o.kt)("inlineCode",{parentName:"p"},"onRpcRequest"),".\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that, for example, sends transactions for that protocol using your Snap, you must\nspecify an RPC API.")),(0,o.kt)("h2",{id:"manifest-file"},"Manifest file"),(0,o.kt)("p",null,"To get MetaMask to execute your Snap, you must have a valid manifest file named ",(0,o.kt)("inlineCode",{parentName:"p"},"snap.manifest.json"),",\nlocated in your package root directory.\nThe manifest file of ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World")," would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0.0",\n  "proposedName": "Hello World",\n  "description": "A Snap that says hello!",\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/Hello/hello-snap.git"\n  },\n  "source": {\n    "shasum": "w3FltkDjKQZiPwM+AThnmypt0OFF7hj4ycg/kxxv+nU=",\n    "location": {\n      "npm": {\n        "filePath": "dist/bundle.js",\n        "iconPath": "images/icon.svg",\n        "packageName": "hello-snap",\n        "registry": "https://registry.npmjs.org/"\n      }\n    }\n  },\n  "initialPermissions": {},\n  "manifestVersion": "0.1"\n}\n')),(0,o.kt)("p",null,"The manifest tells MetaMask important information about your Snap, such as where it's published\n(using ",(0,o.kt)("inlineCode",{parentName:"p"},"source.location"),") and how to verify the integrity of the Snap source code (by attempting to\nreproduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"source.shasum")," value)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, Snaps can only be\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"},"published to the official npm registry"),",\nand the manifest must also match the corresponding fields of the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nIn the future, developers will be able to distribute Snaps in different ways, and the manifest will\nexpand to support different publishing solutions."),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/SIPs/blob/main/SIPS/sip-9.md"},"Snaps publishing specification"),"\ndetails the requirements of both ",(0,o.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," and its relationship to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,o.kt)("p",null,"You might need to modify some manifest fields manually.\nFor example, if you change the location of the icon SVG file, you must update\n",(0,o.kt)("inlineCode",{parentName:"p"},"source.location.npm.iconPath")," to match.\nYou can also use the ",(0,o.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/snaps/reference/cli/"},"command line")," to update some fields for you.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap build")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap manifest --fix")," updates ",(0,o.kt)("inlineCode",{parentName:"p"},"source.shasum"),"."),(0,o.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"The Snap configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"snap.config.ts"),", should be placed in the project root directory.\nYou can override the default values of the ",(0,o.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/snaps/reference/cli/options"},"Snaps CLI options")," by specifying\nthem in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," object of the configuration file.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { resolve } from 'path';\nimport type { SnapConfig } from '@metamask/snaps-cli';\n\nconst config: SnapConfig = {\n  bundler: 'webpack',\n  input: resolve(__dirname, 'src/index.ts'),\n  server: {\n    port: 8080,\n  },\n  polyfills: {\n    buffer: true,\n  },\n};\n\nexport default config;\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You should not publish the configuration file to NPM, since it's only used for development and\nbuilding.\nHowever, you can commit the file to GitHub to share the configuration with your team, since it\nshouldn't contain any secrets.")),(0,o.kt)("h2",{id:"bundle-file"},"Bundle file"),(0,o.kt)("p",null,"Because of the way Snaps are executed, they must be published as a single ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," file containing the\nentire source code and all dependencies.\nMoreover, the ",(0,o.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/snaps/concepts/execution-environment"},"Snaps execution environment")," has no DOM, no Node.js\nAPIs, and no filesystem access, so anything that relies on the DOM doesn't work, and any Node\nbuilt-ins must be bundled along with the Snap."),(0,o.kt)("p",null,"Use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap build")," to bundle your Snap using\n",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://browserify.org"},"Browserify"),".\nThis command finds all dependencies using your specified main entry point and outputs a bundle\nfile to your specified output path."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using the template Snap monorepo, running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," will bundle your Snap for you.")))}m.isMDXComponent=!0}}]);