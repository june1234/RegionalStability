<template>
	<div class="functionAdd">
	    <h2 class="sub-header">函数添加</h2>
	    <el-form ref="form" :model="formData" label-width="100px">
			  <el-form-item label="函数名称">
			    <el-input v-model="formData.methodName" placeholder="请输入函数名称"></el-input>
			  </el-form-item>
				<el-form-item label="函数描述">
				    <el-input
					  type="textarea"
					  :rows="2"
					  placeholder="请输入函数描述"
					  v-model="formData.methodScript">
					</el-input>
			  </el-form-item>
			  <el-form-item label="参数名称">
			    <el-input v-model="formData.parameterName" placeholder="请输入参数名称"></el-input>
			  </el-form-item>
			  <el-form-item label="参数描述">
			    <el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入参数描述"
				  v-model="formData.parameterScript">
				</el-input>
			  </el-form-item>
			  <el-form-item label="参数类型">
			    <el-select v-model="formData.parameterCategory" placeholder="请选择状态">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="add">添加</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
		</el-form>
	</div>
</template>

<script>
    import {functionAdd} from '@/api/moudule/functionAdd.js'
	export default {
		data(){
         return {
              formData:{
              	    modelId:'', 
	                methodName:'',
	                methodScript:'',
	                parameterName:'',
	                parameterScript:'',
	                parameterCategory:'',
                },
                options:[
	                    {
				          value: 'system',
				          label: '系统'
				        }, {
				          value: 'expert',
				          label: '专家'
				        },{
				        	value:'personal',
				        	label:'个人'
				        }
		            ]
	        } 
		},
		created(){
			this.formData.modelId=this.$route.query.id
		},
		methods: {
	        add () {
	           // 1,注册表单提交事件及处理函数，
	           // 2，配置表单验证
	           //  3，收集表单数据
	           //  4，提交表单，发起请求，添加学生
	           //  5,添加成功，跳转回列表页
	           //  编程式导航
	           console.log(this.formData)
	           functionAdd(this.formData).then(res=>{
	           this.$router.back()
	           })
	        }
	    }
	}
</script>

<style>

</style>

