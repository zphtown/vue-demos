import router from '@/router'
import store from '@/store'
import dynamicRouter from '@/router/dynamicRouter'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.noLogin) {
    next()
  } else {
    if (store.state.login) {
      if (!store.state.routes.length) {
        store.commit('SET_ROUTES', dynamicRouter)
        router.addRoutes(dynamicRouter)
        next({ ...to, replace: true })
        NProgress.done()
      } else {
        next()
      }
    } else {
      next('/login')
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
