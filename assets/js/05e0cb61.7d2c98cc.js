"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={description:"Use a custom user interface."},i="Use custom UI",s={unversionedId:"how-to/use-custom-ui",id:"how-to/use-custom-ui",title:"Use custom UI",description:"Use a custom user interface.",source:"@site/snaps/how-to/use-custom-ui.md",sourceDirName:"how-to",slug:"/how-to/use-custom-ui",permalink:"/snaps/how-to/use-custom-ui",draft:!1,tags:[],version:"current",frontMatter:{description:"Use a custom user interface."},sidebar:"snapsSidebar",previous:{title:"Manage keys",permalink:"/snaps/how-to/manage-keys"},next:{title:"Troubleshoot",permalink:"/snaps/how-to/troubleshoot"}},p={},l=[{value:"Components",id:"components",level:2},{value:"copyable",id:"copyable",level:3},{value:"divider",id:"divider",level:3},{value:"heading",id:"heading",level:3},{value:"panel",id:"panel",level:3},{value:"spinner",id:"spinner",level:3},{value:"text",id:"text",level:3},{value:"Markdown",id:"markdown",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-custom-ui"},"Use custom UI"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," RPC method and\n",(0,r.kt)("a",{parentName:"p",href:"/snaps/reference/exports#ontransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"onTransaction"))," exported method use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," module to display custom user interface (UI) components."),(0,r.kt)("p",null,"To use custom UI, first install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/snaps-ui\n")),(0,r.kt)("p",null,"Then, whenever you're required to return a custom UI component, import the components from the\npackage and build your UI with them.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Alert heading'),\n  text('Something happened in the system.'),\n]);\n\nreturn content;\n")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeType")," enum exported by ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," details the available components."),(0,r.kt)("h3",{id:"copyable"},"copyable"),(0,r.kt)("p",null,"Outputs a read-only text field with a copy-to-clipboard shortcut."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { copyable } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = copyable('Text to be copied');\n")),(0,r.kt)("h3",{id:"divider"},"divider"),(0,r.kt)("p",null,"Outputs a horizontal divider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, divider, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  text('Text before the divider'),\n  divider(),\n  text('Text after the divider'),\n]);\n")),(0,r.kt)("h3",{id:"heading"},"heading"),(0,r.kt)("p",null,"Outputs a heading.\nThis is useful for ",(0,r.kt)("a",{parentName:"p",href:"#panel"},"panel")," titles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Title of the panel'),\n  text('Text of the panel'),\n]);\n")),(0,r.kt)("h3",{id:"panel"},"panel"),(0,r.kt)("p",null,"Outputs a panel, which can be used as a container for other components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst insights = [\n  /*...*/\n];\nconst content = panel([\n  heading('Here are the transaction insights'),\n  ...insights.map((insight) => text(insight.description)),\n]);\n")),(0,r.kt)("h3",{id:"spinner"},"spinner"),(0,r.kt)("p",null,"Outputs a loading indicator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, spinner } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([heading('Please wait...'), spinner()]);\n")),(0,r.kt)("h3",{id:"text"},"text"),(0,r.kt)("p",null,"Outputs text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = text('This is a simple text UI');\n")),(0,r.kt)("h2",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"Text-based components accept a very small subset of Markdown: ",(0,r.kt)("inlineCode",{parentName:"p"},"**bold**")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_italic_"),".\nThis subset will be increased in the future."))}u.isMDXComponent=!0}}]);