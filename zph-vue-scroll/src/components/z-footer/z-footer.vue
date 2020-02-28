<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-shouye"></i>首页
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-category"></i>分类
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icon-cart"></i>购物车
    </router-link>
    <router-link class="g-tabbar-item" to="/me">
      <i class="iconfont icon-me"></i>我的
    </router-link>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  @import '../../assets/scss/mixins';
  .g-tabbar{
    width:100%;
    height: $--navbar-height;
    background: #fff;
    display: flex;
    font-size: $--font-size-mini;
    &-item{
      flex:1;
      @include flex-center(column);
      .iconfont{
        margin-bottom: 3px;
        font-size: $--font-size-big;
      }
      &.router-link-exact-active{
        color: $--primary-color;
      }
    }
  }
</style>
