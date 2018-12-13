<template>
  <div class="AntiEventList">
    <h1 class="title">反恐事件列表</h1>
    <el-form
      :inline="true"
      :model="antiFormData"
      ref="antiFormData"
      label-width="100px"
    >
      <el-form-item
        label="国家"
        prop="countryId"
      >
        <el-select
          v-model="antiFormData.countrycode"
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
          v-model="antiFormData.date"
          type="month"
          placeholder="选择月份"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="selectAntiEvent"
        >查询</el-button>
        <el-button @click="resetAntiEvent('antiFormData')">重置</el-button>
      </el-form-item>
    </el-form>

    <div class="content">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content">
            <el-table
              :data="antiTableData"
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
                :formatter="formatterTime"
                align="center"
                min-width="100%"
              ></el-table-column>
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
                prop="grade"
                label="等级"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="infrastructures"
                label="建筑物"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="arms"
                label="军事要素"
                align="center"
                min-width="100%"
              ></el-table-column>
              <el-table-column
                prop="natureDisaster"
                label="自然要素"
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
              :current-page="antiFormData.pageNum"
              :page-sizes="[5,10,20]"
              :page-size="antiFormData.pageSize"
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
import { getCountryAll } from "@/api/common.js";
import { formatterDateStr } from "@/utils/filter.js";
import { event,deleteEvent } from "@/api/common";
export default {
  data() {
    return {
      antiEventUpdateDialog: false,
      //反恐事件form表单查询条件
      antiFormData: {
        pageNum: 1,
        pageSize: 5,
        genre: 3,
        countrycode: "IND",
        date:"2018-10-01"
      },
      //反恐事件修改dialog表单数据
      antiEvent: {
        eventName: "",
        eventTime: "",
        countryId: "",
        people: "",
        antiTerrorism: "",
        grade: "",
        casualties: "",
        weapons: "",
        infrastructure: "",
        bound: "",
        militaryfacor: "",
        naturefactor: ""
      },
      //反恐事件总记录数
      total: 0,
      //国家信息
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
      //反恐事件table数据
      antiTableData: []
    };
  },
  created() {
    this.loadAntiPageList();
  },
  methods: {
    //加载反恐事件列表
    loadAntiPageList() {
      event(this.antiFormData).then(res => {
        this.total = res.data.total;
        this.antiTableData = res.data.list;
      });
    },
    formatterTime(row) {
      return formatterDateStr(row.startTime);
    },
    //查询
    selectAntiEvent() {
      this.loadAntiPageList();
    },
    //重置
    resetAntiEvent(antiFormData) {
      this.$refs[antiFormData].resetFields();
      this.loadAntiPageList();
    },
    handleSizeChange(val) {
      this.antiFormData.pageSize = val;
      this.loadAntiPageList();
    },
    handleCurrentChange(val) {
      this.antiFormData.pageNum = val;
      this.loadAntiPageList();
    },
    deleteId(row) {
      deleteEvent(row.id).then(res => {
        this.loadAntiPageList();
      });
    },
    //返回
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="less">
</style>