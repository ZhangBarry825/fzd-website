<template>
  <div class="detail-box">
    <Header :banner-title="'PRODUCTS'" :is-show="isShow" :banner-num="5"></Header>
    <div class="detail-center">
      <div class="title">
        <div class="text1">PRODUCT DETAIL</div>
        <div class="text2">PRODUCT DETAIL</div>
      </div>
      <div class="content">
        <div class="info" v-if="isShow">
          <div class="left">
            <div class="img" :style="'background-image: url('+baseImgUrl+detail.imageUrlList[nowImg].imageUrl+')'"></div>
            <div class="down">
              <div class="imgs" v-if="index<5" :class="{'selected':nowImg==index}" :style="'background-image: url('+baseImgUrl+item.imageUrl+')'" @click="selectImg(index)" v-for="(item,index) in detail.imageUrlList"></div>
            </div>
          </div>
          <div class="right">
            <div class="right1">
              <div class="rightTitle">{{detail.productName}}</div>
              <div class="rightText">
                {{detail.introduction}}
              </div>
            </div>
            <div class="right2">
              <div class="label">Share:</div>
              <img src="../../../public/static/images/icon_email.png" alt="">
              <img src="../../../public/static/images/icon_tel.png" alt="">
              <img src="../../../public/static/images/icon_twitter.png" alt="">
              <img src="../../../public/static/images/icon_fb.png" alt="">
            </div>
            <a class="right3"  href="mailto:943870975@qq.com">
              <img src="../../../public/static/images/email_white.png" alt="">
              943870975@qq.com
            </a>
          </div>
        </div>

        <div class="info-mobile" v-if="!isShow">

          <div class="mobile-des">
            <div class="right1">
              <div class="rightTitle">{{detail.productName}}</div>
              <div class="rightText"> {{detail.introduction}}</div>
            </div>
            <div class="mobile-imgs">
              <div class="img" :style="'background-image: url('+baseImgUrl+detail.imageUrlList[nowImg].imageUrl+')'"></div>
              <div class="down">
                <div class="imgs"  v-if="index<5" :class="{'selected':nowImg==index}" :style="'background-image: url('+baseImgUrl+item.imageUrl+')'" @click="selectImg(index)" v-for="(item,index) in detail.imageUrlList"></div>
              </div>
            </div>
            <div class="right2">
              <div class="label">Share:</div>
              <img src="../../../public/static/images/icon_email.png" alt="">
              <img src="../../../public/static/images/icon_tel.png" alt="">
              <img src="../../../public/static/images/icon_twitter.png" alt="">
              <img src="../../../public/static/images/icon_fb.png" alt="">
            </div>
          </div>
        </div>

        <div class="text" v-html="detail.content"></div>

<!--        <div class="next" @click="nextPage">-->
<!--          <img src="../../../public/static/images/btn_more_r.png" alt="">-->
<!--        </div>-->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'
  import {getProductDetail} from "@/api/product";

  export default {
    name: "ProductDetail",
    components: {
      Header,
      Footer
    },
    data(){
      return{
        id:0,
        baseImgUrl: this.$globalData.baseImgUrl,
        hasNext:false,
        nextId:0,
        nowImg:0,
        img:require('../../../public/static/images/p1.png'),
        detail:{
          productName:'',
          introduction:'',
          createTime:'',
          content:'',
          imageUrlList:[{
            imageUrl:'123'
          }]
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
      }
    },
    methods:{
      nextPage(){
        if(this.hasNext){
          getProductDetail({
            id:this.nextId
          }).then(res=>{
            if(res.code && res.code === 200){
              //console.log(res,876)
              this.detail=res.data





            }
          })
        }else{
          this.$message({
            message:'No more data',
            type:'warning'
          })
        }
      },
      selectImg(num){
        this.nowImg=num
      },
      fetchData(){
        getProductDetail({
          id:this.id
        }).then(res=>{
          if(res.code && res.code === 200){
            //console.log(res,876)
            this.detail=res.data




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
        width: 100%;
        .info{
          width: 100%;
          display: flex;
          flex-direction: row;
          padding-bottom: 10px;
          .left{
            .img{
              width: 370px;
              height: 370px;

              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;
            }
            .down{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding: 10px 0;
              .imgs{
                width: 60px;
                height: 60px;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                cursor:pointer;
                transition: all 0.3s;
              }
              .imgs:hover{
                border: 3px solid #177EE6;
              }
              .selected{
                border: 3px solid #177EE6;
              }
            }
          }
          .right{
            margin-left: 80px;
            text-align: left;
            color: #222222;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 20px;
            .right1{
              .rightTitle{
                font-size: 24px;
                text-align: left;
              }
              .rightText{
                font-size: 16px;
                line-height: 1.5;
                padding: 20px 0;
                text-align: justify;
              }
            }
            .right2{
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              .label{
                font-size: 24px;
                color: #222222;
              }
              img{
                width: 50px;
                height: 50px;
                margin: 0 10px;
                cursor: pointer;
              }
            }
            .right3{
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              color: #FFFFFF;
              width: 250px;
              background-color: #177EE6;
              padding: 18px 0;
              cursor: pointer;
              img{
                margin-right: 10px;
              }
            }
          }

        }
        .text{
          line-height: 1.5;
          /deep/ img{
            max-width: 100%;
          }

          /*padding: 10px 0;*/
          /*line-height: 1.7;*/
          /*text-indent: 2em;*/
          /*text-align: justify;*/
        }
        .next{
          width: 100%;
          text-align: center;
          padding-top: 40px;
          img{
            cursor: pointer;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .detail-center {
      width: 100%;
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
          top: 20px;
        }

        .text2 {
          font-size: 26px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }
      .content{
        width: 100%;
        padding: 0 20px;
        .text{
          /deep/ img{
            max-width: 100%;
          }
          /*padding: 10px 0;*/
          /*line-height: 1.7;*/
          /*text-indent: 2em;*/
          /*text-align: justify;*/
        }
        .mobile-des{
          text-align: left;
          color: #222222;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .right1{
            .rightTitle{
              font-size: 24px;
              text-align: left;
              font-weight: bold;
            }
            .rightText{
              font-size: 16px;
              line-height: 1.5;
              padding: 20px 0;
              text-align: justify;
            }
          }
          .mobile-imgs{
            width: 100%;
            .img{
              width: 100%;
              height: 370px;

              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;
            }
            .down{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding: 10px 0;
              .imgs{
                width: 60px;
                height: 60px;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                cursor:pointer;
              }
              .imgs:hover{
                border: 1px solid #177EE6;
              }
              .selected{
                border: 1px solid #177EE6;
              }
            }
          }
          .right2{
            padding: 10px 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            .label{
              font-size: 16px;
              color: #222222;
              font-weight: bold;
            }
            img{
              width: 40px;
              height: 40px;
              margin: 0 10px;
              cursor: pointer;
            }
          }
        }

        .next{
          width: 100%;
          text-align: center;
          padding-top: 40px;
          img{
            cursor: pointer;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
</style>
