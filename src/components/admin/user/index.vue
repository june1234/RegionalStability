<template>
  <div class="UserManage">
    <el-tabs v-model="activeName">
      <!-- 用户信息 -->
      <el-tab-pane label="用户管理" name="user">
        <!-- 用户form表单信息 -->
        <el-form :inline="true" :model="userFormData" ref="userFormData">
          <el-form-item prop="username">
            <el-input v-model="userFormData.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="nickname">
            <el-input v-model="userFormData.nickname" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item prop="truename">
            <el-input v-model="userFormData.truename" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loadUserListPage">查询</el-button>
            <el-button type="primary" @click="addUserdialog">添加</el-button>
          </el-form-item>
        </el-form>
        <!-- 用户信息列表 -->
        <div class="List">
          <el-table :data="userData" border>
            <el-table-column type="index" label="序号" align="center" width="80"></el-table-column>
            <el-table-column prop="username" label="用户名" align="center" min-width="100%"></el-table-column>
            <el-table-column prop="nickname" label="昵称" align="center" min-width="100%"></el-table-column>
            <el-table-column prop="truename" label="真实姓名" align="center" min-width="100%"></el-table-column>
            <el-table-column prop="operate" label="操作" align="center" min-width="130%">
              <template slot-scope="scope">
                <el-button type="text" @click="initPassword(scope.row.id)">初始化密码</el-button>
                <el-button type="text" @click="assignRole(scope.row.id)">分配角色</el-button>
                <el-button type="text" @click="update(scope.row)">修改</el-button>
                <el-button type="text" @click="deleteUser(scope.row)">删除</el-button>
                <el-button type="text" @click="showUserDeatil(scope.row.id)">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 用户信息分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="userFormData.pageNum"
            :page-sizes="[5,10]"
            :page-size="userFormData.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="userTotal"
          ></el-pagination>
        </div>
        <el-dialog title="分配角色" :visible.sync="centerDialogVisible" width="25%" center>
          <el-radio-group v-model="userRoleForm.roleId">
            <el-radio v-for="(item,index) in roles" :label="item.roleId" :key="index">{{item.roleName}}</el-radio>
          </el-radio-group>
          <span slot="footer">
            <el-button type="primary" @click="saveRole">确定</el-button>
            <el-button @click="cancle">取消</el-button>
          </span>
        </el-dialog>
      </el-tab-pane>
      <!-- 角色信息 -->
      <el-tab-pane label="角色管理" name="role">
        <!-- 角色form表单 -->
        <el-form :inline="true" :model="roleFormData" ref="roleFormData">
          <el-form-item prop="rolename">
            <el-input v-model="roleFormData.rolename" placeholder="请输入角色名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loadRoleListPage">查询</el-button>
            <el-button type="primary" @click="AddRole=true">添加</el-button>
          </el-form-item>
        </el-form>
        <!-- 角色信息列表 -->
        <div class="List">
          <el-table :data="roleData" border>
            <el-table-column type="index" label="序号" align="center" width="80"></el-table-column>
            <el-table-column prop="roleName" label="角色名称" align="center"></el-table-column>
            <el-table-column prop="roleScript" label="角色描述" align="center"></el-table-column>
            <el-table-column prop="roleCode" label="角色Code" align="center"></el-table-column>
            <el-table-column prop="operate" label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text" @click="deleteRole(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 角色信息分页 -->
          <el-pagination
            @size-change="handleSizeChangeRole"
            @current-change="handleCurrentChangeRole"
            :current-page="roleFormData.pageNum"
            :page-sizes="[5,10]"
            :page-size="roleFormData.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="roleTotal"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <!-- 权限信息 -->
      <el-tab-pane label="权限管理" name="power">
        <!-- 权限form表单 -->
        <el-form :inline="true" :model="powerFormData" ref="powerFormData">
          <el-form-item prop="powername">
            <el-input v-model="powerFormData.powername" placeholder="请输入权限名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loadPowerListPage">查询</el-button>
            <el-button type="primary" @click="AddPower=true">添加</el-button>
          </el-form-item>
        </el-form>
        <!-- 权限信息列表 -->
        <div class="List">
          <el-table :data="powerData" border>
            <el-table-column type="index" label="序号" align="center" width="80"></el-table-column>
            <el-table-column prop="powerName" label="权限名称" align="center"></el-table-column>
            <el-table-column prop="powerScript" label="权限描述" align="center"></el-table-column>
            <el-table-column prop="powerCode" label="权限Code" align="center"></el-table-column>
            <el-table-column prop="operate" label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text" @click="deletePower(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 权限列表分页 -->
          <el-pagination
            @size-change="handleSizeChangePower"
            @current-change="handleCurrentChangePower"
            :current-page="powerFormData.pageNum"
            :page-sizes="[5,10]"
            :page-size="powerFormData.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="powerTotal"
          ></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 添加用户与修改用户 -->
    <el-dialog :visible.sync="isAddUser" width="40%" center>
      <el-form :model="UserFormData" label-width="150px">
        <el-form-item label="用户名" prop="username" :rules="[{required:true,message:'请输入用户名！'}]">
          <el-input v-model="UserFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname" :rules="[{required:true,message:'请输入昵称！'}]">
          <el-input v-model="UserFormData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="truename" :rules="[{required:true,message:'请输入真实姓名！'}]">
          <el-input v-model="UserFormData.truename"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{required:true,message:'请输入密码！'}]">
          <el-input type="password" v-model="UserFormData.password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="isUser">保存</el-button>
        <el-button @click="isAddUser=false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加角色" :visible.sync="AddRole" width="40%" center>
      <el-form ref="form" :model="addRoleFormData" label-width="150px" label-position="left">
        <el-form-item label="角色名称" prop="roleName" :rules="[{required:true,message:'请输入角色名称！'}]">
          <el-input v-model="addRoleFormData.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleScript" :rules="[{required:true,message:'请输入角色描述！'}]">
          <el-input v-model="addRoleFormData.roleScript"></el-input>
        </el-form-item>
        <el-form-item
          label="角色Code"
          prop="roleCode"
          :rules="[{required:true,message:'请输入角色Code！'}]"
        >
          <el-input v-model="addRoleFormData.roleCode"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addRole">保存</el-button>
        <el-button @click="AddRole=false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加权限" :visible.sync="AddPower" width="40%" center>
      <el-form ref="form" :model="addPowerFormData" label-width="150px" label-position="left">
        <el-form-item label="权限名称" prop="powerName" :rules="[{required:true,message:'请输入权限名称！'}]">
          <el-input v-model="addPowerFormData.powerName"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="powerScript" :rules="[{required:true,message:'请输入权限描述！'}]">
          <el-input v-model="addPowerFormData.powerScript"></el-input>
        </el-form-item>
        <el-form-item
          label="权限Code"
          prop="powerCode"
          :rules="[{required:true,message:'请输入权限Code！'}]"
        >
          <el-input v-model="addPowerFormData.powerCode"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addPower">保存</el-button>
        <el-button @click="AddPower=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
/*引入接口*/
import {
  getUserList,
  deleteUser,
  getRoleList,
  deleteRole,
  getPowerList,
  deletePower,
  initUserPassword,
  userRoles
} from "@/api/user/UserManage";
import { addRole } from "@/api/user/AddRole.js";
import { addPower } from "@/api/user/AddPower.js";
import {addUser} from '@/api/user/AddUser.js';
import {updateUser} from '@/api/user/UpdateUser.js';
export default {
  data() {
    return {
      checkAll: false,
      roles: [],
      isIndeterminate: true,
      centerDialogVisible: false,
      isAddUser:false,
      activeName: "user",
      AddRole: false,
      AddPower: false,
      //用户form表单
      userFormData: {
        username: "",
        nickname: "",
        truename: "",
        password: "",
        pageNum: 1,
        pageSize: 5
      },
      UserFormData: {
        username: "",
        nickname: "",
        truename: "",
        password: ""
      },
      userRoleForm:{
        userId:'',
        roleId:''
      },
      //角色form表单
      roleFormData: {
        rolename: "",
        pageNum: 1,
        pageSize: 5
      },
      addRoleFormData: {
        roleName: "",
        roleScript: "",
        roleCode: ""
      },
      //权限form表单
      powerFormData: {
        powername: "",
        pageNum: 1,
        pageSize: 5
      },
      addPowerFormData: {
        powerName: "",
        powerScript: "",
        powerCode: "",
        operator:'fdfgv'
      },
      //用户总记录数
      userTotal: 0,
      //角色总记录数
      roleTotal: 0,
      //权限总记录数
      powerTotal: 0,

      //用户table数据
      userData: [],
      //角色table数据
      roleData: [],
      //权限form表格数据
      powerData: []
    };
  },
  created() {
    //加载用户user表格分页数据
    this.loadUserListPage();
    //加载角色role表格分页数据
    this.loadRoleListPage();
    //加载权限power表格分页数据
    this.loadPowerListPage();
  },
  methods: {
    /*加载用户列表数据*/
    loadUserListPage() {
      getUserList(this.userFormData).then(res => {
        this.userData = res.data.list;
        this.userTotal = res.data.total;
      });
    },
    /*加载角色列表数据*/
    loadRoleListPage() {
      getRoleList(this.roleFormData).then(res => {
        this.roleData = res.data.list;
        this.roleTotal = res.data.total;
        for (let i in this.roleData) {
          const role={}
          role.roleName=this.roleData[i].roleName
          role.roleId=this.roleData[i].id
          this.roles.push(role);
        }
      });
    },
    /*加载权限列表数据*/
    loadPowerListPage() {
      getPowerList(this.powerFormData).then(res => {
        this.powerData = res.data.list;
        this.powerTotal = res.data.total;
      });
    },
    //用户信息分页
    handleSizeChange(val) {
      this.userFormData.pageSize = val;
      this.loadUserListPage();
    },
    handleCurrentChange(val) {
      this.userFormData.pageNum = val;
      this.loadUserListPage();
    },
    //角色信息分页
    handleSizeChangeRole(val) {
      this.roleFormData.pageSize = val;
      this.loadRoleListPage();
    },
    handleCurrentChangeRole(val) {
      this.roleFormData.pageNum = val;
      this.loadRoleListPage();
    },
    //权限信息分页
    handleSizeChangePower(val) {
      this.powerFormData.pageSize = val;
      this.loadPowerListPage();
    },
    handleCurrentChangePower(val) {
      this.powerFormData.pageNum = val;
      this.loadPowerListPage();
    },
    //添加用户
    addUser() {
      this.isAddUser=false
      addUser(this.UserFormData).then(res=>{
        this.loadUserListPage()
      })
    },
    //添加角色
    addRole() {
      this.AddRole = false;
      addRole(this.addRoleFormData).then(res => {
        this.loadRoleListPage();
      });
    },
    //添加权限
    addPower() {
      this.AddPower = false;
      addPower(this.userFormData).then(res => {
        this.loadPowerListPage();
      });
    },
    // 转换
    update(row){
      this.isAddUser=true
      this.UserFormData=row
    },
    // 添加弹出框
    addUserdialog(){
      this.isAddUser=true
      this.UserFormData={
          username: "",
          nickname: "",
          truename: "",
          password: ""
        }
    },
    // 判断添加还是修改
    isUser(){
      if(this.UserFormData.id){
        this.updateUser()
      }else{
        this.addUser()
      }
    },
    updateUser() {
      this.isAddUser=false
      updateUser(this.UserFormData).then(res=>{
        this.loadUserListPage()
      })
    },
    //删除用户记录
    deleteUser(row) {
      this.$confirm(`是否删除${row.username}用户?`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true
      }).then(() => {
        const id = row.id;
        deleteUser(id).then(res => {
          this.loadUserListPage();
        });
      });
    },
    //删除角色记录
    deleteRole(row) {
      this.$confirm(`是否删除${row.roleName}角色?`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true
      }).then(() => {
        const id = row.id;
        deleteRole(id).then(res => {
          this.loadRoleListPage();
        });
      });
    },
    //删除权限记录
    deletePower(row) {
      this.$confirm(`是否删除${row.powerName}权限?`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true
      }).then(() => {
        const id = row.id;
        deletePower(id).then(res => {
          this.loadPowerListPage();
        });
      });
    },
    //跳转用户详情页面
    showUserDeatil(id) {
      this.$router.push("/UserManage/userDetail?id=" + id);
    },
    //初始化用户密码
    initPassword(id) {
      this.$confirm("是否初始化密码?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true
      }).then(() => {
        initUserPassword(id).then(res => {
          this.loadUserListPage();
          this.$message({
            type: "success",
            message: "初始化密码成功!"
          });
        });
      });
    },
    //分配角色
    assignRole(id) {
      this.centerDialogVisible = true;
      this.userRoleForm.userId=id
    },
    saveRole() {
      this.centerDialogVisible = false;
      console.log(this.userRoleForm)
      userRoles(this.userRoleForm).then(res=>{
         this.loadUserListPage()
      })
    },
    cancle() {
      this.centerDialogVisible = false;
    }
  }
};
</script>

<style scoped lang="less">
</style>