<template>
  <div id="app" style="width:100%;height:100%;">
    <router-view></router-view>
    <go-top></go-top>
  </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top';
  export default {
    data(){
         return {
         
         } 
    },
    components:{
       GoTop
    }
  }
</script>

<style>

</style>
