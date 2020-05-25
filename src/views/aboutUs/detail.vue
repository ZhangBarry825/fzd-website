<template>
  <div class="detail-box">
    <Header :banner-title="'DETAIL'" :is-show="isShow" :banner-num="4"></Header>
    <div class="detail-center">
      <div class="title">
        <div class="text1">DETAIL</div>
        <div class="text2">DETAIL</div>
      </div>
      <div class="content">
        <div class="img" :style="'background-image: url('+img+')'"></div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
        </div>
        <div class="text">
          China Building Materials International Trade product system basically covers all categories in the field of building materials. The main products are: steel, aluminum, construction machinery and equipment, coal, glass fiber products, solar modules, ductile iron castings, thermal insulation materials, energy-saving products, waterproof materials, refractory materials, decorative materials, adhesive tapes, PE plastic products, geotechnical.
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
        img:require('../../../public/static/images/detailp.png')
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
        width: 100%;
        .img{
          width: 100%;
          height: 260px;
          background-position: top center;
          background-size: cover;
          margin: 30px 0;
        }
        .text{
          padding: 10px 0;
          line-height: 1.7;
          text-indent: 2em;
          text-align: justify;
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
        width: 100%;
        .img{
          width: 100%;
          height: 180px;
          background-position: top center;
          background-size: cover;
          margin: 30px 0;
        }
        .text{
          padding: 10px 0;
          line-height: 1.5;
          text-indent: 2em;
          text-align: justify;
        }
      }
    }
  }
</style>
