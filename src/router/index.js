import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/",
      name: "index",
      component: resolve => {
        require(["@/views/layout"], resolve);
      },
      children: [
        {
          path: "home",
          name: "home",
          meta: {
            auth: true
          },
          component: resolve => {
            require(["@/views/home"], resolve);
          }
        },
        {
          path: "order",
          name: "order",
          meta: {
            auth: true
          },
          component: resolve => {
            require(["@/views/order/index"], resolve);
          }
        },
        {
          path: "order/*",
          name: "order",
          meta: {
            auth: true
          },
          component: resolve => {
            require(["@/views/order/index"], resolve);
          }
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: resolve => {
        require(["@/views/login.vue"], resolve);
      }
    }
  ]
});

export default router;
