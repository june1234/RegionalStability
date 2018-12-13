<template>
  <div class="news">
    <el-row>
      <el-col :span="12">
        <h5>新闻</h5>
        <ul class="source">
          <li>
            <span>新闻总量：</span><span>{{SourceData.total}}</span>
          </li>
          <li v-for="(item,index) in SourceData.nFrom" :key="index">
            <span>{{item.source}}：</span><span>{{item.count}}</span>
            <el-progress
              :percentage="item.percentage"
              status="success"
              :show-text=false
            ></el-progress>
          </li>
          
        </ul>
      </el-col>
      <el-col :span="12">
        <h5>热点新闻</h5>
        <ul class="new">
          <li v-for="(item,index) in newListData" :key="index">
            <a href="#" @click="jump(item.id)"><i class="el-icon-news"></i><span>{{item.newsTitle}}</span></a>
            </li>
        </ul>
      </el-col>
      <!-- <el-col :span="8">
          <h5>帮助</h5>
          <ul>
            <li><a href="#">首页帮助文档</a></li>
            <li><a href="#">区域稳定性帮助文档</a></li>
            <li><a href="#">原事件分析帮助文档</a></li>
            <li><a href="#">聚类事件分析帮助文档</a></li>
            <li><a href="#">议题分析帮助文档</a></li>
            <li><a href="#">政治事件分析帮助文档</a></li>
            <li><a href="#">经济事件分析帮助文档</a></li>
            <li><a href="#">反恐事件分析帮助文档</a></li>
            <li><a href="#">宏观数据分析帮助文档</a></li>
            <li><a href="#">报告内容帮助文档</a></li>
            <li><a href="#">新闻列表帮助文档</a></li>
          </ul>
        </el-col> -->
    </el-row>
  </div>
</template>

<script>
import { Source, newList } from "@/api/index/index";
export default {
  name: "news",

  data() {
    return {
      SourceData: {},
      newListData: []
    };
  },
  created() {
    newList().then(res => {
      this.newListData = res.data;
    });
    Source().then(res => {
      this.SourceData = res.data;
      for(var i in this.SourceData.nFrom){
        this.SourceData.nFrom[i].percentage=(this.SourceData.nFrom[i].count/this.SourceData.total)*100
      }
    });
  },
  methods: {
    jump(id){
      this.$router.push(`NewsList/NewsDetail/?id=${id}`)
    }
  }
};
</script>

<style lang='less' scoped>
</style>
