(()=>{"use strict";var e,f,c,a,b,d={},t={};function r(e){var f=t[e];if(void 0!==f)return f.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=d,e=[],r.O=(f,c,a,b)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],a=e[i][1],b=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&b||d>=b)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,b<d&&(d=b));if(t){e.splice(i--,1);var n=a();void 0!==n&&(f=n)}}return f}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[c,a,b]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var d={};f=f||[null,c({}),c([]),c(c)];for(var t=2&a&&e;"object"==typeof t&&!~f.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((f=>d[f]=()=>e[f]));return d.default=()=>e,r.d(b,d),b},r.d=(e,f)=>{for(var c in f)r.o(f,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:f[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((f,c)=>(r.f[c](e,f),f)),[])),r.u=e=>"assets/js/"+({53:"74e5817e",242:"ba4cac81",257:"ab4cafa2",289:"9fb62b98",296:"c66adc2f",463:"f46d32ba",520:"cb2c0fed",528:"9cea254b",531:"52198f09",736:"f186a5d0",741:"982687db",785:"e8973b68",792:"cfc76383",910:"a015cb1d",1180:"92d77c2e",1266:"7d4adaa7",1273:"b91521d0",1343:"dfbcf5f2",1588:"8145e54e",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1874:"9947d6d2",1891:"aee6d0cb",1926:"54f1853a",1930:"030193d7",1969:"17a18c8c",2008:"320bcfb3",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2169:"76d3ef76",2358:"a767f895",2416:"63b87658",2445:"c23d85eb",2519:"3cecf035",2520:"82c9c8ff",2675:"486ba757",2700:"d3bb2b22",2782:"3ee3d2fe",2844:"f8f7b6b2",2848:"93e02460",2894:"3e112a3e",2901:"f9bd4f8e",2923:"cc21c413",2971:"47fa8f02",2980:"3925c87d",3056:"284a1a9e",3102:"ce634f1e",3235:"b6db0fd4",3349:"c90162c2",3374:"f8a3ce18",3442:"453c9f5d",3499:"97c42b41",3523:"54713468",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3692:"57e75615",3794:"d5f74ffe",3860:"ba7d2542",3967:"4ecdda4a",4022:"6721d267",4050:"66ba7e9e",4057:"56aa118c",4081:"2150471b",4151:"6380b8b5",4172:"38d9a0c9",4209:"70334ba8",4279:"df203c0f",4300:"fe7415f5",4332:"42c2c63d",4520:"2a5de1af",4583:"1df93b7f",4687:"c5e4f5c1",4698:"2e39c2b3",4759:"6146f68a",4787:"3720c009",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5151:"55960ee5",5188:"37285b91",5246:"cf946124",5312:"19fab523",5454:"d8e183e3",5484:"4c2d8e7b",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5740:"bb5f3c3e",5787:"e31df401",5892:"11b7fc92",6023:"a2353af7",6040:"b099eb42",6041:"94590018",6095:"ab8b636d",6213:"14bc7481",6286:"f9fecb86",6325:"f4fa537f",6364:"bdc41d14",6373:"7c5954e6",6433:"3d86cae6",6580:"72dd3d56",6594:"e4b21b58",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6832:"31bfc0a5",6875:"e1aa5429",6937:"5625bc05",6940:"090107f6",6969:"14eb3368",7010:"322b31e1",7098:"a137ad8f",7170:"0fffe3b1",7408:"8f877933",7441:"ab85252c",7491:"26020cc4",7532:"9f1824c1",7540:"d70a1ef5",7682:"015fe5e8",7775:"5e56b9d4",7785:"68c12626",8050:"0b387740",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8401:"17896441",8428:"f5000f06",8483:"78eb1577",8581:"935f2afb",8638:"037997aa",8691:"8329f30e",8705:"577b8b2a",8714:"1be78505",8760:"ab3b18fd",8790:"3b679220",8873:"fd49626c",8874:"079a82bd",8957:"652081cc",9071:"4ad67257",9107:"90e119fe",9175:"d2011f4f",9329:"ef8d09aa",9355:"95c87532",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9487:"203da9ef",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9664:"95fa971a",9703:"b223888a",9944:"7dd3f6c4",9987:"5a6432d3"}[e]||e)+"."+{53:"cd7b8ada",242:"793d258d",257:"424f4e83",289:"74652b02",296:"875ba406",416:"cd044015",463:"8153cb4a",520:"b6394308",528:"2e3e3a47",531:"e7073b1b",736:"79224b02",741:"dbc443ee",785:"c46e11fb",792:"f3ab8f0d",910:"ece5feb9",1180:"e659fe52",1245:"5392df32",1266:"fa758b0b",1273:"b07e1ec9",1343:"e5993124",1588:"045871c6",1660:"bfc629f5",1697:"850ca0ea",1717:"069e3fb2",1733:"347df402",1774:"93445f1c",1784:"17aa15d9",1874:"a8029877",1891:"79299768",1926:"abd5235e",1930:"b62940d5",1969:"805522df",2008:"10cbaee8",2138:"edb59e84",2146:"fb657e1e",2166:"ba758e04",2169:"172b61fb",2358:"03e0d7b6",2416:"ce62c6fd",2445:"7577acb7",2519:"2c68ed04",2520:"2176e5d3",2675:"0d937015",2700:"6627b31b",2782:"f3ed1de2",2844:"bfdfd90a",2848:"752f45bc",2894:"0cb45d35",2901:"2db5b6b1",2923:"a4bcab64",2971:"90e75861",2980:"d2d4d774",3056:"3ac577e5",3102:"fc27f49c",3235:"cfeb3e2c",3241:"b8ba4949",3349:"bb2b9fbb",3374:"bd24af40",3442:"0c4dfbb1",3499:"7130e44e",3523:"59448278",3557:"4a7d79d2",3582:"4eaab573",3623:"76814c91",3692:"f8a0c19b",3794:"acff4da5",3860:"d460d960",3967:"6ebb278e",4022:"5809eaa5",4050:"078d4d2f",4057:"a597662c",4081:"4e204d31",4151:"68a6c3de",4172:"19135d88",4209:"f9f0214e",4279:"986e0bde",4300:"472efc2f",4332:"f91df7e6",4520:"d16fba7c",4583:"ed2eab5e",4687:"9b914875",4698:"0e2c20d8",4759:"53bb073e",4787:"6d6c9908",4933:"2931eba9",4939:"1cce5b2e",4961:"a6e29259",5044:"c2589aeb",5151:"7953f7b6",5188:"776ebff4",5246:"357ae063",5312:"a56dfe40",5454:"83696103",5484:"28d1d490",5569:"7c4d964f",5586:"30e3f62d",5593:"9d42aade",5685:"a39a4964",5690:"d46bdfcd",5693:"56158c9b",5740:"a6f34ab4",5787:"06535830",5892:"cbbc3027",6023:"796f0b30",6040:"8a184a8e",6041:"b4b726cb",6095:"b25b7838",6213:"a20dea03",6286:"a41d3f15",6325:"2396e0c7",6333:"d581c255",6364:"b5cca040",6373:"835c00bf",6433:"fae53691",6580:"df880d64",6594:"23056ef0",6694:"3f67e6b5",6744:"5310a1e1",6764:"cab2bcb2",6832:"fed03e77",6875:"d833faaa",6937:"7f988236",6940:"edf1e970",6969:"016c2881",7010:"533d9d42",7098:"249eb478",7113:"79b61b81",7170:"80ce5c77",7195:"b658c23d",7408:"5ffbdfc4",7441:"c68ec6e3",7491:"512f5cc8",7532:"680286fb",7540:"3e06e708",7682:"34a64a0c",7775:"20ad8a59",7785:"2801407a",7996:"a6d5cceb",8050:"cca19ab9",8055:"97b5ab1b",8228:"a7559d98",8280:"19439c08",8298:"b6af070b",8317:"41c60723",8401:"f9349c4c",8428:"e0d55baf",8483:"23f17f21",8581:"9cd6fdad",8638:"c39fe8ec",8691:"e6cb4364",8705:"53dfd835",8714:"b5daaf67",8760:"8580cd01",8790:"88d92882",8873:"1f53ebe2",8874:"f3acbb1c",8913:"a65b2f19",8957:"55031666",9071:"4e2d963e",9107:"2a3e5169",9175:"9c496bf1",9329:"2d09144c",9355:"f5aff28f",9375:"6e26b45c",9400:"6a4016e8",9462:"d9acc313",9477:"09ce5656",9487:"e7d43e9d",9545:"40a232f9",9566:"1ecb4a56",9588:"1c399773",9594:"9f4c5d44",9631:"4cc744d4",9664:"1030581f",9703:"4681528c",9944:"828529b8",9987:"9d296466"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),a={},b="metamask-docs:",r.l=(e,f,c,d)=>{if(a[e])a[e].push(f);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==b+c){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+c),t.src=e),a[e]=[f];var l=(f,c)=>{t.onerror=t.onload=null,clearTimeout(u);var b=a[e];if(delete a[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(c))),f)return f(c)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/snaps-initial-connections/",r.gca=function(e){return e={17896441:"8401",54713468:"3523",94590018:"6041","74e5817e":"53",ba4cac81:"242",ab4cafa2:"257","9fb62b98":"289",c66adc2f:"296",f46d32ba:"463",cb2c0fed:"520","9cea254b":"528","52198f09":"531",f186a5d0:"736","982687db":"741",e8973b68:"785",cfc76383:"792",a015cb1d:"910","92d77c2e":"1180","7d4adaa7":"1266",b91521d0:"1273",dfbcf5f2:"1343","8145e54e":"1588","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","9947d6d2":"1874",aee6d0cb:"1891","54f1853a":"1926","030193d7":"1930","17a18c8c":"1969","320bcfb3":"2008","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","76d3ef76":"2169",a767f895:"2358","63b87658":"2416",c23d85eb:"2445","3cecf035":"2519","82c9c8ff":"2520","486ba757":"2675",d3bb2b22:"2700","3ee3d2fe":"2782",f8f7b6b2:"2844","93e02460":"2848","3e112a3e":"2894",f9bd4f8e:"2901",cc21c413:"2923","47fa8f02":"2971","3925c87d":"2980","284a1a9e":"3056",ce634f1e:"3102",b6db0fd4:"3235",c90162c2:"3349",f8a3ce18:"3374","453c9f5d":"3442","97c42b41":"3499",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","57e75615":"3692",d5f74ffe:"3794",ba7d2542:"3860","4ecdda4a":"3967","6721d267":"4022","66ba7e9e":"4050","56aa118c":"4057","2150471b":"4081","6380b8b5":"4151","38d9a0c9":"4172","70334ba8":"4209",df203c0f:"4279",fe7415f5:"4300","42c2c63d":"4332","2a5de1af":"4520","1df93b7f":"4583",c5e4f5c1:"4687","2e39c2b3":"4698","6146f68a":"4759","3720c009":"4787",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044","55960ee5":"5151","37285b91":"5188",cf946124:"5246","19fab523":"5312",d8e183e3:"5454","4c2d8e7b":"5484",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693",bb5f3c3e:"5740",e31df401:"5787","11b7fc92":"5892",a2353af7:"6023",b099eb42:"6040",ab8b636d:"6095","14bc7481":"6213",f9fecb86:"6286",f4fa537f:"6325",bdc41d14:"6364","7c5954e6":"6373","3d86cae6":"6433","72dd3d56":"6580",e4b21b58:"6594",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764","31bfc0a5":"6832",e1aa5429:"6875","5625bc05":"6937","090107f6":"6940","14eb3368":"6969","322b31e1":"7010",a137ad8f:"7098","0fffe3b1":"7170","8f877933":"7408",ab85252c:"7441","26020cc4":"7491","9f1824c1":"7532",d70a1ef5:"7540","015fe5e8":"7682","5e56b9d4":"7775","68c12626":"7785","0b387740":"8050",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317",f5000f06:"8428","78eb1577":"8483","935f2afb":"8581","037997aa":"8638","8329f30e":"8691","577b8b2a":"8705","1be78505":"8714",ab3b18fd:"8760","3b679220":"8790",fd49626c:"8873","079a82bd":"8874","652081cc":"8957","4ad67257":"9071","90e119fe":"9107",d2011f4f:"9175",ef8d09aa:"9329","95c87532":"9355","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","203da9ef":"9487","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","95fa971a":"9664",b223888a:"9703","7dd3f6c4":"9944","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(f,c)=>{var a=r.o(e,f)?e[f]:void 0;if(0!==a)if(a)c.push(a[2]);else if(/^(1869|5354)$/.test(f))e[f]=0;else{var b=new Promise(((c,b)=>a=e[f]=[c,b]));c.push(a[2]=b);var d=r.p+r.u(f),t=new Error;r.l(d,(c=>{if(r.o(e,f)&&(0!==(a=e[f])&&(e[f]=void 0),a)){var b=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;t.message="Loading chunk "+f+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,a[1](t)}}),"chunk-"+f,f)}},r.O.j=f=>0===e[f];var f=(f,c)=>{var a,b,d=c[0],t=c[1],o=c[2],n=0;if(d.some((f=>0!==e[f]))){for(a in t)r.o(t,a)&&(r.m[a]=t[a]);if(o)var i=o(r)}for(f&&f(c);n<d.length;n++)b=d[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},c=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];c.forEach(f.bind(null,0)),c.push=f.bind(null,c.push.bind(c))})()})();