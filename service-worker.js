if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let a={};const f=e=>c(e,d),o={module:{uri:d},exports:a,require:f};s[d]=Promise.all(i.map((e=>o[e]||f(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e152ee245a932240d00daa4866f1373e"},{url:"about/index.html",revision:"62e4021194b0e244f5fddb552f63aee9"},{url:"archives/2023/04/index.html",revision:"504889450c91e1aea60df436c578df13"},{url:"archives/2023/index.html",revision:"4d4742f323c67f0afd36b3d0b3811e54"},{url:"archives/index.html",revision:"69bdde0360efc1aea763a5a13eac1eb0"},{url:"assets/js/DPlayer.min.js",revision:"2cd381ba72be1f7bf86e97fe4698a542"},{url:"categories/Code/index.html",revision:"72e13f94bc4d605b6d180e539e114725"},{url:"categories/index.html",revision:"11c4516d2c3a92e0826221e2a3541eec"},{url:"categories/Java/index.html",revision:"1629ad39adb03f3589d6588d5227bfd5"},{url:"categories/Other/index.html",revision:"c74fd5b9338ff747782f45810e2320be"},{url:"css/background.css",revision:"4eb534984212916952fe84586d03b089"},{url:"css/cursor.css",revision:"da515bc5eda40c9906ac611eeb6164c2"},{url:"css/custom.css",revision:"8869fb97bede9d49054ea5326a69e03b"},{url:"css/headwave.css",revision:"d778ea73e19222ea2fe13b9127d5564a"},{url:"css/home-notices.css",revision:"0c0c3c2b4b3621d5d47fa1b2480b9f01"},{url:"css/icon.css",revision:"89ccdc3b4949663f033e9b301f167899"},{url:"css/index.css",revision:"2b95da8f05587d86027436b74c93374c"},{url:"css/person-bg.css",revision:"5671c709868447b848f8009a53306757"},{url:"css/poem-color.css",revision:"6c640bc26c40b623b66d217fc50e1447"},{url:"css/runtime.css",revision:"f50a3c74ba219b3337f3d2c8357f77c8"},{url:"css/scroll-bar.css",revision:"be330f6848f87931798c834677ea6a2d"},{url:"css/top-pace.css",revision:"f5e2323e1cefe1d0c753e8e2f8a6ef27"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/year.css",revision:"0d8c695c5744f602d3433dee805d4882"},{url:"icon/iconfont.css",revision:"35022665a51c39a6f3dd02fd46719111"},{url:"icon/iconfont.ttf",revision:"1ef564df5f28bb3069c87b8bd9774ac9"},{url:"icon/iconfont.woff",revision:"79e690c765e5efa229de54618cad8d8b"},{url:"icon/iconfont.woff2",revision:"ffdd326d24b3012cb7f1aaac521e4360"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"4054473f0e92689f264e09b00e31601f"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"3691dae7cd12b80a3a98a8e4ece067f0"},{url:"js/cursor.js",revision:"aa295f4af2e09907bef42bcb00056b87"},{url:"js/grayscale.js",revision:"7fe68fd50fc033da80a13e57af9b138c"},{url:"js/jinrishici.js",revision:"13bef01fcb6dd1163a70b32a8456e413"},{url:"js/local-search.js",revision:"8dac9cafe9517c6ee2628d2c1dfca1c7"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/pace.js",revision:"fb28fab8215052c88c5379414dfc5368"},{url:"js/runtime.js",revision:"cc2dc9ccd3c1c959a0773870ccaccbcf"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/sun-moon.js",revision:"81aa49de92738e0243a7477b6e4abedd"},{url:"js/title.js",revision:"4b15b32725c71fc1bc9773e2f5b88c54"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"js/weather.js",revision:"5a08bacbd02365fb32b8df0fe3a67f44"},{url:"notice/index.html",revision:"eff22a183b5c09dc899067125fb82302"},{url:"posts/bcd0724d.html",revision:"5ec49953163209056e770b30c5c8e022"},{url:"posts/d3761ba4.html",revision:"e0e2e2518617911a58fe6fb6a88b3a83"},{url:"posts/f6a1fd2d.html",revision:"7da0705b1c7f98e5df7307caaabdf021"},{url:"posts/fb7d02da.html",revision:"57d1cd177a23b7c807fc0d129b476db0"},{url:"tags/Algorithm/index.html",revision:"225dba50028c7d4923e91ef22e270630"},{url:"tags/Hexo/index.html",revision:"9d01bbbd9b2636760e61fb4ad191344d"},{url:"tags/index.html",revision:"495685d51bbd2f3ecf53a706ad5cf0c3"},{url:"tags/JUC/index.html",revision:"2e866f326196b8921d5c261b816de294"},{url:"tags/Site/index.html",revision:"62e5ed823539a4e267ded71c3212fb5d"}],{})}));
//# sourceMappingURL=service-worker.js.map
