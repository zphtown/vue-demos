<template>
  <div>
    <div v-for="(item, prop) in columns">
      {{ item }} {{ prop }}
    </div>
    <el-table :data="data">
      <el-table-column
        v-for="(item, prop) in columns"
        :key="prop"
        :label="typeof(item) === 'string' ? item : item.label "
        :prop="prop"
        :type="typeof(item) === 'string' ? '' : item.type"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
