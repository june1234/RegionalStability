<template>
	<div class="UpdateUser">
	    <h2>修改用户</h2>	
         <!-- 用户修改form表单 -->
	    <el-form :model="userFormData" label-width="80px">
		    <el-form-item label="昵称">
		        <el-input v-model="userFormData.nickname" placeholder="请输入昵称"></el-input>
		    </el-form-item>
			<el-form-item label="真实姓名">
			    <el-input v-model="userFormData.truename" placeholder="请输入真实姓名"></el-input>
			</el-form-item>
			<el-form-item label="密码">
			    <el-input v-model="userFormData.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item>
			  	<div>
			        <el-button type="primary" @click="saveUser">保存</el-button>
			        <el-button @click="cancle">取消</el-button>
			    </div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
    import {updateUser} from '@/api/user/UpdateUser.js'
    import {getUserById} from '@/api/user/FindUser.js'
	export default{
        data(){
         	return{
                //用户修改form表单
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
            //用户id
            const {id}=this.$route.query
            //根据用户id查询用户信息
            getUserById(id).then(res=>{
           	  this.userFormData=res.data
            })
        },
        methods:{
            //保存用户修改信息
         	saveUser(){
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
<style scoped lang="less">

</style>