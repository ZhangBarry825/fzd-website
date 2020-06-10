<template>
  <div class="contact-box">
    <Header :menu-id="7" :is-show="isShow" banner-title="CONTACT" :banner-num="5"></Header>
    <div class="contact-center">
      <div class="title">
        <div class="text1">ADDRESS</div>
        <div class="text2">ADDRESS</div>
      </div>
      <div class="map">
<!--        <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map-height" @click="getClickInfo" :scroll-wheel-zoom='true'></baidu-map>-->
        <MapBox mapWidth="100%" mapHeight="400px"></MapBox>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="left">
            <img src="../../../public/static/images/icon_email.png" alt="">
          </div>
          <div class="right">
            <div class="top">EMAIL</div>
            <div class="down">
              943870975@qq.com
            </div>
          </div>
        </div>
        <div class="contact-item middle">
          <div class="left">
            <img src="../../../public/static/images/icon_tel.png" alt="">
          </div>
          <div class="right">
            <div class="top">TEL</div>
            <div class="down">
              15238699705
            </div>
          </div>
        </div>
        <div class="contact-item">
          <div class="left">
            <img src="../../../public/static/images/icon_address.png" alt="">
          </div>
          <div class="right">
            <div class="top">
              ADDRESS
            </div>
            <div class="down">
              1521 / 1522, building 6, Greenland new metropolis, Jinshui East Road,
              Zhengdong New District, Zhengzhou
            </div>
          </div>
        </div>
      </div>
      <div class="title">
        <div class="text1">LEAVE A MESSAGE</div>
        <div class="text2">LEAVE A MESSAGE</div>
      </div>
      <div class="inputs">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="name">
            <el-input class="in" v-model="ruleForm.name"  placeholder="Name:"></el-input>
          </el-form-item>
          <el-form-item  prop="email">
            <el-input class="in" v-model="ruleForm.email" placeholder="Email:"></el-input>
          </el-form-item>
          <el-form-item prop="tel" >
            <el-input class="in" v-model="ruleForm.tel" placeholder="Tel:"></el-input>
          </el-form-item>
          <el-form-item prop="message">
            <el-input class="in"
                      type="textarea"
                      :autosize="{ minRows: 5, maxRows: 10}"
                      placeholder="Message:"
                      v-model="ruleForm.message">
            </el-input>
          </el-form-item>
          <el-row class="submit-row">
            <el-button @click="submitForm('ruleForm')" class="submit-button" type="primary">submit</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import MapBox from '../../components/MapBox/mapbox'
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'
  import {contactUs} from "@/api/home";

  export default {
    name: "Contact",
    components: {
      Header,
      Footer,
      MapBox,
    },
    data() {
      return {
        center: {lng: 113.774673, lat: 34.776896},
        zoom: 17,
        ruleForm: {
          name: '',
          email: '',
          tel: '',
          message: '',
        },
        rules: {
          name: [
            {required: true, message: 'Please type your name', trigger: 'blur'}
          ],
          email: [
            {required: true, message: 'Please type your email', trigger: 'blur'},
            { type: 'email', message: 'Please type the real email', trigger: ['blur', 'change'] }
          ],
          tel: [
            {required: true, message: 'Please type your telephone number', trigger: 'blur'}
          ],
          message: [
            {required: true, message: 'Please type some message', trigger: 'blur'},
            {min: 0, max: 500, message: 'The length should be no more than 500 characters', trigger: 'blur'}
          ],
        }
      }
    },
    computed: {
      isShow() {
        return this.$store.getters.isShow
      }
    },
    watch: {
      isShow: (newVal, oldVal) => {
      },
      $route(to, from) {
        this.$router.go(0)
      }
    },
    methods: {
      // handler({BMap, map}) {
      //   var point = new BMap.Point(113.774673, 34.776896)
      //   map.centerAndZoom(point, 17)
      //   var marker = new BMap.Marker(point) // 创建标注
      //   map.addOverlay(marker) // 将标注添加到地图中
      //   var circle = new BMap.Circle(point, 0, {
      //     strokeColor: 'Red',
      //     strokeWeight: 1,
      //     strokeOpacity: 1,
      //     Color: 'Red',
      //     fillColor: '#f03'
      //   })
      //   map.addOverlay(circle)
      //
      // },
      // getClickInfo(e) {
      //   this.center.lng = e.point.lng
      //   this.center.lat = e.point.lat
      // },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData();
            formData.append('email',this.ruleForm.email)
            formData.append('phone',this.ruleForm.tel)
            formData.append('message',this.ruleForm.message)
            formData.append('name',this.ruleForm.name)

            contactUs(formData).then(res=>{
              console.log(res,2222)
              this.$message({
                message:'submit successfully',
                type:'success'
              })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped lang="scss">
  .contact-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /* Extra large devices (large laptops and desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .contact-center {
      width: 992px;
      padding: 10px 0;

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 48px;
          color: #222222;
          position: relative;
          top: 40px;
          font-weight: bold;
        }

        .text2 {
          font-size: 72px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }

      .map {
        width: 100%;
        padding-bottom: 20px;
        .map-height{
          height:400px
        }
      }

      .contact-items {
        width: 100%;
        padding: 50px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .contact-item {
          display: flex;
          flex-direction: row;

          .left {
            padding-right: 20px;
            height: 100%;
            display: flex;
            align-items: center;

            img {
              width: 50px;
              height: 50px;
            }
          }

          .right {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .top {
              color: #999999;
              font-size: 16px;
              line-height: 1.5;
            }

            .down {
              line-height: 1.5;
              color: #222222;
              font-size: 16px;
              text-align: justify;
            }
          }
        }

        .middle {
          margin: 0 50px;
        }
      }

      .inputs {
        width: 100%;
        display: flex;
        flex-direction: column;

        .in > > > .el-input__inner {
          background-color: #F7F7F7 !important;
          border: none;
          padding: 20px;
        }

        .el-textarea > > > .el-textarea__inner {
          background-color: #F7F7F7 !important;
          border: none;
        }

        .submit-row {
          padding: 50px 0;
          text-align: center;

          .submit-button {
            background-color: #177EE6;
            width: 200px;
            height: 60px;
            font-size: 18px;
          }
        }

      }
    }
  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .contact-center {
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        width: 100% !important;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 24px;
          color: #222222;
          position: relative;
          top: 25px;
          font-weight: bold;
        }

        .text2 {
          font-size: 34px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }


      .map {
        width: 90%;
        padding-bottom: 20px;
        .map-height{
          height:200px
        }
      }

      .contact-items {
        display: none;
        width: 100%;
        padding: 20px 20px;

        .contact-item {
          display: flex;
          flex-direction: row;

          .left {
            padding-right: 10px;
            height: 100%;
            display: flex;
            align-items: center;

            img {
              width: 30px;
              height: 30px;
            }
          }

          .right {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .top {
              color: #999999;
              font-size: 14px;
              line-height: 1.5;
            }

            .down {
              line-height: 1.5;
              color: #222222;
              font-size: 14px;
              text-align: justify;
            }
          }
        }

        .middle {
          margin: 20px 0 ;
        }
      }

      .inputs {
        width: 100%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;

        .in > > > .el-input__inner {
          background-color: #F7F7F7 !important;
          border: none;
          padding: 20px;
        }

        .el-textarea > > > .el-textarea__inner {
          background-color: #F7F7F7 !important;
          border: none;
        }

        .submit-row {
          padding: 50px 0;
          text-align: center;

          .submit-button {
            background-color: #177EE6;
            width: 100%;
            height: 45px;
            font-size: 15px;
          }
        }

      }
    }
  }
</style>
