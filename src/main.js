import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/global.css";
import "./assets/plugins/element.js";
import "./assets/plugins/swiper.js";
import common from "./js/common.js";
import { PUBLICURL } from "./js/publicUrl.js";
Vue.prototype.$publicUrl = PUBLICURL;
Vue.prototype.$common = common;
Vue.config.productionTip = false;
// 模拟切换页面时,跳转到页面顶部
router.afterEach(() => {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
