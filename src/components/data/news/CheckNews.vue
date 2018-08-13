<template>
	<div>
		<h2 class="sub-header">新闻数据校验</h2>	 
		<div id="chart" style="width: 300px;height:400px;"></div>
	</div>
</template>
<script>
import echarts from 'echarts'
	export default{
    mounted(){
			this.drawLine();
		},
		methods:{
			drawLine(){
				var myChart = echarts.init(document.getElementById('chart'));
				var option = {
					tooltip: {},
					legend: {
						data:['销量']
					},
					xAxis: {
						data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				};     
        myChart.setOption(option);
    }
 }
	}
</script>