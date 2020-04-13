<template>
  <div>
    <Child v-if="!loading"></Child>
  </div>
</template>

<script>
import Child from './child'
export default{
  components: {
    Child
  },
  data() {
    return {
      loading: false
    }
  },
  created() {
    this.loading = true
    console.log('parent')
    setTimeout(_ => {
      this.loading = false
    }, 10)
  },
  mounted() {
    console.log('parent mounted')
  }
}
</script>
