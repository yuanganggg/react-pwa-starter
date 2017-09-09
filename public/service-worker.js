/**
 * @description - pwa-starter standard service worker
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

/* eslint-env worker */

// Import workbox scripts
importScripts('workbox-sw.prod.v2.0.1.js');

// Construct Workbox
const swWorkBox = new self.WorkboxSW({
  cacheId: 'react-pwa-starter',
  skipWaiting: true,
  clientsClaim: true
});

// Pre-cache static files
swWorkBox.precache([]);

// Avoid static file, prerender paths fall into navigate entry
swWorkBox.router.registerNavigationRoute('/index.html', {
  blacklist: [
    /\/(search|review|gallery)/,
    /\/ios/,
    /\/android/,
    /\/asset/,
    /\/script/,
    /\/stylesheet/,
    /\/manifest\..+\.json/
  ]
});

