<template>
  <div class="EventTimingAnalysis">
    <el-row>
      <el-col :span="6">
        <h2 class="title">事件演变分析</h2>
      </el-col>
      <el-col :span="18">
        <el-button type="text">说明</el-button>
      </el-col>
    </el-row>
    <el-tabs type="border-card">
      <el-tab-pane
        label="中美贸易战"
        :lazy="true"
      >
        <time-charts :all="usaTimeLineData" :title="USATopiceTitle"></time-charts>
        <topic-table :topicTableData="usaTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
            <topice-charts
              :all="USATopiceData"
              :title="USATopiceTitle"
            ></topice-charts>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="中国"
        :lazy="true"
      >
        <time-charts :all="chinaTimeLineData" :title="chinaTopiceTitle"></time-charts>
        <topic-table :topicTableData="chinaTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
          <topice-charts
            :all="chinaTopiceData"
            :title="chinaTopiceTitle"
          ></topice-charts>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="印度"
        :lazy="true"
      >
        <time-charts :all="indiaTimeLineData" :title="indiaTopiceTitle"></time-charts>
        <topic-table :topicTableData="indiaTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
          <topice-charts
            :all="indiaTopiceData"
            :title="indiaTopiceTitle"
          ></topice-charts>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="日本"
        :lazy="true"
      >
        <time-charts :all="japanTimeLineData" :title="JapanTopiceTitle"></time-charts>
        <topic-table :topicTableData="japanTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
        <topice-charts
          :all="JapanTopiceData"
          :title="JapanTopiceTitle"
        ></topice-charts>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="朝鲜"
        :lazy="true"
      >
        <time-charts :all="koreaTimeLineData" :title="koreaTopiceTitle"></time-charts>
        <topic-table :topicTableData="koreaTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
          <topice-charts
            :all="koreaTopiceData"
            :title="koreaTopiceTitle"
          ></topice-charts>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="韩国"
        :lazy="true"
      >
        <time-charts :all="southKoreaTimeLineData" :title="southKoreaTopiceTitle"></time-charts>
        <topic-table :topicTableData="southKoreaTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
            <topice-charts
              :all="southKoreaTopiceData"
              :title="southKoreaTopiceTitle"
            ></topice-charts>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="美国"
        :lazy="true"
      >
        <time-charts :all="americanTimeLineData" :title="americanTopiceTitle"></time-charts>
        <topic-table :topicTableData="americanTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
          <topice-charts
            :all="americanTopiceData"
            :title="americanTopiceTitle"
          ></topice-charts>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="朝核问题"
        :lazy="true"
      >
        <time-charts :all="chaoheTimeLineData" :title="chaoheTopiceTitle"></time-charts>
        <topic-table :topicTableData="chaoheTimeTableData"></topic-table>
        <div style="width:100%;height:600px;overflow-y:scroll;">
          <topice-charts
            :all="chaoheTopiceData"
            :title="chaoheTopiceTitle"
          ></topice-charts>
        </div>
      </el-tab-pane>
    </el-tabs>
    <line-charts :lineData="getForecastData"></line-charts>
    <el-form
      :inline="true"
      :model="eventTimingFormData"
      class="demo-form-inline"
    >
      <el-form-item label="选择国家">
        <el-select
          v-model="eventTimingFormData.countrycode"
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
      <el-form-item>
        <el-date-picker
          v-model="eventTimingFormData.startTime"
          type="date"
          placeholder="请输入开始时间"
          value-format="yyyy-MM-dd hh:mm:ss"
        >
        </el-date-picker>
        <el-date-picker
          v-model="eventTimingFormData.endTime"
          type="date"
          placeholder="请输入结束时间"
          value-format="yyyy-MM-dd hh:mm:ss"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="selectEventTiming"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <div class="statistics">
      <h5>{{country}}</h5>
      <el-row>
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 500px;"
          >
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <h4>排名前8的词</h4>
            <el-row
              :gutter="20"
              class="ci"
            >
              <el-col
                :span="6"
                v-for=" item in frequency"
                :key="item"
                style="line-height:80px;"
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="lineD"
              style="width: 100%;height: 400px;"
            >
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-table
              :data="news"
              style="width: 100%"
            >
              <el-table-column
                prop="frequencyTitle"
                label="标题"
                min-width="70%"
              >
              </el-table-column>
              <el-table-column
                prop="countMonth"
                label="时间"
                min-width="30%"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts-wordcloud";
