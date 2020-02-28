<template>
  <swiper :keyId="keyId" :options="swiperOptions" ref="scroll" class="wrapper">
    <slot/>
    <div v-if="pagination" class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper } from 'vue-awesome-swiper'
export default {
  name: 'ZphSilder',
  components: {
    swiper
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
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) > -1
      }
    },
    loop: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3000,
      validator(val) {
        return val >= 0
      }
    },
    pagination: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    data(newVal) {
      if (!newVal.length) return
      this.keyId = Math.random()
      this.$nextTick(() => {
        const swiper = this.$refs.scroll.swiper
        swiper.slideTo(0, 0, false)
        this.swiperOptions.loop = this.data.length === 1 ? false : this.loop
      })
    }
  },
  created() {
    this.keyId = Math.random()
    this.swiperOptions = {
      watchOverflow: true,
      direction: this.direction,
      autoplay: this.interval ? {
        delay: this.interval,
        disableOnInteraction: false
      } : false,
      slidesPerView: 1,
      loop: this.data.length <= 1 ? false : this.loop,
      // mousewheel: true,
      // 参数选项,显示小点
      pagination: {
        el: this.pagination ? '.swiper-pagination' : null,
        clickable: true
      }
    }
  }
}
</script>

<style lang="scss">
</style>
