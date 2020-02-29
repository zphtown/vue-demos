import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'preview-list',
    component: () => import('@/views/preview-list')
  },
  {
    path: '/',
    name: 'preview-detail',
    component: () => import('@/views/preview-detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
