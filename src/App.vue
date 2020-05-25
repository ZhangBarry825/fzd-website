<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: 'App',
  mounted() {
    //监听窗口
    const that = this
    that.screenWidth = document.documentElement.offsetWidth || document.body.offsetWidth;
    store.commit('window/CHANGE_WIDTH',{screenWidth: that.screenWidth})
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        store.commit('window/CHANGE_WIDTH',{screenWidth: window.screenWidth})
      })()
    }
  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei";
  }
</style>
