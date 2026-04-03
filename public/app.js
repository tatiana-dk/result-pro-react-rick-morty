if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('successs'))
        .catch(() => console.log('error'))
}