// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Initialize OneSignal for push notifications
window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function(OneSignal) {
  await OneSignal.init({
    appId: "f117ccbe-e9c7-401e-b601-2da818c02879",
    safari_web_id: "web.onesignal.auto.5a33fe23-ccc7-4feb-afe0-cf26b0b7b29c",
    notifyButton: {
      enable: true, // Shows a bell for users to opt-in
    },
  });
});

// Optional: Add a button to prompt for notification permissions
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('enable-notifications');
  if (button) {
    button.addEventListener('click', () => {
      Notification.requestPermission().then(result => {
        if (result === 'granted') {
          console.log('Notifications enabled');
          OneSignalDeferred.push(['setSubscription', true]);
        }
      });
    });
  }
});