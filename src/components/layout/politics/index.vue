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
        <el-select
          v-model="politicsFormData.countrycode"
          placeholder="选择国家"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-date-picker
          v-model="politicsFormData.startTime"
          type="date"
          placeholder="请输入开始时间"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        <el-date-picker
          v-model="politicsFormData.endTime"
          type="date"
          placeholder="请输入结束时间"
          value-format="yyyy-MM-dd"
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
        <h5>{{country}}</h5>
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
          <hot-charts :hotData="pDimensions"></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件维度分布图</h4>
          <bar-charts :sunData="pSunData"></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts :lineData="lineData"></line-charts>
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
                prop="startTime"
                label="事件发生时间"
                :formatter="formatterTime"
                align="center"
                min-width="100%"
              >
              </el-table-column>
              <el-table-column
                prop="countryId"
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
                prop="infrastructures"
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
                prop="emotionScore"
                label="情感分数"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="eventEffect"
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
                    @click="deleteId(scope.row)"
                  >删除</el-button>
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
    <div style="padding:40px;background-color:#f8f8f8;">
      <hot-charts :hotData="dimensions"></hot-charts>
    </div>
    <div style="padding:40px;background-color:#fff;">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="area"
          label="area"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="arms"
          label="arms"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="infrastructure"
          label="infrastructure"
        >
        </el-table-column>
        <el-table-column
          prop="natural_disaster"
          label="natural_disaster"
        >
        </el-table-column>
        <el-table-column
          prop="party_group"
          label="party_group"
        >
        </el-table-column>
        <el-table-column
          prop="person"
          label="person"
        >
        </el-table-column>
        <el-table-column
          prop="position"
          label="position"
        >
        </el-table-column>
        <el-table-column
          prop="religion"
          label="religion"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { formatterDateStr, formatterDate } from "@/utils/filter";
import { event, findSun, point, findcurves, deleteEvent } from "@/api/common";
import { frequency } from "@/api/politics/PoliticsEventAnalysis";
import hotCharts from "@/components/layout/general/charts/hot.vue";
import barCharts from "@/components/layout/general/charts/lineBar.vue";
import lineCharts from "@/components/layout/general/charts/line.vue";
export default {
  data() {
    return {
      politicsEventUpdateDialog: false,
      //政治事件form表单查询条件
      politicsFormData: {
        countrycode: "CHN",
        genre: 1,
        startTime: "2018-01-01",
        endTime: "2018-10-01"
      },
      options: [
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
      options: [
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
      pSunData: [],
      country: "",
      dimensions: [],
      pDimensions: [],
      lineData: {},
      tableData:[]
    };
  },
  created() {
    this.loadPoliticsEventPageList();
  },
  components: {
    hotCharts,
    barCharts,
    lineCharts
  },
  methods: {
    //获取列表信息
    loadPoliticsEventPageList() {
      for (let i in this.options) {
        if (this.politicsFormData.countrycode === this.options[i].value) {
          this.country = this.options[i].label;
        }
      }
      event(this.politicsFormData).then(res => {
        this.politicsTableData = res.data.list;
      });
      findSun(this.politicsFormData).then(res => {
        this.pSunData = res.data;
      });
      frequency(this.politicsFormData).then(res => {
        console.log(res.data.keys)
        this.dimensions = res.data.value;
        this.tableData=res.data.keys
      });
      point(this.politicsFormData).then(res => {
        this.pDimensions = res.data;
      });
      findcurves(this.politicsFormData).then(res => {
        this.lineData = res.data;
      });
    },
    //格式化时间
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    },
    //查询
    selectPolitics() {
      this.loadPoliticsEventPageList();
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
    },
    deleteId(row) {
      deleteEvent(row.id).then(res => {
        this.loadPoliticsEventPageList();
      });
    }
  }
};
</script>

<style scoped lang="less">
</style>