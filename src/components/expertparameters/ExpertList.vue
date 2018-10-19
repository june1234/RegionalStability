<template>
	<div class="expertList">
		<h2 class="title">专家参数管理</h2>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  <el-form-item label="事件名称">
		    <el-input v-model="formInline.eventName" placeholder="事件名称"></el-input>
		  </el-form-item>
		  <el-form-item label="选择国家">
			<el-select v-model="formInline.country" placeholder="选择国家">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>		  
		  </el-form-item>
		  <el-form-item label="参数名称">
		    <el-input v-model="formInline.argumentName" placeholder="参数名称"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary">查询</el-button>
		  </el-form-item>
		</el-form>
		<div class="list">
			<el-table
			ref="multipleTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="专家参数名称"
			      min-width="20%">
			      <template slot-scope="scope">{{ scope.row.date }}</template>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="国家"
			      min-width="20%">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="开始时间"
			      min-width="20%">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="结束时间"
			      min-width="20%">
			    </el-table-column>
			    <el-table-column
			      label="运算结果"
			      min-width="20%">
			      <template slot-scope="scope">
			        <el-button @click="dialogVisible = true" type="text">查看运算结果</el-button>
			      </template>
			    </el-table-column>
				    <el-table-column
			      prop="address"
			      label="校验状态"
			      min-width="20%">
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      min-width="20%">
			      <template slot-scope="scope">
			        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			        <el-button type="text" size="small" @click="dialogVisible2 = true">审核</el-button>
			      </template>
			    </el-table-column>
			</el-table>
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="currentPage"
			  :page-sizes="[10, 20, 30, 40]"
			  :page-size="10"
			  layout="total, sizes, prev, pager, next, jumper"
			  :total="100">
			</el-pagination>
		</div>
		<div class="btn">
		    <el-button type="primary" @click="dialogVisible3 = true">批量审核</el-button>
		</div>
		<el-dialog
		  title="运算结果"
		  :visible.sync="dialogVisible"
		  width="30%">
			<el-table :data="gridData">
			    <el-table-column property="date" label="日期" min-width="20%"></el-table-column>
			    <el-table-column property="name" label="姓名" min-width="20%"></el-table-column>
			    <el-table-column property="address" label="地址" min-width="20%"></el-table-column>
			</el-table>
			<span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>		    
		</el-dialog>
        <el-dialog
		  :visible.sync="dialogVisible2"
		  width="30%">
		  <h2>专家参数名称</h2>
		  <span>是否审核通过</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible2 = false">拒绝</el-button>
		    <el-button type="primary" @click="dialogVisible2 = false">审核通过</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  :visible.sync="dialogVisible3"
		  width="30%">
		  <h2>批量审核</h2>
		  <span>是否审核通过</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible3 = false">拒绝</el-button>
		    <el-button type="primary" @click="dialogVisible3 = false">审核通过</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data(){
         return {
             options: [
		            {
			          value: 'NorthKorea',
			          label: '朝鲜'
			        }, {
			          value: 'India ',
			          label: '印度'
			        }, {
			          value: 'Japan',
			          label: '日本'
			        }
		        ],
	            formInline:{
	            	eventName:'',
	            	country:'',
	            	argumentName:''	
	            },
               tableData3: [{
			          date: '2016-05-03',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          date: '2016-05-02',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          date: '2016-05-04',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          date: '2016-05-01',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          date: '2016-05-08',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          date: '2016-05-06',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          date: '2016-05-07',
			          name: '王小虎',
			          address: '上海市普陀区金沙江路 1518 弄'
			        }],
	            multipleSelection: [],
	            dialogVisible: false,
	            dialogVisible2: false,
	            dialogVisible3: false,
	            gridData:[],
	            currentPage:5
         } 
		},
		methods: {
	      handleSelectionChange(val) {
	      	console.log(val)
	        this.multipleSelection = val;
	      },
	      handleClick(row){
             console.log(row)
             this.$router.push('/expert/details')
	      },
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      },

	    }
	}
</script>

<style scoped lang="less">
 
</style>
