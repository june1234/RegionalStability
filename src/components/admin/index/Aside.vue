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
        <el-submenu v-for="(item, index) in route" v-if="item.child.length" :index="/admin/+item.code" :key="5+index">
          <template slot="title">
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="(itbm,index) in item.child" :key="6+index">
            <el-menu-item :index="/admin/+itbm.code">{{itbm.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-for="(item,index) in route" v-if="!item.child.length" :index="/admin/+item.code" :key="index">
            <span slot="title">{{item.name}}</span>
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
    props:{
      route:Array
    },
    mounted () {
      console.log(this.route)
    }
	}
</script>

<style>

</style>
