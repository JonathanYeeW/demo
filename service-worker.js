"use strict";var precacheConfig=[["/demo/index.html","ba7386a7db81adf745560b9edb1dbcae"],["/demo/static/css/main.5cb304a9.css","df27781d91d382ecdcbd66726d5524a5"],["/demo/static/js/main.e067ee8e.js","b483fc5cb650258ea28b20cef8e418ca"],["/demo/static/media/background.5263c980.jpg","5263c980836234e3c8e8921658dd8e7c"],["/demo/static/media/bicycle-bicycle-saddle-bike-5882.901a245b.jpg","901a245b76abd2096762f55960af39d1"],["/demo/static/media/blogpost1.521be763.jpg","521be763b096b95ffeffacf51bb5b362"],["/demo/static/media/blueoak.6a9ddb4d.jpg","6a9ddb4d7a7a04098950aff605500cfb"],["/demo/static/media/californianutmeg.ad1db096.jpg","ad1db096b5111a7a0e4738a5383d55a4"],["/demo/static/media/car3.37a107a7.jpg","37a107a7cd4a47f4c5ab9503175b3b8a"],["/demo/static/media/car3.6d655c85.jpg","6d655c85f583e304a0e09c80b188c72b"],["/demo/static/media/car4.249f009a.jpg","249f009ad749c5e98fe789121d8469ba"],["/demo/static/media/car4.ae68d3a0.jpg","ae68d3a01d7b59ba13678ede4d7bde68"],["/demo/static/media/joshuatree.b81973a4.jpg","b81973a440a2e303c7c6f7c7b96265c9"],["/demo/static/media/ponderosapine.0d6e6f99.JPG","0d6e6f993e8c68f2962db799819e3a78"],["/demo/static/media/review3.fe0161bc.jpg","fe0161bcad9a15da6c99b67d6d09546a"],["/demo/static/media/section1.a7c9efb5.jpg","a7c9efb55a837ea9fcee0878b4e10fc7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/demo/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});