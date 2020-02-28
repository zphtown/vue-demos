<template>
  <div class="search-history">
    <h1>历史搜索</h1>
    <search-list :data="history" @itemClick="searchItemClick" @close="searchItemClose" />
    <div class="button-area">
      <zph-button icon="delete" v-if="history.length" @click="clearHistory">清空历史搜索</zph-button>
      <div class="nodata" v-else>暂无历史记录</div>
    </div>
  </div>
</template>

<script>
import SearchList from './components/search-list'
import helper from '../../assets/js/history-helper'
import {searchMixin} from '../../assets/js/mixins/search-mixin'
export default {
  name: 'search-history',
  mixins: [searchMixin],
  components: {
    SearchList
  },
  computed: {
    history() {
      return this.$store.state.searchHistory
    }
  },
  methods: {
    clearHistory() {
      helper.clear()
    },
    searchItemClick(item) {
      this.$_searchItemClick(item)
    },
    searchItemClose(item) {
      this.$_searchItemDel(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  @import '../../assets/scss/mixins';
  .search-history {
    background: #fff;
    h1 {
      font-size: $--font-size-medium2;
      font-weight: 700;
      padding: 20px 10px 10px 10px;
    }
    .button-area{
      padding: 20px 20px 10px;
    }
  }
</style>
