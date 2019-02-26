<template>
  <div class="MacroData">
    <h1 class="title">宏观数据分析</h1>
    <!-- form表单查询条件 -->
    <el-form
      ref="form"
      :model="MacroDataForm"
      label-width="100px"
    >
      <el-form-item label="选择国家">
        <el-select
          v-model="MacroDataForm.countrycode"
          placeholder="选择国家"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

      </el-form-item>
      <el-form-item label="维度">
        <el-select
          v-model="MacroDataForm.seriescode"
          placeholder="请选择维度"
        >
          <el-option
            v-for="item in Boptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-date-picker
          v-model="MacroDataForm.beginyear"
          type="year"
          placeholder="请输入开始时间"
          value-format="yyyy"
        >
        </el-date-picker>
        <el-date-picker
          v-model="MacroDataForm.endyear"
          type="year"
          placeholder="请输入结束时间"
          value-format="yyyy"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="Select"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <el-tabs type="border-card">
      <el-tab-pane label="表格">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
             v-for="(item,index) in header"
             :key="index"
            :prop="item.prop"
            :label="item.label"
            min-width="10%"
          >
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane
        label="统计图"
        :lazy=true
      >
        <line-charts :lineData="lineData"></line-charts>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import lineCharts from "@/components/layout/general/charts/line.vue";
import {worldbank } from "@/api/MacroData/MacroData";
import { composite } from "@/api/index/index";
export default {
  name: "MacroData",

  data() {
    return {
      MacroDataForm: {
        countrycode: "IND",
        seriescode: "SH.DYN.NMRT",
        beginyear: "2000",
        endyear: "2013"
      },
      options: [
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
      Boptions: [
        {
          value: "SH.DYN.NMRT",
          label: "新生儿死亡率（每千例活产儿）"
        },
        {
          value: "SL.UEM.1524.ZS",
          label: "年轻群体总失业人数（占15-24岁所有劳动力数量的比例）"
        },
        {
          value: "SP.URB.TOTL.IN.ZS",
          label: "城镇人口（占总人口比例）"
        },
        {
          value: "4SP.POP.GROW",
          label: "人口增长（年度百分比）"
        },
        {
          value: "NY.GDP.PCAP.KD.ZG",
          label: "人均 GDP增长（年增长率）"
        },
        {
          value: "NV.IND.TOTL.ZS",
          label: "工业增加值（占 GDP 的百分比）"
        },
        {
          value: "NY.GNS.ICTR.ZS",
          label: "总储蓄（占 GDP 的百分比）"
        },
        {
          value: "FP.CPI.TOTL.ZG",
          label: "按消费者价格指数衡量的通货膨胀（年通胀率）"
        },
        {
          value: "EG.IMP.CONS.ZS",
          label: "能源净进口（占能源使用量的百分比）"
        },
        {
          value: "EG.USE.ELEC.KH.PC",
          label: "耗电量（人均千瓦时）"
        },
        {
          value: "TM.VAL.MMTL.ZS.UN",
          label: "矿石和金属出口（占商品出口的百分比）"
        },
        {
          value: "GB.XPD.RSDV.GD.ZS",
          label: "研发支出（占GDP的比例）"
        },
        {
          value: "SE.TER.ENRR",
          label: "入学率，高等院校（占总人数的百分比）"
        },
        {
          value: "IP.PAT.RESD",
          label: "专利申请量，居民"
        },
        {
          value: "IP.JRN.ARTC.SC",
          label: "科技期刊文章"
        },
        {
          value: "EG.ELC.RNWX.ZS",
          label: "可再生能源发电量，不包括水电（占总发电量的比例）"
        }
      ],
      tableData: [],
      header:[],
      lineData:{}
    };
  },
  components: {
    lineCharts
  },
  created(){
    this.Select()
  },
  methods: {
    Select() {
        composite(this.MacroDataForm).then(res=>{
          console.log(res)
          this.lineData=res.data
        })
        worldbank(this.MacroDataForm).then(res=>{
          this.tableData=res.data.Tbody
          this.header=res.data.Theader
        })
    }
  }
};
</script>

<style lang='less' scoped>
</style>
