import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes: [
    {
      path: '/category',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/category/category')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/cart/cart')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/me/me')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/search')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          name: 'home-product',
          path: 'product/:id',
          component: () => import('./views/home-product/home-product')
        }
      ]
    },
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})
