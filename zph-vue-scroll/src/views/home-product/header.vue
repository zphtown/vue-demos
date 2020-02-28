<template>
  <zph-navbar
          v-if="visible"
          class="home-search"
          ref="search"
          back
  >
    <div class="title" slot="center">商品详情</div>
    <i class="iconfont icon-cart" slot="right"></i>
  </zph-navbar>
</template>

<script>
import ZphNavbar from '@/base/navbar/navbar'
const max = 300
export default {
  name: 'HomeSearch',
  components: {
    ZphNavbar
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    toggleVisible(flag) {
      this.visible = flag
    },
    setBg(y) {
      if (this.visible) {
        this.$nextTick(() => {
          if (y >= 0) {
            this.$refs.search.$el.style.background = `transparent`
          } else {
            y = parseFloat(Math.abs(y) / max).toFixed(1)
            y = Math.min(y, 1)
            this.$refs.search.$el.style.background = `rgba(225,0,0, ${y})`
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  @import '../../assets/scss/mixins';
  .home-search{
    color: #fff;
  }

</style>
