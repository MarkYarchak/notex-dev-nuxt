const { fullHttpUrl, fullWsUrl } = require('./nuxtServerConfig.js');
const colors = require('vuetify/es5/util/colors').default;

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Notex.cloud' || '%s - ' + process.env.npm_package_name,
    title: 'Notex.cloud' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#040090',
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@neneos/nuxt-animate.css',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set:'@fortawesome/free-regular-svg-icons',
            icons: ['far']
          },
          {
            set:'@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
        ],
      },
    ],
  ],
  apollo: {
    tokenName: 'yourApolloTokenName',
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Basic', // optional, default: 'Bearer'
    // (Optional) Default 'apollo' definition
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    // optional
    errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: fullHttpUrl,
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: fullWsUrl, // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
      },
      test: {
        httpEndpoint: fullHttpUrl,
        wsEndpoint: fullWsUrl,
        tokenName: 'apollo-token'
      },
      // alternative: user path to config which returns exact same config options
      test2: '~/plugins/my-alternative-apollo-config.js'
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    defaultAssets: {
      font: true,
      icons: 'md',
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
      }
    }
  }
};
