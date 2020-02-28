<template>
  <transition name="transition-silide">
    <div class="search">
      <div class="g-header-container">
        <zph-navbar class="search-header" shadow>
          <zph-search-box
                  slot="center"
                  ref="searchBox"
                  :value="searchValue"
                  @query="query"
          />
          <span slot="right" @click="handleCancel">取消</span>
        </zph-navbar>
      </div>
      <div class="g-content-container">
        <zph-scroll
                :data="[hots, queryData, history]"
                ref="scroll"
        >
          <search-result :query="queryValue" @loaded="searchResultLoaded" v-show="queryValue"/>
          <template v-if="!queryValue">
            <search-hot @loaded="hotLoaded" />
            <search-history/>
          </template>
        </zph-scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import ZphNavbar from '@/base/navbar/navbar'
import ZphSearchBox from '@/base/search-box/search-box'
import ZphScroll from '@/base/scroll/scroll'
import SearchHot from './search-hot'
import SearchHistory from './search-history'
import SearchResult from './search-result'

export default {
  components: {
    ZphSearchBox,
    ZphNavbar,
    ZphScroll,
    SearchHot,
    SearchHistory,
    SearchResult
  },
  data() {
    return {
      hots: [],
      queryData: [],
      queryValue: ''
    }
  },
  computed: {
    history() {
      return this.$store.state.searchHistory
    },
    searchValue() {
      return this.$store.state.searchValue
    }
  },
  methods: {
    hotLoaded(res) {
      this.hots = res
    },
    searchResultLoaded(res) {
      this.queryData = res
    },
    query(val) {
      this.queryValue = val
    },
    handleCancel() {
      this.$refs.searchBox.clear()
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  .loading-container{
    height: 200px;
  }
  .search{
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index: $--search-z-index;
    background: $--background-color;
  }
  .search-header{
    /*box-shadow: 0 0 10px 0 $--border-color;*/
  }
</style>
