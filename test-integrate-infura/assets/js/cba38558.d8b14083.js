"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[95838],{10844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(74848),r=n(28453),s=n(11470),c=n(19365);const o={title:"starknet_getTransactionByHash"},i=void 0,l={id:"reference/starknet/json-rpc-methods/starknet_gettransactionbyhash",title:"starknet_getTransactionByHash",description:"Returns the details of the specified transaction.",source:"@site/services/reference/starknet/json-rpc-methods/starknet_gettransactionbyhash.mdx",sourceDirName:"reference/starknet/json-rpc-methods",slug:"/reference/starknet/json-rpc-methods/starknet_gettransactionbyhash",permalink:"/test-integrate-infura/services/reference/starknet/json-rpc-methods/starknet_gettransactionbyhash",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/starknet/json-rpc-methods/starknet_gettransactionbyhash.mdx",tags:[],version:"current",frontMatter:{title:"starknet_getTransactionByHash"},sidebar:"servicesSidebar",previous:{title:"starknet_getTransactionByBlockIdAndIndex",permalink:"/test-integrate-infura/services/reference/starknet/json-rpc-methods/starknet_gettransactionbyblockidandindex"},next:{title:"starknet_getTransactionReceipt",permalink:"/test-integrate-infura/services/reference/starknet/json-rpc-methods/starknet_gettransactionreceipt"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Returns the details of the specified transaction."}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"transaction_hash"}),": (string) [",(0,a.jsx)(t.em,{children:"Required"}),"] The hash of the requested transaction."]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.a,{href:"https://docs.starknet.io/documentation/architecture_and_concepts/Network_Architecture/transactions/",children:"StarkNet transaction"}),"\nobject."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["Replace ",(0,a.jsx)(t.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,a.jsx)(t.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(c.A,{value:"cURL",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl https://starknet-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "jsonrpc": "2.0",\n    "method": "starknet_getTransactionByHash",\n    "params": {\n      "transaction_hash": "0x121aaba2894a63cce81acabb559eb2c114f4859dc5803e0b91349ec398d2eb0"\n    },\n    "id": 1\n  }\'\n'})})})}),"\n",(0,a.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(c.A,{value:"JSON",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "type": "INVOKE",\n    "transaction_hash": "0x121aaba2894a63cce81acabb559eb2c114f4859dc5803e0b91349ec398d2eb0",\n    "max_fee": "0xcfa4301cf492",\n    "version": "0x0",\n    "signature": ["0x71847081cae237a92ddcfbc8ff4144df8237ed251027563e709aeb69af35099", "0x36da171a5c558c8a1b233a163a399ac5c54d82a7bd0bbfdbc360cd7c3e2700d"],\n    "nonce": "0x0",\n    "contract_address": "0x206cd6b8b25de0ca44b944d13c2608b355e9a9224a887e2e9447cf5ae3cb2a8",\n    "entry_point_selector": "0x15d40a3d6ca2ac30f4031e42be28da9b056fef9bb7357ac5e85627ee876e5ad",\n    "calldata": ["0x1", "0x173f81c529191726c6e7287e24626fe24760ac44dae2a1f7e02080230f8458b", "0x68bcbdba7cc8cac2832d23e2c32e9eec39a9f1d03521eff5dff800a62725fa", "0x0", "0x5", "0x5", "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7", "0x7c57808b9cea7130c44aab2f8ca6147b04408943b48c6d8c3c83eb8cfdd8c0b", "0xd6f06df0e9632b", "0x0", "0x6873917301545706d657c47a11d83ad9840fbeb3", "0x9"]\n  },\n  "id": 1\n}\n'})})})})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,c),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(96540),r=n(18215),s=n(23104),c=n(56347),o=n(205),i=n(57485),l=n(31682),u=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[c,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=b({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=l??p;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:c,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(l(t),c(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);