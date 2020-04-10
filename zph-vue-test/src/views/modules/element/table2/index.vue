<template>
  <div class="zph">
    <ex-table :data="data" :search-method="fetchRemoteData" ref="table">
      <el-table-column label="column1" prop="prop1" />
    </ex-table>

    <div class="height:100px"></div>
<!--    <el-pagination-->
<!--      small-->
<!--      layout="prev, pager, next"-->
<!--      :total="50">-->
<!--    </el-pagination>-->
  </div>
</template>

<script>
import ExTable from './table-pagination.js';
const total = 5
export default {
  components: { ExTable },
  data() {
    return {
      data: []
    }
  },
  methods: {
    fetchRemoteData({currentPage, pageSize}, cb) {
      this.data = []
      //currentPage：当前页， pageSize: 每页最大条目数， 用于服务端分页
      //假设http请求数据，结果返回｛data_list: [...], total: ..｝
      //设置表格数据
      let page  = (currentPage-1) * pageSize
      let size = page + pageSize
      size = size < total ? size: total
      setTimeout(_ => {
        for(let i = page; i < size; i++) {
          this.data.push({
            prop1: '第' + (i + 1) + '个'
          })
        }
        cb()
        this.$refs.table.pageTotal = total
      }, 300)


      //设置分页总数
      // const pagination = this.$refs.table.pagination;
      // pagination.total = request.total;
    },
  },
  mounted() {
    this.$refs.table.fetchData();
  }
}
</script>
