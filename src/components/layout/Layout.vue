<template>
    <div class="layout">
        <el-container>
            <el-header style="height:100px;">
                <app-header></app-header>
            </el-header>
            <el-main  class="w">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import AppHeader from "@/components/layout/index/Header.vue";
export default {
  name: "layout",

  data() {
    return {};
  },
  components: {
    AppHeader,
  },
  methods: {}
};
</script>

<style lang='less' scoped>
</style>
