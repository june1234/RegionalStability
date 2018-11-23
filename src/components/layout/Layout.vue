<template>
    <div>
        <el-container>
            <el-header style="height:200px;">
                <app-header></app-header>
                <app-aside></app-aside>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import AppHeader from "@/components/layout/index/Header.vue";
import AppAside from "@/components/layout/index/Aside.vue";
export default {
  name: "layout",

  data() {
    return {};
  },
  components: {
    AppHeader,
    AppAside
  },
  methods: {}
};
</script>

<style lang='less' scoped>
</style>
