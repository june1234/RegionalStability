<template>
  <div class="armedForces">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "armedForces",
  props:{
    pineData:Object
  },
  data() {
    return {};
  },
  watch:{
    pineData:function ( newData , oldData ){
         if(newData){
            this.pineData=newData
            this.ArmedForces()
         }
    }
  },
  mounted() {
    this.ArmedForces();
  },
  methods: {
    ArmedForces() {
        const a=[]
        let d=[]
        const c=[]
      for(let i in this.pineData){
        a.push(i.substr(1))
        let b={
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "",
              x: "center"
            },
            series:{
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "50%"],
                data:[],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
        }
         b.title.text=this.pineData[i].text
         b.series.data=this.pineData[i].data
         c.push(b)
      }
       d=this.paixu(a)
      const ArmedCharts = echarts.init(this.$el);
      const option = {
        baseOption: {
          timeline: {
            currentIndex: 17,
            tooltip: {
              show: false
            },
            autoPlay:true,
            axisType: "category",
            data:a
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: [
              "枪械(Firearms)",
              "炸药/炸弹(Explosives/Bombs/Dynamite)",
              "未知(Unknown)",
              "燃烧弹(Incendiary)",
              "混乱(Melee)",
              "其他(Other)"
            ]
          }
        },
        options: c
      };
      ArmedCharts.setOption(option);
      window.addEventListener("resize", function() {
        ArmedCharts.resize();
      });
    },
    paixu(arr){
      let len = arr.length - 1
      for (let j = 0; j < len; j++) {
        for (let i = 0; i < len - j; i++) {
          if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          }
        }
      }
    }
  }
};
</script>

<style lang='less' scoped>
.armedForces {
  width: 100%;
  height: 400px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding:20px;
}
</style>
