self.addEventListener('install', () => {
    console.log('Service worker installing...');
  });
  
  self.addEventListener('activate', () => {
    console.log('Service worker activated...');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  