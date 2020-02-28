<template>
<!--  <div class="zph-input"><input type="text" v-model="val"></div>-->
  <div>
    <h1>who are you</h1>
  </div>
</template>

<script>
export default {
  name: 'ZphInput',
  data() {
    return {
      val: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
  .zph-input{
    padding: 10px;
    background: #000;
    color: #fff;
  }
</style>
