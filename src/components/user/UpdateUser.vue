<template>
	<div>
	    <h2 class="sub-header">修改用户</h2>	 
	    <el-form ref="form" :model="userFormData" label-width="80px">
			  <el-form-item label="昵称">
			    <el-input v-model="userFormData.nickname" placeholder="请输入昵称"></el-input>
			  </el-form-item>
			  <el-form-item label="真实姓名">
			    <el-input v-model="userFormData.truename" placeholder="请输入真实姓名"></el-input>
			  </el-form-item>
			   <el-form-item label="密码">
			    <el-input v-model="userFormData.password" placeholder="请输入密码"></el-input>
			  </el-form-item>
			  </el-form-item>
			  <el-form-item>
			  	<div style="display:block;margin-left:100px;">
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
import {updateUser} from '@/api/user/UpdateUser.js'
import {getUserById} from '@/api/user/FindUser.js'
	export default{
         data(){
         	return{
         		userFormData:{
         			id:'',
         			nickname:'',
         			truename:'',
         			password:'',
         			operator:'abc'
         		}
         	}
         },
         created(){
            const {id}=this.$route.query
            getUserById(id).then(res=>{
           	  this.userFormData=res.data
           })
         },
         methods:{
         	saveUser(){
         		console.log(this.userFormData)
                updateUser(this.userFormData).then(res=>{
               	   this.$router.push('/UserManage')
               })
         	},
         	cancle(){
         		this.$router.back()
         	}
         }
	}
</script>