<template>
  <ul class="home-nav">
    <li v-for="(item, index) in navlist" :key="index">
      <img :src="item.img" alt="">
      <p>{{ item.title }}</p>
    </li>
  </ul>
</template>

<script>
import { navlist } from './config'
export default {
  data() {
    return {
    }
  },
  created() {
    this.navlist = navlist
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins';
.home-nav{
  @include flex-bettwen();
  flex-wrap: wrap;
  padding-top: 15px;
  li{
    width:20%;
    @include flex-center(column);
    margin-bottom: 15px;
    img{
      width:60%;
      margin-bottom: 5px;
    }
  }
}
</style>
