<template>
  <div class="sidebar-item">
    <div v-for="menu in menus" :key="menu.Index">
      <template v-if="menu.Subs">
        <el-submenu :index="menu.Index" :key="menu.Index">
          <template slot="title">
            <i :class="menu.Icon"></i><span>{{ menu.Title }}</span>
          </template>
          <div v-for="subMenu in menu.Subs" :key="subMenu.Index">
            <el-submenu v-if="subMenu.Subs" :index="subMenu.Index" :key="subMenu.Index">
              <template slot="title">{{ subMenu.Title }}</template>
              <el-menu-item v-for="threeMenu in subMenu.subs" :key="threeMenu.Index" :index="threeMenu.Index">
                <router-link :to="threeMenu.Path">{{threeMenu.Title}}</router-link>
              </el-menu-item>
            </el-submenu>
            <div v-else>
              <router-link :to="subMenu.Path">
                <el-menu-item :index="subMenu.Index" :key="subMenu.Index">{{subMenu.Title}}</el-menu-item>
              </router-link>
            </div>
          </div>
        </el-submenu>
      </template>
      <template v-else>
        <router-link :to="menu.Path">
          <el-menu-item :index="menu.Index" :key="menu.Index">
            <i :class="menu.Icon"></i><span>{{ menu.Title }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          Icon: "el-icon-menu",
          Title: "系统首页",
          Index: "0",
          Path: "/home"
        },
        {
          Icon: "el-icon-menu",
          Title: "站点维护",
          Index: "1",
          Path: "/site"
        },
        {
          Icon: "el-icon-menu",
          Title: "商品管理",
          Index: "2",
          Subs: [
            {
              Title: "商品列表",
              Index: "2-0",
              Path: "/goods/list"
            },
            {
              Title: "新增商品",
              Index: "2-1",
              Path: "/goods/add"
            },
            {
              Title: "商品分类",
              Index: "2-2",
              Path: "/goods/category"
            },
            {
              Title: "商品单位",
              Index: "2-3",
              Path: "/goods/unit"
            }
          ]
        },
        {
          Icon: "el-icon-menu",
          Title: "订单中心",
          Index: "3",
          Subs: [
            {
              Title: "订单列表",
              Index: "3-0",
              Path: "/order/list"
            },
            {
              Title: "退货列表",
              Index: "3-1",
              Path: "/order/returnList"
            }
          ]
        }
      ]
    };
  }
};
</script>
