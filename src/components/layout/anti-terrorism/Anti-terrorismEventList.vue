<template>
	<div class="AntiEventList">
		<h1 class="title">反恐事件列表</h1>
		<el-form :inline="true" :model="antiFormData" ref="antiFormData" label-width="100px">
			<el-form-item label="国家" prop="countryId">
				<el-select v-model="antiFormData.countryId" filterable placeholder="请选择国家">
					<el-option
						v-for="item in countries"
						:key="item.number"
						:label="item.internetname"
						:value="item.number">
				    </el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="恐怖组织" prop="antiTerrorism">
				<el-select v-model="antiFormData.antiTerrorism" placeholder="请选择恐怖组织">
					<!-- <el-option
						v-for="item in antiTerrorisms"
						:key="item.typeValue"
						:label="item.typeName"
						:value="item.typeValue">
				    </el-option> -->
			    </el-select>
		    </el-form-item>
		    <el-form-item label="等级" prop="grade">
		    	<el-select v-model="antiFormData.grade" placeholder="请选择等级">
					<el-option
						v-for="item in grades"
						:key="item.gradeValue"
						:label="item.gradeName"
						:value="item.gradeValue">
				    </el-option>
				</el-select>
		    </el-form-item>
		    <el-form-item label="关键字" prop="keys">
		    	<el-input v-model="antiFormData.keyswords" placeholder="请输入关键字"></el-input>
		    </el-form-item>
		    <el-form-item>
		    	<el-button type="primary" @click="selectAntiEvent">查询</el-button>
		    	<el-button @click="resetAntiEvent('antiFormData')">重置</el-button>
		    </el-form-item>
		</el-form>

		<div class="content">
			<el-row :gutter="20">
				<el-col :span="24">
					<div class="grid-content">
						<el-table :data="antiTableData" border>
							<el-table-column prop="type" label="type"></el-table-column>
							<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="eventTime" label="事件发生时间" :formatter="formatterTime" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="countryFullName" label="国家" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="people" label="人物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="antiTerrorism" label="恐怖组织" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="grade" label="等级" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="casualties" label="伤亡人数" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="weapons" label="武器" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="infrastructure" label="建筑物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="bound" label="边境状况" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="militaryfacor" label="军事要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="naturefactor" label="自然要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="operate" label="操作" align="center" min-width="100%" fixed="right">
								<template slot-scope="scope">
									<el-button type="text" @click="showAntiEventUpdateDialog(scope.row)">修改</el-button>
								</template>
							</el-table-column>
						</el-table>					
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="antiFormData.pageNum"
							:page-sizes="[20, 100, 150, 200]"
							:page-size="antiFormData.pageSize"
							layout="total, sizes, prev, pager, next, jumper"
							:total="total">
					    </el-pagination>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 反恐事件修改dialog -->
		<el-dialog title="反恐事件修改" style="text-align:center;" :visible.sync="antiEventUpdateDialog" width="35%">
			<el-form :model="antiEvent" label-width="100px" class="AntiForm">
				<el-form-item label="事件名称">
					<el-input v-model="antiEvent.eventName" placeholder="请修改事件名称"></el-input>
				</el-form-item>
				<el-form-item label="事件发生时间">
					<el-date-picker type="date" v-model="antiEvent.eventTime" palceholder="请输入时间"></el-date-picker>
				</el-form-item>
				<el-form-item label="国家">
					<el-input v-model="antiEvent.countryFullName" palceholder="请输入国家"></el-input>
				</el-form-item>
				<el-form-item label="人物">
					<el-input v-model="antiEvent.people" palceholder="请输入人物"></el-input>
				</el-form-item>
				<el-form-item label="恐怖组织">
					<el-select v-model="antiEvent.antiTerrorism" placeholder="请选择恐怖组织">

				    </el-select>
				</el-form-item>
				<el-form-item label="等级">
					<el-select v-model="antiEvent.grade" placeholder="请选择等级">

				    </el-select>
			    </el-form-item>	
			    <el-form-item label="伤亡人数">
					<el-input v-model="antiEvent.casualties"></el-input>
				</el-form-item>
				<el-form-item label="武器">
					<el-input v-model="antiEvent.weapons"></el-input>
				</el-form-item>
				<el-form-item label="建筑物">
					<el-input v-model="antiEvent.infrastructure"></el-input>
				</el-form-item>
				<el-form-item label="边境状况">
					<el-input v-model="antiEvent.bound"></el-input>
				</el-form-item>
				<el-form-item label="军事要素">
					<el-input v-model="antiEvent.militaryfacor"></el-input>
				</el-form-item>
			    <el-form-item label="自然要素">
				    <el-input v-model="antiEvent.naturefactor"></el-input>
			    </el-form-item>				
			    <el-form-item>
				    <el-button type="primary" @click="saveAntiEvent">确认</el-button>
				    <el-button @click="cancleAntiEvent">取消</el-button>
			    </el-form-item>
		   </el-form> 								   
	    </el-dialog>
		<div style="float:right;">
		    <el-button @click="goBack">返回</el-button>
	    </div>
	</div>
