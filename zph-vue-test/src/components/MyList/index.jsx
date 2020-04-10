export default {
  name: 'MyList',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  render() {
    const that = this
    const element = (
      <el-table data={this.data}>
        {
          this.columns.map(v => {
            if (v.slot && that.$scopedSlots[v.slot]) {
              return <el-table-column label={v.label} prop={v.prop} {...{ scopeSlots: { default: that.$scopedSlots[v.slot] } }}></el-table-column>
            } else {
              return <el-table-column label={v.label} prop={v.prop}></el-table-column>
            }
            return <el-table-column label={v.label} prop={v.prop}></el-table-column>
          })
        }
      </el-table>
    )
    return element
  },
  methods: {}
}
