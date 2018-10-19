<template>
	<div class="AddUser">
	    <h2 class="sub-header">添加用户</h2>	 
	    <!-- 用户from表单信息 -->   
	    <el-form :model="userFormData" label-width="80px">
	    	<el-form-item label="用户名" prop="username" :rules="[{required:true,message:'请输入用户名！'}]">
	    		<el-input v-model="userFormData.username"></el-input>
	    	</el-form-item>
	    	<el-form-item label="昵称" prop="nickname" :rules="[{required:true,message:'请输入昵称！'}]">
	    		<el-input v-model="userFormData.nickname" ></el-input>
	    	</el-form-item>
	    	<el-form-item label="真实姓名" prop="truename" :rules="[{required:true,message:'请输入真实姓名！'}]">
	    		<el-input v-model="userFormData.truename"></el-input>
	    	</el-form-item>
	    	<el-form-item label="密码" prop="password" :rules="[{required:true,message:'请输入密码！'}]">
	    		<el-input type="password" v-model="userFormData.password"></el-input>
	    	</el-form-item>
	    	<el-form-item>
	    		<div>
	    			<el-button type="primary" @click="saveUser">保存</el-button>
	    			<el-button  @click="cancle">取消</el-button>
	    		</div>
	    	</el-form-item>
	    </el-form>
	</div>
</template>

<script>
    import axios from 'axios'
    import {addUser} from '@/api/user/AddUser.js'
	export default{
		data(){
			return{
				//添加用户form表单
                userFormData:{
               	  username:'',
               	  nickname:'',
               	  truename:'',
               	  password:'',
               	  operator:'fdfgv'
               }
			}
		},
		methods:{
			//提交form表单，保存数据
			saveUser(){
				addUser(this.userFormData).then(res=>{
               	   this.$router.push('/UserManage')
               })
			},
			cancle(){
				this.$router.push('/UserManage')
			}
		}
	}
</script>
<style scoped lang="less">
</style>