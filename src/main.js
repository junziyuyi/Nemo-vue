import Vue from "vue";
import Element from "element-ui";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index";

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
