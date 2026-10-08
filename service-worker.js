self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", function(event) {

  var data = {
    title: "🔔 Rundown Reminder",
    body: "Ada pengingat baru."
  };

  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "ikon.png",
      badge: "ikon.png"
    })
  );

});

