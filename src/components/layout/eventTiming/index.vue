<template>
  <div class="EventTimingAnalysis">
    <el-row>
      <el-col :span="6">
        <h2 class="title">议题分析</h2>
      </el-col>
      <el-col :span="18">
        <el-button type="text">说明</el-button>
      </el-col>
    </el-row>
    <el-tabs type="border-card" >
      <el-tab-pane label="中美贸易战" :lazy="true">
          <topice-charts :all="USATopiceData" :title="USATopiceTitle"></topice-charts>
          <usa-line :all="USALineData" :title="USALineTitle"></usa-line>
      </el-tab-pane>
      <el-tab-pane label="中国" :lazy="true">
          <topice-charts :all="chinaTopiceData" :title="chinaTopiceTitle"></topice-charts>
          <usa-line :all="ChinaLineData" :title="ChinaLineTitle"></usa-line>
      </el-tab-pane>
      <el-tab-pane label="印度" :lazy="true">
          <topice-charts :all="indiaTopiceData" :title="indiaTopiceTitle"></topice-charts>
          <usa-line :all="indiaLineData" :title="indiaLineTitle"></usa-line>
      </el-tab-pane>
      <el-tab-pane label="日本" :lazy="true">
          <topice-charts :all="JapanTopiceData" :title="JapanTopiceTitle"></topice-charts>
          <usa-line :all="JapanLineData" :title="JapanLineTitle"></usa-line>
      </el-tab-pane>
      <el-tab-pane label="朝鲜" :lazy="true">
          <topice-charts :all="koreaTopiceData" :title="koreaTopiceTitle"></topice-charts>
          <usa-line :all="koreaLineData" :title="koreaLineTitle"></usa-line>
      </el-tab-pane>
      <el-tab-pane label="韩国" :lazy="true">
          <topice-charts :all="southKoreaTopiceData" :title="southKoreaTopiceTitle"></topice-charts>
          <usa-line :all="southKoreaLineData" :title="southKoreaLineTitle"></usa-line>
      </el-tab-pane>
      <el-tab-pane label="美国" :lazy="true">
          <topice-charts :all="americanTopiceData" :title="americanTopiceTitle"></topice-charts>
          <usa-line :all="americanLineData" :title="americanLineTitle"></usa-line>
      </el-tab-pane>
    </el-tabs>
    <el-form
      :model="eventTimingFormData"
      ref="form"
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
          v-model="eventTimingFormData.Country"
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
      <el-form-item>

      </el-form-item>
      <el-form-item label="选择时间">
        <el-date-picker
          v-model="eventTimingFormData.beginDate"
          type="date"
          placeholder="请输入开始时间"
        >
        </el-date-picker>
        <el-date-picker
          v-model="eventTimingFormData.endDate"
          type="date"
          placeholder="请输入结束时间"
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
      <h5>日本</h5>
      <el-row>
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 350px;"
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
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="line"
              style="width: 100%;height: 200px;"
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
                prop="title"
                label="标题"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                min-width="30%"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <h5>朝鲜</h5>
      <el-row>
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 350px;"
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
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="line"
              style="width: 100%;height: 200px;"
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
                prop="title"
                label="标题"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                min-width="30%"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <h5>印度</h5>
      <el-row >
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 350px;"
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
                v-for=" item  in frequency"
                :key="item"
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="line"
              style="width: 100%;height: 200px;"
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
                prop="title"
                label="标题"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                min-width="30%"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <h5>韩国</h5>
      <el-row>
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 350px;"
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
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="line"
              style="width: 100%;height: 200px;"
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
                prop="title"
                label="标题"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                min-width="30%"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <h5>中国</h5>
      <el-row>
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 350px;"
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
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="line"
              style="width: 100%;height: 200px;"
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
                prop="title"
                label="标题"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                min-width="30%"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <h5>美国</h5>
      <el-row>
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 350px;"
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
                v-for=" item  in frequency"
                :key="item"
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="line"
              style="width: 100%;height: 200px;"
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
                prop="title"
                label="标题"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="时间"
                min-width="30%"
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="statistics">
      <h5>巴基斯坦</h5>
      <el-row>
        <el-col :span="8">
          <div
            class="grid-content bg-purple wordCloud"
            style="width: 100%;height: 350px;"
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
              >
                <el-button type="text">{{item}}</el-button>
              </el-col>
            </el-row>
            <div
              class="line"
              style="width: 100%;height: 200px;"
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
                prop="title"
                label="标题"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型"
                min-width="30%"
              >
              </el-table-column>
              <el-table-column
                prop="time"
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
import {
  findword} from "@/api/eventTiming/EventTimingAnalysis";
