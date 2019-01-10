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
    <div class="stabilityIndex">
      <h6>稳定性指数</h6>
      <el-row>
        <el-col :span="5">
          <h4>{{countryName}}</h4>
        </el-col>
        <el-col :span="8">
          <div class="b">
            <div class="a">{{score.total}}</div>
            <ul>
              <li
                v-for="(item,index) in score.sub"
                :key="index"
              ><span>{{item.name}}</span><span>{{item.code}}</span></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="11">
          <el-card class="box-card">
            <img
              :src=countryImg
              class="image"
              width="100%"
            >
            <div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;{{countryDetail}}
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
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="January"
                label="一月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="February"
                label="二月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="March"
                label="三月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="April"
                label="四月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="May"
                label="五月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="June"
                label="六月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="July"
                label="七月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="August"
                label="八月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="September"
                label="九月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="October"
                label="十月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="November"
                label="十一月"
                min-width="8%"
              >
              </el-table-column>
              <el-table-column
                prop="December"
                label="十二月"
                min-width="8%"
              >
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane
            label="图表"
            :lazy="true"
          >
            <p>数量图</p>
            <line-charts :lineData="Quantitativegraph"></line-charts>
            <p>影响图</p>
            <line-charts :lineData="Influencediagram"></line-charts>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="matrix">
        <h6>参数矩阵</h6>
        <h6><i class="el-icon-news"></i>新闻</h6>
        <el-row>
          <el-col
            :span="5"
            style="padding:0 20px;width: 22%;border-right:1px solid #eee;"
          >
            <el-row>
              <el-col :span="6"></el-col>
              <el-col :span="6"><span>经济</span></el-col>
              <el-col :span="6"><span>政治</span></el-col>
              <el-col :span="6"><span>反恐</span></el-col>
              <el-col :span="6"><span>经济</span></el-col>
              <el-col
                :span="6"
                style="background-color:#d7d7d7;color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="6"
                style="background-color:rgb(241,141,0);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2</span></el-col>
              <el-col
                :span="6"
                style="background-color:rgb(243,152,57);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col :span="6"><span>政治</span></el-col>
              <el-col
                :span="6"
                style="color:#fff;background-color:rgb(241,141,0);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.5</span></el-col>
              <el-col
                :span="6"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="6"
                style="color:#fff;background-color:rgb(249,194,112);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.17</span></el-col>
              <el-col :span="6"><span>反恐</span></el-col>
              <el-col
                :span="6"
                style="color:#fff;background-color:rgb(243,152,57);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="6"
                style="color:#fff;background-color:rgb(249,194,112);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>6</span></el-col>
              <el-col
                :span="6"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="5"
            style="width: 22%;border-right:1px solid #eee;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>负分</span></el-col>
              <el-col :span="5"><span>负数</span></el-col>
              <el-col :span="5"><span>正分</span></el-col>
              <el-col :span="5"><span>正数</span></el-col>
              <el-col :span="5"><span>负分</span></el-col>
              <el-col
                :span="5"
                style="background-color:#d7d7d7;color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(237,110,61);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(236,214,202);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.3</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(243,152,57);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.5</span></el-col>
              <el-col :span="5"><span>负数</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(237,110,61);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="background-color:#d7d7d7;color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(227,204,169);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.11</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(236,214,202);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style=""
              ><span>正分</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(236,214,202);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(227,204,169);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>9</span></el-col>
              <el-col
                :span="5"
                style="background-color:#d7d7d7;color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(237,110,61);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>4</span></el-col>
              <el-col :span="5"><span>正数</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(243,152,57);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(236,214,202);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="background-color:rgb(237,110,61);color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.25</span></el-col>
              <el-col
                :span="5"
                style="background-color:#d7d7d7;color:#fff;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="5"
            style="width: 22%;border-right:1px solid #eee;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>负分</span></el-col>
              <el-col :span="5"><span>负数</span></el-col>
              <el-col :span="5"><span>正分</span></el-col>
              <el-col :span="5"><span>正数</span></el-col>
              <el-col :span="5"><span>负分</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(227,204,169);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(243,152,57);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.5</span></el-col>
              <el-col
                :span="5"
                style=""
              ><span>负数</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(236,214,202);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(236,214,202);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col :span="5"><span>正分</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(227,204,169);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(236,214,202);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>5</span></el-col>
              <el-col :span="5"><span>正数</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(243,152,57);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.5</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(236,214,202);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="5"
            style="width: 22%;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>负分</span></el-col>
              <el-col :span="5"><span>负数</span></el-col>
              <el-col :span="5"><span>正分</span></el-col>
              <el-col :span="5"><span>正数</span></el-col>
              <el-col :span="5"><span>负分</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>4</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(236,214,202);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(243,152,57);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.5</span></el-col>
              <el-col :span="5"><span>负数</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.25</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(227,204,169);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(243,152,57);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.5</span></el-col>
              <el-col :span="5"><span>正分</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(236,214,202);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(227,204,169);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>4</span></el-col>
              <el-col :span="5"><span>正数</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(243,152,57);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(243,152,57);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(237,110,61);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.25</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
        </el-row>
        <ahp
          :AhpData="ahpData"
          :Table="tableData"
        ></ahp>
        <h6><i class="el-icon-view"></i>宏观</h6>
        <el-row>
          <el-col
            :span="5"
            style="width: 20%;border-right:1px solid #eee;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>国民</span></el-col>
              <el-col :span="5"><span>经济</span></el-col>
              <el-col :span="5"><span>能源</span></el-col>
              <el-col :span="5"><span>科技</span></el-col>
              <el-col :span="5"><span>国民</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177, 212, 219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34, 174, 230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.7</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col :span="5"><span>经济</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177, 212, 219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.8</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.8</span></el-col>
              <el-col :span="5"><span>能源</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34, 174, 230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.3</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col :span="5"><span>科技</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.56</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="5"
            style="width: 20%;border-right:1px solid #eee;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>DYN</span></el-col>
              <el-col :span="5"><span>UEM</span></el-col>
              <el-col :span="5"><span>URB</span></el-col>
              <el-col :span="5"><span>POP</span></el-col>
              <el-col :span="5"><span>DYN</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col :span="5"><span>UEM</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>5</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col :span="5"><span>URB</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.2</span></el-col>
              <el-col :span="5"><span>POP</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="5"
            style="width: 20%;border-right:1px solid #eee;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>GDP</span></el-col>
              <el-col :span="5"><span>IND</span></el-col>
              <el-col :span="5"><span>GNS</span></el-col>
              <el-col :span="5"><span>CPI</span></el-col>
              <el-col :span="5"><span>GDP</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.4</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2.33</span></el-col>
              <el-col :span="5"><span>IND</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col :span="5"><span>GNS</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.71</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col :span="5"><span>CPI</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="5"
            style="width: 20%;border-right:1px solid #eee;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>IMP</span></el-col>
              <el-col :span="5"><span>ELC</span></el-col>
              <el-col :span="5"><span>USE</span></el-col>
              <el-col :span="5"><span>VAL</span></el-col>
              <el-col :span="5"><span>IMP</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col :span="5"><span>ELC</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.71</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col :span="5"><span>USE</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.4</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>2.33</span></el-col>
              <el-col :span="5"><span>VAL</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.43</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
          <el-col
            :span="5"
            style="width: 20%;"
          >
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="5"><span>XPD</span></el-col>
              <el-col :span="5"><span>TER</span></el-col>
              <el-col :span="5"><span>PAT</span></el-col>
              <el-col :span="5"><span>GRN</span></el-col>
              <el-col :span="5"><span>XPD</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.56</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.67</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>5</span></el-col>
              <el-col :span="5"><span>TER</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(177,212,219);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1.8</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>9</span></el-col>
              <el-col :span="5"><span>PAT</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(89,195,226);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.6</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>3</span></el-col>
              <el-col :span="5"><span>GRN</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.2</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(41,131,177);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.11</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:rgb(34,174,230);box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>0.33</span></el-col>
              <el-col
                :span="5"
                style="color:#fff;background-color:#d7d7d7;box-shadow: 10px 10px 10px #d2d2d2;"
              ><span>1</span></el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <p style="margin-top:40px;font-size:20px;line-height:40px;">
        获得上图的比较矩阵以后，首先需要判断是否符合一致性，即计算CI值：CI=(λ-1)/(n-1)，λ为矩阵最大特征值；然后对每个矩阵A计算其最大特征向量W，即对 运算：AW=λW，W即为每个矩阵对应层次的权重，最后根据每个层次对应的权重，来求出权重矩阵P。 </p>
    </div>

    <div class="original">
      <h5>事件分析</h5>
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
    <div class="macro">
      <h4>宏观数据</h4>
      <el-table
        :data="worldBankDataList.Tbody"
        border
        style="width: 100%"
      >
        <el-table-column
          v-for="(item,index) in worldBankDataList.Theader"
          :prop="item.prop"
          :label="item.label"
          min-width="6.25%"
          :key="index"
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
import {
  scoresource,
  score,
  enventData,
  worldBankData
} from "@/api/region/index";
import { Ahp } from "@/api/index/index";
import { event, deleteEvent, findEmotion,getDes } from "@/api/common";
export default {
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
        countrycode: "IND",
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
      parameterData: [],
      politics: {},
      economy: {},
      ctd: {},
      PEmotion: {},
      EEmotion: {},
      CEmotion: {},
      ahpData: {},
      tableData: [],
      score: {},
      countryDetail: "",
      countryImg: "",
      countryName: "",
      Influencediagram: {},
      Quantitativegraph: {},
      worldBankDataList: {},
      usajianjie:
        "美利坚合众国（英语：United States of America），简称“美国”（United States），是由华盛顿哥伦比亚特区、50个州和关岛等众多海外领土组成的联邦共和立宪制国家。其主体部分位于北美洲中部，美国中央情报局《世界概况》1989年至1996年初始版美国总面积是937.3万平方公里，1997年修正为983.4万平方公里（加上五大湖中美国主权部分和河口、港湾、内海等沿海水域面积），人口3.2亿，通用英语，是一个移民国家。",
      indiajianjie:
        "印度共和国（印地语：भारत गणराज्य；英语：Republic of India），简称印度。位于南亚，是南亚次大陆最大的国家。领土东北部同孟加拉国、尼泊尔、不丹和中国接壤， [1] 东部与缅甸为邻，东南部与斯里兰卡隔海相望，西北部与巴基斯坦交界。东临孟加拉湾，西濒阿拉伯海，海岸线长5560公里。也是一个由100多个民族构成的统一多民族国家，主体民族为印度斯坦族，约占全国总人口的46.3%。",
      chinajianjie:
        "中华人民共和国位于亚洲东部，太平洋西岸，是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家。中华人民共和国陆地面积约960万平方公里，大陆海岸线1.8万多千米，岛屿岸线1.4万多千米，内海和边海的水域面积约470多万平方千米。海域分布有大小岛屿7600多个，其中台湾岛最大，面积35798平方千米。",
      japanjianjie:
        "日本国（日语：にっぽんこく、にほんこく，英语：Japan），简称“日本”，位于东亚、国名意为“日出之国”，领土由北海道、本州、四国、九州四个大岛及7200多个小岛组成，总面积37.8万平方公里。主体民族为大和族，通用日语，总人口约1.26亿。",
      chaoxianjianjie:
        "朝鲜民主主义人民共和国（朝鲜语：조선민주주의인민공화국， 英语：Democratic People's Republic of Korea），简称“朝鲜”（North Korea）。是位于东亚朝鲜半岛北部的社会主义国家，执政党是朝鲜劳动党。南部与韩国以三八线朝韩非军事区分隔，北部与中华人民共和国和俄罗斯接壤，西临渤海，与山东半岛隔海相望，东临日本海。首都平壤。",
      hanguojianjie:
        "大韩民国（韩语：대한민국，英语：Republic of Korea），简称“韩国”（South Korea）。位于东亚朝鲜半岛南部，总面积约10万平方公里（占朝鲜半岛面积的45%），主体民族为朝鲜族，通用韩语，总人口约5145万。首都为首尔。",
      bgjisitanjianjie:
        "巴基斯坦伊斯兰共和国（乌尔都语：اسلامی جمہوریہ پاکستان‎，英语：Islamic Republic of Pakistan），简称“巴基斯坦”（Pakistan），意为“圣洁的土地”、“清真之国”。95%以上的居民信奉伊斯兰教，是一个多民族伊斯兰国家。国语为乌尔都语。"
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
    this.countryDetail = this.indiajianjie;
    this.countryName = "印度";
    this.countryImg = require("../../../assets/IND.jpg");
    this.onSubmit();
    this.Politics();
    this.Economy();
    this.Ctd();
  },
  methods: {
    onSubmit() {
      this.tableData=[]
      scoresource(this.formInline).then(res => {
        this.parameterData = res.data;
      });
      //国家样式变化
      this.ChangeCountry();
      Ahp().then(res => {
        this.ahpData = res.data;
        this.tableData.push(this.ahpData.Tbody);
      });
      score(this.formInline).then(res => {
        this.score = res.data;
      });
      //获取事件数据分析的曲线图表数据
      let tmpparams = {
        date: this.formInline.date,
        countrycode: this.formInline.countrycode
      };

      enventData(tmpparams).then(res => {
        this.Influencediagram = res.data.Influencediagram;
        this.Quantitativegraph = res.data.Quantitativegraph;

        console.log(this.Influencediagram);
        console.log(this.Quantitativegraph);
      });

      //获取国家宏观指数
      worldBankData({ countrycode: this.formInline.countrycode }).then(res => {
        this.worldBankDataList = res.data;
      });

      //事件数据变化
      this.Politics();
      this.Economy();
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
        this.PEmotion = res.data;
      });
    },
    ChangeCountry() {
      let countrynum = this.formInline.countrycode;

      switch (countrynum) {
        case "PRK":
          this.countryDetail = this.chaoxianjianjie;
          this.countryImg = require("../../../assets/PRK.jpg");
          this.countryName = "朝鲜";
          break;
        case "PAK":
          this.countryDetail = this.bgjisitanjianjie;
          this.countryImg = require("../../../assets/PAK.jpg");
          this.countryName = "巴基斯坦";
          break;
        case "USA":
          this.countryDetail = this.usajianjie;
          this.countryImg = require("../../../assets/USA.jpg");
          this.countryName = "美国";
          break;
        case "CHN":
          this.countryDetail = this.chinajianjie;
          this.countryImg = require("../../../assets/CHN.jpg");
          this.countryName = "中国";
          break;
        case "JPN":
          this.countryDetail = this.japanjianjie;
          this.countryImg = require("../../../assets/JPN.jpg");
          this.countryName = "日本";
          break;
        case "IND":
          this.countryDetail = this.indiajianjie;
          this.countryImg = require("../../../assets/IND.jpg");
          this.countryName = "印度";
          break;
        case "KOR":
          this.countryDetail = this.hanguojianjie;
          this.countryImg = require("../../../assets/KOR.jpg");
          this.countryName = "韩国";
          break;
      }
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
        this.EEmotion = res.data;
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
        this.CEmotion = res.data;
      });
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
    deleteId(value) {
      deleteEvent(value).then(res => {
        this.onSubmit();
      });
    },
    getdes(){
      getDes('area').then(res=>{
        console.log(res)
      })
    }
  }
};
</script>

<style scoped lang="less">
</style>
