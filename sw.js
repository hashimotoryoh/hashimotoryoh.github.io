if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const c=e=>r(e,f),s={module:{uri:f},exports:o,require:c};i[f]=Promise.all(n.map((e=>s[e]||c(e)))).then((e=>(d(...e),o)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"4bb4bcd5af7f578c72f5e155ca18f791"},{url:"android-chrome-512x512.png",revision:"4fd6a64e82c7925709b0b48efe84a1fc"},{url:"apple-touch-icon.png",revision:"6185d7e57a5f91fb39c3ed7576a81e97"},{url:"assets/index-07272849.js",revision:null},{url:"assets/index-082e3a5c.css",revision:null},{url:"favicon-16x16.png",revision:"415bac864a37d1129b8b68ab9077df7d"},{url:"favicon-32x32.png",revision:"dcde6c30a1fe05faab7bc8e338e1a6b0"},{url:"favicon.ico",revision:"54cfd08c175c7322f0dd202a6b64a9ed"},{url:"img/note/square.svg",revision:"3d56a6fbb4d823e8e6d2739fa734d93e"},{url:"img/profile.jpg",revision:"aa627b7684def1c865ec72564f737759"},{url:"img/profile@2x.jpg",revision:"99e8790521b990b60d22d04cd6998d85"},{url:"img/profile@3x.jpg",revision:"4efafbfe406e10806013f967288735a1"},{url:"img/qr.png",revision:"0d8ee25b82c766fe6809ad13a63ea546"},{url:"img/qr@2x.png",revision:"95d1e1683c4234d08f8bb36c2b188ed8"},{url:"img/qr@3x.png",revision:"64837c153559256917a05656a7db9eb9"},{url:"index.html",revision:"5d866e790bbae4ec4e826da7de17b5af"},{url:"og-image.png",revision:"f28bb9c2b3e5af8d459bb5999c15fb43"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"safari-pinned-tab.svg",revision:"19a893be1d5b6e54d4efcff4e4276fd9"},{url:"android-chrome-192x192.png",revision:"4bb4bcd5af7f578c72f5e155ca18f791"},{url:"android-chrome-512x512.png",revision:"4fd6a64e82c7925709b0b48efe84a1fc"},{url:"manifest.webmanifest",revision:"3c04efc1095f9491a93cc8868123f079"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));