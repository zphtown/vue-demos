import storage from './storage'
import store from '@/store/store'
const historyModuleName = 'history'

export default {
  add(item) {
    if (!item) return
    let data = this.get()
    if (data.length) {
      // 过滤重复数据
      data = data.filter(val => val !== item)
    } else {
      data = []
    }
    data.unshift(item)
    this.save(data)
  },
  // 保存
  save(data) {
    storage.save(historyModuleName, typeof data === 'object' ? JSON.stringify(data) : data)
    store.commit('SET_SEARCH_HISTORY', data)
  },
  // 获取
  get() {
    let val = storage.get(historyModuleName)
    return val ? JSON.parse(val) : []
  },
  // 删除
  del(item) {
    let data = this.get()
    // 过滤重复数据
    data = data.filter(val => val !== item)
    this.save(data)
  },
  // 清空
  clear() {
    storage.remove(historyModuleName)
    store.commit('SET_SEARCH_HISTORY', [])
  }
}
