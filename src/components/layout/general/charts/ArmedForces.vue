<template>
  <div class="armedForces">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "armedForces",

  data() {
    return {};
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
              text: "1992年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1992",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 144,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 58,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 21,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 9,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 6,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1993年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1993",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 0,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 0,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 0,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 0,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1994年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1994",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 29,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 43,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 11,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 18,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1995年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1995",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 34,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 63,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 26,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 32,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 24,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1996年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1996",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 49,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 111,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 21,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 25,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1997年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1997",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 59,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 109,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 19,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 2,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 2,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1998年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1998",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 0,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 0,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 0,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 0,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1999年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 1999",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 8,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 14,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 0,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 1,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2000年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2000",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 70,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 94,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 7,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 2,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2001年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2001",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 72,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 52,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 3,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2002年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2002",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 69,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 97,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 1,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 3,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2003年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2003",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 83,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 95,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 5,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 8,
                    name: "混战(Melee)"
                  },
                  {
                    value: 5,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2004年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2004",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 35,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 70,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 2,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 1,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2005年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2005",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 57,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 81,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 3,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 0,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 4,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2006年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2006",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 56,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 100,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 3,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 1,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2007年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2007",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 59,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 88,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 1,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 3,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 5,
                    name: "混战(Melee)"
                  },
                  {
                    value: 0,
                    name: "其他(Other)"
                  }
                ],
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
              text: "2008年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India in 2008",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 182,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 248,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 45,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 20,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 23,
                    name: "混战(Melee)"
                  },
                  {
                    value: 1,
                    name: "其他(Other)"
                  }
                ],
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
              text: "1992-2008年印度恐怖事件武装力量分析",
              subtext:
                "An analysis of the armed forces of the terrorist attacks in India from 1992 to 2008",
              x: "center"
            },
            series: [
              {
                name: "武器类型",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  {
                    value: 999,
                    name: "枪械(Firearms)"
                  },
                  {
                    value: 1319,
                    name: "炸药/炸弹(Explosives/Bombs/Dynamite)"
                  },
                  {
                    value: 159,
                    name: "未知(Unknown)"
                  },
                  {
                    value: 120,
                    name: "燃烧弹(Incendiary)"
                  },
                  {
                    value: 101,
                    name: "混战(Melee)"
                  },
                  {
                    value: 9,
                    name: "其他(Other)"
                  }
                ],
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
  height: 550px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding:20px;
}
</style>
