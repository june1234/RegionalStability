<template>
	<div>
	    <h2 class="sub-header">添加用户</h2>	 
	    <!-- 用户from表单信息 -->   
	    <el-form ref="form" :model="userFormData" label-width="80px">
			  <el-form-item label="用户名">
			    <el-input v-model="userFormData.username" placeholder="请输入用户名"></el-input>
			  </el-form-item>
			  <el-form-item label="昵称">
			    <el-input v-model="userFormData.nickname" placeholder="请输入昵称"></el-input>
			  </el-form-item>
			  <el-form-item label="真实姓名">
			    <el-input v-model="userFormData.truename" placeholder="请输入真实姓名"></el-input>
			  </el-form-item>
			   <el-form-item label="密码">
			    <el-input type="password" v-model="userFormData.password" placeholder="请输入密码"></el-input>
			  </el-form-item>
			  <el-form-item>
			  	<div style="dispaly:block;margin-left:100px;">
			        <el-button type="primary" @click="saveUser">保存</el-button>
			        <el-button type="primary" @click="cancle">取消</el-button>
			    </div>
			  </el-form-item>
		</el-form>
	</div>
</template>
<style scoped lang="less">
	.el-input{
		width:400px;
	}
</style>
<script>
    import axios from 'axios'
    import {addUser} from '@/api/user/AddUser.js'
	export default{
		data(){
			return{
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