<template>
  <el-upload
          :style="`display:inline-block;${showTip ? 'width:350px' : ''}`"
          action="/admin"
          :accept="accept"
          :auto-upload="false"
          :multiple="multiple"
          :drag="drag"
          :limit="limit === 1 ? limit + 1 : limit"
          :file-list="fileList"
          :show-file-list="showFileList"
          :before-upload="beforeUpload"
          :on-change="changeFile"
          :on-exceed="handleExceed"
          :on-remove="handleRemove"
  >
    <template v-if="drag">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传{{ allowExt.join('，') }}文件，且不超过{{ size }}M</div>
    </template>
    <template v-else>
      <el-button :loading="loading" size="small" type="primary">{{buttonText}}</el-button>
      <div v-if="showTip" slot="tip" class="el-upload__tip">
        只能上传{{ allowExt.join('，') }}文件，且不超过{{ size }}M
      </div>
    </template>
  </el-upload>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    drag: {
      type: Boolean,
      default: false
    },
    allowExt: {
      type: Array,
      default: () => ['doc', 'docx', 'xls', 'xlsx', 'pdf']
    },
    limit: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 30
    },
    buttonText: {
      type: String,
      default: '点击上传'
    },
    showFileList: {
      type: Boolean,
      default: true
    },
    showTip: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      fileList: []
    }
  },
  computed: {
    accept() {
      return this.allowExt.map(v => '.' + v).join(',')
    }
  },
  methods: {
    clear () {
      this.fileList = []
      this.$emit('update:file', null)
      this.$emit('update:fileFormat', '')
    },
    handleRemove (file, fileList) {
      this.fileList = fileList
    },
    beforeUpload (file) {
      const index = file.name.lastIndexOf('.')
      if (index > -1 && !this.allowExt.includes(file.name.substr(index + 1).toLowerCase())) {
        this.$message.warning('只能上传' + this.allowExt.join('，') + '文件')
        return false
      }
      const isLtSize = file.size / 1024 / 1024 <= this.size
      if (!isLtSize) {
        this.$message.warning(`上传文件大小不能超过 ${this.size} M !`)
        return false
      }
      return true
    },
    handleExceed (files, fileList) {
      this.$message.warning('只能上传一个文件，如需替换，请删除，再上传！')
    },
    changeFile (file, fileList) {
      this.fileList = fileList
      if (this.limit === 1) {
        this.fileList = [file]
      }
      if (!this.beforeUpload(file)) {
        this.fileList = []
        return
      }
      const fileFormat = file.name.substr(file.name.lastIndexOf('.') + 1).toUpperCase()
      const raw = file.raw
      this.$emit('update:file', raw)
      this.$emit('update:fileFormat', fileFormat)
      this.$emit('change', {
        file: raw,
        fileFormat: fileFormat
      })
    }
  }
}
</script>
