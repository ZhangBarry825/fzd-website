<template>
    <div class="footer-box">

    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .footer-box{
      width: 100%;
      height: 450px;
      background-color: #000000;
    }
  }
  /* Large devices (laptops/desktops, 992px and down) */
  @media only screen and (max-width: 992px) {
    .footer-box{
      width: 100%;
      height: 200px !important;
      background-color: #000000;
    }
  }
</style>
