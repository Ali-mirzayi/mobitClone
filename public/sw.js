if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const o=e=>s(e,n),r={module:{uri:n},exports:c,require:o};a[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HpntBicoVVwSF8AfiqWxY/_buildManifest.js",revision:"0d91f65da952db03e97e8317114bc634"},{url:"/_next/static/HpntBicoVVwSF8AfiqWxY/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/0b7b90cd.958fd08be666410c.js",revision:"958fd08be666410c"},{url:"/_next/static/chunks/18-7cd5748f87ae681a.js",revision:"7cd5748f87ae681a"},{url:"/_next/static/chunks/239-9a30b70c23991226.js",revision:"9a30b70c23991226"},{url:"/_next/static/chunks/29107295-ded6a4461efa5605.js",revision:"ded6a4461efa5605"},{url:"/_next/static/chunks/299.51c7ed4dd5843b44.js",revision:"51c7ed4dd5843b44"},{url:"/_next/static/chunks/375-a8b2c4d22c2c5b62.js",revision:"a8b2c4d22c2c5b62"},{url:"/_next/static/chunks/378-7fd4ce5f75e8ee5f.js",revision:"7fd4ce5f75e8ee5f"},{url:"/_next/static/chunks/435-7862cd5001d30209.js",revision:"7862cd5001d30209"},{url:"/_next/static/chunks/439-79f4f4b55f9a326b.js",revision:"79f4f4b55f9a326b"},{url:"/_next/static/chunks/440-d9ae1f81e5964d49.js",revision:"d9ae1f81e5964d49"},{url:"/_next/static/chunks/46-e44cfe7a89dfee9b.js",revision:"e44cfe7a89dfee9b"},{url:"/_next/static/chunks/543-7749c442adedf2eb.js",revision:"7749c442adedf2eb"},{url:"/_next/static/chunks/870.2e47006510194d89.js",revision:"2e47006510194d89"},{url:"/_next/static/chunks/framework-47eb1420121fdf53.js",revision:"47eb1420121fdf53"},{url:"/_next/static/chunks/main-b4da66f16ff692fe.js",revision:"b4da66f16ff692fe"},{url:"/_next/static/chunks/pages/404-2e6afc68e4762861.js",revision:"2e6afc68e4762861"},{url:"/_next/static/chunks/pages/Cart-57ffce5d2ea5adb2.js",revision:"57ffce5d2ea5adb2"},{url:"/_next/static/chunks/pages/_app-6166a3e9bc11162d.js",revision:"6166a3e9bc11162d"},{url:"/_next/static/chunks/pages/_error-25bbc618360854a5.js",revision:"25bbc618360854a5"},{url:"/_next/static/chunks/pages/about-9e0ab8e874b67b63.js",revision:"9e0ab8e874b67b63"},{url:"/_next/static/chunks/pages/categories-697017b82937be02.js",revision:"697017b82937be02"},{url:"/_next/static/chunks/pages/categories/%5BcategoryId%5D-9da7840414004b97.js",revision:"9da7840414004b97"},{url:"/_next/static/chunks/pages/contact-us-857b5189894e0a2e.js",revision:"857b5189894e0a2e"},{url:"/_next/static/chunks/pages/dashboard-d3bba43a85fb1b2e.js",revision:"d3bba43a85fb1b2e"},{url:"/_next/static/chunks/pages/index-0836af5d14cab5aa.js",revision:"0836af5d14cab5aa"},{url:"/_next/static/chunks/pages/login-d81cdeeb202827a8.js",revision:"d81cdeeb202827a8"},{url:"/_next/static/chunks/pages/products-a2e476c128a28f9d.js",revision:"a2e476c128a28f9d"},{url:"/_next/static/chunks/pages/products/%5Bid%5D-a46f40479a5621b2.js",revision:"a46f40479a5621b2"},{url:"/_next/static/chunks/pages/promotion-98cd2579f49ae868.js",revision:"98cd2579f49ae868"},{url:"/_next/static/chunks/pages/signup-8bb95b07d42073f6.js",revision:"8bb95b07d42073f6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f482acaef9c68ca0.js",revision:"f482acaef9c68ca0"},{url:"/_next/static/css/073f19c26f4a3734.css",revision:"073f19c26f4a3734"},{url:"/_next/static/css/08057a3e08f1e199.css",revision:"08057a3e08f1e199"},{url:"/_next/static/css/0fdf83812487144a.css",revision:"0fdf83812487144a"},{url:"/_next/static/css/211924307dd5a6a7.css",revision:"211924307dd5a6a7"},{url:"/_next/static/css/2c8a029fe036abf4.css",revision:"2c8a029fe036abf4"},{url:"/_next/static/css/4a85bcffef2f5aba.css",revision:"4a85bcffef2f5aba"},{url:"/_next/static/css/62ce147b8aa5c883.css",revision:"62ce147b8aa5c883"},{url:"/_next/static/css/6e28dc3b2af48ea8.css",revision:"6e28dc3b2af48ea8"},{url:"/_next/static/css/b6129ec222c04622.css",revision:"b6129ec222c04622"},{url:"/_next/static/css/c8927dd005b3b66f.css",revision:"c8927dd005b3b66f"},{url:"/_next/static/media/roboto-all-300-normal.39add8fb.woff",revision:"39add8fb"},{url:"/_next/static/media/roboto-all-400-normal.2e9e9400.woff",revision:"2e9e9400"},{url:"/_next/static/media/roboto-all-500-normal.d96daa81.woff",revision:"d96daa81"},{url:"/_next/static/media/roboto-all-700-normal.ca3d0fdb.woff",revision:"ca3d0fdb"},{url:"/_next/static/media/roboto-cyrillic-300-normal.88798412.woff2",revision:"88798412"},{url:"/_next/static/media/roboto-cyrillic-400-normal.2d9c9d60.woff2",revision:"2d9c9d60"},{url:"/_next/static/media/roboto-cyrillic-500-normal.aa68ea54.woff2",revision:"aa68ea54"},{url:"/_next/static/media/roboto-cyrillic-700-normal.258a358e.woff2",revision:"258a358e"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.cd7c5715.woff2",revision:"cd7c5715"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.d7827ae3.woff2",revision:"d7827ae3"},{url:"/_next/static/media/roboto-cyrillic-ext-500-normal.a1b5c90d.woff2",revision:"a1b5c90d"},{url:"/_next/static/media/roboto-cyrillic-ext-700-normal.dd3651fb.woff2",revision:"dd3651fb"},{url:"/_next/static/media/roboto-greek-300-normal.25dc89b0.woff2",revision:"25dc89b0"},{url:"/_next/static/media/roboto-greek-400-normal.63e6dc18.woff2",revision:"63e6dc18"},{url:"/_next/static/media/roboto-greek-500-normal.533b03d2.woff2",revision:"533b03d2"},{url:"/_next/static/media/roboto-greek-700-normal.432b858b.woff2",revision:"432b858b"},{url:"/_next/static/media/roboto-greek-ext-300-normal.bc5ce703.woff2",revision:"bc5ce703"},{url:"/_next/static/media/roboto-greek-ext-400-normal.2b547ded.woff2",revision:"2b547ded"},{url:"/_next/static/media/roboto-greek-ext-500-normal.7ea6cffa.woff2",revision:"7ea6cffa"},{url:"/_next/static/media/roboto-greek-ext-700-normal.a8d16efd.woff2",revision:"a8d16efd"},{url:"/_next/static/media/roboto-latin-300-normal.a4eae32d.woff2",revision:"a4eae32d"},{url:"/_next/static/media/roboto-latin-400-normal.f2894edc.woff2",revision:"f2894edc"},{url:"/_next/static/media/roboto-latin-500-normal.3170fd9a.woff2",revision:"3170fd9a"},{url:"/_next/static/media/roboto-latin-700-normal.71b2beb8.woff2",revision:"71b2beb8"},{url:"/_next/static/media/roboto-latin-ext-300-normal.37d4965d.woff2",revision:"37d4965d"},{url:"/_next/static/media/roboto-latin-ext-400-normal.21abc8c8.woff2",revision:"21abc8c8"},{url:"/_next/static/media/roboto-latin-ext-500-normal.85ebfb55.woff2",revision:"85ebfb55"},{url:"/_next/static/media/roboto-latin-ext-700-normal.6af98c24.woff2",revision:"6af98c24"},{url:"/_next/static/media/roboto-vietnamese-300-normal.b3d3e960.woff2",revision:"b3d3e960"},{url:"/_next/static/media/roboto-vietnamese-400-normal.c95fc061.woff2",revision:"c95fc061"},{url:"/_next/static/media/roboto-vietnamese-500-normal.7f8c0554.woff2",revision:"7f8c0554"},{url:"/_next/static/media/roboto-vietnamese-700-normal.72bf832f.woff2",revision:"72bf832f"},{url:"/error.png",revision:"da2a5cf050bd56062bd61de6d2c6b5ea"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/gta-home-logo.jpg",revision:"8556658a5f3a11ef1d1a090dcb935340"},{url:"/gta-home.png",revision:"18aebeac67741866762057fc7949b574"},{url:"/icon-192x192.png",revision:"888cd7ef299e9eb24e8e52e4b8f4be4b"},{url:"/icon-256x256.png",revision:"8607196d3af2dae9ff2fe65682e2d314"},{url:"/icon-384x384.png",revision:"2ed97f1358e5a53bc29bcc5b715b832b"},{url:"/icon-512x512.png",revision:"72b6ac13085e0bb75e812b6a293884f6"},{url:"/manifest.json",revision:"c56abeefccb5124bcb123b54e6732a3d"},{url:"/mockImage.jpg",revision:"2ea85cfbb7ca1121130ef01aa32e1950"},{url:"/wait.png",revision:"8515027ce266833867b9836972513be9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
