<template>
  <div class="region">
    <el-row>
      <el-col :span="6">
        <h2 class="title">区域稳定性分析</h2>
      </el-col>
      <el-col :span="18">
        <el-button type="text">说明</el-button>
      </el-col>
    </el-row>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="选择国家">
        <el-select
          v-model="formInline.countrycode"
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
          type="month"
          placeholder="选择月份"
          format="yyyy-MM-dd"
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
    <div class="stabilityIndex">
      <h6>稳定性指数</h6>
      <el-row>
        <el-col :span="5">
          <h4>印度</h4>
        </el-col>
        <el-col :span="8">
          <div class="b">
            <div class="a">45</div>
            <ul>
              <li><span>参数</span><span>分值</span></li>
              <li><span>参数</span><span>分值</span></li>
              <li><span>参数</span><span>分值</span></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="11">
          <el-card class="box-card">
             <img src="../../../assets/2.jpg" class="image" width="100%">
            <div>
              <p>
                &nbsp;&nbsp;印度共和国（印地语：भारत गणराज्य；英语：Republic of India），简称印度。位于南亚，是南亚次大陆最大的国家。领土东北部同孟加拉国、尼泊尔、不丹和中国接壤， [1] 东部与缅甸为邻，东南部与斯里兰卡隔海相望，西北部与巴基斯坦交界。东临孟加拉湾，西濒阿拉伯海，海岸线长5560公里。也是一个由100多个民族构成的统一多民族国家，主体民族为印度斯坦族，约占全国总人口的46.3%。
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <india></india>
    <div class="overall">
      <h4>综合参数</h4>
      <div class="parameter">
        <h6>事件参数分析</h6>
        <el-tabs type="border-card">
          <el-tab-pane label="表格">
            <el-table
              :data="parameterData"
              border
              style="width: 100%"
            >
              <el-table-column
                prop="Dimensions"
                label="参数"
                min-width="10%"
              >
              </el-table-column>
              <el-table-column
                prop="January"
                label="一月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="February"
                label="二月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="March"
                label="三月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="April"
                label="四月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="May"
                label="五月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="June"
                label="六月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="July"
                label="七月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="August"
                label="八月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="September"
                label="九月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="October"
                label="十月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="November"
                label="十一月"
                min-width="7.5%"
              >
              </el-table-column>
              <el-table-column
                prop="December"
                label="十二月"
                min-width="7.5%"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane
            label="图表"
            :lazy="true"
          >
            <p>数量图</p>
            <line-charts></line-charts>
            <p>影响图</p>
            <line-charts></line-charts>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="matrix">
        <h6>参数矩阵</h6>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            min-width="8%"
          >
          </el-table-column>
        </el-table>
        <h6><i class="el-icon-news"></i>新闻</h6>
        <el-row>
          <el-col
            :span="6"
            style="padding:0 110px;"
          >
            <el-row>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>经济</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>政治</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>反恐</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>经济</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;border:1px solid #fff;background-color:rgb(241,141,0)"
              ><span>2</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;border:1px solid #fff;background-color:rgb(243,152,57)"
              ><span>0.33</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>政治</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;border:1px solid #fff;background-color:rgb(241,141,0)"
              ><span>0.5</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;border:1px solid #fff;background-color:rgb(249,194,112)"
              ><span>0.17</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>反恐</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;border:1px solid #fff;background-color:rgb(243,152,57)"
              ><span>3</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;border:1px solid #fff;background-color:rgb(249,194,112)"
              ><span>6</span></el-col>
              <el-col
                :span="6"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="6"
            style="padding:0 80px;"
          >
            <el-row>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:#d7d7d7;border:1px solid #fff"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff"
              ><span>0.3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(243,152,57);border:1px solid #fff"
              ><span>0.5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:#d7d7d7;border:1px solid #fff"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(227,204,169);border:1px solid #fff"
              ><span>0.11</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(227,204,169);border:1px solid #fff"
              ><span>9</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:#d7d7d7;border:1px solid #fff"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff"
              ><span>4</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(243,152,57);border:1px solid #fff;"
              ><span>2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>0.25</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;color:#fff;line-height:50px;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="6"
            style="padding:0 80px;"
          >
            <el-row>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(227,204,169);border:1px solid #fff;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(243,152,57);border:1px solid #fff;"
              ><span>0.5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(227,204,169);border:1px solid #fff;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(243,152,57);border:1px solid #fff;"
              ><span>0.5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(236,214,202);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;text-align:center;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="6"
            style="padding:0 80px;"
          >
            <el-row>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>4</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(236,214,202);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(243,152,57);border:1px solid #fff;"
              ><span>0.5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>负数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>0.25</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(227,204,169);border:1px solid #fff;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(243,152,57);border:1px solid #fff;"
              ><span>0.5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正分</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(236,214,202);border:1px solid #fff;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(227,204,169);border:1px solid #fff;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>4</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>正数</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(243,152,57);border:1px solid #fff;"
              ><span>2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(243,152,57);border:1px solid #fff;"
              ><span>2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(237,110,61);border:1px solid #fff;"
              ><span>0.25</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
        </el-row>
        <ahp></ahp>
        <h6><i class="el-icon-view"></i>宏观</h6>
        <el-row>
          <el-col
            :span="6"
            style="padding:0 80px;"
          >
            <el-row>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>DYN</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>UEM</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>URB</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>POP</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>DYN</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>UEM</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>URB</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(177,212,219);border:1px solid #fff;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>POP</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(177,212,219);border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="6"
            style="padding:0 80px;"
          >
            <el-row>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>GDP</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>IND</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>GNS</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>CPI</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>GDP</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:#d7d7d7;text-align:center;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(41,131,177);text-align:center;border:1px solid #fff;"
              ><span>2.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(34,174,230);text-align:center;border:1px solid #fff;"
              ><span>1.4</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(41,131,177);text-align:center;border:1px solid #fff;"
              ><span>2.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>IND</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(41,131,177);text-align:center;border:1px solid #fff;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:#d7d7d7;text-align:center;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(177,212,219);text-align:center;border:1px solid #fff;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(89,195,226);text-align:center;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>GNS</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(34,174,230);text-align:center;border:1px solid #fff;"
              ><span>0.71</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(177,212,219);text-align:center;border:1px solid #fff;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:#d7d7d7;text-align:center;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(34,174,230);text-align:center;border:1px solid #fff;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>CPI</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(41,131,177);text-align:center;border:1px solid #fff;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(89,195,226);text-align:center;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:rgb(34,174,230);text-align:center;border:1px solid #fff;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;color:#fff;background-color:#d7d7d7;text-align:center;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="6"
            style="padding:0 80px;"
          >
            <el-row>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>IMP</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>ELC</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>USE</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>VAL</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>IMP</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(177,212,219);border:1px solid #fff;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>ELC</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>0.71</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>USE</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(177,212,219);border:1px solid #fff;"
              ><span>2.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>1.4</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>2.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>VAL</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="6"
            style="padding:0 80px;"
          >
            <el-row>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;"
              ></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>XPD</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>TER</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>PAT</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>GRN</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>XPD</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(177,212,219);border:1px solid #fff;"
              ><span>0.56</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>TER</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(177,212,219);border:1px solid #fff;"
              ><span>1.8</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>9</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>PAT</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(89,195,226);border:1px solid #fff;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;"
              ><span>GRN</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(41,131,177);border:1px solid #fff;"
              ><span>0.11</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:rgb(34,174,230);border:1px solid #fff;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="margin:5px;width:50px;height:50px;line-height:50px;text-align:center;color:#fff;background-color:#d7d7d7;border:1px solid #fff;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <p style="margin-top:40px;font-size:20px;line-height:40px;">
        区域稳定性评估示范系统，针对全球战略态势定量辅助分析研判的需求，面向全球的重大稳定性事件态势深度研判分析，开展全球危机事件综合态势图生成与展示技术研究，以危机事件规律分析与预测为示范，完成典型应用系统建设，支持形成区域稳定性综合评估战略态势图，为战略情报研判和预警预测提供技术支撑。
      </p>
    </div>
    <div class="original">
      <h5>事件分析</h5>
      <original></original>
    </div>
    <div class="macro">
      <h4>宏观数据</h4>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="国家"
          min-width="12%"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="维度"
          min-width="5.5%"
        >
        </el-table-column>
      </el-table>
    </div>
    <news></news>
  </div>
</template>

<script>
import echarts from "echarts";
import ahp from "@/components/layout/general/index/Ahp.vue";
import india from "@/components/layout/general/index/India.vue";
import news from "@/components/layout/general/index/News.vue";
import original from "@/components/layout/general/original";
import lineCharts from "@/components/layout/general/charts/line.vue";
import { scoresource } from "@/api/region/index";
export default {
  data() {
    return {
      options: [
        {
          value: "PRK",
          label: "朝鲜"
        },
        {
          value: "IND ",
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
        countrycode: "IND",
        date: ""
      },
      parameterData: []
    };
  },
  components: {
    ahp,
    india,
    news,
    original,
    lineCharts
  },
  mounted() {},
  created() {
    this.onSubmit();
  },
  methods: {
    onSubmit() {
      scoresource(this.formInline).then(res => {
        this.parameterData = res.data;
      });
    }
  }
};
</script>

<style scoped lang="less">
</style>
