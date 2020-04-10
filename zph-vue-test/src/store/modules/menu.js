import router, { homeMenu } from '@/router'
import dynamicRouter from '@/router/dynamicRouter'
const state = {
  menus: []
}
const mutations = {
  SET_MENUS(state, data) {
    state.menus = data
  }
}
const actions = {
  getMyMenu({ commit }) {
    return new Promise(resolve => {
      commit('SET_MENUS', dynamicRouter)
      homeMenu.children = findRoute(dynamicRouter, [])
      homeMenu.redirect = {
        name: dynamicRouter[0].name
      }
      router.addRoutes([
        homeMenu
        // { path: '*', redirect: { name: '404' } }
      ])
      console.log('dynamicRouter', dynamicRouter)
      console.log('homeMenu.children', homeMenu.children)
      resolve(dynamicRouter)
    })
  }
}

function findRoute(dynamicRouter, result) {
  dynamicRouter.filter(v => {
    if (v.component && !result.includes(r => r.name === v.name)) {
      result.push({
        name: v.name,
        path: v.path,
        component: v.component,
        props: v.props || false
      })
    }
    if (v.children && v.children.length) {
      findRoute(v.children, result)
    }
  })
  return result
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
