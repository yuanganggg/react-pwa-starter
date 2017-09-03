/**
 * @description - pwa-starter standard service worker
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

/* eslint-env worker */

// Import workbox scripts
importScripts('workbox-sw.prod.v2.0.0.js');

// Construct Workbox
const swWorkBox = new self.WorkboxSW({
  cacheId: 'react-pwa-starter',
  skipWaiting: true,
  clientsClaim: true
});

// Pre-cache static files
swWorkBox.precache([]);

// Register special strategy
// Request latest entry first
swWorkBox.router.registerRoute('/index.html', swWorkBox.strategies.networkFirst({
  networkTimeoutSeconds: 5
}));

// Avoid static file fallback into navigate mode
swWorkBox.router.registerNavigationRoute('/index.html', {
  blacklist: [/\.(js|css|jpe?g|png)$/i]
});

