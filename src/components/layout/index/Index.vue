<template>
  <div class="comprehensive">
    <!-- 区域稳定性 -->
    <div class="regional">
      <el-row :gutter="20">
        <el-col :span="4">
          <span>区域稳定性</span>
        </el-col>
        <el-col :span="20">
          <p>
            区域稳定性评估示范系统，针对全球战略态势定量辅助分析研判的需求，面向全球的重大稳定性事件态势深度研判分析，开展全球危机事件综合态势图生成与展示技术研究，以危机事件规律分析与预测为示范，完成典型应用系统建设，支持形成区域稳定性综合评估战略态势图，为战略情报研判和预警预测提供技术支撑。
          </p>
        </el-col>
      </el-row>
      <h4>分析过程</h4>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
      <h4>结果展示</h4>
      <!-- 综合 -->
      <div class="overall">
        <el-row :gutter="20">
          <el-col :span="20">
            <h5>综合指数</h5>
          </el-col>
          <el-col :span="4">
            <el-select
              v-model="value"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <line-charts></line-charts>
      </div>
      <!-- AHP专家打分权重 -->
			<ahp></ahp>
      <!-- 事件指数 -->
      <div class="caseIndex">
        <h5>事件指数</h5>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </div>
			<india></india>
    </div>
    <!-- 议题分析 -->
    <div class="issues">
      <el-row :gutter="20">
        <el-col :span="4">
          <span>议题分析</span>
        </el-col>
        <el-col :span="20">
          <p>
            区域稳定性评估示范系统，针对全球战略态势定量辅助分析研判的需求，面向全球的重大稳定性事件态势深度研判分析，开展全球危机事件综合态势图生成与展示技术研究，以危机事件规律分析与预测为示范，完成典型应用系统建设，支持形成区域稳定性综合评估战略态势图，为战略情报研判和预警预测提供技术支撑。
          </p>
        </el-col>
      </el-row>
    </div>
    <!-- 事件分析 -->
    <div class="incident">
      <h4>事件分析</h4>
      <p>
        区域稳定性评估示范系统，针对全球战略态势定量辅助分析研判的需求，面向全球的重大稳定性事件态势深度研判分析，开展全球危机事件综合态势图生成与展示技术研究，以危机事件规律分析与预测为示范，完成典型应用系统建设，支持形成区域稳定性综合评估战略态势图，为战略情报研判和预警预测提供技术支撑。
      </p>
      <div class="Political">
        <h5>政治事件</h5>
        <el-row :gutter="20">
          <el-col :span="4">
            <div
              id=""
              style="width:100%;height:400px;"
            ></div>
          </el-col>
          <el-col :span="20">
            <div
              id=""
              style="width:100%;height:400px;"
            ></div>
          </el-col>
        </el-row>
        <el-button type="text">更多....</el-button>
      </div>
      <div class="Economic">
        <h5>经济事件</h5>
        <el-row :gutter="20">
          <el-col :span="4">
            <div
              id=""
              style="width:100%;height:400px;"
            ></div>
          </el-col>
          <el-col :span="20">
            <div
              id=""
              style="width:100%;height:400px;"
            ></div>
          </el-col>
        </el-row>
        <el-button type="text">更多....</el-button>
      </div>
      <div class="ctu">
        <h5>反恐事件</h5>
        <el-row :gutter="20">
          <el-col :span="4">
            <div
              id=""
              style="width:100%;height:400px;"
            ></div>
          </el-col>
          <el-col :span="20">
            <div
              id=""
              style="width:100%;height:400px;"
            ></div>
          </el-col>
        </el-row>
        <el-button type="text">更多....</el-button>
      </div>
    </div>
    <!-- 新闻 -->
		<news></news>
  </div>
</template>

<script>
import echarts from "echarts";
import ahp from '@/components/layout/general/index/Ahp.vue'
import india from '@/components/layout/general/index/India.vue'
import news from '@/components/layout/general/index/News.vue'
import lineCharts from '@/components/layout/general/Charts/line.vue'
export default {
  data() {
    return {
      options: [
        {
          value: "1",
          label: "新生儿死亡率（每千例活产儿）"
        },
        {
          value: "2",
          label: "年轻群体总失业人数（占15-24岁所有劳动力数量的比例）"
        },
        {
          value: "3",
          label: "城镇人口（占总人口比例）"
        },
        {
          value: "4",
          label: "人口增长（年度百分比）"
        },
        {
          value: "5",
          label: "人均 GDP增长（年增长率）"
        },
        {
          value: "6",
          label: "工业增加值（占 GDP 的百分比）"
        },
        {
          value: "7",
          label: "总储蓄（占 GDP 的百分比）"
        },
        {
          value: "8",
          label: "按消费者价格指数衡量的通货膨胀（年通胀率）"
        },
        {
          value: "9",
          label: "能源净进口（占能源使用量的百分比）"
        },
        {
          value: "10",
          label: "耗电量（人均千瓦时）"
        },
        {
          value: "11",
          label: "矿石和金属出口（占商品出口的百分比）"
        },
        {
          value: "12",
          label: "研发支出（占GDP的比例）"
        },
        {
          value: "13",
          label: "入学率，高等院校（占总人数的百分比）"
        },
        {
          value: "14",
          label: "专利申请量，居民"
        },
        {
          value: "15",
          label: "科技期刊文章"
        },
        {
          value: "16",
          label: "可再生能源发电量，不包括水电（占总发电量的比例）"
        }
      ],
      value: "",
      tableData: []
    };
	},
	components:{
		 ahp,
		 india,
     news,
     lineCharts
	},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.comprehensive {
   margin-top: 20px;
  .regional {
    background-color: #fff;
    .el-row {
			.el-col{
				 >span {
        line-height: 130px;
        font-size: 30px;
        color: #000040;
        font-weight: 500;
        text-align: center;
        width: 100%;
        display: inline-block;
      }
      >p {
        line-height: 30px;
        padding: 20px;
      }
			}
     
    }
    h4 {
      line-height: 40px;
      background-color: #0080ff;
      color: #fff;
      width: 100%;
      padding-left: 10px;
    }
    .el-tabs {
      margin: 20px;
    }
    .overall {
      margin: 20px;
      h5 {
        color: #0080ff;
        font-size: 20px;
        line-height: 40px;
      }
    }
    .ahp,
    .caseIndex,
    {
      margin: 20px;
      h5 {
        color: #0080ff;
        font-size: 20px;
        line-height: 40px;
      }
    }
  }
  .issues {
    background-color: #fff;
    .el-row {
      span {
        line-height: 130px;
        font-size: 30px;
        color: #000040;
        font-weight: 500;
        text-align: center;
        width: 100%;
        display: inline-block;
      }
      p {
        line-height: 30px;
        padding: 20px;
      }
    }
  }
  .incident {
    background-color: #fff;
    margin-top: 20px;
    h4 {
      line-height: 60px;
      color: #000040;
      font-size: 30px;
      font-weight: 500;
      padding-left: 20px;
    }
    p {
      line-height: 30px;
      padding: 20px;
    }
    .Political,
    .Economic,
    .ctu {
      h5 {
        color: #0080ff;
        font-size: 20px;
        line-height: 40px;
        padding-left: 20px;
      }
    }
  }
}
</style>
