import Vue from 'vue'
import Router from 'vue-router'
import ModelManagement from '@/components/module/ModelManagement.vue'
import Add from '@/components/module/MoudleAdd.vue'
import Modelupdate from '@/components/module/Modelupdate.vue'
import Details from '@/components/module/Details.vue'
import Mouduleupdate from '@/components/module/Moduleupdate.vue'
import FunctionAdd from '@/components/module/FunctionAdd.vue'
import Parameterupdate from '@/components/module/Parameterupdate.vue'
import FunctionDetails from '@/components/module/FunctionDetails.vue'

import UserManage from '@/components/user/UserManage.vue'
import AddUser from '@/components/user/AddUser.vue'
import UpdateUser from '@/components/user/UpdateUser.vue'
import UserDetail from '@/components/user/UserDetail.vue'
import AddRole from '@/components/user/AddRole.vue'
import AddPower from '@/components/user/AddPower.vue'

import GTDManage from '@/components/data/GTD/GTDManage.vue'
import NewsManage from '@/components/data/news/NewsManage.vue'
import CheckNews from '@/components/data/news/CheckNews.vue'

import EventTiming from '@/components/eventTiming/EventTimingAnalysis.vue'
import EconomyEvent from '@/components/economy/EconomyEventAnalysis.vue'
import AntiTerrorismEvent from '@/components/anti-terrorism/Anti-terrorismEventAnalysis.vue'
import PoliticsEvent from '@/components/politics/PoliticsEventAnalysis.vue'

Vue.use(Router)

export default new Router({
  routes: [
          {
            path:'/',
            component:()=> import('@/components/index/Index.vue')
           },
          {
            path:'/ModelManagement',
            component:ModelManagement
          },
          {
              path:'/ModelManagement/add',
              component:Add
          },
          {
              path:'/ModelManagement/update',
              component:Modelupdate
          },
          {
              path:'/ModelManagement/Details',
              component:Details
          },
          {
              path:'/ModelManagement/Details/Mouduleupdate',
              component:Mouduleupdate
          },
          {
              path:'/ModelManagement/Details/FunctionAdd',
              component:FunctionAdd
          },
          {
              path:'/ModelManagement/Details/Parameterupdate',
              component:Parameterupdate
          },
          {
              path:'/ModelManagement/Details/FunctionDetails',
              component:FunctionDetails
          },
          {
             path:'/UserManage',
             component:UserManage
          },
          {
            path:'/UserManage/addUser',
            component:AddUser
          },
          {
            path:'/UserManage/updateUser',
            component:UpdateUser
          },
          {
            path:'/UserManage/userDetail',
            component:UserDetail
          },
          {
            path:'/UserManage/addRole',
            component:AddRole
          },
          {
            path:'/UserManage/addPower',
            component:AddPower
          },
          {
            path:'/GTD/GTDManage',
            component:GTDManage
          },
          {
            path:'/News/newsManage',
            component:NewsManage
          },
          {
            path:'/News/newsManage/checkNews',
            component:CheckNews
          },
          {
            path:'/EventTiming',
            component:EventTiming
          },
          {
            path:'/EconomyEvent',
            component:EconomyEvent
          },
          {
            path:'/AntiTerrorismEvent',
            component:AntiTerrorismEvent
          },
          {
            path:'/PoliticsEvent',
            component:PoliticsEvent
          }     
     ]
})