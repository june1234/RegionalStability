<template>
	<div class="expertDetails">
		<h2 class="title">专家参数详情</h2>
		<div class="list">
			<h4>基本参数</h4>
			<el-table
			    :data="basisData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      label="名称"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="startTime"
			      label="开始时间"
			     min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="endTime"
			      label="结束时间"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="contury"
			      label="国家"
			      min-width="25%">
			    </el-table-column>
			</el-table>
			<h4>事件类型权重参数（%）</h4>
			<el-table
			    :data="weightData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      label="经济事件类"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="startTime"
			      label="政治事件类"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="endTime"
			      label="反恐事件类"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="contury"
			      label="自然灾害类"
			      min-width="25%">
			    </el-table-column>
			</el-table>
            <h4>等级名称</h4>
			<el-table
			    :data="weightData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      label="参数名称"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="startTime"
			      label="值"
			      min-width="25%">
			    </el-table-column>
			</el-table>
            <h4>等级名称</h4>
			<el-table
			    :data="weightData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      label="参数名称"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="startTime"
			      label="值"
			      min-width="25%">
			    </el-table-column>
			</el-table>
            <h4>等级名称</h4>
			<el-table
			    :data="weightData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      label="参数名称"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="startTime"
			      label="值"
			      min-width="25%">
			    </el-table-column>
			</el-table>
			<h4>结果展示</h4>
			<el-table
			    :data="weightData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      label="国家"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="startTime"
			      label="时间"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="startTime"
			      label="结果值"
			      min-width="25%">
			    </el-table-column>			    
			</el-table>
		</div>
		<div class="btn">
			<el-button type="primary">审核通过</el-button>
			<el-button type="primary">拒绝</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
         return {
            basisData:[],
            weightData:[]
         } 
		}
	}
</script>

<style scoped lang="less">
   
</style>
