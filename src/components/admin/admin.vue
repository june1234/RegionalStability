<template>
    <div>
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
   import AppHeader from '@/components/admin/index/Header.vue'
   import AppAside from '@/components/admin/index/Aside.vue'   
export default {
  name: "admin",

  data() {
    return {};
  },
    components:{
      AppHeader,
      AppAside
    },
  methods: {}
};
</script>

<style lang='less' scoped>
</style>
