<template>
	<div>
		<h2 class="sub-header">GTD数据</h2>
		<div>
			<el-upload 
			class="upload-demo" 
			action="https://jsonplaceholder.typicode.com/posts/"
			:on-preview="handlePreview"
			:on-remove="handleRemove"
			:before-remove="beforeRemove"
			multiple
			:limit="3"
			:on-exceed="handleExceed"
			:file-list="fileList">
			<el-button size="small" type="primary">导入Excel</el-button>
		   </el-upload>
	    </div>
	    <div>
	    	<el-form :inline="true" :model="GTD" class="demo-form-inline">
	    		<el-form-item>
	    			<el-date-picker v-model="GTD.year" type="year" placeholder="输入年份"></el-date-picker>
	    		</el-form-item>
	    		<el-form-item>
	    			<el-select  placeholder="选择国家" v-model="GTD.country">
	    				<el-option label="中国" value="China"></el-option>
	    				<el-option label="巴西" value="Brazil"></el-option>
	    			</el-select>
	    		</el-form-item>
	    		<el-form-item>
	    			<el-button type="primary" @click="selectGTD">查询</el-button>
	    			<el-button type="primary" @click="resetGTD">查询</el-button>
	    		</el-form-item>
	    	</el-form>
	    </div>
	    <div>
	    	<el-table :data="tableGTDData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border style="width: 100%">
	    		<el-table-column prop="eventName" label="事件名称" align="center"></el-table-column>
	    		<el-table-column prop="date" label="时间" align="center"></el-table-column>
	    		<el-table-column prop="location" label="地点" align="center"></el-table-column>
	    		<el-table-column prop="conflicter" label="冲突方" align="center"></el-table-column>
	    		<el-table-column prop="arms" label="武器" align="center"></el-table-column>
	    	</el-table>
	    </div>
	    <div class="block">
	    	<el-pagination
	    	@size-change="handleSizeChange"
	    	@current-change="handleCurrentChange"
	    	:current-page="currentPage"
	    	:page-sizes="[5, 10, 15, 20]"
	    	:page-size="pageSize"
	    	layout="total, sizes, prev, pager, next, jumper"
	    	:total="10">
	    </el-pagination>
	</div>
  </div>
</template>
<script>
export default{
	data(){
		return{
			currentPage:1,
			pageSize:5,
			GTD:{
				country:'',
				year:''
			},
			tableGTDData: [{
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			}, {
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			}, {
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			},  {
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			},
			{
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			},
			{
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			},
			{
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			},
			{
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			},
			{
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			},
			{
				eventName:'政治事件',
				date:'2018年2月23日',
				location:'北京',
				conflicter:'巴西',
				arms:'导弹'
			}]
		}
	},
	methods:{
		//GTD分页
		handleSizeChange(val) {
			this.pageSize=val;
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			this.currentPage=val;
			console.log(`当前页: ${val}`);
		},
		handlePreview(file){
			console.log(file)
		},
		handleExceed(files,fileList){

		},
		handleRemove(files,fileList){
			return this.$confirm('确定移除 ${file.name} ?')
		}
	}
}
</script>