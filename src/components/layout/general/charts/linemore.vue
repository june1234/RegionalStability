<template>
  <div class="line">
    
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: 'moreLine',
  props:{
    moreData:Object
  },
  data () {
    return {
      
    }
  },
watch:{
  moreData:function ( newData , oldData ){
         if(newData){
            this.moreData=newData
            this.line()
         }
    }
},
mounted(){
this.line()
},
  methods: {
      line(){
      const VicCharts = echarts.init(this.$el);
      VicCharts.clear()
      const option = {
        color: ["#f54e96", "#8ed41b", "#7631a6", "#eadc27"],
        title: {
          left: 330,
          text: "受害目标时序分析",
          subtext: "Time series analysis of victims"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        grid: {
          height: 350,
          right: 250
        },
        xAxis: {
          type: "category",
          data: this.moreData.x_zhou
        },
        yAxis: {
          type: "value"
        },
        legend: {
          right: 50,
          top: 300,
          orient: "vertical",
        },
        series: this.moreData.data
      };
      VicCharts.setOption(option);
      window.addEventListener("resize", function() {
        VicCharts.resize();
      });
      }
  }
}
</script>

<style lang='less' scoped>
.line{
  width: 100%;
  height: 500px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding: 20px;
}
</style>
