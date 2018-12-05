<template>
  <div>
    <!-- 印度稳定性指数 -->
    <div class="stabilityIndex">
      <el-row :gutter="20">
        <el-col :span="12">
          <h5>印度稳定性指数</h5>
        </el-col>
        <el-col :span="12">
          <div class="tiny">
            <span>宏观指数</span>
            <span>0.8</span>
          </div>
        </el-col>
      </el-row>
      <span>同比</span>
      <el-table
        :data="tableData"
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
          prop="name"
          label="中国"
          min-width="12.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="印度"
          min-width="12.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="韩国"
          min-width="12.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="朝鲜"
          min-width="12.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="日本"
          min-width="12.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="巴基斯坦"
          min-width="12.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="美国"
          min-width="12.5%"
        >
        </el-table-column>
      </el-table>
      <span>环比</span>
      <el-table
        :data="tableData"
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
          prop="name"
          label="1"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="2"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="3"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="4"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="5"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="6"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="7"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="8"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="9"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="10"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="11"
          min-width="7.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="12"
          min-width="7.5%"
        >
        </el-table-column>
      </el-table>
      <el-button type="text">更多....</el-button>
    </div>
    <!-- 印度稳定性分析曲线图 -->
    <div class="analyzegraphs">
      <h5>印度稳定性分析曲线图</h5>
      <line-charts></line-charts>
    </div>
  </div>
</template>

<script>
import lineCharts from "@/components/layout/general/Charts/line.vue";
export default {
  name: "India",

  data() {
    return {
      tableData: []
    };
  },
  components: {
    lineCharts
  },
  methods: {}
};
</script>

<style lang='less' scoped>
.stabilityIndex,
.analyzegraphs {
  margin: 20px;
  h5 {
    color: #0080ff;
    font-size: 20px;
    line-height: 40px;
  }
}
.stabilityIndex {
  .el-row {
    .tiny {
      width: 30%;
      font-size: 20px;
      line-height: 40px;
      background-color: #000000;
      span {
        color: #ffff00;
      }
    }
  }
  span {
    font-size: 20px;
    line-height: 40px;
    color: #000080;
    padding-left: 20px;
  }
}
</style>
