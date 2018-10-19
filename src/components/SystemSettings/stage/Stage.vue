<template>
	<div class="step">
		<h2 class="title">等级设置</h2>
		<el-select v-model="value" placeholder="请选择功能模块">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		</el-select>
          <div class="period">
	          	<h4 class="periodTitle">阶段1</h4>
	          	<el-button type="primary">删除</el-button>
		          	<el-table
					    :data="tableData"
					    border
					    style="width: 100%">
					    <el-table-column
					      prop="date"
					      label="等级名称"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="参数名称"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="等级说明">
					    </el-table-column>
					    <el-table-column
					      fixed="right"
					      label="操作"
					      width="100">
					      <template slot-scope="scope">
								  <el-button
						          @click.native.prevent="deleteRow(scope.$index, tableData4)"
						          type="text"
						          size="small">
						          删除
						        </el-button>			      
						    </template>
					    </el-table-column>
					  </el-table>
				  <h4 class="periodTitle">阶段2</h4>
		          	<el-button type="primary">删除</el-button>
		          	<el-table
					    :data="tableData"
					    border
					    style="width: 100%">
					    <el-table-column
					      prop="date"
					      label="等级名称"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="参数名称"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="等级说明">
					    </el-table-column>
					    <el-table-column
					      fixed="right"
					      label="操作"
					      width="100">
					      <template slot-scope="scope">
								  <el-button
						          @click.native.prevent="deleteRow(scope.$index, tableData4)"
						          type="text"
						          size="small">
						          删除
						        </el-button>			      
						    </template>
					    </el-table-column>
					  </el-table>
				  <h4 class="periodTitle">阶段3</h4>
		          	<el-button type="primary">删除</el-button>
		          	<el-table
					    :data="tableData"
					    border
					    style="width: 100%">
					    <el-table-column
					      prop="date"
					      label="等级名称"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="参数名称"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="等级说明">
					    </el-table-column>
					    <el-table-column
					      fixed="right"
					      label="操作"
					      width="100">
					      <template slot-scope="scope">
								  <el-button
						          @click.native.prevent="deleteRow(scope.$index, tableData4)"
						          type="text"
						          size="small">
						          删除
						        </el-button>			      
						    </template>
					    </el-table-column>
					  </el-table>
          </div>
          <el-form ref="form" :model="formData" label-width="100px">
			  <el-form-item label="选择阶段">
	             <el-select v-model="formData.step" placeholder="请选择阶段">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				 </el-select>
			  </el-form-item>
			  <el-form-item label="等级名称">
			    <el-input v-model="formData.stageName"></el-input>
			  </el-form-item>
			  <el-form-item label="参数名称">
			     <el-input v-model="formData.argumentName"></el-input>
			  </el-form-item>		  
			  <el-form-item label="等级说明">
			    <el-input type="textarea" v-model="formData.desc"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">增加</el-button>
			  </el-form-item>
		  </el-form>
	</div>
</template>

<script>
	export default {
		data(){
         return {
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
	        value: '',
	        tableData: [
		            {
			          date: '第一等级',
			          name: '参数名称',
			          address: '等级说明',
			        }, {
			          date: '第二等级',
			          name: '参数名称',
			          address: '等级说明',
			        }, {
			          date: '第三等级',
			          name: '参数名称',
			          address: '等级说明',
			        }, {
			          date: '第四等级',
			          name: '参数名称',
			          address: '等级说明',
			        }
		        ],
	         formData:{
	        	step:'',
	        	stageName:'',
	        	argumentName:'',
	        	desc:''
              }
         } 
		}
	}
</script>

<style scoped lang="less">

</style>
