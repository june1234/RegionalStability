<template>
  <div>
   <el-tabs v-model="activeName">
    <el-tab-pane label="用户管理" name="user">
      <!-- 用户信息 -->
       <div>
        <!-- 用户form表单信息 -->
        <div class="block" style="float:left;margin-top:40px;margin-left:30px;">
          <el-form :inline="true" :model="user" class="demo-form-inline" >
            <el-form-item >
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="user.nickname" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="user.truename" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="selectUser">查询</el-button>
              <el-button type="primary" @click="resetUser">重置</el-button>
              <el-button type="primary" @click="addUser">添加</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 用户信息列表 -->
        <div class="block">
          <el-table :data="userData.slice((currentPage-1)*pageSize,currentPage*pageSize)" border style="width: 100%">
            <el-table-column type="index" label="序号" align="center" width="80"></el-table-column>
            <el-table-column prop="username" label="用户名" align="center" min-width="100%"></el-table-column>
            <el-table-column prop="nickname" label="昵称" align="center" min-width="100%"></el-table-column>
            <el-table-column prop="truename" label="真实姓名" align="center" min-width="100%"></el-table-column>
            <el-table-column prop="operate" label="操作" align="center" min-width="100%">
              <template slot-scope="scope">
                <el-button size="small" @click="initPassword(scope.$index, scope.row)">初始化密码</el-button>
                <el-button size="small" @click="updateUser(scope.$index, scope.row)">修改</el-button>
                <el-button size="small" @click="deleteUser(scope.$index)">删除</el-button>
                <el-button size="small" @click="showUserDeatil(scope.$index)">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 用户信息分页 -->
        <div class="block">
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="userData.length">
        </el-pagination>
      </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="role">
      <!-- 角色信息 -->
      <div>
        <!-- 角色form表单 -->
        <div class="block" style="float:left;margin-top:40px;margin-left:30px;">
          <el-form :inline="true" :model="role" class="demo-form-inline" >
            <el-form-item >
              <el-input v-model="role.rolename" placeholder="请输入角色名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="selectRole">查询</el-button>
              <el-button type="primary" @click="resetRole">重置</el-button>
              <el-button type="primary" @click="addRole">添加</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 角色信息列表 -->
        <div class="block">
          <el-table :data="roleData.slice((currentPageRole-1)*pageSizeRole,currentPageRole*pageSizeRole)" border style="width: 100%">
            <el-table-column prop="roleName" label="角色名称" align="center"></el-table-column>
            <el-table-column prop="roleScript" label="角色描述" align="center"></el-table-column>
            <el-table-column prop="roleCode" label="角色Code" align="center"></el-table-column>
            <el-table-column prop="operate" label="操作" align="center">
              <template slot-scope="scope">
                <!-- <el-button size="small" @click="updateRole(scope.$index, scope.row)">修改</el-button>
                <el-button size="small" @click="showRoleDeatil(scope.$index)">详情</el-button> -->
                <el-button size="small" @click="deleteRole(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 角色信息分页 -->
        <div class="block">
          <el-pagination
          @size-change="handleSizeChangeRole"
          @current-change="handleCurrentChangeRole"
          :current-page="currentPageRole"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSizeRole"
          layout="total, sizes, prev, pager, next, jumper"
          :total="roleData.length">
        </el-pagination>
      </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="权限管理" name="power">
      <!-- 权限信息 -->
        <div>
          <!-- 权限form表单 -->
        <div class="block" style="float:left;margin-top:40px;margin-left:30px;">
          <el-form :inline="true" :model="power" class="demo-form-inline" >
            <el-form-item >
              <el-input v-model="power.powerName" placeholder="请输入权限名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="selectPower">查询</el-button>
              <el-button type="primary" @click="resetPower">重置</el-button>
              <el-button type="primary" @click="addPower">添加</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 权限信息列表 -->
        <div class="block">
          <el-table :data="powerData.slice((currentPagePower-1)*pageSizePower,currentPagePower*pageSizePower)" border style="width: 100%">
            <el-table-column prop="powerName" label="权限名称" align="center"></el-table-column>
            <el-table-column prop="powerScript" label="权限描述" align="center"></el-table-column>
            <el-table-column prop="powerCode" label="权限Code" align="center"></el-table-column>
            <el-table-column prop="operate" label="操作" align="center">
              <template slot-scope="scope">
               <!--  <el-button size="small" @click="updatePower(scope.$index, scope.row)">修改</el-button>
               <el-button size="small" @click="showPowerDeatil(scope.$index)">详情</el-button> -->
               <el-button size="small" @click="deletePower(scope.$index)">删除</el-button> 
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 权限列表分页 -->
        <div class="block">
          <el-pagination
          @size-change="handleSizeChangePower"
          @current-change="handleCurrentChangePower"
          :current-page="currentPagePower"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSizePower"
          layout="total, sizes, prev, pager, next, jumper"
          :total="powerData.length">
        </el-pagination>
      </div>
    </div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>

