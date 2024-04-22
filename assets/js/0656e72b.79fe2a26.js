"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},a="How to add Configurations",l={unversionedId:"Advanced Configuration/How to add configurations",id:"Advanced Configuration/How to add configurations",title:"How to add Configurations",description:"Stirling PDF allows easy customization of the app.",source:"@site/docs/Advanced Configuration/How to add configurations.md",sourceDirName:"Advanced Configuration",slug:"/Advanced Configuration/How to add configurations",permalink:"/docs/Advanced Configuration/How to add configurations",draft:!1,editUrl:"https://github.com/Stirling-Tools/Stirling-Tools.github.io/tree/main/docs/Advanced Configuration/How to add configurations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Windows installation Guide",permalink:"/docs/Getting started/Installation/Local/Windows Installation"},next:{title:"UI Customisation",permalink:"/docs/Advanced Configuration/UI Customisation"}},s={},d=[{value:"Environment only parameters",id:"environment-only-parameters",level:3},{value:"Local",id:"local",level:3},{value:"Unix",id:"unix",level:4},{value:"Windows (CMD)",id:"windows-cmd",level:4},{value:"Windows (PowerShell)",id:"windows-powershell",level:4},{value:"Docker",id:"docker",level:3},{value:"Docker run",id:"docker-run",level:4},{value:"Docker Compose",id:"docker-compose",level:4}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-add-configurations"},"How to add Configurations"),(0,i.kt)("p",null,"Stirling PDF allows easy customization of the app.\nIncludes things like"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom application name"),(0,i.kt)("li",{parentName:"ul"},"Custom slogans, icons, images, and even custom HTML (via file overrides)")),(0,i.kt)("p",null,"For customization via variables there are two options for this, either using the settings file ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.yml"),"\nThis file is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/configs")," directory and follows standard YAML formatting or directly via environment variables."),(0,i.kt)("p",null,"Environment variables override their  settings file equivalents\nFor example in the settings.yml you have"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"system:\n  defaultLocale: 'en-US'\n")),(0,i.kt)("p",null,"To have this via an environment variable you would add each sub section together to form the parameter.\nIn this case adding ",(0,i.kt)("inlineCode",{parentName:"p"},"system")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultLocale")," with all caps creating the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"SYSTEM_DEFAULTLOCALE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SYSTEM_DEFAULT_LOCALE")),(0,i.kt)("p",null,"The Current list of settings is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"security:\n  enableLogin: false # set to 'true' to enable login\n  csrfDisabled: true\n\nsystem:\n  defaultLocale: 'en-US' # Set the default language (e.g. 'de-DE', 'fr-FR', etc)\n  googlevisibility: false # 'true' to allow Google visibility (via robots.txt), 'false' to disallow\n\n#ui:\n#  appName: exampleAppName # Application's visible name\n#  homeDescription: I am a description # Short description or tagline shown on homepage.\n#  appNameNavbar: navbarName # Name displayed on the navigation bar\n\nendpoints:\n  toRemove: [] # List endpoints to disable (e.g. ['img-to-pdf', 'remove-pages'])\n  groupsToRemove: [] # List groups to disable (e.g. ['LibreOffice'])\n\nmetrics:\n  enabled: true # 'true' to enable Info APIs endpoints (view http://localhost:8080/swagger-ui/index.html#/API to learn more), 'false' to disable\n")),(0,i.kt)("p",null,"For more info on the individual entries please see their separate pages"),(0,i.kt)("h3",{id:"environment-only-parameters"},"Environment only parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYSTEM_ROOT_URI_PATH")," changes the websites root path, ie if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"pdf-app")," to application will be viewable at address ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:8080/pdf-app")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:8080/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYSTEM_CONNECTIONTIMEOUTMINUTES")," to set custom connection timeout values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOCKER_ENABLE_SECURITY")," to tell docker to download security jar (required as true for authentication and login functionality)")),(0,i.kt)("h3",{id:"local"},"Local"),(0,i.kt)("p",null,"If running Java directly outside of docker, you can set these environment variables before starting the app"),(0,i.kt)("h4",{id:"unix"},"Unix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export UI_APP_NAME="Stirling PDF"\n')),(0,i.kt)("h4",{id:"windows-cmd"},"Windows (CMD)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export UI_APP_NAME="Stirling PDF"\n')),(0,i.kt)("h4",{id:"windows-powershell"},"Windows (PowerShell)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export UI_APP_NAME="Stirling PDF"\n')),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"If in docker you can do it via docker run or compose whichever you are using are part of installation.\nSimply add these to the end of your script/file"),(0,i.kt)("h4",{id:"docker-run"},"Docker run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-e UI_APP_NAME=Stirling PDF \\\n-e UI_HOME_DESCRIPTION=Your locally hosted one-stop-shop for all your PDF needs. \\\n-e UI_APP_NAVBAR_NAME=Stirling PDF \\\n")),(0,i.kt)("h4",{id:"docker-compose"},"Docker Compose"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"environment:\n  UI_APP_NAME: Stirling PDF\n  UI_HOME_DESCRIPTION: Your locally hosted one-stop-shop for all your PDF needs.\n  UI_APP_NAVBAR_NAME: Stirling PDF\n")))}u.isMDXComponent=!0}}]);