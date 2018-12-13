<template>
  <div class="NewsList">
    <h1 class="title">新闻列表</h1>
    <el-form
      :inline="true"
      :model="newsFormData"
      ref="newsFormData"
    >
      <el-form-item prop="countryCode">
        <el-select
          v-model="newsFormData.countrycode"
          filterable
          placeholder="选择国家"
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
      <el-form-item prop="type">
        <el-input
          v-model="newsFormData.keys"
          placeholder="请输入关键字"
        ></el-input>
      </el-form-item>
      <el-form-item prop="startTime">
        <el-date-picker
          v-model="newsFormData.startTime"
          type="date"
          placeholder="开始时间"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item prop="endTime">
        <el-date-picker
          v-model="newsFormData.endTime"
          type="date"
          placeholder="结束时间"
          val-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="selectNews"
        >查询</el-button>
        <el-button @click="resetNews('newsFormData')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="content">
      <el-table
        :data="tableNewsData"
        border
      >
        <el-table-column
          prop="eventName"
          label="新闻标题"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="genre"
          label="种类"
          :formatter="formatterType"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="eventTime"
          label="开始时间"
          :formatter="formatterEventTime"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="countryId"
          label="国家"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="area"
          label="相关地点"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="orginizations"
          label="相关机构"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="infrastructure"
          label="基础设施"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="arms"
          label="军事要素"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
          prop="natureDisaster"
          label="自然要素"
          align="center"
          min-width="100%"
        ></el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            min-width="100%">
            <template slot-scope="scope">
              <el-button @click="showNewsDetail(scope.row)" type="text" >查看</el-button>
            </template>
          </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="newsFormData.pageNum"
        :page-sizes="[20, 50, 100]"
        :page-size="newsFormData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getNewsList } from "@/api/news/NewsList.js";
import { formatterDateStr, formatterDate } from "@/utils/filter.js";
export default {
  data() {
    return {
      //新闻form表单查询条件
      newsFormData: {
        pageNum: 1,
        pageSize: 5,
        countrycode: "IND",
        keys: "",
        startTime: "2018-01-01",
        endTime: "2018-10-01"
      },
      //news总记录数
      total: 0,
      //国家信息
      countries:[
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
      //新闻news表格数据
      tableNewsData: []
    };
  },
  created() {
    this.loadNewsPageList();
  },
  methods: {
    //加载新闻列表信息
    loadNewsPageList() {
      getNewsList(this.newsFormData).then(res => {
        console.log(res.data)
        this.tableNewsData = res.data.list;
        this.total = res.data.total;
      });
    },
    handleSizeChange(val) {
      this.newsFormData.pageSize = val;
      this.loadNewsPageList();
    },
    handleCurrentChange(val) {
      this.newsFormData.pageNum = val;
      this.loadNewsPageList();
    },
    formatterType(row) {
      switch (row.type) {
        case 1:
          return "政治";
          break;
        case 2:
          return "经济";
          break;
        default:
          return "反恐";
          break;
      }
    },
    formatterEventTime(row) {
      return formatterDateStr(row.eventTime);
    },
    formatterEndTime(row) {
      return formatterDateStr(row.endTime);
    },
    //查询
    selectNews() {
      
      this.loadNewsPageList();
    },
    //重置
    resetNews(newsFormData) {
      this.$refs[newsFormData].resetFields();
      this.loadNewsPageList();
    },
    //新闻详情
    showNewsDetail(row) {
      this.$router.push("/NewsList/NewsDetail?id=" + row.id);
    }
  }
};
</script> 

<style scoped lang="less">
</style>