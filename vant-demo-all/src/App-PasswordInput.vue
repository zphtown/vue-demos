<template>
  <div id="app">
    <!-- 密码输入框 -->
    <van-password-input
      :value="value"
      :error-info="errorInfo"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "123",
      showKeyboard: true,
      errorInfo: ""
    };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length === 6) {
        this.errorInfo = "密码错误";
      } else {
        this.errorInfo = "";
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
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
