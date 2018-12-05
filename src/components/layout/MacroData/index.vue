<template>
  <div class="MacroData">
    <h1 class="title">宏观数据分析</h1>
    <!-- form表单查询条件 -->
    <el-form
      ref="form"
      :model="MacroDataForm"
      label-width="100px"
    >
      <el-form-item label="选择国家">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          style="margin-bottom:10px;"
        >全选</el-checkbox>
        <el-checkbox-group
          v-model="MacroDataForm.Country"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox-button
            v-for="country in countrys"
            :label="country"
            :key="country"
          >
            {{country}}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="维度">
        <el-cascader
          expand-trigger="hover"
          :options="options"
          v-model="MacroDataForm.dimensions"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-date-picker
          v-model="MacroDataForm.beginDate"
          type="date"
          placeholder="请输入开始时间"
        >
        </el-date-picker>
        <el-date-picker
          v-model="MacroDataForm.endDate"
          type="date"
          placeholder="请输入结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="select"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <el-tabs type="border-card">
      <el-tab-pane label="表格">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="country"
            label="国家"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="2012"
            label="2012"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="2013"
            label="2013"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="2014"
            label="2014"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="2015"
            label="2015"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="2016"
            label="2016"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="2017"
            label="2017"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="2018"
            label="2018"
            min-width="10%"
          >
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="统计图">
          <line-charts></line-charts>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import lineCharts from '@/components/layout/general/charts/line.vue'
export default {
  name: "MacroData",

  data() {
    return {
      MacroDataForm: {
        Country: [],
        dimensions: [],
        beginDate: "",
        endDate: ""
      },
      countrys: ["日本", "朝鲜", "印度", "韩国", "中国", "美国", "巴基斯坦"],
      isIndeterminate: false,
      checkAll: false,
      options: [
        {
          value: "1",
          label: "国民",
          children: [
            {
              value: "1",
              label: "新生儿死亡率（每千例活产儿）"
            },
            {
              value: "2",
              label: "年轻群体总失业人数（占15-24岁所有劳动力数量的比例）"
            },
            {
              value: "3",
              label: "城镇人口（占总人口比例）"
            },
            {
              value: "4",
              label: "人口增长（年度百分比）"
            }
          ]
        },
        {
          value: "2",
          label: "经济",
          children: [
            {
              value: "1",
              label: "人均GDP增长（年增长率）"
            },
            {
              value: "2",
              label: "工业增加值（年增加率）"
            },
            {
              value: "3",
              label: "总储蓄（占GDP的百分比）"
            },
            {
              value: "4",
              label: "按消费者价格指数衡量的通货膨胀（年通胀率）"
            }
          ]
        },
        {
          value: "3",
          label: "能源",
          children: [
            {
              value: "1",
              label: "能源净进口（占能源使用量的百分比）"
            },
            {
              value: "2",
              label: "可再生能源发电量，不包括水电（占总发电量的比例）"
            },
            {
              value: "3",
              label: "耗电量（人均千瓦时）"
            },
            {
              value: "4",
              label: "矿石和金属进口（商品进口的百分比）"
            }
          ]
        },
        {
          value: "4",
          label: "科学",
          children: [
            {
              value: "1",
              label: "研发支出（占GDP的比例）"
            },
            {
              value: "2",
              label: "入学率，高等院校（占总人数的百分比）"
            },
            {
              value: "3",
              label: "专利申请量，居民"
            },
            {
              value: "4",
              label: "科技期刊文章"
            }
          ]
        }
      ]
    };
  },
  components:{
    lineCharts
  },
  methods: {
    handleCheckAllChange(val) {
      this.politicsFormData.Country = val ? this.countrys : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.countrys.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.countrys.length;
    },
    select() {}
  }
};
</script>

<style lang='less' scoped>
</style>
