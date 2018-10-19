<template>
	<div class="region">
		<h2 class="title">区域稳定性分析（系统参数）</h2>
		<div class="calculation">
			<h4>计算说明</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
			</p>
		</div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		    <el-form-item label="选择国家">
				<el-select v-model="formInline.country" placeholder="选择国家">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>		  
			</el-form-item>
			<el-form-item>
			    <el-date-picker
			      v-model="formInline.startTime"
			      type="month"
			      placeholder="选择开始时间">
			    </el-date-picker>
			    <el-date-picker
			      v-model="formInline.endTime"
			      type="month"
			      placeholder="选择结束时间">
			    </el-date-picker>
			  </el-form-item>
			<el-form-item>
		    <el-button type="primary" @click="onSubmit">查询</el-button>
		  </el-form-item>
		</el-form>
		<div id="results">
		</div>
		<div class="routeBtn">
			<router-link to="/region/details">
				<el-button type="primary">详情</el-button>
			</router-link>
			<router-link to="/region/demesne">
				<el-button type="primary">私有化</el-button>
			</router-link>
		</div>
	</div>
</template>

<script>
    import echarts from 'echarts'
	export default {
		data(){
         return {
           options: [
	            {
		          value: 'NorthKorea',
		          label: '朝鲜'
		        }, {
		          value: 'India ',
		          label: '印度'
		        }, {
		          value: 'Japan',
		          label: '日本'
		        }
	        ],
	        formInline:{
	        	country:'',
	        	startTime:'',
	        	endTime:''
	        }
         } 
		},
		mounted(){
           this.listloading()
		},
		methods:{
			listloading(){
				    const results=echarts.init(document.getElementById('results'))
					results.setOption({
						    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
						    title: {
						        text: '结果展示'
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
				window.addEventListener("resize", function() {
					results.resize()
				})
			   }
		}
	}
</script>

<style scoped lang="less">

</style>
