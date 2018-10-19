<template>
	<div class="PoliticsEventList">
		<h1 class="title">政治事件列表</h1>
		<el-form :inline="true" :model="politicsFormData" ref="politicsFormData" label-width="100px">
			<el-form-item label="国家" prop="countryId">
				<el-select v-model="politicsFormData.countryId" filterable placeholder="请选择国家">
					<el-option
						v-for="item in countries"
						:key="item.number"
						:label="item.internetname"
						:value="item.number">
				    </el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="政党" prop="partyGroup">
				<el-select v-model="politicsFormData.partyGroup" placeholder="请选择政党">
					<el-option
						v-for="item in partyGroups"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				    </el-option>
			    </el-select>
		    </el-form-item>
		    <el-form-item label="等级" prop="grade">
		    	<el-select v-model="politicsFormData.grade" placeholder="请选择等级">
					<el-option
						v-for="item in grades"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				    </el-option>
				</el-select>
		    </el-form-item>
		    <el-form-item label="关键字" prop="keys">
		    	<el-input v-model="politicsFormData.keywords" placeholder="请输入关键字"></el-input>
		    </el-form-item>
		    <el-form-item>
		    	<el-button type="primary" @click="selectPoliticsEvent">查询</el-button>
		    	<el-button @click="resetPoliticsEvent('politicsFormData')">重置</el-button>
		    </el-form-item>
		</el-form>
		<div class="content">
			<el-row :gutter="20">
				<el-col :span="24">
					<div class="grid-content">
						<el-table :data="politicsTableData" border>
							<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="eventTime" label="事件发生时间" :formatter="formatterTime" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="countryFullName" label="国家" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="people" label="人物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="partyGroup" label="政党" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="grade" label="等级" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="infrastructure" label="建筑物" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="bound" label="边境状况" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="militaryfacor" label="军事要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="naturefactor" label="自然要素" align="center" min-width="100%"></el-table-column>
							<el-table-column prop="operate" label="操作" align="center" min-width="100%" fixed="right">
								<template slot-scope="scope">
									<el-button type="text" @click="showPoliticsEventUpdateDialog(scope.row)">修改</el-button>
								</template>
							</el-table-column>
						</el-table>
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="politicsFormData.pageNum"
							:page-sizes="[20, 100, 150, 200]"
							:page-size="politicsFormData.pageSize"
							layout="total, sizes, prev, pager, next, jumper"
							:total="total">
					    </el-pagination>
					</div>
				</el-col>
			</el-row>
		</div>

		<!-- 政治事件修改dialog-->
		<el-dialog title="政治事件修改" style="text-align:center;" :visible.sync="politicsEventUpdateDialog" width="35%">
			<el-form :model="politicsEvent" label-width="100px" class="PoliticsForm">
				<el-form-item label="事件名称">
					<el-input v-model="politicsEvent.eventName" placeholder="请修改事件名称"></el-input>
				</el-form-item>
				<el-form-item label="事件发生时间">
					<el-date-picker type="date" v-model="politicsEvent.eventTime" palceholder="请输入时间"></el-date-picker>
				</el-form-item>
				<el-form-item label="国家">
					<el-input v-model="politicsEvent.countryFullName" palceholder="请输入国家"></el-input>
				</el-form-item>
				<el-form-item label="人物">
					<el-input v-model="politicsEvent.people" palceholder="请输入人物"></el-input>
				</el-form-item>
				<el-form-item label="政党">
					<el-select v-model="politicsEvent.partyGroup" placeholder="请选择政党">

				    </el-select>
				</el-form-item>
				<el-form-item label="等级">
					<el-select v-model="politicsEvent.grade" placeholder="请选择等级">

				    </el-select>
			    </el-form-item>
				<el-form-item label="建筑物">
					<el-input v-model="politicsEvent.infrastructure"></el-input>
				</el-form-item>
				<el-form-item label="边境状况">
					<el-input v-model="politicsEvent.bound"></el-input>
				</el-form-item>
				<el-form-item label="军事要素">
					<el-input v-model="politicsEvent.militaryfacor"></el-input>
				</el-form-item>
			    <el-form-item label="自然要素">
				    <el-input v-model="politicsEvent.naturefactor"></el-input>
			    </el-form-item>				
			    <el-form-item>
				    <el-button type="primary" @click="savePoliticsEvent">确认</el-button>
				    <el-button @click="canclePoliticsEvent">取消</el-button>
			    </el-form-item>
		   </el-form> 								   
	    </el-dialog>
		<div style="float:right;">
		    <el-button @click="goBack">返回</el-button>
	    </div>
	</div>
