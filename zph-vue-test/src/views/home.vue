<template>
  <div class="home">
    <div class="home-menu-container">
      <home-menu></home-menu>
    </div>
    <div class="home-right">
      <div class="home-right-top">
        <home-top></home-top>
      </div>
      <div class="home-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HomeMenu from './components/menu'
import HomeTop from './components/top'
export default {
  components: {
    HomeMenu,
    HomeTop
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .home{
    display: flex;
  }
  .home-menu-container{
    height: 100vh;
    background: rgb(84, 92, 100);
    transition: .3s ;
    overflow: auto;
  }
  .home-right{
    display: flex;
    flex-direction: column;
    transition: .3s;
    flex: 1;
  }
  .home-right-top{
  }
  .home-main{
    padding: 20px;
    flex:1;
  }
</style>
