import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
          {
            path:'/',
            component:() => import('@/components/index/Index.vue')
           },
           {
            path:'/login',
            component:() => import('@/components/index/Login.vue')
           },
           {
            path:'/report',
            component:() => import('@/components/SystemSettings/report/Report.vue')
           },
           {
            path:'/zone',
            component:() => import('@/components/SystemSettings/zonenAalysis/ZoneAnalysis.vue')
           },
           {
            path:'/stage',
            component:() => import('@/components/SystemSettings/stage/Stage.vue')
           },
           {
            path:'/calculation',
            component:() => import('@/components/SystemSettings/calculation/Calculation.vue')
           },
           {
            path:'/politicalevents',
            component:() => import('@/components/eventManagement/PoliticalEvents.vue')
           },
           {
            path:'/economicevents',
            component:() => import('@/components/eventManagement/EconomicEvents.vue')
           },{
            path:'/counterterrorismincidents',
            component:() => import('@/components/eventManagement/CounterTerrorismIncidents.vue')
           },
          {
            path:'/ModelManagement',
            component:() => import('@/components/SystemSettings/module/ModelManagement.vue')
          },
          {
              path:'/ModelManagement/add',
              component:() => import('@/components/SystemSettings/module/MoudleAdd.vue')
          },
          {
              path:'/ModelManagement/update',
              component:() => import('@/components/SystemSettings/module/Modelupdate.vue')
          },
          {
              path:'/ModelManagement/Details',
              component:() => import('@/components/SystemSettings/module/Details.vue')
          },
          {
              path:'/ModelManagement/Details/Mouduleupdate',
              component:() => import('@/components/SystemSettings/module/Moduleupdate.vue')
          },
          {
              path:'/ModelManagement/Details/FunctionAdd',
              component:() => import('@/components/SystemSettings/module/FunctionAdd.vue')
          },
          {
              path:'/ModelManagement/Details/Parameterupdate',
              component:() => import('@/components/SystemSettings/module/Parameterupdate.vue')
          },
          {
              path:'/ModelManagement/Details/FunctionDetails',
              component:() => import('@/components/SystemSettings/module/FunctionDetails.vue')
          },
		      {
            path:'/region',
            component:() => import('@/components/region/Region.vue')
          },
          {
            path:'/region/details',
            component:() => import('@/components/region/regionDetails.vue')
           },
           {
             path:'/region/modify',
             component:() => import('@/components/region/argumentModify.vue')
           },
           {
            path:'/region/demesne',
            component:() => import('@/components/region/Demesne.vue')
           },
           {
              path:'/expert',
              component:() => import('@/components/expertparameters/ExpertList.vue')
           },
           {
              path:'/expert/details',
              component:() => import('@/components/expertparameters/expertDetails.vue')
           },{
             path:'/UserManage',
             component:()=>import('@/components/user/UserManage.vue')
          },
          {
            path:'/UserManage/addUser',
            component:()=>import('@/components/user/AddUser.vue')
          },
          {
            path:'/UserManage/updateUser',
            component:()=>import('@/components/user/UpdateUser.vue')
          },
          {
            path:'/UserManage/userDetail',
            component:()=>import('@/components/user/UserDetail.vue')
          },
          {
            path:'/UserManage/addRole',
            component:()=>import('@/components/user/AddRole.vue')
          },
          {
            path:'/UserManage/addPower',
            component:()=>import('@/components/user/AddPower.vue')
          },
          {
            path:'/GTD/GTDManage',
            component:()=>import('@/components/data/GTD/GTDManage.vue')
          },
          {
            path:'/News/newsManage',
            component:()=>import('@/components/data/news/NewsManage.vue')
          },
          {
            path:'/News/newsManage/checkNews',
            component:()=>import('@/components/data/news/CheckNews.vue')
          },
          {
            path:'/EventTiming',
            component:()=>import('@/components/eventTiming/EventTimingAnalysis.vue')
          },
          {
            path:'/EconomyEvent',
            component:()=>import('@/components/economy/EconomyEventAnalysis.vue')
          },
          {
            path:'/AntiTerrorismEvent',
            component:()=>import('@/components/anti-terrorism/Anti-terrorismEventAnalysis.vue')
          },
          {
            path:'/AntiTerrorismEvent/Anti-terrorismEventList',
            component:()=>import('@/components/anti-terrorism/Anti-terrorismEventList.vue')
          },
          {
            path:'/PoliticsEvent',
            component:()=>import('@/components/politics/PoliticsEventAnalysis.vue')
          },
          {
            path:'/PoliticsEvent/PoliticsEventList',
            component:()=>import('@/components/politics/PoliticsEventList.vue')
          },
          {
            path:'/NewsList',
            component:()=>import('@/components/news/NewsList.vue')
          },
          {
            path:'/NewsList/NewsDetail',
            component:()=>import('@/components/news/NewsDetail.vue')
          },
          {
            path:'/Log/OpreateLog',
            component:()=>import('@/components/log/OpreateLog.vue')
          },
          {
            path:'/Log/MessageLog',
            component:()=>import('@/components/log/MessageLog.vue')
          },
          {
            path:'/ReportContent',
            component:()=>import('@/components/report/ReportContent.vue')
          },
          {
            path:'/ReportContent/specialReport',
            component:()=>import('@/components/report/SpecialReport.vue')
          },
          {
            path:'/Error/error404',
            component:()=>import('@/components/error/error404.vue')
          },
          {
            path:'/Error/error500',
            component:()=>import('@/components/error/error500.vue')
          }
     ]
})