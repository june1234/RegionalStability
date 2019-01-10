<template>
  <div class="topick">

  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: "topick",
  props:{
      all:Object,
      title:String
  },
  watch:{
      all:function(newData,oldData){
          this.all=newData
          this.Topick()
      },
      title:function(newData,oldData){
          this.title=newData
          this.Topick()
      }
  },
  data() {
    return {};
  },
  mounted(){
this.Topick()
  },
  methods: {
    Topick() {
      var myChart = echarts.init(this.$el);
      var topics = this.all.row_labels;

      var keys = this.all.column_labels;

      var data = [];
      for (var i in this.all.phi_list) {
        for (var j in this.all.phi_list[i]) data.push(this.all.phi_list[i][j]);
      }

      data = data.map(function(item) {
        return [item[1], item[0], item[2] || "-"];
      });

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: this.title,
          x: "center"
        },
        tooltip: {
          position: "top",
          formatter: function(params) {
						var value = params.data[2];
						return keys[params.data[1]] + '</br>' + value ;
					}
        },
        animation: false,
        xAxis: {
          position: "top",
          type: "category",
          data: topics,
          splitArea: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          inverse: true,
          type: "category",
          data: keys,
          splitArea: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        visualMap: {
          top: "2.6%",
          right: 0,
          itemWidth: 50,
          itemHeight: 500,
          min: 0,
          max: 1.2,
          precision: 2,
          calculable: true,
          inRange: {
            color: [
              "#ffffff",
              "#e0f3f8",
              "#abd9e9",
              "#74add1",
              "#4575b4",
              "#313695"
            ]
          }
        },
        series: [
          {
            type: "heatmap",
            data: data,
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>

<style lang='less' scoped>
.topick {
  width: 100%;
  height: 5000px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding: 20px;
}
</style>
