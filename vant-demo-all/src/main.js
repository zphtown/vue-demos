import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant, { Lazyload } from "vant";
import "vant/lib/index.css";
import "./assets/css/index.less";

Vue.config.productionTip = false;

Vue.use(vant);
Vue.use(Lazyload);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
