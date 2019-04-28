<template>
  <el-menu
      class="menu" :class="{'flod-menu':isCollapse}"
      :default-active="'0'"
      :background-color="variables.MenuBG"
      :text-color="variables.MenuText"
      :unique-opened="false"
      :active-text-color="variables.MenuActiveTxt"
      :collapse-transition="false"
      :collapse="isCollapse"
      mode="vertical">
      <template v-for="menu in menus">
        <template v-if="menu.Subs">
          <el-submenu :index="menu.Index" :key="menu.Index">
            <template slot="title"><i :class="menu.Icon"></i><span slot="title">{{ menu.Title }}</span></template>
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
              <i :class="menu.Icon"></i>
              <span slot="title">{{ menu.Title }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </template>
    </el-menu>
</template>
<script>
import Bus from "@/utils/bus.js";
import variables from "@/assets/styles/color.scss";

export default {
  data() {
    return {
      isCollapse: false,
      menus: [
        {
          Icon: "el-icon-menu",
          Title: "系统首页",
          Index: "0",
          Path: "/home"
        },
        {
          Icon: "el-icon-star-on",
          Title: "站点维护",
          Index: "1",
          Path: "/site"
        },
        {
          Icon: "el-icon-edit",
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
          Icon: "el-icon-tickets",
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
  },
  created() {
    Bus.$on("menuFold", menuFold => {
      this.isCollapse = menuFold;
    });
  },
  computed: {
    variables() {
      return variables;
    }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  width: 200px;
  border-right: 0;
}
.flod-menu {
  width: auto;
}
</style>
