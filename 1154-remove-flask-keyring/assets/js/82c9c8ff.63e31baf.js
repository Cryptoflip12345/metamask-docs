"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),i=a(65488),s=a(85162);const o={description:"Get the estimated gas prices for a chain."},l="Get EIP-1559 gas prices",u={unversionedId:"gas-api/api-reference/gasprices-type2",id:"gas-api/api-reference/gasprices-type2",title:"Get EIP-1559 gas prices",description:"Get the estimated gas prices for a chain.",source:"@site/services/gas-api/api-reference/gasprices-type2.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/gasprices-type2",permalink:"/1154-remove-flask-keyring/services/gas-api/api-reference/gasprices-type2",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/gasprices-type2.md",tags:[],version:"current",frontMatter:{description:"Get the estimated gas prices for a chain."},sidebar:"servicesSidebar",previous:{title:"Get the busy threshold",permalink:"/1154-remove-flask-keyring/services/gas-api/api-reference/busythreshold"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],m={toc:p},d="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-eip-1559-gas-prices"},"Get EIP-1559 gas prices"),(0,n.kt)("p",null,"Returns the estimated ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559")," gas fees for the specified\nblockchain network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GET")," ",(0,n.kt)("inlineCode",{parentName:"p"},"https://gas.api.infura.io/networks/${chainId}/suggestedGasFees")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Path"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chainId"),": ",(0,n.kt)("em",{parentName:"li"},"string")," - ID of the chain to query.")),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"Recommended gas price details based of the level of urgency:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"low"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"medium"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"high"),": ",(0,n.kt)("em",{parentName:"li"},"Object")," containing recommended values for transactions by level of urgency:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"suggestedMaxPriorityFeePerGas"),": ",(0,n.kt)("em",{parentName:"li"},"string")," - The maximum suggested priority fee per gas to pay\nto have transactions included in a block."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"suggestedMaxFeePerGas"),": ",(0,n.kt)("em",{parentName:"li"},"string")," - The maximum suggested total fee per gas to pay, including\nboth the base fee and the priority fee."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"minWaitTimeEstimate"),": ",(0,n.kt)("em",{parentName:"li"},"number")," - The minimum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"maxWaitTimeEstimate"),": ",(0,n.kt)("em",{parentName:"li"},"number")," - The maximum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"estimatedBaseFee"),": ",(0,n.kt)("em",{parentName:"li"},"string")," - The current estimated base fee per gas on the network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"networkCongestion"),": ",(0,n.kt)("em",{parentName:"li"},"number")," - The current congestion on the network, represented as a number\nbetween ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),".\nA lower network congestion score (for example ",(0,n.kt)("inlineCode",{parentName:"li"},"0.1"),"), indicates that fewer transactions are being\nsubmitted, so it's cheaper to validate transactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"latestPriorityFeeRange"),": ",(0,n.kt)("em",{parentName:"li"},"array")," - The range of priority fees per gas for recent transactions on\nthe network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"historicalPriorityFeeRange"),": ",(0,n.kt)("em",{parentName:"li"},"array")," - The range of priority fees per gas for transactions on the\nnetwork over a historical period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"historicalBaseFeeRange"),": ",(0,n.kt)("em",{parentName:"li"},"array")," - The range of base fees per gas on the network over a\nhistorical period."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"priorityFeeTrend"),": ",(0,n.kt)("em",{parentName:"li"},"string")," - The current trend in priority fees on the network, either ",(0,n.kt)("inlineCode",{parentName:"li"},"up")," or\n",(0,n.kt)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"baseFeeTrend"),": ",(0,n.kt)("em",{parentName:"li"},"string")," - The current trend in base fees on the network, either ",(0,n.kt)("inlineCode",{parentName:"li"},"up")," or\n",(0,n.kt)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper).")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("p",null,"Include your ",(0,n.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the APIs."),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"cURL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n   -u <API-KEY>:<API-KEY-SECRET> \\\n    'https://gas.api.infura.io/networks/1/suggestedGasFees'\n"))),(0,n.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const axios = require("axios");\n\nconst apiKey = \'<API-KEY>\'; // replace with your API key\nconst apiKeySecret = \'<API-KEY-SECRET>\'; // replace with your API key secret\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n')))),(0,n.kt)("h3",{id:"response"},"Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"{\n  low: {\n    suggestedMaxPriorityFeePerGas: '0.05',\n    suggestedMaxFeePerGas: '16.334026964',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 30000\n  },\n  medium: {\n    suggestedMaxPriorityFeePerGas: '0.1',\n    suggestedMaxFeePerGas: '22.083436402',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 45000\n  },\n  high: {\n    suggestedMaxPriorityFeePerGas: '0.3',\n    suggestedMaxFeePerGas: '27.982845839',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 60000\n  },\n  estimatedBaseFee: '16.284026964',\n  networkCongestion: 0.5125,\n  latestPriorityFeeRange: [ '0', '3' ],\n  historicalPriorityFeeRange: [ '0.000000001', '89' ],\n  historicalBaseFeeRange: [ '13.773088584', '29.912845463' ],\n  priorityFeeTrend: 'down',\n  baseFeeTrend: 'up'\n}\n")))}g.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),i=a(86010),s=a(12466),o=a(70989),l=a(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==o&&(m(t),l(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:d},s,{className:(0,i.Z)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function p(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,o.Y)(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",u.tabList)},n.createElement(c,(0,r.Z)({},e,t)),n.createElement(p,(0,r.Z)({},e,t)))}function d(e){const t=(0,l.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>m});var r=a(67294),n=a(16550),i=a(91980),s=a(67392),o=a(50012);function l(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const s=(0,n.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=u(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[m,d]=p({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,o.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=m??g;return c({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,i]),tabValues:i}}}}]);