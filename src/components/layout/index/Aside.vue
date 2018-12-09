<template>
    <div>
        <el-menu 
        :default-active="$route.path" 
        class="el-menu-demo" 
        mode="horizontal" 
        background-color="#fff" 
        text-color="#FF5722" 
        active-text-color="#FF5722" 
        router>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/region">区域稳定性</el-menu-item>
            <el-submenu index="3">
                <template slot="title">事件分析</template>
                <el-menu-item index="/OriginalEvents">原事件分析</el-menu-item>
                <el-menu-item index="/EventTiming">议题分析</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">数据分析</template>
                <el-menu-item index="/PoliticsEvent">政治事件分析</el-menu-item>
                <el-menu-item index="/EconomyEvent">经济事件分析</el-menu-item>
                <el-menu-item index="/AntiTerrorismEvent">反恐事件分析</el-menu-item>
                <el-menu-item index="/MacroData">宏观数据分析</el-menu-item>
            </el-submenu>
            <el-menu-item index="/Report">报告内容</el-menu-item>
            <el-menu-item index="/NewsList">新闻列表</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "asideDiv",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='less' scoped>

</style>
