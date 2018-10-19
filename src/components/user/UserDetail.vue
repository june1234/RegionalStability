 <template>
	<div class="UserDetail">
		<h1 class="sub-header">用户详情</h1>
		<table border="1" cellspacing="0">
			<tr>
				<th width="20%">用户名</th>
				<th width="20%">昵称</th>
				<th width="20%">真实姓名</th>
				<th width="20%">密码</th>
				<th width="20">插入时间</th>
			</tr>
			<tr>
				<td><span>{{userDetailData.username}}</span></td>
				<td><span>{{userDetailData.nickname}}</span></td>
				<td><span>{{userDetailData.truename}}</span></td>
				<td><span>{{userDetailData.password}}</span></td>
				<td><span>{{userDetailData.insertTime}}</span></td>
			</tr>
		</table>
		<div>
			<el-button @click="close">返回</el-button>
		</div>
	</div>
</template>

<script> 
   import {getUserById} from '@/api/user/FindUser.js'
	export default{
		data(){
			return{
				userDetailData:[],
			}
		},
		created(){
			//用户id
			const {id}=this.$route.query
			//根据用户id获取用户详情
			getUserById(id).then(res=>{
				this.userDetailData=res.data
			})
		},
		methods:{
			close(){
				this.$router.push('/UserManage')
			}
		}
	}
</script> 

<style scoped lang="less">

</style>
