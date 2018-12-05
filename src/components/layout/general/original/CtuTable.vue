<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="事件名称"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="时间"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="维度"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="维度"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="维度"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="新闻数量"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="重要性"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="情感"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="影响"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="10%"
      >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination></pagination>
  </div>
</template>

<script>
import pagination from '@/components/layout/general/original/Pagination.vue'
export default {
  name: 'CtuTable',

  data () {
    return {
      tableData:[]
    }
  },
  components:{
      pagination
  },
  methods: {}
}
</script>

<style lang='less' scoped>

</style>
