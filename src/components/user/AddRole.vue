<template>
	<div>
	    <h2 class="sub-header">添加角色</h2>	
	    <!--角色from表单信息-->    
	    <el-form ref="form" :model="roleFormData" label-width="80px">
			  <el-form-item label="角色名称">
			    <el-input v-model="roleFormData.roleName" placeholder="请输入角色名称"></el-input>
			  </el-form-item>
			  <el-form-item label="角色描述">
			    <el-input v-model="roleFormData.roleScript" placeholder="请输入角色描述"></el-input>
			  </el-form-item>
			  <el-form-item label="角色Code">
			    <el-input v-model="roleFormData.roleCode" placeholder="请输入角色Code"></el-input>
			  </el-form-item>			  
			  <el-form-item>
			  	<div style="dispaly:block;margin-left:100px;">
			        <el-button type="primary" @click="saveRole">保存</el-button>
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
    import {addRole} from '@/api/user/AddRole.js'
	export default{
		data(){
			return{
				roleFormData:{
					roleName:'',
					roleScript:'',
					roleCode:''
				}
			}
		},
		methods:{
            saveRole(){
               addRole(this.roleFormData).then(res=>{
               	   this.$router.push('/UserManage')
               })
            },
			cancle(){
				this.$router.push('/UserManage')
			}
		}
	}
</script>
