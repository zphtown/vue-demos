<template>
  <div>
    <transition name="slide-left" mode="out-in">
      <keep-alive :include="cacheViews">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: ''
    }
  },
  computed: {
    cacheViews() {
      return this.$store.state.cacheViews
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.name && to.meta && !to.meta.noCache) {
        this.$store.commit('ADD_CACHE_VIEWS', to.name)
      }
    },
    cacheViews() {
      console.log('===============starting===============')
      console.log('cacheViews changed')
      console.log(this.cacheViews)
    }
  },
  methods: {
    routerSlider(to, from) {
      this.transitionName = 'slide-left'
    }
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .page{
    width:100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #f8f8f8;
  }
  .slide-left-enter /* .fade-leave-active below version 2.1.8 */
  {
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  .slide-left-leave-to{
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }

  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .3s;
  }

  .red {
    background: lightcoral;
  }
  .orange{
    background: orange;
  }
  .yellow {
    background: lightgoldenrodyellow;
  }
  .green{
    background: green;
  }
  .qing{
    background: rgb(0, 255,255);
  }
  .blue{
    background:blue;
  }
  .purple{
    background: purple;
  }
</style>
