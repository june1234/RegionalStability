<template>
	<div class="CheckNews">
		<h2 class="title">新闻数据校验</h2>	 
		<el-row :gutter="30">
			<el-col :span="10">
				<div class="grid-content">
					<h3 class="NewsTitle">{{newsData.news_name}}</h3>
					<span class="span-title">
						<span>作者：</span>
						<span>时间：{{newsData.reportTime}}</span><!-- 报道时间 -->
					</span>
					<div class="NewsContent">{{newsData.content}}</div>
					<span class="source">来源:{{newsData.source}}</span>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content">
					<h3>新闻校验</h3>
					<el-form :inline="true" :model="newsDetailData" label-width="160px">
						<el-form-item label="事件名称" >
							<el-input v-model="newsDetailData.eventName" placeholder="输入或选择相关事件"></el-input>
						</el-form-item>
						<el-form-item label="事件类型">                                 
							<el-select v-model="newsDetailData.type" placeholder="选择事件类型" @change="changeType">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							 </el-select>                                                                               
						</el-form-item>	
                          <!-- 发生时间 -->
						<el-form-item label="时间">
							<el-date-picker v-model="newsDetailData.eventTime" type="date" placeholder="请选择时间"></el-date-picker>
						</el-form-item>
						<el-form-item label="国家">
							<el-input v-model="country" placeholder="国家"></el-input>
						</el-form-item>
						<el-form-item label="相关地点">
							<el-input v-model="newsDetailData.sites" placeholder="相关地点"></el-input>
						</el-form-item>

						<el-form-item label="相关机构" v-for="(item,index) in orginizations" :key="index" >
							<el-input v-model="orginizations[index]"></el-input>												
						</el-form-item>

						<el-form-item label="边境状况">
							<el-input v-model="newsDetailData.bound"></el-input>
						</el-form-item>
						<div  v-if="showPolitics">
						    <el-form-item label="相关国家"><!-- relevants 相关方-->
							    <el-input v-model="newsDetailData.relevants"></el-input>
						    </el-form-item>
						    <el-form-item label="相关领导人" v-for="(item,index) in peoples" :key="index"><!-- people 相关人物-->
							    <el-input v-model="peoples[index]"></el-input>
						    </el-form-item>

						    <!-- 后台未传字段 -->
						    <!-- <el-form-item label="情绪">
						    	<el-select v-model="newsDetailData.mood" placeholder="选择事件类型">
						    		<el-option label="恐惧" value="1"></el-option>
						    		<el-option label="狂喜" value="2"></el-option>
						    		<el-option label="狂怒" value="3"></el-option>
						    	</el-select>
						    </el-form-item> -->
						</div>
                        <div  v-if="showAnti">
							<el-form-item label="武器">
							    <el-input v-model="newsDetailData.weapons"></el-input>
						    </el-form-item>
						    <el-form-item label="伤亡人数">
							    <el-input v-model="newsDetailData.casualties"></el-input>
						    </el-form-item>							    
						</div>
						<el-form-item label="基础设施">
							<el-input v-model="newsDetailData.infrastructure"></el-input>
						</el-form-item>
						<el-form-item label="军事要素">
							<el-input v-model="newsDetailData.militaryfacor"></el-input>
						</el-form-item>
						<el-form-item label="自然要素">
							<el-input v-model="newsDetailData.naturefactor"></el-input>
						</el-form-item>
						<el-form-item label="关键词">
							<el-input v-model="newsDetailData.keywords"></el-input>
							<span style="color:red;">请用逗号分割！</span>
						</el-form-item>							
					</el-form>
					<div class="confirm">						
						<el-button type="primary" @click="addForm" v-if="Type==1">保存</el-button>
						<el-button type="primary" @click="updateForm" v-if="Type==2">保存</el-button>
						<el-button @click="resetForm">取消</el-button>	
					</div>
				</div>
			</el-col>				
		</el-row>
	</div>
</template>

