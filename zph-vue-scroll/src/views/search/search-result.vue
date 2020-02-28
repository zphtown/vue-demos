<template>
  <div>
    <search-list :data="queryData" prop v-if="queryData.length && !queryLoading" @itemClick="itemClick" />
    <div class="loading-container" v-if="queryLoading">
      <zph-loading />
    </div>
    <div class="loading-container" v-if="!queryData.length && !queryLoading">
      <div class="nodata">暂无数据</div>
    </div>
  </div>
</template>

<script>
import historyHelper from '@/assets/js/history-helper'
import {apiSearchResult} from '@/api/search'
import SearchList from './components/search-list'
import ZphLoading from '@/base/loading/loading'
export default {
  components: {
    SearchList,
    ZphLoading
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      queryData: [],
      queryLoading: false
    }
  },
  watch: {
    query() {
      this.init()
    }
  },
  methods: {
    init() {
      this.page = 1
      console.log('init')
      return this.search()
    },
    search() {
      console.log('search=' + this.query)
      const input = this.query
      this.queryLoading = true
      return apiSearchResult(input).then(res => {
        this.queryLoading = false
        this.queryData = res
        this.$emit('loaded', res)
        historyHelper.add(input)
        return Promise.resolve(res)
      }).catch(() => {
        this.queryLoading = false
      })
    },
    itemClick() {
      alert('暂无后续逻辑')
    }
  }
}
</script>

<style scoped>
  .loading-container{
    height: 200px;
  }
</style>
