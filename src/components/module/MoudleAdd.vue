<template>
	<div>
	    <h2 class="sub-header">模型添加</h2>
	    <el-form ref="form" :model="formData" label-width="80px">
			  <el-form-item label="模型名称">
			    <el-input v-model="formData.name" placeholder="请输入模型名称"></el-input>
			  </el-form-item>
			  <el-form-item label="模型种类">
	    		  <el-select v-model="formData.scene" placeholder="请选择模型种类">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
			  </el-form-item>
			  <el-form-item label="模型描述">
			    <el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入模型描述"
				  v-model="formData.script">
				</el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="add">添加</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
		</el-form>
	</div>
</template>

<script>
    import {MoudleAdd} from '@/api/moudule/MoudleAdd.js'
	export default {
		data(){
         return {
              formData:{
	                name:'',
	                scene:'',
	                script:''
                },
              options: [
			        {
			          value: 'politics',
			          label: '政治模型'
			        }, {
			          value: 'economic',
			          label: '经济模型'
			        }, {
			          value: 'terrorism ',
			          label: '反恐模型'
			        }, {
			          value: 'stable',
			          label: '区域稳定性模型'
			        }
		        ]
	        } 
		},
		methods: {
	        add () {
	           // 1,注册表单提交事件及处理函数，
	           // 2，配置表单验证
	           //  3，收集表单数据
	           //  4，提交表单，发起请求，添加学生
	           //  5,添加成功，跳转回列表页
	           //  编程式导航
	           MoudleAdd(this.formData).then(res => {
				this.$router.push('/ModelManagement')
	           })
	        }
	    }
	}
</script>

<style>

</style>
