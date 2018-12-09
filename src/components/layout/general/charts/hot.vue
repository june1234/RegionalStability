<template>
  <div class="hot">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "hotCharts",

  data() {
    return {
      dataBJ: [
        [1, 55, 9, 56, 0.46, 18, 6, "良"],
        [2, 25, 11, 21, 0.65, 34, 9, "优"],
        [3, 56, 7, 63, 0.3, 14, 5, "良"],
        [4, 33, 7, 29, 0.33, 16, 6, "优"],
        [5, 42, 24, 44, 0.76, 40, 16, "优"],
        [6, 82, 58, 90, 1.77, 68, 33, "良"],
        [7, 74, 49, 77, 1.46, 48, 27, "良"],
        [8, 78, 55, 80, 1.29, 59, 29, "良"],
        [9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
        [10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
        [11, 39, 19, 38, 0.57, 31, 15, "优"],
        [12, 41, 11, 40, 0.43, 21, 7, "优"]
      ],
      dataGZ: [
        [1, 26, 37, 27, 1.163, 27, 13, "优"],
        [2, 85, 62, 71, 1.195, 60, 8, "良"],
        [3, 78, 38, 74, 1.363, 37, 7, "良"],
        [4, 21, 21, 36, 0.634, 40, 9, "优"],
        [5, 41, 42, 46, 0.915, 81, 13, "优"],
        [6, 56, 52, 69, 1.067, 92, 16, "良"],
        [7, 64, 30, 28, 0.924, 51, 2, "良"],
        [8, 55, 48, 74, 1.236, 75, 26, "良"],
        [9, 76, 85, 113, 1.237, 114, 27, "良"],
        [10, 91, 81, 104, 1.041, 56, 40, "良"],
        [11, 84, 39, 60, 0.964, 25, 11, "良"],
        [12, 64, 51, 101, 0.862, 58, 23, "良"]
      ],
      dataSH: [
        [1, 91, 45, 125, 0.82, 34, 23, "良"],
        [2, 65, 27, 78, 0.86, 45, 29, "良"],
        [3, 83, 60, 84, 1.09, 73, 27, "良"],
        [4, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
        [5, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
        [6, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
        [7, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
        [8, 89, 65, 78, 0.86, 51, 26, "良"],
        [9, 53, 33, 47, 0.64, 50, 17, "良"],
        [10, 80, 55, 80, 1.01, 75, 24, "良"],
        [11, 117, 81, 124, 1.03, 45, 24, "轻度污染"],
        [12, 99, 71, 142, 1.1, 62, 42, "良"]
      ]
    };
  },
  mounted() {
    this.hot();
  },
  methods: {
    hot() {
      const mychart = echarts.init(this.$el);
      mychart.setOption({
        color: ["#003366", "#006699", "#4cabce"],
        legend: {
          data: ["北京", "上海", "广州"],
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        xAxis: {
          type: "value",
          name: "时间",
          nameGap: 30,
          nameLocation: "center",
          nameTextStyle: {
            color: "#000",
            fontSize: 14
          },
          max: 12,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#1ca1e8"
            }
          }
        },
        yAxis: {
          type: "value",
          name: "分数",
          nameLocation: "end",
          nameGap: 20,
          nameTextStyle: {
            color: "#000",
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: "#1ca1e8"
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "北京",
            type: "scatter",
            itemStyle: this.itemStyle,
            data: this.dataBJ
          },
          {
            name: "上海",
            type: "scatter",
            itemStyle: this.itemStyle,
            data: this.dataSH
          },
          {
            name: "广州",
            type: "scatter",
            itemStyle: this.itemStyle,
            data: this.dataGZ
          }
        ]
      });
      window.addEventListener("resize", function() {
        mychart.resize();
      });
    }
  }
};
</script>

<style lang='less' scoped>
.hot {
  width: 100%;
  height: 550px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border:1px solid #fff;
  padding:20px;
}
</style>
