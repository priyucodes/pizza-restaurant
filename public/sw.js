// const CACHE_STATIC_VERSION = '2';
// const CACHE_DYNAMIC_VERSION = '1';

// self.addEventListener('install', e => {
//   // console.log('[Service Worker] Installing...', e);
//   caches.open(`static-v${CACHE_STATIC_VERSION}`).then(cache => {
//     // console.log('[Service Worker] Precaching AppShell', cache);
//     e.waitUntil(
//       cache.addAll([
//         '/',
//         '/cart',
//         // '/Home.module.css',
//         // '/Featured.module.css',
//         // '/styles/Footer.module.css',
//       ])
//     );
//   });
// });

// self.addEventListener('activate', e => {
//   // console.log('[Service Worker] Activating...', e);

//   e.waitUntil(
//     caches.keys().then(keyList => {
//       return Promise.all(
//         keyList.map(key => {
//           if (
//             key !== `static-v${CACHE_STATIC_VERSION}` &&
//             key !== `dynamic-v${CACHE_DYNAMIC_VERSION}`
//           ) {
//             console.log('[Service Worker] Removing old cache', key);
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );
//   return self.clients.claim();
// });
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       if (response) {
//         return response;
//       } else {
//         return fetch(event.request)
//           .then(res => {
//             return caches
//               .open(`dynamic-v${CACHE_DYNAMIC_VERSION}`)
//               .then(cache => {
//                 cache.put(event.request.url, res.clone());

//                 return res;
//               });
//           })
//           .catch(err => {});
//       }
//     })
//   );
// });
