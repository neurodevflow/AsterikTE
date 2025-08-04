// Service Worker for performance optimization
const CACHE_NAME = 'asterik-v1';
const STATIC_CACHE = 'asterik-static-v1';

// Resources to cache on install
const STATIC_RESOURCES = [
  '/',
  '/assets/fonts/montserrat-v26-latin-regular.woff2',
  '/assets/fonts/montserrat-v26-latin-700.woff2',
  '/assets/fonts/opensans-v36-latin-regular.woff2',
  '/assets/fonts/opensans-v36-latin-600.woff2',
  '/assets/fonts/fonts.css',
  '/assets/css/critical.css',
  '/assets/js/fontawesome.min.js',
  '/assets/js/performance-monitor.js',
  '/assets/js/lazy-load.js'
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_RESOURCES))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip external requests and non-GET requests
  if (url.origin !== location.origin || event.request.method !== 'GET') {
    return;
  }

  // Strategy: Cache first for static resources, network first for API
  if (url.pathname.startsWith('/api/')) {
    // Network first for API requests
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache first for static resources
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(event.request)
            .then((response) => {
              // Cache successful responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(event.request, responseClone));
              }
              return response;
            });
        })
    );
  }
});