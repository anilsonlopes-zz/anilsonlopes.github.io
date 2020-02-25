export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'pt-br'
    },
    title: '{ quila: "Anilson Lopes" }',
    titleTemplate: '%s - quila.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://storage.googleapis.com' },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'qjGjMQeTuM7JUOc0izOv3lkp_xyNTPnEYA37wDdupDI'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Anilson Lopes, desenvolvedor web. JavaScript, CSS, HTML, VueJS, NuxtJS'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://quila.dev/og-image.jpg'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Anilson Lopes, desenvolvedor web. JavaScript, CSS, HTML, VueJS, NuxtJS'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Anilson Lopes, desenvolvedor web'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.quila.dev'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2D2' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/ga.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.quila.dev',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
