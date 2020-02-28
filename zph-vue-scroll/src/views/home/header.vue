<template>
  <zph-navbar v-if="visible" class="home-search" ref="search">
    <i class="iconfont icon-scan" slot="left"></i>
    <zph-search-box
            slot="center"
            placeholder="请输入你要搜索的内容"
            @click.native="$router.push('/search')"
            fake
    />
    <i class="iconfont icon-msg" slot="right"></i>
  </zph-navbar>
</template>

<script>
import ZphNavbar from '@/base/navbar/navbar'
import ZphSearchBox from '@/base/search-box/search-box'
const max = 300
export default {
  name: 'HomeSearch',
  components: {
    ZphNavbar,
    ZphSearchBox
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
    .iconfont{
      color: #fff;
    }
  }

</style>
