import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.noLogin) {
    next()
  } else {
    const token = store.state.user.token
    const menus = store.state.menu.menus
    if (token) {
      if (!menus || !menus.length) {
        try {
          store.dispatch('menu/getMyMenu').then(_ => {
            // console.log(store.state.menu.menus)
            next({ ...to, replace: true })
            NProgress.done()
          })
        } catch (e) {
          next('/login')
          NProgress.done()
        }
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
