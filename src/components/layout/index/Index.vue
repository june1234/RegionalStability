<template>
  <div class="comprehensive">
    <div class="lou">
      <img
        src="../../../assets/1.jpg"
        alt=""
      >
      <div class="title">
        <h6>欢迎使用区域稳定性评估示范系统</h6>
      </div>
    </div>
    <!-- 区域稳定性 -->
    <div class="regional">
      <el-row>
        <el-col :span="4">
          <span>区域稳定性</span>
        </el-col>
        <el-col :span="20">
          <p>
            区域稳定性评估示范系统，针对全球战略态势定量辅助分析研判的需求，面向全球的重大稳定性事件态势深度研判分析，开展全球危机事件综合态势图生成与展示技术研究，以危机事件规律分析与预测为示范，完成典型应用系统建设，支持形成区域稳定性综合评估战略态势图，为战略情报研判和预警预测提供技术支撑。
          </p>
        </el-col>
      </el-row>
      <div class="analysisProcess">
        <h4>典型算法</h4>
        <el-row>
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <i class="el-icon-tickets"></i>
              </el-col>
              <el-col :span="18">
                <h5>CNN(卷积神经网络)</h5>
                <ul>
                  <li> 1.新闻文本进行预处理，包括分词、去除停用词、统计特征词等
                  </li>
                  <li> 2.经过Embedding Layer（嵌入层）和Convolution Layer（卷积层）将词向量进行卷积，得到Feature Map。
                  </li>
                  <li> 3.经过Max Pooling（最大池化层）从之前的Feature Map中提取最大的值。
                  </li>
                  <li> 4. Pooling(池化)之后的Vector(向量)通过Fully Connected(全连接)的方式接入一个Softmax层进行分类，并且在全连接部分使用随机失活层（Dropout）,减少过拟合。
                  </li>
                  <li> 5.得到最终训练结果。
                  </li>
                </ul>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <i class="el-icon-loading"></i>
              </el-col>
              <el-col :span="18">
                <h5>Kmeans聚类算法</h5>
                <ul>
                  <li> 1.读取新闻文本内容。</li>
                  <li>2.对文本进行预处理，包括去除标点、停用词等。</li>
                  <li>3.使用Scikit-Learn对文本进行TF-IDF计算。</li>
                  <li>4.使用Kmeans进行文本聚类（K-means介绍如下）。</li>
                </ul>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <i class="el-icon-star-off"></i>
              </el-col>
              <el-col :span="18">
                <h5>情感分析</h5>
                <ul>
                  <li>1.情感词典的建立</li>
                  <li>2.情感词典的修正</li>
                  <li>3.计算分词的情感分数</li>
                  <li>4.计算新闻的情感分数</li>
                  <li>5.计算事件的情感分数</li>
                </ul>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <i class="el-icon-document" @click="centerDialogVisible=true"></i>
              </el-col>
              <el-col :span="18">
                <h5>TOT（Topics Over Time）</h5>
                <p>&nbsp;&nbsp;考虑时间因素的多主题模型TOT（Topics Over Time），是机器学习中的LDA(Latent Dirichlet Allocation)模型的一种扩展，模型不仅可分析数据的主题概率分布结构，还可获得结构随时间变化的方式。</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="Process">
        <h4>分析过程</h4>
        <el-row>
          <el-col :span="14">
            <p>
              &nbsp;&nbsp;本项目数据来源主要包括新闻媒体数据和世界各国国家宏观数据，目标一是分析地区稳定性，二是对区域新闻分析追踪事件对其影响，展示事件随时间演变的趋势。
            </p>
            <p>
              &nbsp;&nbsp;新闻数据经过清洗之后，我们首先使用NLP深度学习的方法对<span style="color:#FF5722;font-size:20px;">新闻进行分类、情感分析、特征提取、聚类等处理</span>，将新闻聚类成为事件，并获得其人物、组织、地域、情感参数等特征。下一步，我们通过<span style="color:#FF5722;font-size:20px;">AHP层次分析法</span>，请多位专家至少进行3轮特征重要性评估打分，并进行一致性分析，确定事件特征的权重，从而获得地区事件的稳定性。
            </p>
            <p>
              &nbsp;&nbsp;世界各国宏观数据包括2000多个维度的特征，我们首先通过特征工程<span style="color:#FF5722;font-size:20px;">PCA主成分分析</span>，只选择其中<span style="color:#FF5722;font-size:20px;">占85%信息量的16维宏观数据</span>。我们通过两种方法计算其权重，一是侧重考虑数据客观差异性的信息熵值法，此方法完全没有主观因素；二是采用<span style="color:#FF5722;font-size:20px;">AHP层次分析法</span>，人为调整参数对分析目标的权重，两种方法获得的数据相结合得到相对准确的宏观稳定性。
            </p>
            <p>
              &nbsp;&nbsp;最后结果，宏观稳定性相对平稳，事件稳定性有一定波动性，两者结合获得美国在一定时间内的社会稳定性。
            </p>
            <p>
              &nbsp;&nbsp;另外，我们标注议题的重要事件后，对事件进行进一步的半监督的聚类，结合新闻数量、重要性、情感参数等指标，获得议题的相关事件影响，及议题随时间热度的变化趋势。
            </p>
          </el-col>
          <el-col :span="10">
            <img
              src="../../../assets/1.png"
              alt=""
            >
          </el-col>
        </el-row>
      </div>
      <h4>结果展示</h4>
      <!-- 综合 -->
      <div class="overall">
        <el-row :gutter="20">
          <el-col :span="20">
            <h5>综合指数</h5>
          </el-col>
          <el-col :span="4">
            <el-select
              v-model="form.seriescode"
              placeholder="请选择"
              @change="Composite"
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
        <line-charts
          v-if="Overall"
          :lineData="overall"
        ></line-charts>
      </div>
      <!-- AHP专家打分权重 -->
      <ahp
        :AhpData="ahpData"
        :Table="tableData"
      ></ahp>
      <!-- 事件指数 -->
      <div class="caseIndex">
        <h5>事件指数</h5>
        <el-row :gutter="20">
          <el-col :span="8">
            <h6>政治</h6>
            <el-table
              :data="event.Political"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="dimensions"
                label="维度"
                min-width="33%"
              >
              </el-table-column>
              <el-table-column
                prop="positive"
                label="正面"
                min-width="33%"
              >
              </el-table-column>
              <el-table-column
                prop="negative"
                label="负面"
                min-width="33%"
              >
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="8">
            <h6>经济</h6>
            <el-table
              :data="event.Economic"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="dimensions"
                label="维度"
                min-width="33%"
              >
              </el-table-column>
              <el-table-column
                prop="positive"
                label="正面"
                min-width="33%"
              >
              </el-table-column>
              <el-table-column
                prop="negative"
                label="负面"
                min-width="33%"
              >
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="8">
            <h6>反恐</h6>
            <el-table
              :data="event.Ctu"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="dimensions"
                label="维度"
                min-width="33%"
              >
              </el-table-column>
              <el-table-column
                prop="positive"
                label="正面"
                min-width="33%"
              >
              </el-table-column>
              <el-table-column
                prop="negative"
                label="负面"
                min-width="33%"
              >
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </div>
      <india :IndiaData="compareData"></india>
    </div>
    <!-- 议题分析 -->
    <div class="issues">
      <el-row :gutter="20">
        <el-col :span="4">
          <h5>事件演变分析</h5>
        </el-col>
        <el-col :span="20">
          <p>
            中美贸易争端，又称中美贸易战，中美贸易摩擦，是中美经济关系中的重要问题。贸易争端主要发生在两个方面：一是中国具有比较优势的出口领域；二是中国没有优势的进口和技术知识领域。前者基本上是竞争性的，而后者是市场不完全起作用的，它们对两国经济福利和长期发展的影响是不同的。 </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <topice-charts
            v-if="isTopice"
            :all="topiceData"
          ></topice-charts>
          <el-button
            type="text"
            style="float:right;"
            @click="jump('/EventTiming')"
          >更多....</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 事件分析 -->
    <div class="incident">
      <el-row>
        <el-col :span="4">
          <h4>事件分析</h4>
        </el-col>
        <el-col :span="20">
          <p>
            区域稳定性评估示范系统，针对全球战略态势定量辅助分析研判的需求，面向全球的重大稳定性事件态势深度研判分析，开展全球危机事件综合态势图生成与展示技术研究，以危机事件规律分析与预测为示范，完成典型应用系统建设，支持形成区域稳定性综合评估战略态势图，为战略情报研判和预警预测提供技术支撑。
          </p>
        </el-col>
      </el-row>
      <div class="Political">
        <h5>政治事件</h5>
        <el-row :gutter="20">
          <el-col :span="8">
            <bar-charts
              :sunData="PsunData"
              :color="Pcolor"
            ></bar-charts>
          </el-col>
          <el-col :span="16">
            <hot-charts :hotData="pointData"></hot-charts>
            <el-button
              type="text"
              style="float:right;"
              @click="jump('/PoliticsEvent')"
            >更多....</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="Economic">
        <h5>经济事件</h5>
        <el-row :gutter="20">
          <el-col :span="8">
            <bar-charts
              :sunData="EsunData"
              :color="Ecolor"
            ></bar-charts>
          </el-col>
          <el-col :span="16">
            <world-charts
              v-if="EconomicB"
              :worldData.sync="situations.data"
              :title.sync="situations.title"
              :subtext.sync="situations.subtext"
            ></world-charts>
            <el-button
              type="text"
              style="float:right;"
              @click="jump('/EconomyEvent')"
            >更多....</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="ctu">
        <h5>反恐事件</h5>
        <el-row :gutter="20">
          <el-col :span="8">
            <bar-charts
              :sunData="CsunData"
              :color="Ccolor"
            ></bar-charts>
          </el-col>
          <el-col :span="16">
            <armed-forces :pineData="indiaPine"></armed-forces>
            <el-button
              type="text"
              style="float:right;"
              @click="jump('/AntiTerrorismEvent')"
            >更多....</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 新闻 -->
    <news></news>

    <el-dialog
      title="TOT（Topics Over Time）"
      :visible.sync="centerDialogVisible"
      width="50%"
      center
    >
      <p style="line-height:50px;color:#000040;font-size:24px;">
        &nbsp;&nbsp;考虑时间因素的多主题模型TOT（Topics Over Time），是机器学习中的LDA(Latent Dirichlet Allocation)模型的一种扩展，模型不仅可分析数据的主题概率分布结构，还可获得结构随时间变化的方式。
      </p>
      <p style="line-height:50px;color:#000040;font-size:24px;">
        &nbsp;&nbsp;TOT模型的生成过程，根据Gibbs采样EM算法逐渐拟合模型参数：
      </p>
      <ul>
        <li style="line-height:50px;color:#000040;font-size:24px;">
        （1）依据Dirichlet分布对主题在每篇文档的多项分布进行采样，然后对于每个出现的词汇，根据主题进对其行采样；        
        </li>
        <li style="line-height:50px;color:#000040;font-size:24px;">
        （2）每个主题依多项分布生成词汇，依Beta分布确定主题下相关文档对应的时间戳。这里的时间戳（实际上始终在整个文档中被观察和保持不变）与文档中的每个词汇相关联。        
        </li>
        <li style="line-height:50px;color:#000040;font-size:24px;">
        （3）最后，估计文档所属的主题概率的过程中，词汇的概率贡献和时间戳的概率贡献需要通过一定的加权相结合，类似于语音识别中声学模型和语言模型的平衡。        
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import topiceData from "@/assets/zhongmei/USALine.json";
import ahp from "@/components/layout/general/index/Ahp.vue";
import india from "@/components/layout/general/index/India.vue";
import news from "@/components/layout/general/index/News.vue";
import lineCharts from "@/components/layout/general/charts/line.vue";
import barCharts from "@/components/layout/general/charts/lineBar.vue";
import armedForces from "@/components/layout/general/charts/ArmedForces.vue";
import worldCharts from "@/components/layout/general/charts/world.vue";
import hotCharts from "@/components/layout/general/charts/hot.vue";
import topiceCharts from "@/components/layout/general/index/USA/USALine.vue";
import indiaPine from "@/assets/india/92_3.json";
import { Situation } from "@/api/economy/EconomyEventAnalysis";
import { composite, Ahp, caseIndex, compare } from "@/api/index/index";
import { findSun, point } from "@/api/common";
export default {
  data() {
    return {
      options: [
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
      form: {
        countrycode: "IND",
        seriescode: "SH.DYN.NMRT",
        beginyear: "2000",
        endyear: "2013"
      },
      PsunForm: {
        countrycode: "IND",
        genre: 1,
        date: "2018-10-01"
      },
      point: {
        countrycode: "IND",
        genre: 1,
        startTime: "2018-01-01",
        endTime: "2018-10-01"
      },
      PsunData: [],
      Pcolor: "#59c4e6",
      EsunForm: {
        countrycode: "IND",
        genre: 2,
        date: "2018-10-01"
      },
      EsunData: [],
      Ecolor: "#c1232b",
      CsunForm: {
        countrycode: "IND",
        genre: 3,
        date: "2018-10-01"
      },
      CsunData: [],
      Ccolor: "#c6e579",
      tableData: [],
      situations: { data: [], title: "", subtext: "" },
      situa: {
        recordTime: 2017
      },
      EconomicB: false,
      EconomicA: false,
      overall: {},
      Overall: false,
      ahpData: {
        table: []
      },
      event: {},
      compareFrom: {
        countrycode: "IND",
        countries: [
          {
            countryid: 44,
            countrycode: "CHN",
            countryname: "中国"
          },
          {
            countryid: 217,
            countrycode: "USA",
            countryname: "美国"
          },
          {
            countryid: 184,
            countrycode: "KOR",
            countryname: "韩国"
          },
          {
            countryid: 149,
            countrycode: "PRK",
            countryname: "朝鲜"
          },
          {
            countryid: 101,
            countrycode: "JPN",
            countryname: "日本"
          },
          {
            countryid: 92,
            countrycode: "IND",
            countryname: "印度"
          },
          {
            countryid: 153,
            countrycode: "PAK",
            countryname: "巴基斯坦"
          }
        ],
        searchtime: "2018-12-12"
      },
      compareData: {},
      topiceData: {},
      isTopice: false,
      indiaPine: {},
      pointData: [],
      centerDialogVisible:false
    };
  },
  components: {
    ahp,
    india,
    news,
    lineCharts,
    armedForces,
    worldCharts,
    barCharts,
    topiceCharts,
    hotCharts
  },
  mounted() {},
  created() {
    this.losting();
    this.Composite();
    this.topiceData = topiceData;
    this.isTopice = true;
    this.indiaPine = indiaPine.data;
  },
  methods: {
    jump(val) {
      this.$router.push(val);
    },
    losting() {
      Situation(this.situa).then(res => {
        this.situations.data = res.data;
        this.situations.title =
          "获得金融服务有益于个人和社会。在全球范围内，69％的成年人拥有金融机构或移动货币提供者的账户";
        this.situations.subtext =
          "wbg_name（指标 =  “帐户所有权”，年份 =  年份，denom  =  “ 15岁及以上人口的百分比”）";
        this.EconomicB = true;
      });
      Ahp().then(res => {
        this.ahpData = res.data;
        this.tableData.push(this.ahpData.Tbody);
      });
      caseIndex().then(res => {
        this.event = res.data;
      });
      compare(this.compareFrom).then(res => {
        this.compareData = res.data;
        this.compareData.country = "印度";
      });
      findSun(this.PsunForm).then(res => {
        this.PsunData = res.data;
      });
      findSun(this.EsunForm).then(res => {
        this.EsunData = res.data;
      });
      findSun(this.CsunForm).then(res => {
        this.CsunData = res.data;
      });
      point(this.point).then(res => {
        this.pointData = res.data;
      });
    },
    Composite() {
      composite(this.form).then(res => {
        this.overall = res.data;
        this.Overall = true;
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
