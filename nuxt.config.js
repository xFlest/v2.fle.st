const webpack = require('webpack')

export default {
  ssr: false,

  head: {
    title: 'fle.st',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    'normalize.css'
  ],

  plugins: [
    { src: '~/plugins/twemoji.js', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxt/content',
    'nuxt-fontawesome'
  ],

  content: {},

  build: {
    pulgins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ],
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },

  srcDir: 'src/',

  googleFonts: {
    families: {
      'Zen Kaku Gothic New': [400, 700]
    }
  },

  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: [
          "faHouse",
          "faCircleUser",
          "faAward",
          "faNewspaper",
          "faImages"
        ],
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: [
          "faTwitter",
          "faDiscord",
          "faGithub"
        ],
      },
    ],
  },
}
