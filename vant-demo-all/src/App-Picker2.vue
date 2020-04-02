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
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};
export default {
  data() {
    return {
      columns: [
        { values: Object.keys(citys) },
        { values: citys['浙江'] }
      ]
    };
  },
  methods: {
    onChange(picker, values, index) {
      console.log(values);
      picker.setColumnValues(1, citys[values[0]]);
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
