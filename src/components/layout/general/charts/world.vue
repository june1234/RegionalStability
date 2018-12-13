<template>
  <div class="world">
  </div>
</template>

<script>
import echarts from "echarts";
import "../../../../../node_modules/echarts/map/js/world.js";
export default {
  name: "worldCharts",
   props:{
      worldData:{type:Array,default:[]},
      title:{type:String,default:""},
      subtext:{type:String,default:""}
   },
  data() {
    return {};
  },
  watch:{
    worldData:function(newData,oldData){
        if(newData){
          this.worldData=newData
          this.world()
        }
    },
    title:function(newData,oldData){
        if(newData){
          this.title=newData
          this.world()
        }
    },
    subtext:function(newData,oldData){
        if(newData){
          this.subtext=newData
          this.world()
        }
    },
  },
  mounted(){
      this.world()
  },
  methods: {
      world(){
      this.worldData.forEach(function(element, index) {
        element.name = element.countryname;
      });
      const sitCharts = echarts.init(this.$el);
      sitCharts.setOption({
        title: {
          text:
            this.title,
          subtext:
            this.subtext,
          left: "center",
          top: "top"
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return params.name + " : " + params.value;
          }
        },
        grid: {
          width: "90%"
        },
        visualMap: {
          min: 0,
          max: 100,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["#dc472c", "#e26c47", "#d80c18"]
          }
        },
        series: [
          {
            name: "World Population (2010)",
            type: "map",
            mapType: "world",
            roam: true,
            itemStyle: {
              emphasis: { label: { show: true } }
            },
            data: this.worldData
          }
        ]
      });
      window.addEventListener("resize", function() {
        sitCharts.resize();
      });
      }
  }
};
</script>

<style lang='less' scoped>
.world {
  width: 100%;
  height:400px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border:1px solid #fff;
  padding:2px;
}
</style>
