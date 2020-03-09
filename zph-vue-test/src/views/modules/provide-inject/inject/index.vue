<template>
  <div>
    <div :class="{inline: inline}">inject</div>
    <el-button @click="add">add</el-button>
  </div>
</template>

<script>
export default {
  props: {
    inline: Boolean
  },
  inject: ['test'],
  created() {
    // console.log(this.test)
  },
  methods: {
    add() {
      // console.log('inject.add')
      // this.$emit('el.form.add')
    }
  }
}
</script>
