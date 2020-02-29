<template>
  <div style="height: 100vh;">
    <header class="headerfxied" v-if="headerVisible">I am header</header>
    <cube-scroll
      class="scroll-container"
      :data="list"
      :scrollEvents="['scroll']"
      :options="options"
      @scroll="scroll" >
      <div class="hello">
        <img src="../assets/logo.png" alt="">
        <header ref="header">I am header</header>
        <ul class="list">
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
      </div>
    </cube-scroll>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      options: {
        probeType: 2
      },
      top: 0,
      headerVisible: false
    }
  },
  created () {
    this.init()
  },
  mounted () {
    let top = this.$refs.header.offsetTop
    this.top = top
  },
  methods: {
    init () {
      for (let i = 0; i < 100; i++) {
        this.list.push(i)
      }
    },
    scroll (obj) {
      if (Math.abs(obj.y) >= this.top) {
        this.headerVisible = true
      } else {
        this.headerVisible = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #000;
    color: #fff;
  }
  .headerfxied{
    position: fixed;
    left:0;
    top:0;
  }
  .scroll-container{
    height: 100vh;
  }
  .list li{
    line-height: 40px;
  }
</style>
