<template>
  <div class="recommend">
    <div class="recommend-title">热卖推荐</div>
    <ul class="recommend-list">
      <li class="recommend-item" v-for="item in list" :key="item.id" :data-id="item.id">
        <router-link class="recommend-link" :to="{name: 'home-product', params: {id: item.id}}">
          <div class="recommend-pic">
            <img v-lazy="item.avatar" alt="" class="recommend-img">
          </div>
          <p>{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import loadhotlist from '@/api/hotlist'
export default {
  components: {
  },
  data() {
    return {
      page: 1,
      size: 10,
      list: [],
      listLoading: false,
      nodata: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // API
    update() {
      this.page = 1
      this.nodata = false
      return this.getList()
    },
    // API
    getList() {
      if (this.listLoading || this.nodata) {
        return Promise.reject(new Error('没有数据了'))
      }
      this.listLoading = true
      console.log('page...' + this.page)
      return new Promise((resolve, reject) => {
        return loadhotlist(this.page, this.size).then(res => {
          setTimeout(() => {
            if (this.page === 1) {
              this.list = res
            } else {
              this.list = this.list.concat(res)
            }
            this.page++
            this.listLoading = false
            this.$emit('loaded', res)
            if (res.length < this.size) {
              this.nodata = true
              reject(new Error('没有数据了'))
            } else {
              resolve(true)
            }
          }, 1000)
        })
      })
    }
  }
}
</script>

<style lang="scss" sceopd>
  @import '../../assets/scss/mixins';
  @import '../../assets/scss/vars';
  .recommend{
    width:100%;
    .loading-container{
      height: 200px;
    }
    &-title{
      text-align: center;
      position: relative;
      font-size: $--font-size-medium2;
      padding: 10px 0;
      &:before, &:after{
        content: '';
        position: absolute;
        top:50%;
        width:40%;
        height: 1px;
        display: block;
        background: #ddd;
      }
      &:before{
        left:0;
      }
      &:after{
        right:0;
      }
    }
    &-list{
      width:100%;
      padding-top: 10px;
      @include flex-bettwen();
      flex-wrap: wrap;
    }
    &-item{
      width:49%;
      margin-bottom: 15px;
      text-align: center;
      position: relative;
    }
    &-pic{
      width:100%;
      padding-top: 100%;
      margin-bottom: 5px;
      position: relative;
    }
    &-img{
      width:100%;
      height: 100%;
      position: absolute;
      left:0;
      top: 0;
    }
  }
</style>
