<template>
    <div>
        <el-menu 
        :default-active="$route.path" 
        class="el-menu-demo" 
        mode="horizontal" 
        background-color="#0f2c2a" 
        text-color="#fff" 
        active-text-color="#50b7c1" 
        router>
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/region">区域稳定性</el-menu-item>
            <el-submenu index="1">
                <template slot="title">事件分析</template>
                <el-menu-item index="#">原事件分析</el-menu-item>
                <el-menu-item index="#">聚类事件分析</el-menu-item>
                <el-menu-item index="/EventTiming">议题分析</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">数据分析</template>
                <el-menu-item index="/PoliticsEvent">政治事件分析</el-menu-item>
                <el-menu-item index="/EconomyEvent">经济事件分析</el-menu-item>
                <el-menu-item index="/AntiTerrorismEvent">反恐事件分析</el-menu-item>
                <el-menu-item index="#">宏观数据分析</el-menu-item>
            </el-submenu>
            <el-menu-item index="/Report">报告内容</el-menu-item>
            <el-menu-item index="/NewsList">新闻列表</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "aside",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='less' scoped>
.el-menu--horizontal{
    padding:0 300px;
    .el-submenu {
        .el-submenu__title{
            height:100px;
            line-height: 100px;
            font-size: 20px !important;
            padding:0 30px;
        } 
    }
    .el-menu-item{
        height:100px;
        line-height: 100px;
        font-size: 20px;
        padding:0 30px;
    }
    .el-menu--horizontal{
    top:200px;
    }
}
</style>
