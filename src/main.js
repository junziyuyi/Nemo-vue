import Vue from "vue";

import Element from "element-ui";
import Cookies from "js-cookie";
import VueMoment from "vue-moment";

import "normalize.css/normalize.css";
import "@/assets/styles/element-variables.scss";
import "@/assets/styles/index.scss"; // global css
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import * as filters from "@/filters/index";
import router from "./router/index";
import store from "./store/index";

Vue.use(Cookies);
Vue.use(Element);
Vue.use(VueMoment);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
