<template>
  <div class="home-slider">
    <base-slider
            v-if="sliders.length"
            class="home-slider-scroll"
            ref="swiper"
            pagination
            loop
            :data="sliders"
    >
      <swiper-slide class="slider" v-for="item in sliders" :key="item.picUrl">
        <img :src="item.picUrl" alt="" class="home-slider-img">
      </swiper-slide>
    </base-slider>
    <base-loading v-else />
  </div>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
import BaseSlider from '@/base/slider/slider'
import BaseLoading from '@/base/loading/loading'
import { apiHomeBanner } from '@/api/home'
export default {
  components: {
    BaseSlider,
    BaseLoading,
    swiperSlide
  },
  data() {
    return {
      sliders: [],
      imgloaded: false
    }
  },
  created() {
    this.getSliders()
  },
  methods: {
    // API
    update() {
      return this.getSliders()
    },
    getSliders() {
      return apiHomeBanner().then(res => {
        this.sliders = res
      }).catch(_ => {})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  .home-slider{
    height: 200px;
    .home-slider-scroll{
      height: 100%;
    }
    .slider{
      width:100%;
      @include flex-center();
      background: #2C8DFB;
      &:nth-child(odd) {
        background: #ff6034;
      }
    }
    &-img{
      width:100%;
    }
  }
</style>
