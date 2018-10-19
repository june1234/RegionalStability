<template>
	<div class="EventTimingList">
		<el-row type="flex">
			<el-col :span="2">
				<div class="grid-content">
					<h1>事件新闻列表</h1>
				</div>
			</el-col>
			<el-col :span="2">
				<div class="grid-content">
					<el-button type="primary" @click="openTimingUpdate">时序修正</el-button>
				</div>
			</el-col>
			<el-col :span="2">
				<div class="grid-content">
					<el-button type="primary" @click="openEventType">事件类型定义</el-button>
				</div>
			</el-col>
		</el-row>

		<div class="content">
			<el-row :gutter="20">
				<el-col :span="24">
					<div class="grid-content">
						<!-- 新闻列表 -->
						<el-table :data="timingTableData" border @selection-change="handleSelectionChange">
							<el-table-column type="selection" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="id" label="id" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"></el-table-column>		
							<el-table-column prop="happenDate" label="事件发生时间" align="center" min-width="100%"></el-table-column>	
							<el-table-column prop="location" label="地点" align="center" min-width="100%"></el-table-column>	
							<el-table-column prop="persons" label="人物" align="center" min-width="100%"></el-table-column>	
							<el-table-column prop="operate" label="操作" align="center" min-width="100%">
								<template slot-scope="scope">
									<el-button type="text" @click="updateTiming(scope.$index,scope.row)">修改</el-button>
								</template>
							</el-table-column>
						</el-table>
						<!-- 分页 -->
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage"
							:page-sizes="[10, 20, 30, 40]"
							:page-size="pageSize"
							layout="total, sizes, prev, pager, next, jumper"
							:total="2">
					    </el-pagination>
					</div>
				</el-col>
			</el-row>			
	    </div>		
	    <div style="float:right;">
		    <el-button @click="goBack">返回</el-button>
	    </div>

	    <!-- 时序修正dialog -->
	    <el-dialog title="时序修正" style="text-align:center;" :visible.sync="timingUpdateDialogVisible" width="30%">
			<el-form :model="timimg" label-width="80px">							
				<el-form-item label="开始时间">
					<el-date-picker type="date" v-model="timimg.beginTime" placeholder="开始时间"></el-date-picker>
				</el-form-item>
				<el-form-item label="结束时间">
					<el-date-picker type="date" v-model="timimg.endTime" placeholder="结束时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="saveTimingUpdate">确认</el-button>
					<el-button @click="cancleTimingUpdate">取消</el-button>
				</el-form-item>
			</el-form>
	    </el-dialog>

	    <!-- 事件类型定义dialog -->
	    <el-dialog title="事件类型定义" style="text-align:center;" :visible.sync="tytpeDialogVisible" width="25%">
			<el-form :model="type" label-width="100px">
				<el-form-item label="事件类型">
					<el-select v-model="type.typeValue" placeholder="请选择">
						<el-option
						v-for="item in types"
						:key="item.typeValue"
						:label="item.label"
						:value="item.typeValue">
					    </el-option>
				    </el-select>
				</el-form-item>								
				<el-form-item>
					<el-button type="primary" @click="saveTypeUpdate">确认</el-button>
					<el-button @click="cancleTypeUpdate">取消</el-button>
				</el-form-item>
			</el-form>
	    </el-dialog>

	    <!-- 事件修改dialog -->
	    <el-dialog title="事件修改" style="text-align:center;" :visible.sync="updateEventTimingDialogVisible" width="30%">
			<el-form :model="eventTimimg" label-width="100px">
				<el-form-item label="事件标题">
					<el-input v-model="eventTimimg.enentName" placeholder="事件标题"></el-input>
				</el-form-item>
				<el-form-item label="人物">
					<el-input v-model="eventTimimg.persons" placeholder="人物"></el-input>
				</el-form-item>
				<el-form-item label="地点">
					<el-input v-model="eventTimimg.location" placeholder="地点"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="saveEventTiming">确认</el-button>
					<el-button @click="cancleEventTiming">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
    export default{
	  	data(){
	  		return{
	  			currentPage:1,
	  			pageSize:10,
	  			timingUpdateDialogVisible:false,
	  			tytpeDialogVisible:false,
	  			updateEventTimingDialogVisible:false,
	  			timimg:{
	               beginTime:'',
	               endTime:''
	  			},
	            timingTableData:[{
	           	   id:1,
	               eventName:'事件',
	               happenDate:'2018年',
	               location:'中国',
	               persons:'无'               
	           },{
	           	   id:2,
	               eventName:'事件',
	               happenDate:'2018年',
	               location:'中国',
	               persons:'无'               
	           }],
	            types: [{
	           	    typeValue: '1',
	           	    label: '政治事件'  
	            }, {
		           	typeValue: '2',
		           	label: '经济事件'
	            }, {
		           	typeValue: '3',
		           	label: '反恐事件'
	            }],
	            type:{
                    typeValue:''
	            },	           
	            eventTimimg:{
	           	    enentName:'',
	                persons:'',
	                location:''
	            },
	            //多选，获取行记录
	            multipleSelection:[]
	        }
	  	},
	  	methods:{
	  		handleSizeChange(){

	  		},
	  		handleCurrentChange(){

	  		},
	  		handleSelectionChange(val){
	  			this.multipleSelection=val
	  		},
	  		//弹出修改时序dialog，批量操作
	  		openTimingUpdate(){
	  			//获取行ids
	  			var ids=[]
	  			this.multipleSelection.forEach(function(item){
                    ids.push(item.id)
	  			});
                if(ids.length>0){
	  			    this.timingUpdateDialogVisible=true 
                }else{
                	this.$message({
                		showClose: true,
                        message:'请至少选择一条记录！',
                        type: 'warning'
                	});
                }
	  		},
	  		//保存时序修改，关闭dialog
	  		saveTimingUpdate(){
	  			this.timingUpdateDialogVisible=false
	  		},
	  		cancleTimingUpdate(){
	  			this.timingUpdateDialogVisible=false
	  		},
	  		//弹出事件类型定义dialog，批量操作
	  		openEventType(){
	  			//获取行ids
	  			var ids=[]
	  			this.multipleSelection.forEach(function(item){
                    ids.push(item.id)
	  			});
	  			if(ids.length>0){	  			    
	  			    this.tytpeDialogVisible=true
                }else{
                	this.$message({
                		showClose: true,
                        message:'请至少选择一条记录！',
                        type: 'warning'
                	});
                }
	  		},
	  		//保存事件类型定义，关闭dialog
	  		saveTypeUpdate(){
	  			this.tytpeDialogVisible=false
	  		},
	  		cancleTypeUpdate(){
	  			this.tytpeDialogVisible=false
	  		},
	  		//修改一条新闻记录
	  		updateTiming(){
	             this.updateEventTimingDialogVisible=true
	  		},
	  		//保存新闻记录修改内容
	  		saveEventTiming(){
	  			this.updateEventTimingDialogVisible=false
	  		},
	  		cancleEventTiming(){
	  			this.updateEventTimingDialogVisible=false
	  		},
	  		goBack(){
	            this.$router.back()
	  		}
	  	}
    }
</script>

<style scoped lang="less">
  
</style>