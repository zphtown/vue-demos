<template>
  <el-popover
          placement="bottom-start"
          width="500"
          trigger="manual"
          v-model="visible"
  >
    <div v-loading="loading" @click.stop>
      <ul class="select-list-list">
        <li v-for="item in list" :key="item.name" :class="{active: item.value === value}" @click="handClick(item.value)">
          {{ item.label }}
        </li>
      </ul>
      <el-pagination
              layout="prev, pager, next"
              :total="total"
              @current-change="getList"
      >
      </el-pagination>
    </div>
    <el-input
            slot="reference"
            ref="input"
            v-model="myValue"
            readonly
            clearable
            @click.native.stop
            @focus.stop="handleOpen"
            style="width:200px;cursor:pointer"
            class="myinput"
            :suffix-icon="`el-icon-arrow-down ${visible ? 'suffix-icon--open' : ''}`"
    />
  </el-popover>
</template>

<style lang="scss" scoped>
  .select-list-list{
    li {
      padding: 10px;
      cursor: pointer;
      &.active{
        color: $--color-primary;
      }
    }
  }
  /deep/ .el-icon-arrow-down{
    transition: all .5s;
  }
  /deep/ .suffix-icon--open {
    transform: rotate(-180deg)
  }
</style>

<script>
export default {
  props: {
    value: String,
    remote: Function
  },
  data() {
    return {
      list: [],
      limit: 10,
      total: 0,
      loading: false,
      visible: false,
      allList: []
    }
  },
  computed: {
    myValue() {
      let r = this.allList.find(v => v.value === this.value)
      return r ? r.label : this.value
    }
  },
  created() {
    document.body.addEventListener('click', this.hide, false)
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.hide, false)
  },
  methods: {
    hide() {
      this.visible = false
    },
    handleOpen(e) {
      e.stopPropagation()
      this.visible = !this.visible
      this.getList(1)
    },
    getList(page) {
      if (this.loading) return
      this.loading = true
      let that = this
      this.remote({ page: page, limit: this.limit }, (res) => {
        if (res) {
          that.total = res.total
          that.list = res.list
          that.allList.push(...res.list)
        }
        that.loading = false
      })
    },
    handClick(value) {
      this.$emit('input', value)
      this.hide()
    }
  }
}
</script>
