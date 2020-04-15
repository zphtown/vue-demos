<template>
  <div class="top-user">
    <i class="el-icon-user-solid extend-element"></i>
    <span class="icon-exit extend-element" @click="logout">
       <svg-icon icon="exit2"></svg-icon>
    </span>
  </div>
</template>

<style lang="scss" scoped>
  .extend-element{
    padding: 0 5px;
    line-height: $--home-top-height;
    font-size: 20px;
    cursor: pointer;
  }
  .el-icon-user-solid{
  }
  .icon-exit{
    margin-left: 10px;
    margin-right: 20px;
    color: #f00;
  }
</style>

<script>
export default {
  created() {
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout').then(_ => {
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>
