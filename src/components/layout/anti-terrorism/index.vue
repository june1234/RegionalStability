<template>
  <div class="AntiEventAnalysis">
    <h1 class="title">反恐事件分析</h1>
    <el-form
      ref="form"
      :model="antiFormData"
      label-width="100px"
    >
      <el-form-item label="选择国家">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox>
        <el-checkbox-group
          v-model="antiFormData.Country"
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
          v-model="antiFormData.beginDate"
          type="date"
          placeholder="请输入开始时间"
        >
        </el-date-picker>
        <el-date-picker
          v-model="antiFormData.endDate"
          type="date"
          placeholder="请输入结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="selectAnti"
        >查询</el-button>
      </el-form-item>
    </el-form>
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
    <div
      id="victim"
      style="width: 100%;height: 500px;background-color:#fff;margin-top:20px;"
    ></div>
    <div
      id="Attacks"
      style="width: 100%;height: 500px;background-color:#fff;margin-top:20px;"
    ></div>
    <div
      id="ArmedForces"
      style="width: 100%;height: 500px;background-color:#fff;margin-top:20px;"
    ></div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content">
            <el-table
              :data="antiTableData"
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
              ></el-table-column>
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
                prop="grade"
                label="等级"
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
                prop="border"
                label="边境状况"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="militaryfacor"
                label="军事要素"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="naturefactor"
                label="自然要素"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="naturefactor"
                label="情感分数"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="naturefactor"
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
                    @click="showAntiEventUpdateDialog(scope.row)"
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
    <!-- 反恐事件修改dialog -->
    <el-dialog
      title="反恐事件修改"
      style="text-align:center;"
      :visible.sync="antiEventUpdateDialog"
      width="50%"
    >
      <el-form
        :model="antiEvent"
        label-width="100px"
        class="AntiForm"
      >
        <el-form-item label="事件名称">
          <el-input
            v-model="antiEvent.eventName"
            placeholder="请修改事件名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="发生时间">
          <el-date-picker
            type="date"
            v-model="antiEvent.eventTime"
            palceholder="请输入时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="国家">
          <el-input
            v-model="antiEvent.countryFullName"
            palceholder="请输入国家"
          ></el-input>
        </el-form-item>
        <el-form-item label="人物">
          <el-input
            v-model="antiEvent.people"
            palceholder="请输入人物"
          ></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-select
            v-model="antiEvent.grade"
            placeholder="请选择等级"
          >
          </el-select>
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
        <el-form-item label="情感分数">
          <el-input v-model="antiEvent.naturefactor"></el-input>
        </el-form-item>
        <el-form-item label="影响力">
          <el-input v-model="antiEvent.naturefactor"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="saveAntiEvent"
          >确认</el-button>
          <el-button @click="cancleAntiEvent">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import echarts from 'echarts'
