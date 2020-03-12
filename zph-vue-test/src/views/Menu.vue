<template>
  <scrollbar>
    <el-menu
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <menu-item v-for="menu in menus" :key="menu.name" :menu="menu"></menu-item>
    </el-menu>
  </scrollbar>
</template>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px
  }
</style>

<script>
import MenuItem from './MenuItem'
import Scrollbar from '@/components/Scrollbar'
import { mapState } from 'vuex'
export default {
  components: {
    MenuItem,
    Scrollbar
  },
  computed: {
    ...mapState({
      menus: state => state.menu.menus,
      isCollapse: state => state.app.isCollapse
    })
  }
}
</script>
