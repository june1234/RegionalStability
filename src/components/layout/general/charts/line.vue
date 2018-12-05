<template>
  <div class="lineCharts">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "lineCharts",

  data() {
    return {};
  },
  mounted() {
    this.line();
  },
  methods: {
    // 曲线图
    line() {
        console.log(this);
        const mychart = echarts.init(this.$el);
        mychart.setOption({
          color: ["#4cabce", "#d14a61", "#675bba"],
          legend: {
            data: ["9分", "6分以上", "6分以下"],
            textStyle: {
              fontSize: 16
            }
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
          xAxis: {
            type: "category",
            name: "时间",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
          series: [
            {
              name: "9分",
              data: [20, 34, 23, 45, 12, 23, 12],
              type: "line",
              smooth: true
            },
            {
              name: "6分以上",
              data: [23, 35, 21, 36, 23, 54, 12],
              type: "line",
              smooth: true
            },
            {
              name: "6分以下",
              data: [22, 37, 24, 35, 14, 23, 17],
              type: "line",
              smooth: true
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
.lineCharts {
  width: 100%;
  height: 500px;
}
</style>
