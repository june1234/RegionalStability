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
          @click="selectPolitics"
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
      <div id="sustainable"></div>
    </div>
    <!-- 经济增长和就业情况 -->
    <div class="Economy">
      <h4>经济增长和就业情况</h4>
      <div id="growth"></div>
      <div id="situation"></div>
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
      <div id="Global"></div>
    </div>
    <h4>经济事件分析</h4>
    <div class="list">
      <el-row :gutter="20">
        <el-col :span="24">
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
      situations: [],
      citys: [],
      globals: [],
      Innovas: []
    };
  },
  created() {
    this.getCountryAll();
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
    //获取国家信息
    getCountryAll() {
      getCountryAll().then(res => {
        this.countries = res.data;
      });
    },

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
        this.citys = res.data;
        this.sustainable();
      });
      Situation(this.situa).then(res => {
        this.situations = res.data;
        this.situation();
      });
      Global(this.situa).then(res => {
        this.globals = res.data;
        this.Global();
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
    // 可持续城市，绘制世界地图
    sustainable() {
      this.citys.forEach(function(element, index) {
        element.name = element.countryName;
      });
      const sustainable = document.querySelector("#sustainable");
      const SusCharts = echarts.init(sustainable);

      SusCharts.setOption({
        title: {
          text:
            "主要国家细颗粒物（PM2.5）污染的安全水平。固体燃料的工业，运输和家庭使用是其中的来源",
          subtext:
            "wbg_name（指标 =  “环境空气污染，PM2.5，年平均暴露”，denom  =  “每立方米微克数，ug / m3 ”，年份 =  年份）",
          left: "center",
          top: "top"
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return params.name + " : " + params.value;
          }
        },
        grid: {
          width: "90%"
        },
        visualMap: {
          min: 0,
          max: 60,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["#dc472c", "#e26c47", "#d80c18"]
          }
        },
        series: [
          {
            name: "World Population (2010)",
            type: "map",
            mapType: "world",
            roam: true,
            itemStyle: {
              emphasis: { label: { show: true } }
            },
            data: this.citys
          }
        ]
      });
      window.addEventListener("resize", function() {
        SusCharts.resize();
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
        console.log(element);
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
        console.log(element);
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
    // 地图
    situation() {
      this.situations.forEach(function(element, index) {
        element.name = element.countryname;
      });
      const situation = document.querySelector("#situation");
      const sitCharts = echarts.init(situation);
      sitCharts.setOption({
        title: {
          text:
            "获得金融服务有益于个人和社会。在全球范围内，69％的成年人拥有金融机构或移动货币提供者的账户",
          subtext:
            "wbg_name（指标 =  “帐户所有权”，年份 =  年份，denom  =  “ 15岁及以上人口的百分比”）",
          left: "center",
          top: "top"
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return params.name + " : " + params.value;
          }
        },
        grid: {
          width: "90%"
        },
        visualMap: {
          min: 0,
          max: 100,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["#00aed9", "#4ec6e3", "#8dd5e6"]
          }
        },
        series: [
          {
            name: "World Population (2010)",
            type: "map",
            mapType: "world",
            roam: true,
            itemStyle: {
              emphasis: { label: { show: true } }
            },
            data: this.situations
          }
        ]
      });
      window.addEventListener("resize", function() {
        sitCharts.resize();
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
    //全球合作伙伴
    Global() {
      this.globals.forEach(function(element, index) {
        element.name = element.countryName;
      });
      const Global = document.querySelector("#Global");
      const GlobalCharts = echarts.init(Global);
      GlobalCharts.setOption({
        title: {
          text: "全球国家出口增长值",
          left: "center",
          top: "top"
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return params.name + " : " + params.value;
          }
        },
        visualMap: {
          min: 0,
          max: 10000000,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["#dc2698", "#d50055", "#ff6100"]
          }
        },
        grid: {
          width: "90%"
        },
        series: [
          {
            name: "World Population (2010)",
            type: "map",
            mapType: "world",
            roam: true,
            itemStyle: {
              emphasis: { label: { show: true } }
            },
            data: [
              { name: "Afghanistan", value: 28397.812 },
              { name: "Angola", value: 19549.124 },
              { name: "Albania", value: 3150.143 },
              { name: "United Arab Emirates", value: 8441.537 },
              { name: "Argentina", value: 40374.224 },
              { name: "Armenia", value: 2963.496 },
              { name: "French Southern and Antarctic Lands", value: 268.065 },
              { name: "Australia", value: 22404.488 },
              { name: "Austria", value: 8401.924 },
              { name: "Azerbaijan", value: 9094.718 },
              { name: "Burundi", value: 9232.753 },
              { name: "Belgium", value: 10941.288 },
              { name: "Benin", value: 9509.798 },
              { name: "Burkina Faso", value: 15540.284 },
              { name: "Bangladesh", value: 151125.475 },
              { name: "Bulgaria", value: 7389.175 },
              { name: "The Bahamas", value: 66402.316 },
              { name: "Bosnia and Herzegovina", value: 3845.929 },
              { name: "Belarus", value: 9491.07 },
              { name: "Belize", value: 308.595 },
              { name: "Bermuda", value: 64.951 },
              { name: "Bolivia", value: 716.939 },
              { name: "Brazil", value: 195210.154 },
              { name: "Brunei", value: 27.223 },
              { name: "Bhutan", value: 716.939 },
              { name: "Botswana", value: 1969.341 },
              { name: "Central African Republic", value: 4349.921 },
              { name: "Canada", value: 34126.24 },
              { name: "Switzerland", value: 7830.534 },
              { name: "Chile", value: 17150.76 },
              { name: "China", value: 1359821.465 },
              { name: "Ivory Coast", value: 60508.978 },
              { name: "Cameroon", value: 20624.343 },
              { name: "Democratic Republic of the Congo", value: 62191.161 },
              { name: "Republic of the Congo", value: 3573.024 },
              { name: "Colombia", value: 46444.798 },
              { name: "Costa Rica", value: 4669.685 },
              { name: "Cuba", value: 11281.768 },
              { name: "Northern Cyprus", value: 1.468 },
              { name: "Cyprus", value: 1103.685 },
              { name: "Czech Republic", value: 10553.701 },
              { name: "Germany", value: 83017.404 },
              { name: "Djibouti", value: 834.036 },
              { name: "Denmark", value: 5550.959 },
              { name: "Dominican Republic", value: 10016.797 },
              { name: "Algeria", value: 37062.82 },
              { name: "Ecuador", value: 15001.072 },
              { name: "Egypt", value: 78075.705 },
              { name: "Eritrea", value: 5741.159 },
              { name: "Spain", value: 46182.038 },
              { name: "Estonia", value: 1298.533 },
              { name: "Ethiopia", value: 87095.281 },
              { name: "Finland", value: 5367.693 },
              { name: "Fiji", value: 860.559 },
              { name: "Falkland Islands", value: 49.581 },
              { name: "France", value: 63230.866 },
              { name: "Gabon", value: 1556.222 },
              { name: "United Kingdom", value: 62066.35 },
              { name: "Georgia", value: 4388.674 },
              { name: "Ghana", value: 24262.901 },
              { name: "Guinea", value: 10876.033 },
              { name: "Gambia", value: 1680.64 },
              { name: "Guinea Bissau", value: 10876.033 },
              { name: "Equatorial Guinea", value: 696.167 },
              { name: "Greece", value: 11109.999 },
              { name: "Greenland", value: 56.546 },
              { name: "Guatemala", value: 14341.576 },
              { name: "French Guiana", value: 231.169 },
              { name: "Guyana", value: 786.126 },
              { name: "Honduras", value: 7621.204 },
              { name: "Croatia", value: 4338.027 },
              { name: "Haiti", value: 9896.4 },
              { name: "Hungary", value: 10014.633 },
              { name: "Indonesia", value: 240676.485 },
              { name: "India", value: 1205624.648 },
              { name: "Ireland", value: 4467.561 },
              { name: "Iran", value: 240676.485 },
              { name: "Iraq", value: 30962.38 },
              { name: "Iceland", value: 318.042 },
              { name: "Israel", value: 7420.368 },
              { name: "Italy", value: 60508.978 },
              { name: "Jamaica", value: 2741.485 },
              { name: "Jordan", value: 6454.554 },
              { name: "Japan", value: 127352.833 },
              { name: "Kazakhstan", value: 15921.127 },
              { name: "Kenya", value: 40909.194 },
              { name: "Kyrgyzstan", value: 5334.223 },
              { name: "Cambodia", value: 14364.931 },
              { name: "South Korea", value: 51452.352 },
              { name: "Kosovo", value: 97.743 },
              { name: "Kuwait", value: 2991.58 },
              { name: "Laos", value: 6395.713 },
              { name: "Lebanon", value: 4341.092 },
              { name: "Liberia", value: 3957.99 },
              { name: "Libya", value: 6040.612 },
              { name: "Sri Lanka", value: 20758.779 },
              { name: "Lesotho", value: 2008.921 },
              { name: "Lithuania", value: 3068.457 },
              { name: "Luxembourg", value: 507.885 },
              { name: "Latvia", value: 2090.519 },
              { name: "Morocco", value: 31642.36 },
              { name: "Moldova", value: 103.619 },
              { name: "Madagascar", value: 21079.532 },
              { name: "Mexico", value: 117886.404 },
              { name: "Macedonia", value: 507.885 },
              { name: "Mali", value: 13985.961 },
              { name: "Myanmar", value: 51931.231 },
              { name: "Montenegro", value: 620.078 },
              { name: "Mongolia", value: 2712.738 },
              { name: "Mozambique", value: 23967.265 },
              { name: "Mauritania", value: 3609.42 },
              { name: "Malawi", value: 15013.694 },
              { name: "Malaysia", value: 28275.835 },
              { name: "Namibia", value: 2178.967 },
              { name: "New Caledonia", value: 246.379 },
              { name: "Niger", value: 15893.746 },
              { name: "Nigeria", value: 159707.78 },
              { name: "Nicaragua", value: 5822.209 },
              { name: "Netherlands", value: 16615.243 },
              { name: "Norway", value: 4891.251 },
              { name: "Nepal", value: 26846.016 },
              { name: "New Zealand", value: 4368.136 },
              { name: "Oman", value: 2802.768 },
              { name: "Pakistan", value: 173149.306 },
              { name: "Panama", value: 3678.128 },
              { name: "Peru", value: 29262.83 },
              { name: "Philippines", value: 93444.322 },
              { name: "Papua New Guinea", value: 6858.945 },
              { name: "Poland", value: 38198.754 },
              { name: "Puerto Rico", value: 3709.671 },
              { name: "North Korea", value: 1.468 },
              { name: "Portugal", value: 10589.792 },
              { name: "Paraguay", value: 6459.721 },
              { name: "Qatar", value: 1749.713 },
              { name: "Romania", value: 21861.476 },
              { name: "Russia", value: 21861.476 },
              { name: "Rwanda", value: 10836.732 },
              { name: "Western Sahara", value: 514.648 },
              { name: "Saudi Arabia", value: 27258.387 },
              { name: "Sudan", value: 35652.002 },
              { name: "South Sudan", value: 9940.929 },
              { name: "Senegal", value: 12950.564 },
              { name: "Solomon Islands", value: 526.447 },
              { name: "Sierra Leone", value: 5751.976 },
              { name: "El Salvador", value: 6218.195 },
              { name: "Somaliland", value: 9636.173 },
              { name: "Somalia", value: 9636.173 },
              { name: "Republic of Serbia", value: 3573.024 },
              { name: "Suriname", value: 524.96 },
              { name: "Slovakia", value: 5433.437 },
              { name: "Slovenia", value: 2054.232 },
              { name: "Sweden", value: 9382.297 },
              { name: "Swaziland", value: 1193.148 },
              { name: "Syria", value: 7830.534 },
              { name: "Chad", value: 11720.781 },
              { name: "Togo", value: 6306.014 },
              { name: "Thailand", value: 66402.316 },
              { name: "Tajikistan", value: 7627.326 },
              { name: "Turkmenistan", value: 5041.995 },
              { name: "East Timor", value: 10016.797 },
              { name: "Trinidad and Tobago", value: 1328.095 },
              { name: "Tunisia", value: 10631.83 },
              { name: "Turkey", value: 72137.546 },
              { name: "United Republic of Tanzania", value: 44973.33 },
              { name: "Uganda", value: 33987.213 },
              { name: "Ukraine", value: 46050.22 },
              { name: "Uruguay", value: 3371.982 },
              { name: "United States of America", value: 312247.116 },
              { name: "Uzbekistan", value: 27769.27 },
              { name: "Venezuela", value: 236.299 },
              { name: "Vietnam", value: 89047.397 },
              { name: "Vanuatu", value: 236.299 },
              { name: "West Bank", value: 13.565 },
              { name: "Yemen", value: 22763.008 },
              { name: "South Africa", value: 51452.352 },
              { name: "Zambia", value: 13216.985 },
              { name: "Zimbabwe", value: 13076.978 }
            ]
          }
        ]
      });
      window.addEventListener("resize", function() {
        GlobalCharts.resize();
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