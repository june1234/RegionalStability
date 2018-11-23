<template>
	<div class="MessageLog">
		<h1 class="title">消息日志</h1>
		<el-form :inline="true" :model="logForm">
			<el-form-item label="用户名">
				<el-input v-model="logForm.userName"></el-input>
			</el-form-item>
			<el-form-item label="开始时间">
				<el-date-picker type="date" v-model="logForm.beginDate"></el-date-picker>
			</el-form-item>
			<el-form-item label="结束时间">
				<el-date-picker type="date" v-model="logForm.endDate"></el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button @click="SubmitForm">确定</el-button>
				<el-button @click="resetForm">清空</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border style="width:100%">
			<el-table-column type="selection" align="center" width="60"></el-table-column>
		    <el-table-column prop="userName" label="用户名" align="center" min-width="100%"></el-table-column>
		    <el-table-column prop="beginDate" label="开始时间" align="center" min-width="100%"></el-table-column>
		    <el-table-column prop="content" label="操作类型" align="center" min-width="100%"></el-table-column>             
	    </el-table>
	    <el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="3">
		    </el-pagination>
	</div>
</template>

<script>
   export default{
   	data(){
   		return{
   			currentPage:1,
			pageSize:5,
   			logForm:{
   				userName:'',
   				beginDate:'',
   				endDate:''
   			},
   			tableData:[{
   				userName:'abc',
   				beginDate:'8:00',
   				content:'添加'
   			},{
   				userName:'abc',
   				beginDate:'8:00',
   				content:'添加'
   			},{
   				userName:'abc',
   				beginDate:'8:00',
   				content:'添加'
   			}]
   		}
   	},
   	methods:{
   		handleSizeChange(val){
			this.pageSize=val;
		},
		handleCurrentChange(val){
			this.currentPage=val;
		},
   	}
   }
</script>

<style scoped lang="less">

</style>