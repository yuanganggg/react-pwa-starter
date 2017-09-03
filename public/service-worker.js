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

// Avoid static file fallback into navigate mode
// Notice registerNavigationRoute will not cooperate with prerender default
swWorkBox.router.registerNavigationRoute('/index.html', {
  blacklist: [/\.(js|css|jpe?g|png)$/i]
});

