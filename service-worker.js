importScripts('https://js.pusher.com/beams/1.0/push-notifications-cdn.js');

self.addEventListener('push', (event) => {
  let data = { title: 'New Post', body: 'A new Markdown post is available!' };
  if (event.data) {
    data = event.data.json();
  }
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '{{ site.baseurl }}/images/favicon.png',
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('{{ site.baseurl }}/'));
});
