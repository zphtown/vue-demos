import Vue from 'vue'
import Vuex from 'vuex'
import historyHelper from '@/assets/js/history-helper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchHistory: historyHelper.get(),
    searchValue: ''
  },
  mutations: {
    SET_SEARCH_HISTORY(state, data) {
      state.searchHistory = data
    },
    SET_SEARCH_VALUE(state, val) {
      state.searchValue = val
    }
  },
  actions: {
  }
})
