<template>
  <div class="PoliticsEventAnalysis">
    <h1 class="title">政治事件分析</h1>
    <!-- form表单查询条件 -->
    <el-form
      ref="form"
      :model="politicsFormData"
      label-width="100px"
    >
      <el-form-item label="选择国家">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          style="margin-bottom:10px;"
        >全选</el-checkbox>
        <el-checkbox-group
          v-model="politicsFormData.Country"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox-button
            v-for="country in countrys"
            :label="country"
            :key="country"
          >
            {{country}}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-date-picker
          v-model="politicsFormData.beginDate"
          type="date"
          placeholder="请输入开始时间"
        >
        </el-date-picker>
        <el-date-picker
          v-model="politicsFormData.endDate"
          type="date"
          placeholder="请输入结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="selectPolitics"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 政治事件统计 -->
    <div class="statistics">
      <div class="explain">
        <h5>日本</h5>
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon">
                <i
                  class="el-icon-news"
                  style="background-color:#fecd77;"
                ></i>
              </span>
              <p class="titl">总量：<span>1000</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">9分以上：<span>200</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以上：<span>600</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以下：<span>200</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <hot-charts></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
           <bar-charts></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts></line-charts>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <div class="explain">
        <h5>韩国</h5>
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon">
                <i
                  class="el-icon-news"
                  style="background-color:#fecd77;"
                ></i>
              </span>
              <p class="titl">总量：<span>1000</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">9分以上：<span>200</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以上：<span>600</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以下：<span>200</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <hot-charts></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
           <bar-charts></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts></line-charts>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <div class="explain">
        <h5>印度</h5>
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon">
                <i
                  class="el-icon-news"
                  style="background-color:#fecd77;"
                ></i>
              </span>
              <p class="titl">总量：<span>1000</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">9分以上：<span>200</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以上：<span>600</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以下：<span>200</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <hot-charts></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
           <bar-charts></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts></line-charts>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <div class="explain">
        <h5>朝鲜</h5>
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon">
                <i
                  class="el-icon-news"
                  style="background-color:#fecd77;"
                ></i>
              </span>
              <p class="titl">总量：<span>1000</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">9分以上：<span>200</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以上：<span>600</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以下：<span>200</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <hot-charts></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
           <bar-charts></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts></line-charts>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <div class="explain">
        <h5>中国</h5>
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon">
                <i
                  class="el-icon-news"
                  style="background-color:#fecd77;"
                ></i>
              </span>
              <p class="titl">总量：<span>1000</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">9分以上：<span>200</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以上：<span>600</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以下：<span>200</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <hot-charts></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
           <bar-charts></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts></line-charts>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <div class="explain">
        <h5>美国</h5>
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon">
                <i
                  class="el-icon-news"
                  style="background-color:#fecd77;"
                ></i>
              </span>
              <p class="titl">总量：<span>1000</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">9分以上：<span>200</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以上：<span>600</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以下：<span>200</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <hot-charts></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
           <bar-charts></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts></line-charts>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <div class="explain">
        <h5>巴基斯坦</h5>
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon">
                <i
                  class="el-icon-news"
                  style="background-color:#fecd77;"
                ></i>
              </span>
              <p class="titl">总量：<span>1000</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">9分以上：<span>200</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以上：<span>600</span></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <span class="icon"><i class="el-icon-news"></i></span>
              <p class="titl">6分以下：<span>200</span></p>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <hot-charts></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
           <bar-charts></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts></line-charts>
        </el-col>
      </el-row>
    </div>
    <!-- 政治事件列表 -->
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content">
            <el-table
              :data="politicsTableData"
              border
              style="width:100%;"
            >
              <el-table-column
                prop="eventName"
                label="事件名称"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="eventTime"
                label="事件发生时间"
                :formatter="formatterTime"
                align="center"
                min-width="100%"
              >
              </el-table-column>
              <el-table-column
                prop="countryFullName"
                label="国家"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="people"
                label="人物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="建筑物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="grade"
                label="等级"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="情感分数"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="影响力"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="operate"
                label="操作"
                align="center"
                min-width="100%"
                fixed="right"
              >
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    @click="showPoliticsEventUpdateDialog(scope.row)"
                  >修改</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button
              @click="more"
              class="more"
            >更多</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <hot-charts style="background-color:#fff;margin-top:20px;"></hot-charts>
    <!-- 政治事件修改dialog-->
    <el-dialog
      title="政治事件修改"
      style="text-align:center;"
      :visible.sync="politicsEventUpdateDialog"
      width="35%"
    >
      <el-form
        :model="politicsEvent"
        label-width="100px"
        class="PoliticsForm"
      >
        <el-form-item label="事件名称">
          <el-input
            v-model="politicsEvent.eventName"
            placeholder="请修改事件名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="事件发生时间">
          <el-date-picker
            type="date"
            v-model="politicsEvent.eventTime"
            palceholder="请输入时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="国家">
          <el-input
            v-model="politicsEvent.countryFullName"
            palceholder="请输入国家"
          ></el-input>
        </el-form-item>
        <el-form-item label="人物">
          <el-input
            v-model="politicsEvent.people"
            palceholder="请输入人物"
          ></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-select
            v-model="politicsEvent.grade"
            placeholder="请选择等级"
          >
          </el-select>
        </el-form-item>
        <el-form-item label="建筑物">
          <el-input v-model="politicsEvent.infrastructure"></el-input>
        </el-form-item>
        <el-form-item label="情感分数">
          <el-input v-model="politicsEvent.militaryfacor"></el-input>
        </el-form-item>
        <el-form-item label="影响力">
          <el-input v-model="politicsEvent.naturefactor"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="savePoliticsEvent"
          >确认</el-button>
          <el-button @click="canclePoliticsEvent">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { formatterDateStr, formatterDate } from "@/utils/filter";
