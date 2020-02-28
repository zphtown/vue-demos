<template>
  <div class="zph-loading" :class="{'zph-loading-inline': inline}">
    <slot name="image"><i v-if="indicatorSelf" class="iconfont icon-loading zph-loading-indicator" :class="{'ani-loading': autoLoadingSelf}"></i></slot>
    <span class="zph-loading-text" v-if="loadingText" v-text="loadingText" />
  </div>
</template>

<script>
export default {
  name: 'ZphLoading',
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    indicator: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '正在加载中...'
    },
    autoLoading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loadingText: this.text,
      autoLoadingSelf: this.autoLoading,
      indicatorSelf: this.indicator
    }
  },
  watch: {
    text() {
      this.loadingText = this.text
    }
  },
  methods: {
    // api
    setText(text) {
      this.loadingText = text
    },
    // api
    setAutoLoading(flag) {
      this.autoLoadingSelf = flag
    },
    // api
    setIndicator(flag) {
      this.indicatorSelf = flag
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';
  @include b(loading) {
    font-size: $--font-size-big;
    overflow: hidden;
    width: 100%;
    height: 100%;
    @include flex-center(column);
    &.zph-loading-inline{
      flex-direction: row;
      .zph-loading-indicator ~ .zph-loading-text{
        margin-top:0;
        margin-left: 5px;
      }
    }
    &-indicator{
      font-size: $--font-size-big2;
    }
    &-text{
      font-size: $--font-size-default;
    }
    &-indicator ~ &-text{
      margin-top:5px;
    }
  }

</style>
