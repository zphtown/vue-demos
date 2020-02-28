<template>
  <div class="zph-search-box">
    <i class="iconfont icon-search"></i>
    <div class="zph-search-box__input fake" v-if="fake">{{placeholder}}</div>
    <input
            v-else
            ref="input"
            type="text"
            class="zph-search-box__input"
            :placeholder="placeholder"
            :autofocus="autofocus"
            v-model="inputVal"
    >
    <i class="iconfont icon-close" v-if="!fake && inputVal" @click="reset"></i>
  </div>
</template>

<script>
import { throttle } from '@/assets/js/helpers'
export default {
  name: 'ZphSearchBox',
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    },
    fake: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputVal: this.value
    }
  },
  watch: {
    inputVal: throttle(function () {
      this.$emit('query', this.inputVal)
    }),
    value(newVal) {
      this.inputVal = newVal
    }
  },
  // 当组件激活时
  activated() {
    this.$nextTick(() => {
      this.$refs.input && this.$refs.input.focus()
    })
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    clear() {
      this.inputVal = ''
    },
    reset() {
      this.clear()
      this.focus()
    },
    setValue(newVal) {
      this.inputVal = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';
  @include b(search-box) {
    width:100%;
    padding:5px 10px;
    background: #fff;
    border-radius: 30px;
    @include flex-bettwen();
    &__input{
      width:100%;
      margin: 0 10px;
      &.fake{
        text-align: center;
        color: $--color-black2;
      }
    }
    .iconfont, .close{
      display: block;
      width:20px;
      height: 100%;
      @include flex-center()
    }
    .icon-close{
      display: block;
      width:15px;
      height: 15px;
      border-radius: 100%;
      color: $--color-white;
      background: rgba(0,0,0,.3);
      @include flex-center()
    }
  }
</style>
