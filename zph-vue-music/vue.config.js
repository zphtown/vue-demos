'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const defaultSettings = require('./src/settings.js')
const name = defaultSettings.title || 'zph-vue-music' // page title
const port = 9000
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    historyApiFallback: true,
    port: port,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        'base': resolve('src/base'),
        'components': resolve('src/components'),
        'assets': resolve('src/assets'),
        'utils': resolve('src/assets/utils'),
        'views': resolve('src/views')
      }
    }
  }
}
