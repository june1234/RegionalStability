<template>
  <div class="bar">
    
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: 'barCharts',
 props:{

 },
  data () {
    return {
    }
  },
  mounted(){
      this.bar()
  },
  methods: {
          // 柱状图与曲线结合
    bar() {
        const mychart = echarts.init(this.$el);
        mychart.setOption({
          color: ["#4cabce", "#d14a61", "#675bba"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999"
              }
            }
          },
          legend: [
            {
              data: ["等级1", "等级2", "等级3"]
            },
            {
              top: 20,
              data: ["区域", "人物"]
            }
          ],
          xAxis: [
            {
              type: "category",
              data: ["区域", "人物"],
              axisPointer: {
                type: "shadow"
              }
            },
            {
              type: "category",
              name: "时间",
              nameGap: 30,
              position: "bottom",
              offset: 15,
              nameLocation: "center",
              nameTextStyle: {
                color: "#000",
                fontSize: 14
              },
              data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"]
            }
          ],
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "等级1",
              type: "bar",
              barWidth: 10,
              data: [2.0, 4.9, 7.0]
            },
            {
              name: "等级2",
              type: "bar",
              barWidth: 10,
              data: [2.6, 5.9, 9.0]
            },
            {
              name: "等级3",
              type: "bar",
              barWidth: 10,
              data: [2.6, 5.9, 9.0]
            },
            {
              name: "人物",
              type: "line",
              xAxisIndex: 1,
              smooth: true,
              data: [1.0, 3.2, 7.3, 4.5, 6.3, 10.2, 8.3]
            },
            {
              name: "区域",
              type: "line",
              xAxisIndex: 1,
              smooth: true,
              data: [2.0, 2.2, 2.3, 5.5, 9.3, 10.2, 5.3, 7.4]
            }
          ]
        });
        window.addEventListener("resize", function() {
          mychart.resize();
        });
    },

  }
}
</script>

<style lang='less' scoped>
.bar{
    width: 100%;
    height: 500px;

}
</style>
