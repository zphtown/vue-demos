<template>
  <div>
    <el-dialog title="dialog upload" :visible.sync="dialogVisible">
      <div style="width:200px">
        <el-upload
                :auto-upload="false"
                class="upload-demo"
                :file-list="fileList"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-button>打印</el-button>
      </div>
    </el-dialog>
    <el-button @click="dialogVisible = true">上传</el-button>
    <el-button @click="dialogVisible2 = true">上传2</el-button>
    <el-dialog title="dialog upload2" :visible.sync="dialogVisible2">
      <UploadFile drag multiple :limit="100" ref="upload" />
      <div style="margin-top:30px">
        <el-button @click="print">打印</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>

</style>

<script>
import UploadFile from '@/components/upload-file'
export default {
  components: {
    UploadFile
  },
  data() {
    return {
      fileList: [],
      dialogVisible: false,
      dialogVisible2: false
    }
  },
  created() {

  },
  mounted() {
  },
  watch: {
    fileList() {
      console.log(this.fileList)
    }
  },
  methods: {
    print() {
      console.log(this.$refs.upload.fileList)
    }
  }
}
</script>
