<template>
  <div class="NewsDetail">
    <h5 class="NewsTitle">{{data.newsTitle}}</h5>
    <div
      class="NewsList"
      style="width:40%;margin:0 auto;"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <span>{{data.newsTime}}</span>
        </el-col>
        <el-col :span="12">
          <span>来源：<i>{{data.newsSource}}</i></span>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="news">
           <p>{{data.content}}</p>
        </div>
        <div style="float:right;">
          <el-button @click="goBack">返回</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getNewsDetail } from "@/api/news/NewsList";
export default {
  data() {
    return {
      data:''
    };
  },
  created() {
    this.getNewsDetail();
  },
  methods: {
    getNewsDetail() {
      const { id } = this.$route.query;
      getNewsDetail(id).then(res=>{
        this.data=res.data[0]
      })
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="less">
</style>