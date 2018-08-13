<template>
	<div>
		<h1 class="sub-header">经济事件分析</h1>
		<!-- form表单 -->
		<div class="block" style="float:left;margin-top:40px;margin-left:30px;">
			<el-form :inline="true" :model="economy" class="demo-form-inline" >
				<el-form-item>
					<el-select v-model="economy.country" placeholder="请选择国家">
						<el-option label="中国" value="China"></el-option>
						<el-option label="日本" value="Japan"></el-option>
						<el-option label="俄罗斯" value="Russia"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item >
					<el-date-picker v-model="economy.beginDate" type="date" placeholder="请输入开始时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-date-picker v-model="economy.endDate" type="date" placeholder="请输入结束时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="selectEconomy">查询</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div style="margin-top:50px;margin-left:80px;">
			<el-table :data="tableData" border style="width: 80%">
				<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="China" label="中国" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="Russia" label="俄罗斯" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="Japan" label="日本" align="center" min-width="100%"></el-table-column>
			</el-table> 
		</div>
		<!-- 曲线图 -->
		<div style="width:100%;margin-top:60px;">
			<div style="float:left;width:30%;display:inline-block">
				<span style="margin-left:140px;">国家CPI变化曲线图</span>
				<div id="chart1" style="width: 400px;height:300px;"></div>
			</div>
			<div style="float:left;width:30%;display:inline-block">
				<span style="margin-left:130px;">国家GDP变化曲线图</span>
				<div id="chart2" style="width: 400px;height:300px;"></div>
			</div>
			<div style="float:left;width:30%;display:inline-block;">
				<span style="margin-left:110px;">国家股市行情变化曲线图</span>
				<div id="chart3" style="width: 400px;height:300px;"></div>
			</div>
			<!-- <div style="float:left;width:30%;display:inline-block">国家CPI变化曲线图</div>
			<div style="float:left;width:30%;display:inline-block">国家GDP变化曲线图</div>
			<div style="width:30%;display:inline-block;">国家汇率变化曲线图</div> -->
		</div>
		<!-- 图表 -->
		<div style="width:100%;">
			<div style="float:left;width:30%;display:inline-block;margin:30px 0 0 10px;">
				<span style="font-weight:bold;">CPI图表</span>
				<el-table :data="tableData1" border style="width: 100%">
					<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="date" label="时间(年)" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="growthRate" label="增长率" align="center" min-width="100%"></el-table-column>
				</el-table> 
			</div>
			<div style="float:left;width:30%;display:inline-block;margin:30px 0 0 10px;">
				<span style="font-weight:bold;">GDP图表</span>
			    <el-table :data="tableData2" border style="width: 100%">
			        <el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
			        <el-table-column prop="date" label="时间(年)" align="center" min-width="100%"></el-table-column>
			        <el-table-column prop="exchangeRate" label="汇率" align="center" min-width="100%"></el-table-column>
			        <el-table-column prop="growthRate" label="增长率" align="center" min-width="100%"></el-table-column>
			    </el-table>
		    </div>
		    <div style="float:left;width:30%;display:inline-block;margin:30px 0 0 10px;">
		    	<span style="font-weight:bold;">股市行情图表</span>	    	
		    	<el-table :data="tableData3" border style="width:100%">
		    		<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
		    		<el-table-column prop="date" label="时间(天)" align="center" min-width="100%"></el-table-column>
		    		<el-table-column prop="growthRate" label="增长率" align="center" min-width="100%"></el-table-column>
		    	</el-table>
		    </div>
		</div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		data(){
			return{
				economy:{
					country:'',
					beginDate:'',
					endDate:''
				},
				tableData:[{
                    country:'CPI',
                    China:'',
                    Russia:'',
                    Japan:''
				},{
                    country:'GDP',
                    China:'',
                    Russia:'',
                    Japan:''
				},{
                    country:'汇率',
                    China:'',
                    Russia:'',
                    Japan:''
				}],
				tableData1:[
				{
					country:'中国',
					date:'1',
					growthRate:'1'
				},
				{
					country:'俄罗斯',
					date:'1',
					growthRate:'0.8'
				},{
					country:'日本',
					date:'1',
					growthRate:'0.5'
				}],
				tableData2:[
				{
					country:'中国',
					date:'1',
					exchangeRate:'0.2',
					growthRate:'0.3'
				},
				{
					country:'俄罗斯',
					date:'1',
					exchangeRate:'0.6',
					growthRate:'0.1'
				},{
					country:'日本',
					date:'1',
					exchangeRate:'0.5',
					growthRate:'0.8'
				}],
				tableData3:[
				{
					country:'中国',
					date:'1',
					growthRate:'0.6'
				},
				{
					country:'俄罗斯',
					date:'1',
					growthRate:'0.5'
				},
				{
					country:'日本',
					date:'1',
					growthRate:'0.8'
				}]
			}
		},
		mounted(){
			this.drawLine1();
			this.drawLine2();
			this.drawLine3();
		},
		methods:{
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
						data: ['2013','2014','2015','2016','2017']
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
						data: ['2013','2014','2015','2016','2017']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'中国',
						type:'line',
						stack: '总量',
						data:[120, 132, 101, 134, 90]
					},
					{
						name:'俄罗斯',
						type:'line',
						stack: '总量',
						data:[150, 232, 201, 154, 190]
					},
					{
						name:'日本',
						type:'line',
						stack: '总量',
						data:[320, 332, 301, 334, 390]
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
						data: ['6月1日','6月2日','6月3日','6月4日','6月5日']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'中国',
						type:'line',
						stack: '总量',
						data:[100, 88, 75, 110, 80]
					},
					{
						name:'俄罗斯',
						type:'line',
						stack: '总量',
						data:[180, 200, 150, 154, 160]
					},
					{
						name:'日本',
						type:'line',
						stack: '总量',
						data:[220, 300, 240, 226, 345]
					}
					]
				};     
				myChart.setOption(option);
			}
		}
	}
</script>