// scripts/main.js
async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // Get the FCM token for this user
    const token = await getToken(messaging, { vapidKey: 'your-public-vapid-key' });
    console.log('FCM Token:', token);
    // Send token to your server (see Step 5)
  } else {
    console.log('Notification permission denied.');
  }
}

// Call this when the user interacts with your site (e.g., button click)
document.getElementById('enable-notifications').addEventListener('click', requestNotificationPermission);
