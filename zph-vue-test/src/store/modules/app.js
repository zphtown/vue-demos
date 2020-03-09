const state = {
  isCollapse: false
}
const mutations = {
  SET_IS_COLLAPSE(state, flag) {
    state.isCollapse = flag
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
