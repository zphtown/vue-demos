import Vue from 'vue'
import VueRouter from 'vue-router'
const _import = (file) => () => import('@/views/' + file + '/' + file)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'preview-list',
    component: _import('preview-list')
  },
  {
    path: '/preview-detail/:partyId',
    name: 'preview-detail',
    component: _import('preview-detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
