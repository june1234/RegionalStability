<template>
	<div>
		<h1 class="sub-header">政治事件分析</h1>
		<div style="margin-top:40px;margin-left:30px;">
			<el-form :inline="true" :model="politics" class="demo-form-inline" >
				<el-form-item>
					<el-select v-model="politics.country" placeholder="请选择国家">
						<el-option label="中国" value="China"></el-option>
						<el-option label="日本" value="Japan"></el-option>
						<el-option label="俄罗斯" value="Russia"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item >
					<el-date-picker v-model="politics.beginDate" type="date" placeholder="请输入开始时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-date-picker v-model="politics.endDate" type="date" placeholder="请输入结束时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="confirm">确认</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div style="width:100%;padding-top:30px;">
			<div style="float:left;" >
				<div id="chart" style="width: 400px;height:300px;"></div>
			</div>
			<div style="float:left;padding:50px 0 0 30px;">
				<el-table :data="tableData" border>
					<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="China" label="中国" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="Russia" label="俄罗斯" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="Japan" label="日本" align="center" min-width="100%"></el-table-column>
				</el-table>
			</div>			
		</div>
		<div style="width:100%;margin-top:50px; clear:both;">
			<span style="float:left;">等级曲线</span>
			<div style="float:left;width:30%;display:inline-block">
				<span style="margin-left:180px;">中国</span>
				<div id="chart1" style="width: 400px;height:300px;"></div>
			</div>
			<div style="float:left;width:30%;display:inline-block">
				<span style="margin-left:170px;">俄罗斯</span>
				<div id="chart2" style="width: 400px;height:300px;"></div>
			</div>
			<div style="float:left;width:30%;display:inline-block;">
				<span style="margin-left:170px;">日本</span>
				<div id="chart3" style="width: 400px;height:300px;"></div>
			</div>
		</div>
		<div>
			<el-table :data="tableData1" border style="width:100%">
				<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="date" label="事件发生时间" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="person" label="人物" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="type" label="种类" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="grade" label="等级" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="count" label="伤亡人数" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="building" label="建筑物" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="border" label="边境状况" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="militaryElement" label="军事要素" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="natureElement" label="自然要素" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="operate" label="操作" align="center" min-width="100%">
					<template slot-scope="scope">
						<el-button size="small" @click="updateEvent(scope.$index, scope.row)">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-button size="medium" @click="more(scope.$index, scope.row)" style="float:right;margin-top:10px;">更多</el-button>
		</div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		data(){
			return{
				politics:{
					country:'',
					beginDate:'',
					endDate:''
				},
                 tableData:[{
                        country:'数量',
                        China:'',
                        Russia:'',
                        Japan:''
                     }
                 ],
                 tableData1:[{
                 	eventName:'重大事件',
                 	date:'2018年1月2日',
                 	country:'日本',
                 	person:'无',
                 	type:'政治',
                 	grade:'一等级',
                 	count:'10',
                 	building:'无',
                 	border:'无',
                 	militaryElement:'无',
                 	natureElement:'无'
                 },{
                 	eventName:'重大事件',
                 	date:'2018年1月2日',
                 	country:'日本',
                 	person:'无',
                 	type:'政治',
                 	grade:'一等级',
                 	count:'10',
                 	building:'无',
                 	border:'无',
                 	militaryElement:'无',
                 	natureElement:'无'
                 },{
                 	eventName:'重大事件',
                 	date:'2018年1月2日',
                 	country:'日本',
                 	person:'无',
                 	type:'政治',
                 	grade:'一等级',
                 	count:'10',
                 	building:'无',
                 	border:'无',
                 	militaryElement:'无',
                 	natureElement:'无'
                 }]

			}
		},
		mounted(){
			this.drawLine();
			this.drawLine1();
			this.drawLine2();
			this.drawLine3();
		},
		methods:{
			drawLine(){
				var myChart = echarts.init(document.getElementById('chart'));
				var option = {
					 legend: {},
					dataset: {
						source: [
						['country', '中国', '俄罗斯', '日本'],
						['等级一', 43.3, 85.8, 93.7],
						['等级二', 83.1, 73.4, 55.1],
						['等级三', 86.4, 65.2, 82.5],
						['等级四', 72.4, 53.9, 39.1],
						['等级五', 70.6, 42.9, 52.5]
						]
					},
					xAxis: {type: 'category'},
					yAxis: {},
					series: [
					{type: 'bar'},
					{type: 'bar'},
					{type: 'bar'}
					]
				};     
				myChart.setOption(option);
			},
			drawLine1(){
				var myChart = echarts.init(document.getElementById('chart1'));
				var option = {
					legend: {
						data:['中国','俄罗斯','日本']
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
						data: ['等级一','等级二','等级三','等级四','等级五']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'中国',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134, 90]
					},
					{
						name:'俄罗斯',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146, 180]
					},
					{
						name:'日本',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334, 390]
					}
					]
				};     
				myChart.setOption(option);
			},
			drawLine2(){
				var myChart = echarts.init(document.getElementById('chart2'));
				var option = {
					legend: {
						data:['中国','俄罗斯','日本']
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
						data: ['等级一','等级二','等级三','等级四','等级五']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'中国',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134, 90]
					},
					{
						name:'俄罗斯',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146, 180]
					},
					{
						name:'日本',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334, 390]
					}
					]
				};     
				myChart.setOption(option);
			},
			drawLine3(){
				var myChart = echarts.init(document.getElementById('chart3'));
				var option = {
					legend: {
						data:['中国','俄罗斯','日本']
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
						data: ['等级一','等级二','等级三','等级四','等级五']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'中国',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134, 90]
					},
					{
						name:'俄罗斯',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146, 180]
					},
					{
						name:'日本',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334, 390]
					}
					]
				};     
				myChart.setOption(option);
			}
		}
   }
</script>