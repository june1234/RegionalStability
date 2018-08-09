<template>
	<div class="details">
		<h1 class="title">模型名称</h1>
		<el-button class="moudleEdit" type="primary" icon="el-icon-edit" @click="moudleEdit()"></el-button>
        <el-row>
		  <el-col :span="5" v-for="data in datas" :key='data.id'> 
		  	<div class="grid-content bg-purple">
		  		<h6>{{data.name}}</h6>
		  		<span v-if="a.indexOf(data.id)!=-1" >使用</span>
				<span v-if="a.indexOf(data.id)==-1" >不使用</span>
		  	</div>
		  </el-col>
		</el-row>
		<el-form :inline="true" :model="modelPageVo" class="demo-form-inline">
			  <el-form-item label="函数名称">
			    <el-select v-model="modelPageVo.name" placeholder="请选择函数名称">
				    <el-option
				      v-for="item in options1"
				      :key="item.value"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
			  </el-form-item>
			  <el-form-item label="状态">
			    <el-select v-model="modelPageVo.display" placeholder="请选择状态">
				    <el-option
				      v-for="item in options2"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="inquire">查询</el-button>
			    <el-button type="primary" @click="add">添加</el-button>
			  </el-form-item>
		</el-form>
		<el-table
			:data="data"
			style="width: 100%"
			>
			<el-table-column
				prop="methodName"
				label="函数名称"
				min-width="100%"
				align="center">
			</el-table-column>
			<el-table-column
				prop="methodScript"
				label="函数描述"
				min-width="100%"
				align="center">
			</el-table-column>
			<el-table-column
				prop="parameterName"
				label="参数名称"
				min-width="100%"
				align="center">
			</el-table-column>
			<el-table-column
				prop="parameterScript"
				label="参数描述"
				min-width="100%"
				align="center">
			</el-table-column>
			<el-table-column
				prop="parameterCategory"
				label="参数类型"
				min-width="100%"
				align="center">
			</el-table-column>
			<el-table-column
				prop="display"
				label="是否显示"
				min-width="100%"
				align="center">
			</el-table-column>
			<el-table-column
				label="操作"
				min-width="100%"
				align="center">
				<template slot-scope="scope">
				<el-button @click="handleClick(scope.$index)" type="text" size="small">详情</el-button>
				<el-button @click="update(scope.$index)" type="text" size="small">修改</el-button>
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
import {moduleList,methodList,moudleById,methodDelete} from '@/api/moudule/Details'
	export default {
		data(){
         return {
				options1:[],
				options2: [
				        {
				          value: '1',
				          label: '显示'
				        }, {
				          value: '0',
				          label: '不显示'
				        }
			        ],
				currentPage:1,
                pagesize:5,
                datas:[],
                a:'',
                data:[],
                modelId:'',
                modelPageVo:{
                	name:'',
                	modelId:'',
                	display:'',
                	pageNum:1,
                	pageSize:5
                },
                total:0
	        } 
		},
		async created(){
			const {id} =this.$route.query
			await moudleById(id).then(res=>{
				this.a = res.data.modelModuleIds
            	this.modelPageVo.modelId = res.data.id
			})
	        this.modelId = id
	        this.listLoading()
},
  methods : {
		    inquire() {
				methodList(this.modelPageVo).then(res=>{
					this.data=res.data.list
					for(let i=0;i<this.data.length;i++){
                     	if(this.data[i].display==1){
                     	this.data[i].display='显示'
	                     }else{
	                     	this.data[i].display='不显示'
	                     }
                     }
				})
        	},
			handleClick(id) {
				const detailId=this.data[id].methodId
				this.$router.push(`/ModelManagement/Details/FunctionDetails?id=${detailId}`)
			},
	        handleSizeChange(val) {
				this.modelPageVo.pageSize=val
				this.listLoading()
	        },
	        handleCurrentChange(val) {
              this.modelPageVo.pageNum=val
              this.listLoading()
	        },
	        listLoading() {
	        	moduleList().then(res=>{
	        		this.datas=res.data
	        	})
	        	methodList(this.modelPageVo).then(res=>{
	        		this.data=res.data.list
                    this.total=res.data.total
	                     for(let i=0;i<this.data.length;i++){
	                     	 const a={}
	                     	 a.label=this.data[i].methodName
	                     	 a.value=this.data[i].methodId
	                     	 this.options1.push(a)
	                     	if(this.data[i].display==1){
	                     	this.data[i].display='显示'
	                     }else{
	                     	this.data[i].display='不显示'
	                     }
                     }
	        	})
	        },
	        add(){
	        	this.$router.push(`/ModelManagement/Details/FunctionAdd?id=${this.modelId}`)
	        },
	        moudleEdit(){
	        	this.$router.push(`/ModelManagement/Details/Mouduleupdate?id=${this.modelId}`)
	        },
	        deleteById(id){
		      	  const deleteId=this.data[id].methodId
			      methodDelete(deleteId).then(res=>{
			      	this.listLoading()
			      })
		    },
		    update(id){
				const updateId =this.data[id].methodId
                this.$router.push(`/ModelManagement/Details/Parameterupdate?id=${updateId}`)
			}
        }
	}
</script>

<style scoped lang="less">
.details{
	   width: 100%;
	   	 .title {
	   	 	color:#409EFF;
	   	 	font-weight:normal;
	   	 	line-height:40px;
	   	 	display:inline-block;
	   	 	margin-left:20px;
		   	 }
		   .moudleEdit{
		   	 margin-left:100px;
		   }   	 
        .el-row{
        	border-bottom:1px solid #eee;
            padding:10px;
            .el-col{
               border:1px solid #eee;
               margin-right:40px;
               padding:20px 10px;
               .grid-content{
                    h6{
                    	font-size:18px;
                    	color:#409EFF;
                    	line-height:30px;
                    	font-weight:normal;
                    	text-align:center;
                    }
               }
            }
            .el-col:last-child{
            	margin-right:0;
            }
        }
        .el-form{
        	padding-top:22px;
        	border-bottom:1px solid #eee;
        }
   }
 </style>
