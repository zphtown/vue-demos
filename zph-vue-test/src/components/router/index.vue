<template>
  <div class="page blue">
    {{$route.params}} <br/>
    {{$route.query}}
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route)
  }
}
</script>
