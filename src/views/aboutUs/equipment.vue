<template>
  <div class="detail-box">
    <Header :banner-title="'EQUIPMENT & WORKSHOP'" :banner-num="3" :is-show="isShow"></Header>
    <div class="detail-center">
      <div class="title">
        <div class="text1">EQUIPMENT&WORKSHOP</div>
        <div class="text2">EQUIPMENT&WORKSHOP</div>
      </div>
      <div class="items">
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
        <div class="item" :style="'background-image: url('+img1+')'"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'

  export default {
    name: "Equipment",
    components: {
      Header,
      Footer
    },
    data(){
      return{
        img:require('../../../public/static/images/detailp.png'),
        img1:require('../../../public/static/images/n1.png'),
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
        text-align: center;
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
      .items{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        .item{
          cursor: pointer;
          width: 120px;
          height: 120px;
          margin-bottom: 10px;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>
