<template>
  <div class="page yellow">
    <el-menu
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item :index="item.path" v-for="item in routerList" :key="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.path}}</span>
      </el-menu-item>
    </el-menu>

<!--    <div @click="go(item.path)" :class="{active: $route.path === item.path}" class="menu-item" v-for="item in routerList" :key="item.path">{{item.path}}</div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    routerList() {
      return this.$store.state.routes
    }
  },
  watch: {
    routerList() {
      console.log(this.routerList)
    }
  },
  methods: {
    go(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
  .menu-item{
    margin: 10px;
  }
  .active{
    color: red;
  }
</style>
