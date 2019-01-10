<template>
	<div class="header">
		<el-button type="text" @click="backIndex">返回首页</el-button>
		<div class="service">
			<span>用户名：</span>
			<span>{{username}}</span>
			<el-button type="primary" @click="logout">退出</el-button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

	export default {
		data(){
         return {
           
         } 
		},
		computed:{
          ...mapGetters([
				'username'
			])
		},
		created(){
		},
		methods:{
			logout(){
              this.$store.dispatch('LogOut').then(()=>{
				  location.reload()
			  })
			},
			backIndex(){
				this.$router.push('/')
			}
		}
	}
</script>
<style>

</style>
