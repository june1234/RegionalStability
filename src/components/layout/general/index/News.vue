<template>
  <div class="news">
    <el-row :gutter="20">
      <el-col :span="12">
        <h5>新闻</h5>
        <ul class="source">
          <li><span>来源：</span><span>1000</span></li>
          <li><span>来源：</span><span>1000</span></li>
          <li><span>来源：</span><span>1000</span></li>
          <li><span>来源：</span><span>1000</span></li>
        </ul>
      </el-col>
      <el-col :span="12">
        <h5>热点新闻</h5>
        <ul class="new">
          <li><a href="#"><span>新闻标题</span></a></li>
          <li><a href="#"><span>新闻标题</span></a></li>
          <li><a href="#"><span>新闻标题</span></a></li>
          <li><a href="#"><span>新闻标题</span></a></li>
          <li><a href="#"><span>新闻标题</span></a></li>
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
export default {
  name: "news",

  data() {
    return {
      tableData:[]
    };
  },

  methods: {}
};
</script>

<style lang='less' scoped>
.news {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  .el-row {
    h5 {
      color: #0080ff;
      font-size: 20px;
      line-height: 40px;
    }
  }
  .source {
    padding: 0 20px;
    li {
      line-height: 50px;
      border: 1px solid #000080;
      color: #000080;
      font-size: 20px;
      margin-bottom: 10px;
      span {
        padding-left: 30px;
      }
      span:last-child {
        color: #ff8000;
      }
    }
  }
  .new {
    li {
      line-height: 30px;
    }
  }
}
</style>
