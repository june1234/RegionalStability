/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/components/layout/Layout.vue'),
      children: [{
        path: '',
        name: 'index',
        component: () => import('@/components/layout/index/index.vue')
      },
      {
        path: 'region',
        name: 'region',
        component: () => import('@/components/layout/region')
      },
      {
        path: 'region/details',
        name: 'regionDetails',
        component: () => import('@/components/layout/region/regionDetails.vue')
      },
      {
        path: 'region/modify',
        name: 'regionModify',
        component: () => import('@/components/layout/region/argumentModify.vue')
      },
      {
        path: 'region/demesne',
        name: 'regionDemesne',
        component: () => import('@/components/layout/region/Demesne.vue')
      },
      {
        path: 'Report',
        name: 'Report',
        component: () => import('@/components/layout/report')
      },
      {
        path: 'ReportContent/specialReport',
        name: 'ReportContentSpecialReport',
        component: () => import('@/components/layout/report/SpecialReport.vue')
      },
      {
        path: 'NewsList',
        name: 'newsList',
        component: () => import('@/components/layout/news')
      },
      {
        path: 'NewsList/NewsDetail',
        name: 'newsListDetail',
        component: () => import('@/components/layout/news/NewsDetail.vue')
      },
      {
        path: 'EconomyEvent',
        name: 'EconomyEvent',
        component: () => import('@/components/layout/economy')
      },
      {
        path: 'AntiTerrorismEvent',
        name: 'AntiTerrorismEvent',
        component: () => import('@/components/layout/anti-terrorism')
      },
      {
        path: 'AntiTerrorismEvent/Anti-terrorismEventList',
        name: 'Anti-terrorismEventList',
        component: () => import('@/components/layout/anti-terrorism/Anti-terrorismEventList.vue')
      },
      {
        path: 'PoliticsEvent',
        name: 'PoliticsEvent',
        component: () => import('@/components/layout/politics')
      },
      {
        path: 'PoliticsEvent/PoliticsEventList',
        name: 'PoliticsEventList',
        component: () => import('@/components/layout/politics/PoliticsEventList.vue')
      },
      {
        path: 'EventTiming',
        name: 'EventTiming',
        component: () => import('@/components/layout/eventTiming')
      }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      // redirect: 'UserManage',
      component: () => import('@/components/admin/admin.vue'),
      children: [
        {
          path: 'UserManage',
          name: 'UserManage',
          component: () => import('@/components/admin/user')
        },
        {
          path: 'UserManage/addUser',
          name: 'addUser',
          component: () => import('@/components/admin/user/AddUser.vue')
        },
        {
          path: 'UserManage/updateUser',
          name: 'updateUser',
          component: () => import('@/components/admin/user/UpdateUser.vue')
        },
        {
          path: 'UserManage/userDetail',
          name: 'userDetail',
          component: () => import('@/components/admin/user/UserDetail.vue')
        },
        {
          path: 'UserManage/addRole',
          name: 'addRole',
          component: () => import('@/components/admin/user/AddRole.vue')
        },
        {
          path: 'UserManage/addPower',
          name: 'addPower',
          component: () => import('@/components/admin/user/AddPower.vue')
        },
        {
          path: 'GTD/GTDManage',
          name: 'GTDManage',
          component: () => import('@/components/admin/data/GTD')
        },
        {
          path: 'WordBank',
          name: 'WordBank',
          component: () => import('@/components/admin/data/WordBank')
        },
        {
          path: 'News/newsManage',
          name: 'newsManage',
          component: () => import('@/components/admin/data/News')
        },
        {
          path: 'News/newsManage/checkNews',
          name: 'checkNews',
          component: () => import('@/components/admin/data/News/CheckNews.vue')
        },
        {
          path: 'report',
          name: 'report',
          component: () => import('@/components/admin/SystemSettings/report')
        },
        {
          path: 'zone',
          name: 'zone',
          component: () => import('@/components/admin/SystemSettings/zonenAalysis')
        },
        {
          path: 'stage',
          name: 'stage',
          component: () => import('@/components/admin/SystemSettings/stage')
        },
        {
          path: 'calculation',
          name: 'calculation',
          component: () => import('@/components/admin/SystemSettings/calculation')
        },
        {
          path: 'ModelManagement',
          name: 'ModelManagement',
          component: () => import('@/components/admin/SystemSettings/module')
        },
        {
          path: 'ModelManagement/add',
          name: 'addModelManagement',
          component: () => import('@/components/admin/SystemSettings/module/MoudleAdd.vue')
        },
        {
          path: 'ModelManagement/update',
          name: 'updateModelManagement',
          component: () => import('@/components/admin/SystemSettings/module/Modelupdate.vue')
        },
        {
          path: 'ModelManagement/Details',
          name: 'ModelManagementDetails',
          component: () => import('@/components/admin/SystemSettings/module/Details.vue')
        },
        {
          path: 'ModelManagement/Details/Mouduleupdate',
          name: 'Mouduleupdate',
          component: () => import('@/components/admin/SystemSettings/module/Moduleupdate.vue')
        },
        {
          path: 'ModelManagement/Details/FunctionAdd',
          name: 'FunctionAdd',
          component: () => import('@/components/admin/SystemSettings/module/FunctionAdd.vue')
        },
        {
          path: 'ModelManagement/Details/Parameterupdate',
          name: 'Parameterupdate',
          component: () => import('@/components/admin/SystemSettings/module/Parameterupdate.vue')
        },
        {
          path: 'ModelManagement/Details/FunctionDetails',
          name: 'FunctionDetails',
          component: () => import('@/components/admin/SystemSettings/module/FunctionDetails.vue')
        },
        {
          path: 'politicalevents',
          name: 'politicalevents',
          component: () => import('@/components/admin/eventManagement/PoliticalEvents')
        },
        {
          path: 'economicevents',
          name: 'economicevents',
          component: () => import('@/components/admin/eventManagement/EconomicEvents')
        }, 
        {
          path: 'counterterrorismincidents',
          name: 'counterterrorismincidents',
          component: () => import('@/components/admin/eventManagement/CounterTerrorismIncidents')
        },
        {
          path: 'Log/OpreateLog',
          name: 'OpreateLog',
          component: () => import('@/components/admin/log/OpreateLog')
        },
        {
          path: 'Log/MessageLog',
          name: 'MessageLog',
          component: () => import('@/components/admin/log/MessageLog')
        },
        {
          path: 'expert',
          name: 'expert',
          component: () => import('@/components/admin/expertparameters')
        },
        {
          path: 'expert/details',
          name: 'expertDetails',
          component: () => import('@/components/admin/expertparameters/expertDetails.vue')
        }
      ]
    },
    {
      path: '/Error/error404',
      name: '404',
      component: () => import('@/components/error/error404.vue')
    },
    {
      path: '/Error/error500',
      name: '500',
      component: () => import('@/components/error/error500.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login.vue')
    }
  ]
})
