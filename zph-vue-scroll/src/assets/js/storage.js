const storage = window.localStorage
const namespace = 'mall__'

function save(key, data) {
  storage.setItem(namespace + key, data)
}

function get(key) {
  return storage.getItem(namespace + key)
}

function remove(key) {
  let val = get(key)
  if (val) {
    storage.removeItem(namespace + key)
  }
}

function clear() {
  storage.clear()
}

export default {
  save,
  get,
  remove,
  clear
}