import { formatterDate, formatterMonthStr } from "@/utils/filter.js";
import { findword,findTitle,TrendData,HeatData,getForecastEventNumber } from "@/api/eventTiming/EventTimingAnalysis";
import {getDes} from "@/api/common"
import lineCharts from "@/components/layout/general/charts/line.vue";
import topiceCharts from "@/components/layout/general/index/USA/USA.vue";
import timeCharts from "@/components/layout/general/charts/timeLineCharts.vue";
import topicTable from "@/components/layout/general/topicTable.vue"
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
      //form表单查询条件
      eventTimingFormData: {
        countrycode: "IND",
        startTime: "2018-01-01 00:00:00",
        endTime: "2018-10-01 00:00:00"
      },
      news: [],
      words: [],
      lines: {},
      frequency: [],
      months: [],
      a: [],
      USATopiceData: {},
      USATopiceTitle: "中美贸易战",
      chinaTopiceData: {},
      chinaTopiceTitle: "中国政治经济",
      indiaTopiceData: {},
      indiaTopiceTitle: "印度政治经济",
      JapanTopiceData: {},
      JapanTopiceTitle: "日本政治经济",
      koreaTopiceData: {},
      koreaTopiceTitle: "朝鲜政治经济",
      southKoreaTopiceData: {},
      southKoreaTopiceTitle: "韩国政治经济",
      americanTopiceData: {},
      americanTopiceTitle: "美国政治经济",
      chaoheTopiceData: {},
      chaoheTopiceTitle: "朝核问题",
      country:"",
      usaTimeLineData:{},
      chinaTimeLineData:{},
      indiaTimeLineData:{},
      japanTimeLineData:{},
      koreaTimeLineData:{},
      southKoreaTimeLineData:{},
      americanTimeLineData:{},
      chaoheTimeLineData:{},
      usaTimeTableData:[],
      chinaTimeTableData:[],
      indiaTimeTableData:[],
      japanTimeTableData:[],
      koreaTimeTableData:[],
      southKoreaTimeTableData:[],
      americanTimeTableData:[],
      chaoheTimeTableData:[],
      getForecastData:{}
    }
  },
  components: {
    timeCharts,
    topiceCharts,
    topicTable,
    lineCharts
  },
  created() {
    this.selectEventTiming();
    this.trendData()
    this.heatData()
  },
  methods: {
    //查询
    selectEventTiming() {
      this.frequency=[]
       this.words=[]
      for( let i in this.options){
          if(this.eventTimingFormData.countrycode===this.options[i].value){
                this.country=this.options[i].label
          }
        }
      findword(this.eventTimingFormData).then(res => {
        const b = res.data.countWordVos;
        for (var i = 0; i < b.length; i++) {
          const word = {};
          word.name = b[i].frequencyWord;
          word.value = b[i].countNumSum;
          this.words.push(word);
        }
        this.lines = res.data.map;
        const x = [];
        for (var i in this.lines) {
          x.push(i);
        }
        for (var i in this.lines[x[0]]) {
          this.frequency.push(i);
        }
        const y = this.lines;
        const a = [];
        this.frequency.forEach(function(value, index) {
          var oo = {};
          const country = value;
          oo.name = country;
          oo.type = "line";
          oo.smooth = true;
          x.forEach(function(value, index) {
            var data = [];
            for (var i in y) {
              if (y[i][country] === null) {
                data.push(0);
              } else {
                data.push(y[i][country]);
              }
            }
            oo.data = data;
          });
          a.push(oo);
        });
        this.a = a;
        for (let i = 0; i < x.length; i++) {
          this.months[i] = formatterMonthStr(x[i]);
        }
        this.wordCloud();
        this.line();
      });
      findTitle(this.eventTimingFormData).then(res=>{
         this.news=res.data
      })
      getForecastEventNumber().then(res=>{
        this.getForecastData=res.data
        console.log(this.getForecastData)
      })
    },
    // 生成词云
    wordCloud() {
      // 基于准备好的dom，初始化echarts实例
      const wordClouds = document.getElementsByClassName("wordCloud");
      for (var i = 0; i < wordClouds.length; i++) {
        let myChart = echarts.init(wordClouds[i]);
        // 绘制图表
        let option = {
          tooltip: {
            show: true
          },
          series: [
            {
              type: "wordCloud",
              size: ["80%", "80%"],
              shape: "smooth",
              textRotation: [0, 45, 90, -45],
              textPadding: 0,
              autoSize: {
                enable: true,
                minSize: 14
              },
              textStyle: {
                normal: {
                  fontFamily: "sans-serif",
                  color: function() {
                    return (
                      "rgb(" +
                      [
                        Math.round(Math.random() * 250),
                        Math.round(Math.random() * 250),
                        Math.round(Math.random() * 250)
                      ].join(",") +
                      ")"
                    );
                  }
                },
                emphasis: {
                  shadowBlur: 5, //阴影距离
                  shadowColor: "#333" //阴影颜色
                }
              },
              data: this.words
            }
          ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      }
    },
    //曲线
    line() {
      const lines = document.getElementsByClassName("lineD");
      for (var i = 0; i < lines.length; i++) {
        const mychart = echarts.init(lines[i]);
        mychart.setOption({
          color: ["#4cabce", "#d14a61", "#675bba"],
          legend: {
            data: this.frequency
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999"
              }
            }
          },
          grid: {
            left: "20%",
            right: "10%"
          },
          xAxis: {
            type: "category",
            name: "时间",
            data: this.months,
            nameGap: 30,
            nameLocation: "center",
            nameTextStyle: {
              color: "#000",
              fontSize: 14
            }
          },
          yAxis: {
            type: "value"
          },
          series: this.a
        });
        window.addEventListener("resize", function() {
          mychart.resize();
        });
      }
    },
    // 事件演变曲线
    trendData(){
      TrendData('zhongmei').then(res=>{
        this.usaTimeLineData=res.data
        this.usaTimeTableData=res.data.table
      })
      TrendData('zhongguo').then(res=>{
        this.chinaTimeLineData=res.data
        this.chinaTimeTableData=res.data.table
      })
      TrendData('yindu').then(res=>{
        this.indiaTimeLineData=res.data
        this.indiaTimeTableData=res.data.table
      })
      TrendData('riben').then(res=>{
        this.japanTimeLineData=res.data
        this.japanTimeTableData=res.data.table
      })
      TrendData('chaoxian').then(res=>{
        this.koreaTimeLineData=res.data
        this.koreaTimeTableData=res.data.table
      })
      TrendData('hanguo').then(res=>{
        this.southKoreaTimeLineData=res.data
        this.southKoreaTimeTableData=res.data.table
      })
      TrendData('meiguo').then(res=>{
        this.americanTimeLineData=res.data
        this.americanTimeTableData=res.data.table
      })
      TrendData('chaohe').then(res=>{
        this.chaoheTimeLineData=res.data
        this.chaoheTimeTableData=res.data.table
      })
    },
    // 事件热力图
    heatData(){
       HeatData('zhongmei').then(res=>{
          this.USATopiceData = res.data;
       })
       HeatData('zhongguo').then(res=>{
         this.chinaTopiceData = res.data;
       })
       HeatData('yindu').then(res=>{
         this.indiaTopiceData = res.data;
       })
       HeatData('riben').then(res=>{
         this.JapanTopiceData = res.data;
       })
       HeatData('chaoxian').then(res=>{
         this.koreaTopiceData = res.data;
       })
       HeatData('hanguo').then(res=>{
         this.southKoreaTopiceData = res.data;
       })
       HeatData('meiguo').then(res=>{
         this.americanTopiceData = res.data;
       })
       HeatData('chaohe').then(res=>{
         this.chaoheTopiceData = res.data;
       })
    }
  }
};
</script>

<style>
</style>