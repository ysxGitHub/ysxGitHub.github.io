if(!self.define){let e,c={};const s=(s,i)=>(s=new URL(s+".js",i).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(c[a])return;let d={};const f=e=>s(e,a),b={module:{uri:a},exports:d,require:f};c[a]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4276215a5868526f1f470cd5f6558af6"},{url:"about/index.html",revision:"3b03fee6cf893adc13fc70912986150c"},{url:"archives/2023/04/index.html",revision:"0ec342a00b7b628feb038737eec09984"},{url:"archives/2023/04/page/2/index.html",revision:"0496c33bdc8b407b513d36d106d2a491"},{url:"archives/2023/index.html",revision:"57b47e80bcced3b80392749f8bea100e"},{url:"archives/2023/page/2/index.html",revision:"2b7dca018b5b6a53800ba2a987d0c6ab"},{url:"archives/index.html",revision:"04fc515250dd73c0f71d0f85aaa1170c"},{url:"archives/page/2/index.html",revision:"653e31919957d7f2cd02e6e88841f777"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/Code/index.html",revision:"1e5a5d70352d82089198b2fa5a40ae25"},{url:"categories/index.html",revision:"994d19a15a34757197cc638b64c2d992"},{url:"categories/Java/index.html",revision:"391c201e113e80bc932e065f9f2a8a46"},{url:"categories/Other/index.html",revision:"9f558942df7fd02b3bb20f1700c5eb2d"},{url:"css/background.css",revision:"4eb534984212916952fe84586d03b089"},{url:"css/cursor.css",revision:"da515bc5eda40c9906ac611eeb6164c2"},{url:"css/custom.css",revision:"8869fb97bede9d49054ea5326a69e03b"},{url:"css/headwave.css",revision:"d778ea73e19222ea2fe13b9127d5564a"},{url:"css/home-notices.css",revision:"0c0c3c2b4b3621d5d47fa1b2480b9f01"},{url:"css/icon.css",revision:"89ccdc3b4949663f033e9b301f167899"},{url:"css/index.css",revision:"2b95da8f05587d86027436b74c93374c"},{url:"css/person-bg.css",revision:"5671c709868447b848f8009a53306757"},{url:"css/poem-color.css",revision:"6c640bc26c40b623b66d217fc50e1447"},{url:"css/runtime.css",revision:"f50a3c74ba219b3337f3d2c8357f77c8"},{url:"css/scroll-bar.css",revision:"be330f6848f87931798c834677ea6a2d"},{url:"css/top-pace.css",revision:"f5e2323e1cefe1d0c753e8e2f8a6ef27"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/year.css",revision:"0d8c695c5744f602d3433dee805d4882"},{url:"icon/iconfont.css",revision:"5a3404a0a86ff9fce74f945ee74cd7a3"},{url:"icon/iconfont.ttf",revision:"1ef564df5f28bb3069c87b8bd9774ac9"},{url:"icon/iconfont.woff",revision:"79e690c765e5efa229de54618cad8d8b"},{url:"icon/iconfont.woff2",revision:"ffdd326d24b3012cb7f1aaac521e4360"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"4054473f0e92689f264e09b00e31601f"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"a4fa2075bc4a9ad000adeef7798c2693"},{url:"js/cursor.js",revision:"aa295f4af2e09907bef42bcb00056b87"},{url:"js/grayscale.js",revision:"7fe68fd50fc033da80a13e57af9b138c"},{url:"js/jinrishici.js",revision:"13bef01fcb6dd1163a70b32a8456e413"},{url:"js/local-search.js",revision:"8dac9cafe9517c6ee2628d2c1dfca1c7"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/pace.js",revision:"fb28fab8215052c88c5379414dfc5368"},{url:"js/runtime.js",revision:"cc2dc9ccd3c1c959a0773870ccaccbcf"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/sun-moon.js",revision:"81aa49de92738e0243a7477b6e4abedd"},{url:"js/title.js",revision:"4b15b32725c71fc1bc9773e2f5b88c54"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"js/weather.js",revision:"5a08bacbd02365fb32b8df0fe3a67f44"},{url:"notice/index.html",revision:"1daaea333c47d762ee8d0e091280449b"},{url:"page/2/index.html",revision:"177cb9dbc08f29817d7e40924cfbfd04"},{url:"posts/31585435.html",revision:"8acd288f0a671d2153960284864f4840"},{url:"posts/5ec69172.html",revision:"96cfa46f843b25800e48abbb97a12177"},{url:"posts/86754d50.html",revision:"e84a5c1b9e762c69b77304dfd9311ed9"},{url:"posts/bcd0724d.html",revision:"27baa0f66f35029ac2e77d80f42ef5bb"},{url:"posts/cb6bee02.html",revision:"51c2619368f8b54523d038de9b49d0ca"},{url:"posts/d3761ba4.html",revision:"f783190f977ae38135362dbea02c6a52"},{url:"posts/f6a1fd2d.html",revision:"31adfa3675306c89cba32675ae75e91b"},{url:"posts/fb7d02da.html",revision:"69e1353d5f24d4701b793e81252d1f7c"},{url:"tags/Algorithm/index.html",revision:"9a626cea3c6b22672bdb83a367040bf5"},{url:"tags/Hexo/index.html",revision:"0008f7770621fec7fc0ebccb8dc1bcc3"},{url:"tags/index.html",revision:"5820e181eb7ff35ce8ad39158dbf8a6a"},{url:"tags/JUC/index.html",revision:"edcb653837200606a0685310987616b3"},{url:"tags/Site/index.html",revision:"066c6c344e3a3e05781774cd4ee05343"}],{})}));
//# sourceMappingURL=service-worker.js.map
