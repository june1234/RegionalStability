<template>
	<div class="demesne">
		<h2 class="title">私有化结果</h2>
		<div class="list">
			<h4 class="listTitle">结果参数保存</h4>
			<el-table
			    :data="argumentData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="时间"
			      min-width="">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="国家"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="argument"
			      label="选择的参数">
			    </el-table-column>
			    <el-table-column
			      prop="model"
			      label="选择的模型">
			    </el-table-column>
			    <el-table-column
			      prop="argumentType"
			      label="参数类型">
			    </el-table-column>
			    <el-table-column
			      prop="status"
			      label="参数状态">
			    </el-table-column>
			  </el-table>
			  <h4 class="listTitle">结果展示</h4>
			  <el-table
			    :data="resultsData"
			    border
			    style="width: 100%">
				    <el-table-column
				      prop="date"
				      label="序号"
				      min-width="10%">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="国家"
				      min-width="10%">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="开始时间"
				      min-width="10%">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="结束时间"
				      min-width="10%">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="经济值"
				      min-width="10%">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="政治值"
				      min-width="10%">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="反恐值"
				      min-width="10%">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="稳定性等级"
				      min-width="10%">
				    </el-table-column>
	                <el-table-column
				      fixed="right"
				      label="相关详情"
				      min-width="10%">
				      <template slot-scope="scope">
				        <el-button type="text" size="small" @click="dialogTableVisible=true">查看</el-button>
				      </template>
					</el-table-column>
			  </el-table>
		</div>
        <div id="results">        	
        </div>
        <div>
        	<router-link to="/region/modify">
				<el-button type="primary">参数修改</el-button>
			</router-link>
        </div>
        <el-dialog :visible.sync="dialogTableVisible" width="50%">
		  <div id="quxian" style="width:600px;height: 400px;">
		  </div>
		</el-dialog>
	</div>
</template>

<script>
    import echarts from 'echarts'
	export default {
		data(){
         return {
            argumentData:[],
            resultsData:[{

            }],
            dialogTableVisible:false
         } 
		},
		updated(){
			this.open()
		},
        mounted(){
           this.listLoading()
        },
        methods:{
        	listLoading(){
                const results=echarts.init(document.querySelector("#results"))
                results.setOption({
				    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
				    title:{
						text: '结果展示',
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
				        }				        
				    ]
				})
				window.addEventListener("resize", function() {
					results.resize()
				})
        	},
        	open(){
         		this.$nextTick(()=>{
	        		let quxian=echarts.init(document.querySelector("#quxian"))
	                quxian.setOption({
					    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
					    title:{
							text: '结果展示',
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
					        }				        
					    ]
					})
         		})
        	}
        }
	}
</script>

<style scoped lang="less">
  
</style>
