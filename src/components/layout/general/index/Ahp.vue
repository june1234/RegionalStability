<template>
  <div class="ahp">
    <h5>AHP专家打分权重</h5>
    <el-table
      :data="Table"
      border
      style="width: 100%"
    >
      <el-table-column
        v-for="(item,index) in AhpData.Theader"
        :prop="item.prop"
        :label="item.label"
        min-width="6.25%"
        :key="index"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ahp",
  props:{
    AhpData:Object,
    Table:Array
  },
  data() {
    return {
    };
  },
  watch:{
    AhpData:function(newData,oldData){
      if(newData){
        this.AhpData=newData
      }
    },
    Table:function(newData,oldData){
      if(newData){
        this.Table=newData
      }
    },

  },
  methods: {}
};
</script>

<style lang='less' scoped>
</style>
