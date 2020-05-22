<template>
  <div class="header-box">
    <div class="topMenu">
      <!--      <el-row :gutter="10" style="margin: 0">-->
      <!--        <el-col :xs="0" :sm="0.5" :md="3" :lg="3" :xl="3">-->
      <!--          <div class="grid-content bg-purple a1"><a style="opacity: 0">1</a></div>-->
      <!--        </el-col>-->
      <!--        <el-col :xs="24" :sm="23" :md="18" :lg="18" :xl="18">-->

      <!--        </el-col>-->
      <!--        <el-col :xs="0" :sm="0.5" :md="3" :lg="3" :xl="3">-->
      <!--          <div class="grid-content bg-purple-light a3"><a style="opacity: 0">3</a></div>-->
      <!--        </el-col>-->
      <!--      </el-row>-->

      <div class="grid-content topMenuMiddle">
        <img class="topLogo" src="../../../public/static/images/logo.png" alt="">
        <div class="right">
          <div class="item selected">HOME</div>
          <div class="item">ABOUT US</div>
          <div class="item">ALUMINIUM CIRCLE</div>
          <div class="item">ALUMINIUM COIL/SHEET</div>
          <div class="item">ALUMINiUM FOIL</div>
          <div class="item">APPLICATION&PROJECT</div>
          <div class="item">CONTACT</div>
        </div>

      </div>

    </div>


    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :style="'background-image: url('+backImg1+')'">Slide 1</div>
        <div class="swiper-slide" :style="'background-image: url('+backImg2+')'">Slide 2</div>
        <div class="swiper-slide" :style="'background-image: url('+backImg3+')'">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: "Header",
    data() {
      return {
        activeIndex: '1',
        backImg1: require('../../../public/static/images/banner1.png'),
        backImg2: require('../../../public/static/images/banner2.png'),
        backImg3: require('../../../public/static/images/banner3.png')
      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    }
  }
</script>

<style scoped lang="scss">
  .swiper-container {
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .swiper-slide {
      background-size: cover;
      background-position: center center;
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .topMenuMiddle {
      width: 100%;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .topMenuMiddle {
      width: 100%;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .topMenuMiddle {
      width: 100%;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .topMenuMiddle {
      width: 900px;
      display: none;
      .right{
        display: none;
      }
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {

    .topMenuMiddle {
      width: 1000px;
    }

  }

  .header-box {
    width: 100%;
    height: 760px;
    background-color: gainsboro;
  }

  .topMenu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: 555;
  }


  .topLogo {
    width: 90px;
  }

  .grid-content {
    padding: 0;
  }

  .topMenuMiddle {
    color: #fff;
    border: 1px solid red;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .right {
      height: 54px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      .item {
        cursor: pointer;
        font-size: 12px;
        padding: 0 5px;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 3px solid rgba(130, 130, 124, 0);
      }

      .item:hover {
        background-color: rgba(130, 130, 124, 0.4);
      }

      .selected {
        border-bottom: 3px solid #177EE6;
      }
    }


  }


</style>
