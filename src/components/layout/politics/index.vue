<template>
	<div class="PoliticsEventAnalysis">
		<h1 class="title">政治事件分析</h1>
		<!-- form表单查询条件 -->
  		<el-form :inline="true" :model="politicsFormData">
  			<el-form-item label="选择国家">
	  			<el-checkbox 
		  				:indeterminate="isIndeterminate" 
		  				v-model="checkAll" 
		  				@change="handleCheckAllChange" style="margin-bottom:10px;">全选</el-checkbox>
  			</el-form-item>
  			<el-form-item>
  				<el-checkbox-group v-model="politicsFormData.Country" @change="handleCheckedCitiesChange">
			      <el-checkbox-button 
			      v-for="country in countrys" 
			      :label="country" 
			      :key="country">
			        {{country}}
			      </el-checkbox-button>
			    </el-checkbox-group>
  			</el-form-item>
			<el-form-item label="选择时间">
				<el-date-picker v-model="politicsFormData.beginDate" type="date" placeholder="请输入开始时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-date-picker v-model="politicsFormData.endDate" type="date" placeholder="请输入结束时间">
				</el-date-picker>
			</el-form-item>
		</el-form>
		<el-button type="primary" @click="selectPolitics">查询</el-button>
		<!-- 政治事件统计 -->
		<div class="statistics">
			<div class="explain">
				<h5>日本</h5>
				<el-row :gutter="40">
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon">
				  			<i class="el-icon-news" style="background-color:#fecd77;"></i>
				  		</span>
				  		<p class="titl">总量：<span>1000</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">9分以上：<span>200</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以上：<span>600</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以下：<span>200</span></p>
				  	</div>
				  </el-col>
				</el-row>
			</div>
			<el-row :gutter="10">
			  <el-col :span="8">
			  	<h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple hot" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple bar" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			  <el-col :span="8">
				<h4>事件发生曲线</h4>
			  	<div class="grid-content bg-purple line" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<div class="statistics">
			<div class="explain">
				<h5>朝鲜</h5>
				<el-row :gutter="40">
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon">
				  			<i class="el-icon-news" style="background-color:#fecd77;"></i>
				  		</span>
				  		<p class="titl">总量：<span>1000</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">9分以上：<span>200</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以上：<span>700</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以下：<span>100</span></p>
				  	</div>
				  </el-col>
				</el-row>
			</div>
			<el-row :gutter="10">
			  <el-col :span="8">
			  	<h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple hot" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple bar" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<h4>事件发生曲线</h4>
			  	<div class="grid-content bg-purple line" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<div class="statistics">
			<div class="explain">
				<h5>印度</h5>
				<el-row :gutter="40">
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon">
				  			<i class="el-icon-news" style="background-color:#fecd77;"></i>
				  		</span>
				  		<p class="titl">总量：<span>1200</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">9分以上：<span>200</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以上：<span>500</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以下：<span>500</span></p>
				  	</div>
				  </el-col>
				</el-row>
			</div>
			<el-row :gutter="10">
			  <el-col :span="8">
                <h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple hot" style="width: 100%;height: 400px;">
			  	</div>
			  </el-col>
			  <el-col :span="8">
                <h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple bar" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<h4>事件发生曲线</h4>
			  	<div class="grid-content bg-purple line" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<div class="statistics">
			<div class="explain">
				<h5>韩国</h5>
				<el-row :gutter="40">
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon">
				  			<i class="el-icon-news" style="background-color:#fecd77;"></i>
				  		</span>
				  		<p class="titl">总量：<span>900</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">9分以上：<span>300</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以上：<span>500</span></p>
				  	</div>
				  </el-col>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<span class="icon"><i class="el-icon-news"></i></span>
				  		<p class="titl">6分以下：<span>100</span></p>
				  	</div>
				  </el-col>
				</el-row>
			</div>
			<el-row :gutter="10">
			  <el-col :span="8">
                <h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple hot" style="width: 100%;height: 400px;">
			  	</div>
			  </el-col>
			  <el-col :span="8">
                <h4>事件分数分布图</h4>
			  	<div class="grid-content bg-purple bar" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<h4>事件发生曲线</h4>
			  	<div class="grid-content bg-purple line" style="width: 100%;height: 400px;">
			  		
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<!-- 政治事件列表 -->
		<div class="content">
			<el-row :gutter="20">
				<el-col :span="24">
					<div class="grid-content">
						<el-table :data="politicsTableData" border style="width:100%;">
							<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="eventTime" label="事件发生时间" :formatter="formatterTime" align="center" min-width="100%">
							</el-table-column>
							<el-table-column prop="countryFullName" label="国家" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="people" label="人物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="partyGroup" label="政党" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="grade" label="等级" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="infrastructure" label="建筑物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="bound" label="边境状况" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="militaryfacor" label="军事要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="naturefactor" label="自然要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="operate" label="操作" align="center" min-width="100%" fixed="right">
								<template slot-scope="scope">
									<el-button type="text" @click="showPoliticsEventUpdateDialog(scope.row)">修改</el-button>
								</template>
							</el-table-column>
						</el-table>
						<el-button @click="more" class="more">更多</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 政治事件修改dialog-->
		<el-dialog title="政治事件修改" style="text-align:center;" :visible.sync="politicsEventUpdateDialog" width="35%">
			<el-form :model="politicsEvent" label-width="100px" class="PoliticsForm">
				<el-form-item label="事件名称">
					<el-input v-model="politicsEvent.eventName" placeholder="请修改事件名称"></el-input>
				</el-form-item>
				<el-form-item label="事件发生时间">
					<el-date-picker type="date" v-model="politicsEvent.eventTime" palceholder="请输入时间"></el-date-picker>
				</el-form-item>
				<el-form-item label="国家">
					<el-input v-model="politicsEvent.countryFullName" palceholder="请输入国家"></el-input>
				</el-form-item>
				<el-form-item label="人物">
					<el-input v-model="politicsEvent.people" palceholder="请输入人物"></el-input>
				</el-form-item>
				<el-form-item label="政党">
					<el-select v-model="politicsEvent.partyGroup" placeholder="请选择政党">

				    </el-select>
				</el-form-item>
				<el-form-item label="等级">
					<el-select v-model="politicsEvent.grade" placeholder="请选择等级">

				    </el-select>
			    </el-form-item>	
				<el-form-item label="建筑物">
					<el-input v-model="politicsEvent.infrastructure"></el-input>
				</el-form-item>
				<el-form-item label="边境状况">
					<el-input v-model="politicsEvent.bound"></el-input>
				</el-form-item>
				<el-form-item label="军事要素">
					<el-input v-model="politicsEvent.militaryfacor"></el-input>
				</el-form-item>
			    <el-form-item label="自然要素">
				    <el-input v-model="politicsEvent.naturefactor"></el-input>
			    </el-form-item>				
			    <el-form-item>
				    <el-button type="primary" @click="savePoliticsEvent">确认</el-button>
				    <el-button @click="canclePoliticsEvent">取消</el-button>
			    </el-form-item>
		   </el-form> 								   
	    </el-dialog>
	</div>
