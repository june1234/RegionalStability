<template>
  <div class="expertList">
    <h4>专家参数管理</h4>
    <el-row>
      <el-col :span="12">
        <h5>新闻矩阵权重设置</h5>
        <el-form ref="form" :model="expert" label-width="200px">
          <el-form-item label="政治">
            <el-select v-model="expert.political" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济">
            <el-select v-model="expert.economics" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="反恐">
            <el-select v-model="expert.counter" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政治负面影响权重">
            <el-select v-model="expert.politicalFAffect" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政治负面数量权重">
            <el-select v-model="expert.politicalFNum" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政治正面影响权重">
            <el-select v-model="expert.politicalTAffect" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政治正面数量权重">
            <el-select v-model="expert.politicalTNum" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济负面影响权重">
            <el-select v-model="expert.economicsFAffect" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济负面数量权重">
            <el-select v-model="expert.economicsFNum" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济正面影响权重">
            <el-select v-model="expert.economicsTAffect" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济正面数量权重">
            <el-select v-model="expert.economicsTNum" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="反恐负面影响权重">
            <el-select v-model="expert.counterFAffect" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="反恐负面数量权重">
            <el-select v-model="expert.counterFNum" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="反恐正面影响权重">
            <el-select v-model="expert.counterTAffect" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="反恐正面数量权重">
            <el-select v-model="expert.counterTNum" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateNews">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <h5>宏观矩阵权重设置</h5>
        <el-form ref="form" :model="form" label-width="200px">
          <el-form-item label="国民">
            <el-select v-model="form.national" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济">
            <el-select v-model="form.economy" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="能源">
            <el-select v-model="form.energy" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="科技">
            <el-select v-model="form.science" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="新生儿死亡率">
            <el-select v-model="form.dyn" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年轻群体总失业人数">
            <el-select v-model="form.uem" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="城镇人口">
            <el-select v-model="form.urb" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="人口增长">
            <el-select v-model="form.pop" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="人均GDP增长">
            <el-select v-model="form.gdp" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工业增加值">
            <el-select v-model="form.ind" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="总储蓄">
            <el-select v-model="form.gns" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年通胀率">
            <el-select v-model="form.cpi" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="能源净进口">
            <el-select v-model="form.imp" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="总发电量的比例">
            <el-select v-model="form.elc" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="耗电量">
            <el-select v-model="form.use" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="矿石和金属进口">
            <el-select v-model="form.val" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="研发支出">
            <el-select v-model="form.xpd" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入学率，高等院校">
            <el-select v-model="form.ter" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专利申请量，居民">
            <el-select v-model="form.pat" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="科技期刊文章">
            <el-select v-model="form.grn" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
           <el-form-item>
              <el-button type="primary" @click="updateMacro">保存</el-button>
            </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {updatenews,updatemacro,findnews,findmacro} from '@/api/expert/index'
export default {
  data() {
    return {
      options: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "5",
          label: "5"
        },
        {
          value: "7",
          label: "7"
        },
        {
          value: "9",
          label: "9"
        }
      ],
      expert: {
        economics: "",
        political:"",
        counter:"",
        politicalFAffect:"",
        politicalFNum:"",
        politicalTAffect:"",
        politicalTNum:"",
        economicsFAffect:"",
        economicsFNum:"",
        economicsTAffect:"",
        economicsTNum:"",
        counterFAffect:"",
        counterFNum:"",
        counterTAffect:"",
        counterTNum:""
      },
      form:{
         national:"",
         economy:"",
         energy:"",
         science:"",
         dyn:"",
         uem:"",
         urb:"",
         pop:"",
         gdp:"",
         ind:"",
         gns:"",
         cpi:"",
         imp:"",
         elc:"",
         use:"",
         val:"",
         xpd:"",
         ter:"",
         pat:"",
         grn:""
      }
    };
  },
  created(){
    this.lost()
  },
  methods: {
    lost(){
      findnews().then(res=>{
          this.expert=res.data

      })
      findmacro().then(res=>{
          this.form=res.data
      })
    },
    updateMacro(){
      updatemacro(this.form).then(res=>{
          this.lost()
      })
    },
    updateNews(){
      updatenews(this.expert).then(res=>{
          this.lost()
      })
    }
  }
};
</script>

<style scoped lang="less">
</style>
