<template>
  <div class="menu-list">
    <van-cell-group>
      <van-cell v-for="item in menus" :key="item.path" :title="item.meta ? item.meta.title : item.name" value="内容" />
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
  Button as VanButton,

} from 'vant'
export default {
  name: 'Home',
  components: {
    VanButton
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
  .menu-list{
    padding: 30px 0;
  }
  .menu-item{
    margin-bottom: 40px;
    display: block;
    width: 100%;
    font-size:14px;
  }
</style>
