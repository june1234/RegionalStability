<template>
  <div class="showcase">
    <div id="pdfDom">
    <h5>报告内容</h5>
    <div class="content">
      <h4>报告标题</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
      </p>
      <div class="topic">
        <h6>议题</h6>
        <line-charts></line-charts>
      </div>
      <div class="news">
        <h6>新闻统计</h6>
        <line-charts></line-charts>
        <h6>新闻统计说明</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
          Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </p>
      </div>
      <div class="B">
        <h6>事件统计</h6>
        <div>
          <h6>政治事件</h6>
          <hot-charts></hot-charts>
          <h6>事件列表</h6>
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            style="width: 100%"
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
          <h6>事件说明</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
          </p>
        </div>
        <div>
          <h6>经济事件</h6>
          <hot-charts></hot-charts>
          <h6>事件列表</h6>
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            style="width: 100%"
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
          <h6>事件说明</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
          </p>
        </div>
        <div>
          <h6>反恐事件</h6>
          <hot-charts></hot-charts>
          <h6>事件列表</h6>
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            style="width: 100%"
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
          <h6>事件说明</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
          </p>
        </div>
      </div>
    </div>
    </div> 
   <el-button type="warning" @click="getPdf()">下载PDF</el-button>
  </div>
</template>

<script>
import lineCharts from "@/components/layout/general/Charts/line.vue";
import hotCharts from "@/components/layout/general/Charts/hot.vue";
import { formatterDateStr, formatterDate } from "@/utils/filter";

export default {
  data() {
    return {
      tableData:[],
      htmlTitle:'123'
    };
  },
  components: {
    lineCharts,
    hotCharts
  },
  created() {},
  methods: {
    goBack() {
      this.$router.back();
    },
    exportReport() {
      this.$router.back();
    },
    formatterTime(val) {
      return formatterDateStr(val.eventTime);
    }

  }
};
</script>