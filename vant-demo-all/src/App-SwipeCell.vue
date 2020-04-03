<template>
  <van-swipe-cell :before-close="beforeClose">
    <template #left>
      <van-button square type="primary" text="选择" />
    </template>
    <van-cell :border="false" title="单元格" value="内容" />
    <template #right>
      <van-button square type="danger" text="删除" />
    </template>
  </van-swipe-cell>
</template>

<script>
export default {
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
</script>
