<template>
  <div class="bar">

  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "barCharts",
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.bar();
  },
  methods: {
    // 柱状图与曲线结合
    bar() {
      var data = [
        {
          name: "Grandpa",
          children: [
            {
              name: "Uncle Leo",
              value: 4
            },
            {
              name: "Father",
              value: 6
            }
          ]
        },
        {
          name: "Nancy",
          children: [
            {
              name: "Uncle Nike",
              value: 4
            },
            {
              name: "Cousin Betty",
              value: 1
            },
            {
              name: "Cousin Jenny",
              value: 2
            }
          ]
        },
        {
          name: "Fruity",
          children: [
            {
              name: "Berry",
              value: 1
            },
            {
              name: "Dried Fruit",
              value: 2
            },
            {
              name: "Other Fruit",
              value: 3
            },
            {
              name: "Citrus Fruit",
              value: 4
            }
          ]
        }
      ];
      const mychart = echarts.init(this.$el);
      mychart.setOption({
        series: {
          type: "sunburst",
          // highlightPolicy: 'ancestor',
          data: data,
          radius: [0, "90%"],
          label: {
            rotate: "radial"
          }
        }
      });
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
  height: 550px;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 10px #d2d2d2;
  border: 1px solid #fff;
  padding: 20px;
}
</style>
