<template>
  <div class="report">
    <el-row>
      <el-col :span="6">
        <h4>报告内容</h4>
      </el-col>
      <el-col :span="12">
        <el-button
          type="text"
          class="note"
        >说明</el-button>
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
          placeholder="请选择国家"
        >
          <el-option
            v-for="item in countryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-date-picker
          v-model="formInline.time"
          type="month"
          placeholder="选择月"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submite"
          class="query"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <div class="content">
      <el-form
        ref="form"
        :model="form"
        label-width="200px"
      >
        <div class="headline">
          <el-form-item
            label="报告标题"
            class="title"
          >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item
            label="报告描述"
            class="Describe"
          >
            <el-input
              type="textarea"
              :rows="4"
              placeholder="报告描述"
              v-model="form.dec"
            >
            </el-input>
          </el-form-item>
        </div>
        <div class="topic">
          <el-form-item label="议题">
            <el-radio-group v-model="form.resource">
              <el-radio label="显示"></el-radio>
              <el-radio label="不显示"></el-radio>
            </el-radio-group>
            <el-select
              v-model="form.value"
              placeholder="请选择议题"
              style="margin-left:20px;"
            >
              <el-option
                v-for="item in IssuesOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <line-charts></line-charts>
        </div>
        <div class="news">
          <el-form-item label="新闻">
            <el-radio-group v-model="form.resource">
              <el-radio label="显示"></el-radio>
              <el-radio label="不显示"></el-radio>
            </el-radio-group>
            <el-select
              v-model="form.value"
              placeholder="请选择新闻种类"
              style="margin-left:20px;"
            >
              <el-option
                v-for="item in newOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <line-charts></line-charts>
          <h5>新闻统计说明</h5>
          <el-form-item>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="新闻统计说明"
              v-model="form.dec"
              style="width:60%;"
            >
            </el-input>
          </el-form-item>
        </div>
        <div class="eventAnalysis">
          <el-form-item label="事件分析">
            <el-radio-group v-model="form.resource">
              <el-radio label="显示"></el-radio>
              <el-radio label="不显示"></el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="event">
            <el-form-item label="政治事件">
              <el-radio-group v-model="form.resource">
                <el-radio label="显示"></el-radio>
                <el-radio label="不显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <hot-charts></hot-charts>
            <h5>事件列表</h5>
            <el-table
              ref="multipleTable"
              :data="tableData"
              border
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                type="selection"
                min-width="2%"
              >
              </el-table-column>
              <el-table-column
                prop="eventName"
                label="事件名称"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="eventTime"
                label="事件发生时间"
                :formatter="formatterTime"
                align="center"
                min-width="100%"
              >
              </el-table-column>
              <el-table-column
                prop="countryFullName"
                label="国家"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="people"
                label="人物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="建筑物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="grade"
                label="等级"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="情感分数"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="影响力"
                align="center"
                min-width="100%"
              ></el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000"
            >
            </el-pagination>
            <h5>事件描述</h5>
            <el-form-item>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="事件描述"
                v-model="form.dec"
                style="width:60%;"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="经济事件">
              <el-radio-group v-model="form.resource">
                <el-radio label="显示"></el-radio>
                <el-radio label="不显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <hot-charts></hot-charts>
            <h5>事件列表</h5>
            <el-table
              ref="multipleTable"
              :data="tableData"
              border
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                type="selection"
                min-width="2%"
              >
              </el-table-column>
              <el-table-column
                prop="eventName"
                label="事件名称"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="eventTime"
                label="事件发生时间"
                align="center"
                min-width="100%"
              >
              </el-table-column>
              <el-table-column
                prop="countryFullName"
                label="国家"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="people"
                label="人物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="机构"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="grade"
                label="等级"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="情感分数"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="影响力"
                align="center"
                min-width="100%"
              ></el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000"
            >
            </el-pagination>
            <h5>事件描述</h5>
            <el-form-item>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="事件描述"
                v-model="form.dec"
                style="width:60%;"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="反恐事件">
              <el-radio-group v-model="form.resource">
                <el-radio label="显示"></el-radio>
                <el-radio label="不显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <hot-charts></hot-charts>
            <h5>事件列表</h5>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              border
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                type="selection"
                min-width="2%"
              >
              </el-table-column>
              <el-table-column
                prop="eventName"
                label="事件名称"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="eventTime"
                label="事件发生时间"
                :formatter="formatterTime"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="countryFullName"
                label="国家"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="people"
                label="人物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="grade"
                label="等级"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructure"
                label="建筑物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="border"
                label="边境状况"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="militaryfacor"
                label="军事要素"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="naturefactor"
                label="自然要素"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="naturefactor"
                label="情感分数"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="naturefactor"
                label="影响力"
                align="center"
                min-width="100%"
              ></el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000"
            >
            </el-pagination>
            <h5>事件描述</h5>
            <el-form-item>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="事件描述"
                v-model="form.dec"
                style="width:60%;"
              >
              </el-input>
            </el-form-item>
          </div>
        </div>
        <div class="btn">
          <el-form-item>
            <el-button
              type="primary"
              class="Generated"
              @click="generated"
            >立即创建</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import lineCharts from "@/components/layout/general/Charts/line.vue";
import hotCharts from "@/components/layout/general/Charts/hot.vue";
import { formatterDateStr, formatterDate } from "@/utils/filter";
export default {
  name: "report",

  data() {
    return {
      formInline: {
        country: "",
        time: ""
      },
      countryOptions: [
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
      IssuesOption: [
        {
          value: "1",
          label: "中美贸易战"
        },
        {
          value: "2 ",
          label: "朝核问题"
        },
        {
          value: "3",
          label: "钓鱼岛问题"
        }
      ],
      newOption: [
        {
          value: "1",
          label: "全部"
        },
        {
          value: "2 ",
          label: "政治"
        },
        {
          value: "3",
          label: "经济"
        },
        {
          value: "4",
          label: "反恐"
        }
      ],
      form: {},
      tableData: [],
      currentPage: 2
    };
  },
  components: {
    lineCharts,
    hotCharts
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    submite() {},
    generated() {
      this.$router.push('/Report/specialReport')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    formatterTime(val) {
      return formatterDateStr(val.eventTime);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
