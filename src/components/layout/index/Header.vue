<template>
	<div class="layoutheader">
		<el-row :gutter="0">
			<el-col :span="6">
				<h4>区域稳定性评估示范系统</h4>
				<p>Regional stability assessment and demonstration system </p>
			</el-col>
			<el-col :span="18">
               <app-aside></app-aside>
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
