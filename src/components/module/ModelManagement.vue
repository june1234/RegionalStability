<template>
	<div class="modelManagement">
		<h1 class="title">模型管理</h1>
        <el-button type="primary" @click="add">添加</el-button>
		<el-table
			:data="data"
			style="width: 100%">
			<el-table-column
				prop="name"
				label="模型名称"
				min-width="100%" align="center">
			</el-table-column>
			<el-table-column
				prop="scene"
				label="模型分类"
				min-width="100%" align="center">
			</el-table-column>
			<el-table-column
				prop="script"
				label="函数名称"
				min-width="100%" align="center">
			</el-table-column>
			<el-table-column
				prop="insertTime"
				label="参数名称"
				min-width="100%" align="center">
			</el-table-column>
			<el-table-column
				prop="updateTime"
				label="数值"
				min-width="100%" align="center">
			</el-table-column>
			<el-table-column
				label="操作"
				min-width="100%" align="center">
				<template slot-scope="scope">
				<el-button @click="update(scope.$index)" type="text" size="small">修改</el-button>
				<el-button @click="detail(scope.$index)" type="text" size="small">详情</el-button>
				<el-button @click="deleteById(scope.$index)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="modelPageVo.pageNum"
	      :page-sizes="[ 5, 10, 20]"
	      :page-size="modelPageVo.pageSize"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="total">
	    </el-pagination>
	</div>
</template>

<script>
   import {getList,deleted} from '@/api/moudule/ModelManagement'
	export default {
		data(){
         return {
				data:[],
				total:0,
				modelPageVo:{
					name:'',
					scene:'',
					script:'',
					pageSize:5,
					pageNum:1
				}
         } 
		},
		created(){
           this.loadList()
		},
		methods: {
			detail(id){
				const detailId=this.data[id].id
				this.$router.push(`/ModelManagement/Details?id=${detailId}`)
			},
			update(id){
				const updateId =this.data[id].id
                this.$router.push(`/ModelManagement/update?id=${updateId}`)
			},
	        handleSizeChange(val) {
			this.modelPageVo.pageSize=val
			this.loadList()
	        },
	        handleCurrentChange(val) {
              this.modelPageVo.pageNum=val
              this.loadList()
	        },
	          loadList(){
			   getList(this.modelPageVo).then(res => {
			  	this.data=res.data.list
                this.total=res.data.total
			  })
			  },
			  add(){
                  this.$router.push('/ModelManagement/add')
			  },
		      deleteById(id){
		      	const deleteId=this.data[id].id
			      deleted(deleteId).then(res => {
			      	this.loadList()
			      })
			    }

		}
}
</script>

<style scoped lang="less">
.modelManagement{
	width: 100%;
	.title{
  	font-size:20px;
  	font-weight:nomarl;
  	color:#03f;
  	float:left;
  }
   .el-button{
  	float:right;
  }
} 
  
 </style>