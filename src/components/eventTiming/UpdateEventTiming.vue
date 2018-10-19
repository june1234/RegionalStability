<template>
		<div>
			<el-row type="flex">
				<el-col :span="2">
					<div class="grid-content">
						<h1>事件新闻列表</h1>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content">
						<el-button type="primary" @click="openTimingUpdate">时序修正</el-button>
						<el-dialog title="时序修正" style="text-align:center;" :visible.sync="timingUpdateDialogVisible" width="30%">
							<el-form :model="timimg" label-width="80px">
								<el-form-item label="阶段名称">
									<el-input v-model="timimg.name" placeholder="阶段名称"></el-input>
								</el-form-item>
								<el-form-item label="开始时间">
									<el-input v-model="timimg.beginTime" placeholder="开始时间"></el-input>
								</el-form-item>
								<el-form-item label="结束时间">
									<el-input v-model="timimg.endTime" placeholder="结束时间"></el-input>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" @click="saveTimingUpdate">确认</el-button>
									<el-button type="primary" @click="cancleTimingUpdate">取消</el-button>
								</el-form-item>
							</el-form>
					    </el-dialog>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content">
						<el-button type="primary" @click="openEventType">事件类型定义</el-button>
						<el-dialog title="事件类型定义" style="text-align:center;" :visible.sync="tytpeDialogVisible" width="25%">
							<el-form :model="type" label-width="100px">
								<el-form-item label="事件类型">
									<el-select v-model="typeValue" placeholder="请选择">
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
									<el-button type="primary" @click="cancleTypeUpdate">取消</el-button>
								</el-form-item>
							</el-form>
					    </el-dialog>
					</div>
				</el-col>
			</el-row>
			<el-table :data="timingTableData" border style="width: 100%">
				<el-table-column type="selection" align="center" min-width="100%"></el-table-column>
				<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"></el-table-column>		
				<el-table-column prop="happenDate" label="事件发生时间" align="center" min-width="100%"></el-table-column>	
				<el-table-column prop="location" label="地点" align="center" min-width="100%"></el-table-column>	
				<el-table-column prop="persons" label="人物" align="center" min-width="100%"></el-table-column>	
				<el-table-column prop="operate" label="操作" align="center" min-width="100%">
					<template slot-scope="scope">
						<el-button size="small" @click="updateTiming(scope.$index,scope.row)">修改</el-button>
					</template>
				</el-table-column>
			</el-table>
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
									<el-button type="primary" @click="cancleEventTiming">取消</el-button>
								</el-form-item>
							</el-form>
					    </el-dialog>
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[10, 20, 30, 40]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="2">
		    </el-pagination>
		    <div style="float:right;">
			    <el-button size="medium" @click="submit(scope.$index, scope.row)">确认</el-button>
		    </div>
	</div>
</template>

<script>
  export default{
  	data(){
  		return{
  			timingUpdateDialogVisible:false,
  			tytpeDialogVisible:false,
  			updateEventTimingDialogVisible:false,
  			timimg:{
               name:'',
               beginTime:'',
               endTime:''
  			},
           timingTableData:[{
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
           typeValue: '',
           eventTimimg:{
           	 enentName:'',
             persons:'',
             location:''
           }
       }
  	},
  	methods:{
  		openTimingUpdate(){
  			this.timingUpdateDialogVisible=true
  		},
  		saveTimingUpdate(){
  			this.timingUpdateDialogVisible=false
  		},
  		cancleTimingUpdate(){
  			this.timingUpdateDialogVisible=false
  		},
  		openEventType(){
  			this.tytpeDialogVisible=true
  		},
  		saveTypeUpdate(){
  			this.tytpeDialogVisible=false
  			console.log(this.typeValue)
  		},
  		cancleTypeUpdate(){
  			this.tytpeDialogVisible=false
  		},
  		updateTiming(){
             this.updateEventTimingDialogVisible=true
  		},
  		saveEventTiming(){
  			this.updateEventTimingDialogVisible=false
  		},
  		cancleEventTiming(){
  			this.updateEventTimingDialogVisible=false
  		}
  	}
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>