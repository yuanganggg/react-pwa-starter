/**
 * @description - coco project configuration
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
/* eslint-disable import/no-extraneous-dependencies */
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const InjectServiceWorkerPlugin = require('webpack-plugin-inject-service-worker');

module.exports = {
  plugins: [
    Reflect.construct(InjectServiceWorkerPlugin, []),
    Reflect.construct(SWPrecacheWebpackPlugin, [{
      cacheId: 'react-starter-v1',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      stripPrefix: 'dist/client',
      // navigateFallback: '/index.html',
      staticFileGlobs: ['dist/client/**/*.{js,html,css}'],
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      runtimeCaching: [
        {
          urlPattern: /^\/(counter|search)\/?/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /\.(js|css|html)/,
          handler: 'cacheFirst'
        }
      ]
    }])
  ]
};
