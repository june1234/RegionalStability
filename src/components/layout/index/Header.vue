<template>
	<div class="layoutheader">
		<el-row :gutter="0" class="w">
			<el-col :span="6">
				<h4>区域稳定性评估示范系统</h4>
				<p>Regional stability assessment and demonstration system </p>
			</el-col>
			<el-col :span="12">
			<app-aside></app-aside>
			</el-col>
			<el-col :span="6">
				<div style="margin-top:20px;display: inline-block;">
					<span>用户名：</span>
					<span>{{username}}</span>
					<el-button type="primary" @click="logout">退出</el-button>
				</div>
				<router-link to="/admin" v-if="isback">
					<img src="../../../assets/back.svg" alt="进入后台管理系统" style="width:20px;">
					<span>进入后台管理系统</span>
				</router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import AppAside from "@/components/layout/index/Aside.vue";

export default {
  name: "headerDiv",

  data() {
    return {
		isback:true,
		username:''
	};
	},
	components:{
		AppAside
	},
	created(){
		const storage = window.localStorage
		const menus=JSON.parse(storage.menus)
		const arr = Object.keys(menus);
		if(arr.length===0){
			this.isback=false
		}
		this.username=storage.username
	},
    methods: {
		router(){
			this.$router.push('/admin/UserManage')
		},
		logout(){
			this.$store.dispatch('LogOut').then(()=>{
				location.reload()
			})
		}
	}
};
</script>

<style lang='less' scoped>

</style>
