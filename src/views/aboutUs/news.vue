<template>
  <div class="detail-box">
    <Header :banner-title="'NEWS'" :is-show="isShow" :menu-id="2" ></Header>
    <div class="detail-center">
      <div class="title">
        <div class="text1">NEWS</div>
        <div class="text2">NEWS</div>
      </div>
      <div class="content">
        <div class="newsItem">
          <div class="itemLeft">
            <div class="leftTop">01</div>
            <div class="leftDown">5-15</div>
          </div>
          <div class="itemRight">
            <div class="rightTitle">Composition</div>
            <div class="rightDes">
              The composition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.  The compos
              ition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.
            </div>
          </div>
        </div>
        <div class="newsItem">
          <div class="itemLeft">
            <div class="leftTop">02</div>
            <div class="leftDown">5-15</div>
          </div>
          <div class="itemRight">
            <div class="rightTitle">Composition</div>
            <div class="rightDes">
              The composition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.  The compos
              ition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.
            </div>
          </div>
        </div>
        <div class="newsItem">
          <div class="itemLeft">
            <div class="leftTop">03</div>
            <div class="leftDown">5-15</div>
          </div>
          <div class="itemRight">
            <div class="rightTitle">Composition</div>
            <div class="rightDes">
              The composition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.  The compos
              ition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.
            </div>
          </div>
        </div>
        <div class="newsItem">
          <div class="itemLeft">
            <div class="leftTop">04</div>
            <div class="leftDown">5-15</div>
          </div>
          <div class="itemRight">
            <div class="rightTitle">Composition</div>
            <div class="rightDes">
              The composition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.  The compos
              ition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.
            </div>
          </div>
        </div>
        <div class="newsItem">
          <div class="itemLeft">
            <div class="leftTop">05</div>
            <div class="leftDown">5-15</div>
          </div>
          <div class="itemRight">
            <div class="rightTitle">Composition</div>
            <div class="rightDes">
              The composition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.  The compos
              ition of 6061-t6 aluminum plate determines the performance  The composition of 6061-t6 aluminum plate determines.
            </div>
          </div>
        </div>
      </div>


      <div class="pageButton">
        <div class="buttons">
          <div class="left" :style="'background-image: url('+pageNoneLeft+')'"></div>
          <div class="right" :style="'background-image: url('+pageRight+')'"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'

  export default {
    name: "Detail",
    components: {
      Header,
      Footer
    },
    data(){
      return{
        img:require('../../../public/static/images/detailp.png'),
        pageLeft: require('../../../public/static/images/btn_more_l.png'),
        pageNoneLeft: require('../../../public/static/images/btn_more_none_l.png'),
        pageRight: require('../../../public/static/images/btn_more_r.png'),
        pageNoneRight: require('../../../public/static/images/btn_more_none_r.png'),
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
  }
</script>

<style scoped lang="scss">
  .detail-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /* Extra large devices (large laptops and desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .detail-center {
      width: 992px;
      display: flex;
      flex-direction: column;
      padding-bottom:70px ;
      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;

        .text1 {
          font-size: 48px;
          color: #222222;
          position: relative;
          top: 50px;
        }

        .text2 {
          font-size: 72px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }
      .content{
        display: flex;
        flex-direction: column;
        width: 100%;

        .newsItem {
          cursor: pointer;
          width: 100%;
          padding: 10px 0;
          display: flex;
          flex-direction: row;

          .itemLeft {
            width: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .leftTop {
              font-weight: bold;
              color: #222222;
              font-size: 60px;
            }

            .leftDown {
              color: #999999;
              font-size: 24px;
              padding: 5px 0;
            }
          }

          .itemRight {
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .rightTitle {
              color: #222222;
              font-size: 18px;
              line-height: 1.1;
              padding-bottom: 10px;

              max-width: 100%;
              word-break: break-all;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }

            .rightDes {
              color: #999999;
              font-size: 16px;
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
      .pageButton {
        width: 992px;
        display: flex;
        justify-content: center;

        .buttons {
          display: flex;

          .left, .right {
            width: 50px;
            height: 50px;
            background-size: cover;
            background-position: center center;
            cursor: pointer;
          }

          .left {
            margin: 0 20px;
          }

          .right {

          }
        }
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .detail-center {
      width: 100%;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      padding-bottom:20px ;
      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;

        .text1 {
          font-size: 24px;
          color: #222222;
          position: relative;
          top: 25px;
        }

        .text2 {
          font-size: 36px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }
      .content{
        display: flex;
        flex-direction: column;
        width: 100%;

        .newsItem {
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
      .pageButton {
        width: 100%;
        display: flex;
        justify-content: center;

        .buttons {
          display: flex;

          .left, .right {
            width: 40px;
            height: 40px;
            padding: 10px 0;
            background-size: cover;
            background-position: center center;
            cursor: pointer;
          }

          .left {
            margin: 0 20px;
          }

          .right {
            margin-right: 20px;
          }
        }
      }
    }
  }
</style>
