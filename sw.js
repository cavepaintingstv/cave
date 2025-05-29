// sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging.js');

// Initialize Firebase in the service worker
const firebaseConfig = {
  // Same config as above
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle incoming push notifications
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/path/to/icon.png' // Optional: Add an icon for the notification
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/') // Redirect to your site’s homepage or specific post
  );
});
