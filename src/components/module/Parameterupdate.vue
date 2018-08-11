<template>
	<div class="functionUpdate">
	    <h2 class="sub-header">函数修改</h2>
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
  			  <el-form-item label="是否显示">
				    <el-radio-group v-model="formData.display">
				      <el-radio  :label="1">显示</el-radio>
				      <el-radio  :label="0">不显示</el-radio>
				    </el-radio-group>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="update">修改</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
		</el-form>
	</div>
</template>

<script>
   import {functionDetails} from '@/api/moudule/functionDetails.js'
   import {Parameterupdate} from '../../api/moudule/Parameterupdate.js'
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
	                display:''
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
        async created(){
	    	//this.$router
	    	//访问到的是路由的实例对象
	    	//this.$route
	    	//访问的是路由参数对象
	    	//this.$route.query
	    	//获取查询字符串参数
	         const {id}=this.$route.query
	        await functionDetails(id).then(res=>{
	         	 this.formData=res.data
	         })
	    },
	    methods: {
	        async update () {
	           // 1,注册表单提交事件及处理函数，
	           // 2，配置表单验证
	           //  3，收集表单数据
	           //  4，提交表单，发起请求，添加学生
	           //  5,添加成功，跳转回列表页
	           //  编程式导航
	            await Parameterupdate(this.formData).then(res => {
                    this.$router.back()
	            })
	        }
	    }
	}
</script>

<style>

</style>

