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

// Register pre-render strategy
const PreRenderPaths = ['/search', '/review', '/gallery'];
const PreRenderRoute = {
  match: ({ url, event }) => event.request.mode === 'navigate' && PreRenderPaths.includes(url.pathname),
  handler: ({ event }) => {
    // Pre-render directory index
    const target = `${event.request.url}'/index.html'`;

    return fetch(target).catch(() => caches.match(target));
  }
};

swWorkBox.router.registerRoute(PreRenderRoute.match, PreRenderRoute.handler);

// Avoid static file fall into navigate mode
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

