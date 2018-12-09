<template>
  <div class="EconomyEventAnalysis">
    <h1 class="title">经济事件分析</h1>
    <el-form
      ref="form"
      :model="economyFormData"
      label-width="80px"
    >
      <el-form-item label="选择国家">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          style="margin-bottom:10px;"
        >全选</el-checkbox>
        <el-checkbox-group
          v-model="economyFormData.Country"
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
          v-model="economyFormData.beginDate"
          type="date"
          placeholder="请输入开始时间"
        >
        </el-date-picker>
        <el-date-picker
          v-model="economyFormData.endDate"
          type="date"
          placeholder="请输入结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 曲线图 -->
    <h4>经济数据分析</h4>
    <div class="content">
      <el-row :gutter="25">
        <el-col :span="8">
          <div class="grid-content">
            <span class="span-title">国家CPI变化曲线图</span>
            <div
              id="chartOne"
              class="chartClass"
              style="height:400px"
            ></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <span class="span-title">国家GDP变化曲线图</span>
            <div
              id="chartTwo"
              class="chartClass"
              style="height:400px"
            ></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <span class="span-title">国家股市行情变化曲线图</span>
            <div
              id="chartThree"
              class="chartClass"
              style="height:400px"
            ></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 图表 -->
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content">
            <span class="span-title">CPI图表</span>
            <el-table
              :data="CPITableData"
              border
            >
              <el-table-column
                prop="countryfullname"
                label="国家"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="year"
                label="时间(年)"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="growth"
                label="增长率"
                align="center"
                min-width="100%"
              ></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <span class="span-title">GDP图表</span>
            <el-table
              :data="GDPTableData"
              border
            >
              <el-table-column
                prop="countryfullname"
                label="国家"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="year"
                label="时间(年)"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="growth"
                label="增长率"
                align="center"
                min-width="100%"
              ></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <span class="span-title">股市行情图表</span>
            <el-table
              :data="StockPointTableData"
              border
            >
              <el-table-column
                prop="countryfullname"
                label="国家"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="day"
                label="时间(天)"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="growth"
                label="增长率"
                align="center"
                min-width="100%"
              ></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 可持续城市 -->
    <h4>全球经济分析</h4>
    <div class="Economy">
      <h4>可持续城市和社区</h4>
      <world-charts2 v-if="isCitys" :worldData="citys.data" :title="citys.title" :subtext="citys.subtext"></world-charts2>
    </div>
    <!-- 经济增长和就业情况 -->
    <div class="Economy">
      <h4>经济增长和就业情况</h4>
      <div id="growth"></div>
      <world-charts v-if="isSituations" :worldData="situations.data" :title="situations.title" :subtext="situations.subtext"></world-charts>
    </div>
    <!-- 创业和创新以及基础设施建设 -->
    <div class="Economy">
      <h4>创业和创新以及基础设施建设</h4>
      <div id="innovation"></div>
      <div id="development"></div>
    </div>
    <!-- 全球合作伙伴 -->
    <div class="Economy">
      <h4>全球合作伙伴</h4>
      <world-charts v-if="isGlobals" :worldData="globals.data" :title="globals.title" :subtext="globals.subtext"></world-charts>  
    </div>
    <h4>经济事件分析</h4>
    <div class="list">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-table
            :data="EconomyTableData"
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
              label="机构"
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

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import "../../../../node_modules/echarts/map/js/world.js";
import worldCharts from '@/components/layout/general/charts/world.vue';
import worldCharts2 from '@/components/layout/general/charts/world.vue';
import { formatterDateStr, formatterDate } from "@/utils/filter.js";
import {
  getCPIList,
  getGDPList,
  getStockPointList,
  Sustainable,
  Situation,
  Global,
  Innovation
} from "@/api/economy/EconomyEventAnalysis";
export default {
  data() {
    return {
      economyFormData: {
        Country: ["印度"],
        eventTime: "",
        endTime: ""
      },
      EconomyTableData:[],
      stockpointVo: {
        pageNum: 1,
        pageSize: 5,
        id: "",
        stockName: "",
        stockShort: ""
      },
      gpiVo: {
        pageNum: 1,
        pageSize: 5,
        id: "",
        year: "",
        month: "",
        exponent: ""
      },
      gdpVo: {
        pageNum: 1,
        pageSize: 5,
        id: "",
        year: ""
      },
      //国家信息
      countrys: ["日本", "朝鲜", "印度", "韩国", "中国", "美国", "巴基斯坦"],
      isIndeterminate:false,
      checkAll: false,

      //CPI表格数据
      CPITableData: [],

      //GDP表格数据
      GDPTableData: [],

      //股市行情表格数据
      StockPointTableData: [],
      city: {
        recordTime: 2016
      },
      situa: {
        recordTime: 2017
      },
      situations:{data:[],title:"",subtext:""},
      citys:{data:[],title:"",subtext:""},
      globals: {data:[],title:"",subtext:""},
      Innovas: [],
      isCitys:false,
      isSituations:false,
      isGlobals:false,
    };
  },
  components:{
    worldCharts,
    worldCharts2
  },
  created() {
    this.loadCPIPageList();
    this.loadGDPPageList();
    this.loadStockPointPageList();
    this.selectEcnomy();
  },
  mounted() {
    this.drawLineOne();
    this.drawLineTwo();
    this.drawLineThree();
    this.growth();
    this.development();
  },
  methods: {
    //加载CPI数据
    loadCPIPageList() {
      getCPIList(this.gpiVo).then(res => {
        this.CPITableData = res.data.list;
      });
    },

    //加载GDP数据
    loadGDPPageList() {
      getGDPList(this.gdpVo).then(res => {
        this.GDPTableData = res.data.list;
      });
    },

    //加载股指信息数据
    loadStockPointPageList() {
      getStockPointList(this.stockpointVo).then(res => {
        this.StockPointTableData = res.data.list;
        for (var i in this.StockPointTableData) {
          this.StockPointTableData[i].day = formatterDateStr(
            this.StockPointTableData[i].day
          );
        }
      });
    },
    selectEcnomy() {
      Sustainable(this.city).then(res => {
        this.citys.data = res.data;
        this.citys.title= "主要国家细颗粒物（PM2.5）污染的安全水平。固体燃料的工业，运输和家庭使用是其中的来源";
        this.citys.subtext="wbg_name（指标 =  “环境空气污染，PM2.5，年平均暴露”，denom  =  “每立方米微克数，ug / m3 ”，年份 =  年份）";
        this.isCitys=true
      });
      Situation(this.situa).then(res => {
        this.situations.data = res.data;
        this.situations.title="获得金融服务有益于个人和社会。在全球范围内，69％的成年人拥有金融机构或移动货币提供者的账户"
        this.situations.subtext= "wbg_name（指标 =  “帐户所有权”，年份 =  年份，denom  =  “ 15岁及以上人口的百分比”）"
      this.isSituations=true
      });
      Global(this.situa).then(res => {
        this.globals.data = res.data;
        this.globals.title="全球国家出口增长值";
        this.globals.subtext="";
        this.isGlobals=true
      });
      Innovation().then(res => {
        this.Innovas = res.data;
        this.innovation();
      });
    },
    resetEcnomy(economyFormData) {
      this.$refs[economyFormData].resetFields();
    },
    drawLineOne() {
      var myChart = echarts.init(document.getElementById("chartOne"));
      var option = {
        color: ["#003366", "#006699", "#4cabce"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["朝鲜", "印度", "日本"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2013", "2014", "2015", "2016", "2017"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "朝鲜",
            type: "line",
            stack: "总量",
            data: [120, 100, 145, 134, 90]
          },
          {
            name: "印度",
            type: "line",
            stack: "总量",
            data: [159, 212, 206, 146, 180]
          },
          {
            name: "日本",
            type: "line",
            stack: "总量",
            data: [320, 332, 312, 334, 390]
          }
        ]
      };
      window.addEventListener("resize", function() {
        myChart.resize();
      });
      myChart.setOption(option);
    },
    drawLineTwo() {
      var myChart = echarts.init(document.getElementById("chartTwo"));
      var option = {
        color: ["#003366", "#006699", "#4cabce"],
        legend: {
          data: ["朝鲜", "印度", "日本"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2013", "2014", "2015", "2016", "2017"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "朝鲜",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90]
          },
          {
            name: "印度",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190]
          },
          {
            name: "日本",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawLineThree() {
      var myChart = echarts.init(document.getElementById("chartThree"));
      var option = {
        color: ["#003366", "#006699", "#4cabce"],
        legend: {
          data: ["朝鲜", "印度", "日本"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["6月1日", "6月2日", "6月3日", "6月4日", "6月5日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "朝鲜",
            type: "line",
            stack: "总量",
            data: [100, 88, 75, 110, 80]
          },
          {
            name: "印度",
            type: "line",
            stack: "总量",
            data: [180, 200, 150, 154, 160]
          },
          {
            name: "日本",
            type: "line",
            stack: "总量",
            data: [220, 300, 240, 226, 345]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    // 经济增长和就业情况
    // 柱形图
    growth() {
      const growths = {
        xvalue: [
          {
            xname: "Wage and salaried workers",
            fmale: {
              EAS: "12",
              ECS: "15",
              LCN: "19",
              MEA: "25",
              NAC: "36",
              SAS: "27",
              SSF: "17"
            },
            male: {
              EAS: "12",
              ECS: "26",
              LCN: "78",
              MEA: "25",
              NAC: "36",
              SAS: "27",
              SSF: "22"
            }
          },
          {
            xname: "Own-account workers",
            fmale: {
              EAS: "56",
              ECS: "15",
              LCN: "12",
              MEA: "33",
              NAC: "35",
              SAS: "25",
              SSF: "19"
            },
            male: {
              EAS: "15",
              ECS: "19",
              LCN: "33",
              MEA: "45",
              NAC: "32",
              SAS: "28",
              SSF: "18"
            }
          },
          {
            xname: "Contributing family workers",
            fmale: {
              EAS: "15",
              ECS: "18",
              LCN: "17",
              MEA: "29",
              NAC: "37",
              SAS: "28",
              SSF: "22"
            },
            male: {
              EAS: "56",
              ECS: "45",
              LCN: "18",
              MEA: "27",
              NAC: "35",
              SAS: "27",
              SSF: "19"
            }
          },
          {
            xname: "Employers",
            fmale: {
              EAS: "33",
              ECS: "55",
              LCN: "78",
              MEA: "65",
              NAC: "52",
              SAS: "12",
              SSF: "32"
            },
            male: {
              EAS: "15",
              ECS: "19",
              LCN: "22",
              MEA: "33",
              NAC: "36",
              SAS: "45",
              SSF: "23"
            }
          }
        ],
        yvalue: {
          EAS: "East Asia",
          ECS: "Europe ",
          LCN: "Latin America",
          MEA: " Middle East & North Africa",
          NAC: "North America",
          SAS: "South Asia ",
          SSF: " Sub-Saharan Africa"
        }
      };
      const length = [];
      const fmale = [];
      const male = [];
      const a = [];
      const x = Object.keys(growths.yvalue);
      growths.xvalue.forEach(function(element, index) {
        length.push(element.xname);
      });
      x.forEach(function(element, index) {
        var oo = {};
        const val = element;
        oo.name = val;
        oo.type = "bar";
        oo.label = {
          normal: {
            show: true,
            position: "insideRight"
          }
        };
        oo.stack = "fmale";
        const data = [];
        growths.xvalue.forEach(function(element) {
          data.push(element.fmale[val]);
          oo.data = data;
        });
        a.push(oo);
      });
      x.forEach(function(element, index) {
        var oo = {};
        const val = element;
        oo.name = val;
        oo.type = "bar";
        oo.label = {
          normal: {
            show: true,
            position: "insideRight"
          }
        };
        oo.stack = "male";
        const data2 = [];
        growths.xvalue.forEach(function(element) {
          data2.push(element.male[val]);
          oo.data = data2;
        });
        a.push(oo);
      });

      const growth = document.querySelector("#growth");
      const groCharts = echarts.init(growth);
      groCharts.setOption({
        color: ["#f54e96", "#8ed41b", "#7631a6", "#eadc27"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: x
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          width: "90%"
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          data: length
        },
        series: a
      });
      window.addEventListener("resize", function() {
        groCharts.resize();
      });
    },
    //创业和创新以及基础设施建设
    //柱形图
    innovation() {
      var builderJson = this.Innovas;
      const x = [];
      const y = [];
      const a = [];
      const z = [];
      builderJson.pop.forEach(function(element) {
        x.push(element.iso3c);
        y.push(element.nopop);
      });
      builderJson.rai.forEach(function(element) {
        a.push(element.iso3c);
        z.push(element.rai);
      });
      const innovation = document.querySelector("#innovation");
      const innCharts = echarts.init(innovation);
      innCharts.setOption({
        title: {
          text:
            "基础设施支持社区。如果没有全季节的道路，人们就会与关键服务和市场隔绝。"
        },
        tooltip: {},
        grid: [
          {
            width: "40%",
            left: "50%",
            top: 50,
            containLabel: true
          },
          {
            right: "50%",
            width: "40%",
            top: 50,
            containLabel: true
          }
        ],
        xAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            }
          },
          {
            type: "value",
            gridIndex: 1,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            data: x,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          },
          {
            gridIndex: 1,
            type: "category",
            data: a,
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: "bar",
            stack: "chart",
            z: 3,
            label: {
              normal: {
                position: "right",
                show: true
              }
            },
            data: y
          },
          {
            type: "bar",
            stack: "component",
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
              normal: {
                position: "right",
                show: true
              }
            },
            data: z
          }
        ]
      });
      window.addEventListener("resize", function() {
        innCharts.resize();
      });
    },
    //曲线图
    development() {
      var builderJson = {
        all: 10887,
        charts: {
          map: 3237,
          lines: 2164,
          bar: 7561,
          line: 7778,
          pie: 7355,
          scatter: 2405,
          candlestick: 1842,
          radar: 2090,
          heatmap: 1762,
          treemap: 1593,
          graph: 2060,
          boxplot: 1537,
          parallel: 1908,
          gauge: 2107,
          funnel: 1692,
          sankey: 1568
        },
        components: {
          geo: 2788,
          title: 9575,
          legend: 9400,
          tooltip: 9466,
          grid: 9266,
          markPoint: 3419,
          markLine: 2984,
          timeline: 2739,
          dataZoom: 2744,
          visualMap: 2466,
          toolbox: 3034,
          polar: 1945
        },
        ie: 9743
      };
      const development = document.querySelector("#development");
      const deveCharts = echarts.init(development);
      deveCharts.setOption({
        tooltip: {},
        color: ["#dc2698", "#d50055", "#ff6100", "#ffd900"],
        grid: [
          {
            width: "40%",
            left: "50%",
            top: 50,
            containLabel: true
          },
          {
            right: "50%",
            width: "40%",
            top: 50,
            containLabel: true
          }
        ],
        yAxis: [
          {
            type: "value",
            max: builderJson.all,
            splitLine: {
              show: false
            }
          },
          {
            type: "value",
            max: builderJson.all,
            gridIndex: 1,
            splitLine: {
              show: false
            }
          }
        ],
        xAxis: [
          {
            type: "category",
            data: Object.keys(builderJson.charts),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          },
          {
            gridIndex: 1,
            type: "category",
            data: Object.keys(builderJson.components),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              220,
              182,
              191,
              234,
              290,
              330,
              310
            ]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [
              220,
              182,
              191,
              234,
              290,
              330,
              310,
              120,
              132,
              101,
              134,
              90,
              230,
              310
            ]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              320,
              332,
              301,
              334,
              390,
              330,
              320
            ]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [
              320,
              332,
              301,
              334,
              390,
              330,
              320,
              150,
              232,
              201,
              154,
              190,
              330,
              410
            ]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              120,
              132,
              101,
              134,
              90,
              230,
              210
            ]
          },
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              220,
              182,
              191,
              234,
              290,
              330,
              310
            ]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
              220,
              182,
              191,
              234,
              290,
              330,
              310,
              120,
              132,
              101,
              134,
              90,
              230,
              310
            ]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              320,
              332,
              301,
              334,
              390,
              330,
              320
            ]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
              320,
              332,
              301,
              334,
              390,
              330,
              320,
              150,
              232,
              201,
              154,
              190,
              330,
              410
            ]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              120,
              132,
              101,
              134,
              90,
              230,
              210
            ]
          }
        ]
      });
      window.addEventListener("resize", function() {
        deveCharts.resize();
      });
    },
    handleCheckAllChange(val) {
      this.economyFormData.Country = val ? this.countrys : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.countrys.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.countrys.length;
    },
    more() {
      this.$router.push("/EconomyEvent/economyEventList");
    }
  }
};
</script>

<style scoped lang="less">
</style>