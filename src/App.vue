<template>
  <div id="app">
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
