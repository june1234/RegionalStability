<template>
  <div class="original">
    <h4>原事件分析</h4>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="选择国家">
        <el-select
          v-model="formInline.countryCode"
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
      <el-form-item>
        <el-date-picker
          v-model="formInline.date"
          type="year"
          placeholder="选择年"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <original
      :politicalData="politics"
      :PEmotion="PEmotion"
      @PpageNum="Politicss"
      @Pid="deleteId"
      :economicData="economy"
      :EEmotion="EEmotion"
      @EpageNum="Economys"
      @Eid="deleteId"
      :ctuData="ctd"
      :CEmotion="CEmotion"
      @CpageNum="Ctds"
      @Cid="deleteId"
    ></original>
  </div>
</template>

<script>
import original from "@/components/layout/general/original";
import { event, deleteEvent, findEmotion } from "@/api/common";

export default {
  name: "OriginalEvents",

  data() {
    return {
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
      formInline: {
        countryCode: "IND",
        date: "2018-10-01",
        pageNum: 1,
        pageSize: 5
      },
      Pform: {
        countryCode: "",
        date: "",
        pageNum: 0,
        pageSize: 0,
        genre: 1
      },
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
      politics: {},
      economy: {},
      ctd: {},
      PEmotion:{},
      EEmotion:{},
      CEmotion:{}
    };
  },
  components: {
    original
  },
  created() {
    this.Politics();
    this.Economy();
    this.Ctd();
  },
  methods: {
    onSubmit() {
      this.Politics();
      this.Economy();
      this.Ctd();
    },
    Politicss(value) {
      this.formInline.pageNum = value;
      this.Politics();
    },
    Economys(value) {
      this.formInline.pageNum = value;
      this.Economy();
    },
    Ctds(value) {
      this.formInline.pageNum = value;
      this.Ctd();
    },
    Politics() {
      this.Pform.countryCode = this.formInline.countryCode;
      this.Pform.date = this.formInline.date;
      this.Pform.pageNum = this.formInline.pageNum;
      this.Pform.pageSize = this.formInline.pageSize;
      event(this.Pform).then(res => {
        this.politics = res.data;
      });
      findEmotion(this.Pform).then(res => {
        this.PEmotion=res.data
      });
    },
    Economy() {
      this.Eform.countryCode = this.formInline.countryCode;
      this.Eform.date = this.formInline.date;
      this.Eform.pageNum = this.formInline.pageNum;
      this.Eform.pageSize = this.formInline.pageSize;
      event(this.Eform).then(res => {
        this.economy = res.data;
      });
      findEmotion(this.Eform).then(res => {
        this.EEmotion=res.data
      });
    },
    Ctd() {
      this.Cform.countryCode = this.formInline.countryCode;
      this.Cform.date = this.formInline.date;
      this.Cform.pageNum = this.formInline.pageNum;
      this.Cform.pageSize = this.formInline.pageSize;
      event(this.Cform).then(res => {
        this.ctd = res.data;
      });
      findEmotion(this.Cform).then(res => {
        this.CEmotion=res.data
      });
    },
    deleteId(value) {
      deleteEvent(value).then(res => {
        this.onSubmit();
      });
    }
  }
};
</script>

<style lang='less' scoped>
</style>
