<template>
  <div class="loading">
    <img width="30" height="30" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .loading
    width: 100%
    padding: 20px 0;
    text-align: center
    .desc
      font-size: 24px
      color: #666
</style>
