<template>
  <div class="aside">
    <el-menu default-active="$route.path" 
    class="el-menu-vertical-demo" 
    background-color="#121a2b" 
    text-color="#fff" 
    router
    active-text-color="#1ca1e8"
    >
        <el-menu-item index="/" style="border-bottom:1px solid #1ca1e8">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">政治事件分析</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">经济事件分析</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">反恐事件分析</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">事件时序分析</span>
        </el-menu-item>
          <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">区域稳定性分析</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-document"></i>
          <span slot="title">报告内容</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-news"></i>
          <span slot="title">新闻列表</span>
        </el-menu-item>
        <el-menu-item style="border-bottom:1px solid #1ca1e8" disabled>
            <i class="el-icon-location"></i>
            <span slot="title">后台管理功能</span>
        </el-menu-item>
        <el-menu-item index="">
            <span slot="title">用户管理</span>
        </el-menu-item>
        <el-submenu index="10">
          <template slot="title">
            <span slot="title">数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="">新闻数据</el-menu-item>
            <el-menu-item index="">GTD数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="12">
          <template slot="title">
            <span slot="title">事件管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="">政治事件</el-menu-item>
            <el-menu-item index="">经济事件</el-menu-item>
            <el-menu-item index="">反恐事件</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title">
            <span slot="title">系统参数设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="">报告参数</el-menu-item>
            <el-menu-item index="/ModelManagement">模型参数设置</el-menu-item>
            <el-menu-item index="">区域分析设置</el-menu-item>
            <el-menu-item index="">等级设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="">
          <span slot="title">后台日志管理</span>
        </el-menu-item>
        <el-menu-item index="">
          <span slot="title">专家参数管理</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
	export default {
		data(){
         return {
         isCollapse: true
         } 
		}
	}
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .aside{
    height: 100%;
      .el-menu{
      border-right:0;
       
    }
  }
</style>
