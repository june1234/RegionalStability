<template>
	<div class="NewsDetail">
		<h1 class="title">新闻详情</h1>
		<span class="NewsTitle">新闻标题</span>
		<span class="span-content">
			<span>作者：</span>
			<span>时间：</span>
		</span>
		<div>
			
		</div>
		<div style="float:right;">
			<el-button @click="goBack">返回</el-button>
			<el-button @click="importNews">导出</el-button>
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
            this.getNewsDetail()
		},
		methods:{
			getNewsDetail(){
				const {id}=this.$route.query
			},
			goBack(){
                this.$router.back()
			},
			importNews(){

			}
		}
	}
</script>

<style scoped lang="less">

</style>