</template>

<script>
    import {getCountryAll} from '@/api/common.js';
    import {formatterDateStr} from '@/utils/filter.js';
    import {getPartyGroupList,getPoliticsEventList} from '@/api/politics/PoliticsEventList.js';
	export default{
		data(){
			return{
                politicsEventUpdateDialog:false,
                //政治查询form表单
                politicsFormData:{
                	pageNum:1,
                	pageSize:20,
                	type:1,
                    countryId:'',
                    //partyGroup:'',
                    //grade:'',
                    keywords:''
                },
                //政治事件修改dialog表单数据
                politicsEvent:{
                	id:'',
                	nid:'',
					eventName:'',
					eventTime:'',
					countryId:'',
					people:'',
					partyGroup:'',
                    grade:'',
                    infrastructure:'',
                    bound:'',
                    militaryfacor:'',
                    naturefactor:''
				},
				//政治事件记录数
				total:0,
				//国家信息
                countries:[],
                //政党信息
                partyGroups:[],
                //政治事件table数据
				politicsTableData:[]
		    }
		},
		created(){
			this.loadPoliticsEventPageList()
            this.getCountryAll()
            this.getPartyGroupAll()
		},
		methods:{
			//加载政治事件列表信息
			loadPoliticsEventPageList(){
                getPoliticsEventList(this.politicsFormData).then(res=>{
                   this.total=res.data.total
                   this.politicsTableData=res.data.list
               });
			},
			//获取国家信息
			getCountryAll(){
				getCountryAll().then(res=>{
					this.countries=res.data
				})
			},
			//获取政党信息
			getPartyGroupAll(){
                getPartyGroupList().then(res=>{
                });
			},
			formatterTime(val){
                return formatterDateStr(val.eventTime)
			},
			//查询
			selectPoliticsEvent(){
                this.loadPoliticsEventPageList()
			},
			//重置
			resetPoliticsEvent(politicsFormData){
                this.$refs[politicsFormData].resetFields();
			},
			handleSizeChange(val) {
				this.politicsFormData.pageSize=val
				this.loadPoliticsEventPageList()
			},
			handleCurrentChange(val) {
				this.politicsFormData.pageNum=val
				this.loadPoliticsEventPageList()
			},
			//修改
			showPoliticsEventUpdateDialog(row){
                this.politicsEventUpdateDialog=true
                this.politicsEvent.id=row.id
				this.politicsEvent.nid=row.nid   
				this.politicsEvent.eventName=row.eventName
                this.politicsEvent.eventTime=row.eventTime
                this.politicsEvent.countryId=row.countryId
                this.politicsEvent.countryFullName=row.countryFullName
                this.politicsEvent.people=row.people
                this.politicsEvent.partyGroup=row.partyGroup
                this.politicsEvent.grade=row.grade
                this.politicsEvent.infrastructure=row.infrastructure
                this.politicsEvent.bound=row.bound
                this.politicsEvent.militaryfacor=row.militaryfacor
                this.politicsEvent.naturefactor=row.naturefactor
			},
			//保存
			savePoliticsEvent(){
				this.politicsEventUpdateDialog=false
			},
			//取消
			canclePoliticsEvent(){
				this.politicsEventUpdateDialog=false
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