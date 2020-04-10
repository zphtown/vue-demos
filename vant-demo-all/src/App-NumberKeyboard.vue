<template>
  <div id="app">
    <van-field
      v-model="value"
      @touchstart.stop="show = true"
      type="tel"
      label="手机号"
    />
    <van-field
      readonly
      clickable
      :value="value"
      @touchstart.native.stop="show = true"
      label="请输入密码"
    />

    <van-number-keyboard
      title="请输入密码"
      v-model="value"
      :show="show"
      :maxlength="6"
      @blur="show = false"
      extra-key="t"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      show: false
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    onInput(value) {
      this.$toast(value);
    },
    onDelete() {
      this.$toast("删除");
    }
  }
};
</script>

<style lang="less">
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
</style>