</template>

<script>
	import echarts from 'echarts'
	import {formatterDateStr,formatterDate} from '@/utils/filter'
    import {getPoliticsEventListByType} from '@/api/politics/PoliticsEventAnalysis'
	export default{
		data(){
			return{
				politicsEventUpdateDialog:false,
				//政治事件form表单查询条件
				politicsFormData:{
					Country:["日本","朝鲜","印度","韩国"],
					type:1,
					eventTime:'',
					endTime:''
				},
				//政治事件修改dialog表单数据
				politicsEvent:{
					id:'',
					nid:'',
					eventName:'',
					eventTime:'',
					countryId:'',
					people:'',
					partyGroup:'',
                    grade:'',
                    infrastructure:'',
                    bound:'',
                    militaryfacor:'',
                    naturefactor:''
				},
                //时间范围
				timeRange:'',
				//国家信息
				countries:[],
				//政治事件table数据
                politicsTableData:[],
                countrys:["日本","朝鲜","印度","韩国"],
                isIndeterminate: false,
                checkAll: true,
                dataBJ:[
				    [1,55,9,56,0.46,18,6,"良"],
				    [2,25,11,21,0.65,34,9,"优"],
				    [3,56,7,63,0.3,14,5,"良"],
				    [4,33,7,29,0.33,16,6,"优"],
				    [5,42,24,44,0.76,40,16,"优"],
				    [6,82,58,90,1.77,68,33,"良"],
				    [7,74,49,77,1.46,48,27,"良"],
				    [8,78,55,80,1.29,59,29,"良"],
				    [9,267,216,280,4.8,108,64,"重度污染"],
				    [10,185,127,216,2.52,61,27,"中度污染"],
				    [11,39,19,38,0.57,31,15,"优"],
				    [12,41,11,40,0.43,21,7,"优"]
				],
				dataGZ:[
				    [1,26,37,27,1.163,27,13,"优"],
				    [2,85,62,71,1.195,60,8,"良"],
				    [3,78,38,74,1.363,37,7,"良"],
				    [4,21,21,36,0.634,40,9,"优"],
				    [5,41,42,46,0.915,81,13,"优"],
				    [6,56,52,69,1.067,92,16,"良"],
				    [7,64,30,28,0.924,51,2,"良"],
				    [8,55,48,74,1.236,75,26,"良"],
				    [9,76,85,113,1.237,114,27,"良"],
				    [10,91,81,104,1.041,56,40,"良"],
				    [11,84,39,60,0.964,25,11,"良"],
				    [12,64,51,101,0.862,58,23,"良"]
				],
				dataSH:[
				    [1,91,45,125,0.82,34,23,"良"],
				    [2,65,27,78,0.86,45,29,"良"],
				    [3,83,60,84,1.09,73,27,"良"],
				    [4,109,81,121,1.28,68,51,"轻度污染"],
				    [5,106,77,114,1.07,55,51,"轻度污染"],
				    [6,109,81,121,1.28,68,51,"轻度污染"],
				    [7,106,77,114,1.07,55,51,"轻度污染"],
				    [8,89,65,78,0.86,51,26,"良"],
				    [9,53,33,47,0.64,50,17,"良"],
				    [10,80,55,80,1.01,75,24,"良"],
				    [11,117,81,124,1.03,45,24,"轻度污染"],
				    [12,99,71,142,1.1,62,42,"良"]
				]
			}
		},
		created(){
            this.loadPoliticsEventPageList()
		},
		mounted(){
			this.hot();
			this.bar();
			this.line();
		},
		methods:{
			//获取列表信息
			loadPoliticsEventPageList(){
                getPoliticsEventListByType(this.politicsFormData).then(res=>{
                    this.politicsTableData=res.data.list
                });
			},
			// 散点图
			hot(){
             const hots=document.getElementsByClassName("hot")
             for(var i=0;i<hots.length;i++){
             	const mychart=echarts.init(hots[i])
                mychart.setOption({
					    color: [
					        '#003366', '#006699', '#4cabce'
					    ],
					    legend: {
					        data: ['北京', '上海', '广州'],
					        textStyle: {
					            color: '#fff',
					            fontSize: 16
					        }
					    },
					    xAxis: {
					        type: 'value',
					        name: '时间',
					        nameGap: 30,
					        nameLocation:'center',
					        nameTextStyle: {
					            color: '#000',
					            fontSize: 14
					        },
					        max: 12,
					        splitLine: {
					            show: false
					        },
					        axisLine: {
					            lineStyle: {
					                color: '#1ca1e8'
					            }
					        }
					    },
					    yAxis: {
					        type: 'value',
					        name: '分数',
					        nameLocation: 'end',
					        nameGap: 20,
					        nameTextStyle: {
					            color: '#000',
					            fontSize: 16
					        },
					        axisLine: {
					            lineStyle: {
					                color: '#1ca1e8'
					            }
					        },
					        splitLine: {
					            show: false
					        }
					    },
					    series: [
					        {
					            name: '北京',
					            type: 'scatter',
					            itemStyle: this.itemStyle,
					            data: this.dataBJ
					        },
					        {
					            name: '上海',
					            type: 'scatter',
					            itemStyle: this.itemStyle,
					            data: this.dataSH
					        },
					        {
					            name: '广州',
					            type: 'scatter',
					            itemStyle: this.itemStyle,
					            data: this.dataGZ
					        }
					    ]
				})
				window.addEventListener("resize", function() {
					mychart.resize()
				})
             }
			},
			// 柱状图与曲线结合
			bar(){
               const bars=document.getElementsByClassName("bar")
               for(var i=0;i<bars.length;i++){
               	const mychart=echarts.init(bars[i])
               	mychart.setOption({
               		color: [
					         '#4cabce','#d14a61', '#675bba'
					    ],
               		tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            crossStyle: {
				                color: '#999'
				            }
				        }
				    },
				    legend:[
					        {
					        	data:['等级1','等级2','等级3']
					        },
					        {
					        	top:20,
					        	data:['区域','人物']
					        }
				        ],
				    xAxis: [
				        {
				            type: 'category',
				            data:['区域','人物'],
				            axisPointer: {
				                type: 'shadow'
				            }
				        },
				        {
				            type: 'category',
				            name:'时间',
					        nameGap: 30,
					        position:'bottom',
				            offset:15,
					        nameLocation:'center',
					        nameTextStyle: {
					            color: '#000',
					            fontSize: 14
					        },
				            data: ['1月','2月','3月','4月','5月','6月','7月']
				        }
				    ],
				    yAxis: {
				    	type:'value'
				    },
				    series: [
				        {
				            name:'等级1',
				            type:'bar',
				            barWidth:10,
				            data:[2.0, 4.9, 7.0]
				        },
				        {
				            name:'等级2',
				            type:'bar',
				            barWidth:10,
				            data:[2.6, 5.9, 9.0]
				        },
				        {
				            name:'等级3',
				            type:'bar',
				            barWidth:10,
				            data:[2.6, 5.9, 9.0]
				        },
				        {
				            name:'人物',
				            type:'line',
				            xAxisIndex:1,
				            smooth: true,
				            data:[1.0, 3.2, 7.3, 4.5, 6.3, 10.2, 8.3]
				        },
				        {
				            name:'区域',
				            type:'line',
				            xAxisIndex:1,
				            smooth: true,
				            data:[2.0, 2.2, 2.3, 5.5, 9.3, 10.2, 5.3, 7.4]
				        }

				    ]
               	})
				window.addEventListener("resize", function() {
					mychart.resize()
				})
               }
			 },
			// 曲线图
			line(){
              const lines=document.getElementsByClassName("line")
              for(var i=0;i<lines.length;i++){
              	const mychart=echarts.init(lines[i])
              	mychart.setOption({
              		color: [
					        '#4cabce','#d14a61', '#675bba'
					    ],
              		legend: {
					        data: ['9分','6分以上','6分以下'],
					        textStyle: {
					            color: '#fff',
					            fontSize: 16
					        }
					    },
					    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            crossStyle: {
				                color: '#999'
				            }
				        }
				    },
              		xAxis: {
				        type: 'category',
				        name:'时间',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				        nameGap: 30,
				        nameLocation:'center',
				        nameTextStyle: {
				            color: '#000',
				            fontSize: 14
				        }
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [
					    {
					    	name:'9分',
					        data: [20, 34, 23, 45, 12, 23, 12],
					        type: 'line',
					        smooth: true
					    },{
					    	name:'6分以上',
					        data: [23,35,21,36,23,54,12],
					        type: 'line',
					        smooth: true
					    },{
					    	name:'6分以下',
					        data: [22, 37, 24, 35, 14, 23, 17],
					        type: 'line',
					        smooth: true
					    }
				    ]
              	})
              	window.addEventListener("resize", function() {
					mychart.resize()
				})
              }
			 },
			//格式化时间
            formatterTime(val){
                return formatterDateStr(val.eventTime)
			},
			//查询
			selectPolitics(){
				if(this.politicsFormData.eventTime!=''){
					this.politicsFormData.eventTime=formatterDate(this.politicsFormData.eventTime)
				}
				if(this.politicsFormData.endTime!=''){
					this.politicsFormData.endTime=formatterDate(this.politicsFormData.endTime)
				}
				const countryId=this.politicsFormData.countryId
				// if(countryId==92){
				// 	this.$refs.chartOne.style.opacity="0.2"
				// }
				if(countryId==92){
					this.$refs.chartThree.style.opacity="0.2"
					this.$refs.chartTwo.removeAttribute("opacity")
					this.drawLineThree();
					//this.$refs.chartOne.removeAttribute("opacity")
				}
				if(countryId==101){
					this.$refs.chartTwo.style.opacity="0.2"
					this.$refs.chartThree.removeAttribute("opacity")
				}

				this.loadPoliticsEventPageList()
                //this.timeRange=eventTime +' 至 '+endTime
			},
            //修改政治事件
			showPoliticsEventUpdateDialog(row){
				this.politicsEventUpdateDialog=true
				this.politicsEvent.id=row.id
				this.politicsEvent.nid=row.nid   
				this.politicsEvent.eventName=row.eventName
                this.politicsEvent.eventTime=row.eventTime
                this.politicsEvent.countryId=row.countryId
                this.politicsEvent.countryFullName=row.countryFullName
                this.politicsEvent.people=row.people
                this.politicsEvent.partyGroup=row.partyGroup
                this.politicsEvent.grade=row.grade
                this.politicsEvent.infrastructure=row.infrastructure
                this.politicsEvent.bound=row.bound
                this.politicsEvent.militaryfacor=row.militaryfacor
                this.politicsEvent.naturefactor=row.naturefactor
			},
            //保存政治事件
			savePoliticsEvent(){
				this.politicsEventUpdateDialog=false
			},
			//取消
			canclePoliticsEvent(){
				this.politicsEventUpdateDialog=false
			},
			//更多
			more(){
				this.$router.push('/PoliticsEvent/PoliticsEventList')
			},
			handleCheckAllChange(val) {
				console.log(val)
		        this.politicsFormData.Country= val ? this.countrys : [];
		        this.isIndeterminate = false;
		      },
		    handleCheckedCitiesChange(value) {
		    	console.log(value)
		        let checkedCount = value.length;
		        this.checkAll = checkedCount === this.countrys.length;
		        this.isIndeterminate = checkedCount > 0 && checkedCount < this.countrys.length;
		      }
		}
   }
</script>

<style scoped lang="less">
  
</style>