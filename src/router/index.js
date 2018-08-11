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
          }       
     ]
})