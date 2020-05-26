<template>
  <div class="about-box">
    <Header :is-show="isShow" :menu-id="2" :banner-title="'ABOUT US'" :banner-num="2"></Header>

    <div class="about-content"  v-if="isShow">
      <div class="info">
        <div class="left">
          <div class="top">
            <div class="text1">ABOUT US</div>
            <div class="text2">ABOUT US</div>
          </div>
          <div class="middle"></div>
          <div class="down">
            China Building Materials International Trade product system basically covers all categories in the field of
            building materials. The main products are: steel, aluminum, construction machinery and equipment, coal,
            glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving
            products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic
            products, geotechnical.
          </div>
        </div>
        <div class="right">
          <div class="backColor"  :style="'background-image: url('+img+')'"></div>
        </div>
      </div>
      <div class="article">
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.
        </div>
      </div>
    </div>

    <div class="about-mobile" v-if="!isShow">
      <div class="title">
        <div class="text1">ABOUT US</div>
        <div class="text2">ABOUT US</div>
      </div>
      <div class="des">
        China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
      </div>
      <div class="img" :style="'background-image: url('+img+')'"></div>
      <div class="detail">
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical materials, plates, hardware products, etc.
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
    name: "AboutUs",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        img: require('../../../public/static/images/compony_img.png')
      }
    },
    computed: {
      isShow() {
        return this.$store.getters.isShow
      }
    },
    watch: {
      isShow: (newVal, oldVal) => {
      },
      $route(to, from) {
        this.$router.go(0)
      }
    },
  }
</script>

<style scoped lang="scss">
  .about-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /* Extra large devices (large laptops and desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .about-content {
      width: 992px;
      padding: 20px 0;

      .info {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          flex-direction: column;

          .top {
            .text1 {
              color: #222222;
              font-size: 48px;
              font-weight: bold;
              position: relative;
              top: 25px;
              z-index: 555;
            }

            .text2 {
              color: #F2F2F2;
              font-size: 72px;
              position: relative;
              top: -25px;
            }
          }

          .middle {
            width: 70px;
            border-bottom: 5px solid #000;
            position: relative;
            top: -20px;
          }

          .down {
            width: 400px;
            text-align: justify;
            padding-top: 10px;
            color: #333333;
            font-size: 16px;
            line-height: 1.5;
            text-indent: 2em;
          }
        }

        .right {
          width: 550px;
          height: 350px;

          z-index: 5;
          position: relative;
          background-color: #177EE6;
          top: 20px;
          right: 20px;
          .backColor{
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center center;
            z-index: 4;
            position: absolute;
            top: -20px;
            right: -20px;
          }
        }
      }
      .article{
        padding: 20px 0;
        line-height: 1.5;
        color: #333333;
        font-size: 16px;
        width: 100%;

        .text{
          text-align: justify;
          text-indent: 2em;
          margin: 10px 0;
        }
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .about-mobile{
      width: 100%;
      padding: 20px 20px;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
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
      .des{
        width: 100%;
        text-align: justify;
        line-height: 1.5;
        text-indent: 2em;
      }
      .img{
        height: 200px;
        margin: 20px 0;
        width: 100%;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .detail{
        width: 100%;
        .text{
          text-indent: 2em;
          padding: 10px 0;
          text-align: justify;
          line-height: 1.5;
        }
      }
    }
  }

</style>
