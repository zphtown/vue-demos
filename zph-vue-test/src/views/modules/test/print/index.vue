<template>
  <div>
    <Child :message="message"></Child>
    <el-dialog title="print test" :visible.sync="visible">
      <div id="print" class="print-container" v-loading="loading">
        <div>11111111</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      <el-button v-if="printButtonVisible" type="primary" v-print="`#print`">打印</el-button>
    </el-dialog>
    <el-button type="primary" @click="show">展示dialog</el-button>
  </div>
</template>

<script>
import Print from 'vue-print-nb'
import Child from './child'
export default {
  directives: {
    print: Print
  },
  components: {
    Child
  },
  data() {
    return {
      visible: false,
      printButtonVisible: false,
      loading: true,
      index: 0,
      message: '你好'
    }
  },
  created() {
    setTimeout(_ => {
      this.message = '你好好你好好你好好'
    }, 1000)
  },
  methods: {
    show() {
      this.visible = true
      this.loading = true
      this.index++
      this.printButtonVisible = this.index % 2 === 0
      setTimeout(_ => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .print-container{
    background:#000;color: #fff;
  }
</style>
