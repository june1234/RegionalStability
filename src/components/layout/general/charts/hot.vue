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
    };
  },
  props:{
    hotData:Array
  },
  watch:{
    hotData:function ( newData , oldData ){
         if(newData){
            this.hotData=newData
            this.hot()
         }
    }
  },
  mounted() {
    this.hot();
  },
  methods: {
    hot() {
      for(let i in this.hotData){
        this.hotData[i].type="scatter"
        this.hotData[i].symbolSize=Math.random()*50
      }
      const mychart = echarts.init(this.$el);
      mychart.clear()
      mychart.setOption({
        color:["#5ab1ef","#e5cf0d","#dc69aa","#a0a7e6"],
        legend: {
          textStyle: {
            fontSize: 16
          }
        },
        xAxis: {
          type: "value",
          nameLocation: "center",
          nameTextStyle: {
            color: "#000",
            fontSize: 14
          },
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
        series:this.hotData
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
  height: 400px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border:1px solid #fff;
  padding:20px;
}
</style>
