<template>
  <div class="me">
    <div class="g-header-container">
      <zph-navbar title="购物车">
<!--        <i class="iconfont icon-msg" slot="right" />-->
      </zph-navbar>
    </div>
    <div class="g-content-container">
      <zph-scroll ref="scroll">
        <img src="./cart.png" class="img" @loaded="loaded" />
      </zph-scroll>
    </div>
  </div>
</template>

<script>
import ZphScroll from '@/base/scroll/scroll'
import ZphNavbar from '@/base/navbar/navbar'
export default {
  name: 'Cart',
  components: {
    ZphScroll,
    ZphNavbar
  },
  methods: {
    loaded() {
      this.$refs.scroll.updateScroll()
    }
  }
}
</script>

<style scoped>
  .img{
    width:100%;
  }
  .me{
    width:100%;
    height: 100%;
  }
</style>
