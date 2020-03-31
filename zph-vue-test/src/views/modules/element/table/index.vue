<template>
  <div>
    <MyList :columns="columns" :data="data">
      <div slot="sex" slot-scope="scope">
        {{ scope.row.sex | sex }}
      </div>
    </MyList>
  </div>
</template>

<script>
import MyList from '@/components/MyList'
export default {
  components: {
    MyList
  },
  filters: {
    sex(v) {
      return v === 'M' ? '男' : v === 'F' ? '女' : ''
    }
  },
  data() {
    return {
      columns: [
        {
          label: '姓名',
          prop: 'username'
        },
        {
          label: '年龄',
          prop: 'age'
        },
        {
          label: '性别',
          prop: 'sex',
          slot: 'sex'
        }
      ],
      data: []
    }
  },
  created() {
    setTimeout(_ => {
      this.data = [
        {
          username: '张三',
          age: 17,
          sex: 'M'
        },
        {
          username: '张三',
          age: 17,
          sex: 'M'
        },
        {
          username: '张三',
          age: 17,
          sex: 'M'
        },
        {
          username: '张三',
          age: 17,
          sex: 'M'
        }
      ]
    }, 1000)
  }
}
</script>
