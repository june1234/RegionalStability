<template>
  <div class="aside">
    <p class="title">后台管理功能</p>
    <el-menu default-active="$route.path" 
    class="el-menu-vertical-demo" 
    background-color="#121a2b" 
    text-color="#fff" 
    router
    active-text-color="#1ca1e8"
    unique-opened
    collapse-transition
    >
        <el-menu-item index="/admin/UserManage">
            <span slot="title">用户管理</span>
        </el-menu-item>
        <el-submenu index='2'>
          <template slot="title">
            <span slot="title">数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/News/newsManage">新闻数据</el-menu-item>
            <el-menu-item index="/admin/GTD/GTDManage">GTD数据</el-menu-item>
            <el-menu-item index="/admin/WordBank">世界银行数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index='3'>
          <template slot="title">
            <span slot="title">事件管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/politicalevents">政治事件</el-menu-item>
            <el-menu-item index="/admin/economicevents">经济事件</el-menu-item>
            <el-menu-item index="/admin/counterterrorismincidents">反恐事件</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index='/admin/Log/OpreateLog'>
            <span slot="title">后台日志管理</span>
        </el-menu-item>
        <el-menu-item index="/admin/expert">
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
    },
    created(){
      			console.log(this.$store.getters.menus)
    }
	}
</script>

<style>

</style>
