<template>
  <transition-group class="search-list" name="list" tag="div">
    <div class="search-item"
         v-for="(item) in data"
         :key="prop ? item[0] : item"
         @click="itemClick(prop ? item[0] : item)"
    >
      <div class="left">{{prop ? item[0] : item}}</div>
      <i class="iconfont icon-close" @click.stop="close(prop ? item[1] : item)" v-if="close" />
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'search-list',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    prop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    itemClick(item) {
      this.$emit('itemClick', item)
    },
    close(item) {
      this.$emit('close', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/scss/mixins.scss';
  @import '../../../assets/scss/vars.scss';
  .search-list{
    padding: 10px;
    .search-item {
      @include flex-bettwen();
      padding: 10px 0;
     /* border-bottom: 1px solid $--border-color;*/
    }
    .icon-close{
      padding: 2px 10px;
    }
  }
  .list{
    &-enter-active, &-leave-active{
      transition: all .2s;
    }
    &-enter, &-leave-to{
      opacity: 0;
    }
  }

</style>
