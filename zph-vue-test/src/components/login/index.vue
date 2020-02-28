<template>
  <div class="login">
    <el-form>
      <el-form-item>
        <el-form-item style="margin-bottom: 20px">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 20px">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item style="margin-bottom: 20px;text-align:center">
        <el-button type="primary" @click="add">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    add() {
      this.$store.dispatch('login').then(res => {
        this.$notify({
          title: '提示',
          message: '登录成功',
          type: 'success'
        })
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100vh;
  }
</style>
