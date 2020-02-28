<template>
  <div class="zph-tag" @click="tagClick">
    <div class="zph-tag-text">
      <slot></slot>
    </div>
    <i v-if="close" class="iconfont icon-close" @click.stop="closeClick"></i>
  </div>
</template>

<script>
export default {
  name: 'ZphTag',
  props: {
    close: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    tagClick() {
      this.$emit('click')
    },
    closeClick() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';
  @include b(tag) {
    display: inline-block;
    background: #ddd;;
    padding:5px 10px;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 10px;
    &-text{
      display: inline-block;
    }
    &-text ~ .iconfont{
      margin-left: 10px;
    }
  }
</style>
