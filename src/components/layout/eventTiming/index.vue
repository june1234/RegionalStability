<template>
  <div class="EventTimingAnalysis">
    <el-row>
      <el-col :span="6">
        <h2 class="title">事件演变分析</h2>
      </el-col>
      <!-- <el-col :span="18">
        <el-button type="text">说明</el-button>
      </el-col> -->
    </el-row>
    <el-tabs type="border-card">
      <el-tab-pane
        label="中美贸易战"
        :lazy="true"
      >
        <usa-line></usa-line>
        <topice-charts
          :all="USATopiceData"
          :title="USATopiceTitle"
        ></topice-charts>
      </el-tab-pane>
      <el-tab-pane
        label="中国"
        :lazy="true"
      >
        <china-line></china-line>
        <topice-charts
          :all="chinaTopiceData"
          :title="chinaTopiceTitle"
        ></topice-charts>
      </el-tab-pane>
      <el-tab-pane
        label="印度"
        :lazy="true"
      >
        <india-line></india-line>
        <topice-charts
          :all="indiaTopiceData"
          :title="indiaTopiceTitle"
        ></topice-charts>
      </el-tab-pane>
      <el-tab-pane
        label="日本"
        :lazy="true"
      >
        <japan-line></japan-line>
        <topice-charts
          :all="JapanTopiceData"
          :title="JapanTopiceTitle"
        ></topice-charts>
      </el-tab-pane>
      <el-tab-pane
        label="朝鲜"
        :lazy="true"
      >
        <korea-line></korea-line>
        <topice-charts
          :all="koreaTopiceData"
          :title="koreaTopiceTitle"
        ></topice-charts>
      </el-tab-pane>
      <el-tab-pane
        label="韩国"
        :lazy="true"
      >
        <sKorea-line></sKorea-line>
        <topice-charts
          :all="southKoreaTopiceData"
          :title="southKoreaTopiceTitle"
        ></topice-charts>
      </el-tab-pane>
      <el-tab-pane
        label="美国"
        :lazy="true"
      >
        <american-line></american-line>
        <topice-charts
          :all="americanTopiceData"
          :title="americanTopiceTitle"
        ></topice-charts>
      </el-tab-pane>
    </el-tabs>
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
import { findword,findTitle } from "@/api/eventTiming/EventTimingAnalysis";
import lineCharts from "@/components/layout/general/charts/line.vue";
import USATopiceData from "@/assets/zhongmei/USATopice.json";
import chinaTopiceData from "@/assets/china/chinaTopice.json";
import indiaTopiceData from "@/assets/india/indiaTopice.json";
import JapanTopiceData from "@/assets/japan/JapanTopice.json";
import koreaTopiceData from "@/assets/korea/koreaTopice.json";
import southKoreaTopiceData from "@/assets/southKoreaTopice.json";
import americanTopiceData from "@/assets/usa/americanTopice.json";
import topiceCharts from "@/components/layout/general/index/USA/USA.vue";
import usaLine from "@/components/layout/general/index/USA/USALine.vue";
import chinaLine from "@/components/layout/general/index/USA/chinaLine.vue";
import indiaLine from "@/components/layout/general/index/USA/indiaLine.vue";
import japanLine from "@/components/layout/general/index/USA/JapanLine.vue";
import koreaLine from "@/components/layout/general/index/USA/koreaLine.vue";
import sKoreaLine from "@/components/layout/general/index/USA/southKoreaLine.vue";
import americanLine from "@/components/layout/general/index/USA/americanLine.vue";

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
      USATopiceTitle: "中美贸易战态势热力图",
      chinaTopiceData: {},
      chinaTopiceTitle: "中国政治经济态势热力图",
      indiaTopiceData: {},
      indiaTopiceTitle: "印度政治经济态势热力图",
      JapanTopiceData: {},
      JapanTopiceTitle: "日本政治经济态势热力图",
      koreaTopiceData: {},
      koreaTopiceTitle: "朝鲜政治经济态势热力图",
      southKoreaTopiceData: {},
      southKoreaTopiceTitle: "韩国政治经济态势热力图",
      americanTopiceData: {},
      americanTopiceTitle: "美国政治经济态势热力图",
      country:""
    };
  },
  components: {
    lineCharts,
    topiceCharts,
    usaLine,
    chinaLine,
    indiaLine,
    japanLine,
    koreaLine,
    sKoreaLine,
    americanLine
  },
  created() {
    this.selectEventTiming();
    this.USATopiceData = USATopiceData;
    this.chinaTopiceData = chinaTopiceData;
    this.indiaTopiceData = indiaTopiceData;
    this.JapanTopiceData = JapanTopiceData;
    this.koreaTopiceData = koreaTopiceData;
    this.southKoreaTopiceData = southKoreaTopiceData;
    this.americanTopiceData = americanTopiceData;
  },
  mounted() {},
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
        console.log(res.data)
         this.news=res.data
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
    }
  }
};
</script>

<style>
</style>