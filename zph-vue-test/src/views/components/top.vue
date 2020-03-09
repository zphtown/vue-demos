<template>
  <div class="home-top">
    <i v-if="isCollapse" class="collapse el-icon-s-fold" @click="toggleClass(false)"></i>
    <i v-else class="collapse el-icon-s-unfold" @click="toggleClass(true)"></i>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      isCollapse: state => state.app.isCollapse
    })
  },
  methods: {
    ...mapMutations({
      toggleClass: 'app/SET_IS_COLLAPSE'
    })
  }
}
</script>

<style lang="scss" scoped>
  $top-height: 50px;
  .home-top{
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  .collapse{
    line-height: $top-height;
    height: $top-height;
    padding: 0 20px;
    font-size: 20px;
  }
</style>
