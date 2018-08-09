<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="301px">
          <app-aside></app-aside>
        </el-aside>
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
*{
  margin:0;
  padding:0;
}
body,html{
   margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.el-header{
  padding:0;
}
.el-container{
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.el-aside{
  background-color:#121a2b;
  position: absolute;
 overflow-y: auto;
}
.el-main{
  margin-left:301px;
}
</style>
