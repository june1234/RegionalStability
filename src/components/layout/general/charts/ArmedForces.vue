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
      const ArmedCharts = echarts.init(this.$el);
      const option = {
        baseOption: {
          timeline: {
            currentIndex: 17,
            tooltip: {
              show: false
            },
            axisType: "category",
            data: [
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "汇总"
            ]
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
        options: [
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1992年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1992",
              x: "center"
            },
            series:[
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1992,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1993年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1993",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1993,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1994年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1994",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1994,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1995年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1995",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1995,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1996年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1996",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1996,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1997年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1997",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1997,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1998年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1998",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1998,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1999年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 1999",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a1999,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2000年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2000",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2000,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2001年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2001",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2001,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2002年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2002",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2002,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2003年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2003",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2003,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2004年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2004",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2004,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2005年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2005",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2005,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2006年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2006",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2006,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2007年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2007",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2007,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "2008年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in 2008",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.a2008,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          },
          {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            title: {
              text: "1992-2008年恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks from 1992 to 2008",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.pineData.all,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          }
        ]
      };
      ArmedCharts.setOption(option);
      window.addEventListener("resize", function() {
        ArmedCharts.resize();
      });
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
