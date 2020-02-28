<template>
  <transition name="transition-silide">
    <div class="product">
      <div class="g-header-container">
        <product-header ref="search"/>
      </div>
      <zph-scroll
              class="home-container"
              ref="scroll"
              :data="hots"
              pullDown
              @scroll-end="scrollEnd"
              @pull-down="pullDown"
              @scroll="scroll"
              @pull-down-transition-end="pullDownTransitionEnd"
      >
        <product-slider ref="slider"/>
        <product-main/>
      </zph-scroll>
      <div class="g-footer-container">
        <product-footer/>
      </div>
    </div>
  </transition>
</template>

<script>
import ZphScroll from '@/base/scroll/scroll'
import ProductHeader from './header'
import ProductFooter from './footer'
import ProductSlider from './slider'
import ProductMain from './main'
export default {
  name: 'HomeProduct',
  components: {
    ProductHeader,
    ProductFooter,
    ProductSlider,
    ProductMain,
    ZphScroll
  },
  data() {
    return {
      hots: []
    }
  },
  methods: {
    hotsLoaded(hots) {
      this.hots = hots
    },
    pullDown(end) {
      this.$refs.slider.update().then(end)
    },
    scrollEnd(y, swiper) {
      this.backtopVisible = y < 0 && -y > swiper.height
      this.$refs.search.toggleVisible(y <= 0)
      this.$refs.search.setBg(y)
    },
    backtoTop() {
      this.$refs.scroll.scrollToTop()
    },
    // 隐藏搜索框
    scroll(y, swiper) {
      this.$refs.search.toggleVisible(y <= 0)
      this.$refs.search.setBg(y)
    },
    // 显示搜索
    pullDownTransitionEnd() {
      this.$refs.search.toggleVisible(true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  .product{
    width:100%;
    height: 100%;
    background: $--background-color;
    overflow: hidden;
    position: absolute;
    left:0;
    top:0;
    z-index: $--behind-z-index;
    padding-bottom: $--navbar-height;
  }
  .product-navbar{
    color: #fff;
  }
</style>
