importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3fd67a48b952062ecd2e.js",
    "revision": "71f46492a0402a917ded0d4aa7489f1c"
  },
  {
    "url": "/_nuxt/8e8104bcfb0da6f9c8fa.js",
    "revision": "cdbde3bb6ac47d6c3f2d4d6304885a0a"
  },
  {
    "url": "/_nuxt/9cbf16b186e069ab75cc.js",
    "revision": "bbe59ff001cea077304482b799628895"
  },
  {
    "url": "/_nuxt/cade1b0d55a6f5ceee51.js",
    "revision": "37d5ee86cb520a61d6fced7bf51207f8"
  },
  {
    "url": "/_nuxt/f3d2cadefc5e9c24ed6f.js",
    "revision": "6052727ed03ac119a007fa8014b40ab7"
  },
  {
    "url": "/_nuxt/fcbacfda4c647be72421.js",
    "revision": "e1caada8bd3d3c1620949cc871e01c0e"
  }
], {
  "cacheId": "quila.dev",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
