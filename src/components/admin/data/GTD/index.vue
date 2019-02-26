<template>
	<div class="GTDManage">
		<h2 class="title">GTD数据</h2>

		<!-- GTD查询form表单 -->
		<el-form :inline="true" :model="GTDFormData" ref="GTDFormData">
			<el-form-item prop="nation">
				<el-select v-model="GTDFormData.nation" filterable placeholder="选择国家">
					<el-option
						v-for="item in countries"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				    </el-option>
			    </el-select>  
		    </el-form-item>
			<el-form-item prop="startTime">
				<el-date-picker v-model="GTDFormData.startTime" type="date" placeholder="选择开始日期"></el-date-picker>
			</el-form-item>
			<el-form-item prop="endTime">
				<el-date-picker v-model="GTDFormData.endTime" type="date" placeholder="选择结束日期"></el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="selectGTD">查询</el-button>
				<el-button @click="resetGTD('GTDFormData')">重置</el-button>
			</el-form-item>
		</el-form>

		<!-- GTD数据EXcel文件上传 -->
		<el-upload 
			class="avatar-uploader"
			action="http://192.168.100.202:8080/dev/gtd/import" 
			:before-upload="beforeUpload"
			:on-preview="handlePreview"
			:on-success="handleSuccess"
			:before-remove="beforeRemove"
			show-file-list
			:file-list="fileList">
		    <el-button slot="trigger">导入Excel</el-button>
	    </el-upload>
   	    <div class="content">
   	    	<!-- GTD table表格 -->
   		    <el-table :data="tableGTDData" border>
	   			<el-table-column prop="eventTime" label="时间" align="center" :formatter="formatterEventTime"></el-table-column>
	   			<el-table-column prop="countryTxt" label="国家" align="center"></el-table-column>
	   			<el-table-column prop="city" label="城市" align="center"></el-table-column>
	   			<el-table-column prop="gnames" label="冲突方" align="center" :formatter="formatterGnames"></el-table-column>
	   			<el-table-column prop="weaptype1" label="武器" align="center" :formatter="formatterWeaptype"></el-table-column>
   		    </el-table>

   		    <!-- GTD 表格分页-->
	   		<el-pagination
		   		@size-change="handleSizeChange"
		   		@current-change="handleCurrentChange"
		   		:current-page="GTDFormData.pageNum"
		   		:page-sizes="[10,20,30]"
		   		:page-size="GTDFormData.pageSize"
		   		layout="total, sizes, prev, pager, next, jumper"
		   		:total="total">
	   	    </el-pagination>
   	    </div>
    </div>
</template>
<script>
	import {getGTDList} from '@/api/data/GTD/GTDManage.js';
	import {getCountryAll} from '@/api/common.js';
	import {formatterDateStr} from '@/utils/filter.js';
    export default{
	    data(){
			return{
				//查询form表单定义
				GTDFormData:{
					nation:'',
					startTime:'',
					endTime:'',
					pageNum:1,
					pageSize:10
				},
				//分页总记录数
				total:0,
                
                //国家信息
				countries:[
					{
					value: "PRK",
					label: "朝鲜"
					},
					{
					value: "IND",
					label: "印度"
					},
					{
					value: "JPN",
					label: "日本"
					},
					{
					value: "CHN",
					label: "中国"
					},
					{
					value: "USA",
					label: "美国"
					},
					{
					value: "PAK",
					label: "巴基斯坦"
					},
					{
					value: "KOR",
					label: "韩国"
					}
				],

				//GTD数据
				tableGTDData:[],

				//文件列表
				fileList:[]
			}
		},
		created(){
	       this.loadGTDPageList();
		},
		methods:{
			//加载GTD列表
			loadGTDPageList(){
	    		getGTDList(this.GTDFormData).then(res => {
	    			this.total=res.data.total
	    			this.tableGTDData=res.data.list
	    		})
			},
			//查询GTD数据
	         selectGTD(){
	            this.loadGTDPageList()
	         },
	         //重置GTD数据
	         resetGTD(GTDFormData){
	         	this.$refs[GTDFormData].resetFields()
	            this.loadGTDPageList()
	         },
			//GTD分页
			handleSizeChange(val) {
				this.GTDFormData.pageSize=val
				this.loadGTDPageList()
			},
			handleCurrentChange(val) {
				this.GTDFormData.pageNum=val
				this.loadGTDPageList()
			},
			//格式化发生时间
			formatterEventTime(row){
				var time=row.eventTime
				if(time!=null){
                    return formatterDateStr(time)
                }                
			},
			//冲突方
			formatterGnames(row, column, cellValue){
				const gname = row.gname==='***'?'':row.gname;
				const gname2 = row.gname2==='***'?'':row.gname2;
				const gname3 = row.gname3==='***'?'':row.gname3;
	                return gname+'  '+gname2+'  '+gname3	          
			},
			//武器
	        formatterWeaptype(row, column, cellValue){
	            const weaptype=row.weaptype1
	            switch(weaptype){
	            	case '1':return '生物';
	            	break;
	            	case '2':return '化学';
	            	break;
	            	case '3':return '放射';
	            	break;
	            	case '4':return '核';
	            	break;
	            	case '5':return '枪支';
	            	break;
	            	case '6':return '爆炸物/炸弹/炸药';
	            	break;
	            	case '7':return '加武器';
	            	break;
	            	case '8':return '燃烧弹';
	            	break;
	            	case '9':return '混战';
	            	break;
	            	case '10':return '车辆';
	            	break;
	            	case '11':return '破坏设备';
	            	break;
	            	case '12':return '其他';
	            	break;
	            	default:return '未知';
	            	break;
	            }
	         },
	         
			//文件上传
			//上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
			beforeUpload(file){
	            const isXLS=file.type==='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	            const isLt10M=file.size/1024/1024<10
	            if(!isXLS){
	            	this.$message.error('只能上传XLSX格式的文件！')
	            }
	            if(!isLt10M){
	            	this.$message.error('上传文件大小不能超过10MB！')
	            }
	            return isXLS && isLt10M;
			},
			//点击文件列表中已上传的文件时的钩子,参数为file
			handlePreview(file){
			},			
			//文件上传成功时的钩子
			handleSuccess(responce,file,fileList){
	            if(responce.retcode==200000){
				    this.$message.success(`${responce.msg}`)
				    this.loadGTDPageList()	              
	            }
	            if(responce.retcode==906000){
	          	    this.$message.success(`${responce.msg}`)
	            }
			},
			//删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传
			beforeRemove(file,fileList){
	            return this.$confirm(`确定移除 ${file.name} ?`)
			}			
		}
    }
</script>

<style scoped lang="less">

</style>