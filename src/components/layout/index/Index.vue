<template>
	<div>
		<div class="news">
			<el-row :gutter="40">
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
			  		<span class="icon"><i class="el-icon-news" style="background-color:#fecd77;"></i></span>
			  		<p class="title">新闻总量：<span>6000条</span></p>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
			  		<span class="icon"><i class="el-icon-news"></i></span>
			  		<p class="title">政治事件：<span>6000条</span></p>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
			  		<span class="icon"><i class="el-icon-news"></i></span>
			  		<p class="title">经济事件：<span>6000条</span></p>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="grid-content bg-purple">
			  		<span class="icon"><i class="el-icon-news"></i></span>
			  		<p class="title">反恐事件：<span>6000条</span></p>
			  	</div>
			  </el-col>
			</el-row>
		</div>
		<div class="Countries" style="padding:20px 10px;">
			<el-row :gutter="40">
			  <el-col :span="8">
			  	<h4>朝鲜</h4>
			  	<div class="grid-content bg-purple " id="Countries1" style="width: 100%;height: 200px;">
				</div>
			  </el-col>
			  <el-col :span="8">
				<h4>印度</h4>
			  	<div class="grid-content bg-purple " id="Countries2" style="width: 100%;height: 200px;">
				</div>
			  </el-col>
			  <el-col :span="8">
				<h4>日本</h4>
	  			<div class="grid-content bg-purple " id="Countries3" style="width:100%;height: 200px">
				</div>
			  </el-col>
			</el-row>
		</div>
		<div id="quxian" style="width: 100%;height: 400px;margin:0 auto;">
		</div>
		<div id="hot" style="width:100%;height: 500px;margin:10px auto;">
		</div>
        <el-row class="aside">
		  <el-col :span="12">
			  	<div class="grid-content bg-purple">
			  		<h4>菜单总览</h4>
			  		<ul>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
				  						<i class="el-icon-menu"></i>
				  					</span>
			  						<span>政治事件分析</span>
			  					</p>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
			  							<i class="el-icon-menu"></i>
			  						</span>
			  						<span>经济事件分析</span>
			  					</p>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
			  							<i class="el-icon-menu"></i>
			  						</span>
			  						<span>反恐事件分析</span>
			  					</p>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
			  							<i class="el-icon-menu"></i>
			  						</span>
			  						<span>事件时序分析</span>
			  					</p>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
			  							<i class="el-icon-menu"></i>
			  						</span>
			  						<span>区域稳定性分析</span>
			  					</p>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
			  							<i class="el-icon-menu"></i>
			  						</span>
			  						<span>报告内容</span>
			  					</p>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
			  							<i class="el-icon-menu"></i>
			  						</span>
			  						<span>新闻中心</span>
			  					</p>
			  				</a>
			  			</li>
			  			<li>
			  				<a href="javascript:;">
			  					<p>
			  						<span>
			  							<i class="el-icon-menu"></i>
			  						</span>
			  						<span>后台功能</span>
			  					</p>
			  				</a>
			  			</li>
			  		</ul>
			  	</div>
		  </el-col>
		  <el-col :span="12">
			  	<div class="grid-content bg-purple-light">
			  		<h4 style="">使用文档</h4>
			  		<ul>
			  			<li><a href="javascript:;">政治事件分析使用说明</a></li>
			  			<li><a href="javascript:;">经济事件分析使用说明</a></li>
			  			<li><a href="javascript:;">反恐事件分析使用说明</a></li>
			  			<li><a href="javascript:;">事件时序分析使用说明</a></li>
			  			<li><a href="javascript:;">区域稳定性分析使用说明</a></li>
			  			<li><a href="javascript:;">报告内容使用说明</a></li>
			  		</ul>
			  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
    import echarts from 'echarts'
	export default {
		data(){
         return {
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
			],
				itemStyle: {
				    normal: {
				        opacity: 0.8,
				        shadowBlur: 10,
				        shadowOffsetX: 0,
				        shadowOffsetY: 0,
				        shadowColor: 'rgba(0, 0, 0, 0.5)'
				    }
				},
	         } 
		},
		mounted(){
			this.listLoading()
		},
		methods:{
			listLoading(){
				const myChart1 = echarts.init(document.getElementById('Countries1'))
				const myChart2 = echarts.init(document.getElementById('Countries2'))
				const myChart3 = echarts.init(document.getElementById('Countries3'))
				const myChart4 =echarts.init(document.getElementById('quxian'))
				const myChart5 =echarts.init(document.getElementById('hot'))

				myChart1.setOption({
						color: ['#003366', '#006699', '#4cabce'],
					    legend: {
					        data:[{
					        	name:'政治事件'
					        },{
					        	name:'经济事件'
					        },{
					        	name:'反恐事件'
					        }]
					        
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    tooltip: {
					    	trigger: 'axis',
					    	 axisPointer : {           
							            type : 'shadow' 
							        }
					    },
					    xAxis: {
					    	name:'月份',
					    	nameLocation:'end',
					    	type : 'category',
					    	 splitLine: {show: false},
					       axisLabel:{'interval':0, rotate: 40},
					        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']   //月份
					    },
					    yAxis: {
					    	type:'value'
					    },   //等级
					    series: [{
					        name: '政治事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3]   //事件种类
					    },{
					    	name: '经济事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3] 
					    },{
					    	name: '反恐事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3] 
					    }]
					})
				myChart2.setOption({
					 color: ['#003366', '#006699', '#4cabce', '#e5323e'],
					    legend: {
					        data:[{
					        	name:'政治事件'
					        },{
					        	name:'经济事件'
					        },{
					        	name:'反恐事件'
					        }]
					        
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    tooltip: {
					    	trigger: 'axis',
					    	 axisPointer : {           
							            type : 'shadow' 
							        }
					    },
					    xAxis: {
					    	name:'月份',
					    	nameLocation:'end',
					    	type : 'category',
					    	splitLine: {show: false},
					        axisLabel:{'interval':0,rotate: 40},
					        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']   //月份
					    },
					    yAxis: {
					    	type:'value'
					    },   //等级
					    series: [{
					        name: '政治事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3]   //事件种类
					    },{
					    	name: '经济事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3] 
					    },{
					    	name: '反恐事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3] 
					    }]
					})
				myChart3.setOption({
					 color: ['#003366', '#006699', '#4cabce', '#e5323e'],
					    legend: {
					        data:[{
					        	name:'政治事件'
					        },{
					        	name:'经济事件'
					        },{
					        	name:'反恐事件'
					        }]
					        
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    tooltip: {
					    	trigger: 'axis',
					    	 axisPointer : {           
							            type : 'shadow' 
							        }
					    },
					    xAxis: {
					    	name:'月份',
					    	nameLocation:'end',
					    	type : 'category',
					    	splitLine: {show: false},
					       axisLabel:{'interval':0,rotate: 40},
					        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']  
					    },
					    yAxis: {
					    	type:'value'
					    },   
					    series: [{
					        name: '政治事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3]
					    },{
					    	name: '经济事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3] 
					    },{
					    	name: '反恐事件',
					        type: 'bar',
					        data: [1,3,5,4,6,7,8,2,4,5,2,3] 
					    }]
					})
				myChart4.setOption({
				    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
				    title: {
				        text: '稳定性曲线图'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['朝鲜','印度','日本']  //国家
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
				        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']     //月份
				    },
				    yAxis: {
				    	name:'稳定性等级',
				        type: 'value'   //等级
				    },
				    series: [
				        {
				            name:'朝鲜',
				            type:'line',
				            stack: '总量',
				            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101,90, 230]
				        },
				        {
				            name:'印度',
				            type:'line',
				            stack: '总量',
				            data:[220, 182, 191, 234, 290, 330, 310,120, 132, 101,90, 230]
				        },
				        {
				            name:'日本',
				            type:'line',
				            stack: '总量',
				            data:[150, 232, 201, 154, 190, 330, 410,120, 132, 101,90, 230]
				        },
				       
				        
				    ]
				})
				myChart5.setOption({
					    color: [
					        '#003366', '#006699', '#4cabce'
					    ],
					    legend: {
					        y: 'top',
					        data: ['政治事件', '经济事件', '反恐事件'],
					        textStyle: {
					            color: '#1ca1e8',
					            fontSize: 16
					        }
					    },
					    grid: {
					        x: '10%',
					        x2: 150,
					        y: '18%',
					        y2: '10%',
					        calculable: true
					    },
					    xAxis: {
					        type: 'value',
					        name: '月份',
					        nameGap: 16,
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
					        name: '',
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
					    visualMap: [
					        {
					            left: 'right',
					            top: '10%',
					            dimension: 2,
					            min: 0,
					            max: 250,
					            itemWidth: 30,
					            itemHeight: 120,
					            calculable: true,
					            precision: 0.1,
					            text: ['圆形大小：伤亡人数'],
					            textGap: 30,
					            textStyle: {
					                color: '#000'
					            },
					            inRange: {
					                symbolSize: [10, 70]
					            },
					            outOfRange: {
					                symbolSize: [10, 70],
					                color: ['#4cabce']
					            },
					            controller: {
					                inRange: {
					                    color: ['#4cabce']
					                },
					                outOfRange: {
					                    color: ['#444']
					                }
					            }
					        },
					        {
					            left: 'right',
					            bottom: '5%',
					            dimension: 6,
					            min: 0,
					            max: 50,
					            itemHeight: 120,
					            calculable: true,
					            precision: 0.1,
					            text: ['明暗：事件等级'],
					            textGap: 30,
					            textStyle: {
					                color: '#000'
					            },
					            inRange: {
					                colorLightness: [1, 0.5]
					            },
					            outOfRange: {
					                color: ['#4cabce']
					            },
					            controller: {
					                inRange: {
					                    color: ['#4cabce']
					                },
					                outOfRange: {
					                    color: ['#444']
					                }
					            }
					        }
					    ],
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
					myChart1.resize();
					myChart2.resize();
					myChart3.resize();
					myChart4.resize();
					myChart5.resize();
				}); 
				 
			}
		}
	}
</script>

<style>

</style>