import { getPoliticsEventListByType } from "@/api/politics/PoliticsEventAnalysis";
import hotCharts from '@/components/layout/general/charts/hot.vue'
import barCharts from '@/components/layout/general/charts/lineBar.vue'
import lineCharts from '@/components/layout/general/charts/line.vue'
export default {
  
  data() {
    return {
      politicsEventUpdateDialog: false,
      //政治事件form表单查询条件
      politicsFormData: {
        Country: ["印度"],
        type: 1,
        eventTime: "",
        endTime: ""
      },
      //政治事件修改dialog表单数据
      politicsEvent: {
        id: "",
        nid: "",
        eventName: "",
        eventTime: "",
        countryId: "",
        people: "",
        grade: "",
        infrastructure: "",
        militaryfacor: "",
        naturefactor: ""
      },
      //时间范围
      timeRange: "",
      //政治事件table数据
      politicsTableData: [],
      countrys: ["日本", "朝鲜", "印度", "韩国", "中国", "美国", "巴基斯坦"],
      isIndeterminate: false,
      checkAll: false,
    };
  },
  created() {
    this.loadPoliticsEventPageList();
  },
  components:{
    hotCharts,
    barCharts,
    lineCharts
  },
  methods: {
    //获取列表信息
    loadPoliticsEventPageList() {
      getPoliticsEventListByType(this.politicsFormData).then(res => {
        this.politicsTableData = res.data.list;
      });
    },
    //格式化时间
    formatterTime(val) {
      return formatterDateStr(val.eventTime);
    },
    //查询
    selectPolitics() {
      if (this.politicsFormData.eventTime != "") {
        this.politicsFormData.eventTime = formatterDate(
          this.politicsFormData.eventTime
        );
      }
      if (this.politicsFormData.endTime != "") {
        this.politicsFormData.endTime = formatterDate(
          this.politicsFormData.endTime
        );
      }
      const countryId = this.politicsFormData.countryId;
      // if(countryId==92){
      // 	this.$refs.chartOne.style.opacity="0.2"
      // }
      if (countryId == 92) {
        this.$refs.chartThree.style.opacity = "0.2";
        this.$refs.chartTwo.removeAttribute("opacity");
        this.drawLineThree();
        //this.$refs.chartOne.removeAttribute("opacity")
      }
      if (countryId == 101) {
        this.$refs.chartTwo.style.opacity = "0.2";
        this.$refs.chartThree.removeAttribute("opacity");
      }

      this.loadPoliticsEventPageList();
      //this.timeRange=eventTime +' 至 '+endTime
    },
    //修改政治事件
    showPoliticsEventUpdateDialog(row) {
      this.politicsEventUpdateDialog = true;
      this.politicsEvent.id = row.id;
      this.politicsEvent.nid = row.nid;
      this.politicsEvent.eventName = row.eventName;
      this.politicsEvent.eventTime = row.eventTime;
      this.politicsEvent.countryId = row.countryId;
      this.politicsEvent.countryFullName = row.countryFullName;
      this.politicsEvent.people = row.people;
      this.politicsEvent.partyGroup = row.partyGroup;
      this.politicsEvent.grade = row.grade;
      this.politicsEvent.infrastructure = row.infrastructure;
      this.politicsEvent.bound = row.bound;
      this.politicsEvent.militaryfacor = row.militaryfacor;
      this.politicsEvent.naturefactor = row.naturefactor;
    },
    //保存政治事件
    savePoliticsEvent() {
      this.politicsEventUpdateDialog = false;
    },
    //取消
    canclePoliticsEvent() {
      this.politicsEventUpdateDialog = false;
    },
    //更多
    more() {
      this.$router.push("/PoliticsEvent/PoliticsEventList");
    },
    handleCheckAllChange(val) {
      this.politicsFormData.Country = val ? this.countrys : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.countrys.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.countrys.length;
    }
  }
};
</script>

<style scoped lang="less">
</style>