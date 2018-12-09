<template>
  <div class="pagination">
    <el-row>
      <el-col :span="12">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <p>总分：<span>100</span></p>
          </el-col>
          <el-col :span="8">
            <p>正面数量：<span>100</span></p>
            <p>负面数量：<span>100</span></p>
          </el-col>
          <el-col :span="8">
            <p>正面影响：<span>100</span></p>
            <p>负面影响：<span>100</span></p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  data() {
    return {
      currentPage: 1
    };
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
