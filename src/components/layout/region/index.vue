<template>
  <div class="region">
    <el-row>
      <el-col :span="6">
        <h2 class="title">区域稳定性分析</h2>
      </el-col>
      <el-col :span="18">
        <el-button type="text">说明</el-button>
      </el-col>
    </el-row>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="选择国家">
        <el-select
          v-model="formInline.country"
          placeholder="选择国家"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formInline.time"
          type="month"
          placeholder="选择月份"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <div class="stabilityIndex">
      <h6>稳定性指数</h6>
      <el-row>
        <el-col :span="8">
          <h4>印度</h4>
        </el-col>
        <el-col :span="8">
          <p>45</p>
        </el-col>
        <el-col :span="8">
          <div class="line"></div>
          <p>颜色越红，稳定性越低。</p>
          <p>颜色越蓝，稳定性越高。</p>
        </el-col>
      </el-row>
    </div>
    <india></india>
    <div class="overall">
      <h4>综合参数</h4>
      <div class="parameter">
        <h6>事件参数分析</h6>
        <el-tabs type="border-card">
          <el-tab-pane label="表格">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
            >
              <el-table-column
                prop=""
                label="参数"
                min-width="10%"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="一月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="二月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="三月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="四月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="五月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="六月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="七月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="八月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="九月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="十月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="十一月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="十二月"
                min-width="7.5%"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="图表">
            <p>数量图</p>
            <div></div>
            <p>影响图</p>
            <div></div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <ahp></ahp>
      <div class="matrix">
        <h6>参数矩阵</h6>
      </div>
      <p>矩阵中字段说明：</p>
    </div>
    <div class="original">
      <h5>事件分析</h5>
      <original></original>
    </div>
    <div class="macro">
      <h4>宏观数据</h4>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="国家"
          min-width="12%"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
      </el-table>
    </div>
    <news></news>
  </div>
</template>

<script>
import echarts from "echarts";
import ahp from "@/components/layout/general/index/Ahp.vue";
import india from "@/components/layout/general/index/India.vue";
import news from "@/components/layout/general/index/News.vue";
import original from "@/components/layout/general/original";
export default {
  data() {
    return {
      options: [
        {
          value: "NorthKorea",
          label: "朝鲜"
        },
        {
          value: "India ",
          label: "印度"
        },
        {
          value: "Japan",
          label: "日本"
        },
        {
          value: "China",
          label: "中国"
        },
        {
          value: "USA",
          label: "美国"
        },
        {
          value: "Pakistan",
          label: "巴基斯坦"
        },
        {
          value: "SouthKorea",
          label: "韩国"
        }
      ],
      formInline: {
        coutry: "",
        time: ""
      },
      tableData: []
    };
  },
  components: {
    ahp,
    india,
    news,
    original
  },
  mounted() {},
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped lang="less">
</style>
