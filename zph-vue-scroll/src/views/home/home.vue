<template>
  <div class="home-container">
    <div class="g-header-container">
      <home-search ref="search" />
    </div>
    <zph-scroll
            class="home-container"
            ref="scroll"
            :data="hots"
            pullDown
            pullUp
            @scroll-end="scrollEnd"
            @pull-down="pullDown"
            @pull-up="pullUp"
            @scroll="scroll"
            @pull-down-transition-end="pullDownTransitionEnd"
    >
      <home-slider ref="slider" />
      <home-nav />
      <home-recommend @loaded="hotsLoaded" ref="recommend" />
    </zph-scroll>
    <zph-backtop :visible="backtopVisible" @click="backtoTop"></zph-backtop>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import ZphScroll from '@/base/scroll/scroll'
import ZphBacktop from '@/base/backtop/backtop'
import HomeSlider from './slider'
import HomeSearch from './header'
import HomeNav from './nav'
import HomeRecommend from './recommend'
export default {
  components: {
    ZphScroll,
    ZphBacktop,
    HomeSearch,
    HomeSlider,
    HomeNav,
    HomeRecommend
  },
  data() {
    return {
      hots: [],
      backtopVisible: false
    }
  },
  methods: {
    hotsLoaded(hots) {
      this.hots = hots
    },
    pullDown(end) {
      this.$refs.slider.update().then(() => {
        this.$refs.recommend.update().then(end).catch(() => {
          end()
        })
      })
    },
    pullUp(end) {
      this.$refs.recommend.getList().then(end).catch(() => {
        end(true)
      })
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
  .home-container{
    background: $--background-color;
    width:100%;
    height: 100%;
    .home-content{
      padding: 20px;
    }
  }
</style>
