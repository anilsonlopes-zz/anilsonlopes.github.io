importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/179f1a6c966850539cb0.js",
    "revision": "27946f973de47d3effb9982ac99e8f7a"
  },
  {
    "url": "/_nuxt/51be044c81b75827974e.js",
    "revision": "36918b7ab4029b6d2776b185c44a688f"
  },
  {
    "url": "/_nuxt/96ecc02ccd5b01282789.js",
    "revision": "8a7f35713c4ee44105711704147bcfd3"
  },
  {
    "url": "/_nuxt/a93ef28ac54d056517a2.js",
    "revision": "066492f23cb6906fbb2d712babfd40c0"
  },
  {
    "url": "/_nuxt/b3fc9ddfd510ca9f0886.js",
    "revision": "ffa12f3326af0337356c669c751f50ce"
  }
], {
  "cacheId": "anilsonlopes.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
