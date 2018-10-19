<template>
	<div class="report">
		<h2 class="title">报告参数</h2>
		<el-form ref="form" :model="formData" label-width="320px">
			<el-form-item label="国家选择设置">
				<el-checkbox-group v-model="formData.country">
			      <el-checkbox label="朝鲜" name="type"></el-checkbox>
			      <el-checkbox label="印度" name="type"></el-checkbox>
			      <el-checkbox label="日本" name="type"></el-checkbox>
			    </el-checkbox-group>
			</el-form-item>
			<el-form-item label="文字说明">
				<el-radio-group v-model="formData.description">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="新闻列表">
				<el-radio-group v-model="formData.newList">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="时序图">
				<el-radio-group v-model="formData.timeline">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="政治参数设置">
				<el-radio-group v-model="formData.political">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="经济参数设置">
				<el-radio-group v-model="formData.economic">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="反恐参数设置">
				<el-radio-group v-model="formData.ctu">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="稳定性趋势分析公式计算方式说明">
				<el-radio-group v-model="formData.compute">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="展示区域稳定性分析趋势图表">
				<el-radio-group v-model="formData.trend">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="系统设置与个人设置对比">
				<el-radio-group v-model="formData.contrast">
			      <el-radio label="1">显示</el-radio>
			      <el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-button type="primary">提交</el-button>
		</el-form>
	</div>
</template>

<script>
	export default {
		data(){
         return {
           formData:{
           	country:[],
           	description:'',
           	newList:'',
           	timeline:'',
           	political:'',
           	economic:'',
           	ctu:'',
           	compute:'',
           	trend:'',
           	contrast:''
           }
         } 
		}
	}
</script>

<style scoped lang="less">

</style>
