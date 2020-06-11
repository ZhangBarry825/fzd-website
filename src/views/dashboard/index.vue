<template>
  <div class="dashboard-container">
    <img class="logo" src="../../../public/static/images/login_login.png" alt="">
    <div class="centerBox">
      <h1 class="dashboard-text">FZD Website Management</h1>
      <h3 class="welcome">Welcome , {{ name }}</h3>
    </div>

<!--    <div class="dashboard-text">roles: <span v-for="role in roles" :key="role">{{ role }}</span></div>-->

<!--    <el-carousel :interval="4000" type="card" height="300px">-->
<!--      <el-carousel-item class="imgBox" v-for="(item,idx) in bannerData"  >-->
<!--        <div class="swiperBackImg"  :style="'background-image: url('+baseImgUrl+item.imageUrl+')'">-->
<!--        </div>-->
<!--      </el-carousel-item>-->
<!--    </el-carousel>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {getHomeBanner, getHomeMenu} from "@/api/home";

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  data(){
    return{
      baseImgUrl:this.$globalData.baseImgUrl,
      bannerData:[]
    }
  },
  methods:{
    fetchData(){
      let that = this
      getHomeBanner({
        pageSize:3,
        pageNum:1
      }).then(res=>{

        if(res.code==200){
          that.bannerData=res.data.list
        }
        //console.log(that.baseImgUrl+that.bannerData[0].imageUrl,111)
      })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-text{
    font-size: 3rem !important;
  }
  .centerBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:  0;
    .logo{
      width: 30%;
    }
    .welcome{
      font-weight: normal;
      font-size: 1.5rem;
    }
  }
  .imgBox{
    border-radius: 5px;
    overflow: hidden;
  }
  .swiperBackImg{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