</template>

<script>
    import {getCountryAll} from '@/api/common.js'
    import {formatterDateStr} from '@/utils/filter.js';
    import {getAntiEventList} from '@/api/anti-terrorism/Anti-terrorismEventList.js';
	export default{
		data(){
			return{
                antiEventUpdateDialog:false,
                //反恐事件form表单查询条件
                antiFormData:{
                	pageNum:1,
                	pageSize:20,
                	type:3,
                    countryId:'',
                    //antiTerrorism:'',
                    //grade:'',
                    keyswords:''
                },
                //反恐事件修改dialog表单数据
                antiEvent:{
                	eventName:'',
                	eventTime:'',
                	countryId:'',
                	people:'',
                	antiTerrorism:'',               	
                	grade:'',
                	casualties:'',
                    weapons:'',
                    infrastructure:'',
                    bound:'',
                    militaryfacor:'',
                    naturefactor:''
                },
				grades: [{
					gradeValue: '1',
					gradeName: '等级一'
				}, {
					gradeValue: '2',
					gradeName: '等级二'
				}, {
					gradeValue: '3',
					gradeName: '等级三'
				}, {
					gradeValue: '4',
					gradeName: '等级四'
				}, {
					gradeValue: '5',
					gradeName: '等级五'
				}],
				//反恐事件总记录数
				total:0,
				//国家信息
				countries:[],
				//反恐事件table数据
				antiTableData:[]
			}
		},
		created(){
			this.loadAntiPageList()
            this.getCountryAll()
		},
		methods:{
			//加载反恐事件列表
			loadAntiPageList(){
				console.log(this.antiFormData)
                getAntiEventList(this.antiFormData).then(res=>{
                	console.log(res)
                	this.total=res.data.total
                	this.antiTableData=res.data.list
                });
			},
			//获取国家信息
			getCountryAll(){
				getCountryAll().then(res=>{
					this.countries=res.data
				})
			},
			formatterTime(row){
                return formatterDateStr(row.eventTime)
			},
            //查询
            selectAntiEvent(){
                this.loadAntiPageList()
            },
            //重置
			resetAntiEvent(antiFormData){
                this.$refs[antiFormData].resetFields()
                this.loadAntiPageList()
			},
			handleSizeChange(val) {
				this.antiFormData.pageSize=val
				this.loadAntiPageList()
			},
			handleCurrentChange(val) {
				this.antiFormData.pageNum=val
				this.loadAntiPageList()
			},
			//修改
			showAntiEventUpdateDialog(row){
                this.antiEventUpdateDialog=true
                this.antiEvent.id=row.id
                this.antiEvent.nid=row.nid
                this.antiEvent.eventName=row.eventName
                this.antiEvent.eventTime=row.eventTime
                this.antiEvent.countryId=row.countryId
                this.antiEvent.countryFullName=row.countryFullName
                this.antiEvent.people=row.people
                this.antiEvent.antiTerrorism=row.antiTerrorism
                this.antiEvent.grade=row.grade
                this.antiEvent.casualties=row.casualties
                this.antiEvent.weapons=row.weapons
                this.antiEvent.infrastructure=row.infrastructure
                this.antiEvent.bound=row.bound
                this.antiEvent.militaryfacor=row.militaryfacor
                this.antiEvent.naturefactor=row.naturefactor
			},
			//保存
			saveAntiEvent(){
				this.antiEventUpdateDialog=false
			},
			//取消
			cancleAntiEvent(){
				this.antiEventUpdateDialog=false
			},
			//返回
			goBack(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped lang="less">
   
</style>