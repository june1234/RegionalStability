<template>
	<div style="width:100%;padding:20px;">
		<span style="width:100%;height:30px;text-align:center;display:block;font-size:22px;">标题</span>
		<span style="line-height:20px;">文字说明</span>
		<div style="width:100%;">
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
	        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
	        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
	        Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>
		<div style="width:100%;text-align:center;margin-top:20px;">
			<div style="height:300px;border:1px solid black;line-height:250px;">新闻图表</div>
			<div style="height:300px;border:1px solid black;line-height:250px;margin-top:20px;">时序图</div>
			<div style="height:300px;border:1px solid black;line-height:250px;margin-top:20px;">热点图</div>
		    <div style="height:300px;border:1px solid black;line-height:250px;margin-top:20px;">稳定性趋势分析公式计算方式说明</div>
		    <div style="height:300px;border:1px solid black;line-height:250px;margin-top:20px;">展示区域稳定性分析趋势图表</div>
		    <div style="height:300px;border:1px solid black;line-height:250px;margin-top:20px;">系统设置与个人设置对比</div>
		</div>
		<div style="float:right;padding:10px;">
			<el-button @click="goBack">返回</el-button>
			<el-button @click="exportReport">导出</el-button>
		</div>
	</div> 
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		created(){          
		},
		methods:{
			goBack(){
               this.$router.back()
			},
            exportReport(){
           	   this.$router.back()
            }
		}
	}
</script>