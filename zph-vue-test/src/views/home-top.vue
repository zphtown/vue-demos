<template>
  <div class="home-top">
    <i v-if="isCollapse" class="collapse el-icon-s-fold" @click="toggleClass(false)"></i>
    <i v-else class="collapse el-icon-s-unfold" @click="toggleClass(true)"></i>

    <div class="home-top-right">
      <TopUser></TopUser>
    </div>
  </div>
</template>

<script>
import TopUser from './home-top-user'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    TopUser
  },
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
  .home-top{
    display: flex;
    height: $--home-top-height;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .collapse{
    line-height: $--home-top-height;
    padding: 0 20px;
    font-size: 20px;
    cursor: pointer;
  }
  .home-top-right{
    position: absolute;
    right: 0;
    top: 0
  }
</style>
