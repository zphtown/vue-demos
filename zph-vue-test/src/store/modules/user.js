import { login } from '@/api/user'
import { setToken, removeToken, getToken } from '../../utils/auth'
const state = {
  token: getToken()
}
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}
const actions = {
  login({ commit }, userInfo) {
    const form = {
      username: userInfo.username.trim(),
      password: userInfo.password
    }
    return new Promise((resolve, reject) => {
      login(form).then(res => {
        commit('SET_TOKEN', res.token)
        setToken(res.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
