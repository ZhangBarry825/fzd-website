<template>
  <div class="product-box">
    <Header :is-show="isShow" :menu-id="bannerNum" :banner-title="'PRODUCTS'" :banner-num="3"></Header>
    <div class="products-box">
      <div class="product-center">
        <div class="title">
          <div class="text1">{{classifyName}}</div>
          <div class="text2">{{classifyName}}</div>
        </div>
        <div class="content">
          <div class="content-left">
            <div class="typeItem" :class="{'selected':nowType===index}" @click="changeType(index,item)" v-for="(item,index) in typeGroup">
              {{item.classifyName}}</div>
          </div>
          <div class="content-right">
            <div class="productDetail" @click="goTo('/product-detail?id='+item.id)" v-for="(item,index) in productList">
              <div class="img" :style="'background-image: url('+baseImgUrl+item.imageUrl+')'">
                <div class="des">{{item.productName}}</div>
              </div>
              <div class="info">
                <div class="infoTitle">{{item.productName}}</div>
                <div class="infoDes">{{item.introduction}}</div>
                <div class="infoMore">more +</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pageButton">
          <div class="buttons">
            <div class="left" :style="'background-image: url('+pageLeft+')'" @click="changPage('left')" v-if="hasPrevious"></div>
            <div class="left" :style="'background-image: url('+pageNoneLeft+')'" @click="changPage('left')"v-if="!hasPrevious"></div>
            <div class="right" :style="'background-image: url('+pageRight+')'" @click="changPage('right')" v-if="hasNext"></div>
            <div class="right" :style="'background-image: url('+pageNoneRight+')'" @click="changPage('right')" v-if="!hasNext"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/Header/index'
  import Footer from '../../components/Footer/index'
  import {getProductClassify, getProductList} from "@/api/product";

  export default {
    name: "ProductList",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        id:0,
        pageSize:6,
        pageNum:1,
        nowTypeId:0,
        nowType:0,
        hasNext:false,
        hasPrevious:false,
        typeGroup:[],
        productList:[],
        bannerNum:0,
        classifyName:'',
        baseImgUrl: this.$globalData.baseImgUrl,
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
      isShow: (newVal, oldVal) => {},
      $route (to, from) {
        this.$router.go(0)
      }
    },
    methods:{
      changPage(type){
        if(type === 'left' & this.hasPrevious){
          this.getProductList(-1)
        }else if(type === 'right' & this.hasNext){
          this.getProductList(1)
        }else {

        }
      },
      changeType(index,item){
        this.nowType=index
        getProductList({
          pageNum:1,
          pageSize:this.pageSize,
          classifyId:item.id,
        }).then(res=>{
          //console.log(res,111)
          if(res.code && res.code ===200){
            if(res.data){
              this.hasPrevious=res.data.hasPreviousPage
              this.hasNext=res.data.hasNextPage
              this.productList=res.data.list
              this.pageNum=1
              this.nowTypeId=item.id
            }else {
              this.hasPrevious=false
              this.hasNext=false
              this.productList=[]
              this.pageNum=1
              this.nowTypeId=item.id
            }

            //console.log(this.productList,990)
          }
        })


      },
      goTo(path){
        this.$router.push({path:path})
      },
      getProductList(num){
        getProductList({
          pageNum:this.pageNum+num,
          pageSize:this.pageSize,
          classifyId:this.nowTypeId,
        }).then(res=>{
          if(res.code && res.code ===200){
            this.hasPrevious=res.data.hasPreviousPage
            this.hasNext=res.data.hasNextPage
            this.productList=res.data.list
            this.pageNum=this.pageNum+num
          }
        })
      },
      fetchData(id){
        getProductClassify({
          parentId:id,
          pageNum:1,
          pageSize:5000000
        }).then(res=>{
          if(res.code && res.code ===200){
            this.classifyName=res.data1.classifyName
            if(res.data.length>0){
              this.typeGroup=res.data
              this.nowTypeId=res.data[0].id
              getProductList({
                pageNum:this.pageNum,
                pageSize:this.pageSize,
                classifyId:this.nowTypeId,
              }).then(res=>{
                if(res.code && res.code ===200){
                  if(res.data){
                    this.hasPrevious=res.data.hasPreviousPage
                    this.hasNext=res.data.hasNextPage
                    this.productList=res.data.list
                  }else {
                    this.hasPrevious=false
                    this.hasNext=false
                    this.productList=[]
                  }
                }
              })
            }

          }
        })
      }
    },
    mounted() {
      if(this.$route.query.menuId){
        this.bannerNum=parseInt(this.$route.query.menuId)
      }
      this.id=this.$route.query.id
      this.fetchData(this.id)
    }
  }
