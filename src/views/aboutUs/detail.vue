<template>
  <div class="detail-box">
    <Header :banner-title="'DETAIL'" :is-show="isShow" :banner-num="4"></Header>
    <div class="detail-center">
      <div class="title">
        <div class="text1">{{detail.title}}</div>
<!--        <div class="text2">DETAIL</div>-->
      </div>
      <div class="content">
        <div class="img" :style="'background-image: url('+baseImgUrl+detail.imageUrl+')'"></div>
        <div class="text" v-html="detail.content">
<!--          {{detail.content}}-->
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'
  import {getBannerDetail, getEquipmentDetail, getNewsDetail} from "@/api/about-us";

  export default {
    name: "Detail",
    components: {
      Header,
      Footer
    },
    data(){
      return{
        baseImgUrl: this.$globalData.baseImgUrl,
        img:require('../../../public/static/images/detailp.png'),
        type:'',
        id:'',

        detail:{
          title:'',
          introduction:'',
          createTime:'',
          content:'',
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
      fetchData(){
        if(this.type=='news'){
          getNewsDetail({
            id:this.id
          }).then(res=>{
            //console.log(res)
            if(res.code && res.code===200){
              this.detail=res.data
            }

          })
        }else if(this.type=='equipment'){
          getEquipmentDetail({
            id:this.id
          }).then(res=>{
            //console.log(res)
            if(res.code && res.code===200){
              this.detail=res.data
            }

          })
        }else if(this.type=='banner'){
          getBannerDetail({
            id:this.id
          }).then(res=>{
            //console.log(res)
            if(res.code && res.code===200){
              this.detail=res.data
            }

          })
        }

      }
    },
    mounted() {
      this.type=this.$route.query.type
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
        padding: 50px 0;
        .text1 {
          font-size: 48px;
          color: #222222;
          position: relative;
          /*top: 50px;*/
        }

        .text2 {
          font-size: 72px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }
      .content{
        width: 100%;
        .img{
          width: 100%;
          height: 260px;
          background-position: center center;
          background-size: cover;
          margin: 30px 0;
        }
        .text{
          min-height: 300px;
          img{
            max-width: 100%;
          }
          /*padding: 10px 0;*/
          line-height: 1.5;
          /*text-indent: 2em;*/
          /*text-align: justify;*/
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
        padding: 20px 0;

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
        width: 100%;
        .img{
          width: 100%;
          height: 180px;
          background-position: center center;
          background-size: cover;
          margin: 30px 0;
        }
        .text{
          min-height: 200px;
         /deep/ img{
            max-width: 100%;
          }
          /*padding: 10px 0;*/
          /*line-height: 1.5;*/
          /*text-indent: 2em;*/
          /*text-align: justify;*/
        }
      }
    }
  }
</style>
