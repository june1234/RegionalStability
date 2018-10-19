<template>
	<div class="counterterrorism">
		<h2 class="title">反恐事件参数设置</h2>
		<el-tabs type="border-card">
		   <el-tab-pane label="维度调整">
		  	   <h4>事件名称</h4>
		  	   <el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="维度">
					  <el-select v-model="formInline.dimensionality" placeholder="选择维度">
					     <el-option
						      v-for="item in dimension"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
					     </el-option>
					  </el-select>
					</el-form-item>
					<el-form-item label="国家" v-if="this.formInline.dimensionality == 9">
						<el-select v-model="formInline.countryId" placeholder="选择国家" >
					        <el-option
						      v-for="item in country"
						      :key="item.countrykeys"
						      :label="item.internetname"
						      :value="item.number">
						    </el-option>
					    </el-select>
					</el-form-item>
					<el-form-item label="等级" v-if="this.formInline.dimensionality != 6">
					  <el-select v-model="formInline.levelId" placeholder="选择等级">
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
				<!-- 伤亡人数 -->
				<template class="casualties" v-if="isCasualties">
				   <h4>伤亡人数</h4>
				   <el-table
				   ref="multipleTable"
				   :data="casualties"
				   tooltip-effect="dark"
				   style="width: 100%"
				   key="a">
					   <el-table-column
					     prop="level"
					     label="等级名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="levelDesc"
					     label="等级描述"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="dieStart"
					     label="死亡人数范围"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="hurtStart"
					     label="受伤人数范围"
					     min-width="25%">
					   </el-table-column>
					   <el-table-column
					     fixed="right"
					     label="操作"
					     min-width="20%">
					     <template slot-scope="scope">
					       <el-button @click="casualtiesModify=true" type="text" size="small">修改</el-button>
					     </template>
					   </el-table-column>
				   </el-table>
				</template>
				<!-- 武器等级 -->
				<template class="weapons" v-if="isWeapons">
				   <h4>武器等级</h4>
	               <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary" @click="BulkDelete">批量删除</el-button>
						<el-button type="primary" @click="weaponsModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="Weapons"
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
					     prop="weaponZhName"
					     label="武器中文名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="weaponEnName"
					     label="武器英文名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="weaponDesc"
					     label="武器的描述"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="weaponRemark"
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
					       <el-button @click="weaponsModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent=""
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
				     :current-page="formInline.pageNum"
				     :page-sizes="[5,10,20]"
				     :page-size="formInline.pageSize"
				     layout="total, sizes, prev, pager, next, jumper"
				     :total="total">
				   </el-pagination>
				   <div class="levelDescription">			    
					 	<h5>武器等级影响等级说明</h5>
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
						       <el-button @click="GradeUpdate" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
				</template>
				<!-- 恐怖组织 -->
                <template class="terroristOrganizations" v-if="isTerroristOrganizations">
				   <h4>恐怖组织</h4>
	               <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary" @click="BulkDelete">批量删除</el-button>
						<el-button type="primary" @click="terroristModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="terroristOrganizations"
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
					     prop="terrorZhName"
					     label="组织中文名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="terrorEnName"
					     label="组织英文名"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="terrorRemark"
					     label="描述"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="terrorRemark"
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
					       <el-button @click="terroristModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent=""
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
				     :current-page="formInline.pageNum"
				     :page-sizes="[5,10,20]"
				     :page-size="formInline.pageSize"
				     layout="total, sizes, prev, pager, next, jumper"
				     :total="total">
				   </el-pagination>
				   <div class="levelDescription">			    
					 	<h5>恐怖组织影响等级说明</h5>
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
						       <el-button @click="GradeUpdate" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
                </template>
                 <!-- 地理位置 -->
                <template class="location" v-if="isLocation">
				   <h4>地理位置</h4>
	               <div class="btn">
						<el-button type="primary" @click="batchAdjustable=true">批量调级</el-button>
						<el-button type="primary" @click="BulkDelete">批量删除</el-button>
						<el-button type="primary" @click="locationModify=true">添加</el-button>
				   </div>
				   <el-table
				   ref="multipleTable"
				   :data="location"
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
					     prop="areaZhName"
					     label="城市名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="areaEnName"
					     label="英文名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="superiorName"
					     label="上级名称"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="countryfullname"
					     label="国家"
					     min-width="20%">
					   </el-table-column>
					   <el-table-column
					     prop="areaRemark"
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
					       <el-button @click="locationModify=true" type="text" size="small">修改</el-button>
					        <el-button
					         @click.native.prevent=""
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
				     :current-page="formInline.pageNum"
				     :page-sizes="[5,10,20]"
				     :page-size="formInline.pageSize"
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
						       <el-button @click="GradeUpdate" type="text">修改</el-button>
						     </template>
						   </el-table-column>
					  </el-table>
				   </div>
                </template>
		   </el-tab-pane>
		   <el-tab-pane label="分值调整">
		  	   <h4>维度分值调整（%）</h4>
		  	   <el-form ref="form" :model="scoreAdjustment" label-width="150px">
			     <el-form-item label="伤亡人数">
			       <el-input v-model="scoreAdjustment.casualties"></el-input>
			     </el-form-item>
			     <el-form-item label="武器等级">
			       <el-input v-model="scoreAdjustment.weapons"></el-input>
			     </el-form-item>
			     <el-form-item label="恐怖组织">
			       <el-input v-model="scoreAdjustment.terroristOrganizations"></el-input>
			     </el-form-item>
			     <el-form-item label="地理位置">
			       <el-input v-model="scoreAdjustment.location"></el-input>
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
		  <el-form :model="batch">
		    <el-form-item label="等级" :label-width="formLabelWidth">
		      <el-select v-model="batch.levelId" placeholder="请选择等级">
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
		    <el-button type="primary" @click="ctuUpdate">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 添加与修改 -->
		<!-- 伤亡人数的添加与修改 -->
		<el-dialog :visible.sync="casualtiesModify">
		  <el-form :model="casualtiesUpdate">
		  	<el-form-item label="等级描述" :label-width="formLabelWidth">
		      <el-input v-model="casualtiesUpdate.script" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="死亡人数范围" :label-width="formLabelWidth">
		      <el-input v-model="casualtiesUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="受伤人数范围" :label-width="formLabelWidth">
		      <el-input v-model="casualtiesUpdate.jobDescription" auto-complete="off"></el-input>
		    </el-form-item>  
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="casualtiesModify = false">取 消</el-button>
		    <el-button type="primary" @click="casualtiesModify=false">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 武器等级的添加与修改 -->
		<el-dialog :visible.sync="weaponsModify">
		  <el-form :model="weaponsUpdate">
		  	<el-form-item label="武器中文名" :label-width="formLabelWidth">
		      <el-input v-model="weaponsUpdate.chineseName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="武器英文名" :label-width="formLabelWidth">
		      <el-input v-model="weaponsUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="武器描述" :label-width="formLabelWidth">
		      <el-input v-model="weaponsUpdate.jobDescription" auto-complete="off"></el-input>
		    </el-form-item>  
		  	<el-form-item label="备注信息" :label-width="formLabelWidth">
		      <el-input v-model="weaponsUpdate.note" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="weaponsUpdate.impactLevel" placeholder="请选择等级">
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
		    <el-button @click="weaponsModify = false">取 消</el-button>
		    <el-button type="primary" @click="weaponsModify=false">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 恐怖组织的添加与修改 -->
		<el-dialog :visible.sync="terroristModify">
		  <el-form :model="terroristUpdate">
		  	<el-form-item label="组织中文名" :label-width="formLabelWidth">
		      <el-input v-model="terroristUpdate.chineseName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="组织英文名" :label-width="formLabelWidth">
		      <el-input v-model="terroristUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="描述" :label-width="formLabelWidth">
		      <el-input v-model="terroristUpdate.script" auto-complete="off"></el-input>
		    </el-form-item>  
		  	<el-form-item label="备注信息" :label-width="formLabelWidth">
		      <el-input v-model="terroristUpdate.note" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="terroristUpdate.impactLevel" placeholder="请选择等级">
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
		    <el-button @click="terroristModify = false">取 消</el-button>
		    <el-button type="primary" @click="terroristModify=false">确 定</el-button>
		  </div>
		</el-dialog>
		<!-- 地理位置的添加与修改 -->
		<el-dialog :visible.sync="locationModify">
		  <el-form :model="locationUpdate">
		  	<el-form-item label="城市名称" :label-width="formLabelWidth">
		      <el-input v-model="locationUpdate.cityName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="英文名" :label-width="formLabelWidth">
		      <el-input v-model="locationUpdate.englishName" auto-complete="off"></el-input>
		    </el-form-item>
		  	<el-form-item label="上级名称" :label-width="formLabelWidth">
		      <el-input v-model="locationUpdate.superiorName" auto-complete="off"></el-input>
		    </el-form-item>  
		  	<el-form-item label="国家" :label-width="formLabelWidth">
		      <el-input v-model="locationUpdate.country" auto-complete="off"></el-input>
		    </el-form-item>  		    
		  	<el-form-item label="备注信息" :label-width="formLabelWidth">
		      <el-input v-model="locationUpdate.note" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="影响等级" :label-width="formLabelWidth">
		      <el-select v-model="locationUpdate.impactLevel" placeholder="请选择等级">
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
		    <el-button @click="locationModify = false">取 消</el-button>
		    <el-button type="primary" @click="locationModify=false">确 定</el-button>
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
    import {findByParam,updateByIds,deleteByIds} from '@/api/eventManagement/CounterTerrorismIncidents'
    import {getCountryAll,FindByPage,updateLevel} from '@/api/common'
	export default {
		data(){
         return {
              formInline:{
	             countryId:0,
                 dimensionality:0,
                 levelId:0,
                 pageSize:5,
                 pageNum:1
	           },
	           country: [],
			   dimension: [{
			      		  value: 6,
			      		  label: '伤亡人数'
			      		 }, {
			      		  value: 7,
			      		  label: '武器等级'
			      		 }, {
			      		  value: 8,
			      		  label: '恐怖组织'
			      		 }, {
			      		  value: 9,
			      		  label: '地理位置'
			      		 }
			    ],
		       level: [{
				           value: 0,
				           label: '全部'
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
               casualties:[],
               total:0,
               Weapons:[],
               terroristOrganizations:[],
               location:[],
               scoreAdjustment:{
               	  casualties:'',
               	  Weapons:'',
               	  terroristOrganizations:'',
               	  location:''
               },
               levelDescription:[{
               	   name:'',
               	   script:'',
               	   score:''
               }],
               multipleTable:[],
               isCasualties:false,
               isWeapons:false,
               isTerroristOrganizations:false,
               isLocation:false,
               isLever:true,
               formLabelWidth:'120px',
               batchAdjustable:false,
               batch:{
               	    dimensionality:0,
               	    levelId:1,
               	    ids:[]
                },
               bulkDelete:{
               	   ids:[],
               	   dimensionality:1
               },
               Level:[],
               casualtiesModify:false,
               casualtiesUpdate:{
	               	name:'',
	               	script:'',
	               	deathScale:'',
	               	injuredScale:''
               },
               weaponsModify:false,
               weaponsUpdate:{
               	   chineseName:'',
               	   englishName:'',
               	   script:'',
               	   note:'',
               	   impactLevel:''
               },
               terroristModify:false,
               terroristUpdate:{
               	   chineseName:'',
               	   englishName:'',
               	   script:'',
               	   note:'',
               	   impactLevel:''
               },
               locationModify:false,
               locationUpdate:{
               	   cityName:'',
               	   englishName:'',
               	   superiorName:'',
               	   country:'',
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
           this.formInline = {
	             countryId:92,
                 dimensionality:6,
                 levelId:0
           }
           this.listloading()
		},
		methods:{
			// 初始化
			listloading(){
               switch(this.formInline.dimensionality){
               	  case 6:
		               this.isCasualties=true
		               this.isWeapons=false
		               this.isTerroristOrganizations=false
		               this.isLocation=false
		               this.isLever=false
               	  break;
               	  case 7:
		               this.isCasualties=false
		               this.isWeapons=true
		               this.isTerroristOrganizations=false
		               this.isLocation=false
		               this.isLever=true
               	  break;
               	  case 8:
		               this.isCasualties=false
		               this.isWeapons=false
		               this.isTerroristOrganizations=true
		               this.isLocation=false
		               this.isLever=true
               	  break;
               	  default:
		               this.isCasualties=false
		               this.isWeapons=false
		               this.isTerroristOrganizations=false
		               this.isLocation=true
		               this.isLever=true
               }
               findByParam(this.formInline).then(res => {
               	    this.total=res.data.total 
               	    switch(this.formInline.dimensionality){
               	    	case 6:
               	    	 this.casualties=res.data.list
							this.casualties.map(function (value, index) {
							     value.level= '等级' + value.level
							})
               	    	break;
               	    	case 7:
               	    	this.Weapons=res.data.list
               	    	break;
               	    	case 8:
               	    	 this.terroristOrganizations=res.data.list
               	    	break;
               	    	default:
                         this.location=res.data.list
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
			change(){

			},
			handleSizeChange(val) {
				this.formInline.pageSize=val
				this.listloading()
	        },
	        handleCurrentChange(val) {
	        	this.formInline.pageNum=val
	        	this.listloading()
	        },
	        handleSelectionChange(val){
                this.multipleTable=val
			},
			// 批量调级 dimensionality:0,levelId:0,ids:[]
			ctuUpdate(){
				this.batchAdjustable=false
				this.batch.dimensionality=this.formInline.dimensionality
				for(let i=0; i<this.multipleTable.length;i++){
					this.batch.ids.push(this.multipleTable[i].id)
				}
                updateByIds(this.batch).then(res =>{
                	this.listloading()
                })
			},
			// 批量删除 bulkDelete:{ids:[],dimensionality:1},
			BulkDelete(){
              this.bulkDelete.dimensionality=this.formInline.dimensionality
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
			// 等级查询
            findLevel(){
            	FindByPage(this.formInline).then(res=>{
                    this.Level=res.data.list
					this.Level.map(function (value, index){
					     value.level= '等级' + value.level
					});
            	})
            },
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
