const staticCacheName = 'static-site-v3';
const dynamicCacheName = 'dynamic-site-v2';
const page404Name = '';

const ASSETS = [
    '/',
    '/app.js',
    '/favicon.svg',
    '/icons.svg',
    '/index.html',
    '/manifest.json',
    '/404'
];

self.addEventListener('install', async (event) => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(ASSETS);
});

self.addEventListener('activate', async (event) => {
    const cachesKeysArr = await caches.keys();
    await Promise.all(
        cachesKeysArr
            .filter(key => key !== staticCacheName && key !== dynamicCacheName)
            .map(key => caches.delete(key))
    );
})

self.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    try {
        return cached ?? await fetch(request).then(response => {
            return networkFirst(request);
        });
    } catch(error) {
        console.log(1, error);
        return networkFirst(request);
    }
    
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
        return response;
    } catch(error) {
        console.log(2, error);
        const cached = await caches.match(request);
        return cached ?? await caches.match('/404');
    }
}