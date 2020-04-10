import Vue from 'vue'
import Router from 'vue-router'

// https://blog.csdn.net/haidong55/article/details/100939076
// https://github.com/vuejs/vue-router/issues/2881
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

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
