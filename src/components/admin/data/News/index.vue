<template>
	<div class="NewsManage">
		<h2 class="title">新闻数据</h2>
		<!-- news form表单查询条件 -->
		<el-form :inline="true" :model="newsFormData" ref="newsFormData">
			<el-form-item prop="area">
				<el-select v-model="newsFormData.countrycode" filterable placeholder="选择国家">
				    <el-option
				        v-for="item in countries"
					    :key="item.value"
					    :label="item.label"
					    :value="item.value">
				    </el-option>
				</el-select> 
		    </el-form-item> 
			<el-form-item prop="startTime">
				<el-date-picker v-model="newsFormData.startTime" type="date" placeholder="选择开始日期" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item prop="endTime">
				<el-date-picker v-model="newsFormData.endTime" type="date" placeholder="选择结束日期" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="selectNews">查询</el-button>
				<el-button @click="resetNews('newsFormData')">重置</el-button>
			</el-form-item>
		</el-form>
		<div class="content">
			<!-- news新闻table表格 -->
			<el-table :data="tableData" border>
				<el-table-column prop="eventName" label="新闻名称" align="center"></el-table-column>
				<el-table-column prop="eventTime" label="时间" :formatter="formatterPublicDateTime" align="center"></el-table-column>
				<el-table-column prop="person" label="人物" align="center"></el-table-column>
				<el-table-column prop="operate" label="操作" align="center">
					<template slot-scope="scope">
						<el-button type="text" @click="updatenews(scope.row)">修改</el-button>
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
		<el-dialog title="修改" :visible.sync="updateNews">
			<el-form :model="updateNewsForm" label-width="200px">
				<el-form-item label="事件名称">
					<el-input v-model="updateNewsForm.eventName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="事件类型">
					<el-select v-model="updateNewsForm.type" filterable placeholder="选择事件类型">
						<el-option
							v-for="item in type"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select> 
				</el-form-item>
				<el-form-item label="事件时间">
					<el-date-picker v-model="updateNewsForm.eventTime" type="date" placeholder="选择开始日期" value-format="yyyy-MM-dd"></el-date-picker>
				</el-form-item>
				<el-form-item label="相关地点">
					<el-input v-model="updateNewsForm.sites" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="地区">
					<el-input v-model="updateNewsForm.area" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="基本措施">
					<el-input v-model="updateNewsForm.infrastructure" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="军事要素">
					<el-input v-model="updateNewsForm.arms" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="自然要素">
					<el-input v-model="updateNewsForm.natureDisaster" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="职位">
					<el-input v-model="updateNewsForm.position" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="政党">
					<el-input v-model="updateNewsForm.partyGroup" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="宗教">
					<el-input v-model="updateNewsForm.religion" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="人物">
					<el-input v-model="updateNewsForm.religion" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="updateNews = false">取 消</el-button>
				<el-button type="primary" @click="update">确 定</el-button>
			</div>
		</el-dialog>
    </div>
</template>

<script>
	import {getNewsList,updatenews} from '@/api/data/news/NewsManage.js';
	import {getCountryAll} from '@/api/common.js';
	import {formatterDateStr} from '@/utils/filter.js';
    export default{
		data(){
			return{
				//news表单查询条件
				newsFormData:{
					countrycode:'IND',
					startTime:'2018-01-01',
					endTime:'2018-10-01',
					pageNum:1,//当前页
					pageSize:10,
				},
                updateNewsForm:{},
				//news总记录数
				total:0,

				//国家列表
				countries:[
						{
						value: "PRK",
						label: "朝鲜"
						},
						{
						value: "IND",
						label: "印度"
						},
						{
						value: "JPN",
						label: "日本"
						},
						{
						value: "CHN",
						label: "中国"
						},
						{
						value: "USA",
						label: "美国"
						},
						{
						value: "PAK",
						label: "巴基斯坦"
						},
						{
						value: "KOR",
						label: "韩国"
						}
					],

				//news table数据
				tableData:[],
                type:[{
					value:'1',
					label:'政治事件'
				},{
					value:'2',
					label:'经济事件'
				},{
					value:'3',
					label:'反恐事件'
				}],
				//国家number
				countryNumber:'',
				updateNews:false
			}
		},
		created(){
	       this.loadNewsPageList();
		},
		methods:{
			//加载news新闻 table数据
			loadNewsPageList(){
	    		getNewsList(this.newsFormData).then(res => {
					console.log(res)
	    			this.tableData=res.data.list
	    			this.total=res.data.total
	    		})
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
				var time=row.eventTime
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
			
			//新闻修改,弹出新闻修改
			updatenews(row){
				this.updateNews=true
				this.updateNewsForm=row
			},
			update(){
				this.updateNews=false
				console.log(this.updateNewsForm)
				updatenews(this.updateNewsForm).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>
<style scoped lang="less">
      
</style>
