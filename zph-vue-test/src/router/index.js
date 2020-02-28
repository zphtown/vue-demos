import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/menu'
    },
    {
      name: 'menu',
      path: '/menu',
      component: () => import('@/components/menu')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/components/login'),
      meta: { noLogin: true }
    }
  ]
})
