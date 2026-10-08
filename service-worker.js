```javascript
self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", event => {

  let data = {};

  try {
    data = event.data.json();
  } catch (e) {
    data = {
      title: "🔔 Rundown Reminder",
      body: event.data ? event.data.text() : "Ada pengingat baru."
    };
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title || "🔔 Rundown Reminder",
      {
        body: data.body || "Ada pengingat baru.",
        icon: "icon-192.png",
        badge: "icon-192.png"
      }
    )
  );

});
```
