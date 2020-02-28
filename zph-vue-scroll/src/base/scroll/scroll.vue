<template>
  <swiper
    :options="swiperOptions"
    ref="scroll"
    class="zph-scroll"
  >
    <div class="zph-scroll-pull-down" v-if="pullDown">
      <base-loading :auto-loading="false" inline :text="pullDownText" ref="pullDownLoading" />
<!--      <div class="zph-scroll-pull-down-text" v-text="pullDownTextMy"></div>-->
    </div>
    <swiper-slide>
      <slot/>
      <div class="zph-scroll-pull-up" v-if="pullUp">
        <div class="nodata" v-if="nodata">{{ nodataText }}</div>
        <base-loading inline ref="pullUpLoading" v-else />
      </div>
    </swiper-slide>

    <div v-if="scrollbar" class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @include b(scroll) {
    width:100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .swiper-slide{
      height: auto;
    }
  }
</style>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BaseLoading from '@/base/loading/loading'
import {
  PULL_DOWN_TEXT_INIT,
  PULL_DOWN_TEXT_START,
  PULL_DOWN_TEXT_ING,
  PULL_DOWN_TEXT_END,
  PULL_DOWN_DISTANCE,
  // PULL_UP_TEXT_INIT,
  // PULL_UP_TEXT_START,
  // PULL_UP_TEXT_ING,
  PULL_UP_TEXT_NO_MORE
} from './config'
export default {
  name: 'ZphScroll',
  components: {
    swiper,
    swiperSlide,
    BaseLoading
  },
  props: {
    data: {
      type: [Array, Object],
      default() {
        return []
      }
    },
    direction: {
      type: String,
      default: 'vertical',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) > -1
      }
    },
    scrollbar: {
      type: Boolean,
      default: true
    },
    pullDown: {
      type: Boolean,
      default: false
    },
    pullDownText: {
      type: String,
      default: PULL_DOWN_TEXT_INIT
    },
    pullUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nodata: false,
      pulling: false
    }
  },
  watch: {
    data() {
      this.updateScroll()
    }
  },
  created() {
    this.init()
  },
  methods: {
    // API 更新滚动条
    updateScroll() {
      this.$nextTick(() => {
        this.$refs.scroll && this.$refs.scroll.swiper.update()
      })
    },
    // API返回顶部
    scrollToTop(speed, runCallbacks) {
      const swiper = this.$refs.scroll.swiper
      swiper.slideTo(0, speed === undefined ? swiper.params.speed : speed, runCallbacks)
    },

    // 参数初始化
    init() {
      this.nodataText = PULL_UP_TEXT_NO_MORE
      this.swiperOptions = {
        setWrapperSize: true,
        direction: this.direction,
        freeMode: true,
        slidesPerView: 'auto',
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
        mousewheel: true,
        on: {
          transitionEnd: this.transitionEnd,
          touchEnd: this.touchEnd,
          sliderMove: this.scroll,
          momentumBounce: this.momentumBounce,
          touchStart: function (event) {
            event.stopPropagation()
          }
        }
      }
    },
    // 滚动中
    scroll() {
      if (this.pulling) {
        return
      }
      const swiper = this.$refs.scroll.swiper
      this.$emit('scroll', swiper.translate, swiper)
      const y = swiper.translate
      if (y > 0) {
        if (!this.pullDown) return
        if (swiper.translate > PULL_DOWN_DISTANCE) {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
        }
      }
    },
    // 动画结束操作
    transitionEnd() {
      const swiper = this.$refs.scroll.swiper
      this.$emit('scroll-end', swiper.translate, swiper)
    },
    // 停止触摸，下拉刷新操作
    touchEnd() {
      if (this.pulling) {
        return
      }
      const swiper = this.$refs.scroll.swiper
      const y = swiper.translate
      if (y > 0) { // 刷新
        if (!this.pullDown) {
          return false
        }
        if (this.pullDown && y > PULL_DOWN_DISTANCE) {
          this.pulling = true
          this.nodata = false
          swiper.params.allowTouchMove = false // 不允许触摸滑动
          swiper.setTransition(swiper.params.speed)
          swiper.setTranslate(PULL_DOWN_DISTANCE)
          swiper.params.virtualTranslate = true // 定住swiper
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING)
          this.$refs.pullDownLoading.setAutoLoading(true)
          this.$emit('pull-down', this.pullDownEnd)
        }
      }
    },
    // 下拉结束操作
    pullDownEnd() {
      this.pulling = false
      const swiper = this.$refs.scroll.swiper
      swiper.params.allowTouchMove = true // 允许触摸
      swiper.params.virtualTranslate = false // 取消定住不给回弹
      this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END)
      this.$refs.pullDownLoading.setAutoLoading(false)
      swiper.setTransition(swiper.params.speed)
      swiper.setTranslate(0)
      setTimeout(() => {
        this.$emit('pull-down-transition-end')
      }, swiper.params.speed)
    },
    // 开始上拉
    // view-source:https://www.swiper.com.cn/demo/refresh-and-load-swiper4.x.html
    momentumBounce() {
      const swiper = this.$refs.scroll.swiper
      if (swiper.translate > 0 || this.pulling || !this.pullUp) return
      const maxScrollHeight = parseInt(swiper.$wrapperEl.css('height')) - swiper.height
      if (Math.abs(swiper.translate) >= maxScrollHeight) { // 判断是否到底最底部
        this.pulling = true
        swiper.setTransition(swiper.params.speed)
        swiper.setTranslate(-maxScrollHeight)
        swiper.allowTouchMove = false // 禁止触摸
        swiper.params.virtualTranslate = true // 定住不给回弹
        this.$emit('pull-up', (nodata) => {
          if (nodata) {
            this.nodata = true
          }
          this.pulling = false
          swiper.allowTouchMove = true // 允许触摸
          swiper.params.virtualTranslate = false // 取消定住不给回弹
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';
  @include b(scroll) {
    position: relative;
    &-pull-down{
      width:100%;
      position: absolute;
      left:0;
      bottom: 100%;
      text-align: center;
      height: $--pull-down-height
    }
    &-pull-up{
      width:100%;
      text-align: center;
      padding: 20px;
    }
  }
</style>
