<template>
  <div id="app">

    <keep-alive exclude="detail">
        <router-view></router-view>
    </keep-alive>
    <main_tabbar></main_tabbar>
  </div>
</template>

<script>
import main_tabbar from "components/common/tabbar/main_tabbar"
export default {
  components:{
    main_tabbar
  }
};
</script>
   
<style>
</style>
