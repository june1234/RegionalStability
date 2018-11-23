<template>
	<div class="NewsList">
		<h1 class="title">新闻列表</h1>
		<el-form :inline="true" :model="newsFormData" ref="newsFormData">
			<el-form-item prop="countryId">
				<el-select v-model="newsFormData.countryId" filterable placeholder="选择国家">
					<el-option
					v-for="item in countries"
					:key="item.number"
					:label="item.internetname"
					:value="item.number">
				   </el-option>
			    </el-select>
			</el-form-item>
			<el-form-item prop="type">
				<el-select v-model="newsFormData.type" placeholder="请选择种类">
					<el-option
						v-for="item in types"
						:key="item.label"
						:label="item.label"
						:value="item.value">
				    </el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="eventTime">
		        <el-date-picker v-model="newsFormData.eventTime" type="date" placeholder="开始时间"></el-date-picker>
		    </el-form-item>
		    <el-form-item prop="endTime">
		        <el-date-picker v-model="newsFormData.endTime" type="date" placeholder="结束时间"></el-date-picker>
		    </el-form-item>
		    <el-form-item>
			    <el-button type="primary" @click="selectNews">查询</el-button>
			    <el-button @click="resetNews('newsFormData')">重置</el-button>
		    </el-form-item>
	    </el-form>
		<div class="content">
			<el-table :data="tableNewsData" border >
				<el-table-column label="新闻标题" align="center" min-width="100%">
					<template slot-scope="scope">
						<el-button type="text" @click="showNewsDetail(scope.row.id)">{{scope.row.eventName}}</el-button><!-- {{scope.row.title}} 值-->
					</template>
				</el-table-column>
				<el-table-column prop="type" label="种类" :formatter="formatterType" align="center" min-width="100%"></el-table-column>				
				<el-table-column prop="eventTime" label="开始时间" :formatter="formatterEventTime" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="endTime" label="结束时间" :formatter="formatterEndTime" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="countryFullName" label="国家" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="sites" label="相关地点" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="orginizations" label="相关机构" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="infrastructure" label="基础设施" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="bound" label="边境状况" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="militaryfacor" label="军事要素" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="naturefactor" label="自然要素" align="center" min-width="100%"></el-table-column>
			</el-table>
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="newsFormData.pageNum"
				:page-sizes="[20, 50, 100]"
				:page-size="newsFormData.pageSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total">
			</el-pagination>
		</div>			
    </div>
</template>

<script>
    import {getCountryAll} from '@/api/common.js';
    import {getNewsList} from '@/api/news/NewsList.js'
    import {formatterDateStr,formatterDate} from '@/utils/filter.js';
	export default{
		data(){
			return{
				//新闻form表单查询条件
				newsFormData:{
					pageNum:1,
					pageSize:20,
					countryId:'',
					type:'',
					eventTime:'',
					endTime:''
				},
				types:[{
					value:'',
                    label:'全部'
				},{
                    value:1,
                    label:'政治'
				},{
                    value:2,
                    label:'经济'
				},{
                    value:3,
                    label:'反恐'
				}],

				//news总记录数
				total:0,
				//国家信息
				countries:[],
				//新闻news表格数据
				tableNewsData:[]
			}
		},
		created(){
		    this.loadNewsPageList()
	        this.getCountryAll()
		},
		methods:{
			//加载新闻列表信息
			loadNewsPageList(){
                getNewsList(this.newsFormData).then(res=>{
                	this.tableNewsData=res.data.list
                    this.total=res.data.total
                });
			},
			//获取国家信息
			getCountryAll(){
	            getCountryAll().then(res=>{
	           	    this.countries=res.data
	            });
			},
			handleSizeChange(val){
				this.newsFormData.pageSize=val
				this.loadNewsPageList()
			},
			handleCurrentChange(val){
				this.newsFormData.pageNum=val
				this.loadNewsPageList()
			},
			formatterType(row){
                const type=row.type
                switch(type){
                    case 1:return '政治';
                    break;
                    case 2:return '经济';
                    break;
                    default:return '政治';
                    break;
                }
			},
			formatterEventTime(row){
                return formatterDateStr(row.eventTime)
			},
			formatterEndTime(row){
                return formatterDateStr(row.endTime)
			},
			//查询
			selectNews(){
				const eventTime=this.newsFormData.eventTime
				const endTime=this.newsFormData.endTime
				if(eventTime!=''){
					this.newsFormData.eventTime=formatterDate(eventTime)
				}
				if(endTime!=''){
					this.newsFormData.endTime=formatterDate(endTime)
				}
                this.loadNewsPageList()
			},
			//重置
			resetNews(newsFormData){
				this.$refs[newsFormData].resetFields();
				this.loadNewsPageList();
			},
			//新闻详情
			showNewsDetail(id){
	           this.$router.push('/NewsList/NewsDetail?id='+id)
			}
		}
	}
</script> 

<style scoped lang="less">
	
</style>