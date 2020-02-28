<template>
  <transition name="backtop">
    <div class="zph-backtop" v-show="visible" @click="backtop">
      <i class="iconfont icon-up"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ZphBacktop',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backtop() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';

  @include b(backtop) {
    position: fixed;
    right:20px;
    bottom:80px;
    width:40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: $--backtop-z-index;
    border-radius: 100%;
    background: rgba(0,0,0,.7);
    font-size: $--font-size-big2;
    color: #fff;
  }
  .backtop{
    &.v-enter, &.v-leave{
      opacity: 0;
    }
    &.v-enter-active, &v-leave-active{
      transition: all .3s;
    }
  }
</style>
