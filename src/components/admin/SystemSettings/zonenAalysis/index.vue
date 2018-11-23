<template>
	<div class="zone">
		<h3 class="stage">等级定义</h3>
		<el-form ref="form" :model="formData" label-width="150px">
		  <el-form-item label-width="0">
		  	<el-col :span="12">
				<el-select v-model="formData.stage" placeholder="请选择阶段">
			      <el-option label="阶段一" value="stage1"></el-option>
			      <el-option label="阶段二" value="stage2"></el-option>
			    </el-select>
			</el-col>
		    <el-col :span="12">
		    	<el-select v-model="formData.grade" placeholder="请选择等级">
			      <el-option label="等级一" value="grade1"></el-option>
			      <el-option label="等级二" value="grade2"></el-option>
			    </el-select>
		    </el-col>
		  </el-form-item>
		  <el-table
		    :data="gradeData"
		    border
		    style="width: 100%">
			    <el-table-column
			      prop="gradeName"
			      label="等级名称"
			      min-width="50%" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="parameterName"
			      label="参数名称"
			      min-width="50%" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="script"
			      label="说明" min-width="50%" align="center">
			    </el-table-column>
		  </el-table>
		  <h3 class="event">事件类型权重分析（%）</h3>
		  	<el-form-item label="经济类">
			    <el-input v-model="formData.economy" size="small"></el-input>
			  </el-form-item>
		  	<el-form-item label="政治事件类">
			  <el-input v-model="formData.political" size="small"></el-input>
		    </el-form-item>
		  	<el-form-item label="武装冲突类">
			  <el-input v-model="formData.ctu" size="small"></el-input>
		    </el-form-item>
		  	<el-form-item label="自然灾害类">
			  <el-input v-model="formData.ctu" size="small"></el-input>
		    </el-form-item>
		  <el-form-item>
		    <el-button type="primary">确认</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data(){
         return {
            formData:{
              stage:'',
              grade:'',
              economy:'',
              political:'',
              ctu:''
            },
            gradeData:[
	            {
	            	gradeName:'',
	            	parameterName:'',
	            	script:''
	            }
            ]
         } 
		}
	}
</script>

<style scoped lang="less">

</style>
