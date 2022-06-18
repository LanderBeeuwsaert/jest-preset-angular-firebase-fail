"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2472],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=s,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),s=n(102),a=(n(7294),n(4137)),o=["components"],i={id:"esm-support",title:"ESM Support"},p=void 0,l={unversionedId:"guides/esm-support",id:"version-12.0/guides/esm-support",title:"ESM Support",description:"To use jest-preset-angular with ESM support, you'll first need to check ESM Jest documentation.",source:"@site/versioned_docs/version-12.0/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/jest-preset-angular/docs/guides/esm-support",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/guides/esm-support.md",tags:[],version:"12.0",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"version-12.0-docs",previous:{title:"Angular >=13",permalink:"/jest-preset-angular/docs/guides/angular-13+"},next:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/guides/jsdom-version"}},u={},c=[{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," with ESM support, you'll first need to check ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/ecmascript-modules"},"ESM Jest documentation"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," supports ESM via a ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," config option ",(0,a.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/useESM"},"useESM")," in combination with jest config option ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#extensionstotreatasesm-arraystring"},"extensionsToTreatAsEsm"),"."),(0,a.kt)("p",null,"There is also a ",(0,a.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/getting-started/presets"},"preset")," to work with ESM."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We have ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples"},"example apps")," which contains base ESM setup to work with Jest and Angular."))),(0,a.kt)("p",null,"Besides, there is ",(0,a.kt)("inlineCode",{parentName:"p"},"setup-jest.mjs")," to add to Jest setup file to ensure that Jest can set up test environment properly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import 'jest-preset-angular/setup-jest.mjs';\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      useESM: true,\n    },\n  },\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "tsconfig": "<rootDir>/tsconfig.spec.json",\n        "stringifyContentPathRegex": "\\\\.html$",\n        "useESM": true\n      }\n    }\n  }\n}\n')),(0,a.kt)("h4",{id:"use-esm-presets"},"Use ESM presets"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Jest will attempt to load ",(0,a.kt)("strong",{parentName:"p"},"ESM")," files from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," with default ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-resolve")," which usually works for most of the cases.\nHowever, there are cases like Angular libraries ",(0,a.kt)("strong",{parentName:"p"},"ESM")," built files or ",(0,a.kt)("strong",{parentName:"p"},"ESM")," files which are outside ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," might not be loaded\ncorrectly."),(0,a.kt)("p",{parentName:"div"},"To fix that, one can use ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," in jest config to instruct Jest to load the correct ",(0,a.kt)("strong",{parentName:"p"},"ESM")," files or create a\ncustom Jest ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#resolver-string"},"resolver"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "preset": "jest-preset-angular/presets/defaults-esm"\n  }\n}\n')))}d.isMDXComponent=!0}}]);