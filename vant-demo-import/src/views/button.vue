<template>
  <div class="home">
    <van-button type="default">default</van-button>
    <van-button size="mini" type="primary">mini</van-button>
    <van-button size="small" type="info">small</van-button>
    <van-button size="large" type="warning">large</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="info">朴素按钮</van-button>
    <van-button plain hairline type="primary">细边框按钮</van-button>
    <van-button plain hairline type="info">细边框按钮</van-button>
    <van-button icon="star-o" type="primary" />
    <van-button icon="star-o" type="primary">按钮</van-button>
    <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">按钮</van-button>
  </div>
</template>

<style lang="less" scoped>
  /deep/ button{
    display: block;
    margin-bottom: 10px;
  }
</style>

<script>
// @ is an alias to /src
import {
  Button as VanButton
} from 'vant'
export default {
  name: 'Button',
  components: {
    VanButton
  }
}
</script>
