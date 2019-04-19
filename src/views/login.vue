<template>
  <div class="login">
    <div class="login-bg">
      <img src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-761372.jpg" alt>
    </div>
    <div class="login-content clearfix">
      <div class="login-adv-pic fl">
        <img src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-761372.jpg" alt>
      </div>
      <div class="login-info fl">
        <div class="title">后台管理系统</div>
      </div>
    </div>
  </div>
</template>
<script>
// import variables from "@/styles/variables.scss";
export default {};
</script>
<style lang="scss" scoped>
@import "../assets/styles/color.scss";
@import "../assets/styles/mixin.scss";

.login {
  position: relative;
  line-height: 100%;
  height: 100%;
}
.login-bg {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.login-bg > img {
  position: absolute;
  left: -20%;
  top: 50%;
  transform: translateY(-50%);
  width: 120%;
  display: block;
  filter: blur(1px);
}
.login-content {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 140px;
  height: 50px;
  background: rgba($white, $alpha: 0.6);
  overflow: hidden;
  @include border-radius();
}
.login-adv-pic {
  position: relative;
  overflow: hidden;
  width: 45%;
  height: 100%;
}
.login-adv-pic > img {
  position: absolute;
  left: -20%;
  top: 50%;
  width: 150%;
  min-height: 100%;
  transform: translateY(-50%);
}
.login-info {
  width: 55%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  & > .title {
    text-align: center;
    border-bottom: 1px solid $menuText;
  }
}
</style>
