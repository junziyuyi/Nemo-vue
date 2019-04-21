<template>
  <div class="login">
    <div class="login-bg">
      <img
        src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-761372.jpg"
        alt
      />
    </div>
    <div class="login-content clearfix">
      <div class="login-adv-pic fl">
        <img
          src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-761372.jpg"
          alt
        />
      </div>
      <div class="login-info fl">
        <div class="title">后台管理系统</div>
        <div class="login-info-content">
          <el-form
            ref="loginForm"
            :rules="rules"
            :model="loginForm"
            size="small"
            label-width="60px"
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                name="userName"
                v-model="loginForm.userName"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                name="userName"
                v-model="loginForm.pass"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码" v-if="0">
              <el-input
                name="authCode"
                v-model="form.pass"
                placeholder="请输入验证码"
                class="auth-code-input fl"
              ></el-input>
              <div class="fl">4552</div>
            </el-form-item>
            <div class="login-btn">
              <el-button
                type="primary"
                class="el-button el-button--primary el-button--small"
                @click="doLogin('loginForm')"
                >提交</el-button
              >
            </div>
          </el-form>
          <div class="text-right signin">去注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import variables from "@/styles/variables.scss";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      callback();
    };
    return {
      loginForm: {
        userName: "",
        pass: ""
      },
      rules: {
        userName: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    doLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false;
        }
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/color.scss";
@import "../assets/styles/mixin.scss";

.login {
  position: relative;
  line-height: 100%;
  height: 100%;
  .login-bg {
    position: relative;
    height: 100%;
    overflow: hidden;
    & > img {
      position: absolute;
      left: -20%;
      top: 50%;
      transform: translateY(-50%);
      width: 120%;
      display: block;
      filter: blur(5px);
    }
  }
  .login-content {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 600px;
    height: 300px;
    background: rgba($white, $alpha: 0.6);
    overflow: hidden;
    @include border-radius();
    .login-adv-pic {
      position: relative;
      overflow: hidden;
      width: 45%;
      height: 100%;
      & > img {
        position: absolute;
        left: -20%;
        top: 50%;
        width: 150%;
        min-height: 100%;
        transform: translateY(-50%);
      }
    }
    .login-info {
      width: 55%;
      padding-top: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
      & > .title {
        padding-bottom: 8px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        border-bottom: 1px solid $black;
      }
      & .login-info-content {
        padding: 30px 15px 30px;
        box-sizing: border-box;
        & i {
          display: block;
          width: 16px;
          height: 16px;
          font-size: 16px;
          line-height: 24px;
        }

        & .auth-code-input {
          width: 50%;
        }

        & .auth-code {
          width: 50%;
          color: #333;
        }
        & .login-btn {
          width: 100%;
          padding-left: 60px;
          box-sizing: border-box;
          & button {
            width: 100%;
          }
        }
      }
    }
  }
  .signin {
    margin-top: 10px;
    font-size: 12px;
    line-height: 24px;
    color: $light-blue;
    cursor: pointer;
  }
}
</style>
