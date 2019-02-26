<template>
  <div class="stability">
    <el-row :gutter="0">
      <el-col :span="24">
        <!-- 印度稳定性指数 -->
        <div class="stability">
          <el-row :gutter="20">
            <el-col :span="12">
              <h5>{{IndiaData.country}}稳定性指数</h5>
            </el-col>
            <el-col :span="12">
              <div class="tiny">
                <span>宏观指数</span>
                <span>{{IndiaData.baseScore}}</span>
              </div>
            </el-col>
          </el-row>
          <span>同比</span>
          <el-table
            :data="rose.Tbody"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="时间"
              min-width="12.5%"
            >
            </el-table-column>
            <el-table-column
              v-for="(item,index) in rose.Theader"
              :prop="item.prop"
              :label="item.label"
              :key="index"
              min-width="12.5%"
            >
            </el-table-column>
          </el-table>
          <span>环比</span>
          <el-table
            :data="IndiaData.Chain"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="date"
              label="国家"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="0"
              label="1"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="1"
              label="2"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="2"
              label="3"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="3"
              label="4"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="4"
              label="5"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="5"
              label="6"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="6"
              label="7"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="7"
              label="8"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="8"
              label="9"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="9"
              label="10"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="10"
              label="11"
              min-width="7.5%"
            >
            </el-table-column>
            <el-table-column
              prop="11"
              label="12"
              min-width="7.5%"
            >
            </el-table-column>
          </el-table>
        </div>
        <!-- 印度稳定性分析曲线图 -->
        <div class="analyzegraphs">
          <h5>{{IndiaData.country}}稳定性分析曲线图</h5>
          <line-charts :lineData="IndiaData.line"></line-charts>
        </div>
        <el-button
          type="text"
          style="float:right;"
          @click="jump('/region')"
        >更多....</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lineCharts from "@/components/layout/general/charts/line.vue";
export default {
  name: "India",
  props: {
    IndiaData: Object
  },
  data() {
    return {
      rose: [],
    };
  },
  watch: {
    IndiaData: function(newData, oldData) {
      this.IndiaData = newData;
      this.rose = this.IndiaData.Rose;
    }
  },
  components: {
    lineCharts
  },
  created() {
  },
  methods: {
    jump(val) {
      this.$router.push(val);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
