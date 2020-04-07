<template>
  <div class="page">
    <van-cell-group>
      <van-cell class="demo" v-for="item in menus" :key="item.path" :title="item.meta ? item.meta.title : item.name" value="内容" />
    </van-cell-group>
<!--    <van-button-->
<!--      v-for="item in menus"-->
<!--      :key="item.path"-->
<!--      class="menu-item"-->
<!--      :to="item.path"-->
<!--      size="small"-->
<!--      type="primary"-->
<!--      icon="location-o"-->
<!--      text="你好"-->
<!--      replace-->
<!--    >-->
<!--      {{ item.meta ? item.meta.title : item.name  }}-->
<!--    </van-button>-->
  </div>
</template>


<script>
import {
  Button,
  CellGroup,
  Cell
} from 'vant'

console.log(CellGroup)
export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  data () {
    return {
      menus: []
    }
  },
  created () {
    const routes = this.$router.options.routes
    this.menus = routes.filter(v => {
      return (v.meta && v.meta.menu) || v.meta === undefined
    })
  }
}
</script>

<style lang="less" scoped>
.page{
  width:100vw;
  height: 100vh;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  .demo{
    background: #f2f2f2;
    border-radius: 100px;

  }
}
</style>
