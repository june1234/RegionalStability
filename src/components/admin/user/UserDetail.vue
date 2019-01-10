 <template>
  <div class="UserDetail">
    <h1 class="sub-header">用户详情</h1>
    <el-table :data="userDetailData" style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180"></el-table-column>
      <el-table-column prop="truename" label="真实姓名"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="insertTime" label="插入时间"></el-table-column>
    </el-table>
    <div>
      <el-button @click="close">返回</el-button>
    </div>
  </div>
</template>

<script>
import { getUserById } from "@/api/user/FindUser.js";
export default {
  data() {
    return {
      userDetailData: []
    };
  },
  created() {
    //用户id
    const { id } = this.$route.query;
    //根据用户id获取用户详情
    getUserById(id).then(res => {
      this.userDetailData.push(res.data)
    });
  },
  methods: {
    close() {
      this.$router.push("/UserManage");
    }
  }
};
</script> 

<style scoped lang="less">
</style>
