<template>
	<div class="political">
		<h2 class="title">政治参数设置</h2>
		<el-tabs type="border-card">
		   <el-tab-pane label="维度调整">
		  	   <h4>事件名称</h4>
		  	   <el-form :inline="true" :model="politicsWeb" class="demo-form-inline">
					<el-form-item label="国家">
						<el-select v-model="politicsWeb.countryId" placeholder="选择国家">
					        <el-option
						      v-for="item in country"
						      :key="item.countrykeys"
						      :label="item.internetname"
						      :value="item.number">
						    </el-option>
					    </el-select>
					</el-form-item>
					<el-form-item label="维度">
					  <el-select v-model="politicsWeb.dimensionality" placeholder="选择维度">
					     <el-option
						      v-for="item in dimension"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
					     </el-option>
					  </el-select>
					</el-form-item>
					<el-form-item label="等级">
					  <el-select v-model="politicsWeb.levelId" placeholder="选择等级">
						    <el-option
						      v-for="item in level"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					  </el-select>
					</el-form-item>
					<el-form-item>
					  <el-button type="primary" @click="listloading">查询</el-button>
					</el-form-item>
				</el-form>
				<!-- 政治人物 -->
				<template class="politicalFigures" v-if="isPoliticalFigures">
				   <h4>政治人物维度</h4>
				   <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary" @click="BulkDelete">批量删除</el-button>
						<el-button type="primary" @click="FiguresModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="politicalFigures"
				   tooltip-effect="dark"
				   style="width: 100%"
				   @selection-change="handleSelectionChange"
				   key="a">
					   <el-table-column
					     type="selection"
					     width="40">
					   </el-table-column>
					   <el-table-column
					      type="index"
					      min-width="10%">
					    </el-table-column>
					   <el-table-column
					     prop="cnName"
					     label="政治人物中文名"
					     min-width="25%">
					   </el-table-column>
					   <el-table-column
					     prop="enName"
					     label="政治人物英文名"
					     min-width="25%">
					   </el-table-column>
					   <el-table-column
					     prop="positionName"
					     label="职位描述"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="countryfullname"
					     label="国家"
					     min-width="20%">
					   </el-table-column>					   
					   <el-table-column
					     prop="keyword"
					     label="备注信息"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="levelId"
					     label="影响等级"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     fixed="right"
					     label="操作"
					     min-width="20%">
					     <template slot-scope="scope">
					       <el-button @click="FiguresModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent="deleteRow(scope.row)"
					         type="text"
					         size="small">
					         删除
					       </el-button>
					     </template>
					   </el-table-column>
				   </el-table>
		           <el-pagination
				       @size-change="handleSizeChange"
				       @current-change="handleCurrentChange"
				       :current-page="politicsWeb.pageNum"
				       :page-sizes="[5,10,20]"
				       :page-size="politicsWeb.pageSize"
				       layout="total, sizes, prev, pager, next, jumper"
				       :total="total">
				   </el-pagination>
				   <div class="levelDescription">			    
						<h5>政治人物影响等级说明</h5>
						<el-table
					    :data="Level"
					    style="width: 100%">
						    <el-table-column
						      prop="level"
						      label="等级名称"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDesc"
						      label="等级描述"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDetails"
						      label="计算分数范围"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						     fixed="right"
						     label="操作"
						     min-width="25%">
						     <template slot-scope="scope">
						       <el-button @click="GradeUpdate(scope.row)" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
				</template>
				<!-- 行政区域 -->
				<template class="administrative" v-if="isAdministrative">
				   <h4>行政区域维度</h4>
	               <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary">批量删除</el-button>
						<el-button type="primary" @click="administrativeModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="administrative"
				   tooltip-effect="dark"
				   style="width: 100%"
				   @selection-change="handleSelectionChange"
				   key="b">
					   <el-table-column
					     type="selection"
					     width="40">
					   </el-table-column>
					   <el-table-column
					      type="index"
					      min-width="10%">
					    </el-table-column>
					   <el-table-column
					     prop="cnName"
					     label="城市名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="enName"
					     label="英文名"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="countryfullname"
					     label="国家"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="parentId"
					     label="上级名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="keyword"
					     label="备注信息"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="levelId"
					     label="影响等级"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     fixed="right"
					     label="操作"
					     min-width="20%">
					     <template slot-scope="scope">
					       <el-button @click="administrativeModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent="deleteRow(scope.row)"
					         type="text"
					         size="small">
					         删除
					       </el-button>
					     </template>
					   </el-table-column>
				   </el-table>
	               <el-pagination
				     @size-change="handleSizeChange"
				     @current-change="handleCurrentChange"
				     :current-page="politicsWeb.pageNum"
				     :page-sizes="[5,10,20]"
				     :page-size="politicsWeb.pageSize"
				     layout="total, sizes, prev, pager, next, jumper"
				     :total="total">
				   </el-pagination>
				   <div class="levelDescription">			    
					 	<h5>行政区域影响等级说明</h5>
					    <el-table
					    :data="Level"
					    style="width: 100%">
						    <el-table-column
						      prop="level"
						      label="等级名称"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDesc"
						      label="等级描述"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDetails"
						      label="计算分数范围"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						     fixed="right"
						     label="操作"
						     min-width="25%">
						     <template slot-scope="scope">
						       <el-button @click="LevelUpdate=true" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
				</template>
				<!-- 政府及政党 -->
                <template class="governmentAndPoliticalParties" v-if="isGovernmentAndPoliticalParties">
				   <h4>政府及政党</h4>
	               <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary">批量删除</el-button>
						<el-button type="primary" @click="governmentModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="politicalParties"
				   tooltip-effect="dark"
				   style="width: 100%"
				   @selection-change="handleSelectionChange"
				   key="c">
					   <el-table-column
					     type="selection"
					     width="40">
					   </el-table-column>
					   <el-table-column
					      type="index"
					      min-width="10%">
					    </el-table-column>
					   <el-table-column
					     prop="cnName"
					     label="中文名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="enName"
					     label="英文名"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="countryfullname"
					     label="国家"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="keyword"
					     label="描述"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="levelId"
					     label="影响等级"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     fixed="right"
					     label="操作"
					     min-width="20%">
					     <template slot-scope="scope">
					       <el-button @click="governmentModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent="deleteRow(scope.row)"
					         type="text"
					         size="small">
					         删除
					       </el-button>
					     </template>
					   </el-table-column>
				   </el-table>
                   <el-pagination
				     @size-change="handleSizeChange"
				     @current-change="handleCurrentChange"
				     :current-page="politicsWeb.pageNum"
				     :page-sizes="[5,10,20]"
				     :page-size="politicsWeb.pageSize"
				     layout="total, sizes, prev, pager, next, jumper"
				     :total="total">
				   </el-pagination>
				   <div class="levelDescription">			    
					 	<h5>政府及政党影响等级说明</h5>
					    <el-table
					    :data="Level"
					    style="width: 100%">
						    <el-table-column
						      prop="level"
						      label="等级名称"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDesc"
						      label="等级描述"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDetails"
						      label="计算分数范围"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						     fixed="right"
						     label="操作"
						     min-width="25%">
						     <template slot-scope="scope">
						       <el-button @click="LevelUpdate=true" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
                </template>
                 <!-- 宗教组织 -->
                <template class="religiousOrganizations" v-if="isReligiousOrganizations">
				   <h4>宗教组织</h4>
	               <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary">批量删除</el-button>
						<el-button type="primary" @click="religiousModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="religious"
				   tooltip-effect="dark"
				   style="width: 100%"
				   @selection-change="handleSelectionChange"
				   key="d">
					   <el-table-column
					     type="selection"
					     width="40">
					   </el-table-column>
					   <el-table-column
					      type="index"
					      min-width="10%">
					    </el-table-column>
					   <el-table-column
					     prop="cnName"
					     label="中文名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="enName"
					     label="英文名"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="countryfullname"
					     label="国家"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="keyword"
					     label="描述"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="levelId"
					     label="影响等级"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     fixed="right"
					     label="操作"
					     min-width="20%">
					     <template slot-scope="scope">
					       <el-button @click="religiousModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent="deleteRow(scope.row)"
					         type="text"
					         size="small">
					         删除
					       </el-button>
					     </template>
					   </el-table-column>
				   </el-table>
                   <el-pagination
				     @size-change="handleSizeChange"
				     @current-change="handleCurrentChange"
				     :current-page="politicsWeb.pageNum"
				     :page-sizes="[5,10,20]"
				     :page-size="politicsWeb.pageSize"
				     layout="total, sizes, prev, pager, next, jumper"
				     :total="total">
				   </el-pagination>
				   <div class="levelDescription">			    
					 	<h5>宗教组织影响等级说明</h5>
					    <el-table
					    :data="Level"
					    style="width: 100%">
						    <el-table-column
						      prop="level"
						      label="等级名称"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDesc"
						      label="等级描述"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDetails"
						      label="计算分数范围"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						     fixed="right"
						     label="操作"
						     min-width="25%">
						     <template slot-scope="scope">
						       <el-button @click="true" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
                </template>
                <!-- 政治会议 -->
                <template class="politicalMeetings" v-if="isPoliticalMeetings">
				   <h4>政治会议</h4>
	               <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary">批量删除</el-button>
						<el-button type="primary" @click="meetingsModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="politicalMeetings"
				   tooltip-effect="dark"
				   style="width: 100%"
				   @selection-change="handleSelectionChange"
				   key="e">
					   <el-table-column
					     type="selection"
					     width="40">
					   </el-table-column>
					   <el-table-column
					      type="index"
					      min-width="10%">
					    </el-table-column>
					   <el-table-column
					     prop="chineseName"
					     label="中文名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="englishName"
					     label="英文名"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="country"
					     label="国家"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="script"
					     label="描述"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="note"
					     label="备注信息"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="impactLevel"
					     label="影响等级"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     fixed="right"
					     label="操作"
					     min-width="20%">
					     <template slot-scope="scope">
					       <el-button @click="meetingsModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent="deleteRow(scope.row)"
					         type="text"
					         size="small">
					         删除
					       </el-button>
					     </template>
					   </el-table-column>
				   </el-table>
                   <el-pagination
				     @size-change="handleSizeChange"
				     @current-change="handleCurrentChange"
				     :current-page="politicsWeb.pageNum"
				     :page-sizes="[5,10,20]"
				     :page-size="politicsWeb.pageSize"
				     layout="total, sizes, prev, pager, next, jumper"
				     :total="total">
				   </el-pagination>
				   <div class="levelDescription">			    
					 	<h5>政治会议影响等级说明</h5>
					    <el-table
					    :data="Level"
					    style="width: 100%">
						    <el-table-column
						      prop="level"
						      label="等级名称"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDesc"
						      label="等级描述"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						      prop="levelDetails"
						      label="计算分数范围"
						      min-width="25%">
						    </el-table-column>
						    <el-table-column
						     fixed="right"
						     label="操作"
						     min-width="25%">
						     <template slot-scope="scope">
						       <el-button @click="LevelUpdate=true" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
                </template>
		   </el-tab-pane>
		   <el-tab-pane label="分值调整">
		  	   <h4>维度分值调整（%）</h4>
		  	   <span></span>
		  	   <el-form ref="form" :model="scoreAdjustment" label-width="150px">
			     <el-form-item label="政治人物">
			       <el-input v-model="scoreAdjustment.governmentFigures"></el-input>
			     </el-form-item>
			     <el-form-item label="行政区域">
			       <el-input v-model="scoreAdjustment.administrative"></el-input>
			     </el-form-item>
			     <el-form-item label="政府及政党">
			       <el-input v-model="scoreAdjustment.government"></el-input>
			     </el-form-item>
			     <el-form-item label="宗教组织">
			       <el-input v-model="scoreAdjustment.religious"></el-input>
			     </el-form-item>
			     <el-form-item label="政治会议">
			       <el-input v-model="scoreAdjustment.politicalMeetings"></el-input>
			     </el-form-item>
			   </el-form>
			   <el-table
			    :data="levelDescription"
			    border
			    style="width: 100%">
				    <el-table-column
				      prop="name"
				      label="等级名称"
				      min-width="25%">
				    </el-table-column>
				    <el-table-column
				      prop="script"
				      label="等级描述"
				      min-width="25%">
				    </el-table-column>
				    <el-table-column
				      prop="score"
				      label="计算分数范围"
				      min-width="25%">
				    </el-table-column>
				    <el-table-column
				     fixed="right"
				     label="操作"
				     min-width="25%">
				     <template slot-scope="scope">
				       <el-button @click="TotalLevelUpdate=true" type="text">修改</el-button>
				     </template>
				   </el-table-column>
			  </el-table>
              <el-button type="primary">确认</el-button>
		   </el-tab-pane>
		</el-tabs>
		<!-- 批量调级 -->
		<el-dialog title="批量调级" :visible.sync="batchAdjustable">
		  <el-form :model="BatchAdjustable">
		    <el-form-item label="等级" :label-width="formLabelWidth">
		      <el-select v-model="BatchAdjustable.levelId" placeholder="请选择等级">
		      	  <el-option
				      v-for="item in region"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				  </el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="batchAdjustable = false">取 消</el-button>
		    <el-button type="primary" @click="politicsUpdate">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 添加与修改是一个 -->
		<!-- 政府人物的添加与修改 -->
		<el-dialog :visible.sync="FiguresModify">
		  <el-form :model="FiguresUpdate">
		  	<el-form-item label="政治人物中文名" :label-width="formLabelWidth">
		      <el-input v-model="FiguresUpdate.chineseName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="政治人物英文名" :label-width="formLabelWidth">
		      <el-input v-model="FiguresUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="职位描述" :label-width="formLabelWidth">
		      <el-input v-model="FiguresUpdate.jobDescription" auto-complete="off"></el-input>
		    </el-form-item>  
		  	<el-form-item label="备注信息" :label-width="formLabelWidth">
		      <el-input v-model="FiguresUpdate.note" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="FiguresUpdate.impactLevel" placeholder="请选择等级">
		      	  <el-option
				      v-for="item in region"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				  </el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="FiguresModify = false">取 消</el-button>
		    <el-button type="primary" @click="handleClick()">确 定</el-button>
		  </div>
		</el-dialog>
		  <!-- 行政区域的修改与添加 -->
		<el-dialog :visible.sync="administrativeModify">
		  <el-form :model="administrativeUpdate">
		  	<el-form-item label="城市名称" :label-width="formLabelWidth">
		      <el-input v-model="administrativeUpdate.cityName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="英文名" :label-width="formLabelWidth">
		      <el-input v-model="administrativeUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="国家" :label-width="formLabelWidth">
		      <el-input v-model="administrativeUpdate.country" auto-complete="off"></el-input>
		    </el-form-item>  
		  	<el-form-item label="上级名称" :label-width="formLabelWidth">
		      <el-input v-model="administrativeUpdate.parentNode" auto-complete="off"></el-input>
		    </el-form-item>  
		  	<el-form-item label="备注信息" :label-width="formLabelWidth">
		      <el-input v-model="administrativeUpdate.note" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="administrativeUpdate.impactLevel" placeholder="请选择等级">
		      	  <el-option
				      v-for="item in region"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				  </el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="administrativeModify = false">取 消</el-button>
		    <el-button type="primary" @click="administrativeModify=false">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 政府与政党的修改与添加 -->
		<el-dialog :visible.sync="governmentModify">
		  <el-form :model="governmentUpdate">
		  	<el-form-item label="中文名" :label-width="formLabelWidth">
		      <el-input v-model="governmentUpdate.chineseName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="英文名" :label-width="formLabelWidth">
		      <el-input v-model="governmentUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="国家" :label-width="formLabelWidth">
		      <el-input v-model="governmentUpdate.coutry" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="描述" :label-width="formLabelWidth">
		      <el-input v-model="governmentUpdate.script" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="governmentUpdate.impactLevel" placeholder="请选择等级">
		      	  <el-option
				      v-for="item in region"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				  </el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="governmentModify = false">取 消</el-button>
		    <el-button type="primary" @click="handleClick()">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 宗教组织的添加与修改 -->
		<el-dialog :visible.sync="religiousModify">
		  <el-form :model="religiousUpdate">
		  	<el-form-item label="中文名" :label-width="formLabelWidth">
		      <el-input v-model="religiousUpdate.chineseName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="英文名" :label-width="formLabelWidth">
		      <el-input v-model="religiousUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="国家" :label-width="formLabelWidth">
		      <el-input v-model="religiousUpdate.coutry" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="描述" :label-width="formLabelWidth">
		      <el-input v-model="religiousUpdate.script" auto-complete="off"></el-input>
		    </el-form-item>  
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="religiousUpdate.impactLevel" placeholder="请选择等级">
		      	  <el-option
				      v-for="item in region"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				  </el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="religiousModify = false">取 消</el-button>
		    <el-button type="primary" @click="handleClick()">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 政治会议的添加与修改 -->
		<el-dialog :visible.sync="meetingsModify">
		  <el-form :model="meetingsUpdate">
		  	<el-form-item label="中文名" :label-width="formLabelWidth">
		      <el-input v-model="meetingsUpdate.chineseName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="英文名" :label-width="formLabelWidth">
		      <el-input v-model="meetingsUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="国家" :label-width="formLabelWidth">
		      <el-input v-model="meetingsUpdate.coutry" auto-complete="off"></el-input>
		    </el-form-item>		    
		  	<el-form-item label="描述" :label-width="formLabelWidth">
		      <el-input v-model="meetingsUpdate.script" auto-complete="off"></el-input>
		    </el-form-item>  
		  	<el-form-item label="备注信息" :label-width="formLabelWidth">
		      <el-input v-model="meetingsUpdate.note" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="meetingsUpdate.impactLevel" placeholder="请选择等级">
		      	  <el-option
				      v-for="item in region"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				  </el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="meetingsModify = false">取 消</el-button>
		    <el-button type="primary" @click="handleClick()">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 等级修改 -->
		<el-dialog title="等级修改" :visible.sync="LevelUpdate">
		  <el-form :model="levelUpdate">
		    <el-form-item label="等级描述" :label-width="formLabelWidth">
		      <el-input v-model="levelUpdate.levelDesc" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="计算分数范围" :label-width="formLabelWidth">
		      <el-input v-model="levelUpdate.levelDetails" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="LevelUpdate = false">取 消</el-button>
		    <el-button type="primary" @click="gradeUpdate">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 总等级修改 -->
		<el-dialog title="总等级修改" :visible.sync="TotalLevelUpdate">
		  <el-form :model="totalLevelUpdate">
		    <el-form-item label="等级描述" :label-width="formLabelWidth">
		      <el-input v-model="totalLevelUpdate.script" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="计算分数范围" :label-width="formLabelWidth">
		      <el-input v-model="totalLevelUpdate.score" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="TotalLevelUpdate = false">取 消</el-button>
		    <el-button type="primary" @click="TotalLevelUpdate = false">确 定</el-button>
		  </div>
		</el-dialog>
	</div>	
