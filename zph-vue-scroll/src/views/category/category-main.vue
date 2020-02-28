<template>
  <div class="cate-main-contaienr">
    <zph-scroll :data="category.data" ref="scroll" @scroll-end="scrollEnd">
      <div class="cate-main">
        <div class="cate-main-banner" v-if="category.banner">
          <img :src="category.banner.picUrl" alt="" @load="imgloaded">
        </div>
        <div class="section">
          <div
                  class="section-item"
                  v-for="(item, index) in category.data"
                  :key="index"
          >
            <div class="section-item-title">{{ item.name }}</div>
            <div class="section-item-list">
              <div
                      class="section-item-list-item"
                      v-for="(child, childKey) in item.itemList"
                      :key="childKey"
              >
                <a :href="child.linkUrl">
                  <img v-lazy="child.picUrl" alt="">
                  <p>{{ child.name }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </zph-scroll>
    <div class="loading-container" v-show="loading">
      <div class="loading-wrapper">
        <zph-loading/>
      </div>
    </div>
    <zph-backtop :visible="backtopVisible" @click="backtop" />
  </div>
</template>

<script>
import { apiCategoryList } from '@/api/category'
import ZphScroll from '@/base/scroll/scroll'
import ZphLoading from '@/base/loading/loading'
import ZphBacktop from '@/base/backtop/backtop'
export default {
  components: {
    ZphScroll,
    ZphLoading,
    ZphBacktop
  },
  props: {
    cateId: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      category: {
        banner: {},
        data: []
      },
      loading: false,
      backtopVisible: false
    }
  },
  watch: {
    cateId: {
      immediate: true,
      handler(val) {
        this.backtop(0)
        this.getCategoryList()
      },
      loading() {
        this.$refs.scroll.updateScroll()
      }
    }
  },
  methods: {
    // API
    getCategoryList() {
      this.loading = true
      apiCategoryList(this.cateId).then(res => {
        if (res) {
          this.category = res
        } else {
          this.category = {
            banner: {},
            data: []
          }
        }
        this.loading = false
      }).catch((err) => {
        console.log('catch', err)
        // this.loading = false
      })
    },
    imgloaded() {
      this.$refs.scroll.updateScroll()
    },
    backtop(speed) {
      this.$refs.scroll && this.$refs.scroll.scrollToTop(speed)
    },
    scrollEnd(y, swiper) {
      this.backtopVisible = y < 0 && -y > swiper.height
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';
  .cate-main-contaienr{
    width:100%;
    height: 100%;
    position: relative;
  }
  .loading-container{
    width: 100%;
    height: 100%;
    @include flex-center();
    position: absolute;
    left: 0;
    top: 0;
    z-index: $--loading-z-index;
    .loading-wrapper{
      width: 50%;
      border-radius: 4px;
      background: $--modal-background-color;
      padding: 30px;
      color: #fff;
    }
  }
  .cate-main{
    padding: 10px;
    &-banner{
      img{
        width:100%;
      }
    }
  }
  .section{
    &-item{
      &-title{
        line-height: 40px;
        margin-top: 10px;
      }
      &-list{
        @include flex-bettwen(wrap);
        background: #fff;
        &-item{
          text-align: center;
          width:33.33%;
          margin-bottom: 20px;
          img{
            width:70%;
            margin-bottom: 10px;
          }
          p{
            color: $--color-black;
          }
        }
      }
    }
  }
</style>
