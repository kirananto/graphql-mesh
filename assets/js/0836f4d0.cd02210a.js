(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{301:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,g=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(g,l(l({ref:t},c),{},{components:n})):a.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(301)),i={id:"postgraphile",title:"PostgreSQL / PostGraphile",sidebar_label:"PostgreSQL / PostGraphile"},l={unversionedId:"handlers/postgraphile",id:"handlers/postgraphile",isDocsHomePage:!1,title:"PostgreSQL / PostGraphile",description:"image",source:"@site/docs/handlers/postgraphile.md",slug:"/handlers/postgraphile",permalink:"/docs/handlers/postgraphile",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/postgraphile.md",version:"current",sidebar_label:"PostgreSQL / PostGraphile",sidebar:"sidebar",previous:{title:"JSON Schema",permalink:"/docs/handlers/json-schema"},next:{title:"SOAP",permalink:"/docs/handlers/soap"}},p=[{value:"External Plugins (e.g. Federation)",id:"external-plugins-eg-federation",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/20847995/79219670-5ae06300-7e5b-11ea-81f1-d0c08a884607.png",alt:"image"})),Object(o.b)("p",null,"This handler allows you to use GraphQL schema created by ",Object(o.b)("a",{parentName:"p",href:"https://www.graphile.org/postgraphile/"},"PostGraphile"),", based on a PostgreSQL database schema."),Object(o.b)("p",null,"To get started, install the handler library from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ yarn add @graphql-mesh/postgraphile\n")),Object(o.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyDb\n    handler:\n      postgraphile:\n        connectionString: postgres://postgres:password@localhost/postgres\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can check out our example that uses schema stitching with a PostgreSQL datasource.\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb"},"Click here to open the example on GitHub"))),Object(o.b)("h3",{id:"external-plugins-eg-federation"},"External Plugins (e.g. Federation)"),Object(o.b)("p",null,"You can add PostGraphile plugins such as FederationPlugin and ConnectionFilterPlugin. You can install it using npm or yarn like below;"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @graphile/federation\n")),Object(o.b)("p",null,"and add those in your configuration file;"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},'sources:\n  - name: MyDb\n    handler:\n      postgraphile:\n        connectionString: postgres://postgres:password@localhost/postgres\n        plugins:\n          - "@graphile/federation"\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Use ",Object(o.b)("inlineCode",{parentName:"p"},"FederationPlugin")," only if you are using ",Object(o.b)("inlineCode",{parentName:"p"},"federation")," as merger as in ",Object(o.b)("a",{parentName:"p",href:"/docs/recipes/federation"},"Federation Recipe"))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.graphile.org/postgraphile/extending/"},"Learn more about PostGraphile plugins")),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"connectionString")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),") - A connection string to your Postgres database"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schemaName")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array of String"),", required) - An array of strings which specifies the PostgreSQL schemas that PostGraphile will use to create a GraphQL schema. The default schema is the public schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pool")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Any"),") - Connection Pool instance or settings or you can provide the path of a code file that exports any of those"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"appendPlugins")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array of String"),") - Extra Postgraphile Plugins to append"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"skipPlugins")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array of String"),') - Postgraphile Plugins to skip (e.g. "graphile-build#NodePlugin")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),' -  - Extra Postgraphile options that will be added to the postgraphile constructor. It can either be an object or a string pointing to the object\'s path (e.g. "./my-config#options"). See the ',Object(o.b)("a",{parentName:"li",href:"https://www.graphile.org/postgraphile/usage-library/"},"postgraphile docs")," for more information. One of: ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"JSON")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"String")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"subscriptions")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Enable GraphQL websocket transport support for subscriptions (default: true)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"live")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Boolean"),") - Enables live-query support via GraphQL subscriptions (sends updated payload any time nested collections/records change) (default: true)"))))}s.isMDXComponent=!0}}]);