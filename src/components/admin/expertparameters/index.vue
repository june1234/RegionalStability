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
          <el-form-item label="DYN">
            <el-select v-model="form.dyn" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="UEM">
            <el-select v-model="form.uem" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="URB">
            <el-select v-model="form.urb" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="POP">
            <el-select v-model="form.pop" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="GDP">
            <el-select v-model="form.gdp" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="IND">
            <el-select v-model="form.ind" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="GNS">
            <el-select v-model="form.gns" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="CPI">
            <el-select v-model="form.cpi" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="IMP">
            <el-select v-model="form.imp" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="ELC">
            <el-select v-model="form.elc" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="USE">
            <el-select v-model="form.use" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="VAL">
            <el-select v-model="form.val" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="XPD">
            <el-select v-model="form.xpd" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="TER">
            <el-select v-model="form.ter" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="PAT">
            <el-select v-model="form.pat" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="JRN">
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
import {updatenews,updatemacro} from '@/api/expert/index'
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
  methods: {
    updateMacro(){
      updatemacro(this.form).then(res=>{
          console.log(res)
      })
    },
    updateNews(){
      updatenews(this.expert).then(res=>{
         console.log(res)
      })
    }
  }
};
</script>

<style scoped lang="less">
</style>
