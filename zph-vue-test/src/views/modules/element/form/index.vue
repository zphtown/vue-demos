<template>
  <div>
    <el-card class="mb20 text-center">
      <el-button @click="handleAdd" type="primary">新增</el-button>
      <el-button @click="handleEdit" type="success">编辑</el-button>
      <el-button @click="handleClick">默认</el-button>
      <el-button type="primary" @click="handleClick">primary</el-button>
      <el-button type="success" @click="handleClick">success</el-button>
      <el-button type="info" @click="handleClick">info</el-button>
      <el-button type="danger" @click="handleClick">danger</el-button>
      <el-button type="warning" @click="handleClick">warning</el-button>
    </el-card>
    <el-dialog append-to-body :visible.sync="visible" :title="`${form.id ? '编辑' : '新增'}`">
      <el-form
              :model="form"
              :rules="rules"
              ref="form"
              label-width="80px"
              status-icon>
        <el-form-item label="名字" prop="user">
          <el-input v-model="form.user" placehoder="请输入名字" clearable />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex">
            <el-option label="男" value="M"></el-option>
            <el-option label="女" value="F"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="addSubmit" type="primary">提交</el-button>
          <el-button @click="resetForm" type="danger">重置</el-button>
          <el-button @click="visible = false" type="default">取消</el-button>

<!--          <el-button @click="visible = false" size="medium">default</el-button>-->
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: '',
        sex: ''
      },
      rules: {
        user: [{ required: true, message: '请输入名字', trigger: 'blur' }],
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }]
      },
      visible: false
    }
  },
  methods: {
    addSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // console.log(JSON.stringify(this.form))
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    },
    handleAdd() {
      this.visible = true
      this.form = {
        user: '',
        sex: ''
      }
      this.resetFields()
    },
    handleEdit() {
      this.visible = true
      this.form = {
        user: '小明',
        id: 541523421,
        sex: 'F'
      }
    },
    resetFields() {
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    },
    handleClick() {
      alert('暂无后续逻辑')
    }
  }
}
</script>
