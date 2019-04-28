<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper" class="scrollbar" ref="scrollbar">
      <sidebar-item/>
    </el-scrollbar>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

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
    // }
  }
};
</script>
<style lang="scss" scoped>
.sidebar {
  .scrollbar {
    overflow-x: hidden !important;
    height: 100%;
    .is-horizontal,
    .is-vertical {
      display: none;
    }
  }
}

.menu {
  border-right: 0;
}
</style>
