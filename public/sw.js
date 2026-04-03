const staticCacheName = 'static-site';

const ASSETS = [
    '/',
    '/assets/android-chrome-192x192-Dvp2Ij_W.png',
    '/assets/axios-BeeNzXPA.js',
    '/assets/Category-CB2aHWDl.js',
    '/assets/chunk-LFPYN7LY-qS3M-zyw.js',
    '/assets/Detail-BFzgRGKe.js',
    '/assets/Home-CotzyXsG.js',
    '/assets/index--izu_zk4.js',
    '/assets/index-B3BhHTpu.css',
    '/assets/jsx-runtime-D-oznMWL.js',
    '/assets/Login-BUbWHoAd.js',
    '/assets/Page404-lGsbjXQN.js',
    '/app.js',
    '/favicon.svg',
    '/icons.svg',
    '/index.html'
];

self.addEventListener('install', (event) => {
    caches.open(staticCacheName)
        .then(cache => {
            console.log('Caches add ASSETS');
            cache.addAll(ASSETS)
        });
});

self.addEventListener('activate', (event) => {
    console.log('activated')
})

self.addEventListener('fetch', (event) => {
    console.log('fetch', event.request.url)
})