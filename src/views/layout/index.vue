<template>
  <el-container>
    <el-aside width="200px">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
export default {
  components: { Sidebar }
};
</script>
<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
