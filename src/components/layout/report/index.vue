<template>
  <div class="report">
    <el-row>
      <el-col :span="6">
        <h4>报告内容</h4>
      </el-col>
      <el-col :span="12">
        <el-button
          type="text"
          class="note"
        >说明</el-button>
      </el-col>
    </el-row>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="选择国家">
        <el-select
          v-model="formInline.countryCode"
          placeholder="请选择国家"
        >
          <el-option
            v-for="item in countryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-date-picker
          v-model="formInline.date"
          type="month"
          placeholder="选择月"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submite"
          class="query"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <div class="content">
      <el-form
        ref="form"
        :model="form"
        label-width="200px"
      >
        <div class="headline">
          <el-form-item
            label="报告标题"
            class="title"
          >
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item
            label="报告描述"
            class="Describe"
          >
            <el-input
              type="textarea"
              :rows="4"
              placeholder="报告描述"
              v-model="form.dec"
            >
            </el-input>
          </el-form-item>
        </div>
        <div class="topic">
          <el-form-item label="事件演变">
            <el-radio-group v-model="form.topicDisplay">
              <el-radio
                value="0"
                label="显示"
              ></el-radio>
              <el-radio
                value="1"
                label="不显示"
              ></el-radio>
            </el-radio-group>
          </el-form-item>
          <time-charts :all="usaTimeLineData"></time-charts>
        </div>
        <!-- <div class="news">
          <el-form-item label="新闻">
            <el-radio-group v-model="form.newsDisplay">
              <el-radio label="显示"></el-radio>
              <el-radio label="不显示"></el-radio>
            </el-radio-group>
            <el-select
              v-model="form.newsType"
              placeholder="请选择新闻种类"
              style="margin-left:20px;"
            >
              <el-option
                v-for="item in newOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <line-charts></line-charts>
          <h5>新闻统计说明</h5>
          <el-form-item>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="新闻统计说明"
              v-model="form.NewsDec"
              style="width:60%;"
            >
            </el-input>
          </el-form-item>
        </div> -->
        <div class="eventAnalysis">
          <el-form-item label="事件分析">
            <el-radio-group v-model="form.eventDisplay">
              <el-radio label="显示"></el-radio>
              <el-radio label="不显示"></el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="event">
            <el-form-item label="政治事件">
              <el-radio-group v-model="form.pDisplay">
                <el-radio label="显示"></el-radio>
                <el-radio label="不显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <hot-charts :hotData="pScatter"></hot-charts>
            <h5>事件列表</h5>
            <el-table
              ref="multipleTable"
              :data="pTableData"
              border
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="PoliticsSelectionChange"
            >
              <el-table-column
                type="selection"
                min-width="2%"
              >
              </el-table-column>
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
            </el-table>
            <h5>事件描述</h5>
            <el-form-item>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="事件描述"
                v-model="form.PEventDec"
                style="width:60%;"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="经济事件">
              <el-radio-group v-model="form.eDisplay">
                <el-radio label="显示"></el-radio>
                <el-radio label="不显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <h5>事件列表</h5>
            <el-table
              ref="multipleTable"
              :data="eTableData"
              border
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="EconomySelectionChange"
            >
              <el-table-column
                type="selection"
                min-width="2%"
              >
              </el-table-column>
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
                prop="orginization"
                label="机构"
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
            </el-table>
            <h5>事件描述</h5>
            <el-form-item>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="事件描述"
                v-model="form.eDec"
                style="width:60%;"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="反恐事件">
              <el-radio-group v-model="form.cDisplay">
                <el-radio label="显示"></el-radio>
                <el-radio label="不显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <hot-charts :hotData="cScatter"></hot-charts>
            <h5>事件列表</h5>
            <el-table
              ref="multipleTable"
              :data="cTableData"
              tooltip-effect="dark"
              border
              style="width: 100%"
              @selection-change="CtdSelectionChange"
            >
              <el-table-column
                type="selection"
                min-width="2%"
              >
              </el-table-column>
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
              ></el-table-column>
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
                prop="grade"
                label="等级"
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
            </el-table>
            <h5>事件描述</h5>
            <el-form-item>
              <el-input
                type="textarea"
                :rows="4"
                placeholder="事件描述"
                v-model="form.cDec"
                style="width:60%;"
              >
              </el-input>
            </el-form-item>
          </div>
        </div>
        <div class="btn">
          <el-form-item>
            <el-button
              type="primary"
              class="Generated"
              @click="generated"
            >立即创建</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import lineCharts from "@/components/layout/general/charts/line.vue";
