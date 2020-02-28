<template>
  <div class="search-hot">
    <h1>热门搜索</h1>
    <div class="search-hot-list" v-if="hots.length">
      <zph-tag class="tag" v-for="(item, index) in hots" :key="index" @click="$_searchItemClick(item.hotWord)">{{item.hotWord}}</zph-tag>
    </div>
    <div class="loading-container" v-else>
      <zph-loading/>
    </div>
  </div>
</template>

<script>
import ZphTag from '@/base/tag/tag'
import ZphLoading from '@/base/loading/loading'
import {searchMixin} from '../../assets/js/mixins/search-mixin'
import {
  apiSearchHot
} from '@/api/search'
export default {
  name: 'search-hot',
  mixins: [searchMixin],
  components: {
    ZphTag,
    ZphLoading
  },
  data() {
    return {
      hots: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      apiSearchHot().then((res) => {
        this.hots = res.hotKeyWord.owner
        this.$emit('loaded', res.hotKeyWord.owner)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  .loading-container{
    height: 100px;
  }
  .search-hot{
    padding: 0 10px ;
    background: #fff;
    margin-top: 10px;
    margin-bottom: 20px;
    h1{
      font-size: $--font-size-medium2;
      font-weight: 700;
      padding-top: 20px;
      padding-bottom: 10px;
    }
    &-list{
      overflow: hidden;
      .tag{
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
</style>
