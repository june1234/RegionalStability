<template>
	<div class="ReportContent">
		<h1 class="title">报告内容</h1>
		<div style="margin-bottom:30px;">
			<!-- form表单，查询条件 -->
			<el-form :inline="true" :model="reportFormData" label-width="100px">
				<el-form-item label="国家">
					<el-select v-model="reportFormData.countryId" filterable placeholder="选择国家">
						<el-option
					        v-for="item in countries"
						    :key="item.number"
						    :label="item.internetname"
						    :value="item.number">
				        </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="开始时间">
					<el-date-picker type="date" v-model="reportFormData.eventTime" placeholder="开始时间"></el-date-picker>
				</el-form-item>
				<el-form-item label="结束时间">
					<el-date-picker type="date" v-model="reportFormData.endTime" placeholder="结束时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="confirm">确认</el-button>
				</el-form-item>
			</el-form>
        </div>

		<el-form label-width="150px" label-position="left">
			<!-- 报告内容 -->
		    <el-form-item label="报告标题：" label-width="100px">
		    	<quill-editor  ref="edit"
			       v-model="title"
	               :options="editorOptionTitle" 
	               @blur="onEditorBlurTitle($event)" 
	               @focus="onEditorFocusTitle($event)"
	               @change="onEditorChangeTitle($event)">
                </quill-editor>
		    </el-form-item>

		    <!-- 报告标题 -->
		    <el-form-item label="报告描述：" label-width="100px">
		    	<quill-editor 
			       v-model="instruction"
	               :options="editorOptionInstruction" 
	               @blur="onEditorBlurInstruction($event)" 
	               @focus="onEditorFocusInstruction($event)"
	               @change="onEditorChangeInstruction($event)">
                </quill-editor>
		    </el-form-item>

		    <!--  时序图-->
		    <el-form-item label="重点事件时序图:" style="background-color:#ffffff;padding:10px;">
		    	<el-radio-group v-model="timingRadio">
					<el-radio label="1">显示</el-radio>
					<el-radio label="0">不显示</el-radio>
				</el-radio-group>
				<el-select v-model="type" style="margin-left:40px;">
					<!-- <el-option
					    v-for="item in types"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option> -->
			    </el-select>
		    </el-form-item>

		    <!-- 时序图 -->
		    <div style="width:100%;background:#ffffff;margin:-15px 0 60px 0;">
	            <div style="padding:10px;">
					<span>时序图</span>
				    <div class="timeline-container timeline-theme-2">
				        <div class="timeline timeline-small-box timeline-2">
					        <div class="theme-1" data-time="1">1</div>
					        <div class="theme-2" data-time="2">2</div>
					        <div class="theme-3" data-time="3">3</div>
					        <div class="theme-4" data-time="4">4</div>
					        <div class="theme-5" data-time="5">5</div>
					        <div class="theme-1" data-time="6">6</div>
					        <div class="theme-3" data-time="7">7</div>
					        <div class="theme-4" data-time="8">8</div>
					        <div class="theme-6" data-time="9">9</div>
					        <div class="theme-5" data-time="10">10</div>
				        </div>
				    </div><!-- /.timeline-container -->
			    </div>
			</div>

			<!-- 统计图-->
		    <el-form-item label="新闻统计图表:" style="background-color:#ffffff;padding:10px;">
				<el-radio-group v-model="statistics">
				    <el-radio label="1">显示</el-radio>
				    <el-radio label="0">不显示</el-radio>
				</el-radio-group>
				<el-select v-model="statisticsType" style="margin-left:40px;">
					<el-option
						v-for="item in statisticsTypes"
						:key="item.value"
						:label="item.label"
						:value="item.value">
				    </el-option>
			    </el-select>
			</el-form-item>	

			<!-- 新闻统计图 -->
			<div style="background-color:#ffffff;margin:-15px 0 60px 0;">
			    <el-row :gutter="20" type="flex">
				    <el-col :span="8">	
						<div class="grid-content">
							<el-checkbox v-model="checkNews1">新闻统计图1</el-checkbox>
							<div id="newsOne" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>新闻统计图2</el-checkbox>
							<div id="newsTwo" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>新闻统计图3</el-checkbox>
							<div id="newsThree" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
			    </el-row>
            </div>

		    <!-- 热力图 -->
		    <!-- 政治事件 -->
		    <el-form-item label="政治事件分布热力图:" style="background-color:#ffffff;padding:5px;">
                <el-radio-group v-model="politics">
					<el-radio label="1">显示</el-radio>
					<el-radio label="0">不显示</el-radio>
				</el-radio-group>
			</el-form-item>	
			<!-- 政治事件热力图 -->
			<div style="background-color:#ffffff;margin:-15px 0 10px 0;">
				<el-row :gutter="20" type="flex">
					<el-col :span="8">	
						<div class="grid-content">
							<el-checkbox>政治统计图1</el-checkbox>
							<div id="politicsOne" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>政治统计图2</el-checkbox>
							<div id="politicsTwo" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>政治统计图3</el-checkbox>
							<div id="politicsThree" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
				</el-row>
		    </div>
			<!-- 政治事件列表 -->
            <div style="background-color:#ffffff;margin-bottom:10px;">
				<el-table :data="politicsTableData" border style="width:100%">
		    		<el-table-column type="selection" align="center" min-width="100%"></el-table-column>
		    		<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"> </el-table-column>
		    		<el-table-column prop="eventTime" label="时间" :formatter="formatterPoliticsTime" align="center" min-width="100%"> </el-table-column>
		    		<el-table-column prop="countryFullName" label="地点" align="center" min-width="100%"> </el-table-column>
		    	</el-table>
		    	<el-pagination
			      @size-change="politicsHandleSizeChange"
			      @current-change="politicsHandleCurrentChange"
			      :current-page="politicsFormData.pageNum"
			      :page-sizes="[5,10,20]"
			      :page-size="politicsFormData.pageSize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="politicsTotal">
	            </el-pagination>
            </div>
            <el-form-item label="事件说明：" style="margin-bottom:60px;" label-width="90px">
            	<quill-editor 
			       v-model="politicsInstruction"
	               :options="editorOptionPoliticsInstruction" 
	               @blur="onEditorBlurPoliticsInstruction($event)" 
	               @focus="onEditorFocusPoliticsInstruction($event)"
	               @change="onEditorChangePoliticsInstruction($event)">
                </quill-editor>
            </el-form-item>

            <!-- 经济事件 -->
            <el-form-item label="经济事件分布热力图:" style="background-color:#ffffff;padding:5px;">
			    <el-radio-group v-model="economy">
					<el-radio label="1">显示</el-radio>
					<el-radio label="0">不显示</el-radio>
			    </el-radio-group>
			</el-form-item>

			<!-- 经济事件热力图 -->
            <div style="background-color:#ffffff;margin:-15px 0 10px 0;">
				<el-row :gutter="20" type="flex">
					<el-col :span="8">	
						<div class="grid-content">
							<el-checkbox>经济统计图1</el-checkbox>
							<div id="economyOne" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>经济统计图2</el-checkbox>
							<div id="economyTwo" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>经济统计图3</el-checkbox>
							<div id="economyThree" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
				</el-row>
		    </div>

			<!-- 经济事件列表 -->
            <div style="background-color:#ffffff;margin-bottom:10px;">
				<el-table :data="economyTableData" border>
		    		<el-table-column type="selection" align="center" min-width="100%"></el-table-column>
		    		<el-table-column prop="eventName" label="事件名称" align="center" min-width="100%"> </el-table-column>
		    		<el-table-column prop="eventTime" label="时间" :formatter="formatterEcomonyTime" align="center" min-width="100%"> </el-table-column>
		    		<el-table-column prop="countryFullName" label="地点" align="center" min-width="100%"> </el-table-column>
		    	</el-table>
		    	<el-pagination
			      @size-change="economyHandleSizeChange"
			      @current-change="economyHandleCurrentChange"
			      :current-page="economyFormData.pageNum"
			      :page-sizes="[5,10,20]"
			      :page-size="economyFormData.pageSize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="economyTotal">
	            </el-pagination>
            </div>
            <el-form-item label="事件说明：" style="margin-bottom:60px;" label-width="90px">
            	<quill-editor 
			       v-model="economyInstruction"
	               :options="editorOptionEconomyInstruction" 
	               @blur="onEditorBlurEconomyInstruction($event)" 
	               @focus="onEditorFocusEconomyInstruction($event)"
	               @change="onEditorChangeEconomyInstruction($event)">
                </quill-editor> 
            </el-form-item>

            <!-- 反恐事件 -->
	    	<el-form-item label="反恐事件分布热力图:" style="background-color:#ffffff;padding:5px;">
		        <el-radio-group v-model="anti">
					<el-radio label="1">显示</el-radio>
					<el-radio label="0">不显示</el-radio>
		        </el-radio-group>
		    </el-form-item>

		    <!--  反恐事件热力图 -->
			<div style="background-color:#ffffff;margin:-15px 0 10px 0;">
				<el-row :gutter="20" type="flex">
					<el-col :span="8">	
						<div class="grid-content">
							<el-checkbox>反恐统计图1</el-checkbox>
							<div id="antiOne" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>反恐统计图2</el-checkbox>
							<div id="antiTwo" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<el-checkbox>反恐统计图3</el-checkbox>
							<div id="antiThree" style="width:100%;height:400px;"></div>
						</div>
					</el-col>
				</el-row>
		    </div>

			<!-- 反恐事件列表 -->
            <div style="background-color:#ffffff;margin-bottom:10px;">
				<el-table :data="antiTableData" border style="width:100%">
		    		<el-table-column type="selection" align="center" min-width="100%"></el-table-column>
		    		<el-table-column prop="eventName" label="新闻标题" align="center" min-width="100%"> </el-table-column>
		    		<el-table-column prop="eventTime" label="时间" :formatter="formatterAntiTime" align="center" min-width="100%"> </el-table-column>
		    		<el-table-column prop="countryFullName" label="地点" align="center" min-width="100%"> </el-table-column>
		    	</el-table>
		    	<el-pagination
			      @size-change="antiHandleSizeChange"
			      @current-change="antiHandleCurrentChange"
			      :current-page="antiFormData.pageNum"
			      :page-sizes="[5,10,20]"
			      :page-size="antiFormData.pageSize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="antiTotal">
	            </el-pagination>
            </div>
            <el-form-item label="事件说明：" style="margin-bottom:40px;" label-width="90px">
            	<quill-editor 
			       v-model="antiInstruction"
	               :options="editorOptionAntiInstruction" 
	               @blur="onEditorBlurAntiInstruction($event)" 
	               @focus="onEditorFocusAntiInstruction($event)"
	               @change="onEditorChangeAntiInstruction($event)">
                </quill-editor>
            </el-form-item>

			<!-- 计算方式 -->
            <el-form-item label="稳定性趋势分析公式计算方式说明:" label-width="240px">
				<el-radio-group v-model="calculation">
				    <el-radio label="1">显示</el-radio>
				    <el-radio label="0">不显示</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="展示区域稳定性分析趋势图表:" label-width="240px">
				<el-radio-group v-model="trend">
				    <el-radio label="1">显示</el-radio>
				    <el-radio label="0">不显示</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="系统设置与个人设置对比:" label-width="240px">
				<el-radio-group v-model="compare">
				    <el-radio label="1">显示</el-radio>
				    <el-radio label="0">不显示</el-radio>
				</el-radio-group>
			</el-form-item> 
			<el-form-item>
				<div style="float:right">
					<el-button @click="submit">生成报告</el-button>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
    import echarts from 'echarts';
    import {quillEditor} from 'vue-quill-editor';
    import {getCountryAll} from '@/api/common.js';
    import {formatterDate,formatterDateStr} from '@/utils/filter.js';
    import  '../../assets/jQuery_timeline/dist/js/timeline.js';
    import {getPoliticsEventListByType,getEconomyEventListByType,getAntiEventListByType} from '@/api/report/reportContent.js'
    export default{
        data(){
        	return{
        		checkNews1:true,
        		timingRadio:'1',
        		statistics:'1',
        		politics:'1',
        		economy:'1',
        		anti:'1',
        		calculation:'1',
        		trend:'1',
        		compare:'1',

                //表单查询信息
        		reportFormData:{        			
        			countryId:'',
        			eventTime:'',
        			endTime:''
        		},
                
                //政治事件查询条件
                politicsFormData:{
                    countryId:'',
                    type:1,
                    eventTime:'',
        			endTime:'',
                    pageNum:1,
                    pageSize:5,
                },
                //经济事件查询条件
                economyFormData:{
                    countryId:'',
                    type:2,
                    eventTime:'',
        			endTime:'',
                    pageNum:1,
                    pageSize:5,
                },
                antiFormData:{
                    countryId:'',
                    type:3,
                    eventTime:'',
        			endTime:'',
                    pageNum:1,
                    pageSize:5,
                },

                /*富文本*/
        		title:'',//报告标题
                editorOptionTitle:{}, //报告标题富文本工具框                
        		instruction:'',//报告描述
        		editorOptionInstruction:{},//报告描述富文本工具框                
                politicsInstruction:'',//政治事件说明
                editorOptionPoliticsInstruction:{},//政治事件说明富文本工具框
                economyInstruction:'',//经济事件说明
                editorOptionEconomyInstruction:{},//经济事件说明富文本工具框
                antiInstruction:'',//反恐事件说明
                editorOptionAntiInstruction:{},//反恐事件说明富文本工具框
            
                /*表格数据*/
                //政治列表
        		politicsTableData:[],

        		//经济事件列表
        		economyTableData:[],

        		//反恐事件列表
        		antiTableData:[],
        		
        		//获取国家信息列表
                countries:[],

	            //总记录数
	            //政治事件总数
                politicsTotal:0,

                //经济事件总数
                economyTotal:0,

                //反恐事件总数
                antiTotal:0,

                statisticsType:'1',
                statisticsTypes:[{
                	value:'1',
                	label:'全部'
                },{
                	value:'2',
                	label:'军事'
                },{
                	value:'3',
                	label:'体育'
                }],
                type:1
        	}
        },
        created(){
            this.getCountryAll()
            this.loadPoliticsEventPageList()
            this.loadEconomyEventPageList()
            this.loadAntiEventPageList()
        },
        mounted(){
        	this.InitTimes()
            this.drawLineNewsOne()
            this.drawLineNewsTwo()
            this.drawLineNewsThree()
            this.drawLinePoliticsOne()
            this.drawLinePoliticsTwo()
            this.drawLinePoliticsThree()
            this.drawLineEconomyOne()
            this.drawLineEconomyTwo()
            this.drawLineEconomyThree()
            this.drawLineAntiOne()
            this.drawLineAntiTwo()
            this.drawLineAntiThree()
        },
        methods:{
            //获取国家信息
			getCountryAll(){
	            getCountryAll().then(res=>{
	           	    this.countries=res.data
	            });
			},

            //时序图
            InitTimes(){
		        jQuery('.timeline-2').Timeline({
			        itemClass: 'box-item',
			        dotsPosition: 'top',
			        startItem: '1'
		        });
		    },

		    //加载政治事件列表
		    loadPoliticsEventPageList(){
                getPoliticsEventListByType(this.politicsFormData).then(res=>{
                	this.politicsTableData=res.data.list
                    this.politicsTotal=res.data.total
                });
		    },

		    //加载经济事件列表
		    loadEconomyEventPageList(){
                getEconomyEventListByType(this.economyFormData).then(res=>{
                	this.economyTableData=res.data.list
                    this.economyTotal=res.data.total
                });
		    },

		    //加载反恐事件列表
		    loadAntiEventPageList(){
                getAntiEventListByType(this.antiFormData).then(res=>{
                    this.antiTableData=res.data.list
                    this.antiTotal=res.data.total
                });
		    },
            
            //格式化时间
            formatterPoliticsTime(row){
                return formatterDateStr(row.eventTime)
            },
            formatterEcomonyTime(row){
                return formatterDateStr(row.eventTime)
            },
            formatterAntiTime(row){
                return formatterDateStr(row.eventTime)
            },
			/*报告标题*/
			onEditorBlurTitle(editor){//失去焦点事件  

 	        },
            onEditorFocusTitle(editor){//获得焦点事件
            },
            onEditorChangeTitle({editor,html,text}){//编辑器文本发生变化
            	this.title=html
            },

            /*报告描述*/
            onEditorBlurInstruction(editor){//失去焦点事件    
 	        },
            onEditorFocusInstruction(editor){//获得焦点事件
            },
            onEditorChangeInstruction({editor,html,text}){//编辑器文本发生变化
            },

            /*政治事件说明*/
            onEditorBlurPoliticsInstruction(editor){//失去焦点事件    
 	        },
            onEditorFocusPoliticsInstruction(editor){//获得焦点事件
            },
            onEditorChangePoliticsInstruction({editor,html,text}){//编辑器文本发生变化
            },

            /*经济事件说明*/
            onEditorBlurEconomyInstruction(editor){//失去焦点事件    
 	        },
            onEditorFocusEconomyInstruction(editor){//获得焦点事件
            },
            onEditorChangeEconomyInstruction({editor,html,text}){//编辑器文本发生变化
            },

            /*反恐事件说明*/
            onEditorBlurAntiInstruction(editor){//失去焦点事件    
 	        },
            onEditorFocusAntiInstruction(editor){//获得焦点事件
            },
            onEditorChangeAntiInstruction({editor,html,text}){//编辑器文本发生变化
            },


            /*分页*/
            //政治事件列表分页
            politicsHandleSizeChange(val){
                this.politicsFormData.pageSize=val
                this.loadPoliticsEventPageList()
            },
            politicsHandleCurrentChange(val){
                this.politicsFormData.pageNum=val
                this.loadPoliticsEventPageList()
            },
            //经济事件列表分页
            economyHandleSizeChange(val){
                this.economyFormData.pageSize=val
                this.loadEconomyEventPageList()
            },
            economyHandleCurrentChange(val){
                this.economyFormData.pageNum=val
                this.loadEconomyEventPageList()
            },
            //反恐事件列表分页
            antiHandleSizeChange(val){
                this.antiFormData.pageSize=val
                this.loadAntiEventPageList()
            },
            antiHandleCurrentChange(val){
                this.antiFormData.pageNum=val
                this.loadAntiEventPageList()
            },

            downloadImgByChart(chartId){
                var myChart = echarts.getInstanceByDom(document.getElementById(chartId));
                var url = myChart.getConnectedDataURL({
					pixelRatio: 5,　　//导出的图片分辨率比率,默认是1
					backgroundColor: '#fff',　　//图表背景色
					excludeComponents:[　　//保存图表时忽略的工具组件,默认忽略工具栏
					    'toolbox'
					],
					type:'png'　　//图片类型支持png和jpeg
				});

				var $a = document.createElement('a');
				var type = 'png';
				//$a.download = myChart.getOption().title[0].text + '.' + type;
				$a.target = '_blank';
				$a.href = url;
				// Chrome and Firefox
				if (typeof MouseEvent === 'function') {
					var evt = new MouseEvent('click', {
						view: window,
						bubbles: true,
						cancelable: false
					});
					$a.dispatchEvent(evt);
				}else{ // IE
					var html = ''

					'<body style="margin:0;">'
					'![](' + url + ')'
					'</body>';
					var tab = window.open();
					tab.document.write(html);
				}

            },
			drawLineNewsOne(){
				var myChart = echarts.init(document.getElementById('newsOne'));
				var option = {
					color: ['#003366', '#006699', '#4cabce'],
				    legend: {
					    data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineNewsTwo(){
				var myChart = echarts.init(document.getElementById('newsTwo'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineNewsThree(){
				var myChart = echarts.init(document.getElementById('newsThree'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLinePoliticsOne(){
				var myChart = echarts.init(document.getElementById('politicsOne'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLinePoliticsTwo(){
				var myChart = echarts.init(document.getElementById('politicsTwo'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLinePoliticsThree(){
				var myChart = echarts.init(document.getElementById('politicsThree'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineEconomyOne(){
				var myChart = echarts.init(document.getElementById('economyOne'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineEconomyTwo(){
				var myChart = echarts.init(document.getElementById('economyTwo'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineEconomyThree(){
				var myChart = echarts.init(document.getElementById('economyThree'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineAntiOne(){
				var myChart = echarts.init(document.getElementById('antiOne'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineAntiTwo(){
				var myChart = echarts.init(document.getElementById('antiTwo'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			drawLineAntiThree(){
				var myChart = echarts.init(document.getElementById('antiThree'));
				var option = {
						color: ['#003366', '#006699', '#4cabce'],
					legend: {
						data:['等级一','等级二','等级三','等级四']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['6月','7月','8月','9月']
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						name:'等级一',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					},
					{
						name:'等级二',
						type:'line',
						stack: '总量',
						data:[159, 212, 206, 146]
					},
					{
						name:'等级三',
						type:'line',
						stack: '总量',
						data:[320, 332, 312, 334]
					},
					{
						name:'等级四',
						type:'line',
						stack: '总量',
						data:[120, 100, 145, 134,]
					}]
				};      
				myChart.setOption(option);
				window.addEventListener("resize", function() {
			        myChart.resize();
				});
			},
			confirm(){
				var eventTime=this.reportFormData.eventTime
				if(eventTime!=""){
					eventTime=formatterDate(eventTime)
				}
				var endTime=this.reportFormData.endTime
				if(endTime!=""){
					endTime=formatterDate(endTime)
				}

                this.politicsFormData.countryId=this.reportFormData.countryId
                this.politicsFormData.eventTime=eventTime
                this.politicsFormData.endTime=endTime

                this.economyFormData.countryId=this.reportFormData.countryId
                this.economyFormData.eventTime=eventTime
                this.economyFormData.endTime=endTime

                this.antiFormData.countryId=this.reportFormData.countryId
                this.antiFormData.eventTime=eventTime
                this.antiFormData.endTime=endTime

                this.loadPoliticsEventPageList()
                this.loadEconomyEventPageList()
                this.loadAntiEventPageList()
			},
			submit(){
				this.$router.push('/ReportContent/specialReport')
			}
        }
    }
</script>

<style>
    @import '../../assets/jQuery_timeline/css/normalize.css';
    @import '../../assets/jQuery_timeline/css/htmleaf-demo.css';
    @import '../../assets/jQuery_timeline/dist/css/timeline.css';
    @import '../../assets/jQuery_timeline/css/demo.css';
</style>