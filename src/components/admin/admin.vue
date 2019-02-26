<template>
    <div class="admin">
        <el-container>
            <el-aside width="201px">
                <app-aside :route="routeData"></app-aside>
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
    return {
        routeData:[]
    };
  },
  components:{
      AppHeader,
      AppAside
  },
  created(){
    const storage = window.localStorage
    const a=JSON.parse(storage.menus)
    console.log(a)
    const data2 = {
			"UserManage": "用户管理",
			"s_data_mgr":"数据管理",
			"newsManage":"新闻数据",
			"GTDManage":"GTD数据",
			"s_event_mgr": "事件管理",
			"politicalevents":"政治事件",
		    "economicevents":"经济事件",
			"counterterrorismincidents":"反恐事件",
			"OpreateLog":"后台日志管理",
			"expert": "专家参数管理"
         }
   for (var i in a) {
  	 if (a[i].length === 0) {
  	 	var obj = {
  	 		code: i,
  	 		name: data2[i],
  	 		child: []
  	 	}
  	 	this.routeData.push(obj);
  	 } else {
  	 	var children = a[i];
  	 	var child = children.map(function (value, index) {
  	 		var childObj = {
  	 			code: value,
  	 			name: data2[value]
  	 		}
  	 		return childObj;
  	 	});
  	 	var obj = {
  	 		code: i,
  	 		name: data2[i],
  	 		child: child
  	 	}
  	 	this.routeData.push(obj);
  	 }
  }
  },
  methods: {}
};
</script>

<style lang='less' scoped>
</style>
