<template>
  <div class="NewsDetail">
    <h5 class="NewsTitle">韩国朝野政党8名国会议员登独岛 日方抗议</h5>
    <div
      class="NewsList"
      style="width:40%;margin:0 auto;"
    >
      <el-row :gutter="20">
        <el-col :span="6">
          <span>时间</span>
        </el-col>
        <el-col :span="6">
          <span>来源：<i></i></span>
        </el-col>
        <el-col :span="6">
          <span>作者：<i></i></span>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="news">

        </div>
        <div style="float:right;">
          <el-button @click="goBack">返回</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getNewsDetail();
  },
  methods: {
    getNewsDetail() {
      const { id } = this.$route.query;
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="less">
</style>