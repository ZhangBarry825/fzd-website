<template>
  <div class="login-box">
    <div class="back1"></div>
    <div class="back2"></div>
    <div class="back3"></div>
    <div class="back4"></div>
    <div class="login-center">
      <div class="login-left">
        <img src="../../../public/static/images/login_login.png" alt="">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
                 label-position="left">
          <el-form-item prop="username">
            <el-input class="userInfo" type="text" placeholder="username" v-model="loginForm.username" tabindex="1" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :key="passwordType" ref="password" :type="passwordType" name="password"
                      tabindex="2"
                      auto-complete="on"
                      @keyup.enter.native="submitForm" class="userInfo" placeholder="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-row>
            <el-button class="subButton" type="primary" plain @click.native.prevent="submitForm" :loading="loading">{{BtnText}}
            </el-button>
          </el-row>
        </el-form>
      </div>
      <div class="login-right" v-if="isShow">
        <img src="../../../public/static/images/login_logo.png" alt="">
      </div>
    </div>
    <div class="bottom"><a>© 2020 Fengzhida. All rights reserved.</a></div>
  </div>
</template>

<script>
  import {validUsername} from "@/utils/validate";

  export default {
    name: "MyLogin",
    data() {
      const validateUsername = (rule, value, callback) => {
        if (value.length<2) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        loading: false,
        BtnText: 'Login',
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        },

        passwordType: 'password',
        redirect: undefined
      }
    },
    computed: {
      isShow() {
        return this.$store.getters.isShow
      }
    },
    watch: {
      isShow: (newVal, oldVal) => {
      }
    },
    methods: {
      submitForm() {

        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm).then(() => {
              this.$router.push({ path: this.redirect || '/dashboard' })
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-box {
    width: 100%;
    height: 100%;
    background-color: #177EE6;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    .login-center {
      overflow: hidden;
      width: 80%;
      height: 80%;
      padding: 0 30px;
      box-sizing: border-box;
      background-color: #ffffff;
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .login-left {
        width: 360px;

        img {
          margin-bottom: 10px;
        }

        .userInfo {
          margin-top: 10px;
        }

        .userInfo > > > .el-input__inner {
          height: 50px;
          font-size: 18px;
          font-weight: normal;
        }

        .subButton {
          margin-top: 30px;
          width: 100%;
          height: 50px;
          font-size: 16px;
        }
      }

      .login-right {
        margin-left: 150px;

        img {
          width: 500px;
          height: 400px;
        }
      }
    }

    .back1 {
      background-color: #7B86F8;
      height: 600px;
      width: 600px;
      position: absolute;
      top: 65px;
      left: 110px;
    }

    .back2 {
      background-color: #46BDD3;
      height: 45px;
      width: 200px;
      position: absolute;
      top: 0;
      right: 20%;
    }

    .back3 {
      background-color: #46BDD3;
      z-index: 999;
      height: 80px;
      width: 80px;
      position: absolute;
      top: 8%;
      right: 15%;
    }

    .back4 {
      background-color: #7B86F8;
      height: 80px;
      width: 300px;
      position: absolute;
      bottom: 50px;
      right: 15%;
    }

    .bottom {
      color: #FFFFFF;
      font-size: 16px;
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 20px;
    }
  }
</style>
