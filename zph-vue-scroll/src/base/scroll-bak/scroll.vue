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
    </swiper-slide>
    <div class="zph-scroll-pull-up" :class="{nodata: stopPullingUp}" v-if="pullUp">
      <base-loading :auto-loading="false" inline :text="pullDownText" ref="pullUpLoading" />
    </div>
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
  PULL_UP_TEXT_INIT,
  PULL_UP_TEXT_START,
  PULL_UP_TEXT_ING,
  PULL_UP_TEXT_END,
  PULL_UP_DISTANCE,
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
      type: Array,
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
    pullUpText: {
      type: String,
      default: PULL_UP_TEXT_INIT
    },
    pullUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      stopPullingUp: false,
      pulling: false,
      swiperOptions: {
        setWrapperSize: true,
        direction: this.direction,
        freeMode: true,
        slidesPerView: 'auto',
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
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
    }
  },
  watch: {
    data() {
      this.updateScroll()
    },
    stopPullingUp() {
      console.log('stopPullingUp...')
      this.updateScroll()
    }
  },
  methods: {
    // API
    updateScroll() {
      this.$nextTick(() => {
        this.$refs.scroll && this.$refs.scroll.swiper.update()
      })
    },
    // API返回顶部
    scrollToTop(speed, cb) {
      const swiper = this.$refs.scroll.swiper
      swiper.slideTo(0, speed || swiper.params.speed, cb)
    },
    scroll() {
      if (this.pulling) {
        return
      }
      const swiper = this.$refs.scroll.swiper
      this.$emit('scroll', swiper.translate, swiper)
      const y = swiper.translate
      const allHeight = parseInt(swiper.$wrapperEl.css('height').replace('px'))
      if (y > 0) {
        if (!this.pullDown) return
        if (swiper.translate > PULL_DOWN_DISTANCE) {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
        }
      } else if (swiper.isEnd) {
        if (!this.pullUp || this.stopPullingUp) return
        if (Math.abs(y) + swiper.height - allHeight > PULL_UP_DISTANCE) {
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START)
        } else {
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT)
        }
      }
    },
    transitionEnd() {
      const swiper = this.$refs.scroll.swiper
      this.$emit('scroll-end', swiper.translate, swiper)
    },
    touchEnd() {
      if (this.pulling) {
        return
      }
      const swiper = this.$refs.scroll.swiper
      const totalHeight = parseInt(swiper.$wrapperEl.css('height').replace('px'))
      const y = swiper.translate
      if (y > 0) { // 刷新
        if (!this.pullDown) {
          return false
        }
        if (this.pullDown && y > PULL_DOWN_DISTANCE) {
          this.pulling = true
          this.stopPullingUp = false
          swiper.params.allowTouchMove = false // 不允许触摸滑动
          swiper.setTransition(swiper.params.speed)
          swiper.setTranslate(PULL_DOWN_DISTANCE)
          swiper.params.virtualTranslate = true // 定住swiper
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING)
          this.$refs.pullDownLoading.setAutoLoading(true)
          this.$emit('pull-down', this.pullDownEnd)
          this.$refs.pullUpLoading.setIndicator(true)
          setTimeout(() => {
            this.$emit('pull-down-transition-end')
          }, swiper.params.speed)
        }
      } else if (swiper.isEnd) { // 更多
        if (!this.pullUp || this.stopPullingUp) {
          return false
        }
        const isPullUp = Math.abs(y) + swiper.height - totalHeight > PULL_UP_DISTANCE
        if (isPullUp) {
          this.pulling = true
          swiper.params.allowTouchMove = false // 不允许触摸滑动
          swiper.setTransition(swiper.params.speed)
          swiper.setTranslate(-(totalHeight - swiper.height + PULL_UP_DISTANCE))
          swiper.params.virtualTranslate = true // 定住swiper
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING)
          this.$refs.pullUpLoading.setAutoLoading(true)
          this.$emit('pull-up', this.pullDownEnd)
        }
      }
    },
    pullDownEnd(nodata) {
      this.pulling = false
      const swiper = this.$refs.scroll.swiper
      swiper.params.allowTouchMove = true // 允许触摸滑动。设为false时，slide无法滑动
      swiper.params.virtualTranslate = false // 虚拟的位移。当你启用这个参数，Slide不会移动，但是Swiper还是在运行
      swiper.setTransition(swiper.params.speed)
      if (swiper.translate >= 0) {
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END)
        this.$refs.pullDownLoading.setAutoLoading(false)
        swiper.setTranslate(0)
      } else {
        if (nodata) {
          this.stopPullingUp = nodata
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_NO_MORE)
          this.$refs.pullUpLoading.setIndicator(false)
        } else {
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END)
        }
        this.$refs.pullUpLoading.setAutoLoading(false)

        swiper.setTranslate(swiper.translate - PULL_UP_DISTANCE)
      }
    },
    momentumBounce() {
      const swiper = this.$refs.scroll.swiper
      // const allHeight = swiper.$wrapperEl.css('height')
      if (swiper.translate) {
        // swiper.allowTouchMove = false // 禁止触摸
        // swiper.params.virtualTranslate = true // 定住不给回弹
      //   setTimeout(function(){//模仿AJAX
      //     for(m=0;m<20;m++){
      //       swiper.appendSlide('<div class="swiper-slide">moreSlide'+(times*20+m+1)+'</div>');
      //     }
      //     swiper.params.virtualTranslate=false;
      //     swiper.allowTouchMove= true;
      //     times++
      //   },1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @include b(scroll) {
    position: relative;
    &-pull-down, &-pull-up{
      width:100%;
      position: absolute;
      left:0;
      text-align: center;
      padding: 20px;
    }
    &-pull-down{
      bottom: 100%
    }
    &-pull-up{
      top: 100%;
    }
  }
</style>
