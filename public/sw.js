const CACHE_STATIC_VERSION = '1';
const CACHE_DYNAMIC_VERSION = '1';
self.addEventListener('install', e => {
  // console.log('[Service Worker] Installing...', e);
  caches.open(`static-v${CACHE_STATIC_VERSION}`).then(cache => {
    // console.log('[Service Worker] Precaching AppShell', cache);
    cache.addAll(['/', '/cart', '../styles/*']);
  });
});

self.addEventListener('activate', e => {
  // console.log('[Service Worker] Activating...', e);

  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (
            key !== `static-v${CACHE}` &&
            key !== `dynamic-v${CACHE_DYNAMIC_VERSION}`
          ) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
          return self.clients.claim();
        })
      );
    })
  );
});

self.addEventListener('fetch', e => {
  // console.log('[Service Worker] Fetching...', e);
  e.respondWith(
    caches.match(e.request).then(res => {
      if (res) {
        return res;
      } else {
        return fetch(e.request)
          .then(response => {
            return caches
              .open(`dynamic-v${CACHE_DYNAMIC_VERSION}`)
              .then(cache => {
                cache.put(e.request.url, response.clone());
                return response;
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
    })
  );
});
