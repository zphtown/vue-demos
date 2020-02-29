import Vue from 'vue'
import Toast from './main'
const ToastClass = Vue.extend(Toast)

let instance = null

function toast(options) {
  const data = typeof(options) === 'string' ? { message: options } : options
  if (!instance) {
    instance = new ToastClass({
      data: data
    })
    instance.$mount()
    document.body.appendChild(instance.$el)
  }
  return instance
}

function install() {
  Vue.prototype.$toast = o => toast(o)
}

export default {
  install
}