<script>
    import {findById,updateOne,updateTwo,add,update,find} from '@/api/data/news/CheckNews.js'
    import {getCountryAll} from '@/api/common.js';
	export default{
		data(){
			return{
				countries:[],//所有国家信息
				showPolitics:false,
				showAnti:false,
				newsDetailData:{
					nid:'',
					eventName:'',
					countryId:'',
					eventTime:'',
					endTime:'',
					longitude:'',
					latitude:'',
					sites:'',
					people:'',
					type:''
				},
				Type:'',
				news_id:'',//原始新闻id，校验时取消用
				//新闻内容等信息
				newsData:{
					news_name:'',
					reportTime:'',
					content:'',
					source:''
				},
				country:'',
				options: [{
					value: 1,
					label: '政治事件'
				}, {
					value: 2,
					label: '经济事件'
				}, {
					value: 3,
					label: '反恐事件'
				}],
				orginizations:[],
				peoples:[],
                countryNumber:0
			}
		},
		created(){
			this.getNewsDetail()
			this.showPolitics=true
			this.showAnti=true
            getCountryAll().then(res=>{
           	    this.countries=res.data
           	    for(var i=0;i<this.countries.length;i++){
                    if(this.countries[i].countrykeys===this.newsData.region){
                        this.countryNumber=this.countries[i].number
                    }
        		}
            })
		},
		methods:{
			getNewsDetail(){		
                const {news_id,T}=this.$route.query
                this.news_id=news_id
                this.Type=T
                //校验
                if(T==1){
                	findById(news_id).then(res=>{
                		this.newsData=res.data.attr
                		//时间格式化
                		const d=new Date(res.data.attr.reportTime)
                		this.newsData.reportTime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' 
                		+ d.getMinutes() + ':' + d.getSeconds();                       
                		//原始数据未传相关机构
                		this.orginizations=[" "," "," "]
                		//相关领导人
                		if(res.data.attr.persons!=null){
                            this.peoples=res.data.attr.persons  
                		}else{
                			this.peoples=[" "," "," "]
                		}
                		this.country=res.data.attr.region
                		//form表单信息
                        this.newsDetailData={
                        	nid:res.data.attr.news_id,
                            eventName:res.data.attr.news_name,
                            eventTime:res.data.attr.publicDateTime,
                            sites:res.data.attr.area.toString(),
                            people:res.data.attr.persons.join(','),
                            endTime:res.data.attr.publicDateTime,
							longitude:'45324',
							latitude:'45324'
                        }
                	}) 
                }
                //修改
                if(T==2){
                	//获取原始数据
                	findById(news_id).then(res=>{
                        this.newsData=res.data.attr 
                        this.country=res.data.attr.region                       
                        //时间格式化
                		var d=new Date(res.data.attr.reportTime)
                		this.newsData.reportTime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' 
                		+ d.getMinutes() + ':' + d.getSeconds();
                	})
                	const nid=news_id
                	find(nid).then(res=>{
                		this.newsDetailData=res.data
                		this.country=this.newsData.region
                		const type=this.newsDetailData.type
                		//判断后台传的相关机构orginizations
                		if(this.orginizations!=null){
                            this.orginizations=this.newsDetailData.orginizations.split(",")
                		}else{
                			this.orginizations=[" "," "," "]
                		}
                		if(this.peoples!=null){
                            this.peoples=this.newsDetailData.people.split(",")
                		}else{
                			this.peoples=[" "," "," "]
                		}
                		if(type==1){//政治
                			this.showPolitics=true
                			this.showAnti=false
                		}
                		if(type==2){//经济
                			this.showAnti=false
                			this.showPolitics=false
                		}
                		if(type==3){//反恐
                			this.showAnti=true
                			this.showPolitics=false
                		}
                	}) 
                }
			},
			changeType(selVal){
              if(selVal==1){
                this.showPolitics=true
                this.showAnti=false
              }
              if(selVal==2){
              	this.showAnti=false
              	this.showPolitics=false
              }
              if(selVal==3){
              	this.showAnti=true
              	this.showPolitics=false
              }
			},
			addForm(){
				const id=this.news_id
				this.newsDetailData.eventTime=this.getDataStr(this.newsDetailData.eventTime)
				this.newsDetailData.endTime='2018-09-01'   //原始数据未传该字段，后台要求必须传
				this.newsDetailData.type=this.newsDetailData.type.toString()
				this.newsDetailData.orginizations=this.orginizations.toString() //相关机构
				this.newsDetailData.people=this.peoples.toString() //相关领导人
				this.newsDetailData.countryId=this.countryNumber.toString() //国家id
				//原始新闻入库
                add(this.newsDetailData).then(res=>{
                	//修改原始新闻状态
				    updateTwo(id).then(res=>{	
				       	this.$router.push('/News/newsManage')			
                    })
				})       
		    },
			updateForm(){
				this.newsDetailData.orginizations=this.orginizations.toString()  //相关机构
				this.newsDetailData.people=this.peoples.toString() //相关领导人
				this.newsDetailData.countryId=this.countryNumber.toString()  //国家id
				console.log(this.newsDetailData)
				update(this.newsDetailData).then(res=>{
				    this.$router.push('/News/newsManage')
				})
			},		
			resetForm(){
				const T=this.$route.query.T
				if(T!=2){
					const id=this.news_id
                    updateOne(id).then(res=>{
                    })
				}
				this.$router.push('/News/newsManage')
			},
			//时间格式化,年-月-日
			getDataStr(time){
				const date=new Date(time)
				var year = date.getFullYear()
				var month = date.getMonth() + 1
				var day = date.getDate()
				if(month < 10){ /*月份小于10,在前面加个0*/
					month = String(String(0) + String(month));
				}
				if(day < 10){ /*日期小于10,在前面加个0*/
					day = String(String(0) + String(day));
				}
                return time=String(year) +'-'+ String(month) +'-'+ String(day)
			}
		}
	}
</script>

<style scoped lang="less">
  
</style>