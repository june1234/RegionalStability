<template>
	<div class="AddRole">
	    <h2 class="sub-header">添加角色</h2>	
	    <!--角色from表单信息-->    
	    <el-form ref="form" :model="roleFormData" label-width="100px" label-position="left">
	    	<el-form-item label="角色名称" prop="roleName" :rules="[{required:true,message:'请输入角色名称！'}]">
	    		<el-input v-model="roleFormData.roleName"></el-input>
	    	</el-form-item>
	    	<el-form-item label="角色描述" prop="roleScript" :rules="[{required:true,message:'请输入角色描述！'}]">
	    		<el-input v-model="roleFormData.roleScript"></el-input>
	    	</el-form-item>
	    	<el-form-item label="角色Code" prop="roleCode" :rules="[{required:true,message:'请输入角色Code！'}]">
	    		<el-input v-model="roleFormData.roleCode"></el-input>
	    	</el-form-item>			  
	    	<el-form-item>
	    		<div style="dispaly:block;margin-left:100px;">
	    			<el-button type="primary" @click="saveRole">保存</el-button>
	    			<el-button  @click="cancle">取消</el-button>
	    		</div>
	    	</el-form-item>
	    </el-form>
	</div>
</template>

<script>
    import {addRole} from '@/api/user/AddRole.js'
	export default{
		data(){
			return{
				//角色form表单
				roleFormData:{
					roleName:'',
					roleScript:'',
					roleCode:''
				}
			}
		},
		methods:{
			//提交form表单
            saveRole(){
               addRole(this.roleFormData).then(res=>{
               	   this.$router.back()
               })
            },
			cancle(){
				this.$router.back()
			}
		}
	}
</script>
<style scoped lang="less">
</style>
