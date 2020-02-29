<template>
  <div class="preview-list">
    <div class="preview-item">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getPreviewList } from '@/api/preview'
export default {
  name: 'home',
  created () {
    getPreviewList().then(res => {
      console.log(res)
    })
  }
}
</script>
