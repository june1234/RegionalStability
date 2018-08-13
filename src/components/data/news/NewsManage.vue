<template>
	<div>
		<h2 class="sub-header">新闻数据</h2>	 
		<div>
			<el-form :inline="true" :model="news" class="demo-form-inline" >
				<el-form-item style="float:left;">
					<el-input v-model="news.country" placeholder="请输入国家"></el-input>
				</el-form-item>
				<el-form-item>
					<div class="block">
						<el-date-picker v-model="news.beginDate" type="date" placeholder="选择开始日期"></el-date-picker>
					</div>
				</el-form-item>
				<el-form-item>
					<div class="block">
						<el-date-picker v-model="news.endDate" type="date" placeholder="选择结束日期"></el-date-picker>
					</div>
				</el-form-item>
				<el-form-item>
					<el-select v-model="news.state" placeholder="处理状态">
						<el-option label="终止" value="stop"></el-option>
						<el-option label="完成" value="finish"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="selectNews">查询</el-button>
					<el-button type="primary" @click="resetNews">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<el-table :data="tableNewsData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border style="width:100%">
				<el-table-column prop="newsName" label="新闻名称" align="center"></el-table-column>
				<el-table-column prop="date" label="时间" align="center"></el-table-column>
				<el-table-column prop="location" label="地点" align="center"></el-table-column>
				<el-table-column prop="person" label="人物" align="center"></el-table-column>
				<el-table-column prop="state" label="处理状态" align="center"></el-table-column>
				<el-table-column prop="operate" label="操作" align="center">
					<template slot-scope="scope">
						<el-button size="small" @click="checkNews(scope.$index, scope.row)">校验</el-button>
					</template>
				</el-table-column>
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
			news: {
				country:'',
				dateRange:'',
				state:''
			},
			tableNewsData: [{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			}, {
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			}, {
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			}, 
			{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			},
			{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			},
			{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			},
			{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			},
			{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			},
			{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			},
			{
				newsName:'重大新闻',
				date:'2018年2月23日',
				location:'北京',
				person:'王小虎',
				state:'终止'
			}]
		}
	},
	created(){
       this.loadNewsPageList()
	},
	methods:{
		loadNewsPageList(){

		},
		handleSizeChange(val) {
			this.pageSize=val;
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			this.currentPage=val;
			console.log(`当前页: ${val}`);
		},
		selectNews(){
           
		},
		resetNews(){

		},
		checkNews(){
             this.$router.push('/News/newsManage/checkNews') 
		}
	}
}
</script>