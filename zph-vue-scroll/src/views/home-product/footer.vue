<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" :to="$route.fullPath">
      <i class="iconfont icon-shop"></i>店铺
    </router-link>
    <router-link class="g-tabbar-item" :to="$route.fullPath">
      <i class="iconfont icon-kefu"></i>客服
    </router-link>
    <router-link class="g-tabbar-item" :to="$route.fullPath">
      <i class="iconfont icon-star"></i>收藏
    </router-link>
    <zph-button class="add-cart">加入购物车</zph-button>
    <zph-button class="now-buy">马上抢</zph-button>
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
      border-right: 1px solid $--border-color;
      .iconfont{
        margin-bottom: 3px;
        font-size: $--font-size-big;
      }
      &.router-link-exact-active{
        /*color: $--primary-color;*/
      }
    }
    .add-cart.zph-button{
      border-right: 1px solid $--border-color;
    }
    .add-cart, .now-buy{
      flex: 2;
      border:0;
      padding: 0;
      /*background: linear-gradient();*/
    }
  }
</style>
