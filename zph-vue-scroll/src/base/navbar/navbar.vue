<template>
  <div class="zph-navbar" :class="{'is-shadow' : shadow || title}">
    <div class="zph-navbar-left" v-if="$slots.left"><slot name="left" /></div>
    <div class="zph-navbar-left" v-if="back">
      <i class="iconfont icon-left" @click="$router.back()"></i>
    </div>
    <div class="zph-navbar-center" v-if="$slots.center"><slot name="center" /></div>
    <div class="zph-navbar-right" v-if="$slots.right"><slot name="right" /></div>
    <div class="zph-navbar-title" v-if="title">
      <div class="zph-navbar-text" v-text="title"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZphNavbar',
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';
  $distance: 10px;
  @include b(navbar) {
    width:100%;
    height: $--navbar-height;
    background: transparent;
    /*padding: 0 $distance;*/
    @include flex-bettwen();
    font-size: $--navbar-font-size;
    color: $--navbar-color;
    .iconfont{
      font-size: $--navbar-iconfont-font-size;
    }
    @include when(shadow) {
      box-shadow: 0 0 10px 0 $--border-color;
    }
    &-left{
      margin-left: 10px;
      ~ .zph-navbar-right {
        position: static;
      }
      ~ .zph-navbar-center {
        margin-left: $distance;
      }
    }
    &-center{
      flex:1;
      overflow: hidden;
      text-align: center;
      ~ .zph-navbar-right {
        position: static;
        margin-left: $distance;
      }
    }
    &-right{
      position: absolute;
      right:0;
      top:0;
      height: 100%;
      @include flex-center();
      margin-right: 10px;
    }
    &-title{
      position: absolute;
      left:20%;
      right:20%;
      @include flex-center();
      text-align: center;
    }
    &-text{
      width:100%;
      @include ellipsis();
      font-size: $--font-size-big2;
    }
  }
</style>
