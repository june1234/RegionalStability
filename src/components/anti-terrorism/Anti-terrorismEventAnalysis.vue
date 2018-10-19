<template>
	<div class="AntiEventAnalysis">
		<h1 class="title">反恐事件分析</h1>
		<el-form :inline="true" :model="antiFormData" ref="antiFormData">
			<el-form-item prop="countryId">
				<el-select v-model="antiFormData.countryId" filterable placeholder="请选择国家">
					<el-option
						v-for="item in countries"
						:key="item.number"
						:label="item.internetname"
						:value="item.number">
				    </el-option>
				</el-select>
			</el-form-item>
			<el-form-item prop="eventTime">
				<el-date-picker v-model="antiFormData.eventTime" type="date" placeholder="请输入开始时间"></el-date-picker>
			</el-form-item>
			<el-form-item prop="endTime">
				<el-date-picker v-model="antiFormData.endTime" type="date" placeholder="请输入结束时间"></el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="selectAnti">查询</el-button>
				<el-button @click="resetAnti('antiFormData')">重置</el-button>
			</el-form-item>
		</el-form>
		<div class="content">
			<el-row :gutter="20">
				<el-col :span="10">
					<div class="grid-content">
						<div id="chart" class="chartClass"></div>
					</div>
				</el-col>
				<el-col :span="14" style="margin:100px 0;">
					<div class="grid-content">
						<span style="line-height:30px;">时间 :{{timeRange}}</span>
						<el-table :data="tableStatisticsData" border style="width:80%">
							<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="Korea" label="朝鲜" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="India" label="印度" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="Japan" label="日本" align="center" min-width="100%"></el-table-column>
						</el-table>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="content">
			<span class="span-title">等级曲线</span>
			<el-row :gutter="20" type="flex">
				<el-col :span="8">	
					<div class="grid-content">
						<span class="span-content">朝鲜</span>
						<div id="chartOne" class="chartClass"></div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content">
						<span class="span-content">印度</span>
						<div id="chartTwo" class="chartClass"></div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content">
						<span class="span-content">日本</span>
						<div id="chartThree" class="chartClass"></div>
					</div>
				</el-col>
			</el-row>
		</div>
		<div id="victim" 
		style="width: 100%;height: 500px;background-color:#fff;margin-top:20px;"></div>
         <div id="Attacks" 
         style="width: 100%;height: 500px;background-color:#fff;margin-top:20px;"></div>
         <div id="ArmedForces" 
         style="width: 100%;height: 500px;background-color:#fff;margin-top:20px;"></div>
		<div class="content">
			<el-row :gutter="20">
				<el-col :span="24">
					<div class="grid-content">
						<el-table :data="antiTableData" border style="width:100%;">
							<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="eventTime" label="事件发生时间" :formatter="formatterTime" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="countryFullName" label="国家" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="people" label="人物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="antiTerrorism" label="恐怖组织" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="grade" label="等级" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="casualties" label="伤亡人数" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="weapons" label="武器" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="infrastructure" label="建筑物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="border" label="边境状况" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="militaryfacor" label="军事要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="naturefactor" label="自然要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="operate" label="操作" align="center" min-width="100%" fixed="right">
								<template slot-scope="scope">
									<el-button type="text" @click="showAntiEventUpdateDialog(scope.row)">修改</el-button>
								</template>
							</el-table-column>
						</el-table>
						<el-button @click="more" class="more">更多</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 反恐事件修改dialog -->
		<el-dialog title="反恐事件修改" style="text-align:center;" :visible.sync="antiEventUpdateDialog" width="35%">
			<el-form :model="antiEvent" label-width="100px" class="AntiForm">
				<el-form-item label="事件名称">
					<el-input v-model="antiEvent.eventName" placeholder="请修改事件名称"></el-input>
				</el-form-item>
				<el-form-item label="事件发生时间">
					<el-date-picker type="date" v-model="antiEvent.eventTime" palceholder="请输入时间"></el-date-picker>
				</el-form-item>
				<el-form-item label="国家">
					<el-input v-model="antiEvent.countryFullName" palceholder="请输入国家"></el-input>
				</el-form-item>
				<el-form-item label="人物">
					<el-input v-model="antiEvent.people" palceholder="请输入人物"></el-input>
				</el-form-item>
				<el-form-item label="恐怖组织">
					<el-select v-model="antiEvent.antiTerrorism" placeholder="请选择恐怖组织">

				    </el-select>
				</el-form-item>
				<el-form-item label="等级">
					<el-select v-model="antiEvent.grade" placeholder="请选择等级">

				    </el-select>
			    </el-form-item>	
			    <el-form-item label="伤亡人数">
					<el-input v-model="antiEvent.casualties"></el-input>
				</el-form-item>
				<el-form-item label="武器">
					<el-input v-model="antiEvent.weapons"></el-input>
				</el-form-item>
				<el-form-item label="建筑物">
					<el-input v-model="antiEvent.infrastructure"></el-input>
				</el-form-item>
				<el-form-item label="边境状况">
					<el-input v-model="antiEvent.bound"></el-input>
				</el-form-item>
				<el-form-item label="军事要素">
					<el-input v-model="antiEvent.militaryfacor"></el-input>
				</el-form-item>
			    <el-form-item label="自然要素">
				    <el-input v-model="antiEvent.naturefactor"></el-input>
			    </el-form-item>				
			    <el-form-item>
				    <el-button type="primary" @click="saveAntiEvent">确认</el-button>
				    <el-button @click="cancleAntiEvent">取消</el-button>
			    </el-form-item>
		   </el-form> 								   
	    </el-dialog>
	</div>
