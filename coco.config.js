/**
 * @description - coco project configuration
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// Native
const path = require('path');

/* eslint-disable import/no-extraneous-dependencies */
const InjectServiceWorkerPlugin = require('webpack-plugin-inject-service-worker');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
    Reflect.construct(InjectServiceWorkerPlugin, []),
    Reflect.construct(CopyPlugin, [[{
      from: 'node_modules/workbox-sw/build/importScripts/workbox-sw.prod.*',
      to: '[name].[ext]'
    }]]),
    Reflect.construct(WorkboxPlugin, [
      {
        globDirectory: './dist/client',
        globPatterns: ['**/*.{html,js,css,png,jpg}'],
        swSrc: './public/service-worker.js',
        swDest: './dist/client/service-worker.js'
      }
    ]),
    Reflect.construct(WebpackPwaManifest, [
      {
        short_name: 'Baby',
        name: 'Blog promise for Carey baby',
        display: 'standalone',
        background_color: '#2196F3',
        theme_color: '#2196F3',
        start_url: 'index.html?launcher=true',
        ios: true,
        icons: [
          {
            src: path.resolve('public/android-icon.png'),
            sizes: [144, 196, 256, 512],
            destination: 'android'
          },
          {
            src: path.resolve('public/ios-icon.png'),
            sizes: [144, 196, 256, 512],
            ios: true,
            destination: 'ios'
          }
        ]
      }
    ])
  ]
};
