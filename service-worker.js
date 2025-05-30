importScripts("https://js.pusher.com/beams/service-worker.js");

self.addEventListener('push', (event) => {
  let data = { title: 'New Post', body: 'A new Markdown post is available!' };
  if (event.data) {
    data = event.data.json();
  }
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/path/to/icon-192x192.png',
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
