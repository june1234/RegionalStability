<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="eventName"
        label="事件名称"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="startTime"
        label="事件发生时间"
        align="center"
        min-width="11%"
      >
      </el-table-column>
      <el-table-column
        prop="countryId"
        label="国家"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="people"
        label="人物"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="orginization"
        label="机构"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="grade"
        label="等级"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="emotionScore"
        label="情感分数"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        prop="eventEffect"
        label="影响力"
        align="center"
        min-width="11%"
      ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="10%"
      >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :Emotion="eEmotion"
      @PageNum="EpageNum"
    ></pagination>
  </div>
</template>

<script>
import pagination from "@/components/layout/general/original/Pagination.vue";
import { formatterDateStr, formatterDate } from "@/utils/filter.js";

export default {
  name: "EconomicTable",
  props: {
    economicData: Object,
    EEmotion: Object,
  },
  watch: {
    economicData: function(newData, oldData) {
      if (newData) {
        this.tableData = newData.list;
        this.total = newData.total;
      }
    },
    EEmotion:function(newData, oldData) {
      if (newData) {
        this.eEmotion=newData
      }
    }
  },
  data() {
    return {
      tableData: [],
      total: 0,
      eEmotion: {}
    };
  },
  components: {
    pagination
  },
  methods: {
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    },
    EpageNum(value) {
      this.$emit("EpageNum", value);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
