if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('Service Worker registered:', reg);
    });
  });
}
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyChAYHSa-ZDUgZvTNdVVRZg_tzcIVbTUUk",

  authDomain: "cave-paintings.firebaseapp.com",

  projectId: "cave-paintings",

  storageBucket: "cave-paintings.firebasestorage.app",

  messagingSenderId: "539541568489",

  appId: "1:539541568489:web:e38e77a336979a9ca8e978"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Request permission for notifications
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' }).then(token => {
      console.log('FCM Token:', token);
      // Send token to your server or store it for sending notifications
    });
  }
});

// Handle incoming messages
onMessage(messaging, payload => {
  console.log('Message received:', payload);
  const notification = payload.notification;
  self.registration.showNotification(notification.title, {
    body: notification.body,
    icon: '/assets/icons/icon-192x192.png'
  });
});
