'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ef69faa142325edb1575cfef80a23ddc",
".git/config": "86016230473a8bf64e4db66ae6b92539",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "85c9607d50ec6e62b495ae33c0a44b3f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80127438764bab7bfea566817270328e",
".git/logs/refs/heads/main": "fc0de15496329bb066131aa88f84028b",
".git/logs/refs/remotes/origin/main": "296fdf2dc5ea57739c3eb3fc919eafa3",
".git/objects/02/8403e73146cc8e4a6ad974230cb1e725801b31": "ad83d989019aac23e293d077a444707b",
".git/objects/06/7b3094edccb3ea44ec0b3d71d8fcdfeded3270": "6d555b4786d2f44af9831fa12087d549",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/10/a35fe47e19d8f09f7b0848977bf15eee44e06c": "6bcb8b2ab13cf7a5e10485e2eae1786c",
".git/objects/15/cd3e17c6aff45b6f4a6ec975dbec55a9e38ec5": "2806b96cb67cb2fc76d41b35bc346fe7",
".git/objects/1e/e1d310df303632d269200268101287651ccc3f": "079b93cfdbb02954745c4e81533d18c8",
".git/objects/29/616ce50946c0c39a9735345694e50288f7261e": "684bd2bc1ebddc79c52234546ce04a57",
".git/objects/29/6d149c74f702dc3f0e6f7ae6559ecd1eb59ebc": "62c371739c057ceafdd63323dbb1fa30",
".git/objects/30/e4c507c232b42f260392fa2781ddf5b64a9379": "85daad7b0b7e973b7dab5e0c117b0727",
".git/objects/39/64875919db64f4313712f23f40cc7e0dc322c7": "e315de7a342dc11725774fbb10d98f1c",
".git/objects/3c/2390de7d96a91c7ea7f7c56293c788c785b587": "9ddfed10cf39185477048b51951907e2",
".git/objects/3d/9061d2ccd1b2f3ba14dbc8f7c6a16ed62da00d": "c0d3439b24be560e902979cd584d3edb",
".git/objects/3f/ccf0f86c39faaf824c6487a7fd93d084d4fd55": "8ad0be2e641bc688c5ba069c721c3d37",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/96b848abc5a74973933bdc900c3248dee981ca": "416cf345c0fa04ad367b465c81a304a9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/5f/421c16e121ff468888db476c0c8c738523c289": "52e7e67eafdb36df72585394e59802ee",
".git/objects/6a/7462635bdcee664652989a0edcabcbceeed85a": "9bdcf729438fd699a14a6a996b01f7de",
".git/objects/6e/6e4d7568fd44fa5e841c9e0c110077daf29f00": "4880bd8d994cd491a0e66bb0fe1fa7a4",
".git/objects/70/0515ee8b2a65a5abebbbc64ac983f176f4c91e": "626a4e0493199c3c2a904b9cf87876d9",
".git/objects/76/0122c52842322b9e3bdca906cb29a8b26bb23f": "a3f483e9eb994ed2fdddf83c90ea882b",
".git/objects/77/55b0ed8144e651769125eb983bb6ffec9f9ae5": "87122e81ca19e3a8236c4c2de116365b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/8bcc64a7232c6e5f1289045d265c6105857c2e": "c62a21581f23b07e2a66aaf0201eed6d",
".git/objects/7b/cb0e6d9c4cedec02daa3371c073a9dbe9386e9": "79aeac81883c5442a34b0b7a46630579",
".git/objects/81/ab978facfd685e840e0cff61ca1b58cd1d7a85": "d9f1d806d0f4e03e46ef29042a820d5e",
".git/objects/8d/1b8ea9772594740cd59cbc127edd8ffafd8a05": "f61babd121374adcb8eb956b1de239b5",
".git/objects/90/8814cc2435e192ef9489cdf745f13cd0e98250": "c7d6bbb091e3ac88f4feb1cc964aafcc",
".git/objects/94/f64531ca4a6901403f704db2546d62c4be6661": "6f01f1cd34c640bb1922df7b2c531d0d",
".git/objects/95/7f3587c8bc50ca6dcf3833ad08e15a2c760631": "2b1dac680d14131f631ba1cd6f25cbc7",
".git/objects/98/6681be1493b0929ef89ca93faa8c76ca75c383": "ce2103bedeabb48995f07734124c001b",
".git/objects/99/38676ea567521f8483f31a35e019885a89e742": "42cc9de6a9758c9ac87395ef6190bb55",
".git/objects/9a/47fdfa5be26b7ed97e29d9d5706ff255e1286d": "98d8c6d957308ffebeb12351da650d05",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e9e81bee769b9b7b9235c616a6f86ed7544045": "1fd3720b3447932958f6bfdf1176f6c7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/db8003b46541cad93df4edb2308b8647f3b3ac": "441d5be62dca7594d2ef7ba0bc258b54",
".git/objects/b0/c4f22b9e8a12a09811c24f39fb9947139479b2": "5d82442adcd44b558fb7c8b5f3f85912",
".git/objects/ba/6bb5b30040011ccf1362bda73c4848e01cc9b7": "7042ec7e0737a20ef755672e32dda087",
".git/objects/bd/42c4f738b2778fd6eded909cbc22feecabf75b": "3156ed23e3caa3b93598bbfa2bdbeb5c",
".git/objects/be/979190fddbd0c50ca92ffde657b4daac77ebd1": "f5991977db84dd2b14cd3593c54e544f",
".git/objects/c5/4658f0879774714b816499c140128807cd2cca": "c8bfc61b63240622173399f2255ca3b6",
".git/objects/c5/de3df61426daf680b3ec7f106783eb5513a0f3": "99ec45bad0b8315cb07d8955a3449b1c",
".git/objects/c7/df91cad03cc8a00a503e5878b83403c26318a4": "b45081f7a634c56be53d0a4de9f7f85e",
".git/objects/c8/7780ba0bc9c387b124e3bac2ce8d481ef0aeb0": "867d8dd7804fb9ec79eaecd40d66985b",
".git/objects/d5/f50e56de145f9a963cc508420c6589fe0a0ebd": "9875297b90d3e535bbec6c30e6206ef8",
".git/objects/d9/0784980460fc5c6102c0812ab13080b6ba4adf": "ac7fe11ab0d4ec9544b93bc3bd5ef2aa",
".git/objects/dd/46b1105d19bde9ac45b3b9f2662df200fbfdb0": "a0dc828a2c63794dee07fddc286b946c",
".git/objects/dd/c6ea6087e09a4b297d9f316d43ae826b7cf625": "eb6a7fb92302f22871a271ea56afff7a",
".git/objects/de/ea452e841c229b6ff1d245e2b03bc530fb0dd4": "d95c4562bb1eef44efde813af4cc651d",
".git/objects/e2/8646727eb8eaf1e77afc24d76441609d331f39": "54380d5ba1072ca5a0078695164cdd3d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/224f9c0f1b8c8bc387ad11fac455000ae1bb95": "be04c5e09b409759e756591e9cc08c74",
".git/objects/ee/5964e9be82520864a17d97b9e7afc2783971ab": "c07194f1b371247d08a07389bd3faf19",
".git/objects/ef/41579573e89d0731e5469e91d7ffa96c627a9b": "6f67df51fe0eedacac39a049768e1199",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/333a7595025dae0a00615e8e39e12f2ce4c030": "edbbd954b2c3d8b9a5fc5343b317b8ee",
".git/objects/f9/b102379484b0464ae7453ff077e69693430d06": "6bb0752da85e44b2d3e8708d144c58b7",
".git/refs/heads/main": "198379e5e797635e5778638b83339245",
".git/refs/remotes/origin/main": "198379e5e797635e5778638b83339245",
"assets/AssetManifest.json": "6d791a1fd7ba08eb628fb61869c6fcaa",
"assets/assets/images/adeline.jpg": "20e4b26f8cac606f7bb68a57a23a84d6",
"assets/assets/images/naomi_osaka.png": "73bba983fd83cceadd0865aad227a112",
"assets/assets/images/tennis_court1.png": "4bc75a9b88e157836ddb71e82cba27c0",
"assets/assets/images/tennis_court2.jpg": "089907b170d1af133f677585519645b7",
"assets/assets/logo/add_scores.png": "dffe65a06e0847e25877be2c8ef810f0",
"assets/assets/logo/boutique.png": "0c4d1504bdcf560d6ef5cd35b533536f",
"assets/assets/logo/love_notes.png": "d7b747cd4dc02a4a851cb11c149654ad",
"assets/assets/logo/main_logo.png": "af1ee841858957321529dddace99e559",
"assets/assets/logo/my_schedule.png": "820ef360dff5106979ab092812981291",
"assets/assets/logo/play_tennis.png": "93d9002df0d9a925072c009ab17a3ada",
"assets/assets/logo/results.png": "74c213d185772a2d61625869c3786e14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6507a4e32e5b8220480ddde6864edf80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "920e01e70326ff12804686006aa2b609",
"icons/Icon-192.png": "bfcf07227f0b91503971d763566ca4b5",
"icons/Icon-512.png": "62c8393b0791f8c98cf386d8c1988c07",
"index.html": "d7daf58eeeb38a3432fb3012b3fa433c",
"/": "d7daf58eeeb38a3432fb3012b3fa433c",
"main.dart.js": "e0621c2414ea2e38c8d2495dd45f3418",
"manifest.json": "bc285b1ae467d3ace39a21b43ce385a2",
"version.json": "b766e645505ca813c5758ab00b87e2ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
