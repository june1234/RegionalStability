<template>
	<div class="calculation">
		<h3 class="title">计算设置</h3>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  <el-form-item>
		  	<el-select v-model="formInline.country" placeholder="请选择国家">
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
		    <el-button type="primary" @click="onSubmit">确认</el-button>
		  </el-form-item>
		</el-form>
        <div>
        	<ul>
        		<li><el-button type="primary">政治事件</el-button></li>
        		<li><el-button type="primary">经济事件</el-button></li>
        		<li><el-button type="primary">反恐事件</el-button></li>
        		<li><el-button type="primary">区域稳定性分析</el-button></li>
        	</ul>
        </div>
	</div>
</template>

<script>
	export default {
		data(){
         return {
            formInline:{
				country:'',
				time:''
            },
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
	        ]
         } 
		},
		methods:{
			onSubmit(){
				
			}
		}
	}
</script>

<style scoped lang="less">
  
</style>