</template>

<script>
	import echarts from 'echarts'
	import {getCountryAll} from '@/api/common.js';
	import {formatterDateStr,formatterDate} from '@/utils/filter.js';
	import {getAntiEventListByType} from '@/api/anti-terrorism/Anti-terrorismEventAnalysis.js';
	export default{
		data(){
			return{
				antiEventUpdateDialog:false,
				//反恐事件from表单查询条件
				antiFormData:{
					countryId:'',
					type:3,
					eventTime:'',
					endTime:''
				},
                //反恐事件修改dialog表单数据
                antiEvent:{
                	id:'',
                	nid:'',
					eventName:'',
					eventTime:'',
					countryId:'',
					people:'',
					antiTerrorism:'',
                    grade:'',
                    casualties:'',
                    weapons:'',
                    infrastructure:'',
                    bound:'',
                    militaryfacor:'',
                    naturefactor:''
				},
				tableStatisticsData:[{
                    country:'数量',
                    Korea:'50',
                    India:'60',
                    Japan:'80'
                }],
				//时间范围
				timeRange:'',
				//国家信息列表
				countries:[],
                //反恐事件table数据
                antiTableData:[]
			}
		},
		created(){
            this.getCountryAll()
            this.loadAntiEventPageList()
		},
		mounted(){
			this.drawLine();
			this.drawLineOne();
			this.drawLineTwo();
			this.drawLineThree();
			this.Victim()
			this.Attacks()
			this.ArmedForces()
		},
		methods:{
			//获取列表信息
			loadAntiEventPageList(){	
                getAntiEventListByType(this.antiFormData).then(res=>{
                    this.antiTableData=res.data.list
                });
			},
			//获取国家信息
			getCountryAll(){
				getCountryAll().then(res=>{
					this.countries=res.data
				})
			},
			drawLine(){
				var myChart = echarts.init(document.getElementById('chart'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					 legend: {},
					dataset: {
						source: [
						['country', '朝鲜', '印度', '日本'],
						['6月', 143, 185, 193],
						['7月', 183, 173, 155],
						['8月', 186, 165, 182],
						['9月', 172, 153, 139],
						]
					},
					xAxis: {type: 'category'},
					yAxis: {},
					series: [
					{type: 'bar',roam: true},
					{type: 'bar',roam: true},
					{type: 'bar',roam: true}
					]
				};     
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				}); 
			},
			drawLineOne(){
				var myChart = echarts.init(document.getElementById('chartOne'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};     
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineTwo(){
				var myChart = echarts.init(document.getElementById('chartTwo'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineThree(){
				var myChart = echarts.init(document.getElementById('chartThree'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			formatterTime(val){
                return formatterDateStr(val.eventTime)
			},
			//查询
			selectAnti(){
                var eventTime=this.antiFormData.eventTime
				if(eventTime!=''){
					this.antiFormData.eventTime=formatterDate(eventTime)
				}
				var endTime=this.antiFormData.endTime
				if(endTime!=''){
					this.antiFormData.endTime=formatterDate(endTime)
				}
				this.loadAntiEventPageList()
                //this.timeRange=startTime +' 至 '+endTime
			},
			//重置
			resetAnti(antiFormData){
                this.$refs[antiFormData].resetFields();
                this.loadAntiEventPageList()
                //this.timeRange=''
			},
			//修改
			showAntiEventUpdateDialog(row){
				this.antiEventUpdateDialog=true
                this.antiEvent.id=row.id
                this.antiEvent.nid=row.nid
                this.antiEvent.eventName=row.eventName
                this.antiEvent.eventTime=row.eventTime
                this.antiEvent.countryId=row.countryId
                this.antiEvent.countryFullName=row.countryFullName
                this.antiEvent.people=row.people
                this.antiEvent.antiTerrorism=row.antiTerrorism
                this.antiEvent.grade=row.grade
                this.antiEvent.casualties=row.casualties
                this.antiEvent.weapons=row.weapons
                this.antiEvent.infrastructure=row.infrastructure
                this.antiEvent.bound=row.bound
                this.antiEvent.militaryfacor=row.militaryfacor
                this.antiEvent.naturefactor=row.naturefactor
			},
			//保存
			saveAntiEvent(){
				this.antiEventUpdateDialog=false
			},
			//取消
			cancleAntiEvent(){
				this.antiEventUpdateDialog=false
			},
			//更多
			more(){
				this.$router.push('/AntiTerrorismEvent/Anti-terrorismEventList')
			},
			Victim(){
				const Victim=document.querySelector('#victim')
				const VicCharts=echarts.init(Victim)
				const option= {
					    color:['#f54e96','#8ed41b','#7631a6','#eadc27'],
						title: {
							left: 330,
							text: '印度受害目标时序分析',
							subtext: 'Time series analysis of victims in India'
						},
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'line'
							}
						},
						grid: {
							height: 350,
							right: 250
						},
						xAxis: {
							type: 'category',
							data: [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008]
						},
						yAxis: {
							type: 'value'
						},
						legend: {
							right: 50,
							top: 300,
							orient: 'vertical',
							data: ['斯利那加(Srinagar)', '英帕尔(Imphal)', '新德里(New Delhi)', '古瓦哈提(Guwahati)', '查谟(Jammu)'],
						},
						series: [{
								name: '斯利那加(Srinagar)',
								type: 'line',
								data: [45, 0, 6, 12, 29, 22, 0, 4, 23, 20, 27, 19, 12, 25, 35, 9, 4],
							},
							{
								name: '英帕尔(Imphal)',
								type: 'line',
								data: [0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 2, 1, 0, 1, 2, 4, 54],
							},
							{
								name: '新德里(New Delhi)',
								type: 'line',
								data: [8, 0, 1, 1, 3, 18, 0, 0, 6, 2, 2, 1, 0, 3, 1, 3, 9],
							},
							{
								name: '查谟(Jammu)',
								type: 'line',
								data: [2, 0, 5, 4, 0, 0, 0, 1, 4, 2, 5, 3, 5, 0, 2, 0, 3],
							},
							{
								name: '古瓦哈提(Guwahati)',
								type: 'line',
								data: [3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 3, 6, 6, 19, 7],
							},
						]
					}
				 VicCharts.setOption(option)
				 window.addEventListener("resize", function() {
		            VicCharts.resize()
		          })	
			},
			Attacks(){
				const Attacks=document.querySelector("#Attacks")
				const AttCharts=echarts.init(Attacks)
				const option={
					 	color:['#f54e96','#8ed41b','#7631a6','#eadc27'],
					    title : {
					        text: '印度恐怖袭击事件分类分析',
					        subtext: 'Classified analysis of terrorist attacks in India'
					    },
					    tooltip : {
					        trigger: 'axis',
					        axisPointer: {
								type: 'shadow'
							}
					    },
					    legend: {
					        data:['社会性影响事件','群体性影响事件','人权性影响事件']
					    },
					    calculable : true,
					    xAxis : [
					        {
					            type : 'category',
					            data : [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008]
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value'
					        }
					    ],
					    series : [
					        {
					            name:'社会性影响事件',
					            type:'bar',
					            data:[238,0,107,179,211,191,0,23,177,128,170,195,109,145,165,156,498],
					        },
					        {
					            name:'群体性影响事件',
					            type:'bar',
					            data:[237,0,107,175,202,185,0,23,178,128,171,196,109,145,164,156,513],
					        },
					        {
					            name:'人权性影响事件',
					            type:'bar',
					            data:[220,0,97,166,194,170,0,22,176,125,168,189,108,135,164,153,515],
					        }
					    ]
					}
				AttCharts.setOption(option)
				window.addEventListener("resize", function() {
	        	   AttCharts.resize()
	        	 })	
			},
			ArmedForces(){
				const ArmedForces=document.querySelector("#ArmedForces")
				const ArmedCharts=echarts.init(ArmedForces)
				const option={
					title: {
						text: '1992年-2008年武装力量分析',
						subtext: 'Analysis of armed forces',
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['枪械(Firearms)', '炸药/炸弹(Explosives/Bombs/Dynamite)', '未知(Unknown)', '燃烧弹(Incendiary)', '混乱(Melee)', '其他(Other)']
					},
					series: [{
						name: '武器类型',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: [{
								value: 999,
								name: '枪械(Firearms)'
							},
							{
								value: 1319,
								name: '炸药/炸弹(Explosives/Bombs/Dynamite)'
							},
							{
								value: 159,
								name: '未知(Unknown)'
							},
							{
								value: 120,
								name: '燃烧弹(Incendiary)'
							},
							{
								value: 101,
								name: '混战(Melee)'
							},
							{
								value: 9,
								name: '其他(Other)'
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				}
				ArmedCharts.setOption(option)
				window.addEventListener("resize", function() {
	        	   ArmedCharts.resize()
	        	 })	

			}
		}
   }
</script>

<style scoped lang="less">
  
</style>