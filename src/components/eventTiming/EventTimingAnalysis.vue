<template>
	<div>
		<h1 class="sub-header">事件时序分析</h1>
		<!-- form表单 -->
		<div class="block" style="float:left;margin-top:40px;margin-left:30px;">
			<el-form :inline="true" :model="eventTiming" class="demo-form-inline" >
				<el-form-item >
					<el-select v-model="eventTiming.country" placeholder="请选择国家">
            <el-option label="中国" value="China"></el-option>
            <el-option label="日本" value="Japan"></el-option>
            <el-option label="俄罗斯" value="Russia"></el-option>
          </el-select>
				</el-form-item>
				<el-form-item>
					<el-date-picker v-model="eventTiming.beginDate" type="date" placeholder="请输入开始时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-date-picker v-model="eventTiming.endDate" type="date" placeholder="请输入结束时间"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="selectEventTiming">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<!-- 信息列表 -->
		<div>
			<el-table border ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width:80%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="eventName" align="center" label="事件名称"></el-table-column>
                <el-table-column prop="beginDate" align="center" label="开始时间"></el-table-column>
                <el-table-column prop="endDate" align="center" label="结束时间"></el-table-column>
                <el-table-column prop="relatedParty" align="center" label="相关方"></el-table-column>
                <el-table-column prop="country" align="center" label="国家"></el-table-column>
                <el-table-column prop="location" align="center" label="地点"></el-table-column>
                <el-table-column prop="operate" align="center" label="操作">
                	<template slot-scope="scope">
                		<el-button size="small" @click="updateEventTiming(scope.$index, scope.row)">修改</el-button>
                	</template>
                </el-table-column>
            </el-table>
		</div>

      <!-- 分页 -->
      <div class="block">
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

      <!-- 时序图 -->
      <div style="float:left;display:block;margin-top:30px;margin-left:10px;">
      	<span>时序图</span>
      	<div>
            <div class="event_box">
              <div class="space_div">
                <p class="left_space"></p>
                <p class="right_space"></p>
              </div>
              <div class="parHd clearfix">
                <ul>
                  <li>2016.03.01</li>
                  <li>2016.05.02</li>
                  <li>2016.06.03</li>
                  <li>2016.09.04</li>
                  <li>2016.11.05</li>
                  <li>2016.12.06</li>
                  <li>2017.01.07</li>
                  <li>2017.02.08</li>
                </ul>
                <a class="sPrev"><img src="../../assets/timline/images/left_ico.png" alt="" title=""></a>
                <a class="sNext"><img src="../../assets/timline/images/right_ico.png" alt="" title=""></a>
              </div>
              <div class="parBd clearfix">
                <div class="slideBox" style="display:none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
                <div class="slideBox" style="display: none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
                <div class="slideBox" style="display: none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
                <div class="slideBox" style="display: none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
                <div class="slideBox" style="display: none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
                <div class="slideBox" style="display: none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
                <div class="slideBox" style="display: none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
                <div class="slideBox" style="display: none;">
                  <h4>时间</h4>
                  <p>地点</p>
                  <p>事件</p>
                </div>
              </div>
            </div>
          </div>
      </div>
	</div>
</template>

<script>
 import '../../assets/timline/js/jquery.SuperSlide2.1.2.js'
	export default{
		data(){
			return{
				currentPage:1,
                pageSize:10,
                eventTiming:{
                     country:'',
                     beginData:'',
                     endDate:''
                },
                tableData:[{
                   eventName:'重大事件',
                   beginDate:'2018年3月6日',
                   endDate:'2018年3月12日',
                   relatedParty:'俄罗斯',
                   country:'中国',
                   location:'北京',
                },{
                  eventName:'重大事件',
                  beginDate:'2018年3月6日',
                  endDate:'2018年3月12日',
                  relatedParty:'俄罗斯',
                  country:'中国',
                  location:'北京',
                }]
			}
		},
    mounted(){
      jQuery(".event_box").slide({ titCell: ".parHd li", mainCell: ".parBd", defaultPlay: false, titOnClassName: "act", prevCell: ".sPrev", nextCell: ".sNext",pnLoop:false });
        jQuery(".parHd").slide({ mainCell: " ul", vis: 6, effect: "left", defaultPlay: false, prevCell: ".sPrev", nextCell: ".sNext" ,pnLoop:false,autoPage:true}) 
    }
	}
</script>

<style scoped lang="less">
@import '../../assets/timline/css/index.css';
</style>
