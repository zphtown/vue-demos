<template>
  <div>
    {{ myMessage }}
  </div>
</template>

<script>
export default {
  props: {
    message: String
  },
  data() {
    return {
      myMessage: this.message
    }
  },
  created() {
    console.log(this.message)
    setTimeout(_ => {
      console.log(this.message)
    }, 2000)
  }
}
</script>
