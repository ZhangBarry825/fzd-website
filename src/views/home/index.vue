<template>
  <div class="home-container">
    <Banner v-bind:isShow="isShow"></Banner>

    <div class="about-us-box">
      <div class="content" v-if="isShow">
        <div class="leftImg">
          <img src="../../../public/static/images/about1.png" alt="">
        </div>
        <div class="rightTitle">
          <div class="text1">ABOUT US</div>
          <div class="text2">ABOUT US</div>
        </div>
        <div class="rightText">
          <div class="text">
            China Building Materials International Trade product system basically covers all categories in the field of
            building materials. The main products are: steel, aluminum, construction machinery and equipment, coal,
            glass
            fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products,
            waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products,
            geotechnical materials, plates, hardware products, etc.
          </div>
          <div class="more">
            <div class="box">
              more
              <img src="../../../public/static/images/arrow_right.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="content-mobile" v-if="!isShow">
        <div class="title">
          <div class="text1">ABOUT US</div>
          <div class="text2">ABOUT US</div>
        </div>
        <div class="img">
          <img src="../../../public/static/images/about1.png" alt="">
        </div>
        <div class="textBox">
          <div class="text">
            China Building Materials International Trade product system basically covers all categories in the field of
            building materials. The main products are: steel, aluminum, construction machinery and equipment, coal,
            glass
            fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products,
            waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products,
            geotechnical materials, plates, hardware products, etc.
          </div>
          <div class="more">
            <div class="box">
              more
              <img src="../../../public/static/images/arrow_right.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="products-box">
      <div class="title">
        <div class="text1">PRODUCTS</div>
        <div class="text2">PRODUCTS</div>
      </div>
      <div class="items">
        <div class="item" @click="goTo('/product-detail')">
          <div class="img" :style="'background-image: url('+backImg+')'">
            <div class="des">Pole</div>
          </div>
          <div class="info">
            <div class="infoTitle">Pole</div>
            <div class="infoDes">Aluminum and its alloy are one of the most widely used and economical ...</div>
            <div class="infoMore">
              more +
            </div>
          </div>
        </div>
        <div class="item" @click="goTo('/product-detail')">
          <div class="img" :style="'background-image: url('+backImg+')'">
            <div class="des">Pipe</div>
          </div>
          <div class="info">
            <div class="infoTitle">Pipe</div>
            <div class="infoDes">Aluminum and its alloy are one of the most widely used and economical ...</div>
            <div class="infoMore">
              more +
            </div>
          </div>
        </div>
        <div class="item" @click="goTo('/product-detail')">
          <div class="img" :style="'background-image: url('+backImg+')'">
            <div class="des">Stick</div>
          </div>
          <div class="info">
            <div class="infoTitle">Stick</div>
            <div class="infoDes">Aluminum and its alloy are one of the most widely used and economical ...</div>
            <div class="infoMore">
              more +
            </div>
          </div>
        </div>
      </div>
      <div class="rightButton">
        <img src="../../../public/static/images/arrow_right1.png" alt="">
      </div>
    </div>

    <div class="line-box">
      <div class="content" v-if="isShow">
        <div class="left">
          <div class="leftTitle">
            <div class="text1">PRODUCTION LINE</div>
            <div class="text2">PRODUCTION LINE</div>
          </div>
          <div class="leftDes">
            Driven by innovation and change, focusing on the field of materials and equipment trade services, relying on
            the core product line and global marketing network that has been built for many years, we will build the
            operation capability and global resource coordination capability of global procurement and global sales, and
            provide customers with one-stop supply chain integrated service solutions such as procurement, sales,
            finance, logistics, risk control, etc.
          </div>
          <div class="leftMore">
            more +
          </div>
        </div>
        <div class="right">
          <div class="buttons">
            <div class="topButton">
              <img src="../../../public/static/images/left1.png" alt="">
            </div>
            <div class="downButton"><img src="../../../public/static/images/right1.png" alt=""></div>
          </div>
          <div class="img" :style="'background-image:url('+backImg2+')'"></div>
        </div>
      </div>
      <div class="content-mobile" v-if="!isShow">
        <div class="title">
          <div class="text1">PRODUCTION LINE</div>
          <div class="text2">PRODUCTION LINE</div>
        </div>
        <div class="img" :style="'background-image:url('+backImg2+')'">
        </div>
        <div class="textBox">
          <div class="text">
            Driven by innovation and change, focusing on the field of materials and equipment trade services, relying on
            the core product line and global marketing network that has been built for many years, we will build the
            operation capability and global resource coordination capability of global procurement and global sales, and
            provide customers with one-stop supply chain integrated service solutions such as procurement, sales,
            finance, logistics, risk control, etc.
          </div>
          <div class="more">
            <div class="box">
              more
              <img src="../../../public/static/images/arrow_right.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="advantages-box">
      <div class="title">
        <div class="text1">OUR ADVANTAGES</div>
        <div class="text2">OUR ADVANTAGES</div>
      </div>
      <div class="items">
        <div class="item">
          <div class="img">
            <img src="../../../public/static/images/adv1.png" alt="">
          </div>
          <div class="info">
            <div class="text">Quality</div>
            <div class="text">assurance</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../public/static/images/adv2.png" alt="">
          </div>
          <div class="info">
            <div class="text">Complete</div>
            <div class="text">specifications</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../public/static/images/adv3.png" alt="">
          </div>
          <div class="info">
            <div class="text">Meticulous</div>
            <div class="text">service</div>
          </div>
        </div>
      </div>
    </div>

    <div class="news-box">
      <div class="content" v-if="isShow">
        <div class="newsLeft">
          <div class="img1" :style="'background-image: url('+backImgN1+')'"></div>
          <div class="img2" :style="'background-image: url('+backImgN2+')'"></div>
        </div>
        <div class="newsRight">
          <div class="title">
            <div class="text1">News</div>
            <div class="text2">News</div>
          </div>
          <div class="items">
            <div class="item" @click="goTo('/detail')">
              <div class="itemLeft">
                <div class="leftTop">01</div>
                <div class="leftDown">5-15</div>
              </div>
              <div class="itemRight">
                <div class="rightTitle">Composition</div>
                <div class="rightDes">The composition of 6061-t6 aluminum plate determines the performance</div>
              </div>
            </div>
            <div class="item" @click="goTo('/detail')">
              <div class="itemLeft">
                <div class="leftTop">02</div>
                <div class="leftDown">5-15</div>
              </div>
              <div class="itemRight">
                <div class="rightTitle">
                  CompositionCompositionCompositionCompositionCompositionCompositionCompositionCompositionCompositionComposition
                </div>
                <div class="rightDes">The composition of 6061-t6 aluminum plate determines the performanceThe
                  composition of 6061-t6 aluminum plate determines the performance
                </div>
              </div>
            </div>
            <div class="item" @click="goTo('/detail')">
              <div class="itemLeft">
                <div class="leftTop">03</div>
                <div class="leftDown">5-15</div>
              </div>
              <div class="itemRight">
                <div class="rightTitle">Composition</div>
                <div class="rightDes">The composition of 6061-t6 aluminum plate determines the performance</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="content-mobile" v-if="!isShow">
        <div class="title">
          <div class="text1">NEWS</div>
          <div class="text2">NEWS</div>
        </div>

        <div class="items">
          <div class="item">
            <div class="itemLeft">
              <div class="leftTop">01</div>
              <div class="leftDown">5-15</div>
            </div>
            <div class="itemRight">
              <div class="rightTitle">Composition</div>
              <div class="rightDes">The composition of 6061-t6 aluminum plate determines the performance</div>
            </div>
          </div>
          <div class="item">
            <div class="itemLeft">
              <div class="leftTop">02</div>
              <div class="leftDown">5-15</div>
            </div>
            <div class="itemRight">
              <div class="rightTitle">
                CompositionCompositionCompositionCompositionCompositionCompositionCompositionCompositionComposition
              </div>
              <div class="rightDes">The composition of 6061-t6 aluminum plate determines the performance</div>
            </div>
          </div>
          <div class="item">
            <div class="itemLeft">
              <div class="leftTop">03</div>
              <div class="leftDown">5-15</div>
            </div>
            <div class="itemRight">
              <div class="rightTitle">Composition</div>
              <div class="rightDes">The composition of 6061-t6 aluminum plate determines the performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
  import Banner from '../../components/Banner/index'
  import Footer from '../../components/Footer/index'

  export default {
    name: "Home",
    data() {
      return {
        screenWidth: document.body.clientWidth,
        backImg: require('../../../public/static/images/p1.png'),
        backImg2: require('../../../public/static/images/pl.png'),
        backImg3: require('../../../public/static/images/pl.png'),
        backImg4: require('../../../public/static/images/pl.png'),
        backImg5: require('../../../public/static/images/pl.png'),
        backImgN1: require('../../../public/static/images/n1.png'),
        backImgN2: require('../../../public/static/images/n2.png'),
      }
    },
    computed: {
      isShow(){
        return this.$store.getters.isShow
      }
    },
    watch:{
      isShow: (newVal,oldVal) => {

      }
    },
    components: {
      Banner,
      Footer,
    },
    methods:{
      goTo(path){
        this.$router.push({path:path})
      }
    }
  }
