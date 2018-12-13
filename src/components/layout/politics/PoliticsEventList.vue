<template>
  <div class="PoliticsEventList">
    <h1 class="title">政治事件列表</h1>
    <el-form
      :inline="true"
      :model="politicsFormData"
      ref="politicsFormData"
      label-width="100px"
    >
      <el-form-item
        label="国家"
      >
        <el-select
          v-model="politicsFormData.countrycode"
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
          v-model="politicsFormData.date"
          type="month"
          placeholder="选择月份"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="selectPoliticsEvent"
        >查询</el-button>
        <el-button @click="resetPoliticsEvent('politicsFormData')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content">
            <el-table
              :data="politicsTableData"
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
                prop="infrastructures"
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
              :current-page="politicsFormData.pageNum"
              :page-sizes="[5,10,20]"
              :page-size="politicsFormData.pageSize"
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

    <!-- 政治事件修改dialog-->
    <el-dialog
      title="政治事件修改"
      style="text-align:center;"
      :visible.sync="politicsEventUpdateDialog"
      width="35%"
    >
      <el-form
        :model="politicsEvent"
        label-width="100px"
        class="PoliticsForm"
      >
        <el-form-item label="事件名称">
          <el-input
            v-model="politicsEvent.eventName"
            placeholder="请修改事件名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="事件发生时间">
          <el-date-picker
            type="date"
            v-model="politicsEvent.eventTime"
            palceholder="请输入时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="国家">
          <el-input
            v-model="politicsEvent.countryFullName"
            palceholder="请输入国家"
          ></el-input>
        </el-form-item>
        <el-form-item label="人物">
          <el-input
            v-model="politicsEvent.people"
            palceholder="请输入人物"
          ></el-input>
        </el-form-item>
        <el-form-item label="等级">
          <el-select
            v-model="politicsEvent.grade"
            placeholder="请选择等级"
          >
          </el-select>
        </el-form-item>
        <el-form-item label="建筑物">
          <el-input v-model="politicsEvent.infrastructure"></el-input>
        </el-form-item>
        <el-form-item label="情感分数">
          <el-input v-model="politicsEvent.militaryfacor"></el-input>
        </el-form-item>
        <el-form-item label="影响力">
          <el-input v-model="politicsEvent.naturefactor"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="savePoliticsEvent"
          >确认</el-button>
          <el-button @click="canclePoliticsEvent">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { formatterDateStr } from "@/utils/filter.js";
import { event,deleteEvent } from "@/api/common";

export default {
  data() {
    return {
      politicsEventUpdateDialog: false,
      //政治查询form表单
      politicsFormData: {
        pageNum: 1,
        pageSize: 5,
        date:"2018-10-01",
        genre: 1,
        countrycode: "IND",
      },
      //政治事件修改dialog表单数据
      politicsEvent: {
        id: "",
        nid: "",
        eventName: "",
        eventTime: "",
        countryId: "",
        people: "",
        grade: "",
        infrastructure: "",
        militaryfacor: "",
        naturefactor: ""
      },
      //政治事件记录数
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
      //政党信息
      partyGroups: [],
      //政治事件table数据
      politicsTableData: [],
      grades: []
    };
  },
  created() {
    this.loadPoliticsEventPageList();
  },
  methods: {
    //加载政治事件列表信息
    loadPoliticsEventPageList() {
      event(this.politicsFormData).then(res => {
        this.total = res.data.total;
        this.politicsTableData = res.data.list;
      });
    },
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    },
    //查询
    selectPoliticsEvent() {
      this.loadPoliticsEventPageList();
    },
    //重置
    resetPoliticsEvent(politicsFormData) {
      this.$refs[politicsFormData].resetFields();
    },
    handleSizeChange(val) {
      this.politicsFormData.pageSize = val;
      this.loadPoliticsEventPageList();
    },
    handleCurrentChange(val) {
      this.politicsFormData.pageNum = val;
      this.loadPoliticsEventPageList();
    },
    //修改
    showPoliticsEventUpdateDialog(row) {
      this.politicsEventUpdateDialog = true;
      this.politicsEvent.id = row.id;
      this.politicsEvent.nid = row.nid;
      this.politicsEvent.eventName = row.eventName;
      this.politicsEvent.eventTime = row.eventTime;
      this.politicsEvent.countryId = row.countryId;
      this.politicsEvent.countryFullName = row.countryFullName;
      this.politicsEvent.people = row.people;
      this.politicsEvent.partyGroup = row.partyGroup;
      this.politicsEvent.grade = row.grade;
      this.politicsEvent.infrastructure = row.infrastructure;
      this.politicsEvent.bound = row.bound;
      this.politicsEvent.militaryfacor = row.militaryfacor;
      this.politicsEvent.naturefactor = row.naturefactor;
    },
    //保存
    savePoliticsEvent() {
      this.politicsEventUpdateDialog = false;
    },
    //取消
    canclePoliticsEvent() {
      this.politicsEventUpdateDialog = false;
    },
    deleteId(row) {
      deleteEvent(row.id).then(res => {
        this.loadPoliticsEventPageList();
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