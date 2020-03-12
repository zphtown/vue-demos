import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const homeMenu = {
  name: 'home',
  path: '/',
  component: () => import('@/views/home')
}

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/common/login'),
      meta: { noLogin: true }
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/views/common/404'),
      meta: { noLogin: true }
    }
  ]
})
