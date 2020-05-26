<template>
  <div class="banner-box">
    <div class="header-abs">
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
        <div class="title">{{nowBanner.title}}</div>
        <div class="description">{{nowBanner.description}}</div>
        <div class="more"  @click="goTo('/product-list?menuId='+activeIndex)">VIEW MORE</div>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :style="'background-image: url('+item.url+')'" v-for="item in bannerData"></div>
        </div>

        <div class="swiper-pagination" style="z-index: 5555"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: "Banner",
    data() {
      return {
        screenWidth: document.body.clientWidth,
        hideMenu: false,
        activeIndex: '1',
        backImg1: require('../../../public/static/images/banner1.png'),
        backImg2: require('../../../public/static/images/banner2.png'),
        backImg3: require('../../../public/static/images/banner3.png'),
        nowBanner: {
          title: 'ALUMINUM1',
          description: 'HIGH QUALITY PRODUCTS',
          url: require('../../../public/static/images/banner1.png')
        },
        bannerData: [
          {
            title: 'ALUMINUM1',
            description: 'HIGH QUALITY PRODUCTS',
            url: require('../../../public/static/images/banner1.png')
          },
          {
            title: 'ALUMINUM2',
            description: 'HIGH QUALITY PRODUCTS',
            url: require('../../../public/static/images/banner2.png')
          },
          {
            title: 'ALUMINUM3',
            description: 'HIGH QUALITY PRODUCTS',
            url: require('../../../public/static/images/banner3.png')
          }
        ]
      }
    },
    props: {
      isShow: {
        default: true,
        type: Boolean
      },
      menuId: {
        default: 1,
        type: Number
      }
    },
    mounted() {

      let _this = this
      //swiper配置
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: false, // 循环模式选项
        speed: 500,
        autoplay: {
          delay: 5000
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        on: {
          slideChange: function () {
            setTimeout(() => {
              _this.nowBanner = _this.bannerData[this.activeIndex]
            }, 100)
          },
        },
      })

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
  .swiper-container {
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33; /* 两种都可以 */
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .swiper-slide {
      background-size: cover;
      background-position: center center;
    }
  }


  .banner-box {
    width: 100%;

    .header-abs {
      width: 100%;
      height: 760px;
      background-color: gainsboro;
      position: absolute;

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
          padding: 10px 20px;
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
        top: 250px;
        position: absolute;
        z-index: 555;

        .title {
          color: #177EE6;
          font-size: 100px;
        }

        .description {
          color: #FFFFFF;
          font-size: 30px;
          margin: 50px 0;
          position: relative;
          left: 200px;
        }

        .more {
          cursor: pointer;
          width: 200px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #FFFFFF;
          font-size: 18px;
          border: 1px solid #FFFFFF;
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
    .banner-box {
      height: 760px;

      .header-abs {
        height: 760px;

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
    .banner-box {
      height: 350px !important;

      .header-abs {
        width: 100% !important;
        height: 350px !important;
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
          font-size: 40px !important;
        }

        .description {
          color: #FFFFFF;
          font-size: 16px !important;
          margin: 30px 0 !important;
          position: relative;
          left: 0 !important;
        }

        .more {
          cursor: pointer;
          width: 80px !important;
          height: 30px !important;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #FFFFFF;
          font-size: 12px !important;
          border: 1px solid #FFFFFF;
        }
      }
    }

  }


</style>
