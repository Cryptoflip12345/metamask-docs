"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9329],{37854:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=s(74848),r=s(28453),a=s(11470),i=s(19365);const o={description:"See the Snaps entry points reference.",sidebar_position:4},l="Snaps entry points",c={id:"reference/entry-points",title:"Snaps entry points",description:"See the Snaps entry points reference.",source:"@site/snaps/reference/entry-points.md",sourceDirName:"reference",slug:"/reference/entry-points",permalink:"/feat/up-docus-v/snaps/reference/entry-points",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/entry-points.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"See the Snaps entry points reference.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/feat/up-docus-v/snaps/reference/cli/subcommands"},next:{title:"Snaps permissions",permalink:"/feat/up-docus-v/snaps/reference/permissions"}},d={},h=[{value:"<code>onCronjob</code>",id:"oncronjob",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example",level:4},{value:"<code>onHomePage</code>",id:"onhomepage",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>onInstall</code>",id:"oninstall",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>onKeyringRequest</code>",id:"onkeyringrequest",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>onNameLookup</code>",id:"onnamelookup",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>onRpcRequest</code>",id:"onrpcrequest",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>onSignature</code>",id:"onsignature",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-6",level:4},{value:"<code>onTransaction</code>",id:"ontransaction",level:2},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>onUpdate</code>",id:"onupdate",level:2},{value:"Parameters",id:"parameters-8",level:4},{value:"Example",id:"example-8",level:4},{value:"<code>onUserInput</code>",id:"onuserinput",level:2},{value:"Parameters",id:"parameters-9",level:4},{value:"Example",id:"example-9",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"snaps-entry-points",children:"Snaps entry points"}),"\n",(0,t.jsx)(n.p,{children:"Snaps can expose the following entry points."}),"\n",(0,t.jsx)(n.h2,{id:"oncronjob",children:(0,t.jsx)(n.code,{children:"onCronjob"})}),"\n",(0,t.jsxs)(n.p,{children:["To run ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/cron-jobs",children:"cron jobs"})," for the user, a Snap must expose the ",(0,t.jsx)(n.code,{children:"onCronjob"})," entry point.\nMetaMask calls the ",(0,t.jsx)(n.code,{children:"onCronjob"})," handler method at the specified schedule with the requests defined in\nthe ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentcronjob",children:(0,t.jsx)(n.code,{children:"endowment:cronjob"})})," permission."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onCronjob"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentcronjob",children:(0,t.jsx)(n.code,{children:"endowment:cronjob"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["An object containing an RPC request specified in the ",(0,t.jsx)(n.code,{children:"endowment:cronjob"})," permission."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnCronjobHandler } from "@metamask/snaps-sdk";\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case "exampleMethodOne":\n      return snap.request({\n        method: "snap_notify",\n        params: {\n          type: "inApp",\n          message: "Hello, world!",\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'module.exports.onCronjob = async ({ request }) => {\n  switch (request.method) {\n    case "exampleMethodOne":\n      return snap.request({\n        method: "snap_notify",\n        params: {\n          type: "inApp",\n          message: "Hello, world!",\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"onhomepage",children:(0,t.jsx)(n.code,{children:"onHomePage"})}),"\n",(0,t.jsxs)(n.p,{children:["To display a ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-ui/home-pages",children:"home page"})," within MetaMask, a Snap must expose\nthe ",(0,t.jsx)(n.code,{children:"onHomePage"})," entry point.\nMetaMask calls the ",(0,t.jsx)(n.code,{children:"onHomePage"})," handler method when the user selects the Snap name in the Snaps menu."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onHomePage"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentpage-home",children:(0,t.jsx)(n.code,{children:"endowment:page-home"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"None."}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"One of the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.code,{children:"content"})," object displayed using ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-ui/",children:"custom UI"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["An ",(0,t.jsx)(n.code,{children:"id"})," returned by ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/snaps-api#snap_createinterface",children:(0,t.jsx)(n.code,{children:"snap_createInterface"})})," for\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-ui/interactive-ui",children:"interactive UI"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, text, heading } from "@metamask/snaps-sdk";\n\nexport const onHomePage: OnHomePageHandler = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Welcome to my Snap home page!"),\n    ]),\n  };\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'import { panel, text, heading } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Welcome to my Snap home page!"),\n    ]),\n  };\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"oninstall",children:(0,t.jsx)(n.code,{children:"onInstall"})}),"\n",(0,t.jsxs)(n.p,{children:["To implement a ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/lifecycle-hooks",children:"lifecycle hook"})," that runs an action upon\ninstallation, a Snap must expose the ",(0,t.jsx)(n.code,{children:"onInstall"})," entry point.\nMetaMask calls the ",(0,t.jsx)(n.code,{children:"onInstall"})," handler method after the Snap is installed successfully."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onInstall"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentlifecycle-hooks",children:(0,t.jsx)(n.code,{children:"endowment:lifecycle-hooks"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"None."}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnInstallHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for installing my Snap"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'import { heading, panel, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onInstall = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for installing my Snap"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"onkeyringrequest",children:(0,t.jsx)(n.code,{children:"onKeyringRequest"})}),"\n",(0,t.jsxs)(n.p,{children:["To implement the ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/keyring-api/account-management/",children:"Account Management API"})," to integrate\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-evm-accounts/",children:"custom EVM accounts"}),", an account management Snap must\nexpose the ",(0,t.jsx)(n.code,{children:"onKeyringRequest"})," entry point.\nWhenever the Snap receives an Account Management API request, MetaMask calls the ",(0,t.jsx)(n.code,{children:"onKeyringRequest"}),"\nhandler method."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onKeyringRequest"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentkeyring",children:(0,t.jsx)(n.code,{children:"endowment:keyring"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"An object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"origin"})," - The origin as a string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"request"})," - The JSON-RPC request."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"A promise containing the return of the implemented method."}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Any custom logic or extra security checks here.\n  return handleKeyringRequest(keyring, request);\n};\n"})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"module.exports.onKeyringRequest = async ({ origin, request }) => {\n  // Any custom logic or extra security checks here.\n  return handleKeyringRequest(keyring, request);\n};\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"onnamelookup",children:(0,t.jsx)(n.code,{children:"onNameLookup"})}),"\n",(0,t.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,t.jsxs)(n.p,{children:["To provide ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-name-resolution",children:"custom name resolution"}),", a Snap must export ",(0,t.jsx)(n.code,{children:"onNameLookup"}),".\nWhenever a user types in the send field, MetaMask calls this method.\nMetaMask passes the user input to the ",(0,t.jsx)(n.code,{children:"onNameLookup"})," handler method."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onNameLookup"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentname-lookup",children:(0,t.jsx)(n.code,{children:"endowment:name-lookup"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"An object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chainId"})," - The ",(0,t.jsx)(n.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md",children:"CAIP-2"}),"\nchain ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"address"})," or ",(0,t.jsx)(n.code,{children:"domain"})," - One of these parameters is defined, and the other is undefined."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnNameLookupHandler } from "@metamask/snaps-sdk";\n\nexport const onNameLookup: OnNameLookupHandler = async (request) => {\n  const { chainId, address, domain } = request;\n\n  if (address) {\n    const shortAddress = address.substring(2, 5);\n    const chainIdDecimal = parseInt(chainId.split(":")[1], 10);\n    const resolvedDomain = `${shortAddress}.${chainIdDecimal}.test.domain`;\n    return { resolvedDomains: [{ resolvedDomain, protocol: "test protocol" }] };\n  }\n\n  if (domain) {\n    const resolvedAddress = "0xc0ffee254729296a45a3885639AC7E10F9d54979";\n    return {\n      resolvedAddresses: [{ resolvedAddress, protocol: "test protocol" }],\n    };\n  }\n\n  return null;\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'module.exports.onNameLookup = async ({ request }) => {\n  const { chainId, address, domain } = request;\n\n  if (address) {\n    const shortAddress = address.substring(2, 5);\n    const chainIdDecimal = parseInt(chainId.split(":")[1], 10);\n    const resolvedDomain = `${shortAddress}.${chainIdDecimal}.test.domain`;\n    return { resolvedDomains: [{ resolvedDomain, protocol: "test protocol" }] };\n  }\n\n  if (domain) {\n    const resolvedAddress = "0xc0ffee254729296a45a3885639AC7E10F9d54979";\n    return {\n      resolvedAddresses: [{ resolvedAddress, protocol: "test protocol" }],\n    };\n  }\n\n  return null;\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"onrpcrequest",children:(0,t.jsx)(n.code,{children:"onRpcRequest"})}),"\n",(0,t.jsxs)(n.p,{children:["To implement a ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC API"})," to communicate with\ndapps and other Snaps, a Snap must expose the ",(0,t.jsx)(n.code,{children:"onRpcRequest"})," entry point.\nWhenever the Snap receives a JSON-RPC request, MetaMask calls the ",(0,t.jsx)(n.code,{children:"onRpcRequest"})," handler method."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onRpcRequest"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentrpc",children:(0,t.jsx)(n.code,{children:"endowment:rpc"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"An object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"origin"})," - The origin as a string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"request"})," - The JSON-RPC request."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"A promise containing the return of the implemented method."}),"\n",(0,t.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  switch (request.method) {\n    case "hello":\n      return "world!";\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    case "hello":\n      return "world!";\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"onsignature",children:(0,t.jsx)(n.code,{children:"onSignature"})}),"\n",(0,t.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,t.jsxs)(n.p,{children:["To provide ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/signature-insights",children:"signature insights"})," before a user signs a message, a\nSnap must expose the ",(0,t.jsx)(n.code,{children:"onSignature"})," entry point.\nWhenever a ",(0,t.jsx)(n.a,{href:"/wallet/concepts/signing-methods",children:"signing method"})," is called, such as ",(0,t.jsx)(n.code,{children:"personal_sign"})," or\n",(0,t.jsx)(n.code,{children:"eth_signTypedData_v4"}),", MetaMask passes the raw unsigned signature payload to the ",(0,t.jsx)(n.code,{children:"onSignature"}),"\nhandler method."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onSignature"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentsignature-insight",children:(0,t.jsx)(n.code,{children:"endowment:signature-insight"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"An object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"signature"})," - The raw signature payload."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"signatureOrigin"})," - The signature origin if\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentsignature-insight",children:(0,t.jsx)(n.code,{children:"allowSignatureOrigin"})})," is set to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An optional ",(0,t.jsx)(n.code,{children:"severity"})," property that, if present, must be set to ",(0,t.jsx)(n.code,{children:"SeverityLevel.Critical"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.code,{children:"content"})," object displayed using ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-ui/",children:"custom UI"})," after the user\nselects the ",(0,t.jsx)(n.strong,{children:"Sign"})," button.\nDue to current limitations of MetaMask's signature confirmation UI, the content will only be displayed if\nthe ",(0,t.jsx)(n.code,{children:"severity"})," property is present and set to ",(0,t.jsx)(n.code,{children:"SeverityLevel.Critical"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnSignatureHandler, SeverityLevel } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onSignature: OnSignatureHandler = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Signature Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    severity: SeverityLevel.Critical,\n  };\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'import { SeverityLevel } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onSignature = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Signature Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    severity: SeverityLevel.Critical,\n  };\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"ontransaction",children:(0,t.jsx)(n.code,{children:"onTransaction"})}),"\n",(0,t.jsxs)(n.p,{children:["To provide ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/transaction-insights",children:"transaction insights"})," before a user signs a\ntransaction, a Snap must expose the ",(0,t.jsx)(n.code,{children:"onTransaction"})," entry point.\nWhen a user submits a transaction in the MetaMask extension, MetaMask calls the ",(0,t.jsx)(n.code,{children:"onTransaction"}),"\nhandler method.\nMetaMask passes the raw unsigned transaction payload to ",(0,t.jsx)(n.code,{children:"onTransaction"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onTransaction"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmenttransaction-insight",children:(0,t.jsx)(n.code,{children:"endowment:transaction-insight"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"An object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transaction"})," - The raw transaction payload."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chainId"})," - The ",(0,t.jsx)(n.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md",children:"CAIP-2"}),"\nchain ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transactionOrigin"})," - The transaction origin if\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmenttransaction-insight",children:(0,t.jsx)(n.code,{children:"allowTransactionOrigin"})})," is set to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An optional ",(0,t.jsx)(n.code,{children:"severity"})," property that, if present, must be set to ",(0,t.jsx)(n.code,{children:'"critical"'}),".\nThis feature is only available in Flask."]}),"\n",(0,t.jsxs)(n.li,{children:["One of the following:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.code,{children:"content"})," object displayed using ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-ui/",children:"custom UI"}),", alongside the confirmation\nfor the transaction that ",(0,t.jsx)(n.code,{children:"onTransaction"})," was called with."]}),"\n",(0,t.jsxs)(n.li,{children:["An ",(0,t.jsx)(n.code,{children:"id"})," returned by ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/snaps-api#snap_createinterface",children:(0,t.jsx)(n.code,{children:"snap_createInterface"})})," for\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-ui/interactive-ui",children:"interactive UI"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n  };\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onTransaction = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n  };\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"onupdate",children:(0,t.jsx)(n.code,{children:"onUpdate"})}),"\n",(0,t.jsxs)(n.p,{children:["To implement a ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/lifecycle-hooks",children:"lifecycle hook"})," that runs an action upon update, a\nSnap must expose the ",(0,t.jsx)(n.code,{children:"onUpdate"})," entry point.\nMetaMask calls the ",(0,t.jsx)(n.code,{children:"onUpdate"})," handler method after the Snap is updated successfully."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For MetaMask to call the Snap's ",(0,t.jsx)(n.code,{children:"onUpdate"})," method, you must request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentlifecycle-hooks",children:(0,t.jsx)(n.code,{children:"endowment:lifecycle-hooks"})})," permission."]})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"None."}),"\n",(0,t.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnUpdateHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for updating my Snap"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'import { heading, panel, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onUpdate = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Thank you for updating my Snap"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"onuserinput",children:(0,t.jsx)(n.code,{children:"onUserInput"})}),"\n",(0,t.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,t.jsxs)(n.p,{children:["To respond to ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/custom-ui/interactive-ui",children:"interactive UI"})," events, a Snap must export ",(0,t.jsx)(n.code,{children:"onUserInput"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," - The ID of the interface being acted on."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"event"})," - An event object containing:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"})," - The type of the event.\nPossible values are ",(0,t.jsx)(n.code,{children:"ButtonClickEvent"}),", ",(0,t.jsx)(n.code,{children:"FormSubmitEvent"}),", or ",(0,t.jsx)(n.code,{children:"InputChangeEvent"}),".\nThese enums are exported from the ",(0,t.jsx)(n.code,{children:"@metamask/snaps-sdk"})," module."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," - The name of the component that fired the event.\nOptional when the event type is ",(0,t.jsx)(n.code,{children:"ButtonClickEvent"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"value"})," - When the event type is ",(0,t.jsx)(n.code,{children:"FormSubmitEvent"}),", the values in the form as an object."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-9",children:"Example"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnUserInputHandler } from "@metamask/snaps-sdk";\nimport { UserInputEventType } from "@metamask/snaps-sdk";\n\nexport const onUserInput: OnUserInputHandler = async ({ id, event }) => {\n  if (event.type === UserInputEventType.FormSubmitEvent) {\n    console.log("The submitted form values are", event.value);\n  }\n};\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'const { UserInputEventType } = require("@metamask/snaps-sdk");\n\nmodule.exports.onUserInput = async ({ id, event }) => {\n  if (event.type === UserInputEventType.FormSubmitEvent) {\n    console.log("The submitted form values are", event.value);\n  }\n};\n'})})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(18215);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>b});var t=s(96540),r=s(18215),a=s(23104),i=s(56347),o=s(205),l=s(57485),c=s(31682),d=s(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:s,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),g=(()=>{const e=c??x;return u({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=o[s].value;r!==t&&(c(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function b(e){const n=(0,j.A)();return(0,f.jsx)(k,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);