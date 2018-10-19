<template>
	<div class="NewsResult">
		<el-row type="flex" justify="end">
			<el-col :span="2">
				<div class="grid-content">
					<el-button @click="downLoadNewsData">导出</el-button>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div class="grid-content">
			       <span class="NewsTitle">文章标题</span>
		       </div>
		    </el-col>
		</el-row>
		<div class="NewsContent">
			证券时报客户端8月13日报道，河南濮阳一老板以其实际控制的多家公司新三板上市入股等名义，面向社会非法募资18亿元，仅1亿多用于实体投资；该老板还利用担任慈孝基金会理事长职务上的便利，将基金会2980万元转出后非法占为己有。被终审判处无期徒刑，并处没收个人全部财产。
			近日，中国裁判文书网发布了对濮阳市宏丰实业集团实控人韩学臣等人集资诈骗、职务侵占行为的二审刑事裁定书，以集资诈骗罪和职务侵占罪对韩学臣进行量刑，但他本人认为自己是非法吸收公众存款，遂提起上诉，在终审判决中被维持原判。
			券商中国记者发现，因非法集资等罪名被判无期的案件不在少数，就在7月份，因在IPO期间创立空壳公司虚构销售交易，非法集资粉饰业绩以达上市目的，湖南红太阳电源新材料股份有限公司董事长周红阳被湖南省高院驳回上诉，判处无期徒刑，维持原判。
			以新三板上市入股之名，非法募资18亿
			时间倒回2011年至2015年间，彼时，新三板被视作资本市场的新兴风口，广受追逐。河南濮阳一企业老板韩学臣，开始“以身涉险”。
			韩学臣是濮阳市宏丰投资有限公司（简称“宏丰投资”）、濮阳市龙都瑞祥农业生态园股份有限公司（简称“龙都瑞祥生态园”）、濮阳市宏丰实业集团股份有限公司（简称“宏丰实业”）等多家公司的实际控制人。
			2011年7月至2015年12月，韩学臣以上述企业投资飞宇化工、绿能高科、王楼生态园、龙都瑞祥生态园新三板上市入股等名义，以高息为诱饵面向社会非法集资，收到集资款后用于生产经营活动的款项与筹集资金规模明显不成比例。
		</div>
		<el-row type="flex" justify="end">
			<el-col :span="2">
				<div class="grid-content">
					<el-button type="primary" @click="goBack">返回</el-button>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
  export default{
  	data(){
  		return{
            
  		}
  	},
  	methods:{
  		downLoadNewsData(){

  		},
  		goBack(){
  			this.$router.push('/News/newsManage/checkNews');
  		}
  	}
  }
</script>

<style scoped lang="less">
.NewsResult{
	.NewsTitle{
		width:100%;
		font-size:22px;
		display:inline-block;
		text-align:center;
	}
	.NewsContent{
		width:100%;
		/*text-align:center;*/
		padding:20px 60px;
	}
	.el-row {   		
		margin-bottom: 0;
	}
	.el-col {
		border-radius: 4px;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
   }
</style>