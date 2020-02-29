<template>
  <div class="page scroll" v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <ul>
      <li class="preview-item" v-for="item in data" :key="item.partyId" @click="$router.push('/preview-detail/' + item.partyId)">
        <img class="logo" :src="item.partyAvatarUrl" alt="">
        <div class="content">
          <div class="title">{{item.partyTitle}}</div>
          <div class="grid-item time-price">
            <div class="grid-item">
              <div class="time-icon"></div>
              <span class="text">{{item.partyTimeText}}</span>
            </div>
            <div class="price">
              {{item.partyPrice==='0' ? '免费' : item.partyPrice+'元'}}
            </div>
          </div>
          <div class="grid-item location-addr-apply">
            <div class="grid-item">
              <div class="location-icon"></div>
              <div class="text">{{item.partyAddress}}</div>
            </div>
            <div class="apply" :class="{holding: item.partyStatus !== 'APPLYING'}">{{item.partyStatusText}}</div>
          </div>
        </div>
      </li>
    </ul>
    <BaseLoading v-show="loading" title=""></BaseLoading>
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
import { getPreviewList } from '@/api/preview'
import BaseLoading from '@/base/loading/loading'

export default {
  components: {
    BaseLoading
  },
  directives: {
    infiniteScroll
  },
  data () {
    return {
      data: [],
      busy: false,
      loading: false,
      page: 0,
      limit: 10
    }
  },
  methods: {
    loadMore: function () {
      if (this.busy) return
      this.busy = true
      this.loading = true
      let loading = null
      if (this.page === 0) {
        loading = this.$toast({loading: true})
        loading.show()
      }
      this.page++
      getPreviewList({ page: this.page, limit: this.limit }).then(res => {
        if (this.page === 1 && loading) {
          loading.hide()
        }
        this.data = this.data.concat(res.list)
        if (res.list.length < this.limit || res.pageNum >= Math.ceil(res.total * res.pageSize)) {
          this.busy = true
        } else {
          this.busy = false
        }
        this.loading = false
      }).catch(_ => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "./preview-list.styl"
</style>
