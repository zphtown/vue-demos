<template>
  <div class="page">
    <van-skeleton title avatar :row="3" :loading="loading">
      <div>实际内容</div>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(_ => {
      this.loading = false
    }, 2000)
  },
  methods: {

  }
}
</script>

<style scoped>
  .page{
    background: #fff;
    width:100vw;
    height: 100vh;
  }
</style>
