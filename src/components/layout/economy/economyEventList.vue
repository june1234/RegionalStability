<template>
  <div class="economyEventList">
    <h1 class="title">经济事件列表</h1>
    <el-form
      :inline="true"
      :model="economyFormData"
      ref="politicsFormData"
      label-width="100px"
    >
      <el-form-item
        label="国家"
        prop="countryId"
      >
        <el-select
          v-model="economyFormData.countryId"
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
      <el-form-item
        label="等级"
        prop="grade"
      >
        <el-select
          v-model="economyFormData.grade"
          placeholder="请选择等级"
        >
          <el-option
            v-for="item in grades"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="关键字"
        prop="keys"
      >
        <el-input
          v-model="economyFormData.keywords"
          placeholder="请输入关键字"
        ></el-input>
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
                prop="militaryfacor"
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
                    @click="showPoliticsEventUpdateDialog(scope.row)"
                  >修改</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="economyFormData.pageNum"
              :page-sizes="[20, 100, 150, 200]"
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

    <!-- 经济事件修改dialog-->
    <el-dialog
      title="经济事件修改"
      style="text-align:center;"
      :visible.sync="economyEventUpdateDialog"
      width="35%"
    >
      <el-form
        :model="economyEvent"
        label-width="100px"
        class="PoliticsForm"
      >
        <el-form-item label="事件名称">
          <el-input
            v-model="economyEvent.eventName"
            placeholder="请修改事件名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="事件发生时间">
          <el-date-picker
            type="date"
            v-model="economyEvent.eventTime"
            palceholder="请输入时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="国家">
          <el-input
            v-model="economyEvent.countryFullName"
            palceholder="请输入国家"
          ></el-input>
        </el-form-item>
        <el-form-item label="人物">
          <el-input
            v-model="economyEvent.people"
            palceholder="请输入人物"
          ></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-select
            v-model="economyEvent.grade"
            placeholder="请选择等级"
          >
          </el-select>
        </el-form-item>
        <el-form-item label="机构">
          <el-input v-model="economyEvent.infrastructure"></el-input>
        </el-form-item>
        <el-form-item label="情感分数">
          <el-input v-model="economyEvent.militaryfacor"></el-input>
        </el-form-item>
        <el-form-item label="影响力">
          <el-input v-model="economyEvent.naturefactor"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="savePoliticsEvent"
          >确认</el-button>
          <el-button @click="economyEventUpdateDialog=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import { formatterDateStr } from "@/utils/filter.js";
export default {
  name: "",

  data() {
    return {
      economyFormData: {
        pageNum: 1,
        pageSize: 20,
        type: 1,
        countryId: "",
        keywords: ""
      },
      economyTableData: [],
      countries: [
        { value: "1", label: "中国" },
        { value: "2", label: "美国" },
        { value: "3", label: "日本" },
        { value: "4", label: "韩国" },
        { value: "5", label: "朝鲜" },
        { value: "6", label: "印度" },
        { value: "7", label: "巴基斯坦" }
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

  methods: {
    savePoliticsEvent() {
      this.economyEventUpdateDialog = false;
    },
    selectEconomyEvent() {},
    formatterTime(val) {
      return formatterDateStr(val.eventTime);
    },
    handleSizeChange(val) {
      this.economyFormData.pageSize = val;
      //   this.loadPoliticsEventPageList();
    },
    handleCurrentChange(val) {
      this.economyFormData.pageNum = val;
      //   this.loadPoliticsEventPageList();
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang='less' scoped>
</style>
