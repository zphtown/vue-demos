<template>
  <div id="app">
    <van-picker
      title="标题"
      :columns="columns"
      show-toolbar
      @cancel="onCancel"
      @confirm="onConfirm"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [{
        text: '浙江',
        children: [{
          text: '杭州',
          children: [{ text: '西湖区' }, { text: '余杭区' }]
        }, {
          text: '温州',
          children: [{ text: '鹿城区' }, { text: '瓯海区' }]
        }]
      }, {
        text: '福建',
        children: [{
          text: '福州',
          children: [{ text: '鼓楼区' }, { text: '台江区' }]
        }, {
          text: '厦门',
          children: [{ text: '思明区' }, { text: '海沧区' }]
        }]
      }]
    };
  },
  methods: {
    onChange(picker, value, index) {
      console.log(value);
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.$toast('取消');
    }
  }
}
</script>

<style lang="less">
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
</style>
