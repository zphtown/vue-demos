<template>
  <div class="page green">
    <router-link to="/page2">to page2</router-link>
  </div>
</template>

<script>
export default {
  name: 'page1',
  created() {
    console.log('page1.created')
  }
}
</script>
