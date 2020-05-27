<template>
  <div class="app-detail-box">
    <Header :menu-id="6" :is-show="isShow" banner-title="APPLICATION DETAIL" :banner-num="5"></Header>
    <div class="app-detail-center">
      <div class="title">
        <div class="text1">{{detail.title}}</div>
<!--        <div class="text2">APPLICATION</div>-->
      </div>
      <div class="articleImg" :style="'background-image: url('+baseImgUrl+detail.imageUrl+')'"></div>
      <div class="articleDetail">
        <div class="text">
          {{detail.content}}
        </div>
      </div>
      <div class="recommend">
        <div class="title">
          <div class="text1">RECOMMEND</div>
          <div class="text2">RECOMMEND</div>
        </div>
        <div class="appItems">
          <div class="item"  @click="goTo('/application-detail?id='+item.id)" v-for="(item,index) in recommend">
            <div class="img"  :style="'background-image: url('+baseImgUrl+item.imageUrl+')'"></div>
            <div class="info">
              <div class="title">{{item.title}}</div>
              <div class="detail">
                {{item.introduction}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header/index";
  import Footer from "@/components/Footer/index";
  import {getAppDetail} from "@/api/application";

  export default {
    name: "ApplicationDetail",
    computed: {
      isShow() {
        return this.$store.getters.isShow
      }
    },
    data(){
      return{
        id:0,
        detail:{},
        recommend:[],
        baseImgUrl: this.$globalData.baseImgUrl,
        img1: require('../../../public/static/images/app1.png'),
        img2: require('../../../public/static/images/app2.png'),
        img3: require('../../../public/static/images/compony_img.png'),
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
    methods:{
      goTo(path){
        this.$router.push({path:path})
      },
      fetchData(){
        getAppDetail({
          id:this.id
        }).then(res=>{
          console.log(res,98765)
          if(res.code && res.code===200){
            this.detail=res.data
            this.recommend=res.data1.list
          }
        })
      }
    },
    mounted() {
      this.id=this.$route.query.id
      this.fetchData()
    }
  }
</script>

<style scoped lang="scss">
  .app-detail-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Extra large devices (large laptops and desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .app-detail-center{
      width: 992px;
      padding: 20px 0;
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 48px;
          color: #222222;
          padding: 50px 0;
          /*position: relative;*/
          /*top: 40px;*/
          font-weight: bold;
        }

        .text2 {
          font-size: 72px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }
      .articleImg{
        width: 100%;
        height: 260px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
      .articleDetail{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 50px 0;
        .text{
          color: #333333;
          font-size: 16px;
          padding: 10px 0;
          line-height: 1.5;
          text-indent: 2em;
          text-align: justify;
        }
      }
      .recommend{
        .title {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .text1 {
            font-size: 24px;
            color: #222222;
            position: relative !important;
            top: 70px !important;
            font-weight: bold;
          }

          .text2 {
            font-size: 36px;
            color: #F2F2F2;
            padding-bottom: 30px;
          }
        }
        .appItems{
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          .item{
            cursor: pointer;
            margin-bottom: 50px;
            width: 450px;
            display: flex;
            flex-direction: column;
            .img{
              width: 100%;
              height: 200px;
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .info{
              width: 100%;
              display: flex;
              flex-direction: column;
              color: #222222;
              .title{
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
              .detail{
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
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .app-detail-center{
      width: 100%;
      padding: 20px 20px;
      .title {
        width: 100% !important;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 24px;
          color: #222222;
          padding: 30px 0;
          /*position: relative;*/
          /*top: 25px;*/
          font-weight: bold;
        }

        .text2 {
          font-size: 34px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }
      .articleImg{
        width: 100%;
        height: 200px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
      .articleDetail{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        .text{
          color: #333333;
          font-size: 16px;
          padding: 10px 0;
          line-height: 1.5;
          text-indent: 2em;
          text-align: justify;
        }
      }
      .recommend{
        .title {
          width: 100% !important;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .text1 {
            font-size: 24px;
            color: #222222;
            position: relative;
            top: 50px;
            font-weight: bold;
          }

          .text2 {
            font-size: 34px;
            color: #F2F2F2;
            padding-bottom: 30px;
          }
        }
        .appItems{
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          .item{
            cursor: pointer;
            margin-bottom: 50px;
            width: 48%;
            min-width: 150px;
            display: flex;
            flex-direction: column;
            .img{
              width: 100%;
              height: 150px;
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .info{
              width: 100%;
              display: flex;
              flex-direction: column;
              color: #222222;
              .title{
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
              .detail{
                font-size: 16px;
                text-align: justify;
                line-height: 1.5;

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
