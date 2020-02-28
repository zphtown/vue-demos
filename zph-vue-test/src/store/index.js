import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'js-cookie'
Vue.use(Vuex)

const state = {
  input: '',
  photos: [
    { label: '1111', value: '111111', checked: false },
    { label: '2222', value: '2222', checked: false },
    { label: '333', value: '3333', checked: false },
    { label: '444', value: '444', checked: false },
    { label: '555', value: '555', checked: false },
    { label: '666', value: '666', checked: false }
  ],
  cacheViews: [],
  routes: [],
  login: cookies.get('login')
}
const mutations = {
  SET_INPUT(state, val) {
    state.input = val
  },
  ADD_CACHE_VIEWS(state, viewName) {
    if (state.cacheViews.includes(viewName)) return
    state.cacheViews.push(viewName)
  },
  SET_CACHE_VIEWS(state, arr) {
    state.cacheViews = arr
  },
  SET_LOGIN(state) {
    state.login = true
  },
  SET_ROUTES(state, data) {
    state.routes = data
  }
}
const actions = {
  login({ commit }) {
    return new Promise(resolve => {
      commit('SET_LOGIN', true)
      cookies.set('login', true)
      resolve()
    })
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit('SET_LOGIN', false)
      cookies.set('login', false)
      resolve()
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
