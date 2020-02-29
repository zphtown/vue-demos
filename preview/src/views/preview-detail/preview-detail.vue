<template>
  <transition appear name="slide">
    <div class="page preview-detail">
      <img class="banner" :src="partyInfo.partyBannerUrl" alt="">
      <div class="party-title">{{ partyInfo.partyTitle }}</div>
      <div class="content">
        <div class="party-brief">{{ partyInfo.partyBrief }}</div>
        <div class="party-item">
          <div>活动费用</div>
          <div>¥ {{partyInfo.partyPrice}}</div>
        </div>
        <div class="party-item">
          <div>活动人数</div>
          <div>{{partyInfo.partyNum}}人</div>
        </div>
        <div class="party-item">
          <div>活动详情</div>
          <div class="detail">查看</div>
        </div>
        <div v-if="partyInfo.partyPrice !== '0' && partyInfo.partyStatus === 'APPLIED'" class="party-item">
          <div class="apply">取消报名</div>
          <div class="refund" @click="refundParty">退款</div>
        </div>
        <div class="time">
          <div class="time-icon"></div>
          <div>{{partyInfo.partyStartTime}}</div>
        </div>
        <div class="location">
          <div class="location-icon"></div>
          <div>{{partyInfo.partyDetailAddress}}</div>
        </div>
      </div>
      <div @click="onApplyParty()" :class="partyInfo.partyStatus==='APPLYING' ? 'footer applying' : 'footer'">
        {{ partyInfo.partyStatus==='APPLYING' ? '立即报名' : partyInfo.partyStatusText }}
      </div>
    </div>
  </transition>
</template>

<script>
import { getPreviewDetail } from '@/api/preview'
export default {
  name: 'PreviewDetail',
  data () {
    return {
      partyInfo: {}
    }
  },
  activated () {
    let loading = this.$toast({loading: true})
    loading.show()
    getPreviewDetail(this.$route.params.partyId).then(res => {
      this.partyInfo = res
      loading.hide()
    }).catch(_ => {
      loading.hide()
    })
  },
  methods: {
    onApplyParty () {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import './preview-detail.styl'
</style>
