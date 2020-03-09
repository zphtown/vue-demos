<template>
  <el-menu-item v-if="menu.component" :index="menu.name">
    <i v-if="menu.icon" :class="menu.icon"></i>
    <span slot="title">{{ menu.title }}</span>
  </el-menu-item>
  <el-submenu v-else :index="menu.name">
    <template slot="title">
      <i v-if="menu.icon" :class="menu.icon"></i>
      <span slot="title">{{ menu.title }}</span>
    </template>
    <menu-item v-for="child in menu.children" :key="child.name" :menu="child"></menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
