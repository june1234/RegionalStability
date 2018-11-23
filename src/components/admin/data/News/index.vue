<template>
	<div class="NewsManage">
		<h2 class="title">新闻数据</h2>
		<!-- news form表单查询条件 -->
		<el-form :inline="true" :model="newsFormData" ref="newsFormData">
			<el-form-item prop="area">
				<el-select v-model="newsFormData.area" filterable placeholder="选择国家">
				    <el-option
				        v-for="item in countries"
					    :key="item.number"
					    :label="item.internetname"
					    :value="item.countrykeys">
				    </el-option>
				</el-select> 
		    </el-form-item> 
			<el-form-item prop="startTime">
				<el-date-picker v-model="newsFormData.startTime" type="date" placeholder="选择开始日期"></el-date-picker>
			</el-form-item>
			<el-form-item prop="endTime">
				<el-date-picker v-model="newsFormData.endTime" type="date" placeholder="选择结束日期"></el-date-picker>
			</el-form-item>
			<el-form-item prop="status">
				<el-select v-model="newsFormData.status" placeholder="处理状态">
					<el-option label="未处理" value="0"></el-option>
					<el-option label="已处理,未入库" value="1"></el-option>
					<el-option label="已处理,已入库" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="selectNews">查询</el-button>
				<el-button @click="resetNews('newsFormData')">重置</el-button>
			</el-form-item>
		</el-form>
		<div class="content">
			<!-- news新闻table表格 -->
			<el-table :data="tableData" border>
				<el-table-column prop="attr.news_name" label="新闻名称" align="center"></el-table-column>
				<el-table-column prop="attr.publicDateTime" label="时间" :formatter="formatterPublicDateTime" align="center"></el-table-column>
				<el-table-column prop="attr.region" label="国家" align="center"></el-table-column>
				<el-table-column prop="attr.persons" label="人物" align="center"></el-table-column>
				<el-table-column prop="attr.status" label="处理状态" align="center" :formatter="formatterStatus"></el-table-column>
				<el-table-column prop="operate" label="操作" align="center">
					<template slot-scope="scope">
						<el-button type="text" @click="checkNews(scope.row.attr.news_id)"  v-if="scope.row.attr.status!='2'">校验</el-button>
						<el-button type="text" @click="updateNews(scope.row.attr.news_id)"  v-if="scope.row.attr.status=='2'">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- news数据分页 -->
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="newsFormData.pageNum"
				:page-sizes="[10,50,100]"
				:page-size="newsFormData.pageSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total">
		   </el-pagination>
	    </div>
    </div>
</template>

<script>
	import {getNewsList} from '@/api/data/news/NewsManage.js';
	import {getCountryAll} from '@/api/common.js';
	import {formatterDateStr} from '@/utils/filter.js';
    export default{
		data(){
			return{
				//news表单查询条件
				newsFormData:{
					area:'',
					startTime:'',
					endTime:'',
					pageNum:1,//当前页
					pageSize:10,
					status:''
				},

				//news总记录数
				total:0,

				//国家列表
				countries:[],

				//news table数据
				tableData:[],

				//国家number
				countryNumber:''
			}
		},
		created(){
	       this.loadNewsPageList();
	       this.getCountryAll();
		},
		methods:{
			//加载news新闻 table数据
			loadNewsPageList(){
	    		getNewsList(this.newsFormData).then(res => {
	    			this.tableData=res.data.tagdatas
	    			this.total=res.data.total
	    		})
			},
			//获取国家信息
			getCountryAll(){
	            getCountryAll().then(res=>{
	           	    this.countries=res.data
	           });
			},
			//新闻数据分页
			handleSizeChange(val){
				this.newsFormData.pageSize=val
				this.loadNewsPageList()
			},
			handleCurrentChange(val){
				this.newsFormData.pageNum=val
				this.loadNewsPageList()
			},
			//格式化新闻发生时间
			formatterPublicDateTime(row){
				var time=row.attr.publicDateTime
				if(time!=null){
                    return formatterDateStr(time)
                }                
			},
			//格式化新闻数据状态
			formatterStatus(row){
				var status=row.attr.status
	            if(status==0){
	            	return '未处理'
	            }
	            if(status==1){
	            	return '已处理,未入库'
	            }
	            if(status==2){
	            	return '已处理,已入库'
	            }
			},
			//查询新闻操作
			selectNews(){
	    		this.loadNewsPageList()
			},
			resetNews(newsFormData){
	            this.loadNewsPageList()
	            this.$refs[newsFormData].resetFields()	 
			},
			//新闻校验,跳转新闻校验页面
			checkNews(id){
	            this.$router.push({path:"/News/newsManage/checkNews",query:{news_id:id,T:1}}) 
			},
			//新闻修改,跳转新闻修改页面
			updateNews(id){
				this.$router.push({path:"/News/newsManage/checkNews",query:{news_id:id,T:2}}) 
			}
		}
	}
</script>
<style scoped lang="less">
      
</style>
