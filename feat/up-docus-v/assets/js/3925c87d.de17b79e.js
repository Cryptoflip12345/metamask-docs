"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2980],{61862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(74848),a=t(28453),i=t(11470),r=t(19365);const o={description:"Learn about the Snap project files.",sidebar_position:2},l="Snaps files",c={id:"learn/about-snaps/files",title:"Snaps files",description:"Learn about the Snap project files.",source:"@site/snaps/learn/about-snaps/files.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/files",permalink:"/feat/up-docus-v/snaps/learn/about-snaps/files",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about the Snap project files.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps APIs",permalink:"/feat/up-docus-v/snaps/learn/about-snaps/apis"},next:{title:"Snaps execution environment",permalink:"/feat/up-docus-v/snaps/learn/about-snaps/execution-environment"}},u={},d=[{value:"Manifest file",id:"manifest-file",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Bundle file",id:"bundle-file",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snaps-files",children:"Snaps files"}),"\n",(0,s.jsxs)(n.p,{children:["If you look at the directory structure of the Snaps monorepo project generated in the\n",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/get-started/quickstart",children:"Snaps quickstart"}),", it looks something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"your-snap-name/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 src/\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"snap"})," folder contains the Snap implementation, and the ",(0,s.jsx)(n.code,{children:"site"})," folder contains the Snap\ncompanion dapp implementation."]}),"\n",(0,s.jsx)(n.p,{children:"This page examines the following Snap project files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#manifest-file",children:"The manifest file"})," tells MetaMask important information about the Snap."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#configuration-file",children:"The configuration file"})," specifies configuration options for the Snap."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#bundle-file",children:"The bundle file"})," is the output file of the published Snap."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"manifest-file",children:"Manifest file"}),"\n",(0,s.jsxs)(n.p,{children:["To get MetaMask to execute your Snap, you must have a valid manifest file named ",(0,s.jsx)(n.code,{children:"snap.manifest.json"}),",\nlocated in your package root directory.\nThe manifest file of ",(0,s.jsx)(n.code,{children:"Hello World"})," would look something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'{\n  "version": "1.0.0",\n  "proposedName": "Hello World",\n  "description": "A Snap that says hello!",\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/Hello/hello-snap.git"\n  },\n  "source": {\n    "shasum": "w3FltkDjKQZiPwM+AThnmypt0OFF7hj4ycg/kxxv+nU=",\n    "location": {\n      "npm": {\n        "filePath": "dist/bundle.js",\n        "iconPath": "images/icon.svg",\n        "packageName": "hello-snap",\n        "registry": "https://registry.npmjs.org/"\n      }\n    }\n  },\n"initialPermissions": {},\n"manifestVersion": "0.1"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The manifest tells MetaMask important information about your Snap, such as where it's published\n(using ",(0,s.jsx)(n.code,{children:"source.location"}),"), how to verify the integrity of the Snap source code (by attempting to\nreproduce the ",(0,s.jsx)(n.code,{children:"source.shasum"})," value), and what\n",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/how-to/request-permissions",children:"permissions the Snap requests"})," (using ",(0,s.jsx)(n.code,{children:"initialPermissions"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["You might need to modify some manifest fields manually.\nFor example, if you change the location of the icon SVG file, you must update\n",(0,s.jsx)(n.code,{children:"source.location.npm.iconPath"})," to match.\nYou can also use the ",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/cli/subcommands",children:"Snaps CLI"})," to update some fields for you.\nFor example, running ",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/cli/subcommands#b-build",children:(0,s.jsx)(n.code,{children:"yarn mm-snap build"})})," or\n",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/cli/subcommands#m-manifest",children:(0,s.jsx)(n.code,{children:"yarn mm-snap manifest --fix"})})," updates ",(0,s.jsx)(n.code,{children:"source.shasum"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{title:"important",type:"caution",children:[(0,s.jsxs)(n.p,{children:["Some manifest fields must match the corresponding fields of the ",(0,s.jsx)(n.code,{children:"/snap/package.json"})," file."]}),(0,s.jsxs)(n.p,{children:["When updating the ",(0,s.jsx)(n.code,{children:"version"})," and ",(0,s.jsx)(n.code,{children:"repository"})," fields, the Snap inherits the values from ",(0,s.jsx)(n.code,{children:"package.json"}),"\nand overwrites them in ",(0,s.jsx)(n.code,{children:"snap.manifest.json"}),".\nWe recommend updating ",(0,s.jsx)(n.code,{children:"version"})," and ",(0,s.jsx)(n.code,{children:"repository"})," in ",(0,s.jsx)(n.code,{children:"package.json"})," first, then building the Snap project."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/SIPs/blob/main/SIPS/sip-9.md",children:"Snaps publishing specification"}),"\ndetails the requirements of both ",(0,s.jsx)(n.code,{children:"snap.manifest.json"})," and its relationship to ",(0,s.jsx)(n.code,{children:"package.json"}),"."]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Currently, Snaps can only be\n",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry",children:"published to the official npm registry"}),".\nIn the future, developers will be able to distribute Snaps in different ways, and the manifest will\nexpand to support different publishing solutions."]})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-file",children:"Configuration file"}),"\n",(0,s.jsxs)(n.p,{children:["The Snap configuration file, ",(0,s.jsx)(n.code,{children:"snap.config.js"})," or ",(0,s.jsx)(n.code,{children:"snap.config.ts"}),", must be placed in the project\nroot directory.\nYou can override the default values of the\n",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/cli/options",children:"Snaps configuration options"})," by specifying them in the\nconfiguration file.\nFor example:"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(r.A,{value:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="snap.config.js"',children:'module.exports = {\n  input: "src/index.js",\n  output: {\n    path: "dist",\n  },\n  server: {\n    port: 9000,\n  },\n};\n'})})}),(0,s.jsx)(r.A,{value:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="snap.config.ts"',children:'import type { SnapConfig } from "@metamask/snaps-cli";\n\nconst config: SnapConfig = {\n  input: "src/index.js",\n  output: {\n    path: "dist",\n  },\n  server: {\n    port: 9000,\n  },\n};\n\nexport default config;\n'})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"You should not publish the configuration file to npm, since it's only used for development and\nbuilding.\nHowever, you can commit the file to GitHub to share the configuration with your team, since it\nshouldn't contain any secrets."})}),"\n",(0,s.jsx)(n.h2,{id:"bundle-file",children:"Bundle file"}),"\n",(0,s.jsxs)(n.p,{children:["Because of the way Snaps are executed, they must be published as a single ",(0,s.jsx)(n.code,{children:".js"})," file containing the\nentire source code and all dependencies.\nMoreover, the ",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/learn/about-snaps/execution-environment",children:"Snaps execution environment"})," has no DOM, no Node.js\nAPIs, and no filesystem access, so anything that relies on the DOM doesn't work, and any Node\nbuilt-ins must be bundled along with the Snap."]}),"\n",(0,s.jsxs)(n.p,{children:["Running ",(0,s.jsx)(n.code,{children:"yarn start"})," bundles your Snap for you."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also run ",(0,s.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/cli/subcommands#b-build",children:(0,s.jsx)(n.code,{children:"yarn mm-snap build"})})," to bundle your\nSnap using ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/",children:"webpack"})," or ",(0,s.jsx)(n.a,{href:"https://browserify.org",children:"Browserify"}),".\nThis command finds all dependencies using your specified main entry point and outputs a bundle\nfile to your specified output path."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var s=t(96540),a=t(18215),i=t(23104),r=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),j=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==s&&(c(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function S(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);