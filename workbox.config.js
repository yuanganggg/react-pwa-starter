/**
 * @description - Workbox configuration
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
module.exports = {
  globDirectory: './dist/client',
  globPatterns: ['**/*.{html,js,css,png,jpg}'],
  swSrc: './public/service-worker.js',
  swDest: './dist/client/service-worker.js',
  templatedUrls: {
    '/review': ['./review/index.html'],
    '/gallery': ['./gallery/index.html']
  }
};
