"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8873],{75705:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(74848),a=s(28453);const i={description:"Create a Snap that provides transaction insights.",sidebar_position:2},r="Create a Snap to calculate gas fee percentages",o={id:"learn/tutorials/transaction-insights",title:"Create a Snap to calculate gas fee percentages",description:"Create a Snap that provides transaction insights.",source:"@site/snaps/learn/tutorials/transaction-insights.md",sourceDirName:"learn/tutorials",slug:"/learn/tutorials/transaction-insights",permalink:"/feat/up-docus-v/snaps/learn/tutorials/transaction-insights",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/tutorials/transaction-insights.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Create a Snap that provides transaction insights.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Create a Snap to estimate gas fees",permalink:"/feat/up-docus-v/snaps/learn/tutorials/gas-estimation"},next:{title:"Best practices",permalink:"/feat/up-docus-v/snaps/learn/best-practices"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Enable transaction insights and the Ethereum provider",id:"2-enable-transaction-insights-and-the-ethereum-provider",level:3},{value:"3. Calculate and display the percentage of gas fees",id:"3-calculate-and-display-the-percentage-of-gas-fees",level:3},{value:"4. Build and test the Snap",id:"4-build-and-test-the-snap",level:3},{value:"5. Display a different UI for contract interactions",id:"5-display-a-different-ui-for-contract-interactions",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-a-snap-to-calculate-gas-fee-percentages",children:"Create a Snap to calculate gas fee percentages"}),"\n",(0,t.jsx)(n.p,{children:"This tutorial walks you through creating a Snap that calculates the percentage of gas fees that\na user pays when creating a transaction.\nThe Snap provides transaction insights in MetaMask's transaction confirmation window."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/get-started/install-flask",children:"MetaMask Flask installed"})}),"\n",(0,t.jsxs)(n.li,{children:["An account on your MetaMask Flask instance with testnet ETH","\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"https://www.infura.io/faucet",children:"Infura's Sepolia faucet"})," to get Sepolia ETH."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["A text editor (for example, ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"Node"})," version 20.11 or later"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://yarnpkg.com/",children:"Yarn"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-set-up-the-project",children:"1. Set up the project"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new Snap project using the\n",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap",children:(0,t.jsx)(n.code,{children:"@metamask/create-snap"})}),"\nstarter kit by running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn create @metamask/snap transaction-insights-snap\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @metamask/create-snap transaction-insights-snap\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm create @metamask/snap transaction-insights-snap\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, ",(0,t.jsx)(n.code,{children:"cd"})," into the ",(0,t.jsx)(n.code,{children:"transaction-insights-snap"})," project directory and run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,t.jsx)(n.p,{children:"This initializes your development environment with the required dependencies.\nYou may get a warning similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can resolve the issue by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn run allow-scripts auto\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-enable-transaction-insights-and-the-ethereum-provider",children:"2. Enable transaction insights and the Ethereum provider"}),"\n",(0,t.jsxs)(n.p,{children:["The default template Snap, such as the one in\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/learn/tutorials/gas-estimation",children:"Create a gas estimation Snap"}),",\nis configured to expose a JSON-RPC API with a simple hello command, which brings up a dialog box.\nIn contrast, the Snap you're creating in this tutorial doesn't expose any API.\nInstead, it provides transaction insights directly in MetaMask's transaction confirmation window."]}),"\n",(0,t.jsxs)(n.p,{children:["In particular, the Snap shows the user the percentage of gas fees they would pay for their transaction.\nIt gets the current gas price by calling the\n",(0,t.jsx)(n.a,{href:"/wallet/reference/eth_gasPrice",children:(0,t.jsx)(n.code,{children:"eth_gasPrice"})})," RPC\nmethod using the global Ethereum provider made available to Snaps."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable your Snap to provide ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/features/transaction-insights",children:"transaction insights"})," and\nuse the global Ethereum provider, request the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmenttransaction-insight",children:(0,t.jsx)(n.code,{children:"endowment:transaction-insight"})})," and\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/permissions#endowmentethereum-provider",children:(0,t.jsx)(n.code,{children:"endowment:ethereum-provider"})}),"\npermissions in ",(0,t.jsx)(n.code,{children:"packages/snap/snap.manifest.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:transaction-insight": {},\n  "endowment:ethereum-provider": {}\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["In this tutorial, you can replace what was previously in ",(0,t.jsx)(n.code,{children:"initialPermissions"}),".\nYou do not need any permissions other than ",(0,t.jsx)(n.code,{children:"endowment:transaction-insight"})," and ",(0,t.jsx)(n.code,{children:"endowment:ethereum-provider"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"3-calculate-and-display-the-percentage-of-gas-fees",children:"3. Calculate and display the percentage of gas fees"}),"\n",(0,t.jsxs)(n.p,{children:["To calculate and display the gas fees a user would pay as a percentage of their outgoing transaction,\nreplace the code in ",(0,t.jsx)(n.code,{children:"packages/snap/src/index.ts"})," with the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\n// Handle outgoing transactions.\nexport const onTransaction: OnTransactionHandler = async ({ transaction }) => {\n\n  // Use the Ethereum provider to fetch the gas price.\n  const currentGasPrice = await ethereum.request({\n    method: "eth_gasPrice",\n  }) as string;\n\n  // Get fields from the transaction object.\n  const transactionGas = parseInt(transaction.gas as string, 16);\n  const currentGasPriceInWei = parseInt(currentGasPrice ?? "", 16);\n  const maxFeePerGasInWei = parseInt(transaction.maxFeePerGas as string, 16);\n  const maxPriorityFeePerGasInWei = parseInt(\n    transaction.maxPriorityFeePerGas as string,\n    16,\n  );\n\n  // Calculate gas fees the user would pay.\n  const gasFees = Math.min(\n    maxFeePerGasInWei * transactionGas,\n    (currentGasPriceInWei + maxPriorityFeePerGasInWei) * transactionGas,\n  );\n\n  // Calculate gas fees as percentage of transaction.\n  const transactionValueInWei = parseInt(transaction.value as string, 16);\n  const gasFeesPercentage = (gasFees / (gasFees + transactionValueInWei)) * 100;\n\n  // Display percentage of gas fees in the transaction insights UI.\n  return {\n    content: panel([\n      heading("Transaction insights Snap"),\n      text(\n        `As set up, you are paying **${gasFeesPercentage.toFixed(2)}%**\n        in gas fees for this transaction.`,\n      ),\n    ]),\n  };\n};\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you have previously developed a dapp, you're likely familiar with accessing the Ethereum provider using ",(0,t.jsx)(n.code,{children:"window.ethereum"}),".\nIn a Snap, the ",(0,t.jsx)(n.code,{children:"window"})," object is not available.\nInstead, when you request the ",(0,t.jsx)(n.code,{children:"endowment:ethereum-provider"})," permission, your Snap is granted access to the ",(0,t.jsxs)(n.a,{href:"/feat/up-docus-v/snaps/learn/about-snaps/apis#snap-requests",children:[(0,t.jsx)(n.code,{children:"ethereum"})," global object"]}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"4-build-and-test-the-snap",children:"4. Build and test the Snap"}),"\n",(0,t.jsx)(n.p,{children:"To build and test your Snap:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the command line, run ",(0,t.jsx)(n.code,{children:"yarn start"})," in the root of your project.\nThis starts two development servers: one for watching and compiling the Snap, and another for the\nReact site.\nThe Snap bundle is served from ",(0,t.jsx)(n.code,{children:"localhost:8080"}),", and the site is served from ",(0,t.jsx)(n.code,{children:"localhost:8000"}),".\nYou should get a message that includes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"You can now view site in the browser.\n\n  http://localhost:8000/\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.a,{href:"http://localhost:8000",children:(0,t.jsx)(n.code,{children:"localhost:8000"})})," in your browser (with MetaMask Flask installed)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Connect"})," and accept the permission request."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After connecting, you're prompted to install the Snap with the ",(0,t.jsx)(n.strong,{children:"Fetch and display transaction\ninsights"})," and ",(0,t.jsx)(n.strong,{children:"Access the Ethereum provider"})," permissions.\nSelect ",(0,t.jsx)(n.strong,{children:"Approve"})," > ",(0,t.jsx)(n.strong,{children:"Install"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"From MetaMask Flask, create a new testnet ETH transfer.\nYou can set up multiple accounts to transfer between your accounts."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the transaction confirmation window, switch to the tab named ",(0,t.jsx)(n.strong,{children:"TYPESCRIPT EXAMPLE SNAP"}),".\nSwitching to the tab activates the ",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/reference/entry-points#ontransaction",children:(0,t.jsx)(n.code,{children:"onTransaction"})}),"\nentry point of your Snap and displays the percentage of gas fees in the transaction insights UI:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:s(95219).A,alt:"Transaction insights UI",width:"400px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,t.jsx)(n.h3,{id:"5-display-a-different-ui-for-contract-interactions",children:"5. Display a different UI for contract interactions"}),"\n",(0,t.jsxs)(n.p,{children:["The Snap should display a gas fee percentage for ETH transfers initiated by the user.\nFor contract interactions, add the following code to the beginning of the ",(0,t.jsx)(n.code,{children:"onTransaction"})," entry point:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'if (typeof transaction.data === "string" && transaction.data !== "0x") {\n  return {\n    content: panel([\n      heading("Percent Snap"),\n      text(\n        "This Snap only provides transaction insights for simple ETH transfers.",\n      ),\n    ]),\n  };\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"6-next-steps",children:"6. Next steps"}),"\n",(0,t.jsxs)(n.p,{children:["The initial project has generic names in multiple places.\nYou can update the fields in ",(0,t.jsx)(n.code,{children:"snap.manifest.json"})," to match your custom Snap:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"proposedName"})," - The name of your Snap.\nThis replaces ",(0,t.jsx)(n.strong,{children:"TYPESCRIPT EXAMPLE SNAP"})," in the transaction insights UI."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"description"})," - The description of your Snap."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"source"})," - The ",(0,t.jsx)(n.code,{children:"shasum"})," is set automatically when you build from the command line.\nIf you decided to publish your Snap to npm, update the ",(0,t.jsx)(n.code,{children:"location"})," to its published location."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Similarly, you should update the ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"version"}),", ",(0,t.jsx)(n.code,{children:"description"}),", and ",(0,t.jsx)(n.code,{children:"repository"})," fields of\n",(0,t.jsx)(n.code,{children:"packages/snap/package.json"})," even if you don't plan to publish your Snap to npm."]}),"\n",(0,t.jsx)(n.admonition,{title:"important",type:"caution",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"version"})," and ",(0,t.jsx)(n.code,{children:"repository"})," fields in ",(0,t.jsx)(n.code,{children:"snap.manifest.json"})," inherit the values from\n",(0,t.jsx)(n.code,{children:"package.json"})," and overwrite them in ",(0,t.jsx)(n.code,{children:"snap.manifest.json"}),".\nWe recommend updating ",(0,t.jsx)(n.code,{children:"version"})," and ",(0,t.jsx)(n.code,{children:"repository"})," in ",(0,t.jsx)(n.code,{children:"package.json"})," first, then building the Snap project."]})}),"\n",(0,t.jsxs)(n.p,{children:["You should also add an icon by following the steps outlined in the\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/learn/tutorials/gas-estimation#2-add-a-custom-icon",children:"gas estimation Snap tutorial"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Lastly, you can update the content of ",(0,t.jsx)(n.code,{children:"packages/site/src/pages/index.tsx"}),", such as removing the\ntemplate ",(0,t.jsx)(n.strong,{children:"Send Hello"})," button."]}),"\n",(0,t.jsxs)(n.p,{children:["After you've made all necessary changes, you can\n",(0,t.jsx)(n.a,{href:"/feat/up-docus-v/snaps/how-to/publish-a-snap",children:"publish your Snap to npm"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},95219:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/transaction-insights-826defcf49b733060afad734924a1749.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);