import hotCharts from "@/components/layout/general/charts/hot.vue";
import timeCharts from "@/components/layout/general/charts/timeLineCharts.vue";
import { formatterDateStr, formatterDate } from "@/utils/filter";
import { event,point,getDes } from "@/api/common";
import { TrendData } from "@/api/eventTiming/EventTimingAnalysis";
export default {
  name: "report",

  data() {
    return {
      formInline: {
        countryCode: "IND",
        date: "2018-10-01",
        pageNum: 1,
        pageSize: 10
      },
      Pform: {
        countryCode: "",
        date: "",
        pageNum: 0,
        pageSize: 0,
        genre: 1
      },
      usaTimeLineData:{},
      Eform: {
        genre: 2,
        countryCode: "",
        date: "",
        pageNum: 0,
        pageSize: 0
      },
      Cform: {
        genre: 3,
        countryCode: "",
        date: "",
        pageNum: 0,
        pageSize: 0
      },
      countryOptions: [
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
      newOption: [
        {
          value: "1",
          label: "全部"
        },
        {
          value: "2 ",
          label: "政治"
        },
        {
          value: "3",
          label: "经济"
        },
        {
          value: "4",
          label: "反恐"
        }
      ],
      form: {
        title: "",
        dec: "",
        topicDisplay: "",
        newsDisplay: "",
        newsType: "",
        NewsDec: "",
        eventDisplay: "",
        pDisplay: "",
        PEventDec: "",
        eDisplay: "",
        eDec: "",
        cDisplay: "",
        cDec: ""
      },
      pTableData: [],
      eTableData: [],
      cTableData: [],
      pEventList: [],
      eEventList: [],
      cEventList: [],
      pScatter:[],
      cScatter:[],
      pTotal: 0,
      eTotal: 0,
      cTotal: 0,
      topic:{
        name:'事件演变',
        display:false
      },
      news:{
        name:'新闻统计',
        display:false,
        newsData:[],
        NewsDec:''
      },
      event:{
        name:'事件分析',
        display:false,
        Politics:{
          name:'政治事件',
          display:false,
          pScatter:[],
          pEventList:[],
          pEventDec:''
        },
        Economy:{
          name:'经济事件',
          display:false,
          eEventList:[],
          eEventDec:''
        },
        CTD:{
          name:"反恐事件",
          display:false,
          cEventList:[],
          cEventDec:'',
          cScatter:[]
        }
      }
    };
  },
  components: {
    lineCharts,
    hotCharts,
    timeCharts
  },
  created() {
    this.losting();
  },
  methods: {
    losting() {
      this.Politics();
      this.Economy();
      this.Ctd();
      TrendData('zhongmei').then(res=>{
        this.usaTimeLineData=res.data
      })
    },
    EconomySelectionChange(val) {
      this.eEventList=val
    },
    PoliticsSelectionChange(val) {
      this.pEventList=val
    },
    CtdSelectionChange(val) {
      this.cEventList=val
    },
    submite() {
      this.Politics();
      this.Economy();
      this.Ctd();
    },
    generated() {
      if(this.form.topicDisplay==="显示"){
        this.topic.display=true
      }
      if(this.form.newsDisplay==="显示"){
        this.news.display=true
        this.news.NewsDec=this.form.NewsDec
      }
      if(this.form.eventDisplay==="显示"){
        this.event.display=true
      }
      if(this.form.eventDisplay==="显示"&&this.form.pDisplay==="显示"){
          this.event.Politics.display=true
          this.event.Politics.pEventList=this.pEventList
          this.event.Politics.PEventDec=this.form.PEventDec
          this.event.Politics.pScatter=this.pScatter
      }
      if(this.form.eventDisplay==="显示"&&this.form.eDisplay==="显示"){
          this.event.Economy.display=true
          this.event.Economy.eEventList=this.eEventList
          this.event.Economy.eEventDec=this.form.eDec
      }
      if(this.form.eventDisplay==="显示"&&this.form.cDisplay==="显示"){
          this.event.CTD.display=true
          this.event.CTD.cEventList=this.cEventList
          this.event.CTD.cEventDec=this.form.cDec
          this.event.CTD.cScatter=this.cScatter
      }
      this.$router.push({path:"/Report/specialReport",query:{form:this.form,event:this.event,topic:this.topic,news:this.news}});
    },
    Politics() {
      this.Pform.countryCode = this.formInline.countryCode;
      this.Pform.date = this.formInline.date;
      this.Pform.pageNum = this.formInline.pageNum;
      this.Pform.pageSize = this.formInline.pageSize;
      event(this.Pform).then(res => {
        this.pTableData = res.data.list;
        this.pTotal = res.data.total;
      });
      point(this.Pform).then(res=>{
        this.pScatter=res.data
      })
    },
    Economy() {
      this.Eform.countryCode = this.formInline.countryCode;
      this.Eform.date = this.formInline.date;
      this.Eform.pageNum = this.formInline.pageNum;
      this.Eform.pageSize = this.formInline.pageSize;
      event(this.Eform).then(res => {
        this.eTableData = res.data.list;
        this.eTotal = res.data.total;
      });
    },
    Ctd() {
      this.Cform.countryCode = this.formInline.countryCode;
      this.Cform.date = this.formInline.date;
      this.Cform.pageNum = this.formInline.pageNum;
      this.Cform.pageSize = this.formInline.pageSize;
      event(this.Cform).then(res => {
        this.cTableData = res.data.list;
        this.cTotal = res.data.total;
      });
      point(this.Cform).then(res=>{
        this.cScatter=res.data
      })
    },
    handleSizeChange(val) {
      this.formInline.pageSize = val;
    },
    handleCurrentChange(val) {
      this.formInline.pageNum=val
    },
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    },
    getdes(){
      getDes('report').then(res=>{
        console.log(res)
      })
    }
  }
};
</script>

<style lang='less' scoped>
</style>