</script>

<style scoped lang="scss">
  .product-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  /* Extra large devices (large laptops and desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .product-center {
      width: 992px;
      padding-bottom: 30px;

      .title {
        display: flex;
        flex-direction: column;

        .text1 {
          font-size: 40px;
          color: #222222;
          position: relative;
          top: 40px;
          font-weight: bold;
        }

        .text2 {
          font-size: 54px;
          color: #F2F2F2;
          padding-bottom: 30px;
        }
      }

      .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .content-left {
          display: flex;
          flex-direction: column;
          min-width: 250px;
          background-color: #F7F7F7;
          height: 100%;

          .typeItem {
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
            border-bottom: 0.5px solid gainsboro;
            padding: 25px 50px;
          }

          .typeItem:hover {
            padding-left: 40px;
            border-left: 10px solid #177EE6;
            color: #177EE6;
          }

          .selected {
            padding-left: 40px;
            color: #177EE6;
            border-left: 10px solid #177EE6;
          }
        }


        .content-right::after{
          height: 0;
          width: 230px;
          min-width: 230px;
          content: "";
        }
        .content-right {
          justify-content: space-between;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding-left: 30px;
          width: calc(100% - 250px);
          .productDetail:hover>.img{
            transform: scale(1.1)
          }
          .productDetail {
            cursor: pointer;
            padding-bottom: 15px;
            width: 230px;
            background-color: #FFFFFF;
            overflow: hidden;
            .img {
              width: 100%;
              height: 230px;
              background-size: cover;
              background-position: center center;
              transition: all 0.6s;
              .des {
                display: none;
              }
            }

            .info {
              padding: 35px;
              box-sizing: border-box;
              font-size: 16px;

              .infoTitle {
                font-size: 24px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
              }

              .infoDes {
                margin: 15px 0;
                box-sizing: border-box;
                line-height: 1.5;
                max-width: 100%;
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }

              .infoMore {
                cursor: pointer;
                border: 1px solid #000;
                width: 120px;
                padding: 10px 0;
                text-align: center;
              }
            }
          }


          .productDetail:hover {
            color: #FFFFFF;

            .info {
              background-color: #177EE6;

              .infoMore {
                border: 1px solid #FFF;
              }
            }
          }
        }
      }

      .pageButton {
        width: 992px;
        display: flex;
        justify-content: flex-end;

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
    .products-box {
      width: 100%;

      .product-center {
        width: 100% !important;
        box-sizing: border-box;
        padding-bottom: 30px;

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

        .content {
          width: 100% !important;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .content-left {
            display: flex;
            flex-direction: column;
            width: 100px;
            background-color: #F7F7F7;
            height: 100%;

            .typeItem {
              cursor: pointer;
              font-size: 16px;
              width: 100%;
              box-sizing: border-box;
              border-bottom: 0.5px solid gainsboro;
              padding: 25px 20px;
            }

            .typeItem:hover {
              padding-left: 15px;
              border-left: 5px solid #177EE6;
              color: #177EE6;
            }

            .selected {
              padding-left: 15px;
              color: #177EE6;
              border-left: 5px solid #177EE6;
            }
          }
          .content-right::after{
            height: 0;
            width: 150px;
            content: "";
          }
          .content-right {
            width: calc(100% - 100px);
            justify-content: space-around;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .productDetail {
              cursor: pointer;
              padding-bottom: 30px;
              width: 150px;
              background-color: #FFFFFF;

              .img {
                width: 100%;
                height: 100px;
                background-size: cover;
                background-position: center center;

                .des {
                  display: none;
                }
              }

              .info {
                /*background-color: #20a0ff;*/
                padding: 10px;
                box-sizing: border-box;
                font-size: 13px;
                /*color: white;*/
                .infoTitle {
                  font-size: 16px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: 100%;
                }

                .infoDes {
                  margin: 15px 0;
                  box-sizing: border-box;
                  line-height: 1.5;
                  max-width: 100%;
                  word-break: break-all;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }

                .infoMore {
                  color: #FFF;
                  background-color: #20a0ff;
                  cursor: pointer;
                  width: 80px;
                  margin: 5px 0;
                  padding: 10px 0;
                  text-align: center;
                }
              }
            }

          }
        }

        .pageButton {
          width: 100%;
          display: flex;
          justify-content: flex-end;

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
              margin-right: 20px;
            }
          }
        }
      }
    }

  }

</style>
