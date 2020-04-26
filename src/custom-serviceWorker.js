import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute'
import { NavigationRoute } from 'workbox-routing/NavigationRoute'
import { registerRoute } from 'workbox-routing/registerRoute'

/* eslint-disable no-undef */

if (workbox) {
    console.log(`Workbox is loaded 🎉`);
  } else {
    console.log(`Workbox didn't load `);
  }

// We need the self.__WB_MANIFEST to run build. This replaces self.__precacheManifest from previous workbox versions: https://developers.google.com/web/tools/workbox/guides/migrations/migrate-from-v4

// eslint-disable-next-line
precacheAndRoute(self.__WB_MANIFEST)

//   See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);


// eslint-disable-next-line
// self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
// // eslint-disable-next-line
// self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));


// app-shell
registerRoute("/", workbox.strategies.networkFirst());