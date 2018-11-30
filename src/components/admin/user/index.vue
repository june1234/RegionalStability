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
              <el-button type="primary" @click="selectUser">查询</el-button>
              <el-button type="primary" @click="resetUser('userFormData')">重置</el-button>
              <el-button type="primary" @click="addUser">添加</el-button>
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
                  <el-button type="text" @click="updateUser(scope.row.id)">修改</el-button>
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
              :total="userTotal">
            </el-pagination>
          </div>
          <el-dialog title="分配角色" :visible.sync="centerDialogVisible" width="25%" center>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedRoles" @change="handleCheckedRolesChange">
              <el-checkbox v-for="role in roles" :label="role" :key="role">{{role}}</el-checkbox>
            </el-checkbox-group>
            <span slot="footer">
              <el-button type="primary" @click="saveRole">确定</el-button>
              <el-button  @click="cancle">取消</el-button>
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
            <el-button type="primary" @click="selectRole">查询</el-button>
            <el-button type="primary" @click="resetRole('roleFormData')">重置</el-button>
            <el-button type="primary" @click="addRole">添加</el-button>
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
            :total="roleTotal">
          </el-pagination>
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
            <el-button type="primary" @click="selectPower">查询</el-button>
            <el-button type="primary" @click="resetPower('powerFormData')">重置</el-button>
            <el-button type="primary" @click="addPower">添加</el-button>
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
             :total="powerTotal">
           </el-pagination>
         </div>         
      </el-tab-pane>
   </el-tabs>
  </div>
