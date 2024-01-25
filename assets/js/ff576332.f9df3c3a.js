"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4151],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=s.createContext({}),m=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return s.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=m(t),f=a,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return t?s.createElement(d,i(i({ref:n},l),{},{components:t})):s.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var s=t(87462),a=(t(67294),t(3905));const r={description:"Request permissions in a manifest file.",sidebar_position:2},i="Request permissions",o={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/snaps/how-to/request-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/request-permissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Request permissions in a manifest file.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Develop a Snap",permalink:"/snaps/how-to/develop-a-snap"},next:{title:"Manage keys",permalink:"/snaps/how-to/manage-keys"}},p={},m=[{value:"Request permissions from a Snap",id:"request-permissions-from-a-snap",level:2},{value:"Snaps API methods",id:"snaps-api-methods",level:3},{value:"Endowments",id:"endowments",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:3},{value:"Request permissions from a dapp",id:"request-permissions-from-a-dapp",level:2}],l={toc:m},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,s.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#request-permissions-from-a-snap"},"Snaps must request permission")," to access certain powerful\nJavaScript globals or API methods.\n",(0,a.kt)("a",{parentName:"p",href:"#request-permissions-from-a-dapp"},"Dapps must also request permission")," to access certain API methods\nto communicate with Snaps."),(0,a.kt)("p",null,"Snaps and dapps follow the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),"."),(0,a.kt)("h2",{id:"request-permissions-from-a-snap"},"Request permissions from a Snap"),(0,a.kt)("h3",{id:"snaps-api-methods"},"Snaps API methods"),(0,a.kt)("p",null,"Request permission to call ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/snaps-api"},"Snaps API methods")," in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the Snap ",(0,a.kt)("a",{parentName:"p",href:"/snaps/concepts/files#manifest-file"},"manifest file"),".\nFor example, to request to call ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/snaps-api#snap_dialog"},(0,a.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the\nfollowing to the manifest file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_dialog": {}\n}\n')),(0,a.kt)("h3",{id:"endowments"},"Endowments"),(0,a.kt)("p",null,"Endowments are a type of permission.\nRequest endowments in the ",(0,a.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the Snap\n",(0,a.kt)("a",{parentName:"p",href:"/snaps/concepts/files#manifest-file"},"manifest file"),".\nSee the ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/permissions"},"Snaps permissions reference")," for the full list of endowments."),(0,a.kt)("p",null,"For example, to request the ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/permissions#endowmentnetwork-access"},(0,a.kt)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission, add the following to the manifest file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:network-access": {}\n}\n')),(0,a.kt)("h3",{id:"dynamic-permissions"},"Dynamic permissions"),(0,a.kt)("p",null,"Dynamic permissions are not requested in the manifest file.\nInstead, your Snap can acquire dynamic permissions during its lifecycle."),(0,a.kt)("p",null,"For example, request permission to call the ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts")),"\nMetaMask JSON-RPC API method by calling ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),".\nSee the ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/permissions#eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts")," dynamic permission")," for more information."),(0,a.kt)("h2",{id:"request-permissions-from-a-dapp"},"Request permissions from a dapp"),(0,a.kt)("p",null,"Dapps that communicate with Snaps must request permission to do so by calling the\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestsnaps"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps"))," MetaMask JSON-RPC API method."),(0,a.kt)("p",null,"For example, to request permission to connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-snap")," Snap:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"await window.ethereum.request({\n  method: 'wallet_requestSnaps',\n  params: {\n    'npm:hello-snap': {},\n  },\n});\n")))}u.isMDXComponent=!0}}]);