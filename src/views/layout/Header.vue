<template>
  <div class="header">
    <div class="header-logo fl" @click="toggleMenu">
      <i :class="fold"></i>
      <span class="title">后台管理系统</span>
    </div>
  </div>
</template>
<script>
import Bus from "@/utils/bus.js";

export default {
  data() {
    return {
      fold: "el-icon-d-arrow-left",
      isCollapse: false
    };
  },
  methods: {
    toggleMenu() {
    //   this.isCollapse = !this.isCollapse;
      this.fold = this.isCollapse
        ? "el-icon-d-arrow-left"
        : "el-icon-d-arrow-right";
      Bus.$emit("menuFold", this.isCollapse);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/color.scss";
.header {
  padding: 0 30px;
  height: 60px;
  line-height: 60px;
  background: $HeaderBG;
  color: white;
  .header-logo {
    .title {
      padding-left: 10px;
    }
  }
}
</style>
