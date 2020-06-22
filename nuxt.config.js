require('dotenv').config();
const client = require('./plugins/contentful').default;

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PREVIEW_ACCESS_TOKEN: process.env.CTF_PREVIEW_ACCESS_TOKEN
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vueScrollTo',
    '~plugins/contentful',
    '~plugins/htmlSerializer',
    '~plugins/linkResolver'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/prismic'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv', '@nuxtjs/markdownit', '@nuxtjs/prismic'],
  /*
   ** Prismic settings
   */
  prismic: {
    endpoint: 'https://tk-gallery.cdn.prismic.io/api/v2'
    // linkResolver: '@/plugins/link-resolver',
    // htmlSerializer: '@/plugins/html-serializer'
  },
  /*
   ** for nuxt routing of contentful blog
   */
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
      ]).then(([posts]) => {
        return [
          ...posts.items.map((post) => {
            return { route: `blog/${post.fields.slug}`, payload: post };
          })
        ];
      });
    }
  },
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true, // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    use: [
      'markdown-it-toc' // 目次を作るためのライブラリ。別途インストールが必要
    ]
  },
  router: {
    middleware: ['getContentful']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
