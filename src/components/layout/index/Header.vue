<template>
	<div class="layoutheader">
		<el-row :gutter="0" class="w">
			<el-col :span="8">
				<h4>区域稳定性评估示范系统</h4>
				<p>Regional stability assessment and demonstration system </p>
			</el-col>
			<el-col :span="14">
        <app-aside></app-aside>
			</el-col>
			<el-col :span="2">
        <router-link to="/admin">
					<img src="../../../assets/back.svg" alt="进入后台管理系统" style="width:20px;">
				</router-link>
			</el-col>

		</el-row>
	</div>
</template>

<script>
import AppAside from "@/components/layout/index/Aside.vue";
export default {
  name: "headerDiv",

  data() {
    return {};
  },
components:{
AppAside
},
  methods: {
		router(){
			this.$router.push('/admin')
		}
	}
};
</script>

<style lang='less' scoped>
</style>
