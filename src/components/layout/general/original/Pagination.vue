<template>
  <div class="pagination">
    <el-row>
      <el-col :span="12">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="pageNum"
          layout="total, prev, pager, next"
          :total="Total"
        >
        </el-pagination>
      </el-col>
      <el-col :span="12">
        <el-row>
          <!-- <el-col :span="8">
            <p>总分：<span>{{this.emotion.totalScore}}</span></p>
          </el-col> -->
          <el-col :span="24">
            <el-row>
              <el-col :span="12"> <p>正面数量：<span>{{a}}</span></p><p>正面影响：<span>{{b}}</span></p></el-col>
              <el-col :span="12"><p>负面数量：<span>{{c}}</span></p><p>负面影响：<span>{{d}}</span></p></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:{
    total:Number,
    Emotion:Object
  },
  watch:{
    total:function(newData, oldData) {
      if (newData) {
        this.Total = newData;
      }
    },
    Emotion:function(newData, oldData) {
      if (newData) {
        this.emotion = newData;
        this.a=this.emotion.emotion[0].emocount
        this.b=this.emotion.emotion[0].emosum
        this.c=this.emotion.emotion[1].emocount
        this.d=this.emotion.emotion[1].emosum
      }
    }
  },
  data() {
    return {
      pageNum: 1,
      pageSize:10,
      Total:0,
      emotion:{},
      a:"",
      b:"",
      c:"",
      d:""
    };
  },

  methods: {
    handleCurrentChange(val) {
      this.pageNum=val
      this.$emit("PageNum",this.pageNum)
    }
  }
};
</script>

<style lang='less' scoped>
</style>