</template>
<script>
  /*引入接口*/
  import {getUserList,deleteUser,getRoleList,deleteRole,getPowerList,deletePower,initUserPassword} from '@/api/user/UserManage'
  const roleOptions = ['普通用户', '管理员', '编辑员','专家'];
  export default {
    data(){
      return{
        checkAll: false,
        checkedRoles: ['普通用户'],
        roles:[],
        isIndeterminate: true,
        centerDialogVisible:false,
        activeName:'user',
        
        //用户form表单
        userFormData:{
          username:'',
          nickname:'',
          truename:'',
          password:'',
          pageNum:1,
          pageSize:5
        },

        //角色form表单
        roleFormData:{
          rolename:'',
          pageNum:1,
          pageSize:5
        },

        //权限form表单
        powerFormData:{
          powername:'',
          pageNum:1,
          pageSize:5
        },
        
        //用户总记录数
        userTotal:0,
        //角色总记录数
        roleTotal:0,
        //权限总记录数
        powerTotal:0,
        
        //用户table数据
        userData:[],
        //角色table数据
        roleData:[],
        //权限form表格数据
        powerData:[]
      }
    },
    created(){
      //加载用户user表格分页数据
      this.loadUserListPage()
      //加载角色role表格分页数据
      this.loadRoleListPage()
      //加载权限power表格分页数据
      this.loadPowerListPage()
    },
    methods:{
      /*加载用户列表数据*/
      loadUserListPage(){
        getUserList(this.userFormData).then(res => {
         this.userData=res.data.list
         this.userTotal=res.data.total
       })
      },
      /*加载角色列表数据*/
      loadRoleListPage(){
        getRoleList(this.roleFormData).then(res => {         
          this.roleData=res.data.list
          this.roleTotal=res.data.total
          for(let i in this.roleData){
             this.roles.push(this.roleData[i].roleName)
          }
        })
      },
      /*加载权限列表数据*/
      loadPowerListPage(){
        getPowerList(this.powerFormData).then(res => {
          this.powerData=res.data.list
          this.powerTotal=res.data.total
        })
      },
    	//用户信息分页
    	handleSizeChange(val) {
    		this.userFormData.pageSize=val
        this.loadUserListPage()
    	},
    	handleCurrentChange(val) {
    		this.userFormData.pageNum=val
        this.loadUserListPage()
    	},
      //角色信息分页
      handleSizeChangeRole(val) {
        this.roleFormData.pageSize=val
        this.loadRoleListPage()
      },
      handleCurrentChangeRole(val) {
        this.roleFormData.pageNum=val
        this.loadRoleListPage()
      },
      //权限信息分页
      handleSizeChangePower(val) {
        this.powerFormData.pageSize=val
        this.loadPowerListPage()
      },
      handleCurrentChangePower(val) {
        this.powerFormData.pageNum=val
        this.loadPowerListPage()
      },
      //查询用户信息
      selectUser(){
        //调用getUserList接口获取用户列表信息
        getUserList(this.userFormData).then(res => {
         this.userData=res.data.list
         this.userTotal=res.data.total
       })  
      },
      //查询角色信息
      selectRole(){
        //调用getRoleList接口获取角色列表信息
        getRoleList(this.roleFormData).then(res => {
          this.roleData=res.data.list
          this.roleTotal=res.data.total
        })  
      },
      //查询权限信息
      selectPower(){
        //调用getPowerList接口获取权限列表信息
        getPowerList(this.powerFormData).then(res => {
          this.powerData=res.data.list
          this.powerTotal=res.data.total
        })   
      },
      //用户重置
      resetUser(userFormData){
        getUserList(this.userFormData).then(res => {
          this.userData=res.data.list
          this.userTotal=res.data.total
        }) 
        this.$refs[userFormData].resetFields();
      },
      //角色重置
      resetRole(roleFormData){
        getRoleList(this.roleFormData).then(res => {
         this.roleData=res.data.list
         this.roleTotal=res.data.total
       }) 
        this.$refs[roleFormData].resetFields();
      },
      //权限重置
      resetPower(powerFormData){
        getPowerList(this.powerFormData).then(res => {
          this.powerData=res.data.list
          this.powerTotal=res.data.total
        }) 
        this.$refs[powerFormData].resetFields();
      },
      //跳转添加用户信息页面
      addUser(){
        this.$router.push('/admin/UserManage/addUser')
      }, 
      //跳转添加角色信息页面 
      addRole(){
        this.$router.push('/admin/UserManage/addRole')
      },  
      //跳转添加权限信息页面
      addPower(){
       this.$router.push('/admin/UserManage/addPower')
      },
      //跳转用户修改页面
      updateUser(id){
        this.$router.push('/admin/UserManage/updateUser?id='+id)
      },
      //跳转角色修改页面
      updateRole(id){
        this.$router.push('/admin/UserManage/updateRole?id='+id) 
      },
      //删除用户记录
      deleteUser(row){
        this.$confirm(`是否删除${ row.username }用户?`,{  
          confirmButtonText:'确定',      
          cancelButtonText:'取消',      
          center:true
        }).then(()=>{         
          const id=row.id
          deleteUser(id).then(res=> {
            this.loadUserListPage();
          })
        })
      },
      //删除角色记录
      deleteRole(row){
        this.$confirm(`是否删除${row.roleName}角色?`,{  
          confirmButtonText:'确定',      
          cancelButtonText:'取消',      
          center:true
        }).then(() => {
          const id=row.id
          deleteRole(id).then(res=>{
            this.loadRoleListPage();
          })
        }) 
      },
      //删除权限记录
      deletePower(row){
        this.$confirm(`是否删除${row.powerName}权限?`,{  
          confirmButtonText:'确定',      
          cancelButtonText:'取消',      
          center:true
        }).then(() => {
          const id=row.id
          deletePower(id).then(res=>{
            this.loadPowerListPage();
          })
        })          
      },
      //跳转用户详情页面
      showUserDeatil(id){
        this.$router.push('/admin/UserManage/userDetail?id='+id)
      },
      //初始化用户密码
      initPassword(id){
        this.$confirm('是否初始化密码?',{  
          confirmButtonText:'确定',      
          cancelButtonText:'取消',      
          center:true
        }).then(() => {
          initUserPassword(id).then(res=>{
            this.loadUserListPage();
            this.$message({
              type: 'success',
              message: '初始化密码成功!'
            });
          })
        })
      },
      //分配角色
      assignRole(id){
        this.centerDialogVisible=true
      },
      handleCheckAllChange(val) {
        this.checkedRoles = val ? roleOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedRolesChange(value) {
        const checkedCount = value.length;
        this.checkAll = checkedCount === this.roles.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.roles.length;
      },
      saveRole(){
        this.centerDialogVisible=false
      },
      cancle(){
        this.centerDialogVisible=false
      }
    }
  }
</script>

<style scoped lang="less">

 </style>