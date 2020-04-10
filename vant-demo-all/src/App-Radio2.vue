<template>
  <div id="app">
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="单选框 1" clickable @click="radio = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="单选框 2" clickable @click="radio = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1"
    };
  },
  methods: {}
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
.img-icon {
  height: 20px;
}
.van-doc-demo-block__title {
  padding: 32px 16px 16px;
}
</style>
