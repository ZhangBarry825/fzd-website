<template>
    <div class="header-box">
      <el-row :gutter="10">
        <el-col :xs="0" :sm="3" :md="5" :lg="5" :xl="5"><div class="grid-content bg-purple a1"><a style="opacity: 0">1</a></div></el-col>
        <el-col :xs="24" :sm="18" :md="14" :lg="14" :xl="14">
          <div class="grid-content bg-purple-light a2">
            a
          </div>
        </el-col>
        <el-col :xs="0" :sm="3" :md="5" :lg="5" :xl="5"><div class="grid-content bg-purple-light a3"><a style="opacity: 0">3</a></div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">

  /*!* Extra small devices (phones, 600px and down) *!*/
  /*@media only screen and (max-width: 600px) {*/
  /*  .header-box {background: red;}*/
  /*}*/

  /*!* Small devices (portrait tablets and large phones, 600px and up) *!*/
  /*@media only screen and (min-width: 600px) {*/
  /*  .header-box {background: green;}*/
  /*}*/

  /*!* Medium devices (landscape tablets, 768px and up) *!*/
  /*@media only screen and (min-width: 768px) {*/
  /*  .header-box {background: blue;}*/
  /*}*/

  /*!* Large devices (laptops/desktops, 992px and up) *!*/
  /*@media only screen and (min-width: 992px) {*/
  /*  .header-box {background: orange;}*/
  /*}*/

  /*!* Extra large devices (large laptops and desktops, 1200px and up) *!*/
  /*@media only screen and (min-width: 1200px) {*/
  /*  .header-box {background: pink;}*/
  /*}*/
  .grid-content{
    padding: 0;
  }
.a1{
  background-color: greenyellow;
}.a2{
  background-color: antiquewhite;
}.a3{
  background-color: sienna;
}


</style>
