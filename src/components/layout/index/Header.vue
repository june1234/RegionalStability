<template>
	<div class="layoutheader">
		<el-row :gutter="0">
			<el-col :span="24">
				<h4>区域稳定性评估示范系统</h4>
				<p>Regional stability assessment and demonstration system </p>
			</el-col>
			<!-- <el-col :span="6">
				<span>用户名：</span>
				<span>123</span>
				<span><i class="el-icon-message"></i>消息</span>
				<el-button type="primary">退出</el-button>
			</el-col>
			<el-col :span="2">
				<el-button type="text" @click="router">进入后台管理系统</el-button>
			</el-col> -->
		</el-row>
	</div>
</template>

<script>
export default {
  name: "header",

  data() {
    return {};
  },

  methods: {
		router(){
			this.$router.push('/admin')
		}
	}
};
</script>

<style lang='less' scoped>
.layoutheader {
  background-color: #fff;
  height: 100px;
  .el-row {
    padding-left: 200px;
    h4 {
      line-height: 50px;
      color: #000080;
			font-size: 30px;
			margin-top: 20px;
    }
    p {
      color: #c0c0c0;
    }
    // .el-col:nth-child(2) {
    //   line-height: 100px;
		// 	color:#000080;
		// 	font-size:20px;
		// 	span{
		// 		i{
		// 			color:#ff8000;
		// 			padding-right:10px;
		// 		}
		// 	}
		// 	span:nth-child(3){
		// 		margin:0 20px;
		// 		cursor: pointer;
		// 	}
    //   .el-button {
    //     line-height: 40px;
    //     padding: 5px 10px;
    //   }
		// }
		// .el-col:last-child{
		// 	line-height: 100px;
		// 	padding-right: 10px;
		// }
  }
}
</style>
