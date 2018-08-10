<template>
	<div class="Modelupdate">
	    <h2 class="sub-header">模型修改</h2>
		<el-form ref="form" :model="formData" label-width="100px">
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
				  v-model="formData.script"
				  >
				</el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="update">修改</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
		</el-form>
	</div>
</template>

<script>
    import {moudleById} from '@/api/moudule/Details.js'
    import {modelUpdate} from '@/api/moudule/modelUpdate.js'
	export default {
		data(){
         return {
		        formData:{
		        	id:'',
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
		 created(){
            const {id}=this.$route.query
             moudleById(id).then(res=>{
				this.formData=res.data
            })
            
		},
		methods:{
			update(){
				 modelUpdate(this.formData).then(res=>{
				 	this.$router.push('/ModelManagement')
				 })
			}
		}
	}
</script>

<style scoped lang="less">
.Modelupdate{
	margin-left:100px;
	.sub-header{
		font-size:30px;
		color:#6b7a96;
        line-height:100px;
        padding-left:20px;
	}
	.el-form{
		width: 500px;
		.el-form-item{
			.el-form-item__label{
			color:#6b7a96;
			font-size:20px;
			line-height:40px;
			}
			.el-input,.el-select{
				font-size:18px;
				line-height:40px;
				color:#e3e8e9;
			}
		}
		
	}
}
</style>
