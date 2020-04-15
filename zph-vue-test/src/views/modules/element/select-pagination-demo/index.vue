<template>
  <div style="padding:20px">
    <my-select-pagination v-model="value" :remote="getList"></my-select-pagination>
  </div>
</template>

<script>
import MySelectPagination from '@/components/select-pagination/index'
export default {
  components: {
    MySelectPagination
  },
  data() {
    return {
      value: '',
      total: 100,
      timer: null
    }
  },
  methods: {
    getList(params, callback) {
      if (this.timer) {
        clearInterval(this.time)
      }
      this.timer = setTimeout(_ => {
        let from = params.page * params.limit
        let list = Array.apply(null, { length: 10 }).map(v => {
          from++
          return {
            label: '王虎' + from,
            value: '王虎' + from
          }
        })
        const data = {
          total: this.total,
          list: list
        }
        callback(data)
      }, 100)
    }
  }
}
</script>
