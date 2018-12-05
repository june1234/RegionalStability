<template>
  <div class="ahp">
    <h5>AHP专家打分权重</h5>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="6.25%"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ahp",

  data() {
    return {
      tableData: []
    };
  },

  methods: {}
};
</script>

<style lang='less' scoped>
.ahp {
  margin: 20px;
  h5 {
    color: #0080ff;
    font-size: 20px;
    line-height: 40px;
  }
}
</style>
