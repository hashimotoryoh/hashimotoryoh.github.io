if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const a=e=>r(e,c),o={module:{uri:c},exports:f,require:a};i[c]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(d(...e),f)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"bdef9117bda299ff36202a2c0f0efa1b"},{url:"android-chrome-512x512.png",revision:"49b40893e0f78c6d4a73b3c69d8dd018"},{url:"apple-touch-icon.png",revision:"46bc7d5cb022656c67c37cd6d717088e"},{url:"assets/index-082e3a5c.css",revision:null},{url:"assets/index-1ff4f9cb.js",revision:null},{url:"favicon-16x16.png",revision:"a5d29a6a41c86eba10aca91409b58bda"},{url:"favicon-32x32.png",revision:"4c67a3945800f9e03d1aec01a27ec4b1"},{url:"favicon.ico",revision:"10797e457596b2e72a2ce19adacf252d"},{url:"img/note/square.svg",revision:"3d56a6fbb4d823e8e6d2739fa734d93e"},{url:"img/profile.png",revision:"3f348c1eba441460844cd46627988a9d"},{url:"img/profile@2x.png",revision:"bdef9117bda299ff36202a2c0f0efa1b"},{url:"img/profile@3x.png",revision:"944ff36c729220f174f227569aab9d5b"},{url:"img/qr.png",revision:"0d8ee25b82c766fe6809ad13a63ea546"},{url:"img/qr@2x.png",revision:"95d1e1683c4234d08f8bb36c2b188ed8"},{url:"img/qr@3x.png",revision:"64837c153559256917a05656a7db9eb9"},{url:"index.html",revision:"2412e54d65f6d10b879c3a4c1f36d850"},{url:"og-image.png",revision:"16ddc5f5a2e0abcafeb1f45ac2a33cab"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"safari-pinned-tab.svg",revision:"19a893be1d5b6e54d4efcff4e4276fd9"},{url:"android-chrome-192x192.png",revision:"bdef9117bda299ff36202a2c0f0efa1b"},{url:"android-chrome-512x512.png",revision:"49b40893e0f78c6d4a73b3c69d8dd018"},{url:"manifest.webmanifest",revision:"3c04efc1095f9491a93cc8868123f079"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
