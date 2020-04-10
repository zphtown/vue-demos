<script>
export default {
  props: ['id'],
  created() {
    console.log(this.$route.params)
    console.log(this.$props)
  },
  render(h) {
    const lis = Array.apply(null, {length: 10}).map((v, k) => {
      return `<li>${k}</li>`
    }).join('')
    return h('ul', {
      domProps: {
        innerHTML: lis
      }
    })
  }
}
</script>

<style scoped>
  .print-container{
    background:#000;color: #fff;
  }
</style>
