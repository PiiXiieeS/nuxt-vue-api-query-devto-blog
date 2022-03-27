export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Vue API Query | NuxtJS",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A dev.to clone with Nuxt.js and Vue API Query"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Inter:400,500,600&display=swap"
      }
    ]
  },

  loading: false, // disable loading bar

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [
    "@/assets/styles/reset.scss",
    "@/assets/styles/base.scss",
    "@/assets/styles/highlight.scss",
    "@/assets/styles/app.scss"
  ],

  styleResources: {
    scss: ["@/assets/styles/tokens.scss"]
  },

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/plugins/vue-placeholders.js",
    "@/plugins/vue-observe-visibility.client.js",
    "@/plugins/vue-api-query.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/svg", "@nuxtjs/style-resources"],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org
    "@nuxtjs/axios",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://axios.nuxtjs.org/options
    baseURL: "https://dev.to/api"
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
