<template>
  <div class="sidebar-item">
    <div v-for="menu in menus" :key="menu.Index">
      <div v-if="menu.Subs">
        <el-submenu :index="menu.Index" :key="menu.Index">
          <template slot="title">
            <i :class="menu.Icon"></i>
            <span>{{ menu.Title }}</span>
          </template>
          <div v-for="subMenu in menu.Subs" :key="subMenu.Index">
            <el-submenu
              v-if="subMenu.Subs"
              :index="subMenu.Index"
              :key="subMenu.Index"
            >
              <template slot="title">{{ subMenu.Title }}</template>
              <el-menu-item
                v-for="threeMenu in subMenu.subs"
                :key="threeMenu.Index"
                :index="threeMenu.Index"
                route
                >{{ threeMenu.Index }}</el-menu-item
              >
            </el-submenu>
            <el-menu-item
              v-else
              :index="subMenu.Index"
              :key="subMenu.Index"
              route
              >{{ subMenu.Title }}</el-menu-item
            >
          </div>
        </el-submenu>
      </div>
      <div v-else>
        <el-menu-item :index="menu.Index" :key="menu.Index">
          <i :class="menu.Icon"></i>
          <span>{{ menu.Title }}</span>
        </el-menu-item>
      </div>
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
          Index: "0"
        },
        {
          Icon: "el-icon-menu",
          Title: "wap端维护",
          Index: "1"
        },
        {
          Icon: "el-icon-menu",
          Title: "商品管理",
          Index: "2",
          Subs: [
            {
              Title: "商品列表",
              Index: "2-0"
            },
            {
              Title: "新增商品",
              Index: "2-1"
            },
            {
              Title: "商品分类",
              Index: "2-2"
            },
            {
              Title: "商品单位",
              Index: "2-3"
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
              Index: "3-0"
            },
            {
              Title: "退货列表",
              Index: "3-1"
            }
          ]
        }
      ]
    };
  }
};
</script>
