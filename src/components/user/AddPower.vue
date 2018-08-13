<template>
	<div>
	    <h2 class="sub-header">添加权限</h2>	 
	    <!--权限form表单信息-->  
	    <el-form ref="form" :model="powerFormData" label-width="80px">
			  <el-form-item label="权限名称">
			    <el-input v-model="powerFormData.powerName" placeholder="请输入权限名称"></el-input>
			  </el-form-item>
			  <el-form-item label="权限描述">
			    <el-input v-model="powerFormData.powerScript" placeholder="请输入权限描述"></el-input>
			  </el-form-item>	
			  <el-form-item label="权限Code">
			    <el-input v-model="powerFormData.powerCode" placeholder="请输入权限Code"></el-input>
			  </el-form-item>		  
			  <el-form-item>
			  	<div style="dispaly:block;margin-left:100px;">
			        <el-button type="primary" @click="savePower">保存</el-button>
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
    import {addPower} from '@/api/user/AddPower.js'
	export default{
		data(){
			return{
				powerFormData:{
					powerName:'',
					powerScript:'',
					powerCode:'',
					operator:'abc'
				}
			}
		},
		methods:{
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