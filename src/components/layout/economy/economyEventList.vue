<template>
  <div class="economyEventList">
    <h1 class="title">经济事件列表</h1>
    <el-form
      :inline="true"
      :model="economyFormData"
      ref="economyFormData"
      label-width="100px"
    >
      <el-form-item
        label="国家"
        prop="countryId"
      >
        <el-select
          v-model="economyFormData.countrycode"
          filterable
          placeholder="请选择国家"
        >
          <el-option
            v-for="item in countries"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="economyFormData.date"
          type="month"
          placeholder="选择月份"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="selectEconomyEvent"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content">
            <el-table
              :data="economyTableData"
              border
              style="width:100%;"
            >
              <el-table-column
                prop="eventName"
                label="事件名称"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="startTime"
                label="事件发生时间"
                align="center"
                min-width="100%"
                :formatter="formatterTime"
              >
              </el-table-column>
              <el-table-column
                prop="countryId"
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
                prop="orginization"
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
                prop="emotionScore"
                label="情感分数"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="eventEffect"
                label="影响力"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="operate"
                label="操作"
                align="center"
                min-width="100%"
                fixed="right"
              >
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    @click="deleteId(scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="economyFormData.pageNum"
              :page-sizes="[5,10,20]"
              :page-size="economyFormData.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
            <div style="float:right;">
              <el-button @click="goBack">返回</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { formatterDateStr } from "@/utils/filter.js";
import { event,deleteEvent } from "@/api/common";
export default {
  name: "economyEventList",

  data() {
    return {
      economyFormData: {
        pageNum: 1,
        pageSize: 5,
        genre: 2,
        countrycode: "IND",
        date: "2018-10-01"
      },
      economyTableData: [],
      countries: [
        {
          value: "PRK",
          label: "朝鲜"
        },
        {
          value: "IND",
          label: "印度"
        },
        {
          value: "JPN",
          label: "日本"
        },
        {
          value: "CHN",
          label: "中国"
        },
        {
          value: "USA",
          label: "美国"
        },
        {
          value: "PAK",
          label: "巴基斯坦"
        },
        {
          value: "KOR",
          label: "韩国"
        }
      ],
      economyEvent: {
        id: "",
        nid: "",
        eventName: "",
        eventTime: "",
        countryId: "",
        people: "",
        infrastructure: "",
        militaryfacor: "",
        naturefactor: ""
      },
      economyEventUpdateDialog: false,
      total: 0,
      grades: []
    };
  },
  created(){
    this.selectEconomyEvent()
  },
  methods: {
    savePoliticsEvent() {
      this.economyEventUpdateDialog = false;
    },
    selectEconomyEvent() {
      event(this.economyFormData).then(res => {
        this.economyTableData = res.data.list;
        this.total = res.data.total;
      });
    },
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    },
    handleSizeChange(val) {
      console.log(val)
      this.economyFormData.pageSize = val;
      this.selectEconomyEvent()
    },
    handleCurrentChange(val) {
      console.log(val)
      this.economyFormData.pageNum = val;
      this.selectEconomyEvent()
    },
    deleteId(row) {
      deleteEvent(row.id).then(res => {
        this.selectEconomyEvent();
      });
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang='less' scoped>
</style>
