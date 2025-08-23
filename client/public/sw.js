// Service Worker for ASTERIK Website Performance Optimization
const CACHE_NAME = 'asterik-v3.0.0';
const CACHE_URLS = [
  '/',
  '/assets/images/asterik-logo-150.png',
  '/assets/images/hero-small.webp',
  '/assets/images/hero-medium.webp',
  '/assets/images/hero-original.webp',
  '/assets/images/downloaded/business-collaboration.webp',
  '/assets/images/downloaded/business-strategy.webp',
  '/assets/images/downloaded/team-building.webp',
  '/assets/images/downloaded/tech-consulting-team.webp',
  '/assets/fonts/montserrat-v26-latin-700.woff2',
  '/assets/fonts/open-sans-v35-latin-regular.woff2',
  '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: Cache opened');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => {
        console.log('SW: All resources cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('SW: Cache failed', err);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('SW: Cache cleanup complete');
      return self.clients.claim();
    })
  );
});

// Fetch Strategy: Cache First for assets, Network First for pages
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Cache strategy based on resource type
  if (isAssetRequest(event.request)) {
    // Cache First for static assets (images, fonts, CSS, JS)
    event.respondWith(cacheFirst(event.request));
  } else if (isPageRequest(event.request)) {
    // Network First for HTML pages
    event.respondWith(networkFirst(event.request));
  } else {
    // Default: Network First
    event.respondWith(networkFirst(event.request));
  }
});

// Helper: Check if request is for static assets
function isAssetRequest(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(css|js|png|jpg|jpeg|webp|avif|svg|woff2?|ttf|eot|ico)$/);
}

// Helper: Check if request is for HTML pages
function isPageRequest(request) {
  return request.method === 'GET' && request.headers.get('accept')?.includes('text/html');
}

// Cache First Strategy
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('SW: Cache first failed', error);
    // Return offline fallback if available
    return caches.match('/offline.html') || new Response('Offline');
  }
}

// Network First Strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('SW: Network first failed, trying cache', error);
    const cached = await caches.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

// Background sync for analytics (if needed)
self.addEventListener('sync', event => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Implement analytics sync if needed
  console.log('SW: Background analytics sync');
}

// Push notifications (if needed)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/assets/images/asterik-logo-150.png',
        badge: '/assets/images/asterik-logo-150.png'
      })
    );
  }
});

// Message handling
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});