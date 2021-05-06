module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'google',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'max-len': ["off", { "code": 80 }],
    'quotes': ['warn', 'single'],
    'require-jsdoc': 'off',
    'vue/no-v-html': 'off',
    'dot-notation': 'off'
  },
  overrides: [
    {
      files: ["*.vue"],
      processor: "vue/.vue"
    }
  ]
}
