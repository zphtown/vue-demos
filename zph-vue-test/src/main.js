// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Elementui from 'element-ui'
import VueI18n from 'vue-i18n'
// import VueParticles from 'vue-particles'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './assets/scss/index.scss'
import './assets/scss/element-variables.scss'
import './permission'
import Mock from './mock/index.js'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import myEnLocale from './assets/lang/en'
import myZhLocale from './assets/lang/zh-cn'
import store from './store'

// Vue.use(VueParticles)
Mock.mockData()
Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Elementui)

// let list = router.options.routes.filter(v => v.name)
// list = list.map(v => v.name)
// store.commit('SET_CACHE_VIEWS', list)
// console.log(list)

const messages = {
  en: Object.assign(myEnLocale, enLocale),
  'zh-cn': Object.assign(myZhLocale, zhLocale)
}
const lang = localStorage.getItem('user-language') || 'zh-cn'
const i18n = new VueI18n({
  locale: lang,
  messages
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
