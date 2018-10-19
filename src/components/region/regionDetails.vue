<template>
	<div class="regionDetails">
		<h2 class="title">区域稳定性分析</h2>
		<div class="message">
			<h4 class="eventTitle">事件类型权重分析（%）</h4>
			<ul>
				<li>
					<span>政治事件类</span>
					<span>20</span>
				</li>
				<li>
					<span>经济事件类</span>
					<span>50</span>
				</li>
				<li>
					<span>自然灾害类</span>
					<span>10</span>
				</li>
				<li>
					<span>反恐事件类</span>
					<span>20</span>
				</li>
			</ul>
			<h4 class="messageTitle">信息数据列表</h4>
			<el-table
			    :data="messageList"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="event"
			      label="事件"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="eventNum"
			      label="事件数量"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="score"
			      label="事件综合评估分值"
			      min-width="25%">
			    </el-table-column>
			    <el-table-column
			      prop="weightRatio"
			      label="权重比例"
			      min-width="25%">
			    </el-table-column>
			 </el-table>
			  <h4 class="gradeTitle">区域等级信息描述列表</h4>
			  <el-table
				    :data="gradeList"
				    border
				    style="width: 100%">
				    <el-table-column
				      prop="ordinal"
				      label="等级序号"
				      min-width="50%">
				    </el-table-column>
				    <el-table-column
				      prop="script"
				      label="等级描述"
				      min-width="50%">
				    </el-table-column>
			 </el-table>
		</div>
        <el-tabs type="border-card">
		    <el-tab-pane label="热力图">
		    	<div id="hot" style="width: 900px;height: 500px;"></div>
		    </el-tab-pane>
		    <el-tab-pane label="曲线图">
		    	<div id="quxian" style="width:900px;height: 500px;"></div>
		    </el-tab-pane>
		</el-tabs>
    </div>
</template>

<script>
    import echarts from 'echarts'
	export default {
		data(){
         return {
            messageList:[
               {
               	event:'',
               	eventNum:'',
               	score:'',
               	weightRatio:''
               }
            ],
            gradeList:[{
            	ordinal:'',
            	script:''
            }],
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
        		const hot=echarts.init(document.querySelector("#hot"))
        		const quxian=echarts.init(document.querySelector('#quxian'))

				quxian.setOption({
				    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
				    title: {
				        text: '稳定性曲线图',
				        textStyle:{
							color:'#6c7996',
							fontWeight:'normal',
						}
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
				hot.setOption({
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
					quxian.resize()
					hot.resize()
				})
        	}
        }
	}
</script>

<style scoped lang="less">
 
</style>
