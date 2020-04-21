<template>
  <div>
    <div class="tab">
      <span class="tab-item" @click="tabValue = 0">tab1</span>
      <span class="tab-item" @click="tabValue = 1">tab2</span>
    </div>
    <keep-alive>
      <Child2 v-if="tabValue === 0"></Child2>
      <div v-else-if="tabValue === 1" class="content2">
        <h1>
          content2
        </h1>
        <Child></Child>
      </div>
    </keep-alive>
  </div>
</template>

<style scoped>
  .tab{
    margin-bottom:20px;
  }
  .tab-item{
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>

<script>
import Child from './child'
import Child2 from './child2'
export default {
  components: {
    Child,
    Child2
  },
  data() {
    return {
      tabValue: 0
    }
  },
  created() {

  },
  mounted() {
  }
}
</script>
