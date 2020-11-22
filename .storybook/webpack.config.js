const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  config.module.rules.push({
    test: /\.s?css$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })


  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  config.module.rules.push({
    test: /\.(jpg|png|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          // Inline files smaller than 10 kB
          limit: 10 * 1024
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            enabled: false
            // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
            // Try enabling it in your environment by switching the config to:
            // enabled: true,
            // progressive: true,
          },
          gifsicle: {
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4
          }
        }
      }
    ]
  })

  return config
}