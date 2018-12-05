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
    <el-tabs type="border-card">
      <el-tab-pane label="事件名称">事件名称</el-tab-pane>
      <el-tab-pane label="事件名称">事件名称</el-tab-pane>
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
      <el-row :gutter="20">
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
      <el-row :gutter="20">
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
      <el-row :gutter="20">
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
      <el-row :gutter="20">
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
      <el-row :gutter="20">
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
      <el-row :gutter="20">
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
      <el-row :gutter="20">
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
import data from "../../../assets/1.json";
import { formatterDate, formatterMonthStr } from "@/utils/filter.js";
import {
  findword,
  paintingweight
} from "@/api/eventTiming/EventTimingAnalysis";
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
      datas: "",
      words: [],
      lines: {},
      frequency: [],
      months: [],
      graphs: [],
      a: []
      // customization: false,
      // Customization: {
      //   name: "",
      //   Countrys: [],
      //   startTime: "",
      //   endTime: "",
      //   keyword1: "",
      //   keyword2: "",
      //   keyword3: "",
      //   keyword4: "",
      //   keyword5: "",
      //   keyword6: "",
      //   keyword7: "",
      //   keyword8: "",
      //   keyword9: "",
      //   keyword10: ""
      // },
      // keyWordShow: false
    };
  },
  created() {
    this.selectEventTiming();
  },
  mounted() {
    this.datas = data;
  },
  methods: {
    //查询
    selectEventTiming() {
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
      paintingweight(this.eventGroulp).then(res => {
        this.graphs = res.data;
        this.graph();
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