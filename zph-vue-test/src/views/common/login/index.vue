<template>
  <div class="login-container">
<!--    <vue-particles-->
<!--      color="#dedede"-->
<!--      :particleOpacity="0.7"-->
<!--      :particlesNumber="80"-->
<!--      shapeType="circle"-->
<!--      :particleSize="4"-->
<!--      linesColor="#dedede"-->
<!--      :linesWidth="1"-->
<!--      :lineLinked="true"-->
<!--      :lineOpacity="0.4"-->
<!--      :linesDistance="150"-->
<!--      :moveSpeed="3"-->
<!--      :hoverEffect="true"-->
<!--      hoverMode="grab"-->
<!--      :clickEffect="true"-->
<!--      clickMode="push"-->
<!--    >-->
<!--    </vue-particles>-->
    <div class="login-form">
      <h3 class="title">xxx管理系统</h3>
      <el-form>
        <el-form-item>
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item class="text-center">
          <el-button type="primary" v-loading="loading" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: '',
      loading: false
    }
  },
  methods: {
    login() {
      this.$store.dispatch('user/login', {
        username: this.username,
        password: this.password
      }).then(_ => {
        this.loading = false
        this.$notify({
          title: '提示',
          message: '登录成功!',
          type: 'success',
          duration: 3000
        })
        this.$router.push('/')
      }).catch(_ => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #2d3a4b;
  }
  .login-form{
    width: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .title{
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
      font-size: 30px;
      font-weight: normal;
    }
  }
</style>
