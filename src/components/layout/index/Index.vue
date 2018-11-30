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
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</el-col>
				</el-row>
				<div>

				</div>
				<div>

				</div>
				<div>

				</div>
				<div>

				</div>
			</div>
			<!-- AHP专家打分权重 -->
			<div class="ahp">
				<h5>AHP专家打分权重</h5>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="date" label="日期" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="name" label="姓名" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width="6.25%">
					</el-table-column>
				</el-table>
			</div>
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
			<!-- 印度稳定性指数 -->
			<div class="stabilityIndex">
				<h5>印度稳定性指数</h5>
				<span>同比</span>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="date" label="时间" min-width="12.5%">
					</el-table-column>
					<el-table-column prop="name" label="中国" min-width="12.5%">
					</el-table-column>
					<el-table-column prop="address" label="印度" min-width="12.5%">
					</el-table-column>
					<el-table-column prop="address" label="韩国" min-width="12.5%">
					</el-table-column>
					<el-table-column prop="address" label="朝鲜" min-width="12.5%">
					</el-table-column>
					<el-table-column prop="address" label="日本" min-width="12.5%">
					</el-table-column>
					<el-table-column prop="address" label="巴基斯坦" min-width="12.5%">
					</el-table-column>
					<el-table-column prop="address" label="美国" min-width="12.5%">
					</el-table-column>
				</el-table>
				<span>环比</span>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="date" label="国家" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="name" label="1" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="2" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="3" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="4" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="5" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="6" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="7" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="8" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="9" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="10" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="11" min-width="7.5%">
					</el-table-column>
					<el-table-column prop="address" label="12" min-width="7.5%">
					</el-table-column>
				</el-table>
				<el-button type="text">更多....</el-button>
			</div>
			<!-- 印度稳定性分析曲线图 -->
			<div class="analyzegraphs">
				<h5>印度稳定性分析曲线图</h5>
				<div></div>
			</div>
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
						<div id="" style="width:100%;height:400px;"></div>
					</el-col>
					<el-col :span="20">
						<div id="" style="width:100%;height:400px;"></div>
					</el-col>
				</el-row>
				<el-button type="text">更多....</el-button>
			</div>
			<div class="Economic">
				<h5>经济事件</h5>
				<el-row :gutter="20">
					<el-col :span="4">
						<div id="" style="width:100%;height:400px;"></div>
					</el-col>
					<el-col :span="20">
						<div id="" style="width:100%;height:400px;"></div>
					</el-col>
				</el-row>
				<el-button type="text">更多....</el-button>
			</div>
			<div class="ctu">
				<h5>反恐事件</h5>
				<el-row :gutter="20">
					<el-col :span="4">
						<div id="" style="width:100%;height:400px;"></div>
					</el-col>
					<el-col :span="20">
						<div id="" style="width:100%;height:400px;"></div>
					</el-col>
				</el-row>
				<el-button type="text">更多....</el-button>
			</div>
		</div>
		<!-- 新闻 -->
		<div class="news">
			<el-row :gutter="20">
				<el-col :span="8">
					<h5>新闻</h5>
					<ul class="source">
						<li><span>来源：</span><span>1000</span></li>
						<li><span>来源：</span><span>1000</span></li>
						<li><span>来源：</span><span>1000</span></li>
						<li><span>来源：</span><span>1000</span></li>
					</ul>
				</el-col>
				<el-col :span="8">
					<h5>热点新闻</h5>
					<ul class="new">
						<li><a href="#"><span>新闻标题</span></a></li>
						<li><a href="#"><span>新闻标题</span></a></li>
						<li><a href="#"><span>新闻标题</span></a></li>
						<li><a href="#"><span>新闻标题</span></a></li>
						<li><a href="#"><span>新闻标题</span></a></li>
					</ul>
				</el-col>
				<el-col :span="8">
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
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import echarts from "echarts";
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
	  value:'',
	  tableData:[]
    };
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
    .stabilityIndex,
    .analyzegraphs {
      margin: 20px;
      h5 {
        color: #0080ff;
        font-size: 20px;
        line-height: 40px;
      }
    }
    .stabilityIndex {
    //   .el-button {
    //     // float: right;
    //   }
      span {
        font-size: 20px;
        line-height: 40px;
        color: #000080;
        padding-left: 20px;
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
}
</style>
