<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar :flod="flod"/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";
export default {
  data() {
    return {
      flod: false
    };
  },
  components: { Sidebar, Header }
};
</script>
<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-header {
  padding-left: 0;
  padding-right: 0;
}
</style>
