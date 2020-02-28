<template>
  <div>
    <inject inline/>
  </div>
</template>

<script>
import Inject from '../inject'
export default {
  components: {
    Inject
  },
  provide: {
    test: 'hello world'
  },
  created() {
    this.$on('el.form.add', () => {
      console.log('el.form.add')
    })
  }
}
</script>
