const staticCacheName = 'static-site';

const ASSETS = [
    '/',
    
];

self.addEventListener('install', (event) => {
    caches.open(staticCacheName)
        .then(cache => {
            cache.addAll()
        });
});

self.addEventListener('activate', (event) => {
    console.log('activated')
})

self.addEventListener('fetch', (event) => {
    console.log('fetch', event.request.url)
})