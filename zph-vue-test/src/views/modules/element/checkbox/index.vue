<template>
  <div class="page checkbox-test red">
    <child :data="photos">
      <template slot-scope="{ item }">
        <input type="checkbox" value="haha" v-model="item.checked" />
      </template>
    </child>
    <el-button @click="getChecked">收获</el-button>
  </div>
</template>

<script>
import child from './child'
export default {
  components: { child },
  data() {
    return {
    }
  },
  computed: {
    photos() {
      return this.$store.state.photos
    }
  },
  methods: {
    getChecked() {
      // console.log(this.photos.filter(v => v.checked))
    }
  }
}
</script>

<style lang="css" scoped>
  .checkbox-test{
    padding:30px;
    text-align: center;
  }
  .el-button{
    margin-top: 20px;
  }
</style>
