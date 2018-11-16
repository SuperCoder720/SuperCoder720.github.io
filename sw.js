/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-35b295cf6328e2173a24.js"
  },
  {
    "url": "app-d20bffd3c72eb14079d7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7b926c91a2dca33001c3.js"
  },
  {
    "url": "index.html",
    "revision": "626b333ddaab4f16f80e89b126cc73c7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2a465391536631637c94f752990239ca"
  },
  {
    "url": "2.933c0f2c8ed1d9551c9b.css"
  },
  {
    "url": "component---src-pages-index-js-722bd813475efd7d5c74.js"
  },
  {
    "url": "0-3d8740c0dda169f409f9.js"
  },
  {
    "url": "1-f9064d28281fabb1c09a.js"
  },
  {
    "url": "3-a8be79411aa980d26036.js"
  },
  {
    "url": "2-218d76cc22ceb1ae8ad1.js"
  },
  {
    "url": "static/d/794/path---index-6a9-B6TnAHgpWtATddSyaRGj3kaonZ4.json",
    "revision": "68d442853974df9bb40f6e4ca20ce075"
  },
  {
    "url": "component---src-pages-404-js-43999b0b4de515fee5ec.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "fe3678952c733e0d21171826040dd93c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});