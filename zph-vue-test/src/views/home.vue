<template>
  <div class="home">
    <div class="home-menu-container">
      <home-menu></home-menu>
    </div>
    <div class="home-right">
      <scrollbar>
        <div class="home-right-top">
          <home-top></home-top>
        </div>
        <div class="home-right-main">
          <router-view></router-view>
        </div>
      </scrollbar>
    </div>
  </div>
</template>

<script>
import Scrollbar from '@/components/Scrollbar'
import HomeMenu from './Menu'
import HomeTop from './Top'
export default {
  components: {
    HomeMenu,
    HomeTop,
    Scrollbar
  },
  data() {
    return {
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
  .home{
    display: flex;
    width:100%;
    height: 100%;
  }
  .home-menu-container{
    background: rgb(84, 92, 100);
    transition: .3s ;
    height: 100%;
  }
  .home-right{
    display: flex;
    flex-direction: column;
    transition: .3s;
    flex: 1;
    height: 100%;
  }
  .home-right-top{
  }
  .home-right-main{
    height: calc(100vh - #{$--home-top-height});
    background: #f5f5f5;
  }
</style>
