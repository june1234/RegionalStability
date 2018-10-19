<template>
	<div class="modify">
		<h2 class="title">私有化参数修改</h2>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		    <el-form-item>
				<el-select v-model="formInline.country" placeholder="选择国家">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>		  
			</el-form-item>
			<el-form-item>
			    <el-date-picker
			      v-model="formInline.startTime"
			      type="month"
			      placeholder="选择开始时间">
			    </el-date-picker>
			    <el-date-picker
			      v-model="formInline.endTime"
			      type="month"
			      placeholder="选择结束时间">
			    </el-date-picker>
			  </el-form-item>
			<el-form-item>
		    <el-button type="primary">查询</el-button>
		  </el-form-item>
		</el-form>
        <div class="expert">
        	<h4>选择专家参数</h4>
			<el-col :span="6">
				<el-button type="text">专家参数</el-button>
			</el-col>
			<el-col :span="6">
				<el-button type="text">专家参数</el-button>
			</el-col>
			<el-col :span="6">
				<el-button type="text">专家参数</el-button>
			</el-col>
			<el-col :span="6">
				<el-button type="text">专家参数</el-button>
			</el-col>
        </div>
        <div class="message">
        	<h4>事件类型权重分析（%）</h4>
        	<el-form ref="form" :model="form" label-width="100px">
			    <el-col :span="6">
			      <el-form-item label="政治事件类">
				      <el-input v-model="form.name"></el-input>
				  </el-form-item>
			    </el-col>
			    <el-col :span="6">
			    	<el-form-item label="经济事件类">
				    	<el-input v-model="form.name"></el-input>
				    </el-form-item>
			    </el-col>
			    <el-col :span="6">
			    	<el-form-item label="反恐事件类">
				      <el-input v-model="form.name"></el-input>
			       </el-form-item>
			    </el-col>
			    <el-col :span="6">
			    	<el-form-item label="自然灾害类">
	                    <el-input v-model="form.name"></el-input>
                    </el-form-item>
			    </el-col>
			  <h4>区域稳定性指标体系说明</h4>
			  <p>百分值越高，占得比重就越大</p>
			  <h4>模型选择</h4>
			  <el-form-item>
			  	<el-checkbox-group v-model="form.type">
			      <el-checkbox label="模型1" name="type"></el-checkbox>
			      <el-checkbox label="模型2" name="type"></el-checkbox>
			      <el-checkbox label="模型3" name="type"></el-checkbox>
			      <el-checkbox label="模型4" name="type"></el-checkbox>
			    </el-checkbox-group>
			  </el-form-item>
               <el-col :span="8">
	               	<el-form-item>
	               		<span>函数</span>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               	</el-form-item>
               </el-col>
               <el-col :span="8">
	               	<el-form-item>
	               		<span>函数</span>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               	</el-form-item>
               </el-col>
               <el-col :span="8">
	               	<el-form-item>
	               		<span>函数</span>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               		<el-input v-model="form.name" placeholder="参数"></el-input>
	               	</el-form-item>
               </el-col>
			  <el-form-item>
			  	<router-link to="/region/demesne">
				    <el-button type="primary">保存</el-button>
				</router-link>
			    <el-button type="primary" @click="dialogFormVisible = true">保存为专家参数</el-button>			    
			  </el-form-item>
			</el-form>
        </div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
		  <el-form :model="formData">
		    <el-form-item label="专家参数名称" :label-width="formLabelWidth">
		      <el-input v-model="formData.name" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data(){
         return {
           formInline:{
	        	country:'',
	        	startTime:'',
	        	endTime:''
	        },
	        options: [
	            {
		          value: 'NorthKorea',
		          label: '朝鲜'
		        }, {
		          value: 'India ',
		          label: '印度'
		        }, {
		          value: 'Japan',
		          label: '日本'
		        }
	        ],
	        form:{
	        	name:'',
	        	type:[]
	        },
	        dialogFormVisible:false,
	        formData:{
	        	name:''
	        }
         } 
		}
	}
</script>

<style scoped lang="less">

</style>
