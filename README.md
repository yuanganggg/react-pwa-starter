# react-starter
Starter kit with zero-config for building a library in ESNext, featuring RollupJS, Jest, Prettier, ESLint!


##  Feature

+ `Router lazy load`
+ `Service Worker`

## Preact
```js
module.exports = {
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}
```
