<template>
  <div class="login-box">
    <div class="back1"></div>
    <div class="back2"></div>
    <div class="back3"></div>
    <div class="back4"></div>
    <div class="login-center">
      <div class="login-left">
        <img src="../../../public/static/images/login_login.png" alt="">
        <el-input class="userInfo" placeholder="username" v-model="loginForm.username" ></el-input>
        <el-input class="userInfo"  placeholder="password" v-model="loginForm.password" show-password></el-input>
        <el-row>
          <el-button class="subButton" type="primary" plain @click="submitForm" :loading="loading">{{BtnText}}</el-button>
        </el-row>
      </div>
      <div class="login-right" v-if="isShow">
        <img src="../../../public/static/images/login_logo.png" alt="">
      </div>
    </div>
    <div class="bottom"><a>© 2020 Fengzhida. All rights reserved.</a></div>
  </div>
</template>

<script>
  export default {
    name: "MyLogin",
    data(){
      return{
        loading:false,
        BtnText:'Login',
        loginForm: {
          username: '',
          password: ''
        },
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
    methods:{
      submitForm(){
        this.loading=true
        this.BtnText='loading'

        setTimeout(()=>{
          this.loading=false
          this.BtnText='Login'
        },1000)
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
    .login-center{
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
      .login-left{
        width: 360px;
        img{
          margin-bottom: 10px;
        }
        .userInfo{
          margin-top: 20px;
        }
        .userInfo>>>.el-input__inner{
          height: 50px;
          font-size: 18px;
        }
        .subButton{
          margin-top: 30px;
          width: 100%;
          height: 50px;
          font-size: 16px;
        }
      }
      .login-right{
        margin-left: 150px;
        img{
          width: 500px;
          height: 400px;
        }
      }
    }
    .back1{
      background-color: #7B86F8;
      height: 600px;
      width:600px;
      position: absolute;
      top: 65px;
      left: 110px;
    }
    .back2{
      background-color: #46BDD3;
      height: 45px;
      width: 200px;
      position: absolute;
      top: 0;
      right: 20%;
    }
    .back3{
      background-color: #46BDD3;
      z-index: 999;
      height: 80px;
      width: 80px;
      position: absolute;
      top: 8%;
      right: 15%;
    }
    .back4{
      background-color: #7B86F8;
      height: 80px;
      width: 300px;
      position: absolute;
      bottom: 50px;
      right: 15%;
    }
    .bottom{
      color: #FFFFFF;
      font-size: 16px;
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 20px;
    }
  }
</style>
