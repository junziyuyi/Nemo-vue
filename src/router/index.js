import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout";

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
      name: "home",
      component: Layout,
      children: [
        {
          path: "home",
          name: "home",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/home"], resolve)
        }
      ]
    },
    {
      path: "/",
      name: "site",
      component: Layout,
      children: [
        {
          path: "site",
          name: "site",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/site"], resolve)
        }
      ]
    },
    {
      path: "/goods",
      name: "goods",
      component: Layout,
      children: [
        {
          path: "list",
          name: "goodsList",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/goods/list"], resolve)
        },
        {
          path: "add",
          name: "goodsAdd",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/goods/add"], resolve)
        },
        {
          path: "category",
          name: "goodsCategory",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/goods/category"], resolve)
        },
        {
          path: "unit",
          name: "goodsUnit",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/goods/unit"], resolve)
        }
      ]
    },
    {
      path: "/order",
      name: "order",
      component: Layout,
      children: [
        {
          path: "list",
          name: "orderList",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/order/list"], resolve)
        },
        {
          path: "returnList",
          name: "returnList",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/order/returnList"], resolve)
        },
        {
          path: "/*",
          name: "list",
          meta: {
            auth: true
          },
          component: resolve => require(["@/views/order/list"], resolve)
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      meta: {
        auth: true
      },
      component: resolve => {
        require(["@/views/login.vue"], resolve);
      }
    }
  ]
});

export default router;
