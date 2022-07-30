'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "568c32dd80a1e30c6a9a0ca45a9c17e7",
"/": "568c32dd80a1e30c6a9a0ca45a9c17e7",
"main.dart.js": "0d4ec57eb08b32dfa9ae68d3a4edf15a",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "e8801c9300fd23612353997dedb9b74a",
"assets/assets/icons/feather_share-2.svg": "2eadf3eff1fb945866235c94ec30915d",
"assets/assets/icons/feather_message-square.svg": "5194a360f12626cb541cc80f58c4f217",
"assets/assets/icons/logo.png": "b7da5ab068a8cb74b31f9b65aef58c4d",
"assets/assets/icons/feather_dribbble.svg": "89b806ce6cc9dea635b81d7dc2406352",
"assets/assets/icons/feather_thumbs-up.svg": "a066c16fa33209a18b5282c40da1cf78",
"assets/assets/icons/feather_search.svg": "9d58d567fd606a3fdf19583f8685523d",
"assets/assets/icons/behance-alt.svg": "5c5cb1c76f9e70c3906f061365fdac19",
"assets/assets/icons/logo.jpg": "e2cf6fd7a95db8be8370144ca8028488",
"assets/assets/icons/logo_full_resolution.jpeg": "2a784fbfa7e599de0510ea7f57b35300",
"assets/assets/icons/feather_twitter.svg": "3a254ce88e725b0169c202752364535e",
"assets/assets/icons/logo.svg": "c9931bc4e93cda3b203dae019b85688e",
"assets/assets/images/AS.png": "b35275813d245090c2b6ac749858f7d6",
"assets/assets/images/material_wp_002.jpg": "a1013c5d00d90a5b3f0e9fabcefecb65",
"assets/assets/images/material_wp_004.jpg": "41f1213733ad1725c535b68d0ec723f1",
"assets/assets/images/AP.jpeg": "23106f8853f17e73609022ec2a39404a",
"assets/assets/images/hand_phone.jpeg": "9725ba2f52b6307bdefad8b391fa1257",
"assets/assets/images/background_black_contact.jpeg": "4c15dced4e17525707a602b03d320f75",
"assets/assets/images/banner_changy.jpeg": "2b413bade17bdb548819c493939c1431",
"assets/assets/images/home_banner_header.jpg": "de1464073e95048d1eabcad012fc0c21",
"assets/assets/images/0.png": "9764fc4eb9b8903140c321cb478401c3",
"assets/assets/images/home02.jpeg": "b8cf2f1bfc5bcbc2ef57d7fa4c4890af",
"assets/assets/images/1.png": "a4db2dc609cd22aa297dc0d3159d71e0",
"assets/assets/images/immagine002.jpeg": "15574cdf199cd9775e1516d849bba9ed",
"assets/assets/images/hand_phone02.jpg": "15977c55bd5b33f128920e183b6e4779",
"assets/assets/images/MA.png": "10144f371a5c3655501c45a0ec6010d1",
"assets/assets/images/recent_2.png": "a567a0e447c13f94acf9b1eec0923b55",
"assets/assets/images/2.png": "1fdb7c800008fbb0a8f92e2a00574672",
"assets/assets/images/home01.jpeg": "a2befbac1391ef392e60cad296c9c53f",
"assets/assets/images/AF.png": "ac055f49c0e12075f00346293c0bcd7c",
"assets/assets/images/hand_phone01.png": "e9e3766f135dc880ccb4d9fa6f5a35fd",
"assets/assets/images/team_screen_header.jpg": "c7f8d555134abdbd2b4b41860894cab1",
"assets/assets/images/LC.jpeg": "c89ea584e9a19ae6b207bee99459dbf0",
"assets/assets/images/recent_1.png": "f78101e229ed5405aadad3ba5dc83902",
"assets/assets/images/material_wp_003.jpg": "0b6d7c75e085943aecd6c1871b56e2cc",
"assets/assets/images/ex_team_screen_header.jpg": "430e75911821cf1fbc8868fd08b2077f",
"assets/assets/images/immagine003.jpg": "26aecbeabc180871e4093017baa0ae69",
"assets/assets/images/home03.jpeg": "2445d32f25124aa13f0cc1db6963592c",
"assets/assets/images/hand_phone03.jpg": "f30895e3872136ae747ce31b0ad05a61",
"assets/assets/images/AS.jpeg": "fe9646669905f2f273377a4359533ee8",
"assets/assets/images/material_wp_001.jpg": "694243dde3a10853f3ca43ebd66b84cb",
"assets/assets/images/immagine001.jpeg": "f0161d075562a75a640f469512890f12",
"assets/assets/images/changy_header.jpg": "1714f680da270fd6ae01de3ed18e7f48",
"assets/assets/privacy/privacy_page.md": "2f4ffe6a98e05d29e9e7710e415cffcc",
"assets/assets/privacy/pricacy_contacts.md": "e59ccc84208cffa8d60aef1cfcc0ec3b",
"assets/assets/privacy/changy_pp.md": "35ea5b0d014ebc954e6c87c64cbcff04",
"assets/assets/privacy/changy_t&c.md": "dd73bd6879b9055c37e3c956190c6026",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f9f1f217a70dfe42c6c982930e480dea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"manifest.json": "e16399b847a2eb1e09c85ac24fd2e272",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"404.html": "6ff4c60c319df764d4dbc291ef1b5e80",
"version.json": "435797a807b0f34b906af6ffba3d9884",
"favicon.png": "9a30c90169e9c5b9ce267dbe209e8bbe",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
