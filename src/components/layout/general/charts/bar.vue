<template>
  <div class="bar">
    
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: 'barCharts',
  props:{
      barData:Array
  },
  data () {
    return {
    }
  },
watch:{
    barData:function ( newData , oldData ){
         if(newData){
            this.barData=newData
            this.bar()
         }
    }
},
mounted(){
this.bar()
},
  methods: {
      bar(){
      const AttCharts = echarts.init(this.$el);
      const option = {
        color: ["#f54e96", "#8ed41b", "#7631a6", "#eadc27"],
        title: {
          text: "恐怖袭击事件分类分析",
          subtext: "Classified analysis of terrorist attacks"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              1992,
              1993,
              1994,
              1995,
              1996,
              1997,
              1998,
              1999,
              2000,
              2001,
              2002,
              2003,
              2004,
              2005,
              2006,
              2007,
              2008
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series:this.barData
      };
      AttCharts.setOption(option);
      window.addEventListener("resize", function() {
        AttCharts.resize();
      });
      }
  }
}
</script>

<style lang='less' scoped>
.bar{
      width: 100%;
  height: 500px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding: 20px;

}
</style>
