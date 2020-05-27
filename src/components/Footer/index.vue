<template>
  <div class="footer-box">
    <div class="box-center">
      <div class="footer-top">
        <div class="top-left">
          <div class="left1">
            <ul>
              <li class="title">Products</li>
              <li @click="goTo('/product-list')">Aluminum Circle</li>
              <li @click="goTo('/product-list')">Aluminum Sheet/Coil</li>
              <li @click="goTo('/product-list')">Aluminum Foil</li>
            </ul>
          </div>
          <div class="left1 left2">
            <ul>
              <li class="title">About us</li>
              <li @click="goTo('/equipment')">Equipment&Workshop</li>
              <li @click="goTo('/news')">B.News&Blog-post</li>
              <li @click="goTo('/about-us')">About US</li>
            </ul>
          </div>
        </div>
        <div class="top-right">
          <div class="right1">
            <img src="../../../public/static/images/icon_contact1.png" alt="">
            <div class="rightRight">
              <div class="top1">EMAIL</div>
              <div class="down1">943870975@qq.com</div>
            </div>
          </div>
          <div class="right1">
            <img src="../../../public/static/images/icon_contact2.png" alt="">
            <div class="rightRight">
              <div class="top1">
                TEL
              </div>
              <div class="down1">
                15238699705
              </div>
            </div>
          </div>
          <div class="right1">
            <img src="../../../public/static/images/icon_contact3.png" alt="">
            <div class="rightRight">
              <div class="top1">ADDRESS</div>
              <div class="down1">
                1521 / 1522, building 6, Greenland new metropolis, Jinshui
                East Road,Zhengdong New District, Zhengzhou
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-down">
        <div class="down-box">
          <div class="down-left">© 2020 FZD. All rights reserved.</div>
          <div class="down-right"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Footer",
    methods:{
      goTo(path){
        this.$router.push({path:path})
      }
    }
  }
</script>

<style scoped lang="scss">
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .footer-box {
      width: 100%;
      height: 400px;
      background-color: #222222;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .box-center {
        padding-top: 50px;
        width: 992px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        color: #999999;

        .footer-top {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;

          .top-left {
            display: flex;
            flex-direction: row;


            .left1 {
              font-size: 16px;
              box-sizing: border-box;
              padding-right: 50px;
              li {
                width: 200px;
                word-break: keep-all;
                cursor: pointer;
                list-style: none;
                text-decoration: none;
                line-height: 2;
              }

              li:hover {
                color: #FFFFFF;
              }

              .title {
                cursor: default;
                font-size: 30px;
                line-height: 2.5;
              }
              .title:hover{
                color: #999999;
              }
            }
          }

          .top-right {
            display: flex;
            flex-direction: column;
            padding-left: 30px;
            padding-top: 25px;
            padding-bottom: 0;
            box-sizing: border-box;
            height: 100%;
            justify-content: space-between;
            max-width: 800px;

            .right1 {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              padding-bottom: 20px;
              .rightRight {
                font-size: 16px;
                height: 100%;
                justify-content: space-between;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                line-height: 1.5;
              }

              img {
                width: 50px;
                height: 50px;
              }
            }
          }
        }

        .footer-down {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding-top: 10px;
          .down-box {
            width: 992px;

            .down-left {

            }
          }

        }
      }

    }
  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .footer-box {
      width: 100%;
      background-color: #222222;
      display: flex;
      flex-direction: column;
      padding: 20px 30px;
      box-sizing: border-box;
      color: #999999;
      .box-center {
        width: 100%;
        .footer-top {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          width: 100%;
          .top-left {
            display: flex;
            flex-direction: row;

            .left1 {
              display: none;
              font-size: 12px;
              margin-right: 5px;

              li {
                cursor: pointer;
                list-style: none;
                text-decoration: none;
                line-height: 1.5;
              }

              li:hover {
                color: #FFFFFF;
              }

              .title {
                font-size: 14px;
                line-height: 1.5;
              }
            }

            .left2 {
              display: none;
            }
          }

          .top-right {
            display: flex;
            flex-direction: column;
            padding-top: 5px !important;
            padding-bottom: 0 !important;
            box-sizing: border-box;
            height: 100%;
            justify-content: space-between;
            /*max-width: 200px;*/
            .right1 {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              margin-bottom: 10px !important;

              .rightRight {
                font-size: 12px;
                height: 100%;
                justify-content: space-between;
                margin-left: 15px;
                display: flex;
                flex-direction: column;
                line-height: 1.5;

                .top1 {

                }

                .down1 {

                }
              }

              img {
                width: 27px;
                height: 27px;
              }
            }
          }
        }
        .footer-down{
          text-align: center;
          padding-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
</style>
