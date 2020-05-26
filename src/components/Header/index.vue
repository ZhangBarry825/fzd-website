<template>
  <div class="header-box">
    <div class="header-abs" :style="'background-image: url('+bannerUrl+')'">
      <div class="topMenu">
        <div class="topMenuMiddle">
          <img class="leftLogo" v-if="isShow" src="../../../public/static/images/logo.png" @click="goTo('/home')" alt="">
          <img class="leftLogo2" v-if="!isShow" src="../../../public/static/images/logo.png" @click="goTo('/home')" alt="">
          <div class="right" v-if="isShow">
            <div class="item" :class="{'selected':menuId === 1}" @click="goTo('/home')">HOME</div>
            <div class="item" :class="{'selected':menuId === 2}">
              <div class="text">ABOUT US</div>
              <div class="itemDetailBox">
                <div class="itemDetail" @click="goTo('/equipment')">Equipment&Workshop</div>
                <div class="itemDetail" @click="goTo('/news')">B.News&Blog-post</div>
                <div class="itemDetail" @click="goTo('/about-us')">About US</div>
              </div>
            </div>
            <div class="item" :class="{'selected':menuId === 3}" @click="goTo('/product-list?menuId=3')">
              <div class="text">ALUMINIUM CIRCLE</div>
            </div>
            <div class="item" :class="{'selected':menuId === 4}" @click="goTo('/product-list?menuId=4')">
              <div class="text">ALUMINIUM COIL/SHEET</div>
            </div>
            <div class="item" :class="{'selected':menuId === 5}" @click="goTo('/product-list?menuId=5')">
              <div class="text">ALUMINIUM FOIL</div>
            </div>
            <div class="item" :class="{'selected':menuId === 6}" @click="goTo('/application-list')">
              <div class="text">APPLICATION&PROJECT</div>
            </div>
            <div class="item" :class="{'selected':menuId === 7}" @click="goTo('/contact')">
              <div class="text">CONTACT</div>
            </div>
          </div>
          <div class="moreMenu" @click="showMenu" v-if="!isShow">
            <img src="../../../public/static/images/menu.png" alt="">
          </div>
        </div>
      </div>
      <div class="hideMenu" v-if="hideMenu && !isShow" @touchmove.prevent @mousewheel.prevent>
        <div class="menuItem" @click="goTo('/home')">HOME</div>
        <div class="menuItem" @click="goTo('/about-us')">ABOUT US</div>
        <div class="menuItem" @click="goTo('/product-list?menuId=3')">ALUMINIUM CIRCLE</div>
        <div class="menuItem" @click="goTo('/product-list?menuId=4')">ALUMINIUM COIL/SHEET</div>
        <div class="menuItem" @click="goTo('/product-list?menuId=5')">ALUMINIUM FOIL</div>
        <div class="menuItem" @click="goTo('/application-list')">APPLICATION&PROJECT</div>
        <div class="menuItem" @click="goTo('/contact')">CONTACT</div>
      </div>
      <div class="bannerInfo">
        <div class="title">{{BannerTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: "Header",
    data() {
      return {
        screenWidth: document.body.clientWidth,
        hideMenu: false,
        activeIndex: '1',
        bannerUrl:require('../../../public/static/images/banner1.png'),
        nowBanner: {
          title: 'PRODUCTS',
          description: 'HIGH QUALITY PRODUCTS',
          url1: require('../../../public/static/images/banner1.png'),
          url2: require('../../../public/static/images/banner2.png'),
          url3: require('../../../public/static/images/banner3.png'),
          url4: require('../../../public/static/images/banner4.png'),
        }
      }
    },
    props: {
      BannerNum:{
        default: 0,
        type: Number
      },
      BannerTitle:{
        default: 'Title',
        type: String
      },
      isShow: {
        default: true,
        type: Boolean
      },
      menuId: {
        default: 0,
        type: Number
      }
    },
    mounted() {
      if(this.BannerNum !== 0){
        this.bannerUrl=require('../../../public/static/images/banner'+this.BannerNum+'.png')
      }

    },
    methods: {
      goTo(path){
        this.$router.push({path:path})
      },
      showMenu() {
        this.hideMenu = !this.hideMenu
      }
    }
  }
</script>

<style scoped lang="scss">


  .header-box {
    width: 100%;

    .header-abs {
      width: 100%;
      height: 500px;
      background-color: gainsboro;
      position: absolute;
      background-position: center center;
      background-size: cover;
      .topMenu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        position: absolute;
        z-index: 555;
        padding-top: 10px;

        .topMenuMiddle {
          color: #fff;
          padding: 5px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          width: 992px;

          .moreMenu {
            width: 30px;
            height: 30px;
            cursor: pointer;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .leftLogo {
            width: 90px;
          }

          .leftLogo2 {
            width: 60px;
          }

          .right {
            height: 54px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            .item {
              cursor: pointer;
              font-size: 13px;
              margin: 0 5px;
              box-sizing: border-box;
              height: 100%;
              font-weight: normal;
              display: flex;
              align-items: center;
              border-bottom: 3px solid rgba(130, 130, 124, 0);
              position: relative;

              .itemDetailBox {
                display: none;
                position: absolute;
                top: 55px;
                padding: 15px;
                color: #999999;
                box-sizing: border-box;
                background-color: rgb(13, 12, 13);
                font-size: 13px;

                .itemDetail {
                  padding: 7px 0;
                }
              }
            }

            .item:hover, .item:active {
              border-bottom: 3px solid #177EE6;
            }

            .item:hover > .itemDetailBox, .item:active > .itemDetailBox {
              display: block;
            }

            .selected {
              border-bottom: 3px solid #177EE6;
            }
          }


        }
      }

      .hideMenu {
        -webkit-animation: fadenum 0.6s ease;
        -moz-animation: fadenum 0.6s ease;
        animation: fadenum 0.6s ease;

        background-color: rgba(21, 19, 21, 0.9);
        width: 100%;
        height: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 5556;
        color: #e8e1e8;
        top: 50px;
        padding: 20px 0;

        .menuItem {
          cursor: pointer;
          padding: 5px 20px;
          box-sizing: border-box;
          width: 100%;
        }
      }

      .bannerInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        top: 230px;
        position: absolute;
        z-index: 555;

        .title {
          text-align: center;
          min-width: 500px;
          word-break: break-word;
          color: #177EE6;
          font-size: 48px;
          font-weight: bold;
        }

      }
    }
  }

  @keyframes fadenum { /*设置内容由显示变为隐藏*/
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Extra large devices (large laptops and desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .header-box {
      height: 500px;

      .header-abs {
        height: 500px;

        .topMenuMiddle {
          width: 1000px;
        }
      }
    }

  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    body {
      min-width: 300px !important;
    }
    .header-box {
      height: 250px !important;
      .header-abs {
        width: 100% !important;
        height: 250px !important;
        overflow: hidden !important;

        .topMenuMiddle {
          width: 100%;
          box-sizing: border-box;
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
      }

      .bannerInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        top: 130px !important;
        position: absolute;
        z-index: 555;

        .title {
          color: #177EE6;
          font-size: 30px !important;
        }
      }
    }

  }


</style>
