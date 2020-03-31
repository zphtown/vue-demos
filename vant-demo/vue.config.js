'use strict'
const path = require('path')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');


function resolve (dir) {
  return path.join(__dirname, dir)
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    historyApiFallback: true,
    port: 8000,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    // change xxx-api/login => mock/login
    // detail: https://cli.vuejs.org/config/#devserver-proxy
    // [process.env.VUE_APP_MOCK]: {
    //   target: `http://127.0.0.1:${port}/mock`,
    //   changeOrigin: true,
    //   pathRewrite: {
    //     ['^' + process.env.VUE_APP_MOCK]: ''
    //   }
    // }
    // }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            selectorBlackList:['van']
          })
        ]
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'vant demo',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
