<template>
  <div class="bar">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "barCharts",
  props: {
    sunData:Array,
    color:String
  },
  watch:{
    sunData:function ( newData , oldData ){
         if(newData){
          //  mychart.showLoading();
            this.sundata=newData
            this.bar()
         }
    },
    color:function ( newData , oldData ){
         if(newData){
            this.Color.push(newData)
            console.log(this.Color)
         }
    }
  },
  data() {
    return {
      Color:[],
      sundata:[]
    };
  },
  mounted() {
    this.bar();
  },
  methods: {
    // 柱状图与曲线结合
    bar() {
      const data=[{
        name:'11月',
        children:this.sundata
      },{
        name:'10月',
        children:this.sundata
      },{
        name:'9月',
        children:this.sundata
      }]
      
      const mychart = echarts.init(this.$el);
      mychart.clear()
    //  mychart.showLoading();
      const option={
        series: {
          type: "sunburst",
          // highlightPolicy: 'ancestor',
          data: data,
          radius: [0, "90%"],
          label: {
            rotate: "radial"
          }
        }
      }
      //  myChart.hideLoading();
      mychart.setOption(option);
     
      window.addEventListener("resize", function() {
        mychart.resize();
      });
    }
  }
};
</script>

<style lang='less' scoped>
.bar {
  width: 100%;
  height: 400px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding: 20px;
}
</style>