import lineCharts from '@/components/layout/general/charts/line.vue';
import USALineData from "@/assets/USALine.json";
import USATopiceData from "@/assets/USATopice.json";
import chinaTopiceData from "@/assets/chinaTopice.json";
import ChinaLineData from "@/assets/ChinaLine.json";
import indiaTopiceData from "@/assets/indiaTopice.json";
import indiaLineData from "@/assets/indiaLine.json";
import JapanTopiceData from "@/assets/JapanTopice.json";
import JapanLineData from "@/assets/JapanLine.json";
import koreaTopiceData from "@/assets/koreaTopice.json";
import koreaLineData from "@/assets/koreaLine.json";
import southKoreaTopiceData from "@/assets/southKoreaTopice.json";
import southKoreaLineData from "@/assets/southKoreaLine.json";
import americanTopiceData from "@/assets/americanTopice.json";
import americanLineData from "@/assets/americanLine.json";
import topiceCharts from "@/components/layout/general/index/USA/USA.vue";
import usaLine from "@/components/layout/general/index/USA/USALine.vue";

export default {
  data() {
    return {
      //form表单查询条件
      eventTimingFormData: {
        Country: ["印度"],
        startTime: "2018-01-01 00:00:00",
        endTime: "2018-06-30 00:00:00",
        num: 20
      },
      eventGroulp: {
        begin: "2018-01-01",
        end: "2018-01-03",
        word: "中国"
      },
      countrys: ["日本", "朝鲜", "印度", "韩国", "中国", "美国", "巴基斯坦"],
      isIndeterminate: false,
      checkAll: true,
      news: [],
      words: [],
      lines: {},
      frequency: [],
      months: [],
      a: [],
      USATopiceData:{},
      USALineData:{},
      USATopiceTitle:"中美贸易战态势热力图",
      USALineTitle:"中美贸易战态势趋势图",
      chinaTopiceData:{},
      ChinaLineData:{},
      chinaTopiceTitle:"中国政治经济态势热力图",
      ChinaLineTitle:"中国政治经济态势趋势图",
      indiaTopiceData:{},
      indiaLineData:{},
      indiaTopiceTitle:"印度政治经济态势热力图",
      indiaLineTitle:"印度政治经济态势趋势图",
      JapanTopiceData:{},
      JapanLineData:{},
      JapanTopiceTitle:"日本政治经济态势热力图",
      JapanLineTitle:"日本政治经济态势趋势图",
      koreaTopiceData:{},
      koreaLineData:{},
      koreaTopiceTitle:"朝鲜政治经济态势热力图",
      koreaLineTitle:"朝鲜政治经济态势趋势图",
      southKoreaTopiceData:{},
      southKoreaLineData:{},
      southKoreaTopiceTitle:"韩国政治经济态势热力图",
      southKoreaLineTitle:"韩国政治经济态势趋势图",
      americanTopiceData:{},
      americanLineData:{},
      americanTopiceTitle:"美国政治经济态势热力图",
      americanLineTitle:"美国政治经济态势趋势图",
    };
  },
  components:{
    lineCharts,
    topiceCharts,
    usaLine
  },
  created() {
    this.selectEventTiming();
    this.USATopiceData=USATopiceData
    this.USALineData=USALineData
    this.chinaTopiceData=chinaTopiceData
    this.ChinaLineData=ChinaLineData
    this.indiaTopiceData=indiaTopiceData
    this.indiaLineData=indiaLineData
    this.JapanTopiceData=JapanTopiceData
    this.JapanLineData=JapanLineData
    this.koreaTopiceData=koreaTopiceData
    this.koreaLineData=koreaLineData
    this.southKoreaTopiceData=southKoreaTopiceData
    this.southKoreaLineData=southKoreaLineData
    this.americanTopiceData=americanTopiceData
    this.americanLineData=americanLineData
  },
  mounted() {
  },
  methods: {
    //查询
    selectEventTiming() {
      console.log(this.eventTimingFormData)
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
        console.log(x);
        console.log(this.frequency);
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
    },
    handleCheckAllChange(val) {
      this.eventTimingFormData.Country = val ? this.countrys : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.countrys.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.countrys.length;
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
      const lines = document.getElementsByClassName("line");
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