</script>

<style scoped lang="scss">
  .home-container {
    overflow: hidden;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .about-us-box {
      padding: 80px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      box-sizing: border-box;

      .content {
        width: 992px;
        height: 500px;
        position: relative;

        .leftImg {
          position: absolute;
          z-index: 0;

          img {
            width: 800px;
            height: 500px;
          }
        }

        .rightTitle {
          position: absolute;
          right: 0;
          z-index: 2;

          .text1 {
            text-align: right;
            font-size: 48px;
            position: relative;
            top: 50px;
            font-weight: bold;
          }

          .text2 {
            text-align: right;
            font-size: 72px;
            color: #F2F2F2;
          }
        }

        .rightText {
          position: absolute;
          z-index: 1;
          right: 0;
          width: 740px;
          height: 300px;
          background-color: #177EE6;
          padding: 50px 50px;
          box-sizing: border-box;
          top: 150px;
          color: #FFFFFF;
          text-align: justify;

          .text {
            line-height: 2;
          }

          .more {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
            font-size: 20px;

            .box {
              cursor: pointer;
              width: 77px;

              img {
                width: 15px;
                margin-left: 5px;
              }
            }

          }
        }
      }

    }
    .products-box {
      background-color: #F7F7F7;
      padding-bottom: 60px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;

        .text1 {
          font-size: 48px;
          font-weight: bold;
          position: relative;
          top: 50px;
        }

        .text2 {
          font-size: 72px;
          color: #E6E6E6;
        }
      }

      .items {
        width: 992px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 50px 0;
        box-sizing: border-box;

        .item {
          width: 310px;
          background-color: #FFFFFF;
          cursor: pointer;
          .img {
            width: 100%;
            height: 280px;
            background-size: cover;
            background-position: center center;

            .des {
              display: none;
            }
          }

          .info {
            padding: 35px;
            box-sizing: border-box;
            font-size: 16px;

            .infoTitle {
              font-size: 24px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 100%;
            }

            .infoDes {
              margin: 15px 0;
              box-sizing: border-box;
              line-height: 1.5;
              max-width: 100%;
              word-break: break-all;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            .infoMore {
              cursor: pointer;
              border: 1px solid #000;
              width: 120px;
              padding: 10px 0;
              text-align: center;
            }
          }
        }

        .item:hover {
          color: #FFFFFF;

          .info {
            background-color: #177EE6;

            .infoMore {
              border: 1px solid #FFF;
            }
          }
        }
      }

      .rightButton {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
          cursor: pointer;
          width: 60px;
          height: 60px;
        }
      }
    }
    .line-box {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 50px 0;

      .content {
        width: 992px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left {
          padding-bottom: 40px;
          width: 570px;

          .leftTitle {
            width: 100%;
            text-align: left;

            .text1 {
              font-size: 48px;
              font-weight: bold;
              position: relative;
              top: 50px;
            }

            .text2 {
              font-size: 60px;
              color: #E6E6E6;
            }
          }

          .leftDes {
            margin: 20px 0;
            font-size: 16px;
            line-height: 1.7;
            text-align: justify;
          }

          .leftMore {
            font-size: 16px;
            cursor: pointer;
            border: 1px solid #000;
            width: 120px;
            padding: 10px 0;
            text-align: center;
          }
        }

        .right {
          display: flex;
          flex-direction: row;
          width: 412px;

          .buttons {
            align-self: flex-end;
            margin-bottom: 50px;
            width: 60px;

            .topButton, .downButton {
              width: 60px;
              height: 60px;
              background-color: #20a0ff;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }

            .downButton {
              background-color: #000000;
            }
          }

          .img {
            width: 362px;
            height: 100%;
            background-position: center;
            background-size: cover;
          }
        }
      }
    }
    .advantages-box {
      background-color: #F7F7F7;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;

        .text1 {
          font-size: 48px;
          font-weight: bold;
          position: relative;
          top: 50px;
        }

        .text2 {
          font-size: 72px;
          color: #E6E6E6;
        }
      }

      .items {
        width: 992px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 50px;
        box-sizing: border-box;

        .item {
          width: 280px;

          .img {
            width: 100%;
            height: 305px;
            background-size: cover;
            background-position: center center;
          }

          .info {
            padding: 60px 35px;
            box-sizing: border-box;
            font-size: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .text {
              padding-bottom: 10px;
            }
          }
        }

      }
    }
    .news-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 60px 0;

      .content {
        width: 992px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 50px;

        .newsLeft {
          position: relative;

          .img1 {
            width: 380px;
            height: 400px;
            background-size: cover;
            background-position: center center;
            z-index: 1;
          }

          .img2 {
            position: absolute;
            width: 227px;
            height: 227px;
            right: -50px;
            bottom: -50px;
            background-size: cover;
            background-position: center center;
            z-index: 555;
          }
        }

        .newsRight {
          width: 530px;

          .title {
            .text1 {
              font-size: 48px;
              font-weight: bold;
              position: relative;
              top: 25px;
              z-index: 5;
            }

            .text2 {
              font-size: 72px;
              color: #E6E6E6;
              position: relative;
              top: -25px;
            }
          }

          .items {
            display: flex;
            flex-direction: column;
            width: 100%;

            .item {
              cursor: pointer;
              width: 100%;
              padding: 10px 0;
              display: flex;
              flex-direction: row;

              .itemLeft {
                width: 50px;

                .leftTop {
                  font-weight: bold;
                  color: #222222;
                  font-size: 35px;
                  padding: 5px 0;
                }

                .leftDown {
                  color: #999999;
                  font-size: 15px;
                  padding: 5px 0;
                }
              }

              .itemRight {
                margin-left: 30px;

                .rightTitle {
                  color: #222222;
                  font-size: 17px;
                  padding: 10px 0;

                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: 470px;
                }

                .rightDes {
                  color: #999999;
                  font-size: 15px;

                  max-width: 470px;
                  word-break: break-all;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .about-us-box {
      padding: 20px !important;
      width: 100% !important;
      display: block !important;
      box-sizing: border-box;

      .content-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .title {
          text-align: center;
          font-size: 30px;
          padding: 10px 0;
          font-weight: bold;

          .text1 {
            font-size: 24px;
            position: relative;
            top: 20px;
            font-weight: bold;
          }

          .text2 {
            font-size: 34px;
            color: #F2F2F2;
          }
        }

        .img {
          width: 90%;
          /*min-width: 300px;*/
          display: flex;
          justify-content: center;

          img {
            width: 100%;
          }
        }

        .textBox {
          width: 100%;
          padding: 15px;
          box-sizing: border-box;

          .text {
            line-height: 2;
            word-break: break-all;
            text-align: justify;
          }

          .more {
            margin-top: 10px;
            width: 100%;
            display: flex;
            font-size: 18px;
            justify-content: center;

            .box {
              padding: 10px;
              color: #FFF;
              background-color: #20a0ff;

              img {

              }
            }
          }
        }
      }
    }
    .products-box {
      padding-bottom: 20px;
      background-color: #F7F7F7;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;

        .text1 {
          font-size: 24px;
          font-weight: bold;
          position: relative;
          top: 20px;
        }

        .text2 {
          font-size: 34px;
          color: #E6E6E6;
        }
      }

      .items::-webkit-scrollbar { /* Chrome Safari */
        display: none;
      }

      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 20px 0;

        .item {
          cursor:pointer;
          margin-bottom: 10px;
          width: 30%;
          background-color: #FFFFFF;

          .img {
            width: 100%;
            height: 150px;
            background-size: cover;
            background-position: center center;
            position: relative;

            .des {
              height: 40px;
              display: flex !important;
              justify-content: center;
              align-items: center;
              color: #FFF;
              bottom: 0;
              width: 100%;
              font-size: 15px;
              position: absolute;
              background-color: rgba(23, 126, 230, 0.65);
            }
          }

          .info {
            display: none !important;
          }
        }
      }

      .rightButton {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
          cursor: pointer;
          width: 40px;
          height: 40px;
        }
      }
    }
    .line-box {
      .content-mobile {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          text-align: center;
          font-size: 30px;
          padding: 10px 0;
          font-weight: bold;

          .text1 {
            font-size: 24px;
            position: relative;
            top: 20px;
            font-weight: bold;
          }

          .text2 {
            font-size: 34px;
            color: #F2F2F2;
          }
        }

        .img {
          width: 80%;
          height: 200px;
          /*min-width: 300px;*/
          display: flex;
          justify-content: center;

          background-position: center;
          background-size: cover;

          img {
            width: 80%;
          }
        }

        .textBox {
          width: 100%;
          padding: 30px;
          box-sizing: border-box;

          .text {
            line-height: 1.7;
            word-break: break-all;
          }

          .more {
            margin-top: 10px;
            width: 100%;
            display: flex;
            font-size: 18px;
            justify-content: center;

            .box {
              padding: 10px;
              color: #FFF;
              background-color: #20a0ff;

              img {

              }
            }
          }
        }
      }
    }
    .advantages-box {
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #F7F7F7;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;

        .text1 {
          font-size: 24px;
          font-weight: bold;
          position: relative;
          top: 20px;
        }

        .text2 {
          font-size: 34px;
          color: #E6E6E6;
        }
      }

      .items::-webkit-scrollbar { /* Chrome Safari */
        display: none;
      }

      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 20px 0;

        .item {
          margin-bottom: 10px;
          width: 30%;

          .img {
            width: 100%;
            background-size: cover;
            background-position: center center;
            position: relative;
            text-align: center;

            img {
              width: 80%;
            }
          }

          .info {
            display: flex;
            flex-direction: column;
            align-items: center;

            .text {
              margin-top: 10px;
            }
          }
        }
      }
    }
    .news-box {
      width: 100%;
      padding: 20px 0;

      .content-mobile {
        width: 100%;
        padding: 0 30px;

        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          text-align: center;

          .text1 {
            font-size: 24px;
            font-weight: bold;
            position: relative;
            top: 20px;
          }

          .text2 {
            font-size: 34px;
            color: #E6E6E6;
          }
        }

        .items {
          display: flex;
          flex-direction: column;
          width: 100%;

          .item {
            cursor: pointer;
            width: 100%;
            padding: 10px 0;
            display: flex;
            flex-direction: row;

            .itemLeft {
              width: 50px;

              .leftTop {
                font-weight: bold;
                color: #222222;
                font-size: 35px;
              }

              .leftDown {
                color: #999999;
                font-size: 15px;
                padding: 5px 0;
              }
            }

            .itemRight {
              margin-left: 30px;

              .rightTitle {
                color: #222222;
                font-size: 17px;
                line-height: 1.1;

                max-width: 100%;
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
              }

              .rightDes {
                color: #999999;
                font-size: 15px;
                margin: 10px 0;

                max-width: 100%;
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
</style>
