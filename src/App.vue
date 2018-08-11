<template>
  <div id="app">
    <el-container>
      <el-aside width="201px">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-header height="40px">
           <app-header></app-header>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
   import AppHeader from '@/components/index/Header.vue'
   import AppAside from '@/components/index/Aside.vue'   
  export default {
    data(){
         return {
         
         } 
    },
    components:{
      AppHeader,
      AppAside
    }
  }
</script>

<style>

</style>
