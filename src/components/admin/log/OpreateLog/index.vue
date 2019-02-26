<template>
	<div class="OpreateLog">
		<h1 class="title">操作日志</h1>
		<el-form :inline="true" :model="logForm">
			<el-form-item label="操作人">
				<el-input v-model="logForm.operatorName" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item label="开始时间">
				<el-date-picker type="date" v-model="logForm.startDate" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item label="结束时间">
				<el-date-picker type="date" v-model="logForm.endDate" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="SubmitForm">确定</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border style="width:100%">
		    <el-table-column prop="operatorName" label="用户名" align="center" min-width="100%"></el-table-column>
		    <el-table-column prop="operationTime" label="开始时间" align="center" min-width="100%"></el-table-column>
		    <el-table-column prop="events" label="操作类型" align="center" min-width="100%"></el-table-column>             
	    </el-table>
	    <el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="logForm.pageNum"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="logForm.pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total">
		</el-pagination>
	</div>
</template>

<script>
import { logFindbypage } from "@/api/log/opreateLog";
   export default{
   	data(){
   		return{
   			logForm:{
				operatorName:'',
				startDate:'',
				endDate:'',
				pageSize:10,
				pageNum:1
			},
			tableData:[],
			total:0
   		}
	},
	created(){
       this.SubmitForm()
	},   
   	methods:{
   		handleSizeChange(val){
			this.logForm.pageSize=val;
			this.SubmitForm()
		},
		handleCurrentChange(val){
			this.logForm.pageNum=val;
			this.SubmitForm()
		},
        SubmitForm(){
			logFindbypage(this.logForm).then(res=>{
				this.tableData=res.data.list
				this.total=res.data.total
			})
		}
   	}
   }
</script>

<style scoped lang="less">

</style>