import hotCharts from '@/components/layout/general/charts/hot.vue'
import barCharts from '@/components/layout/general/charts/lineBar.vue'
import lineCharts from '@/components/layout/general/charts/line.vue'
import { formatterDateStr, formatterDate } from "@/utils/filter.js";
import { getAntiEventListByType } from "@/api/anti-terrorism/Anti-terrorismEventAnalysis.js";
export default {
  data() {
    return {
      antiEventUpdateDialog: false,
      //反恐事件from表单查询条件
      antiFormData: {
        Country: ["印度"],
        type: 3,
        eventTime: "",
        endTime: ""
      },
      //反恐事件修改dialog表单数据
      antiEvent: {
        id: "",
        nid: "",
        eventName: "",
        eventTime: "",
        countryId: "",
        people: "",
        grade: "",
        infrastructure: "",
        bound: "",
        militaryfacor: "",
        naturefactor: ""
      },
      //时间范围
      timeRange: "",
      //国家信息列表
      countrys: ["日本", "朝鲜", "印度", "韩国", "中国", "美国", "巴基斯坦"],
      //反恐事件table数据
      antiTableData: [],
      checkAll: false,
      isIndeterminate: false
    };
  },
  components:{
    hotCharts,
    barCharts,
    lineCharts
  },
  created() {
    this.loadAntiEventPageList();
  },
  mounted() {
    this.Victim();
    this.Attacks();
    this.ArmedForces();
  },
  methods: {
    //获取列表信息
    loadAntiEventPageList() {
      getAntiEventListByType(this.antiFormData).then(res => {
        this.antiTableData = res.data.list;
      });
    },
    formatterTime(val) {
      return formatterDateStr(val.eventTime);
    },
    //查询
    selectAnti() {
      var eventTime = this.antiFormData.eventTime;
      if (eventTime != "") {
        this.antiFormData.eventTime = formatterDate(eventTime);
      }
      var endTime = this.antiFormData.endTime;
      if (endTime != "") {
        this.antiFormData.endTime = formatterDate(endTime);
      }
      this.loadAntiEventPageList();
    },
    //修改
    showAntiEventUpdateDialog(row) {
      this.antiEventUpdateDialog = true;
      this.antiEvent.id = row.id;
      this.antiEvent.nid = row.nid;
      this.antiEvent.eventName = row.eventName;
      this.antiEvent.eventTime = row.eventTime;
      this.antiEvent.countryId = row.countryId;
      this.antiEvent.countryFullName = row.countryFullName;
      this.antiEvent.people = row.people;
      this.antiEvent.antiTerrorism = row.antiTerrorism;
      this.antiEvent.grade = row.grade;
      this.antiEvent.casualties = row.casualties;
      this.antiEvent.weapons = row.weapons;
      this.antiEvent.infrastructure = row.infrastructure;
      this.antiEvent.bound = row.bound;
      this.antiEvent.militaryfacor = row.militaryfacor;
      this.antiEvent.naturefactor = row.naturefactor;
    },
    //保存
    saveAntiEvent() {
      this.antiEventUpdateDialog = false;
    },
    //取消
    cancleAntiEvent() {
      this.antiEventUpdateDialog = false;
    },
    //更多
    more() {
      this.$router.push("/AntiTerrorismEvent/Anti-terrorismEventList");
    },
    Victim() {
      const Victim = document.querySelector("#victim");
      const VicCharts = echarts.init(Victim);
      const option = {
        color: ["#f54e96", "#8ed41b", "#7631a6", "#eadc27"],
        title: {
          left: 330,
          text: "印度受害目标时序分析",
          subtext: "Time series analysis of victims in India"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        grid: {
          height: 350,
          right: 250
        },
        xAxis: {
          type: "category",
          data: [
            1992,
            1993,
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008
          ]
        },
        yAxis: {
          type: "value"
        },
        legend: {
          right: 50,
          top: 300,
          orient: "vertical",
          data: [
            "斯利那加(Srinagar)",
            "英帕尔(Imphal)",
            "新德里(New Delhi)",
            "古瓦哈提(Guwahati)",
            "查谟(Jammu)"
          ]
        },
        series: [
          {
            name: "斯利那加(Srinagar)",
            type: "line",
            data: [45, 0, 6, 12, 29, 22, 0, 4, 23, 20, 27, 19, 12, 25, 35, 9, 4]
          },
          {
            name: "英帕尔(Imphal)",
            type: "line",
            data: [0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 2, 1, 0, 1, 2, 4, 54]
          },
          {
            name: "新德里(New Delhi)",
            type: "line",
            data: [8, 0, 1, 1, 3, 18, 0, 0, 6, 2, 2, 1, 0, 3, 1, 3, 9]
          },
          {
            name: "查谟(Jammu)",
            type: "line",
            data: [2, 0, 5, 4, 0, 0, 0, 1, 4, 2, 5, 3, 5, 0, 2, 0, 3]
          },
          {
            name: "古瓦哈提(Guwahati)",
            type: "line",
            data: [3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 3, 6, 6, 19, 7]
          }
        ]
      };
      VicCharts.setOption(option);
      window.addEventListener("resize", function() {
        VicCharts.resize();
      });
    },
    Attacks() {
      const Attacks = document.querySelector("#Attacks");
      const AttCharts = echarts.init(Attacks);
      const option = {
        color: ["#f54e96", "#8ed41b", "#7631a6", "#eadc27"],
        title: {
          text: "印度恐怖袭击事件分类分析",
          subtext: "Classified analysis of terrorist attacks in India"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["社会性影响事件", "群体性影响事件", "人权性影响事件"]
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              1992,
              1993,
              1994,
              1995,
              1996,
              1997,
              1998,
              1999,
              2000,
              2001,
              2002,
              2003,
              2004,
              2005,
              2006,
              2007,
              2008
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "社会性影响事件",
            type: "bar",
            data: [
              238,
              0,
              107,
              179,
              211,
              191,
              0,
              23,
              177,
              128,
              170,
              195,
              109,
              145,
              165,
              156,
              498
            ]
          },
          {
            name: "群体性影响事件",
            type: "bar",
            data: [
              237,
              0,
              107,
              175,
              202,
              185,
              0,
              23,
              178,
              128,
              171,
              196,
              109,
              145,
              164,
              156,
              513
            ]
          },
          {
            name: "人权性影响事件",
            type: "bar",
            data: [
              220,
              0,
              97,
              166,
              194,
              170,
              0,
              22,
              176,
              125,
              168,
              189,
              108,
              135,
              164,
              153,
              515
            ]
          }
        ]
      };
      AttCharts.setOption(option);
      window.addEventListener("resize", function() {
        AttCharts.resize();
      });
    },
    ArmedForces() {
      const ArmedForces = document.querySelector("#ArmedForces");
      const ArmedCharts = echarts.init(ArmedForces);
      const option = {
        baseOption: {
          timeline: {
            currentIndex: 17,
            tooltip: {
              show: false
            },
            axisType: "category",
            data: [
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "汇总"
            ]
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: [
              "枪械(Firearms)",
              "炸药/炸弹(Explosives/Bombs/Dynamite)",
              "未知(Unknown)",
              "燃烧弹(Incendiary)",
              "混乱(Melee)",
              "其他(Other)"
            ]
          }
        },
        options: [
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1992年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1992",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 144,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 58,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 21,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 9,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 6,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1993年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1993",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 0,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 0,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 0,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 0,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1994年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1994",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 29,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 43,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 11,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 18,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1995年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1995",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 34,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 63,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 26,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 32,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 24,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1996年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1996",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 49,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 111,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 21,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 25,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1997年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1997",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 59,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 109,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 19,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 2,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 2,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1998年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1998",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 0,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 0,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 0,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 0,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1999年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1999",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 8,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 14,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 0,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 1,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2000年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2000",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 70,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 94,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 7,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 2,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2001年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2001",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 72,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 52,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 3,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2002年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2002",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 69,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 97,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 1,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 3,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2003年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2003",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 83,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 95,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 5,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 8,
                    name: "混战(Melee)"
                  },
                  {
                    value: 5,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2004年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2004",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 35,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 70,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 2,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 1,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2005年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2005",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 57,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 81,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 3,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 4,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2006年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2006",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 56,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 100,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 3,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 1,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2007年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2007",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 59,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 88,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 3,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2008年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2008",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 182,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 248,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 45,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 20,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 23,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1992-2008年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India from 1992 to 2008",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 999,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 1319,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 159,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 120,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 101,
                    name: "混战(Melee)"
                  },
                  {
                    value: 9,
                    name: "其他(Other)"
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          }
        ]
      };
      ArmedCharts.setOption(option);
      window.addEventListener("resize", function() {
        ArmedCharts.resize();
      });
    },
    handleCheckAllChange(val) {
      this.antiFormData.Country = val ? this.countrys : [];
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