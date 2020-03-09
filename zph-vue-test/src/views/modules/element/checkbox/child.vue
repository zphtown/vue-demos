<template>
  <div>
    <div class="child-item" v-for="item in data" :key="item.value">
      <span>{{item.label}}</span>
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .child-item{
    text-align: center;
  }
</style>
