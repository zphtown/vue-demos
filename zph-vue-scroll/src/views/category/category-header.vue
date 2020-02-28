<template>
  <base-navbar class="category-search">
    <div slot="center">
      <base-search-box
        slot="center"
        placeholder="请输入你要搜索的内容"
        fake
        @click.native="$router.push('/search')"
      />
    </div>
    <i class="iconfont icon-msg" slot="right"></i>
  </base-navbar>
</template>

<script>
import BaseNavbar from '@/base/navbar/navbar'
import BaseSearchBox from '@/base/search-box/search-box'
export default {
  name: 'category-header',
  components: {
    BaseNavbar,
    BaseSearchBox
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/vars';
  @import '../../assets/scss/mixins';
  .category-search{
    background: $--primary-color;
    padding: 10px;
    color: #fff;
    .icon-msg{
      font-size: $--navbar-iconfont-font-size;
    }
  }
</style>
