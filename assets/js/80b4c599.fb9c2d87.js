"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1071],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(3117),o=n(102),i=(n(7294),n(4137)),a=["components"],s={id:"test-environment",title:"Test environment"},u=void 0,p={unversionedId:"getting-started/test-environment",id:"version-12.0/getting-started/test-environment",title:"Test environment",description:"If you look at setup-jest.js,",source:"@site/versioned_docs/version-12.0/getting-started/test-environment.md",sourceDirName:"getting-started",slug:"/getting-started/test-environment",permalink:"/jest-preset-angular/docs/getting-started/test-environment",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/getting-started/test-environment.md",tags:[],version:"12.0",frontMatter:{id:"test-environment",title:"Test environment"},sidebar:"version-12.0-docs",previous:{title:"Options",permalink:"/jest-preset-angular/docs/getting-started/options"},next:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/guides/angular-ivy"}},c={},l=[],m={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.js"},(0,i.kt)("inlineCode",{parentName:"a"},"setup-jest.js")),",\nwhat we're doing here is we're adding globals required by Angular. With the included ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/tree/main/packages/zone.js"},"Angular zone patch"),"\nwe also make sure Jest test methods run in Zone context. Then we initialize the Angular testing environment like normal."),(0,i.kt)("p",null,"While ",(0,i.kt)("inlineCode",{parentName:"p"},"setup-jest.js")," above is for running Jest with ",(0,i.kt)("strong",{parentName:"p"},"CommonJS")," mode, we also provide ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.mjs"},(0,i.kt)("inlineCode",{parentName:"a"},"setup-jest.mjs")),"\nto run with ",(0,i.kt)("strong",{parentName:"p"},"ESM")," mode."))}d.isMDXComponent=!0}}]);