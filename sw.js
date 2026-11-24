/* v2.1.0 */
var C="hokkien-v2.1.0",F=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(function(h){var n=fetch(e.request).then(function(r){if(r&&r.status===200&&(r.type==="basic"||/fonts\.(googleapis|gstatic)\.com/.test(e.request.url))){var cp=r.clone();caches.open(C).then(function(c){c.put(e.request,cp)})}return r}).catch(function(){return h});return h||n}))});
