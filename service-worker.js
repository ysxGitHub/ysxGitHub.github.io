if(!self.define){let e,c={};const s=(s,i)=>(s=new URL(s+".js",i).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(c[a])return;let d={};const f=e=>s(e,a),b={module:{uri:a},exports:d,require:f};c[a]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e85c4103aa3506f124f229f6f5735ede"},{url:"about/index.html",revision:"9002c19680cccdf09e1a6026f0795a70"},{url:"archives/2023/04/index.html",revision:"480d62972f7f7858c862109e186724f1"},{url:"archives/2023/04/page/2/index.html",revision:"7619e4b61abe79190982c1e49dd4d1ef"},{url:"archives/2023/index.html",revision:"06e122476ca5b895e6039aa5e4cc2809"},{url:"archives/2023/page/2/index.html",revision:"2f639677e0b8af4ea0be9bcb1ca735ee"},{url:"archives/index.html",revision:"111897c7d7b1af5dcf7ab81c33c850ec"},{url:"archives/page/2/index.html",revision:"458c2f365249c1a5d6438b2e63edb3b1"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/Code/index.html",revision:"373ffc67f154260354b7ca035309ccc3"},{url:"categories/index.html",revision:"f393b6c466df916a8a70a79c5f0bcb05"},{url:"categories/Java/index.html",revision:"8504f3977d916b437dba311e4f2f2de9"},{url:"categories/Other/index.html",revision:"fcf938addd291b95f2d8265b0393c6d9"},{url:"css/background.css",revision:"4eb534984212916952fe84586d03b089"},{url:"css/cursor.css",revision:"da515bc5eda40c9906ac611eeb6164c2"},{url:"css/custom.css",revision:"8869fb97bede9d49054ea5326a69e03b"},{url:"css/headwave.css",revision:"d778ea73e19222ea2fe13b9127d5564a"},{url:"css/home-notices.css",revision:"0c0c3c2b4b3621d5d47fa1b2480b9f01"},{url:"css/icon.css",revision:"89ccdc3b4949663f033e9b301f167899"},{url:"css/index.css",revision:"2b95da8f05587d86027436b74c93374c"},{url:"css/person-bg.css",revision:"5671c709868447b848f8009a53306757"},{url:"css/poem-color.css",revision:"6c640bc26c40b623b66d217fc50e1447"},{url:"css/runtime.css",revision:"f50a3c74ba219b3337f3d2c8357f77c8"},{url:"css/scroll-bar.css",revision:"be330f6848f87931798c834677ea6a2d"},{url:"css/top-pace.css",revision:"f5e2323e1cefe1d0c753e8e2f8a6ef27"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/year.css",revision:"0d8c695c5744f602d3433dee805d4882"},{url:"icon/iconfont.css",revision:"5a3404a0a86ff9fce74f945ee74cd7a3"},{url:"icon/iconfont.ttf",revision:"1ef564df5f28bb3069c87b8bd9774ac9"},{url:"icon/iconfont.woff",revision:"79e690c765e5efa229de54618cad8d8b"},{url:"icon/iconfont.woff2",revision:"ffdd326d24b3012cb7f1aaac521e4360"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"4054473f0e92689f264e09b00e31601f"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"4d097e5a78a0ce9c1db7cc7ce508c002"},{url:"js/cursor.js",revision:"aa295f4af2e09907bef42bcb00056b87"},{url:"js/grayscale.js",revision:"7fe68fd50fc033da80a13e57af9b138c"},{url:"js/jinrishici.js",revision:"13bef01fcb6dd1163a70b32a8456e413"},{url:"js/local-search.js",revision:"8dac9cafe9517c6ee2628d2c1dfca1c7"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/pace.js",revision:"fb28fab8215052c88c5379414dfc5368"},{url:"js/runtime.js",revision:"cc2dc9ccd3c1c959a0773870ccaccbcf"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/sun-moon.js",revision:"81aa49de92738e0243a7477b6e4abedd"},{url:"js/title.js",revision:"4b15b32725c71fc1bc9773e2f5b88c54"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"js/weather.js",revision:"5a08bacbd02365fb32b8df0fe3a67f44"},{url:"notice/index.html",revision:"bb4427efe3b376a41c205846d8e44ffe"},{url:"page/2/index.html",revision:"55c27002a6d2e5649e79f61d5739190b"},{url:"posts/31585435.html",revision:"5b04107619dd3e466ad9b3a5a60e098f"},{url:"posts/86754d50.html",revision:"0880caa4673a511a0efb8aa8bcd102ee"},{url:"posts/bcd0724d.html",revision:"47597ab5986e88a8b8a9990b54d4b720"},{url:"posts/cb6bee02.html",revision:"c57e3afd7f8872b34a5df7b4568249d7"},{url:"posts/d3761ba4.html",revision:"53c58cf15cbb2da645141e423124a806"},{url:"posts/f6a1fd2d.html",revision:"494392660096811addbad428f05518a3"},{url:"posts/fb7d02da.html",revision:"bb4e2ef553b9d5909752e3a697ff8e8b"},{url:"tags/Algorithm/index.html",revision:"932fffbd5623ee0a8664dcf38087cd08"},{url:"tags/Hexo/index.html",revision:"acf349afc4961d7b1d736052ddd5e6b2"},{url:"tags/index.html",revision:"dc6af576d63e037a2db0a6a117888595"},{url:"tags/JUC/index.html",revision:"1f35301c305d17abca650b3bdc405eec"},{url:"tags/Site/index.html",revision:"6b60b4cf0b4fbc8470c8c392c047fde4"}],{})}));
//# sourceMappingURL=service-worker.js.map
