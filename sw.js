if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/VAvMWxrmzp_KrTw5pWh6H/_buildManifest.js",revision:"80df8efd82cc890a680f6b35de21c1fa"},{url:"/_next/static/VAvMWxrmzp_KrTw5pWh6H/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/396.558bb5b2f187165c.js",revision:"558bb5b2f187165c"},{url:"/_next/static/chunks/458-0d4ab5c6d7b9aac6.js",revision:"0d4ab5c6d7b9aac6"},{url:"/_next/static/chunks/804.3547d3552d54f1b2.js",revision:"3547d3552d54f1b2"},{url:"/_next/static/chunks/framework-7dc8a65f4a0cda33.js",revision:"7dc8a65f4a0cda33"},{url:"/_next/static/chunks/main-eea236fe90f93bb5.js",revision:"eea236fe90f93bb5"},{url:"/_next/static/chunks/pages/_app-14b73387d3eaa0bd.js",revision:"14b73387d3eaa0bd"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/create-fbcda45e0c5207b5.js",revision:"fbcda45e0c5207b5"},{url:"/_next/static/chunks/pages/index-a58f43b3555712ff.js",revision:"a58f43b3555712ff"},{url:"/_next/static/chunks/pages/set-73f6e18c918c21d6.js",revision:"73f6e18c918c21d6"},{url:"/_next/static/chunks/pages/set/write-f7e25600ad3ca914.js",revision:"f7e25600ad3ca914"},{url:"/_next/static/chunks/pages/sets-3b98f8802ead40c1.js",revision:"3b98f8802ead40c1"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-abf6532348d1ce1b.js",revision:"abf6532348d1ce1b"},{url:"/_next/static/css/0db1b87343a47e76.css",revision:"0db1b87343a47e76"},{url:"/_next/static/css/339be1fc34a11c30.css",revision:"339be1fc34a11c30"},{url:"/_next/static/css/3644945fa40a195c.css",revision:"3644945fa40a195c"},{url:"/_next/static/css/7e3422c1047e51a8.css",revision:"7e3422c1047e51a8"},{url:"/_next/static/css/823913e52b18b38e.css",revision:"823913e52b18b38e"},{url:"/_next/static/css/bbdbe8d713851dff.css",revision:"bbdbe8d713851dff"},{url:"/_next/static/css/e55192291df847a1.css",revision:"e55192291df847a1"},{url:"/images/discord.svg",revision:"fdb3a536e3f1f3c467af7cf526a35155"},{url:"/images/favicon.ico",revision:"72ce443a16c51599e5cb295170fce100"},{url:"/images/github.svg",revision:"8ddeeab0155ae95dcc97141c79a15c77"},{url:"/images/home_logo.svg",revision:"cf12a3ed0192c75b72ea142a3ef9a062"},{url:"/images/icon-192x192.png",revision:"28f5a8f727c44899c787f9706e0ae295"},{url:"/images/icon-512x512.png",revision:"e188d423394e1fc5c5b796784ed0973c"},{url:"/images/plus.svg",revision:"c698b22e0bcb3eb74adb39c471d3cac1"},{url:"/images/search.svg",revision:"e6a3f384825926a98440eabf73f2f03d"},{url:"/images/signin.svg",revision:"fe863830818b459d56b172ba15fc6dfb"},{url:"/images/user.svg",revision:"41991f7033cb06f383f9a6ee2ff16154"},{url:"/manifest.json",revision:"5264711c66d778244c98b066515429ab"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
