// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//
// } : {}

module.exports = {
  // uncomment it if you want deploy to gh pages. digital-preview - is name og github project
  // router: {
  //   base: '/digital-preview/'
  // },
  head: {
    title: 'digital-chain',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Digital chain' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~assets/style/index.scss'],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '~assets/style/variables/index.scss',
      '~assets/style/mixins/index.scss'
    ]
  },
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/global.js',
    '~plugins/scrollTo.js',
    { src: '~/plugins/swiper.js', ssr: false }
  ],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

