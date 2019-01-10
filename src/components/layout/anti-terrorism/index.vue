<template>
  <div class="AntiEventAnalysis">
    <h1 class="title">反恐事件分析</h1>
    <el-form
      ref="form"
      :model="antiFormData"
      label-width="100px"
    >
      <el-form-item label="选择国家">
        <el-select
          v-model="antiFormData.countrycode"
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
          v-model="antiFormData.startTime"
          type="date"
          placeholder="请输入开始时间"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        <el-date-picker
          v-model="antiFormData.endTime"
          type="date"
          placeholder="请输入结束时间"
          value-format="yyyy-MM-dd"
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
          <hot-charts :hotData="cDimensions"></hot-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件分数分布图</h4>
          <bar-charts :sunData="CsunData"></bar-charts>
        </el-col>
        <el-col :span="8">
          <h4>事件发生曲线</h4>
          <line-charts :lineData="lineData"></line-charts>
        </el-col>
      </el-row>
    </div>
    <more-line :moreData="moreData"></more-line>
    <more-charts :barData="barData"></more-charts>
    <armed-forces :pineData="pineData"></armed-forces>
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
                prop="startTime"
                label="事件发生时间"
                :formatter="formatterTime"
                align="center"
                min-width="100%"
              ></el-table-column>
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
                prop="grade"
                label="等级"
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
                prop="arms"
                label="军事要素"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="natureDisaster"
                label="自然要素"
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
    <div class="word">
      <word-charts :worldData="mapData"></word-charts>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import indiaPine from "@/assets/india/92_3.json";
import chinaPine from "@/assets/china/44_3.json";
import japanPine from "@/assets/japan/101_3.json";
import koreaPine from "@/assets/korea/184_3.json";
import pakistanPine from "@/assets/pakistan/153_3.json";
import usaPine from "@/assets/usa/217_3.json";
import hotCharts from "@/components/layout/general/charts/hot.vue";
import barCharts from "@/components/layout/general/charts/lineBar.vue";
import lineCharts from "@/components/layout/general/charts/line.vue";
import moreLine from "@/components/layout/general/charts/linemore.vue";
import moreCharts from "@/components/layout/general/charts/bar.vue";
import armedForces from "@/components/layout/general/charts/ArmedForces.vue";
import wordCharts from "@/components/layout/general/charts/map.vue";
import { formatterDateStr, formatterDate } from "@/utils/filter";
import { event,findSun,point,findcurves,deleteEvent } from "@/api/common";
import { map,victimAnalysis,CategoryAnalysis,ForcesAnalysis } from "@/api/anti-terrorism/Anti-terrorismEventAnalysis";
export default {
  data() {
    return {
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
      antiEventUpdateDialog: false,
      //反恐事件from表单查询条件
      antiFormData: {
        countrycode: "IND",
        genre: 3,
        startTime: "2018-01-01",
        endTime: "2018-10-01"
      },
      mapForm:{
        startTime:'1992-01-01',
        endTime:'2008-12-31'
      },
      mapData:[],
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
      //反恐事件table数据
      antiTableData: [],
      CsunData:[],
      country:"印度",
      moreData:{},
      barData:{},
      pineData:{},
      cDimensions:[],
      lineData:{}
    };
  },
  components: {
    hotCharts,
    barCharts,
    lineCharts,
    armedForces,
    moreLine,
    moreCharts,
    wordCharts
  },
  created() {
    this.loadAntiEventPageList();
  },
  mounted() {
  },
  methods: {
    //获取列表信息
    loadAntiEventPageList() {
      for( let i in this.options){
          if(this.antiFormData.countrycode == this.options[i].value){
                this.country=this.options[i].label
          }
        }
      event(this.antiFormData).then(res => {
        this.antiTableData = res.data.list;
      });
      findSun(this.antiFormData).then(res=>{
        this.CsunData=res.data
      })
      map(this.mapForm).then(res=>{
        this.mapData=res.data
      })
      point(this.antiFormData).then(res=>{
        this.cDimensions=res.data
      })
      findcurves(this.antiFormData).then(res=>{
           this.lineData=res.data
      })
      victimAnalysis(this.antiFormData).then(res=>{
        this.moreData=res.data
      })
      CategoryAnalysis(this.antiFormData).then(res=>{
        this.barData=res.data
      })
      ForcesAnalysis(this.antiFormData).then(res=>{
        this.pineData=res.data
      })
    },
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    },
    //查询
    selectAnti() {
      this.loadAntiEventPageList();
    },
    deleteId(row) {
      deleteEvent(row.id).then(res => {
        this.loadAntiEventPageList();
      });
    },
    //更多
    more() {
      this.$router.push("/AntiTerrorismEvent/Anti-terrorismEventList");
    },
  }
};
</script>

<style scoped lang="less">
</style>