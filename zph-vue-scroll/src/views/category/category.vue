<template>
  <div class="category">
    <div class="g-header-container">
      <cate-header />
    </div>
    <div class="g-content-container">
      <div class="sliderbar">
        <cate-sliderbar @item-click="getCategory" />
      </div>
      <div class="main">
        <cate-main :cate-id="cateId" />
      </div>
    </div>
  </div>
</template>

<script>
import CateHeader from './category-header'
import CateSliderbar from './category-sliderbar'
import CateMain from './category-main'
import {categoryNames} from './config'
export default {
  name: 'Category',
  components: {
    CateHeader,
    CateSliderbar,
    CateMain
  },
  data() {
    return {
      cateId: categoryNames[0].id
    }
  },
  methods: {
    getCategory(id) {
      this.cateId = id
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  @import '../../assets/scss/mixins';
  .category{
    width:100%;
    height: 100%;
    background: $--background-color2;;
    .g-content-container {
      display: flex;
    }
    .sliderbar{
      width:90px;
      height: 100%;
      border-right:1px solid $--border-color;
    }
    .main{
      flex:1;
      height: 100%;
    }
  }
</style>
