'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "80f903346ccc50806a143af2c030f62b",
"/assets/assets/alarm.flr2d": "be06a64fae717947a41d1b59a7990cd8",
"/assets/assets/myimage.jpg": "257fbd323dda7df05bc9cd05c77d39e7",
"/assets/assets/smiley_switch.flr": "3d6b005663d51cdaddab336ca726d9df",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "c2f94f067629a5b12f3c662e755617be",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "3c8df2ee862fde637e24b2f40fa1d6ca",
"/main.dart.js": "ea659dfd4063777b48620aa6726fd1c7",
"/manifest.json": "d2395143773327761050ab6a1bc9db95"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
