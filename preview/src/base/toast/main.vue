<template>
  <transition name="fade">
    <div v-show="visible" class="toast">
      <img v-if="loading" src="./loading.gif" alt="" class="toast-loading-icon">
      <span v-if="message" class="toast-message">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
  export default{
    data () {
      return {
        visible: false,
        loading: false,
        message: ''
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      }
    }
  }
</script>

<style lang="stylus" scopd>
  .toast{
    display: inline-block
    max-width:50%;
    position: fixed;
    left: 50%;
    top:50%;
    transform translate(-50%, -50%);
    z-index:100
    background: rgba(0,0,0,0.7);
    padding: 30px 60px;
    border-radius: 10px
    color: #fff;
    font-size: 0
  }
  .toast-loading-icon{
    width:50px;
    height: 50px;
  }
  .toast-message{
    font-size: 30px;
  }
</style>

