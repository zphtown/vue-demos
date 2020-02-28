import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/scss/_index.scss'
import FastClick from 'fastclick'
import Button from '@/base/button'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/imgs/imgerror.png'),
  loading: require('./assets/imgs/imgloading.png'),
  attempt: 1
})

Vue.use(Button)
Vue.config.productionTip = false
// Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
