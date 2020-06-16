<template>
  <div class="detail-box">
    <Header :banner-title="'EQUIPMENT & WORKSHOP'" :menu-id="2" :banner-num="3" :is-show="isShow"></Header>
    <div class="detail-center">
      <div class="title">
        <div class="text1">EQUIPMENT&WORKSHOP</div>
        <div class="text2">EQUIPMENT&WORKSHOP</div>
      </div>
      <div class="items">
        <div class="item" :style="'background-image: url('+baseImgUrl+item.imageUrl+')'" v-for="(item,index) in equipmentList" @click="goTo('/detail?type=equipment&id='+item.id)"></div>
      </div>
      <div class="pageButton">
        <div class="buttons">
          <div class="left" :style="'background-image: url('+pageLeft+')'" v-if="hasPrevious" @click="changePage('left')"></div>
          <div class="left" :style="'background-image: url('+pageNoneLeft+')'" v-if="!hasPrevious"></div>
          <div class="right" :style="'background-image: url('+pageRight+')'" v-if="hasNext" @click="changePage('right')"></div>
          <div class="right" :style="'background-image: url('+pageNoneRight+')'" v-if="!hasNext"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'
  import {geEquipmentList} from "@/api/about-us";

  export default {
    name: "Equipment",
    components: {
      Header,
      Footer
    },
    data(){
      return{
        baseImgUrl: this.$globalData.baseImgUrl,
        img:require('../../../public/static/images/detailp.png'),
        img1:require('../../../public/static/images/n1.png'),
        pageNum:1,
        pageSize:9,
        hasPrevious:false,
        hasNext:false,
        equipmentList:[],
        pageLeft: require('../../../public/static/images/btn_more_l.png'),
        pageNoneLeft: require('../../../public/static/images/btn_more_none_l.png'),
        pageRight: require('../../../public/static/images/btn_more_r.png'),
        pageNoneRight: require('../../../public/static/images/btn_more_none_r.png'),
      }
    },
    methods:{
      goTo(path){
        this.$router.push({path:path})
      },
      changePage(type){
        if(type==='left'){
          this.fetchData(-1)

        }else if(type==='right'){
          this.fetchData(+1)
        }
      },
      fetchData(num = 0){
        geEquipmentList({
          pageNum:this.pageNum + num,
          pageSize:this.pageSize
        }).then(res=>{
          if(res.code && res.code===200){
            this.equipmentList=res.data.list
            this.hasNext=res.data.hasNextPage
            this.hasPrevious=res.data.hasPreviousPage
            this.pageNum=this.pageNum + num
          }
        })
      }
    },
    mounted() {
      this.fetchData()
    },
    computed: {
      isShow() {
        if(this.$store.getters.isShow){
          this.pageSize=9
        }else {
          this.pageSize=8
        }
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
      .items::after{
        height: 0;
        width: 300px;
        min-width: 300px;
        content: "";
      }
      .items{
        width: 992px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
          cursor: pointer;
          width: 300px;
          height: 300px;
          margin-bottom: 50px;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .item:hover {
          transition: transform 0.5s;
          transform: scale(1.05)
        }
      }
      .pageButton {
        width: 100%;
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
      padding: 0 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-bottom:20px;
      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        flex-wrap: wrap;
        overflow: hidden;
        text-align: left;
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
      .items::after{
        height: 0;
        width: 165px;
        min-width: 165px;
        content: "";
      }
      .items{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        .item{
          margin: 0 10px;
          cursor: pointer;
          width: 140px;
          height: 140px;
          margin-bottom: 20px;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
      }
      .pageButton {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px 0;
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
