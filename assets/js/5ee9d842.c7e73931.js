"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3145],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5241:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(4137)),a=["components"],s={id:"test-environment",title:"Test environment"},c=void 0,u={unversionedId:"getting-started/test-environment",id:"version-11.1/getting-started/test-environment",title:"Test environment",description:"If you look at setup-jest.ts,",source:"@site/versioned_docs/version-11.1/getting-started/test-environment.md",sourceDirName:"getting-started",slug:"/getting-started/test-environment",permalink:"/jest-preset-angular/docs/11.1/getting-started/test-environment",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.1/getting-started/test-environment.md",tags:[],version:"11.1",frontMatter:{id:"test-environment",title:"Test environment"},sidebar:"version-11.1-docs",previous:{title:"Options",permalink:"/jest-preset-angular/docs/11.1/getting-started/options"},next:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/11.1/guides/angular-ivy"}},l={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/src/config/setup-jest.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"setup-jest.ts")),",\nwhat we're doing here is we're adding globals required by Angular. With the included ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/src/zone-patch"},"jest-zone-patch"),"\nwe also make sure Jest test methods run in Zone context. Then we initialize the Angular testing environment like normal."))}f.isMDXComponent=!0}}]);