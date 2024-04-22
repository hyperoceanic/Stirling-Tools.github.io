"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="UI Customisation",l={unversionedId:"Advanced Configuration/System and Security",id:"Advanced Configuration/System and Security",title:"UI Customisation",description:"Stirling PDF allows custommization of system and security settings",source:"@site/docs/Advanced Configuration/System and Security.md",sourceDirName:"Advanced Configuration",slug:"/Advanced Configuration/System and Security",permalink:"/docs/Advanced Configuration/System and Security",draft:!1,editUrl:"https://github.com/Stirling-Tools/Stirling-Tools.github.io/tree/main/docs/Advanced Configuration/System and Security.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},s={},c=[{value:"Settings file",id:"settings-file",level:2},{value:"Local",id:"local",level:2},{value:"Docker",id:"docker",level:2},{value:"Docker run",id:"docker-run",level:3},{value:"Docker Compose",id:"docker-compose",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ui-customisation"},"UI Customisation"),(0,o.kt)("p",null,"Stirling PDF allows custommization of system and security settings\nFor security please note this section is only enabled if you are using the security jar, for docker that means setting ",(0,o.kt)("inlineCode",{parentName:"p"},"DOCKER_ENABLE_SECURITY")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"  via a environment variable"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enableLogin")," This enables or disables the login functionality with"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"csrfDisabled")," The description to be displayed on the homepage under the navbar that first greets the user\nand"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultLocale")," The app name to be shown within to navbar for all pages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"googlevisibility")," The app name to be shown within to navbar for all pages")),(0,o.kt)("h2",{id:"settings-file"},"Settings file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"security:\n  enableLogin: false # set to 'true' to enable login\n  csrfDisabled: true\n\nsystem:\n  defaultLocale: 'en-US' # Set the default language (e.g. 'de-DE', 'fr-FR', etc)\n  googlevisibility: false # 'true' to allow Google visibility (via robots.txt), 'false' to disallow\n")),(0,o.kt)("h2",{id:"local"},"Local"),(0,o.kt)("p",null,"If running Java directly, you can also pass these as properties using ",(0,o.kt)("inlineCode",{parentName:"p"},"-D")," arguments such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'java -jar Stirling-PDF.jar -DAPP_HOME_NAME="New Application Name"\n')),(0,o.kt)("p",null,"Alternatively you can set these via environment variables by running before starting the application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export UI_APP_NAME="Stirling PDF"\nexport UI_HOME_DESCRIPTION="Your locally hosted one-stop-shop for all your PDF needs."\nexport UI_APP_NAVBAR_NAME="Stirling PDF"\n')),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("h3",{id:"docker-run"},"Docker run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-e UI_APP_NAME=Stirling PDF \\\n-e UI_HOME_DESCRIPTION=Your locally hosted one-stop-shop for all your PDF needs. \\\n-e UI_APP_NAVBAR_NAME=Stirling PDF \\\n")),(0,o.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"environment:\n  UI_APP_NAME: Stirling PDF\n  UI_HOME_DESCRIPTION: Your locally hosted one-stop-shop for all your PDF needs.\n  UI_APP_NAVBAR_NAME: Stirling PDF\n")))}d.isMDXComponent=!0}}]);