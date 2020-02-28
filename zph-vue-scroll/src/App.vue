<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <z-footer />
    </div>
  </div>
</template>

<script>

import ZFooter from '@/components/z-footer/z-footer'
export default {
  components: {
    ZFooter
  }
}
</script>

<style lang="scss">
</style>
