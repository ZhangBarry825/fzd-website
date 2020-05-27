<template>
  <div class="app-list-box">
    <Header :is-show="isShow" :menu-id="6" :banner-title="'APPLICATION'" :banner-num="5"></Header>
    <div class="appCenter">
      <div class="title">
        <div class="text1">APPLICATION</div>
        <div class="text2">APPLICATION</div>
      </div>
      <div class="appItems">
        <div class="item" @click="goTo('/application-detail?id='+item.id)" v-for="(item,index) in appList">
          <div class="img" :style="'background-image: url('+baseImgUrl+item.imageUrl+')'"></div>
          <div class="info">
            <div class="title">{{item.title}}</div>
            <div class="detail">
              {{item.introduction}}
            </div>
          </div>
        </div>
      </div>

      <div class="pageButton">
        <div class="buttons">
          <div class="left" :style="'background-image: url('+pageLeft+')'" v-if="hasPrevious" @click="changePage('left')"></div>
          <div class="left" :style="'background-image: url('+pageNoneLeft+')'" v-if="!hasPrevious"  @click="changePage('left')"></div>
          <div class="right" :style="'background-image: url('+pageRight+')'" v-if="hasNext"  @click="changePage('right')"></div>
          <div class="right" :style="'background-image: url('+pageNoneRight+')'" v-if="!hasNext"  @click="changePage('right')"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header/index";
  import Footer from "@/components/Footer/index";
  import {getAppList} from "@/api/application";

  export default {
    name: "ApplicationList",
    computed: {
      isShow() {
        return this.$store.getters.isShow
      }
    },
    data() {
      return {
        baseImgUrl: this.$globalData.baseImgUrl,
        img: require('../../../public/static/images/compony_img.png'),
        pageLeft: require('../../../public/static/images/btn_more_l.png'),
        pageNoneLeft: require('../../../public/static/images/btn_more_none_l.png'),
        pageRight: require('../../../public/static/images/btn_more_r.png'),
        pageNoneRight: require('../../../public/static/images/btn_more_none_r.png'),
        pageSize:6,
        appList:[],
        pageNum:1,
        hasNext:false,
        hasPrevious:false,
      }
    },
    components: {
      Header,
      Footer
    },
    watch: {
      isShow: (newVal, oldVal) => {
      },
      $route(to, from) {
        this.$router.go(0)
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      changePage(type){
        if(type === 'left' & this.hasPrevious){
          this.fetchData(-1)
        }else if(type === 'right' & this.hasNext){
          this.fetchData(1)
        }else {

        }

      },
      fetchData(num=0) {
        getAppList({
          pageSize:this.pageSize,
          pageNum:this.pageNum+num,
        }).then(res=>{
          if(res.code && res.code===200){
            this.appList=res.data.list
            this.hasNext=res.data.hasNextPage
            this.hasPrevious=res.data.hasPreviousPage
            this.pageNum=this.pageNum+num
          }
        })
      },
      goTo(path) {
        this.$router.push({path: path})
      }
    }
  }
</script>

<style scoped lang="scss">

  .app-list-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Extra large devices (large laptops and desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .appCenter {
      width: 992px;
      padding-bottom: 50px;

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

      .appItems {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
          cursor: pointer;
          margin-bottom: 50px;
          width: 450px;
          display: flex;
          flex-direction: column;

          .img {
            width: 100%;
            height: 200px;
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .info {
            width: 100%;
            display: flex;
            flex-direction: column;
            color: #222222;

            .title {
              text-align: left !important;
              font-size: 18px;
              margin: 15px 0;
              align-self: flex-start;

              word-break: break-all;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }

            .detail {
              font-size: 16px;
              text-align: justify;
              line-height: 1.5;

              max-width: 100%;
              word-break: break-all;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 5;
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
    .appCenter {
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

      .appItems {
        padding: 0 20px;
        box-sizing: inherit;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
          cursor: pointer;
          margin-bottom: 50px;
          width: 100%;
          display: flex;
          flex-direction: column;

          .img {
            width: 100%;
            height: 200px;
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .info {
            width: 100%;
            display: flex;
            flex-direction: column;
            color: #222222;

            .title {
              text-align: left !important;
              font-size: 18px;
              margin: 15px 0;
              align-self: flex-start !important;

              word-break: break-all;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }

            .detail {
              font-size: 16px;
              text-align: justify;
              line-height: 1.5;

              max-width: 100%;
              word-break: break-all;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 5;
              overflow: hidden;
            }
          }
        }
      }

      .pageButton {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 50px;

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

</style>
