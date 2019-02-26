<template>
  <div class="showcase">
    <div id="pdfDom">
    <h5>报告内容</h5>
    <div class="content">
      <h4>{{this.form.title}}</h4>
      <p>{{this.form.dec}}</p>
      <div class="topic" v-if="this.topic.display">
        <h6>事件演变</h6>·
        <time-charts :all="usaTimeLineData" :title="title"></time-charts>
      </div>
      <!-- <div class="news" v-if="this.news.display">
        <h6>{{this.news.name}}</h6>
        <line-charts></line-charts>
        <h6>新闻统计说明</h6>
        <p>{{this.news.NewsDec}}</p>
      </div> -->
      <div class="B" v-if="this.event.display">
        <h6>{{this.event.name}}</h6>
        <div v-if="this.event.Politics.display">
          <h6>政治事件</h6>
          <hot-charts :hotData="this.event.Politics.pScatter"></hot-charts>
          <h6 v-if="this.event.Politics.pEventList.length!==0">事件列表</h6>
          <el-table
            ref="multipleTable"
            :data="this.event.Politics.pEventList"
            border
            style="width: 100%"
            v-if="this.event.Politics.pEventList.length!==0"
          >
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
          <h6 v-if="this.event.Politics.pEventDec!==''">事件说明</h6>
          <p>{{this.event.Politics.pEventDec}}</p>
        </div>
        <div v-if="this.event.Economy.display">
          <h6>{{this.event.Economy.name}}</h6>
          <h6 v-if="this.event.Economy.eEventList.length!==0">事件列表</h6>
          <el-table
            ref="multipleTable"
            :data="this.event.Economy.eEventList"
            border
            style="width: 100%"
            v-if="this.event.Economy.eEventList.length!==0"
          >
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
          <h6 v-if="this.event.Economy.eEventDec!==''">事件说明</h6>
          <p>{{this.event.Economy.eEventDec}}</p>
        </div>
        <div v-if="this.event.CTD.display">
          <h6>{{this.event.CTD.name}}</h6>
          <hot-charts :hotData="this.event.CTD.cScatter"></hot-charts>
          <h6 v-if="this.event.CTD.cEventList.length!==0">事件列表</h6>
          <el-table
            ref="multipleTable"
            :data="this.event.CTD.cEventList"
            border
            style="width: 100%"
            v-if="this.event.CTD.cEventList.length!==0"
          >
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
          <h6>事件说明</h6>
          <p v-if="this.event.CTD.cEventDec!==''">{{this.event.CTD.cEventDec}}</p>
        </div>
      </div>
    </div>
    </div> 
   <el-button type="warning" @click="getPdf()">下载PDF</el-button>
  </div>
</template>

<script>
import lineCharts from "@/components/layout/general/charts/line.vue";
import hotCharts from "@/components/layout/general/charts/hot.vue";
import { formatterDateStr, formatterDate } from "@/utils/filter";
import timeCharts from "@/components/layout/general/charts/timeLineCharts.vue";
import { TrendData } from "@/api/eventTiming/EventTimingAnalysis";

export default {
  data() {
    return {
      tableData:[],
      htmlTitle:'123',
      Describe:'',
      event:{},
      topic:{},
      news:{},
      form:{},
      usaTimeLineData:{},
      title:'',
      options:[{
          label:'中美贸易战',
          value:'zhongmei'
        },{
          label:'中国政治经济',
          value:'zhongguo'
        },{
          label:'印度政治经济',
          value:'yindu'
        },{
          label:'日本政治经济',
          value:'riben'
        },{
          label:'朝鲜政治经济',
          value:'chaoxian'
        },{
          label:'韩国政治经济',
          value:'hanguo'
        },{
          label:'美国政治经济',
          value:'meiguo'
        },{
          label:'朝核问题',
          value:'chaohe'
        }
      ],
    };
  },
  components: {
    lineCharts,
    hotCharts,
    timeCharts
  },
  created() {
    const {form,event,topic,news} = this.$route.query
    console.log(this.$route.query)
    this.form=form
    this.event=event
    this.topic=topic
    this.news=news
    TrendData(this.topic.value).then(res=>{
        this.usaTimeLineData=res.data
        for(let i in this.options){
          if(this.value===this.options[i].value){
            this.title=this.options[i].label
          }
        }
    })
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    exportReport() {
      this.$router.back();
    },
    formatterTime(val) {
      return formatterDateStr(val.startTime);
    }

  }
};
</script>