</template>

<script>
    import {findByParam,deleteByIds,updateByIds} from '@/api/eventManagement/politicalEvents'
    import {getCountryAll,FindByPage,updateLevel} from '@/api/common'
	export default {
		data(){
         return {
	           politicsWeb:{
	             countryId:0,
                 dimensionality:0,
                 levelId:0,
                 pageSize:5,
                 pageNum:1
	           },
	           country: [],
			   dimension: [{
			      		  value: 1,
			      		  label: '政治人物'
			      		 }, {
			      		  value: 2,
			      		  label: '行政区域'
			      		 }, {
			      		  value: 3,
			      		  label: '政府及政党'
			      		 }, {
			      		  value: 4,
			      		  label: '宗教组织'
			      		 }, {
			      		  value: 5,
			      		  label: '政治会议'
			      		}],
		       level: [{
				         	value:0,
				         	label:'全部'
				         },{
				           value: 1,
				           label: '等级一'
			             },{
				           value: 2,
				           label: '等级二'
			             },{
				           value: 3,
			               label: '等级三'
			             },{
				           value: 4,
				           label: '等级四'
			             },{
			               value: 5,
			               label: '等级五'
			             },{
			               value: 6,
			               label: '等级六'
			             },{
			               value: 7,
			               label: '等级七'
			             },{
			               value: 8,
			               label: '等级八'
			             },{
			               value: 9,
			               label: '等级九'
			             },{
			               value: 10,
			               label: '等级十'
			             }
			    ],
		       region: [{
				           value: 1,
				           label: '等级一'
			             },{
				           value: 2,
				           label: '等级二'
			             },{
				           value: 3,
			               label: '等级三'
			             },{
				           value: 4,
				           label: '等级四'
			             },{
			               value: 5,
			               label: '等级五'
			             },{
			               value: 6,
			               label: '等级六'
			             },{
			               value: 7,
			               label: '等级七'
			             },{
			               value: 8,
			               label: '等级八'
			             },{
			               value: 9,
			               label: '等级九'
			             },{
			               value: 10,
			               label: '等级十'
			             }
			    ],
			    total:0,
			   politicalFigures:[],
 		       administrative:[],
 		       politicalParties:[],
 		       religious:[],
               politicalMeetings:[],
               Level:[],
               bulkDelete:{
               	   ids:[],
               	   dimensionality:1
               },
               BatchAdjustable:{
                   levelId:1,
               	   ids:[],
               	   dimensionality:1
               },
               multipleTable:[],
               isPoliticalFigures:false,
			   isAdministrative:false,
			   isGovernmentAndPoliticalParties:false,
			   isReligiousOrganizations:false,
			   isPoliticalMeetings:false,
 		       scoreAdjustment:{
 		       	   governmentFigures:'',
 		       	   administrative:'',
 		       	   government:'',
 		       	   religious:'',
 		       	   politicalMeetings:''
 		       },
               levelDescription:[{
	               	name:'',
	               	script:'',
	               	score:''
               }],
               formLabelWidth:'120px',
               batchAdjustable:false,
               FiguresModify:false,
               FiguresUpdate:{
 		            	chineseName:'',
 		            	englishName:'',
 		            	jobDescription:'',
 		            	note:'',
 		            	impactLevel:''
               },
               administrativeModify:false,
 		       administrativeUpdate:{
 		       	          cityName:'',
 		            	  englishName:'',
 		            	  country:'',
 		            	  parentNode:'',
 		            	  note:'',
 		            	  impactLevel:''
 		            	},
               governmentModify:false,
               governmentUpdate:{
 		            	chineseName:'',
 		            	englishName:'',
 		            	country:'',
 		            	script:'',
 		            	impactLevel:''
               },
               religiousModify:false,
               religiousUpdate:{
 		            	chineseName:'',
 		            	englishName:'',
 		            	country:'',
 		            	script:'',
 		            	impactLevel:''
               },
               meetingsModify:false,
               meetingsUpdate:{
 		            	chineseName:'',
 		            	englishName:'',
 		            	country:'',
 		            	script:'',
 		            	note:'',
 		            	impactLevel:''
               },  
               LevelUpdate:false,
               levelUpdate:{},
               TotalLevelUpdate:false,
               totalLevelUpdate:{
               	    script:'',
	               	score:''
               }
		   } 
		},
		created(){
			this.politicsWeb={
	  	             countryId:92,
	                 dimensionality:1,
	                 levelId:0,
	                 pageSize:5,
	                 pageNum:1
				 }
            this.listloading()
		},
		methods:{
			// 初始化
			listloading(){
                 switch(this.politicsWeb.dimensionality){
                 	 case 1:
                 	 this.isPoliticalFigures=true
                 	 this.isAdministrative=false
                 	 this.isGovernmentAndPoliticalParties=false
                 	 this.isReligiousOrganizations=false
                 	 this.isPoliticalMeetings=false
                 	 break;
                 	 case 2:
                 	 this.isPoliticalFigures=false
                 	 this.isAdministrative=true
                 	 this.isGovernmentAndPoliticalParties=false
                 	 this.isReligiousOrganizations=false
                 	 this.isPoliticalMeetings=false
                 	 break;
                 	 case 3:
                 	 this.isPoliticalFigures=false
                 	 this.isAdministrative=false
                 	 this.isGovernmentAndPoliticalParties=true
                 	 this.isReligiousOrganizations=false
                 	 this.isPoliticalMeetings=false
                 	 break;
                 	 case 4:
                 	 this.isPoliticalFigures=false
                 	 this.isAdministrative=false
                 	 this.isGovernmentAndPoliticalParties=false
                 	 this.isReligiousOrganizations=true
                 	 this.isPoliticalMeetings=false
                 	 break;
                 	 default:
                 	 this.isPoliticalFigures=false
                 	 this.isAdministrative=false
                 	 this.isGovernmentAndPoliticalParties=false
                 	 this.isReligiousOrganizations=false
                 	 this.isPoliticalMeetings=true
                 }
                 findByParam(this.politicsWeb).then(res =>{
                 	this.total=res.data.total
                 	switch(this.politicsWeb.dimensionality){
                 		case 1:
                 		this.politicalFigures=res.data.list
                 		break;
                 		case 2:
                 		this.administrative=res.data.list
                 		break;
                 		case 3:
                        this.politicalParties=res.data.list
                 		break;
                 		case 4:
                        this.religious=res.data.list
                 		break;
                 		default:
                 		this.politicalMeetings=res.data.list
                 	}
                 })
                 this.findCountry()
                 this.findLevel()
			},
			// 查询国家
			findCountry(){
				getCountryAll().then(res => {
					this.country=res.data
				})
			},
             // 获取等级
            findLevel(){
            	FindByPage(this.politicsWeb).then(res=>{
                    this.Level=res.data.list
					this.Level.map(function (value, index) {
					     value.level= '等级' + value.level
					});
            	})
            },
			handleSizeChange(val) {
	          this.politicsWeb.pageSize=val
              this.listloading()
	        },
	        handleCurrentChange(val) {
                this.politicsWeb.pageNum=val
                this.listloading()
	        },
	        handleClick(row) {
		        this.FiguresModify=false
		      },
		    deleteRow(row) {
		        
		     },
	        handleSelectionChange(val){
	                this.multipleTable=val
			},
			// 批量调级
			politicsUpdate(){
				this.batchAdjustable=false
				this.BatchAdjustable.dimensionality=this.politicsWeb.dimensionality
				for(let i=0; i<this.multipleTable.length;i++){
					this.BatchAdjustable.ids.push(this.multipleTable[i].id)
				}
                updateByIds(this.BatchAdjustable).then(res =>{
                	this.listloading()
                })
			},
			// 批量删除bulkDelete
			BulkDelete(){
				this.bulkDelete.dimensionality=this.politicsWeb.dimensionality
				for(let i=0; i<this.multipleTable.length;i++){
					this.bulkDelete.ids.push(this.multipleTable[i].id)
				}
				this.$confirm('是否删除',{  
				          confirmButtonText:'确定',      
				          cancelButtonText:'取消',      
				          center:true
				        }).then(()=>{  
                           deleteByIds(this.bulkDelete).then(res =>{
                           	  this.listloading()
                           })
				        })
			},
			// 打开修改框
			GradeUpdate(row){
				this.levelUpdate=row
				this.LevelUpdate=true
			},
			// 修改等级
			gradeUpdate(){
               this.levelUpdate.level=this.levelUpdate.level.slice(2)
               updateLevel(this.levelUpdate).then(res => {
               	this.listloading()
               })
               this.LevelUpdate = false
			}
        }
}	
</script>

<style scoped lang="less">

</style>
