"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[188],{9987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=r(4848),n=r(5680);const o={sidebar_position:8,id:"Enterprise Edition",title:"Enterprise Edition",description:"Enterprise/Pro edition for stirling PDF",tags:["Enterprise","Pro","Premium"]},s="Stirling PDF Enterprise",a={id:"Enterprise Edition",title:"Enterprise Edition",description:"Enterprise/Pro edition for stirling PDF",source:"@site/docs/Enterprise.md",sourceDirName:".",slug:"/Enterprise Edition",permalink:"/Enterprise Edition",draft:!1,unlisted:!1,editUrl:"https://github.com/Stirling-Tools/Stirling-Tools.github.io/tree/main/docs/Enterprise.md",tags:[{label:"Enterprise",permalink:"/tags/enterprise"},{label:"Pro",permalink:"/tags/pro"},{label:"Premium",permalink:"/tags/premium"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"Enterprise Edition",title:"Enterprise Edition",description:"Enterprise/Pro edition for stirling PDF",tags:["Enterprise","Pro","Premium"]},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/API"},next:{title:"Frequently Asked Questions",permalink:"/FAQ"}},l={},c=[{value:"Whats included",id:"whats-included",level:2},{value:"Cost",id:"cost",level:2},{value:"Purchase",id:"purchase",level:2},{value:"Activiation",id:"activiation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.RP)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"stirling-pdf-enterprise",children:"Stirling PDF Enterprise"}),"\n",(0,i.jsx)(t.p,{children:"Stirling PDF offers a Enterprise edition of its software, This is the same great software but with added features and comforts"}),"\n",(0,i.jsx)(t.h2,{id:"whats-included",children:"Whats included"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Prioritised Support tickets via ",(0,i.jsx)(t.a,{href:"mailto:support@stirlingpdf.com",children:"support@stirlingpdf.com"})," to reach directly to Stirling-PDF team for support and 1:1 meetings where applicable (Provided they come from same email domain registered with us)"]}),"\n",(0,i.jsx)(t.li,{children:"Prioritised Enhancements to Stirling-PDF where applicable"}),"\n",(0,i.jsx)(t.li,{children:"Base SSO support"}),"\n",(0,i.jsx)(t.li,{children:"Advanced SSO such as automated login handling (Coming very soon)"}),"\n",(0,i.jsx)(t.li,{children:"SAML SSO (Coming very soon)"}),"\n",(0,i.jsx)(t.li,{children:"Custom automated metadata handling"}),"\n",(0,i.jsx)(t.li,{children:"Advanced user configurations (Coming soon)"}),"\n",(0,i.jsx)(t.li,{children:"Plus other exciting features to come"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"cost",children:"Cost"}),"\n",(0,i.jsx)(t.p,{children:"We are currently charging 12$ per seat per month, This means for a company that require 5 simultaniously logged in users they would require 5 seats."}),"\n",(0,i.jsx)(t.h2,{id:"purchase",children:"Purchase"}),"\n",(0,i.jsxs)(t.p,{children:["To purchase stirling PDF Enterprise please navigate to ",(0,i.jsx)(t.a,{href:"https://stirlingpdf.com/pricing",children:"https://stirlingpdf.com/pricing"})," and select either pro or Enterprise depending on your usercase.\nFor pro you will be redirected to Stripe to setup and handle a subscription, after which you will be automatically emailed your license key on the email provided to Stripe."]}),"\n",(0,i.jsx)(t.h2,{id:"activiation",children:"Activiation"}),"\n",(0,i.jsxs)(t.p,{children:["To activate navigate to the Stirling PDF config folder and open the ",(0,i.jsx)(t.code,{children:"settings.yml"}),"\nScroll down to the enterprise section, it should look like:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"enterpriseEdition:\n  enabled: false # set to 'true' to enable enterprise edition\n  key: 00000000-0000-0000-0000-000000000000\n"})}),"\n",(0,i.jsx)(t.p,{children:"Enter the key provided to you in the email and change enabled from false to true, then restart the Stirling-PDF instance.\nYou should now see logs of your Stirling-PDF instance registering and authenticating the license and enabling the Enterprise features"})]})}function p(e={}){const{wrapper:t}={...(0,n.RP)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>c});var i=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?i.createElement(m,s(s({ref:t},p),{},{components:r})):i.createElement(m,s({ref:t},p))}));p.displayName="MDXCreateElement"}}]);