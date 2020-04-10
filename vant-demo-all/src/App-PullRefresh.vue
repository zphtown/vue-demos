<template>
  <div id="app">
    <van-pull-refresh
      class="page"
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
};
</script>

<style lang="less">
.page {
  height: 100vh;
}
.no-center {
  text-align: left;
}
.margin {
  margin: 20px 0;
  text-align: center;
}
.van-demo-slide {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  background-color: #1989fa;
  border-radius: 3px;
}
.img-icon {
  height: 20px;
}
.van-doc-demo-block__title {
  padding: 32px 16px 16px;
}
</style>
