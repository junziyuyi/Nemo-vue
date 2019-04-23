<template>
  <!-- <div :class="{ 'has-logo': showLogo }"> -->
  <div>
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="menu"
        :default-active="'0'"
        :background-color="variables.MenuBG"
        :text-color="variables.MenuText"
        :unique-opened="false"
        :active-text-color="variables.MenuActiveTxt"
        :collapse-transition="false"
        :collapse="isCollapse"
        mode="vertical"
      >
        <!-- <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />-->
        <sidebar-item/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/assets/styles/color.scss";
import Bus from "@/utils/bus.js";

export default {
  data() {
    return {
      isCollapse: false
    };
  },
  components: { SidebarItem },
  computed: {
    // ...mapGetters(["permission_routes", "sidebar"]),
    // activeMenu() {
    // const route = this.$route;
    // const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    // if (meta.activeMenu) {
    //   return meta.activeMenu;
    // }
    // return path;
    // },
    // showLogo() {
    // return this.$store.state.settings.sidebarLogo;
    // },
    variables() {
      return variables;
    }
  },
  created() {
    Bus.$on("menuFold", menuFold => {
      this.isCollapse = menuFold;
    });
  }
};
</script>
<style lang="scss" scoped>
.menu {
  border-right: 0;
}
</style>
