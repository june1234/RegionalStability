<template>
	<div class="AddPower">
	    <h2 class="sub-header">添加权限</h2>	 
	    <!--权限form表单信息-->  
	    <el-form ref="form" :model="powerFormData" label-width="100px" label-position="left">
	    	<el-form-item label="权限名称" prop="powerName" :rules="[{required:true,message:'请输入权限名称！'}]">
	    		<el-input v-model="powerFormData.powerName"></el-input>
	    	</el-form-item>
	    	<el-form-item label="权限描述" prop="powerScript" :rules="[{required:true,message:'请输入权限描述！'}]">
	    		<el-input v-model="powerFormData.powerScript"></el-input>
	    	</el-form-item>	
	    	<el-form-item label="权限Code" prop="powerCode" :rules="[{required:true,message:'请输入权限Code！'}]">
	    		<el-input v-model="powerFormData.powerCode"></el-input>
	    	</el-form-item>		  
	    	<el-form-item>
	    		<div style="dispaly:block;margin-left:100px;">
	    			<el-button type="primary" @click="savePower">保存</el-button>
	    			<el-button  @click="cancle">取消</el-button>
	    		</div>
	    	</el-form-item>
	    </el-form>
	</div>
</template>

<script>
    import {addPower} from '@/api/user/AddPower.js'
	export default{
		data(){
			return{
				//权限form表单
				powerFormData:{
					powerName:'',
					powerScript:'',
					powerCode:'',
					operator:'abc'
				}
			}
		},
		methods:{
            //提交form表单，保存
            savePower(){
               addPower(this.powerFormData).then(res=>{
               	   this.$router.push('/UserManage')
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