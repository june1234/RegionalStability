<template>
	<div class="economic">
		<h2 class="title">经济事件参数设置</h2>
		<div>
			<h4>GDP图表</h4>
             <el-table
			    :data="GDPData"
			    border
			    style="width: 100%">
					<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="date" label="时间(年)" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="growthRate" label="增长率" align="center" min-width="100%"></el-table-column>
			  </el-table>
			<h4>股市行情图表</h4>
             <el-table
			    :data="stockData"
			    border
			    style="width: 100%">
				<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="date" label="时间(天)" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="growthRate" label="增长率" align="center" min-width="100%"></el-table-column>
			  </el-table>
			<h4>CPI图表</h4>
             <el-table
			    :data="CPIData"
			    border
			    style="width: 100%">
					<el-table-column prop="country" label="国家" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="date" label="时间(年)" align="center" min-width="100%"></el-table-column>
					<el-table-column prop="growthRate" label="增长率" align="center" min-width="100%"></el-table-column>
			  </el-table>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
         return {
 		     GDPData:[],
             CPIData:[],
             stockData:[]
         } 
		}
	}
</script>

<style scoped lang="less">

</style>
