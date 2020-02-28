<template>
  <base-scroll>
    <div class="category-sliderbar">
      <ul class="category-sliderbar-container">
        <li
                class="category-sliderbar-item"
                v-for="(item, index) in categoryNames"
                :key="index"
                :class="{active: curId === item.id}"
                @click="itemClick(item.id)"
        >
          {{item.title}}
        </li>
      </ul>
    </div>
  </base-scroll>
</template>

<script>
import BaseScroll from '@/base/scroll/scroll'
import { categoryNames } from './config'
export default {
  components: {
    BaseScroll
  },
  data() {
    return {
      curId: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.categoryNames = categoryNames
    },
    itemClick(id) {
      this.curId = id
      this.$emit('item-click', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  @import '../../assets/scss/mixins';
  .category-sliderbar{
    width:100%;
    padding: 10px 0;
    &-item{
      height:50px;
      line-height: 50px;
      text-align: center;
      font-size: $--font-size-medium;
      background: #fff;
      &.active{
        color: $--primary-color;
        font-weight: 700;
        background: $--background-color2;
      }
    }
  }
</style>
