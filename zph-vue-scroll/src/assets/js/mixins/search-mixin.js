import helpers from '../history-helper'
import store from '@/store/store'
export const searchMixin = {
  methods: {
    $_searchItemClick(item) {
      helpers.add(item)
      store.commit('SET_SEARCH_VALUE', item)
    },
    $_searchItemDel(item) {
      helpers.del(item)
    }
  }
}
