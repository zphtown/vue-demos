<template>
  <button class="zph-button"
    @click="handleClick"
    :class="classArr"
    ref="button"
    :disabled="disabled || loading"
    :autofocus="autofocus"
  >
    <i class="iconfont icon-loading ani-loading" v-if="loading"></i>
    <i class="iconfont pre-icon" :class="`icon-${icon}`" v-if="icon && !loading"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ZphButton',
  components: {
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator(val) {
        return !val || ['primary'].indexOf(val) > -1
      }
    },
    size: {
      type: String,
      validator(val) {
        return !val || ['medium', 'small', 'mini'].indexOf(val) > -1
      },
      default: 'medium'
    }
  },
  data() {
    return {
      classArr: [
        this.type ? 'zph-button--' + this.type : '',
        this.size ? 'zph-button--' + this.size : '',
        this.radius ? 'is-radius' : '',
        this.circle ? 'is-circle' : '',
        this.loading ? 'is-loading' : '',
        this.disabled ? 'is-disabled' : ''
      ]
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }

}
</script>

<style lang="scss" scoped>
  @import './button';
</style>
