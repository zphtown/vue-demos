<template>
  <div class="page qing">
    <router-link to="/page1">to page1</router-link>
  </div>
</template>

<script>
export default {
  name: 'page2',
  created() {
    console.log('page2.created')
  }
}
</script>
