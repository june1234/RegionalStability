/* eslint-disable no-trailing-spaces */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: resolve => require(['@/components/layout/Layout.vue'], resolve),
      children: [{
        path: '',
        name: 'index',
        component: resolve => require(['@/components/layout/index/Index.vue'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'region',
        name: 'region',
        component: resolve => require(['@/components/layout/region'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'Report',
        name: 'Report',
        component: resolve => require(['@/components/layout/report'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'Report/specialReport',
        name: 'ReportSpecialReport',
        component: resolve => require(['@/components/layout/report/specialReport.vue'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'NewsList',
        name: 'newsList',
        component: resolve => require(['@/components/layout/news'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'NewsList/NewsDetail',
        name: 'newsListDetail',
        component: resolve => require(['@/components/layout/news/NewsDetail.vue'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'EconomyEvent',
        name: 'EconomyEvent',
        component: resolve => require(['@/components/layout/economy'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'EconomyEvent/economyEventList',
        name: 'economyEventList',
        component: resolve => require(['@/components/layout/economy/economyEventList.vue'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'AntiTerrorismEvent',
        name: 'AntiTerrorismEvent',
        component: resolve => require(['@/components/layout/anti-terrorism'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'AntiTerrorismEvent/Anti-terrorismEventList',
        name: 'Anti-terrorismEventList',
        component: resolve => require(['@/components/layout/anti-terrorism/Anti-terrorismEventList.vue'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'PoliticsEvent',
        name: 'PoliticsEvent',
        component: resolve => require(['@/components/layout/politics'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'PoliticsEvent/PoliticsEventList',
        name: 'PoliticsEventList',
        component: resolve => require(['@/components/layout/politics/PoliticsEventList.vue'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'EventTiming',
        name: 'EventTiming',
        component: resolve => require(['@/components/layout/eventTiming'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'OriginalEvents',
        name: 'OriginalEvents',
        component: resolve => require(['@/components/layout/originalEvent'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'MacroData',
        name: 'MacroData',
        component: resolve => require(['@/components/layout/MacroData'], resolve),
        meta: {
          keepAlive: true
        }
      }
      ]
    },
    {
      path: '/Error/error404',
      name: '404',
      component: () => import('@/components/error/error404.vue'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Error/error500',
      name: '500',
      component: () => import('@/components/error/error500.vue'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/Login.vue'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: resolve => require(['@/components/admin/admin.vue'], resolve),
      children: [{
        path: '',
        name: 'index',
        component: resolve => require(['@/components/admin/index'], resolve),
        meta: {
          keepAlive: true
        }
      }, {
        path: 'UserManage',
        name: 'UserManage',
        component: resolve => require(['@/components/admin/user'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'UserManage/userDetail',
        name: 'userDetail',
        component: resolve => require(['@/components/admin/user/UserDetail.vue'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'GTDManage',
        name: 'GTDManage',
        component: resolve => require(['@/components/admin/data/GTD'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'newsManage',
        name: 'newsManage',
        component: resolve => require(['@/components/admin/data/News'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'politicalevents',
        name: 'politicalevents',
        component: resolve => require(['@/components/admin/eventManagement/politicalEvents'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'economicevents',
        name: 'economicevents',
        component: resolve => require(['@/components/admin/eventManagement/economicEvents'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'counterterrorismincidents',
        name: 'counterterrorismincidents',
        component: resolve => require(['@/components/admin/eventManagement/counterTerrorismincidents'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'OpreateLog',
        name: 'OpreateLog',
        component: resolve => require(['@/components/admin/log/OpreateLog'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'expert',
        name: 'expert',
        component: resolve => require(['@/components/admin/expertparameters'], resolve),
        meta: {
          keepAlive: true
        }
      }
      ]
    }
  ]
})
