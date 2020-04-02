<template>
  <div id="app">
    <van-pull-refresh class="page" v-model="isLoading" :head-height="80" @refresh="onRefresh">
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img
                class="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
                :style="{ transform: `scale(${props.distance / 80})` }"
        />
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img
                class="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
        />
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <img
                class="doge"
                src="https://img.yzcdn.cn/vant/doge-fire.jpg"
        />
      </template>
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
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
}
</script>

<style lang="less">
  .doge{
    width:100px
  }
  .page{
    height: 100vh;
  }
  .no-center{
    text-align: left;
  }
  .margin{
    margin: 20px 0;
    text-align: center;
  }
  .van-demo-slide{
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
  .van-doc-demo-block__title{
    padding: 32px 16px 16px;
  }
</style>
