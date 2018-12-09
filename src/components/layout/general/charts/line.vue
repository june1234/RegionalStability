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
  props:{
    lineData:Object
  },
  watch:{
    lineData:function ( newData , oldData ){
         if(newData){
            this.lineData=newData
            this.line()
         }
    }
},
  mounted() {
     this.line()
  },
  methods: {
    // 曲线图
    line() {
      for(var i in this.lineData.Ydata){
        this.lineData.Ydata[i].type="line"
        this.lineData.Ydata[i].data=this.lineData.Ydata[i].value
        this.lineData.Ydata[i].smooth=true
      }
      const mychart = echarts.init(this.$el);
      mychart.setOption({
        color: ["#4cabce", "#d14a61", "#675bba"],
        legend: {},
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
          data: this.lineData.xtime,
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
        series: this.lineData.Ydata
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
  height: 400px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding: 20px;
}
</style>
