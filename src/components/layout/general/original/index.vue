<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="一月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="二月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>

      </el-tab-pane>
      <el-tab-pane label="三月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>

      </el-tab-pane>
      <el-tab-pane label="四月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="五月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="六月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="七月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="八月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="九月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="十月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="十一月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
      <el-tab-pane label="十二月">
        <div>
          <h5>政治事件</h5>
          <political></political>
        </div>
        <div>
          <h5>经济事件</h5>
          <economic></economic>
        </div>
        <div>
          <h5>政治事件</h5>
          <ctu></ctu>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import political from "@/components/layout/general/original/PoliticalTable.vue";
import economic from "@/components/layout/general/original/EconomicTable.vue";
import ctu from "@/components/layout/general/original/CtuTable.vue";
export default {
  name: "index",

  data() {
    return {};
  },
  components: {
    political,
    economic,
    ctu
  },
  methods: {}
};
</script>

<style lang='less' scoped>
  .el-tabs{
     h5{
    font-size:20px;
    line-height: 50px;
    color: #0080ff;
     }
  }
</style>
