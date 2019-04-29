<template>
  <div class="signin">
    <div class="signin-container">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="验证身份信息"></el-step>
        <el-step title="完善信息"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <el-form ref="signinForm" :rules="rules" :model="signinForm" size="small" label-width="80px" class="signin-form">
        <el-form-item label="用户名" prop="userName" v-if="active === 1">
          <el-input name="userName" v-model="signinForm.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" v-if="active === 1">
          <el-input name="email" v-model="signinForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" v-if="active === 2">
          <el-input name="pass" v-model="signinForm.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" v-if="active === 2">
          <el-input name="checkPass" v-model="signinForm.checkPass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" v-if="active === 2">
          <el-input name="code" v-model="signinForm.code" placeholder="请输入验证码" class="auth-code-input fl"></el-input>
        </el-form-item>
        <div class="signin-btns">
          <el-button type="primary" class="el-button el-button--primary el-button--small" @click="prev('signinForm')"
            v-if="active > 1 && active < 3">上一步</el-button>
          <el-button type="primary" class="el-button el-button--primary el-button--small" @click="next('signinForm')"
            v-if="active < 3">下一步</el-button>
          <el-button type="primary" class="el-button el-button--primary el-button--small" @click="next('signinForm')"
            v-if="active == 3">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { async } from "q";
export default {
  data() {
    let validataEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      }
      callback();
    };
    let validataCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
        callback();
      }
    };
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.signinForm.checkPass !== "") {
          this.$refs.signinForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.signinForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      }
      callback();
    };
    return {
      active: 1,
      signinForm: {
        email: "",
        code: "",
        userName: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        email: [{ validator: validataEmail, trigger: "blur" }],
        code: [{ validator: validataCode, trigger: "blur" }],
        userName: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    prev(formName) {
      this.$refs[formName].resetFields();
      this.active--;
    },
    next(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false;
        }
        this.active === 1 ? this.sendCode() : this.active++;
      });
    },
    sendCode() {
      var params = {};
      params.Email = this.email;
      this.$http.Post("/users/verify", params).then(data => {
        if (data.code == "0") {
          this.active++;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.signin-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 500px;
  padding: 50px 0;
  box-sizing: border-box;
  background: #f0f0f0;
}
.signin-form {
  width: 400px;
  margin: 30px auto 0;
}
.signin-btns {
  margin-left: 80px;
}
</style>