/*引入接口*/
  import {getUserList,deleteUser,getRoleList,deleteRole,getPowerList,deletePower,initUserPassword} from '@/api/user/UserManage.js'
  export default {
    data(){
    	return{
        activeName:'user',
        currentPage:1,
        pageSize:10,
        currentPageRole:1,
        pageSizeRole:10,
        currentPagePower:1,
        pageSizePower:10,

        user:{
          username:'',
          nickname:'',
          truename:'',
          password:''
        },
        role:{
          rolename:''
        },
        power:{
          powerName:''
        },

        userData:'',
        roleData:'',
        powerData:''
      }
    },
    /*加载数据*/
    created(){
    	this.loadUserListPage();
      this.loadRoleListPage();
      this.loadPowerListPage();
    },
    methods:{
      /*加载用户列表数据*/
    	loadUserListPage(){
    		const userPageVo={}
    		getUserList(userPageVo).then(res => {
    			this.userData=res.data.list
    		})
    	},
      /*加载角色列表数据*/
      loadRoleListPage(){
        const rolePageVo={}
        getRoleList(rolePageVo).then(res => {
          console.log(res)
          this.roleData=res.data.list
        })
      },
      /*加载权限列表数据*/
      loadPowerListPage(){
        const powerPageVo={}
        getPowerList(powerPageVo).then(res => {
          this.powerData=res.data.list
        })
      },

    	//用户信息分页
    	handleSizeChange(val) {
    		this.pageSize=val
    	},
    	handleCurrentChange(val) {
    		this.currentPage=val
    	},
      //角色信息分页
      handleSizeChangeRole(val) {
        this.pageSizeRole=val
      },
      handleCurrentChangeRole(val) {
        this.currentPageRole=val
      },
      //权限信息分页
      handleSizeChangePower(val) {
        this.pageSizePower=val
      },
      handleCurrentChangePower(val) {
        this.currentPagePower=val
      },
      //查询用户信息
    	selectUser(){
    		const userPageVo={username:this.user.username,nickname:this.user.nickname,truename:this.user.truename}
    		getUserList(userPageVo).then(res => {
    			this.userData=res.data.list
    		})  
    	},
      //查询角色信息
      selectRole(){
        const rolePageVo={rolename:this.role.rolename}
        getRoleList(rolePageVo).then(res => {
          this.roleData=res.data.list
        })  
      },
      //用户重置
      resetUser(){
        const userPageVo={}
        getUserList(userPageVo).then(res => {
          this.userData=res.data.list
        }) 
        this.user.username=''
        this.user.nickname=''
        this.user.truename=''
      },
      //角色重置
    	resetRole(){
    		const rolePageVo={}
    		getRoleList(rolePageVo).then(res => {
    			this.roleData=res.data.list
    		}) 
    		this.role.rolename=''
    	},
      //跳转添加用户信息页面
    	addUser(){
    		this.$router.push('/UserManage/addUser')
    	}, 
      //跳转添加角色信息页面 
      addRole(){
        this.$router.push('/UserManage/addRole')
      },  
      //跳转添加权限信息页面
      addPower(){
         this.$router.push('/UserManage/addPower')
      },
       //跳转用户修改页面
       updateUser(index,row){
  	    const id=this.userData[index].id
  	    this.$router.push('/UserManage/updateUser?id='+id)
       },
       //跳转角色修改页面
       updateRole(index,row){
        const id=row.id
        this.$router.push('/UserManage/updateRole?id=${id}') 
       },
       //删除用户记录
       deleteUser(index){
        this.$confirm('是否删除{{this.userData[index].username}}用户?',{  
          confirmButtonText:'确定',      
          cancelButtonText:'取消',      
          center:true
        }).then(()=>{
          const id=this.userData[index].id
          deleteUser(id).then(res=> {
           this.loadUserListPage();
          })
        })
       },
       //删除角色记录
       deleteRole(index){
          const id=this.roleData[index].id
          deleteRole(id).then(res=>{
             this.loadRoleListPage();
          })
       },
       //删除权限记录
       deletePower(index){
          const id=this.powerData[index].id
          deletePower(id).then(res=>{
             this.loadPowerListPage();
          })
       },
       //跳转用户详情页面
       showUserDeatil(index){
         const id=this.userData[index].id
         this.$router.push('/UserManage/userDetail?id='+id)
      },
       //初始化用户密码
       initPassword(index){
          this.$confirm('是否初始化密码?',{  
          confirmButtonText:'确定',      
          cancelButtonText:'取消',      
          center:true
        }).then(() => {
            const id=this.userData[index].id
            initUserPassword(id).then(res=>{
              this.loadUserListPage();
              this.$message({
              type: 'success',
              message: '初始化密码成功!'
             });
          })
        })
       }
   }
}
</script>